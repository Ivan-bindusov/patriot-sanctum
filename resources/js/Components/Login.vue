<template>
    <input v-model="email" type="text" placeholder="Email" class="form-control">
    <input v-model="pass" type="text" placeholder="Password" class="form-control">
    <input @click.prevent="login" type="submit" value="Login" class="btn btn-primary">
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            email: 'user@mail.com',
            pass: '123',
        }
    },
    methods: {
        login() {
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/login', {
                    email: this.email,
                    password: this.pass
                })
                .then(resp => {
                    console.log(resp)
                })
                .catch(err => {
                    console.log(err.response)
                })
            })
        }
    }
}
</script>

<style scoped>

</style>
