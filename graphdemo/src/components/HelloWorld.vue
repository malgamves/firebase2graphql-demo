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
            <div v-if="!personName.edit">
              <p>{{personName.name}}</p>
              <button @click="removeName(personName._id)">Remove</button>
              <button @click="setEditName(personName._id)">Edit</button>
            </div>
            <div v-else>
              <input type="text" v-modal="personName.name">
              <button @click="saveEdit(personName)">Save</button>
              <button @click="cancelEdit(personName._id)">Cancel</button>
            </div>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
import { ALL_NAMES_QUERY } from '../constants/graphql'
import { DELETE_NAME_MUTATION } from '../constants/graphql'
import { ADD_NAME_MUTATION } from '../constants/graphql'
import { SET_EDIT_MUTATION} from '../constants/graphql'
import { CANCEL_EDIT_MUTATION} from '../constants/graphql'
import { SAVE_EDIT_MUTATION} from '../constants/graphql'
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
    setEditName(id){
      this.$apollo.mutate({
        // Mutation
        mutation: SET_EDIT_MUTATION,
        // Parameters
        variables: {
          _id: id,
          edit: true,
        }
      });
    },
    cancelEdit(id) {
this.$apollo.mutate({
        // Mutation
        mutation: CANCEL_EDIT_MUTATION,
        // Parameters
        variables: {
          _id: id,
          edit: false,
        }
      });
    },
    saveEdit(name) {
this.$apollo.mutate({
        // Mutation
        mutation: SAVE_EDIT_MUTATION,
        // Parameters
        variables: {
          _id: name.id,
          name: name.name,
          edit: false,
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
