import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class TaskRound {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"m19.41 7.41-4.83-4.83c-.37-.37-.88-.58-1.41-.58H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8.83c0-.53-.21-1.04-.59-1.42zm-9.18 9.88-2.12-2.12a.996.996 0 1 1 1.41-1.41l1.41 1.41 3.54-3.54a.996.996 0 1 1 1.41 1.41l-4.24 4.24c-.38.4-1.02.4-1.41.01zM14 9c-.55 0-1-.45-1-1V3.5L18.5 9H14z\"/>")
      .name("TaskRound")
  }
}

export default TaskRound as Pretty as Typed<DLightIconType, HTMLSpanElement>
