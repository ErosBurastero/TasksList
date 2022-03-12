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
      <button class="black white--text ml-5 pa-4"  @click="addTask(task)">Add task</button>
    </div>

    <div class="d-flex justify-center">
      <v-card class="my-3 black white--text" min-height="350" min-width="350" max-height="1000" max-width="700">
        <ul>
          <li v-for="(task, index) in $store.state.tasks" :key="index">
            <div class="title">{{ task }}
               <v-icon class="ml-1 white--text" @click="deleteTask(task)"
              >mdi-delete</v-icon
            ></div>  
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
      task: ""
    };
  },

  methods: {
    addTask(newTask) {
      if( this.task.length === 0 ) {
        return
      }

      this.$store.dispatch("addTaskAction", newTask);

    },

    deleteTask(task) {
      this.$store.dispatch("deleteTaskAction", task)
    }


  },

  mounted() {
     const valorGuardado = JSON.parse(localStorage.getItem('Tasks'))

     if ( valorGuardado && valorGuardado.length === 0) {
       return
     }

     this.$store.dispatch("setTaskAction", valorGuardado)
  }

  

  
};
</script>
