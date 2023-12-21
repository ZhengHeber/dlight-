import { type types as t } from "@babel/core"
import { type DependencyProp, type CompParticle } from "@dlightjs/reactivity-parser"
import BaseGenerator from "./BaseGenerator"

export default class CompGenerator extends BaseGenerator {
  run() {
    const compParticle = this.viewParticle as CompParticle

    const dlNodeName = this.generateNodeName()

    this.addInitStatement(this.declareCompNode(dlNodeName, compParticle))

    const { content, props, children } = compParticle
    // ---- Resolve content
    if (content) {
      const { value, dependencyIndexArr } = content
      if (dependencyIndexArr && dependencyIndexArr.length > 0) {
        this.addUpdateStatements(dependencyIndexArr, [this.setCompContent(dlNodeName, value)])
      }
    }

    // ---- Resolve props
    if (props) {
      Object.entries(props).forEach(([key, { value, dependencyIndexArr }]) => {
        if (dependencyIndexArr && dependencyIndexArr.length > 0) {
          this.addUpdateStatements(dependencyIndexArr, [this.setCompProp(dlNodeName, key, value)])
        }
      })
    }

    return dlNodeName
  }

  private generateCompProps(props?: Record<string, DependencyProp>) {
    if (!props || Object.keys(props).length === 0) return this.t.nullLiteral()
    return (
      this.t.objectExpression(
        Object.entries(props).map(([key, { value }]) => (
          this.t.objectProperty(
            this.t.identifier(key),
            value
          )
        ))
      )
    )
  }

  private generateCompContent(content?: DependencyProp) {
    if (!content) return this.t.nullLiteral()
    return content.value
  }

  /**
   * const ${dlNodeName} = new ${tag}(props, content, children)
   */
  private declareCompNode(dlNodeName: string, compParticle: CompParticle) {
    const { tag, content, props, children } = compParticle

    return (
      this.t.variableDeclaration("const", [
        this.t.variableDeclarator(
          this.t.identifier(dlNodeName),
          this.t.newExpression(
            tag, [
              this.generateCompProps(props),
              this.generateCompContent(content)
            ])
        )
      ])
    )
  }

  /**
   * ${dlNodeName}._$setContent(${value})
   */
  private setCompContent(dlNodeName: string, value: t.Expression) {
    return (
      this.t.expressionStatement(
        this.t.callExpression(
          this.t.memberExpression(
            this.t.identifier(dlNodeName),
            this.t.identifier("_$setContent")
          ),
          [value]
        )
      )
    )
  }

  /**
   * ${dlNodeName}._$setProp(${key}, ${value})
   */
  private setCompProp(dlNodeName: string, key: string, value: t.Expression) {
    return (
      this.t.expressionStatement(
        this.t.callExpression(
          this.t.memberExpression(
            this.t.identifier(dlNodeName),
            this.t.identifier("_$setProp")
          ),
          [this.t.stringLiteral(key), value]
        )
      )
    )
  }
}
