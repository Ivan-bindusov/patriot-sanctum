<template>
    <h1>Get</h1>
</template>

<script>
export default {
    name: "Get",
    methods: {
        getData() {
            axios.get('/api/get')
            .then(res => {
                console.log(res)
            })
        }
    },
    mounted() {
        this.getData()
    }
}
</script>

<style scoped>

</style>
