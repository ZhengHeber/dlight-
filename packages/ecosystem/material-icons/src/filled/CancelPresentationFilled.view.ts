import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class CancelPresentationFilled {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M21 19.1H3V5h18v14.1zM21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\"/><path d=\"M14.59 8 12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41z\"/>")
      .name("CancelPresentationFilled")
  }
}

export default CancelPresentationFilled as Pretty as Typed<DLightIconType, HTMLSpanElement>
