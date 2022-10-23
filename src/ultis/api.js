import qs from "qs";

/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */
export function getStrapiURL(path = "") {
  return `${
    process.env.REACT_APP_BACKEND_URL || "https://seahorse-app-9lewb.ondigitalocean.app/"
  }${path}`;
}

/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {Object} options Options passed to fetch
 * @returns Parsed API call response
 */
export async function fetchAPI(path, urlParamsObject = {}, options = {}) {
  // Merge default and user options
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  };

  // Build request URL
  const queryString = qs.stringify(urlParamsObject);
  const requestUrl = `${getStrapiURL(
    `/api${path}${queryString ? `?${queryString}` : ""}`
  )}`;

  // Trigger API call
  const response = await fetch(requestUrl, mergedOptions);

  // Handle response
  if (!response.ok) {
    console.error(response.statusText);
    throw new Error(`An error occured please try again`);
  }
  const data = await response.json();
  return data;
}

export function getStrapiMedia(media) {
  let url = ""
  if(!media?.data){
    url = media.attributes.url
  }else{
    url= media.data.attributes.url;
  }
  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
  return imageUrl;
}

export function getStrapiMultipleMedia(media) {
  let url = ""
  const data = !media?.data ? media : media?.data
  if(!data ){
    throw new Error("can't load images")
  }
  const imageUrl = data.map( image =>{
    url = image?.attributes?.url
    return url.startsWith("/") ? getStrapiURL(url) : url
  })
  return imageUrl;
}