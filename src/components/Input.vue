<template>
  <div>
    <div class="my-8 d-flex justify-center">
      <img
        width="300"
        height="250"
        src="https://miro.medium.com/max/1200/1*m6PGLUA_ZySmwKYcOsPvog.png"
      />
    </div>
    <div class="d-flex justify-center">
      <input   placeholder="add a new task" class="black white--text pa-4 " type="text"  v-model="task" />
      <button class="black white--text ml-5 pa-4"  @click="addTask">Add task</button>
    </div>

    <div class="d-flex justify-center">
      <v-card class="my-3 black white--text" min-height="500" min-width="500" max-height="1000" max-width="500">
        <ul>
          <li v-for="(task, index) in $store.state.tasks" :key="index">
            {{ task }}
          </li>
        </ul>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Input",

  data() {
    return {
      task: "",
    };
  },

  methods: {
    addTask() {
      if( this.task.length === 0) {
        return
      }
      this.$store.state.newTask = this.task;
      this.$store.dispatch("addTaskAction");
      this.task = "";

    },
  },

  
};
</script>
