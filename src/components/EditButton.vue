<template>
  <div id="edit-button">
    <b-button @click="isEdit = !isEdit" variant="primary">Edit</b-button>
    <div class="edit-form" v-show="isEdit">
        <form>
        <b-form-input v-model="postEdited" placeholder="Enter name post"></b-form-input>
        <b-button @click="editPost" variant="success">Submit</b-button>
        </form>
    </div>
  </div>
</template>

<script>
// import axios from "axios";

export default {
    name: 'edit-button',
    props: ['idPost']
    ,
    data() {
        return {
            isEdit: false,
            postEdited: ''
        }
    },
    methods: {
        editPost() {
            let id = this.idPost;
            let postEdited = {name: this.postEdited, id: id};
            this.$store.dispatch("updatePost", postEdited)
        }
    }
}
</script>

<style>
    .edit-button {
        display: inline;
    }
   
</style>