import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class RotateRightTwoTone {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M19.93 11a7.906 7.906 0 0 0-1.62-3.89l-1.42 1.42c.54.75.88 1.6 1.02 2.47h2.02zM11 1v3.07C7.06 4.56 4 7.92 4 12s3.05 7.44 7 7.93v-2.02c-2.84-.48-5-2.94-5-5.91s2.16-5.43 5-5.91V10l4.55-4.45L11 1zm4.46 15.87c-.75.54-1.59.89-2.46 1.03v2.02c1.39-.17 2.74-.71 3.9-1.61l-1.44-1.44zm2.85.02c.9-1.16 1.45-2.5 1.62-3.89h-2.02c-.14.87-.48 1.72-1.02 2.48l1.42 1.41z\"/>")
      .name("RotateRightTwoTone")
  }
}

export default RotateRightTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>
