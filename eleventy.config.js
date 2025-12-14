import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });

  eleventyConfig.addPlugin(syntaxHighlight);

  // Custom collection for posts sorted by date (newest first)
  eleventyConfig.addCollection("postsByDate", function(collectionApi) {
    return collectionApi.getFilteredByTag("post").sort((a, b) => {
      return b.date - a.date; // Descending order (newest first)
    });
  });
}
