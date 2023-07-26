<template>
        <form class="row justify-center" @submit="login()">
            <div class="full-width q-pt-md">
              <button label="Login" color="primary" class="full-width" outline rounded type="submit">Login</button>
            </div>
        </form>
    </template>

<script>
import clientApplication from '../auth'

export default {
  name: 'LoginVue',
  methods: {
    login () {
        // msalInstance["browserStorage"].clear();
      const loginRequest = {
        scopes: ['user.read'], // Add any additional scopes as needed
      }

      clientApplication.loginPopup(loginRequest).then(res => {
        const userName = res.account.name
        const token = res.accessToken
        localStorage.setItem('access_token', token)
        localStorage.setItem('username', userName)
        this.$store.commit('someMutation', true)
        console.log(res)
        this.$router.push('/')
      })
        .catch(erro => console.log(erro))
    }
  }
}

</script>

