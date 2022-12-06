<template>
  <div id="create-button">
    <b-button 
    variant="success"
    @click="(isCreate = !isCreate)"
    >
      Create
    </b-button>
    
    <div class="create-new-post" v-show="isCreate">
        <h1>Create new post</h1>
        <form >  
            <input type="text" v-model="newPost"/>
            <b-button 
              @click="createNewPost"
                    variant="success">
                Create
            </b-button>
        </form>
    </div>
  </div>
</template>

<script>

export default {
    name: 'create-button',
    data () {
        return {
            newPost: '',
            isCreate: false,
        }
    },
    methods: {
       createNewPost() {
          let data = {name: this.newPost};
          this.$store.dispatch('createNewPost', data)
          }
          
    }
}
</script>
  
<style scoped>
    .create-button {
      top: 0px;
      position: relative;
      background-color: blue;
      align-items: center;
    }
    .create-new-post {
    border: 1px solid;
  }
  input {
    border-radius: 4px;
  }
  .create-new-post {
    text-align: center;
  }
</style>