<template>
    <ion-page>
        <ion-header>
            <ion-toolbar class="toolbar-md-primary">
                <ion-buttons slot="start" @click="goBack()">
                    <ion-icon name="arrow-back" style="font-size: 25px;"></ion-icon>
                </ion-buttons>
                <ion-title>Item Detail</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="content">
            {{ $route.params.id }}
        </ion-content>
    </ion-page>
</template>

<script>
export default {
  name: 'item-detail',
  data() {
    return {
      msg: 'Item Detail Page',
      todo: null,
    };
  },
  methods: {
    addTodo() {},
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>

</style>