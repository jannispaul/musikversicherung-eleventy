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
  // eleventyConfig.addFilter("limit", require("./filters/limit.js"));
  // limit filter
  // eleventyConfig.addNunjucksFilter("limit", function(array, limit) {
  //   return Object.entries(array).slice(0, limit);
  // });

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
  //   eleventyConfig.addLayoutAlias("post", "layouts/post.njk");

  // Include our static assets
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("pdfs");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("robots.txt");

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
