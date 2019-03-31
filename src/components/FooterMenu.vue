<template>
    <v-footer class="white--text gradient-v" app>  
            <div>
                <v-avatar v-on:click="navbar" class="avatar-left"
                color="grey lighten-4"
                >
                </v-avatar>
            </div>
            <v-divider></v-divider>
            <div class="avatar-right">
                <v-avatar
                color="grey lighten-4"
                >
                </v-avatar>
            </div>
    </v-footer>
</template>

<style scoped>

</style>

<script>

  export default {
    data: () => ({
      drawer: null,
      drawerRight: null,
      right: false,
      left: false
    }),
    props: {
      source: String
    },
    methods: {
        navbar: function(event) {
            console.log("clicked")
        }
    }
  }
</script>
