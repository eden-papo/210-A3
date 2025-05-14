// Eden Papo u24685349


import { ref } from 'vue'
import { useRuntimeConfig, useFetch } from '#imports'

export const usePosts = () => {
  const { public: { strapiBase } } = useRuntimeConfig()
  const posts = ref([])

  // 1) load all posts
  const load = async () => {
    const { data, error } = await useFetch(
      `${strapiBase}/api/posts?populate=excerpt`,
      { method: 'GET' }
    )

    if (error.value) {
      console.error('Fetch error:', error.value)
      return
    }
    // guard: data.value might be null
    if (!data.value || !data.value.data) {
      console.warn('No data returned from Strapi')
      return
    }

    posts.value = data.value.data.map(item => ({
      id: item.id,
      title: item.attributes.title,
      excerpt: item.attributes.excerpt,
    }))
  }

  // 2) load single post
  const getPostById = async (id) => {
    const { data, error } = await useFetch(
        await useFetch(`${apiBase}/api/posts?populate=*`),

      { method: 'GET' }
    )

    if (error.value) {
      console.error('Fetch error for post', id, error.value)
      return null
    }
    if (!data.value || !data.value.data) {
      console.warn(`No data returned for post ${id}`)
      return null
    }

    const attrs = data.value.data.attributes
    return {
      id: data.value.data.id,
      title: attrs.title,
      content: attrs.content,
    }
  }

  // client‐side filter (unchanged)
  const searchPosts = (query) => {
    if (!query) return posts.value
    const lower = query.toLowerCase()
    return posts.value.filter(p =>
      p.title.toLowerCase().includes(lower) ||
      p.excerpt.toLowerCase().includes(lower)
    )
  }

  return { posts, load, getPostById, searchPosts }
}

