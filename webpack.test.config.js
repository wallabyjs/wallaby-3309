module.exports = {
  resolve: {
    fallback: {
      http: require.resolve("stream-http"),
      https: require.resolve("https-browserify"),
      timers: require.resolve("timers-browserify"),
      zlib: require.resolve("browserify-zlib"),
      assert: require.resolve("assert"),
      url: require.resolve("url")
    }
  }
};
