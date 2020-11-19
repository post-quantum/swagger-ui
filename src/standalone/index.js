import StandaloneLayout from "./layout"
import TopbarPlugin from "plugins/topbar"
import CreditPlugin from "plugins/credit"
import ConfigsPlugin from "corePlugins/configs"

// the Standalone preset

export default [
  TopbarPlugin,
  CreditPlugin,
  ConfigsPlugin,
  () => {
    return {
      components: { StandaloneLayout }
    }
  }
]
