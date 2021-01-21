<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input
        class="new-todo"
        placeholder="What needs to be done?"
        v-model="inputValue"
        autofocus
        @keydown.enter="handleInput"
      />
    </header>
    <!-- This section should be hidden by default and shown when there are todos -->
    <section class="main">
      <input
        id="toggle-all"
        class="toggle-all"
        type="checkbox"
        v-model="checkedAll"
      />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <!-- These are here just to show the structure of the list items -->
        <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
        <li
          v-for="(item, index) in todolist"
          :class="{ completed: item.finish }"
        >
          <div class="view">
            <input class="toggle" type="checkbox" v-model="item.finish" />
            <label>{{ item.value }}</label>
            <button class="destroy"></button>
          </div>
          <input class="edit" value="Create a TodoMVC template" />
        </li>
      </ul>
    </section>
    <!-- This footer should be hidden by default and shown when there are todos -->
    <footer class="footer">
      <!-- This should be `0 items left` by default -->
      <span class="todo-count"
        ><strong>{{ todoleft }}</strong> item left</span
      >
      <!-- Remove this if you don't implement routing -->
      <ul class="filters">
        <li>
          <a class="selected" href="#/">All</a>
        </li>
        <li>
          <a href="#/active">Active</a>
        </li>
        <li>
          <a href="#/completed">Completed</a>
        </li>
      </ul>
      <!-- Hidden if no completed items are left ↓ -->
      <button class="clear-completed" @click="handleClearCompleted">
        Clear completed
      </button>
    </footer>
  </section>
  <footer class="info">
    <p>Double-click to edit a todo</p>
    <!-- Remove the below line ↓ -->
    <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
    <!-- Change this out with your name and url ↓ -->
    <p>Created by <a href="http://todomvc.com">you</a></p>
    <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
  </footer>
</template>

<script>
import 'todomvc-app-css/index.css'
import { reactive, toRefs, watch, computed } from 'vue'

export default {
  name: 'HelloWorld',
  setup() {
    const state = reactive({
      todolist: [
        {
          value: '看书',
          finish: false,
        },
      ],
      inputValue: '',
      checkedAll: false,
    })

    watch(
      () => state.checkedAll,
      (newValue, oldValue) => {
        if (newValue) {
          state.todolist.forEach((item) => (item.finish = true))
        } else {
          state.todolist.forEach((item) => (item.finish = false))
        }
      }
    )

    function handleInput() {
      const item = {
        value: state.inputValue,
        finish: false,
      }
      state.todolist.push(item)
      state.inputValue = ''
    }

    const todoleft = computed(() => {
      return state.todolist.reduce((total, cur) => {
        return cur.finish ? total : total + 1
      }, 0)
    })

    function handleClearCompleted() {
      state.todolist = state.todolist.filter((item) => !item.finish)
    }

    return {
      ...toRefs(state),
      todoleft,
      handleInput,
      handleClearCompleted,
    }
  },
}
</script>
<style scoped></style>
