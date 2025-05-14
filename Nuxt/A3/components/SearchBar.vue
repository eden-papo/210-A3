<!-- Eden Papo u24685349-->

<template>
    <form @submit.prevent="onSearch" class="mb-4 flex gap-2">
        <input v-model="query" type="text" placeholder="Search posts..." class="border p-2 flex-1" />
        <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded">
            Search
        </button>
    </form>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
const emit = defineEmits(['search'])
const query = ref('')
const onSearch = () => emit('search', query.value)
</script>