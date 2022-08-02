<template>
    <section>
        <div>
     <input type="text" name="" v-model="title">
     <button @click="submit">Submit</button>
     </div>

     <main>
        <h1 class="font-medium text-lg mb-4">My Tasks</h1>
        <ul v-if="tasks.length">
            <li v-for="task in tasks">
                {{ task.title }}
            </li>
        </ul>
        <p v-else>Sorry, There is no Task</p>
     </main>
    </section>
</template>

<script setup>
 import axios from 'axios';
import { ref } from 'vue'

 const tasks = ref([]),

 title = ref('')

 fetchTasks()

  function fetchTasks() {

    axios.get('api/tasks')
      .then(({data}) => {
        tasks.value = data
        // console.log("first");
         console.log(data);
      })
  }

 function submit() {
    axios.post('api/tasks', {
      title: title.value
    })
      .then(({data}) => {
        console.log(data)
        tasks.value.push(data)
        // title.value = ''
      })
  }

</script>