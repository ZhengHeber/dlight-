import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class LockResetSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M13 3a9 9 0 0 0-9 9H1l4 4 4-4H6c0-3.86 3.14-7 7-7s7 3.14 7 7-3.14 7-7 7c-1.9 0-3.62-.76-4.88-1.99L6.7 18.42A8.982 8.982 0 0 0 13 21a9 9 0 0 0 0-18zm2 8v-1c0-1.1-.9-2-2-2s-2 .9-2 2v1h-1v5h6v-5h-1zm-1 0h-2v-1c0-.55.45-1 1-1s1 .45 1 1v1z\"/>")
      .name("LockResetSharp")
  }
}

export default LockResetSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
