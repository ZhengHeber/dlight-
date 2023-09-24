import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class VolcanoRound {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M16.49 8h-4.14c-.82 0-1.55.5-1.86 1.26L9 13H7.3c-.79 0-1.51.47-1.83 1.19l-2.22 5C2.66 20.51 3.63 22 5.08 22h14.27c1.33 0 2.29-1.27 1.92-2.55l-2.86-10A1.992 1.992 0 0 0 16.49 8zM14 1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1zm5.66 2.34a.996.996 0 0 0-1.41 0l-1.41 1.41a.996.996 0 1 0 1.41 1.41l1.41-1.41a.996.996 0 0 0 0-1.41zm-8.49 1.42L9.76 3.34a.996.996 0 1 0-1.41 1.41l1.41 1.41c.39.39 1.02.39 1.41 0a.984.984 0 0 0 0-1.4z\"/>")
      .name("VolcanoRound")
  }
}

export default VolcanoRound as Pretty as Typed<DLightIconType, HTMLSpanElement>
