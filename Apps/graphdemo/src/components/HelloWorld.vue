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
          v-bind:key="personName._id">
          <p>{{personName.name}}</p>
          <button @click="removeName(personName._id)">Remove</button>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
import { ALL_NAMES_QUERY } from '../constants/graphql'
import { DELETE_NAME_MUTATION } from '../constants/graphql'
import { ADD_NAME_MUTATION } from '../constants/graphql'
import random from 'random-key-generator'


export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      name: '',
      //_id: '',
    }
  },
  methods: {
    submitName(){
      var id = random(10)
      this.$apollo.mutate({
        // Mutation
        mutation: ADD_NAME_MUTATION,
        // Parameters
        variables: {
          name: this.name,
          _id: id,
        }
      });
      
    },
    removeName(id){
      this.$apollo.mutate({
        // Mutation
        mutation: DELETE_NAME_MUTATION,
        // Parameters
        variables: {
          _id: id
        }
      });
    },
  },
  apollo: {
      names: {
        query: ALL_NAMES_QUERY,
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
