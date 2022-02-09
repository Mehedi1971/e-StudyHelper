<template>
  <div>
    <div
      class="bg-white text-black py-3.5 px-6 shadow md:flex justify-between items-center"
    >
      <!-- fixed inset-x-0 -->
      <div class="flex items-center cursor-pointer pl-3 pr-3">
        <span class="text-green-500 text-xl mr-1">
          <i class="bi bi-stack"></i>
        </span>
        <h1 class="text-2xl font-bold">
          <span class="text-blue-500">e</span
          ><span class="text-green-500">-StudyHelper</span>
        </h1>
      </div>
      <ul class="md:flex md:items-center no-underline">
        <!-- <li class="md:mx-4">
          <router-link to="/" class="text-base hover:text-green-500"
            >Home</router-link
          >
        </li> -->
        <li class="md:mx-4">
          <router-link to="/forum" class="text-base hover:text-green-500"
            >Forum</router-link
          >
        </li>
        <li class="md:mx-4">
          <router-link to="/about" class="text-base hover:text-green-500"
            >About</router-link
          >
        </li>
        <li class="md:mx-4">
          <router-link to="/contact" class="text-base hover:text-green-500"
            >Contact</router-link
          >
        </li>

        <li class="md:mx-4">
          <router-link
            to="/Login"
            class="text-base hover:text-green-500"
            @click="logout"
            >Logout</router-link
          >
        </li>
        <li class="md:mx-4">
          <h1 class="text-base">Hi,{{ name }}</h1>
        </li>
      </ul>

      <button
        @click="btn"
        data-dropdown-toggle="dropdown"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Dropdown button
        <svg
          class="ml-2 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      <!-- Dropdown menu -->
      <div
        v
        class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
      >
        <ul class="py-1" aria-labelledby="dropdownButton">
          <li>
            <a
              href="#"
              class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >Dashboard</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >Settings</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >Earnings</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >Sign out</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div><router-view /></div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      name: '',
      abcd: false,
    }
  },

  methods: {
    logout() {
      localStorage.clear()
      this.$router.push({ name: 'Home' })
    },
    btn() {
      this.abcd = !this.abcd
    },
  },
  mounted() {
    const user = localStorage.getItem('user-info')
    this.name = JSON.parse(user).name
    if (!user) {
      this.$router.push({ name: 'SignUp' })
    }
  },
}
</script>

<style></style>
