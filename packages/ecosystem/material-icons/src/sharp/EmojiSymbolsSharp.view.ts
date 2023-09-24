import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class EmojiSymbolsSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M3 2h8v2H3zm3 9h2V7h3V5H3v2h3zm6.404 9.182 7.778-7.778 1.414 1.414-7.778 7.778z\"/><circle cx=\"14.5\" cy=\"14.5\" r=\"1.5\"/><circle cx=\"19.5\" cy=\"19.5\" r=\"1.5\"/><path d=\"M15.5 11A2.5 2.5 0 0 0 18 8.5V4h3V2h-4v4.51c-.42-.32-.93-.51-1.5-.51a2.5 2.5 0 0 0 0 5zm-5.76 4.96-1.41 1.41-.71-.71.35-.35a2.499 2.499 0 0 0-1.77-4.27 2.499 2.499 0 0 0-1.77 4.27l.35.35-1.06 1.06c-.98.98-.98 2.56 0 3.54.5.5 1.14.74 1.78.74s1.28-.24 1.77-.73l1.06-1.06 1.41 1.41 1.41-1.41-1.41-1.41 1.41-1.41-1.41-1.43zM5.85 14.2c.12-.12.26-.15.35-.15s.23.03.35.15c.19.2.19.51 0 .71l-.35.35-.35-.36a.501.501 0 0 1 0-.7zm0 5.65c-.12.12-.26.15-.35.15s-.23-.03-.35-.15a.513.513 0 0 1 0-.71l1.06-1.06.71.71-1.07 1.06z\"/>")
      .name("EmojiSymbolsSharp")
  }
}

export default EmojiSymbolsSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
