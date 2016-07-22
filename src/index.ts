import {WebpackConfig, get} from '@easy-webpack/core'
const webpack = require('webpack')

/**
 * @param externals list packages that should be used as node modules, directly from node_modules (without bundling)
 */
export = function sourceMapSupport({browser = true} = {}) {
  return function sourceMapSupport(this: WebpackConfig): WebpackConfig {
    const config = {
      plugins: [
        new webpack.BannerPlugin({
          banner: `require('source-map-support').install();`,
          raw: true, entryOnly: false
        })
      ].concat(get(this, 'plugins', []))
    } as WebpackConfig
    if (!browser) {
      config.externals = [
        'source-map-support',
      ].concat(get(this, 'externals', []))
    }
    return config
  }
}