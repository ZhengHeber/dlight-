import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class WaterDropSharp extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8zm1 16.91c-.32.06-.65.09-1 .09-2.69 0-4.88-1.94-5-5h1.5c.08 2.07 1.5 3.5 3.5 3.5.35 0 .69-.04 1-.13v1.54z\"/>")
      .name("WaterDropSharp")
  }
}

export default WaterDropSharp as any as Typed<DLightIconType>