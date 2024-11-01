<template>
  <!-- <div class="card">
    <div class="card-header">
        <router-link :to="{ name : 'userId' , params: { id: user.id } }">{{ user.name }}</router-link>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Username : {{ user.username }}</li>
      <li class="list-group-item">Email : {{ user.email }}</li>
      <li class="list-group-item">Phone : {{ user.phone }}</li>
    </ul>
  </div> -->



  <!-- <div class="grid  grid-cols-1 md:grid-cols-3 gap-4">
    <div class="border py-10 px-24 rounded text-wrap " > -->
      <!-- <span class=" text-gray-500 text-sm">وبسایت من اینه</span> -->
      <!-- <h3 class="text-xl  text-left mb-2 font-bold"><router-link :to="{ name : 'userId' , params: { id: user.id } }">{{ user.name }}</router-link></h3>
      <ul class="  text-gray-500 divide-y text-left text-sm">
        <li class="py-1"> {{ user.username }} </li>
        <li class="py-1">{{ user.email }} </li>
        <li class="py-1">{{ user.phone }} </li>
      </ul> -->
      <!-- <p class="text-sm text-gray-700"> {{ user.username }}</p>
      <p class="text-sm text-gray-700"> {{ user.email }}</p>
      <p class="text-sm text-gray-700"> {{ user.phone }}</p> -->
    <!-- </div>
   
  </div> -->

  

<div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white"></h5>
        <a href="#" class="mt-2 mb-2 md:mr-3 hover:scale-110 inline-block ease-in-out hover:duration-300 hover:underline rounded-full px-6 p-4 font-semibold text-white bg-gradient-to-r from-pink-600 via-purple-400 to-pink-300">
          <router-link :to="{ name : 'userId' , params: { id: user.id } }">{{ user.name }}</router-link></a>
        <!-- <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
          
        </a> -->
   </div>
   <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-900 dark:divide-gray-700 ">
            <li class="py-4 sm:py-4">
                <div class="flex items-start ">
                    <!-- <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image">
                    </div> -->
                    <div class="flex-1 min-w-0 divide-y divide-gray-600">
                        <p class="text-lg text-gray-800 truncate dark:text-gray-500 p-1">
                          {{ user.username }}
                        </p>
                        <p class="text-lg text-gray-500 truncate dark:text-gray-500 p-1">
                          {{ user.email }}
                        </p>
                        <p class="text-lg text-gray-500 truncate dark:text-gray-500 p-1">
                          {{ user.phone }}
                        </p>
                    </div>
                    <!-- <div class="inline-flex items-center text-sm text-gray-500 truncate dark:text-gray-400">
                      
                    </div> -->
                </div>
            </li>
        </ul>
   </div>
</div>

</template>

<script>
export default {
    props: {
        user:Object
    }
};
</script>

<style>
</style>