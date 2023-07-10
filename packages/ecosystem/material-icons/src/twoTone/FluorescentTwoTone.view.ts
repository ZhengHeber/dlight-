import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class FluorescentTwoTone extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M7 11h10v2H7z\" opacity=\".3\"/><path d=\"M5 15h14V9H5v6zm2-4h10v2H7v-2zm4-9h2v3h-2zm6.286 4.399 1.79-1.803 1.42 1.41-1.79 1.802zM11 19h2v3h-2zm6.29-1.29 1.79 1.8 1.42-1.42-1.8-1.79zM3.495 6.01l1.407-1.408L6.69 6.391 5.284 7.798zm-.003 12.066 1.803-1.79 1.409 1.42-1.803 1.79z\"/>")
      .name("FluorescentTwoTone")
  }
}

export default FluorescentTwoTone as any as Typed<DLightIconType>