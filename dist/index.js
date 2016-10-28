"use strict";
var core_1 = require('@easy-webpack/core');
var webpack = require('webpack');
module.exports = function sourceMapSupport(_a) {
    var _b = (_a === void 0 ? {} : _a).browser, browser = _b === void 0 ? true : _b;
    return function sourceMapSupport() {
        var config = {
            plugins: [
                new webpack.BannerPlugin({
                    banner: "require('source-map-support').install();",
                    raw: true, entryOnly: false
                })
            ].concat(core_1.get(this, 'plugins', []))
        };
        if (!browser) {
            config.externals = [
                'source-map-support',
            ].concat(core_1.get(this, 'externals', []));
        }
        return config;
    };
};
//# sourceMappingURL=index.js.map