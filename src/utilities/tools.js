export const createSlug = (str) => {
  // Convert the string to lowercase and remove leading/trailing spaces
  const cleanedStr = str.trim().toLowerCase();

  // Replace spaces and special characters with hyphens
  const slug = cleanedStr.replace(/[^a-zA-Z0-9-]/g, "-");

  // Remove consecutive hyphens and return the final slug
  return slug.replace(/-+/g, "-");
};

export const truncateText = (text, limit) => {
  if (text.length <= limit) {
    return text;
  } else {
    const truncatedText = text.slice(0, limit) + " ... ";
    return truncatedText;
  }
};

export const getYouTubeLinks = (youtubeData) => {
  const videos = youtubeData.items.map((item) => ({
    title: item.snippet.title,
    youtubeLink: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`,
  }));
  let youtubeLinks = {};
  videos.forEach((video) => {
    youtubeLinks[video.title] = video.youtubeLink;
  });
  return { youtubeLinks };
};

export const urlify = (text) => {
  var urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.replace(urlRegex, function (url) {
    return (
      '<a style="color: #b7c5c6" target="_blank" href="' +
      url +
      '">' +
      url +
      "</a>"
    );
  });
};

export const generatePageNumbers = (currentPage, lastPage) => {
  const pages = [];

  // Show the current page and a few adjacent pages
  for (
    let i = Math.max(currentPage - 2, 1);
    i <= Math.min(currentPage + 2, lastPage);
    i++
  ) {
    pages.push(i);
  }
  return pages;
};

export function cleanTitleTag(text) {
  // Check if text is wrapped in CDATA
  if (text.startsWith("<![CDATA[") && text.endsWith("]]>")) {
    return text.substring(9, text.length - 3); // Remove the CDATA wrapper
  }
  return text; // Return text as-is if no CDATA wrapper
}

export const getEpisodes = (xmlText) => {
  // Extract <item> blocks
  const itemRegex = /<item>(.*?)<\/item>/gs;
  let items = [...xmlText.matchAll(itemRegex)];

  // Map through items and extract relevant data
  const theItems = items.map((item) => {
    const itemXml = item[1]; // Full content of the <item> block

    const getTagValue = (tagName) => {
      const match = itemXml.match(
        new RegExp(`<${tagName}>(.*?)<\/${tagName}>`, "s")
      );
      return match ? match[1].trim() : null;
    };

    const getAttributeValue = (tagName, attribute) => {
      const match = itemXml.match(
        new RegExp(`<${tagName}[^>]*\\b${attribute}="([^"]*)"`)
      );
      return match ? match[1].trim() : null;
    };

    return {
      title: cleanTitleTag(getTagValue("title")),
      link: getTagValue("link"),
      pubDate: getTagValue("pubDate"),
      description: getTagValue("itunes:summary"),
      episodeNumber: getTagValue("itunes:episode"),
      season: getTagValue("itunes:season"),
      image: getAttributeValue("itunes:image", "href"), // Extract itunes:image href
    };
  });
  return theItems;
};
