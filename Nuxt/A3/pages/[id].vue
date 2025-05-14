<!-- Eden Papo u24685349-->

<template>
    <section class="container mx-auto p-6">
        <h1 class="text-3xl font-bold mb-4">{{ post?.title }}</h1>
        <div v-html="renderedContent" class="prose max-w-none"></div>
    </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { marked } from 'marked'
import { usePosts } from '~/composables/usePosts'

const route = useRoute()
const { posts, load, getPostById } = usePosts()
const post = ref(null)

onMounted(async () => {
    await load()
    post.value = getPostById(route.params.id)
})

const renderedContent = computed(() =>
    post.value ? marked(post.value.content) : ''
)
</script>