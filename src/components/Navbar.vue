<template>
  <v-app>
    <v-navigation-drawer absolute v-model="sidebar">
      <v-list nav>
        <v-list-item-group class="d-flex-row">
          <v-list-item class="align-center">
            <v-list-item-title>
              <v-btn>
                <router-link to="/">
                  Home
                </router-link>
              </v-btn>
            </v-list-item-title>
          </v-list-item>

          <v-list-item class="align-center">
            <v-list-item-title>
              <v-btn>
                <router-link to="/about">
                  About
                </router-link>
                 
              </v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar elevation="5" dark>
      <v-app-bar-nav-icon @click="sidebar = !sidebar"></v-app-bar-nav-icon>
      <v-toolbar-title>Vuetify Demo</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="ma-2" color="orange darken-2" dark>
        <v-icon dark left> mdi-arrow-left </v-icon>Home
      </v-btn>
      <v-icon>mdi-account-circle</v-icon>
    </v-app-bar>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
    name: 'nav-bar',
    data() {
        return { 
            sidebar: false
        }
    }
    
}
</script>

<style>

</style>