<template>
  <div>
    <Header></Header>
    <h1 class="pt-10 bg-gray-200">Welcome {{ name }}</h1>
    <h1 class="pt-10 bg-gray-200">Welcome {{ email }}</h1>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
export default {
  name: 'Dashboard',
  components: {
    Header,
  },
  data() {
    return {
      name: '',
      email: '',
    }
  },

  mounted() {
    const user = localStorage.getItem('user-info')
    this.name = JSON.parse(user).name
    this.email = JSON.parse(user).email
    if (!user) {
      this.$router.push({ name: 'SignUp' })
    }
  },
}
</script>

<style></style>
