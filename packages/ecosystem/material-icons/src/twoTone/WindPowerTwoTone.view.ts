import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class WindPowerTwoTone {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<circle cx=\"13\" cy=\"13\" r=\"1\" opacity=\".3\"/><path d=\"M3.28 13c-.15 0-.28.13-.28.28 0 .12.08.24.2.27l4.51 1.29 2.33-1.4c-.02-.15-.03-.29-.03-.44H3.28zm14.48-9.46a.28.28 0 0 0-.34.04L14 6.78v3.36l.11.03 3.74-6.24c.09-.14.04-.31-.09-.39zm.43 11.94-2.78-.69c-.07.1-.15.19-.24.28l4.85 4.85c.16.16.35.05.4 0 .09-.09.11-.23.05-.33l-2.28-4.11z\" opacity=\".3\"/><path d=\"M4 3h6v2H4zM1 7h5v2H1zm2 12h5v2H3z\"/><path d=\"m22.21 18.61-2.28-4.1a2.05 2.05 0 0 0-1.26-.97l-2.69-.67a2.95 2.95 0 0 0-.37-1.33l3.96-6.59c.65-1.08.3-2.48-.78-3.13a2.288 2.288 0 0 0-2.73.3l-3.43 3.21c-.4.37-.63.9-.63 1.45v3.4c-.47.17-.89.45-1.23.82H3.28a2.279 2.279 0 0 0-.63 4.47l4.51 1.29c.18.05.37.08.55.08.36 0 .72-.1 1.03-.29l2.24-1.34c.29.26.63.47 1.02.61V21c-1.1 0-2 .9-2 2h6c0-1.1-.9-2-2-2v-4.28l4.61 4.61c.45.45 1.03.67 1.61.67.58 0 1.17-.22 1.61-.67.72-.72.88-1.83.38-2.72zM7.72 14.84 3.2 13.55a.279.279 0 0 1-.2-.27c0-.15.13-.28.28-.28h6.73c0 .15.01.3.03.44l-2.32 1.4zM13 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm1-3.86V6.78l3.43-3.21c.05-.05.19-.12.34-.04.13.08.18.25.1.38l-3.74 6.24-.13-.01zm6.42 9.78c-.05.05-.24.16-.4 0l-4.85-4.85c.08-.09.16-.18.24-.28l2.78.69 2.28 4.1c.06.11.04.25-.05.34z\"/>")
      .name("WindPowerTwoTone")
  }
}

export default WindPowerTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>
