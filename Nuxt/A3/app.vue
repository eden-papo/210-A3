<!-- Eden Papo u24685349-->

<template>
  <div class="min-h-screen flex flex-col">
    <!-- Global navigation -->
    <nav class="bg-gray-800 text-white p-4">
      <div class="container mx-auto flex space-x-4">
        <NuxtLink to="/" class="hover:underline">Home</NuxtLink>
        <NuxtLink to="/search" class="hover:underline">Search</NuxtLink>
      </div>
    </nav>

    <!-- Page content -->
    <main class="flex-1 container mx-auto p-6">
      <NuxtPage />
    </main>

    <!-- Global footer -->
    <footer class="bg-gray-100 text-center p-4">
      Bullet Blogs
    </footer>
  </div>
</template>

<script setup>
// No additional logic needed here for now.
// You can inject global providers or plugins here later.
</script>

<style src="~/assets/main.css"></style>
