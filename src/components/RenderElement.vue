<template>

        <code v-if="props.type == 'code'" style=" white-space: pre-line;">{{ props.value }}</code>
    
  
   
        <p v-if="props.type == 'text'" class="text-justify">{{ props.value }}</p>


        <img v-if="props.type == 'image'" :id="props.value"/>


        <h2 v-if="props.type == 'heading'" class="text-2xl font-bold"> {{ props.value }}</h2>


        <ul v-if="Array.isArray(props.value)" class="list-disc list-inside">
            <li v-for="item in props.value">{{ item }}</li>
        </ul>
        <br>

</template>

<script setup>
const props = defineProps(["type", "value"]);
import { getStorage, ref, getDownloadURL } from "firebase/storage";

if (props.type === "image"){
    const storage = getStorage();
getDownloadURL(ref(storage, props.value + '.png'))
  .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'

    // This can be downloaded directly:
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      const blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();

    // Or inserted into an <img> element
    const img = document.getElementById(props.value);
    img.setAttribute('src', url);
  })
  .catch((error) => {
    // Handle any errors
  });
}



</script>