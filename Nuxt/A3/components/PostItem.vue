<!-- Eden Papo u24685349-->

<template>
    <div class="post-item p-4 border-b">
        <NuxtLink :to="`/posts/ ${post.id}`" class="text-xl font-bold">
            {{ post.title }}
        </NuxtLink>
        <p class="text-gray-600 mt-2">{{ post.excerpt }}</p>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({ post: Object })
</script>