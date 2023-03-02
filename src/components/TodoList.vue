<template>
  <div class="w-[720px]">
    <h3 v-if="todos.length <= 0" class="text-gray-500 bg-amber-100 px-3 py-1 rounded-full">Items Not Found!</h3>

    <div class="card-container space-y-2">
      <Card v-for="(todo, idx) in todos" :key="todo + -+idx" :title="todo.title" :description="todo.description" />
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue"

export default {
  name: "TodoList",
  components: {
    Card,
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
        {
          title: "This is a title 2",
          description: "This is a description 2",
          isCompleted: false,
          isPending: false,
        },
      ],
    }
  },
}
</script>
