import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class DeskTwoTone {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M16 8h4v2h-4zm0 4h4v2h-4z\" opacity=\".3\"/><path d=\"M2 6v12h2V8h10v10h2v-2h4v2h2V6H2zm18 8h-4v-2h4v2zm0-4h-4V8h4v2z\"/>")
      .name("DeskTwoTone")
  }
}

export default DeskTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>
