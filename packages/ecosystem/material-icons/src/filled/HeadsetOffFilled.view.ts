import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class HeadsetOffFilled {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M12 4c3.87 0 7 3.13 7 7v2h-2.92L21 17.92V11a9 9 0 0 0-9-9c-1.95 0-3.76.62-5.23 1.68l1.44 1.44A6.914 6.914 0 0 1 12 4zM2.27 1.72 1 3l3.33 3.32A8.899 8.899 0 0 0 3 11v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-1.17.29-2.26.79-3.22L15 17v4h3c.3 0 .59-.06.86-.14L21 23l1.27-1.27-20-20.01z\"/>")
      .name("HeadsetOffFilled")
  }
}

export default HeadsetOffFilled as Pretty as Typed<DLightIconType, HTMLSpanElement>
