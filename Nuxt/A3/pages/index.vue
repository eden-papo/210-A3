<!-- Eden Papo u24685349-->

<template>
    <section class="container mx-auto p-6">
        <h1 class="text-3xl font-bold mb-4">Latest Posts</h1>
        <PostList :posts="posts" />
    </section>
</template>

<script setup>
import { onMounted } from 'vue'
import PostList from '~/components/PostList.vue'
import { usePosts } from '~/composables/usePosts'

const { posts, load } = usePosts()

onMounted(async () => {
    await load()
})
</script>