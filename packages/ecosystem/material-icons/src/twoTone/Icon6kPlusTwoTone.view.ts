import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class Icon6kPlusTwoTone {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M7.5 12.5h1V14h-1z\" opacity=\".3\"/><path d=\"M5 19h14v-6.5h-1.5V14h-1v-1.5H15v-1h1.5V10h1v1.5H19V5H5v14zm6-10h1.5v2.25L14.25 9H16l-2.25 3L16 15h-1.75l-1.75-2.25V15H11V9zm-5 1c0-.55.45-1 1-1h3v1.5H7.5v1H9c.55 0 1 .45 1 1V14c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-4z\" opacity=\".3\"/><path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 8.5h-1.5V10h-1v1.5H15v1h1.5V14h1v-1.5H19V19H5V5h14v6.5z\"/><path d=\"M12.5 12.75 14.25 15H16l-2.25-3L16 9h-1.75l-1.75 2.25V9H11v6h1.5zM7 15h2c.55 0 1-.45 1-1v-1.5c0-.55-.45-1-1-1H7.5v-1H10V9H7c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm.5-2.5h1V14h-1v-1.5z\"/>")
      .name("Icon6kPlusTwoTone")
  }
}

export default Icon6kPlusTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>
