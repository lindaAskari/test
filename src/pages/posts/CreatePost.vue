<template>
  <!-- <div class="col-md-6"> -->
    <!-- <h2 class="mb-5">Create Post :</h2> -->

    <!-- <form @submit.prevent="validate"> -->
      <!-- <div class="mb-3">
        <label class="form-label">Title</label>
        <input
          type="text"
          class="form-control"
          v-model.lazy.trim="form.title"
        />
        <div class="form-text text-danger">
          {{ form.titleErrorText }}
        </div>
      </div>
      <div class="mb-3">
        <label class="form-label">Body</label>
        <textarea class="form-control" v-model.lazy.trim="form.body"></textarea>
        <div class="form-text text-danger">
          {{ form.bodyErrorText }}
        </div>
      </div>

      <button type="submit" class="btn btn-dark" :disabled="loading">
        <div
          v-if="loading"
          class="spinner-border spinner-border-sm"
          role="status"
        ></div>
        Create Post
      </button> -->
    <!-- </form> -->
  <!-- </div> -->
  <form @submit.prevent="validate">
  <h2 class="text-3xl mb-6">Create Post :</h2>
  <label for="input-group-1" class="block mb-2 text-sm font-medium text-gray-900 ">Title</label>
<div class="relative mb-6">
  <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
<svg aria-hidden="true" fill="currentColor" viewBox="0 0 1024 1024" class="w-4 h-4 text-gray-500 "  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M927.4 273.5v-95.4h-87.9V82.8h-201v95.3h-87.9v95.4h-78.5v-95.4h-88V82.8H183.2v95.3H95.3v95.4H16.7v190.6h78.6v95.4h75.3v95.3H246v95.3h87.9v95.4h100.5v95.3h153.9v-95.3h100.4v-95.4h88v-95.3H852.1v-95.3h75.3v-95.4h78.5V273.5z" fill="#E02D2D" /></svg>

  </div>
  <input type="text" id="input-group-1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full ps-10 p-2.5" v-model.lazy.trim="form.title">
  <div class=" text-red-600 ">
          {{ form.titleErrorText }}
  </div>
</div>
<label for="website-admin" class="block mb-2 text-sm font-medium text-gray-900">Body</label>
<div class="flex mb-4">
  <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md ">
    <svg aria-hidden="true" viewBox="0 0 1024 1024" class="w-4 h-4 text-gray-500"  fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M206 466.1h77.8v81.2H206zM740.7 466.1h77.8v81.2h-77.8zM283.9 400.2h91.4v65.9h-91.4zM649.3 400.2h91.4v65.9h-91.4zM375.2 334.2h91.4v65.9h-91.4zM558 334.2h91.4v65.9H558zM466.6 46.1H558v288.2h-91.4z"/><path d="M128.2 579.5h155.7v358.7H128.2z" fill="#E02D2D" /><path d="M128.2 547.3h155.7v390.9H128.2z" fill="#E02D2D" /><path d="M10.6 665h390.9v155.7H10.6zM740.7 579.5h155.7v358.7H740.7z" fill="#E02D2D" /><path d="M740.7 547.3h155.7v390.9H740.7z" fill="#E02D2D" /><path d="M623.1 665H1014v155.7H623.1z"  fill="#E02D2D"/></svg>
  </span>
  <input type="text" id="website-admin" class="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500  flex-1  w-full text-sm border-gray-300 py-16 line-clamp-3" v-model.lazy.trim="form.body">
  <div class=" text-red-600 m-20 ">
          {{ form.bodyErrorText }}
        </div>
</div>


    <button type="submit" class="mt-2 mb-2 md:mr-3 hover:scale-110 inline-block ease-in-out hover:duration-300 hover:underline rounded-full px-4 p-2 font-semibold text-white bg-gradient-to-r from-pink-600 via-purple-400 to-pink-300" :disabled="buttonLoading">
      <div
        v-if="buttonLoading"
        class="spinner-border spinner-border-sm"
        role="status"
      ></div>
      Create Post
    </button>
  </form>

</template>

<script>
import { reactive, ref } from "vue";
import axios from "axios";
import Swal from "sweetalert2";

export default {
  setup() {
    const form = reactive({
      title: "",
      titleErrorText: "",
      body: "",
      bodyErrorText: "",
    });
    const loading = ref(false);

    function validate() {
      if (form.title === "") {
        form.titleErrorText = "Title is required";
      } else {
        form.titleErrorText = "";
      }
      if (form.body === "") {
        form.bodyErrorText = "Body is required";
      } else {
        form.bodyErrorText = "";
      }

      if (form.title !== "" && form.body !== "") {
        loading.value = true;
        createPost();
      }
    }

    function createPost() {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          title: form.title,
          body: form.bady,
          userId: 1,
        })
        .then(function () {
          loading.value = false;

          Swal.fire({
            title: "Thanks!",
            text: "Post created successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });

        })
        .catch(function (error) {
          console.log(error);
        });
    }

    return { form, validate, loading };
  },
};
</script>

<style>
</style>