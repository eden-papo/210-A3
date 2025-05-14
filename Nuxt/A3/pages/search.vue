<!-- Eden Papo u24685349-->

<template>
    <section class="container mx-auto p-6">
        <h1 class="text-3xl font-bold mb-4">Search Posts</h1>
        <SearchBar @search="handleSearch" />
        <PostList :posts="filteredPosts" />
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SearchBar from '~/components/SearchBar.vue'
import PostList from '~/components/PostList.vue'
import { usePosts } from '~/composables/usePosts'

const { posts, load, searchPosts } = usePosts()
const filteredPosts = ref([])

onMounted(async () => {
    await load()
    filteredPosts.value = posts.value
})

const handleSearch = (query) => {
    filteredPosts.value = searchPosts(query)
}
</script>