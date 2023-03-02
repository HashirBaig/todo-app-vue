<template>
  <div>
    <h3 v-if="!todos || todos?.length < 0" class="text-gray-400 bg-purple-50 px-3 py-1 rounded-full">
      Items Not Found!
    </h3>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    todos: [Object],
  },
  data() {
    return {
      todos: [
        {
          title: "This is a title",
          description: "This is a description",
          isCompleted: false,
          isPending: false,
        },
      ],
    }
  },
}
</script>
