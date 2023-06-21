import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class SpeakerPhoneRound extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"m7.76 7.83.02.02c.35.35.89.38 1.3.09.83-.57 1.84-.92 2.92-.92s2.09.35 2.92.93c.4.29.95.26 1.3-.09l.02-.02c.42-.42.39-1.14-.09-1.49C14.98 5.5 13.55 5 12 5s-2.98.5-4.14 1.34c-.49.35-.52 1.07-.1 1.49z\"/><path d=\"M12 1c-2.62 0-5.03.93-6.92 2.47A1 1 0 0 0 5 4.96c.36.36.93.39 1.32.07C7.86 3.76 9.85 3 12 3s4.14.76 5.69 2.03c.39.32.96.29 1.32-.07.42-.42.38-1.11-.08-1.49C17.03 1.93 14.62 1 12 1zm3 9H9c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h5.99c.55 0 1-.45 1-1L16 11c0-.55-.45-1-1-1zm0 10H9v-8h6v8z\"/>")
      .name("SpeakerPhoneRound")
  }
}

export default SpeakerPhoneRound as any as Typed<DLightIconType>