<template>
  

  <!-- <div
    class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <NavLanding /> -->
    <div
    class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <NavLanding />
    <div class="max-w-md w-full space-y-8">
      <div>
        <!-- <div class="md:flex justify-center md:items-center cursor-pointer">
          <span class="text-green-500 text-xl mr-1">
            <i class="bi bi-stack"></i>
          </span>
          <h1 class="text-2xl font-bold">
            <router-link to="/" class="text-2xl hover:text-green-500">
              <span class="text-blue-500">e</span
              ><span class="text-green-500">-StudyHelper</span></router-link
            >
          </h1>
        </div> -->
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Update Your profile
        </h2>
      </div>
      <!-- autocomplete="email"
            required="" -->
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="name" class="sr-only">User Name</label>
          <input
            type="text"
            v-model="profile.name"
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="User Name"
          />
        </div>
        <div>
          <label for="studentId" class="sr-only">studentId</label>
          <input
            id="studentId"
            name="studentId"
            type="text"
            
            v-model="profile.studentId"
            required=""
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="studentId"
          />
        </div>
        
        <div>
          <label for="Address" class="sr-only">Address</label>
          <input
            id="Address"
            name="Address"
            type="text"
            
            v-model="profile.Address"
            required=""
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Address"
          />
        </div>

        <div>
          <label for="description" class="sr-only">Description</label>
          <input
            id="description"
            name="description"
            type="text"
            
            v-model="profile.description"
            required=""
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="description"
          />
        </div>
        
        <div>
          <label for="email" class="sr-only">Email address</label>
          <input
            type="text"
            v-model="profile.email"
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
          />
        </div>
        <!-- <div>
          <label for="password" class="sr-only">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            autocomplete="current-password"
            v-model="profile.password"
            required=""
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Password"
          />
        </div> -->
        
      </div>
      
      

      

      <div>
        <button
          type="submit"
          class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          @click="update"
        >
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
          </span>
update        </button>
      </div>
    </div>
  </div>
</template>

<script>
import NavLanding from '../components/NavLanding.vue'
import axios from 'axios'
export default {
  name: 'SignUp',
  components: {
    NavLanding,
  },
  data() {
    return {
      profile: {
      name: '',
      email: '',
      password: '',
      pic: '',
      description: '',
      studentId: '', 
      Address:''
      },

      
    }
  },
  methods: {
    async update() {
      console.log( this.profile)
      const result = await axios.put('http://localhost:3000/users/'+this.$route.params.id, {
        name: this.profile.name,
        email: this.profile.email,
        password: this.profile.password,
        pic: this.profile.pic,
        description: this.profile.description,
        studentId: this.profile.studentId,
        Address: this.profile.Address,
      })
      console.log(result)
      if (result.status == 200) {
        this.$router.push({ name: 'Profile' })
      }
    },
  },
 async mounted() {
    const user = localStorage.getItem('user-info')
    if (!user) {
      this.$router.push({ name: 'Home' })
    }
    const result = await axios.get('http://localhost:3000/users/'+this.$route.params.id)
    // console.log(result.data)
    this.profile=result.data
    // +this.$route.params.id
  },
}
</script>

<style></style>
