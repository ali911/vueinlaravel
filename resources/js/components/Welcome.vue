<template>
  <section>
    <div>
      <input type="text" v-model="title">
      <button @click="submit">Submit</button>
    </div>

     <main>
        <h1 class="font-medium text-lg mb-4">My Tasks</h1>
        <ul v-if="tasks.length">
            <ListItem v-for="task in tasks" :title="task.title"/>
        </ul>
        <p v-else>Sorry, There is no Task</p>
     </main>
  </section>
</template>

<script setup>
  import axios from 'axios';
  import { ref } from 'vue';
  import ListItem from './ListItem.vue';

  const tasks = ref([]);
  const title = ref('');

  fetchTasks()

  function fetchTasks() {
    axios.get('api/tasks')
      .then(({data}) => {
        tasks.value = data
        // console.log(data);
      })
  }

  function submit() { 
    axios.post('api/tasks', {
      ali: title.value,
      files: ['file 1', 'file 2'],
    })
      .then(({data}) => {
        // console.log(data);
         tasks.value.push(data)
         title.value = ''
      })
  }
</script>