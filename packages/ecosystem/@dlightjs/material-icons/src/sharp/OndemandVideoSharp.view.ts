import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class OndemandVideoSharp extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M23 3H1v16h7v2h8v-2h6.99L23 3zm-2 14H3V5h18v12zm-5-6-7 4V7l7 4z\"/>")
      .name("OndemandVideoSharp")
  }
}

export default OndemandVideoSharp as any as Typed<DLightIconType>