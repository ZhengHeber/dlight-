import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class TakeoutDiningOutlined {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"m7.79 18-.51-7h9.46l-.51 7H7.79zM9.83 5h4.33l2.8 2.73L16.87 9H7.12l-.09-1.27L9.83 5zM22 7.46l-1.41-1.41L19 7.63l.03-.56L14.98 3H9.02L4.97 7.07l.03.5-1.59-1.56L2 7.44l3.23 3.11.7 9.45h12.14l.7-9.44L22 7.46z\"/>")
      .name("TakeoutDiningOutlined")
  }
}

export default TakeoutDiningOutlined as Pretty as Typed<DLightIconType, HTMLSpanElement>
