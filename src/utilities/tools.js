export const createSlug = (str) => {
  // Convert the string to lowercase and remove leading/trailing spaces
  const cleanedStr = str.trim().toLowerCase();

  // Replace spaces and special characters with hyphens
  const slug = cleanedStr.replace(/[^a-zA-Z0-9-]/g, "-");

  // Remove consecutive hyphens and return the final slug
  return slug.replace(/-+/g, "-");
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
