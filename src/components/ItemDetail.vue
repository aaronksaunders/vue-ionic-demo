<template>
  <ion-page class="ion-page">
    <ion-header>
      <ion-toolbar class="toolbar-md-primary">
        <ion-buttons slot="start">
          <ion-button @click="goBack()">
            <ion-icon name="arrow-back" style="font-size: 25px;"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>Item Detail</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-content" padding>
      route param : {{ $route.params.id }}
      <pre>{{ currentItem }}</pre>
    </ion-content>
  </ion-page>
</template>

<script>
  export default {
    name: "item-detail",
    computed: {
      currentItem() {
        return this.$store.getters.currentItem(this.$route.params.id);
      }
    },
    data() {
      return {
        msg: "Item Detail Page",
        todo: null
      };
    },
    methods: {
      addTodo() {},
      goBack() {
        debugger;
        this.$router.go(-1);
      }
    }
  };
</script>

<style>
</style>