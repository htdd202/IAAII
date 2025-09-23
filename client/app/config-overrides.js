export default function override(config) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    assert: require.resolve("assert/"),
    crypto: require.resolve("crypto-browserify"),
    http: require.resolve("stream-http"),
    https: require.resolve("https-browserify"),
    stream: require.resolve("stream-browserify"),
    url: require.resolve("url/"),
    zlib: require.resolve("browserify-zlib"),
    os: require.resolve("os-browserify/browser"),
    path: require.resolve("path-browserify"),
    fs: false, // fs is typically not needed in the browser
  };

  // Add the ProvidePlugin for process and Buffer
  config.plugins.push(
    new (require("webpack").ProvidePlugin)({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    })
  );

  return config;
}