import DLight, { DLNodeType, loopNodes } from "@dlightjs/dlight"
import { geneId } from "../utils/utils"

export class CustomNode extends DLight.CustomNode {
  _$id?: string

  _$init() {
    super._$init()
    this._$id = geneId.call(this)
    const loopFunc = (node: any) => {
      if (node._$nodeType === DLNodeType.HTML) {
        if (!window.elementMap) window.elementMap = {}
        if (!window.elementMap[this._$id!]) window.elementMap[this._$id!] = []
        window.elementMap[this._$id!].push(node._$el)
        if (!window.elementIdMap) window.elementIdMap = new Map()
        if (!window.elementIdMap.get(node._$el)) window.elementIdMap.set(node._$el, this._$id!)
      }
    }
    loopNodes(this._$nodes, loopFunc)
  }

  _$updateProperty(key: string, value: any): void {
    super._$updateProperty(key, value)
    window.sendCurrentProps?.()
  }

  render(idOrEl: string | HTMLElement) {
    super.render(idOrEl)
    window.entryNode = this
    window.updateNodes?.()
  }
}