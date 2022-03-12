<template>
  <v-app>
  

    <v-main class="teal accent-3">
      <Input/>
    </v-main>
  </v-app>
</template>

<script>
import Input from './components/Input';

export default {
  name: 'App',

  components: {
    Input,
    
  },

  data: () => ({
    //
  }),
};
</script>
