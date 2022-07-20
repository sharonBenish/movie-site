<template>
  <div>Hello big mahn/woman. You socred {{userscore}}</div>
</template>

<script>
export default {
    computed: {
        userscore() {
            return this.$route.params.userscore
        }
    }
}
</script>

<style>

</style>