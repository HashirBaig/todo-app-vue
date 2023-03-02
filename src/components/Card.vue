<template>
  <div class="border px-4 py-3 rounded-lg space-y-2 bg-purple-50">
    <h5 class="text-gray-600 font-semibold">{{ title }}</h5>
    <p class="text-gray-500">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["title", "description"],
}
</script>
