import Middleware from '../../middleware'

const options = JSON.parse(`<%= JSON.stringify(options) %>`)
const { namespace } = options

Middleware[namespace] = ({ app, route }) => {
  app.$fathom.trackPageview({
    url: route.fullPath
  })
}

