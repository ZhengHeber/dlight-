import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class ShopTwoTwoTone {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M7 7v9h14V7H7zm5 8V8l5.5 3-5.5 4z\" opacity=\".3\"/><path d=\"M3 9H1v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2H3V9zm15-4V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5h-5zm-6-2h4v2h-4V3zm9 13H7V7h14v9zm-9-1 5.5-4L12 8z\"/>")
      .name("ShopTwoTwoTone")
  }
}

export default ShopTwoTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>
