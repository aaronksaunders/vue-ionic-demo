import Vue from 'vue'
import Router from 'vue-router'
import Item from '../components/Item.vue'
import ItemDetail from '../components/ItemDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Item',
      component: Item
    },
    {
      path: '/:id',
      name: 'ItemDetail',
      component: ItemDetail
    }
  ]
})
