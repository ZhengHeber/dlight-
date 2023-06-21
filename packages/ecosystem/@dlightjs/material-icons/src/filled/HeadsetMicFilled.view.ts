import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class HeadsetMicFilled extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M12 1a9 9 0 0 0-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h4v1h-7v2h6c1.66 0 3-1.34 3-3V10a9 9 0 0 0-9-9z\"/>")
      .name("HeadsetMicFilled")
  }
}

export default HeadsetMicFilled as any as Typed<DLightIconType>