import Middleware from '../../middleware'

const options = JSON.parse(`<%= JSON.stringify(options) %>`)
const { namespace } = options

Middleware[namespace] = ({ app, route }) => {
  if(process.client) {
    try {
      app.$fathom?.trackPageview({
        url: route.fullPath
      })
    } catch (error) {
      // possibility that an adblocker is being used...
      console.log(error)
    }
  }
}
