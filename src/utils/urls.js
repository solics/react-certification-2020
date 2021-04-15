const API_KEY = process.env.REACT_APP_YT_API_KEY

export const YT_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&videoEmbeddable=true&type=video&`
export const YT_DETAIL_API = `https://www.googleapis.com/youtube/v3/videos?part=snippet&key=${API_KEY}&videoEmbeddable=true&type=video&`
