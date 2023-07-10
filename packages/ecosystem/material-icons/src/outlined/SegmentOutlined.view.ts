import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class SegmentOutlined extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M9 18h12v-2H9v2zM3 6v2h18V6H3zm6 7h12v-2H9v2z\"/>")
      .name("SegmentOutlined")
  }
}

export default SegmentOutlined as any as Typed<DLightIconType>