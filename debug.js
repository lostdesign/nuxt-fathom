const options = JSON.parse(`<%= JSON.stringify(options) %>`)
const { debug, namespace } = options

if (debug) {
  console.log(`DEBUG ENABLED - ${namespace} options: `, options)
}