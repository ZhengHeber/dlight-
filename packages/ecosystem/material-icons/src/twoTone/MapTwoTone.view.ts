import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class MapTwoTone {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"m5 18.31 3-1.16V5.45L5 6.46zm11 .24 3-1.01V5.69l-3 1.17z\" opacity=\".3\"/><path d=\"m20.5 3-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM8 17.15l-3 1.16V6.46l3-1.01v11.7zm6 1.38-4-1.4V5.47l4 1.4v11.66zm5-.99-3 1.01V6.86l3-1.16v11.84z\"/>")
      .name("MapTwoTone")
  }
}

export default MapTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>
