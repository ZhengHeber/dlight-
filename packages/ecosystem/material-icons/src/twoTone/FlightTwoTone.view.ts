import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class FlightTwoTone {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"m10 19-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19z\"/>")
      .name("FlightTwoTone")
  }
}

export default FlightTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>
