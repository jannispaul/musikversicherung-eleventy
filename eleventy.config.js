const htmlmin = require("html-minifier");
const lazyImagesPlugin = require("eleventy-plugin-lazyimages");
const yaml = require("js-yaml");

module.exports = (eleventyConfig) => {
  // Yaml
  eleventyConfig.addDataExtension("yml", (contents) => yaml.safeLoad(contents));

  // Add a readable date formatter filter to Nunjucks
  eleventyConfig.addFilter("dateDisplay", require("./filters/dates.js"));

  // Add a limit filter to limit loop iterations
  eleventyConfig.addFilter("limit", function(obj, limit) {
    return Object.entries(obj).slice(0, limit);
  });

  // Add a HTML timestamp formatter filter to Nunjucks
  eleventyConfig.addFilter(
    "htmlDateDisplay",
    require("./filters/timestamp.js")
  );

  // Calculate average from ratings
  eleventyConfig.addFilter("ratingAverage", function(obj) {
    let arr = Object.values(obj);
    let average =
      arr.reduce((sum, e) => sum + parseInt(e.rating), 0) / arr.length;
    return average.toFixed(2);
  });

  eleventyConfig.addFilter("gradientOffset", function(obj) {
    // Create array from reviews object
    let arr = Object.values(obj);
    // Calculate average
    let average =
      arr.reduce((sum, e) => sum + parseInt(e.rating), 0) / arr.length;

    // Create offset array and put in the fraction as percentage or 100
    let offset = [];
    for (let i = 0; i < 5; i++) {
      if (average < i + 1) {
        offset.push((average - i) * 100);
      } else {
        offset.push(100);
      }
    }
    return offset;
  });

  // Limit array items
  eleventyConfig.addFilter("limit", function(arr) {
    return arr.slice(3);
  });

  // Object to array
  eleventyConfig.addFilter("toArray", function(data) {
    return Object.values(data);
  });

  // eleventy-plugin-lazyimages
  eleventyConfig.addPlugin(lazyImagesPlugin);

  // Minify our HTML
  eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
    if (outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }
    return content;
  });

  // Collections
  //   eleventyConfig.addCollection("blog", (collection) => {
  //     const blogs = collection.getFilteredByTag("blog");

  //     for (let i = 0; i < blogs.length; i++) {
  //       const prevPost = blogs[i - 1];
  //       const nextPost = blogs[i + 1];

  //       blogs[i].data["prevPost"] = prevPost;
  //       blogs[i].data["nextPost"] = nextPost;
  //     }

  //     return blogs.reverse();
  //   });

  // Layout aliases
  eleventyConfig.addLayoutAlias("default", "layouts/default.njk");

  // Include our static assets
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("pdfs");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("sw.js");

  return {
    templateFormats: ["md", "njk"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    passthroughFileCopy: true,

    dir: {
      input: "site",
      output: "dist",
      includes: "includes",
      data: "global",
    },
  };
};
