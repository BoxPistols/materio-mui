import createCache from '@emotion/cache'

export const createEmotionCache = () => {
  return createCache({
    key: 'em', // key of the emotion
    prepend: true, // prepend the emotion to the head
    stylisPlugins: [] // stop the AutoPrefixer
  })
}
