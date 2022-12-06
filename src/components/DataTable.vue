<template>
  <v-app>
    <div id="data-table">
      <div class="create-btn">
        <CreateButton />
      </div>

      <div class="table">
        <table>
          <tr>
            <th>STT</th>
            <th>Name Post</th>
            <th>Actions</th>
            <th></th>
          </tr>
          <tr v-for="(post, index) in posts" :key="post._id">
            <td>
              {{ index + 1 }}
            </td>
            <td>
              {{ post.name }}
            </td>
            <td>
              <DeleteButton :idPost="post._id" />
            </td>
            <td>
              <EditButton :idPost="post._id" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  </v-app>
</template>

<script>
import DeleteButton from "./DeleteButton.vue";
import EditButton from "./EditButton.vue";
import CreateButton from "./CreateButton.vue";

export default {
  name: "data-table",
  components: {
    DeleteButton,
    EditButton,
    CreateButton,
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
  mounted() {
    this.getPostData();
  },
  methods: {
    getPostData() {
      this.$store.dispatch("getPosts");
    },
  },
};
</script>

<style>
table tr th {
  border: 1px solid;
  width: 25%;
}
td {
  border: 1px solid;
  width: 25%;
}
#data-table {
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
}
.create-btn {
  flex-basis: 50%;
}
.table {
  flex-basis: 50%;
}
#data-table tr,
#data-table td {
  border: 1px solid #ddd;
  padding: 8px;
}
#data-table tr:nth-child(even) {
  background-color: #f2f2f2;
}
#data-table tr:hover {
  background-color: #ddd;
}
#data-table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
}
</style>
