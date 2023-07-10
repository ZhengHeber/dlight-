import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class UpdateDisabledRound extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M20.49 20.49 3.51 3.51A.996.996 0 1 0 2.1 4.92l2.31 2.31C3.57 8.56 3.05 10.09 3 11.74A9.003 9.003 0 0 0 12 21c1.76 0 3.39-.52 4.78-1.39l2.29 2.29c.39.39 1.02.39 1.41 0 .4-.39.4-1.02.01-1.41zm-9.77-1.6c-2.78-.49-5.04-2.71-5.58-5.47-.34-1.72-.03-3.36.72-4.73l9.46 9.46a7.075 7.075 0 0 1-4.6.74zM13 8v2.17l-2-2V8c0-.55.45-1 1-1s1 .45 1 1zm7.72 6.23c-.23.92-.61 1.77-1.1 2.55l-1.47-1.47c.27-.5.49-1.03.63-1.59.11-.42.51-.72.95-.72.65 0 1.15.61.99 1.23zM7.24 4.41a8.915 8.915 0 0 1 5-1.41c2.65.07 5 1.28 6.6 3.16l1.31-1.31a.5.5 0 0 1 .85.36V9.5c0 .28-.22.5-.5.5h-4.29c-.45 0-.67-.54-.35-.85l1.55-1.55C16.12 6.02 14.18 5 12 5c-1.2 0-2.33.31-3.32.85L7.24 4.41z\"/>")
      .name("UpdateDisabledRound")
  }
}

export default UpdateDisabledRound as any as Typed<DLightIconType>