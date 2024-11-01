<template>

<html dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" src="@/output.css">
</head>
<body class="">
  <nav class="  bg-white m-6 ">
  <div class="flex flex-wrap container mx-auto justify-between items-center">
    <div class="flex items-center lg:px-14 ">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
      
       <h1 class="text-2xl font-semibold">linda</h1>
    </div>
    <!-- <button class=" hover:scale-105 text-pink-800 hover:text-gray-800" id="nav-toggle">
      <svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>منو</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg>
  </button> -->
    <div class="w-full md:w-auto md:items-center py-2 md:py-0  md:flex lg:px-14 " id="nav-content "  >
      <ul class="flex flex-col md:flex-row  md:space-y-0  md:mb-0">
        <li href="#" class="font-semibold mr-1 md:mr-9 ">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li href="#" class=" mr-1 md:mr-9">
          <router-link class="nav-link" to="/users">Users</router-link>
        </li>
        <li href="#" class=" mr-1 md:mr-9">
          <router-link class="nav-link" to="/posts">Posts</router-link>
        </li>
      </ul>
     <!-- <a href="#" class="mt-6 mb-8 md:mr-3 hover:scale-110 inline-block ease-in-out hover:duration-300 hover:underline rounded-full px-6 p-4 font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">لینک فعال</a> -->
    </div>
  </div>
  
</nav>

</body>
</html>
</template>

<script >
export default {
    name : "HeaderComponent"
};

// function linda () {
//     if (navMenuDiv.classList.contains("hidden")) {
//       navMenuDiv.classList.remove("hidden");
//     } else {
//       navMenuDiv.classList.add("hidden");
//     }
//   };
// </script>
<!-- <script>
  /*Toggle dropdown list*/
  /*https://gist.github.com/slavapas/593e8e50cf4cc16ac972afcbad4f70c8*/

  var navMenuDiv = document.getElementById("nav-content");
  var navMenu = document.getElementById("nav-toggle");

  navMenu.addEventListener('click' , function(e) {
    if (navMenuDiv.classList.contains("hidden")) {
      navMenuDiv.classList.remove("hidden");
    } else {
      navMenuDiv.classList.add("hidden");
    }
  });
</script> -->

<style scoped>
.router-link-active {
  color: rgba(0, 0, 0, 0.9) !important;
  border-bottom: 2px solid rgba(0, 0, 0, 0.9) !important;
}
</style>