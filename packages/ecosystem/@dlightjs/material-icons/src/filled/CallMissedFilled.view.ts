import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class CallMissedFilled extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M19.59 7 12 14.59 6.41 9H11V7H3v8h2v-4.59l7 7 9-9z\"/>")
      .name("CallMissedFilled")
  }
}

export default CallMissedFilled as any as Typed<DLightIconType>