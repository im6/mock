module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname + "/public/build2",
        filename: "bundle.js"
    },
    module: {
        loaders: []
    }
};