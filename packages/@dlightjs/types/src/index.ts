import { type Typed } from "./customTag"
import { type DLightHtmlTagFunc } from "./htmlTag"

export const Static = null as any
export const Env = null as any
export const env = null as any
export const tag: (tag: any) => Typed<{}> = null as any
export const htmlTag: (tag: any) => DLightHtmlTagFunc = null as any
export const required = null as any
export const SubView = null as any

export { _ } from "./expressionTag"
export * from "./htmlTag"
export { type Typed, type RequiredProp, Prop, type UnPropWrapper, type UnTyped, type PropWrapper } from "./customTag"
