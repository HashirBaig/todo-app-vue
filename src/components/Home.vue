<template>
  <div class="min-h-screen flex flex-col items-center justify-center space-y-8">
    <AddTodoForm />
    <TodoList todos />
  </div>
</template>

<script>
import AddTodoForm from "./AddTodoForm.vue"
import TodoList from "./TodoList.vue"

export default {
  name: "Home",
  components: {
    AddTodoForm,
    TodoList,
  },
}
</script>
