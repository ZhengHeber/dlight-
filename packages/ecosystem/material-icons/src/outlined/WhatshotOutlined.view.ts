import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class WhatshotOutlined {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M11.57 13.16c-1.36.28-2.17 1.16-2.17 2.41 0 1.34 1.11 2.42 2.49 2.42 2.05 0 3.71-1.66 3.71-3.71 0-1.07-.15-2.12-.46-3.12-.79 1.07-2.2 1.72-3.57 2zM13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM12 20c-3.31 0-6-2.69-6-6 0-1.53.3-3.04.86-4.43a5.582 5.582 0 0 0 3.97 1.63c2.66 0 4.75-1.83 5.28-4.43A14.77 14.77 0 0 1 18 14c0 3.31-2.69 6-6 6z\"/>")
      .name("WhatshotOutlined")
  }
}

export default WhatshotOutlined as Pretty as Typed<DLightIconType, HTMLSpanElement>
