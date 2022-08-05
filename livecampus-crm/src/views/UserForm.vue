<template>
  <h1 v-if="newUser">Créer un nouvel utilisateur</h1>
  <h1 v-else>Modifier l'utilisateur</h1>

  <div class="form">
    <label for="firstName">Prénom</label>
    <input type="text" id="firstName" v-model="user.firstName" />
    <label for="lastName">Nom</label>
    <input type="text" id="lastName" v-model="user.lastName" />
    <label for="email">Email</label>
    <input type="text" id="email" v-model="user.email" />
    <label for="phoneNumber">Numéro de téléphone</label>
    <input type="text" id="phoneNumber" v-model="user.phoneNumber" />
    <button v-if="newUser" @click="createUser">Créer</button>
    <button v-else @click="updateUser">Modifier</button>
  </div>
</template>
<script>
import { getUserById, modifyUser, createUser } from '../services/UserAPI.js';

  export default {
    name: 'UserForm',
    components: {
    },
    data() {
      return {
        newUser: false,
        user : {
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
        },
      };
    },
    mounted() {
      this.$route.params.id === 'new' ? this.newUser = true : this.newUser = false;
      if (!this.newUser) {
        console.log('getUserById', this.$route.params.id);
        this.getUserById(this.$route.params.id);
      }
    },
    methods: {
      createUser() {
        createUser(this.user).then(() => {
          this.$router.push('/');
        });
      },
      getUserById(id) {
        getUserById(id).then(user => {
          this.user = user;
        });
      },
      updateUser() {
        modifyUser(this.user.id, this.user).then(() => {
          this.$router.push('/');
        });
      },
    },
  };
</script>
<style>
.form {
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: auto;
}
</style>