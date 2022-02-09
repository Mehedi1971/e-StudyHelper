<template>
  <div>
    <Header />
    <h1>profile</h1>
    <button @click="btn">btn</button>
    <!-- <table>
      <tr v-for="item in profile" :key="item.id">
        <td>{{ item.name }}</td>
        <td>{{ item.email }}</td> -->
    <!-- <td>{{ item.pic }}</td> -->
    <!-- </tr>
    </table> -->
    <div v-for="post in profile" :key="post.id">
      <div class="rounded-md bg-gray-400 m-2">
        <h3>{{ post.pic }}</h3>
        <img src="${post.pic}" alt="" />
        <h3>{{ post.name }}</h3>
        <h3>{{ post.email }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Header from '../components/Header.vue'
export default {
  name: 'Profile',
  components: {
    Header,
  },

  data() {
    return {
      // name: '',
      // email: '',
      // pic: '',
      profile: [],
    }
  },
  methods: {
    btn() {
      axios
        .get('http://localhost:3000/users')
        .then((res) => {
          console.log(res)
          this.profile = res.data
        })
        .catch((error) => {
          console.log(error)
        })
      // if (result) {
      //   console.log(result)
      //   this.profile = result
      // }
    },
  },
  async mounted() {
    // let result = await axios.get('http://localhost:3000/users')
    // // .then((result) => {})
    // // .catch((error) => {
    // //   console.log(error)
    // // })
    // if (result) {
    //   console.log(result)
    //   this.profile = result
    // }
  },
}
</script>

<style lang="scss" scoped></style>
