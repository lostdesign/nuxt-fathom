const { resolve, join } = require('path')

export default function(moduleOptions) {
  const options = { ...moduleOptions, ...this.options.fathom }

  if (!options.namespace) options.namespace = 'fathom'
  const { namespace } = options

  const registerPlugins = ['plugins/fathom.client.js','middleware/fathom.js','debug.js']

  for (const pluginPath of registerPlugins) {
    this.addPlugin({
      src: resolve(__dirname, pluginPath),
      fileName: join(namespace, pluginPath),
      options
    })
  }
}

module.exports.meta = require('./package.json')