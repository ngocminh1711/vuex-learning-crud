<template>
  <div id="delete-button">
    <b-button 
    variant="danger"
    @click="deletePost"
    >Delete
    </b-button>
  </div>
</template>

<script>
// import axios from "axios";

export default {
    name: 'delete-button',
    props: ['idPost'],
    methods: {
        deletePost() {
           let id = this.idPost;
            this.$store.dispatch('deletePost', id)
        }
    }
}
</script>

<style>

</style>