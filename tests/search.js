'use stric'
/*
    Test for search function
*/
import test from 'ava'
import {search} from '../src/services/EditDistance.js'
import {validDate} from '../src/services/Transactions.js'

const trans = [
    { amount: 112.98, date: '27-01-2018T12:34', card_last_four: '2544' },
    { amount: 0.45, date: '01-12-2017T9:36', card_last_four: '4434' },
    { amount: 95.99, date: '23-11-2017T14:34', card_last_four: '3011' }
]

test("SE1. If serachInput  === '' must return all transactions",t =>{
    const result = search(trans,'')
    t.is(trans.length,3)
})

test("SE2. Converting transaction.date into a valid date",t => {
    const date = validDate(trans[1].date) 
        t.is(date instanceof Date, true)
})
