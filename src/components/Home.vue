<template>
    <div id="app">  
        <v-content>
            <v-container fluid fill-height>
            <v-layout align-center justify-center>
                <v-flex xs10 sm10 md4 class="box-top">
                <img class="logo" alt="Vue logo" src="../assets/pgs-logo.svg" height="80">
                <v-card class="elevation-12">
                    <v-toolbar dark color="primary" height="0">
                    <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-card-text height="0">
                    <v-form>
                        <v-text-field solo flat name="login" label="Username" type="text"></v-text-field>
                        <v-text-field solo flat height="29" id="password" name="password" label="Password" type="password"></v-text-field>
                    </v-form>
                    </v-card-text>
                    <v-card-actions block pa-0>
                    <v-btn large ma-0 depressed block class="btn-azul-sesc" href="/about">Login</v-btn>
                    <AlertHome/>
                </v-card-actions>
                </v-card>
                <v-spacer></v-spacer>
                <v-container class="sesc-bottom-logo">
                    <v-layout align-center justify-center pa-2>
                        <img alt="Vue logo" src="../assets/sesc-logo-branco.svg" height="55">
                    </v-layout>
                    <p class="p-minimo" block>Versão 1.0.0</p>
                    <a href="#"><p class="p-minimo" block>O que há de novo?</p></a>
            </v-container>
                </v-flex>
            </v-layout>
            </v-container>
        </v-content>
    </div>
</template>

<script>
        import AlertHome from './AlertHome'

   export default {  
    name: 'App',
        components: {
            'AlertHome': AlertHome 
        }
   }
</script>