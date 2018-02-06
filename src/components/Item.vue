<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="toolbar-md-primary">
        <ion-title>TodoList</ion-title>
      </ion-toolbar>
		</ion-header>
		<ion-content class="content">
      
			<ion-list>
        <ion-item v-for="todo in todos" :key="todo.id" @click="showDetail(todo.id)">
          <ion-label full style="color:black">{{todo.name}}</ion-label>
        </ion-item>
      </ion-list>

			<ion-fab-button  @click="addTodo">
        <ion-icon name="add"></ion-icon>
      </ion-fab-button>

		</ion-content>
	</ion-page>

</template>

<script>
export default {
  name: 'item',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      todos: [
        { id: '1', name: 'aaron saunders' },
        { id: '2', name: 'andrea saunders' },
      ],
    };
  },
  methods: {
    addTodo() {},
    showDetail(_id) {
      this.$router.push({ path: '/' + _id });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>