<template>
    <li class="transactionContainer">
        <span class="date">{{transaction.date.toDateString()}} <br> {{transaction.date.getHours() + ":" + transaction.date.getMinutes()}} </span>
        <span class="amount">Amount: ${{transaction.amount}}</span>
        <span class="card"> Credit<wbr>Card: {{transaction.card_last_four}}</span>
    </li> 
</template>
<style scoped>
   @import url('../../assets/styles/transaction.css');
</style>


<script>
export default {
    props:{
        transaction:Object,
    },
}
</script>

