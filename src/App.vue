<template>
  <div id="app">
    <form  role="form">
      <fieldset >
        <legend>Fuzzy Search</legend>
        <ul>
          <li>
            <label id="labelSearch" for="search">
                <p>Fuzzy search:</p>
            </label>
            <input id="search" type="text" v-model="searchInput" placeholder="Type here" autocomplete="off">
          </li>
        </ul>
      </fieldset>
    </form>
    <ul class="transactionsList">
      <transaction v-for="trans in transactionsList" :key="trans.date" :transaction="trans"></transaction>
    </ul>
  </div>
</template>

<script>
import { getTrans } from './services/Transactions.js'
import{ search } from './services/EditDistance.js'
import Transaction from './components/layout/Transaction.vue'
export default {
  name: 'app',
  components:{
    transaction :Transaction,
  },

  created(){
     this.transactions =  getTrans()
  },

  data () {
    return {
      transactions:null,
      searchInput:"",
    }
  },

  computed:{
    transactionsList(){
       return  search(this.transactions, this.searchInput)
    }
  }
}
</script>

<style>
  @import url('./assets/styles/App.css');
</style>
