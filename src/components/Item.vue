<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="toolbar-md-primary">
        <ion-title>TodoList</ion-title>
      </ion-toolbar>
		</ion-header>
		<ion-content class="content">
      <ion-item>
        <ion-label><strong>Filter On Favorite Type</strong></ion-label>
        <select @change="selectedFilter($event)">
          <option disabled value="">Please select one</option>
          <option value="all">show all</option>
          <option value="shared">shared</option>
          <option value="personal">personal</option>
          <option value="work">work</option>
        </select>
      </ion-item>      
      <ion-list>
      <ion-item v-for="f in favorites" :key="f.id">
        <ion-label full style="color:black" @click="showDetail(f.id)">
          [ {{f.type}} ] {{f.name}} - {{f.link}}</ion-label>
        <button ion-button @click="removeFromFavorites(f.id)">DELETE</button>
      </ion-item>
      </ion-list>
			<ion-fab-button  @click="addFavorite">
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
    };
  },
  computed: {
    favorites() {
      return this.$store.getters.filteredFavs;
    },
  },
  methods: {
    removeFromFavorites(id) {
      this.$store.dispatch('removeFromFavorites', id);
    },
    addFavorite() {
      this.$store.dispatch('addFavorite', {
        type: 'shared',
        name: 'aaron saunders',
        link: 'www.link.com',
      });
    },
    showDetail(_id) {
      this.$router.push({ path: '/' + _id });
    },
    selectedFilter(_value) {
      debugger;
      console.log(_value.target.value);
      this.$store.dispatch('setFilter', _value.target.value);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>