<template>
	<table>
		<thead>
			<tr>
				<td>First Name</td>
				<td>Last Name</td>
				<td>Email</td>
				<td>Phone Number</td>
			</tr>
		</thead>
		<tbody>
			<tr v-for="user in users" :key="user.id">
				<td>{{ user.firstName }}</td>
				<td>{{ user.lastName }}</td>
				<td>{{ user.email }}</td>
				<td>{{ user.phoneNumber }}</td>
			</tr>
		</tbody>
	</table>
</template>
<script>
import { getAllUsers } from '../services/UserAPI.js'

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
};
</script>
