import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class KeyboardArrowRightOutlined extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z\"/>")
      .name("KeyboardArrowRightOutlined")
  }
}

export default KeyboardArrowRightOutlined as any as Typed<DLightIconType>