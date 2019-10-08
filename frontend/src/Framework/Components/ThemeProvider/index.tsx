import * as React from 'react'
import {STORE_CONNECT} from "../../Store/Decorators";
import BaseComponent from "../../Fundamental/Base/BaseComponent";


@STORE_CONNECT(['themeStore'])
export class ThemeProvider extends BaseComponent {

  render() {
    return (
      <div className={`theme-provider ${this.getStoreProp('themeStore.theme')}`}>
        {this.props.children}
      </div>
    )
  }
}
