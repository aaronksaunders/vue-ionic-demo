<template >
  <ion-page class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-title>TodoList</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-content" padding>
      <ion-card>
        <ion-card-content item-content>
          <ion-item>
            <ion-label>Fave Type</ion-label>
            <ion-select @ionChange="fav.type = $event.target.value">
              <ion-select-option disabled value="">Please select one</ion-select-option>
              <ion-select-option value="shared">shared</ion-select-option>
              <ion-select-option value="personal">personal</ion-select-option>
              <ion-select-option value="work">work</ion-select-option>
            </ion-select>
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
          <div padding item-content>
            <ion-button @click="addFavorite()">ADD FAVORITE</ion-button>
          </div>
        </ion-card-content>
      </ion-card>
      <ion-item>
        <ion-label>
          <strong>Filter On Favorite Type</strong>
        </ion-label>
        <ion-select @ionChange="selectedFilter($event)">
          <ion-select-option value="all">show all</ion-select-option>
          <ion-select-option value="shared">shared</ion-select-option>
          <ion-select-option value="personal">personal</ion-select-option>
          <ion-select-option value="work">work</ion-select-option>
        </ion-select>
      </ion-item>
      <ion-list>
        <ion-item v-for="f in favorites" :key="f.id">
          <ion-label full style="color:black" @click="showDetail(f.id)">
            [ {{f.type}} ] {{f.name}} - {{f.link}}</ion-label>
          <ion-button size="small" color="danger" @click="removeFromFavorites(f.id)">DELETE</ion-button>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>

</template>

<script>
  export default {
    name: "item",
    data() {
      return {
        msg: "Welcome to Your Vue.js App",
        fav: {
          name: "",
          link: "",
          type: ""
        }
      };
    },
    computed: {
      favorites() {
        return this.$store.getters.filteredFavs;
      }
    },
    methods: {
      removeFromFavorites(id) {
        this.$store.dispatch("removeFromFavorites", id);
      },
      addFavorite() {
        this.$store.dispatch("addFavorite", this.fav);
        this.fav = {};
      },
      showDetail(_id) {
        this.$router.push({ path: "/" + _id });
      },
      selectedFilter(_value) {
        debugger;
        console.log(_value.target.value);
        this.$store.dispatch("setFilter", _value.target.value);
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
