<template>
  <div class="hello">
    <div>
      <label> Name: </label>
      <input type="text" v-model="name" />
      <button @click="submitName()">Add</button>
      </div>
      <div>
        <ul>
          <li v-for="personName of names" 
          v-bind:key="personName['.key']">
          <p>{{personName.name}}</p>
          <button @click="removeName(personName['.key'])">Remove</button>
          </li>
        </ul>
      </div>
  </div>

</template>

<script>

import { namesRef } from 'C:\\Users\\malga\\Desktop\\hasura\\Firebase\\firedemo\\src\\firebase.js';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      name: ''
    }
  },
  firebase: {
    names: namesRef
  },
  methods: {
    submitName(){
      namesRef.push({name: this.name, edit: false});
      this.name = ''
    },
    removeName(key){
      namesRef.child(key).remove()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
button {
  background-color: transparent;
  border: 2px solid black;
}
</style>
