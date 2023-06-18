import { RouterSpace, Route } from "@dlightjs/components"
import DLight, { View } from "@dlightjs/dlight"
import { button, div, Env, State } from "@dlightjs/types"

class SubComp2 extends View {
  toggle = false
  secondNav

  Body() {
    div()

    button("toggle")
      .onclick(() => {
        this.toggle = !this.toggle
      })
    button("./not")
      .onclick(() => {
        this.secondNav.to("./not")
      })
    button("./hi")
      .onclick(() => {
        this.secondNav.to("./hi")
      })

    if (this.toggle) {
      div("hi niubi")
      RouterSpace()
        .mode("hash")
        .getNavigator(nav => { this.secondNav = nav })
      {
        Route("hi")
        {
          div("hi niubi")
        }
        Route("not")
        {
          div("not hihi")
        }
        Route()
        {
          div("nono")
        }
      }
    }
  }
}

class SubComp extends View {
  @Env RouteParam

  Body() {
    div(this.RouteParam.path)
    div("hhhh")
  }
}

class OK extends View {
  @Env RouteParam
  navigator = this.RouteParam.navigator

  Body() {

  }
}

export class RouteTest extends View {
  navigator
  Body() {
    div("hh")
    button("push to /OKK")
      .onclick(() => {
        this.navigator.to("/OKK")
      })
    button("push to /fuck")
      .onclick(() => {
        this.navigator.to("/fuck")
      })
    button("back")
      .onclick(() => {
        this.navigator.to("..")
      })
    RouterSpace()
      .getNavigator(nav => { console.log(nav); this.navigator = nav })
      .mode("hash")
    {
      Route("OKK")
      {
        div("okk")
      }
      Route("fuck")
      {
        SubComp2()
      }
    }
  }
}
