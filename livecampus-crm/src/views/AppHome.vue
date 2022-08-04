<template>
	<router-link to="/user/new" custom v-slot="{ navigate }">
    <button @click="navigate">Créer un nouveau utilisateur</button>
  </router-link>
	<table>
		<thead>
			<tr>
				<th>First Name</th>
				<th>Last Name</th>
				<th>Email</th>
				<th>Phone Number</th>
				<th>Modifier</th>
				<th>Supprimer</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="user in users" :key="user.id">
				<td>{{ user.firstName }}</td>
				<td>{{ user.lastName }}</td>
				<td>{{ user.email }}</td>
				<td>{{ user.phoneNumber }}</td>
				<td>
					<router-link :to="`/user/${ user.id }`" custom v-slot="{ navigate }">
						<button @click="navigate">Modifier</button>
					</router-link>
				</td>
				<td><button class="red" @click="deleteUser(user)">Supprimer</button></td>
			</tr>
		</tbody>
	</table>
</template>
<script>
import { getAllUsers, deleteUser } from '../services/UserAPI.js'

export default {
	name: "HomePage",
	data() {
		return {
			users: [],
		};
	},
	async mounted() {
    this.users = await getAllUsers();
	},
	methods: {
		getAllUsers() {
			getAllUsers().then(users => {
				this.users = users;
			});
		},
		deleteUser(user) {
			deleteUser(user.id).then(() => {
				this.getAllUsers();
			});
		},
	},
};
</script>
<style>
	table {
		width: 80%;
		margin: auto;
		border: 1px solid black;
	}
	th {
		padding: 5px;
		background-color: #ccc;
	}
	td {
		padding: 5px;
	}
	button {
		margin: 10px;
		padding: 10px 15px;
		background-color: rgb(39, 113, 211);
		color: #fff;
		border: none;
		border-radius: 5px;
		cursor: pointer;
	}
	.red {
		background-color: rgb(255, 57, 57);
	}

</style>
