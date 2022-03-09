module.exports = function (eleventyConfig) {
    // Copy the `css` directory to the output
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/app.js");
  // Watch the `css` directory for changes
  eleventyConfig.addWatchTarget("./src/css");

    return {
      dir: {
        input: "src",
        output: "public",
        data: "_data",
      },
    };
  };