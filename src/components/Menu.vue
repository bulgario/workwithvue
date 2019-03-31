<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawerRight"
      fixed
      right
      clipped
      app
    >


      <v-list dense>
        <v-list-tile @click.stop="right = !right">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="gradient-v"
      dark
      fixed
      app
      clipped-right
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="text">INÍCIO</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click.stop="drawerRight = !drawerRight"></v-toolbar-side-icon>
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      class="aside-navigation"
    >
    <v-list dense>
      <div class="navigation-drawer-logo-position">
        <img src="../assets/sesc-logo-branco.svg" />
      </div>
      <div class="aside-menu-title">MENU PRINCIPAL</div>
         <v-list-tile-action>
            Inicio
          </v-list-tile-action>
          <v-list-tile-content>
            Notificacao SGS
          </v-list-tile-content>
          <v-list-tile-content>
            Notificacao SGS
          </v-list-tile-content>
          <v-list-tile-content>
            Notificacao SGS
          </v-list-tile-content>
          <v-list-tile-content>
            Notificacao SGS
          </v-list-tile-content>
          <v-list-tile-content>
            Notificacao SGS
          </v-list-tile-content>
          <v-list-tile-content>
            Notificacao SGS
          </v-list-tile-content>
      </v-list>
    </v-navigation-drawer>
    <v-navigation-drawer
      v-model="left"
      temporary
      fixed
    ></v-navigation-drawer>
       <v-navigation-drawer
        v-model="drawerRight"
        fixed
        right
        clipped
        app
        >
        </v-navigation-drawer>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn :href="source" icon large target="_blank" v-on="on">
                  <v-icon large>code</v-icon>
                </v-btn>
              </template>
              <span>Source</span>
            </v-tooltip>
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn icon large href="https://codepen.io/johnjleider/pen/KQrPKJ" target="_blank" v-on="on">
                  <v-icon large>mdi-codepen</v-icon>
                </v-btn>
              </template>
              <span>Codepen</span>
            </v-tooltip>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-navigation-drawer
      v-model="right"
      right
      temporary
      fixed
    ></v-navigation-drawer>
      <FooterMenu/>
  </v-app>
</template>

<style scoped>
#inspire {
  background-color: black;
}

.aside-menu-title {
  
}

.aside-navigation {
  background-color: grey;
}

.navigation-drawer-logo-position {
  height:15%;
  background-color:#000;
  padding-bottom:20px;
  padding-top:20px;
  position: relative;
  top: -4px; 
}

.gradient-v {
    background: linear-gradient(to bottom, #747678 0%, #000000 100%);
}
.gradient-h {
     background: linear-gradient(to right, #747678 0%, #000000 100%);
}
.cinza-sesc {
  background-color: #747678 !important;
}
.cdc {
    margin-top: 50px;
}
.square {
    float: left;
    width: 20px;
    height: 20px;
}
.blue {
  background: #13b4ff;
  border: 3px solid #fff;
  border-color: #fff !important;
}
.big-number {
  font-size: 1.6em;
  font-weight: bold;
}
.float-left {
  float: left;
}
.float-right {
  float: right;
}
</style>

<script>
  import FooterMenu from './FooterMenu'

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
    components: {
      'FooterMenu': FooterMenu
    }
  }
</script>
