<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <button  v-if="showLogout" @click="logout()">Logout</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    showLogout () {
      console.log(this.$store)
      return this.$store.state.user.isLoggedIn
    }
  },
  methods: {
    logout () {
      localStorage.removeItem('access_token')
      localStorage.removeItem('username')
      localStorage.setItem('isLoggedIn', '')
      this.$store.commit('someMutation', false)
      this.$router.push('/') // redirecionar para a página de login
    }
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
