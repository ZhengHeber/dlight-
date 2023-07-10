import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class MonitorSharp extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M22 3H2v15h5l-1 1v2h12v-2l-1-1h5V3zm-2 13H4V5h16v11z\"/>")
      .name("MonitorSharp")
  }
}

export default MonitorSharp as any as Typed<DLightIconType>