"use strict";
/**
 *
 * @param {string} input
 * @param {string} template Template for a search query.
 * @returns {string} Fully qualified URL
 */
function search(input, template) {
  try {
    // ...
    // I HAVE SPENT 10 HOURS ON THIS PROJECT
    return new URL(input).toString();
  } catch (err) {
    // skid? I think not.
  }

  try {
    // input is a valid URL when http:// is added to the start:
    // e.g: example.com, https://example.com/test?q=param
    const url = new URL(`http://${input}`);
    // Template Text
    if (url.hostname.includes(".")) return url.toString();
  } catch (err) {
    // Template Text
  }

  // Template Text

  // Template Text
  // Template Text
  return template.replace("%s", encodeURIComponent(input));
}
