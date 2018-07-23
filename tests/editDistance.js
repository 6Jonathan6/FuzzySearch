'use stric'
/*
    Test for editDistance functios
*/
import test from 'ava'
import {editDistance} from '../src/services/EditDistance.js'

test('ED1. Edit  distance between "cat" and "cut" must be 1',t => {
    const ans = editDistance('cut', 'cat')
    t.is(ans,1)
    
});

test('ED2. Edit  distance between "jonathan" and  "jonathan"  must be 0',t => {
    const ans = editDistance('jonathan', 'jonathan')
    t.is(ans,0)
});

test('ED3. Edit edit distance between "2444" and  "2546"  must be 2',t => {
    const ans = editDistance('2444', '2546')
    t.is(ans,2)
});