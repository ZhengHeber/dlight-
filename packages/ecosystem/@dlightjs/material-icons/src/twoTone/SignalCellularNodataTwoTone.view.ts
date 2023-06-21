import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class SignalCellularNodataTwoTone extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M22 13h-9v9H2L22 2v11zm-1 2.41L19.59 14l-2.09 2.09L15.41 14 14 15.41l2.09 2.09L14 19.59 15.41 21l2.09-2.08L19.59 21 21 19.59l-2.08-2.09L21 15.41z\"/>")
      .name("SignalCellularNodataTwoTone")
  }
}

export default SignalCellularNodataTwoTone as any as Typed<DLightIconType>