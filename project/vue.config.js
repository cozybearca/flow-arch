const path = require("path")

module.exports = {
    publicPath: "/flow-arch/",
    outputDir: path.resolve(process.env.SDK_ROOT, "docs"),
    devServer: {
        disableHostCheck: true,
    },
}
