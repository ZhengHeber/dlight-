import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class ShieldMoonTwoTone {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M6 6.39v4.7c0 4 2.55 7.7 6 8.83 3.45-1.13 6-4.82 6-8.83v-4.7l-6-2.25-6 2.25zm6.21 1.22c-.46 1.23-.39 2.64.32 3.86a4.51 4.51 0 0 0 3.18 2.2c.34.06.49.47.26.74-1.84 2.17-5.21 2.1-6.96-.07-2.19-2.72-.65-6.72 2.69-7.33.34-.06.63.27.51.6z\" opacity=\".3\"/><path d=\"M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm6 9.09c0 4-2.55 7.7-6 8.83-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25 6 2.25v4.7z\"/><path d=\"M9.01 14.33c1.75 2.17 5.12 2.24 6.96.07.23-.27.08-.68-.26-.74a4.491 4.491 0 0 1-3.18-2.2 4.503 4.503 0 0 1-.32-3.86.453.453 0 0 0-.51-.6c-3.34.62-4.89 4.61-2.69 7.33z\"/>")
      .name("ShieldMoonTwoTone")
  }
}

export default ShieldMoonTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>
