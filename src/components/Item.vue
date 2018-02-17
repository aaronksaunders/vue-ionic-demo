<template >
<ion-page>
  <ion-header>
    <ion-toolbar class="toolbar-md-primary">
      <ion-title>TodoList</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="content" padding>

    <ion-card>
      <ion-item>
        <ion-label>Fave Type</ion-label>
        <select v-model="fav.type">
          <option disabled value="">Please select one</option>
          <option value="shared">shared</option>
          <option value="personal">personal</option>
          <option value="work">work</option>
        </select>
      </ion-item>
      <ion-item>
        <ion-label>Fave Name</ion-label>
        <ion-input type="text" placeholder="name to associate with link" :value="fav.name" v-on:input="fav.name = $event.target.value">
        </ion-input>
      </ion-item>
      <ion-item>
        <ion-label>Fave Link</ion-label>
        <ion-input type="text" placeholder="website url" :value="fav.link" v-on:input="fav.link = $event.target.value">
        </ion-input>
      </ion-item>
      <div padding>
        <ion-button @click="addFavorite()">ADD FAVORITE</ion-button>
      </div>
    </ion-card>
    <ion-item>
      <ion-label>
        <strong>Filter On Favorite Type</strong>
      </ion-label>
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
    <!-- <ion-fab-button  @click="addFavorite">
        <ion-icon name="add"></ion-icon>
      </ion-fab-button> -->

  </ion-content>
</ion-page>


</template>

<script>
export default {
  name: 'item',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      fav: {
        name: '',
        link: '',
        type: '',
      },
    };
  },
  computed: {
    favorites() {
      return this.$store.getters.filteredFavs;
    },
  },
  methods: {
    updateInput(_event, ref) {
      console.log(this.$refs[ref]);
      this[ref] = this.$refs[ref].value;
      debugger;
    },
    removeFromFavorites(id) {
      this.$store.dispatch('removeFromFavorites', id);
    },
    addFavorite() {
      this.$store.dispatch('addFavorite', this.fav);
      this.fav = {};
    },
    showDetail(_id) {
      this.$router.push({ path: '/' + _id });
    },
    selectedFilter(_value) {
      console.log(_value.target.value);
      this.$store.dispatch('setFilter', _value.target.value);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>