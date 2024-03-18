        <script setup lang="ts">
import { ref } from 'vue';
import WelcomeMessage from "./components/WelcomeMessage.vue"
const names = ref(['ben', 'jamie'])
const name = ref('');
const isHappy = true
// class binding
const isRed = true;
const borderIsGreen = true;


const isOpen = ref(false)
const toog = () => isOpen.value = !isOpen.value 

const saySomething = ()=>{
  alert("howdy")
}


const vDebugDir = {
  mounted:(el:HTMLElement,binding:any)=>{
    el.style.border = `4px solid ${binding.value || "red"}`;
el.addEventListener("click", () => alert("debug mode"));
  }
}


const imageURL = 'http://test.com/cat.png';
const altText = 'happy cat'
</script>

<template>
<button v-show="false"  v-on:click="saySomething()" v-html="'<p>ewooooooo</p>'"></button>
<img v-bind:src="imageURL" v-bind:alt="altText" />
    <!-- <div  v-dimensiondisplay v-debug-dir="'blue'">
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat modi facilis libero, quo earum voluptatibus
        ipsa molestias! Eveniet nobis facilis minus, expedita animi nam recusandae? Reiciendis sunt iure neque
        asperiores illum alias hic fugiat laboriosam optio nesciunt iste quaerat vitae, assumenda, laudantium repellat.
        Laudantium laborum nesciunt suscipit tenetur eius, nihil inventore cupiditate reprehenderit itaque illum. Eius,
        dolor quaerat ducimus cupiditate impedit odit debitis? Quisquam exercitationem ratione cumque non eaque
        dolores? Cupiditate assumenda facilis dignissimos.
      </h1>
    </div> -->
    <!-- <WelcomeMessage v-dim v-debug /> -->
    <Welcome-Message>
      <template v-slot:body>
        <section>
          <h2>this is the projected template</h2>
        </section>
      </template>
    </Welcome-Message>
    <welcome-Message/>



  <button @click="toog()">{{ isOpen ? 'close' : 'open' }}</button>
  
  <ul>
    <li v-for="name of names">{{name}}</li>
  </ul>
  <input v-model="name">
  {{ name }}







  <input :value="name" @input=" e=>name =e?.target?.value">
  {{ name +"eweh" }}


  <div v-cloak>
    {{ name.length }}
  </div>

  <div v-if="isHappy">
    <h1>yaay! am happy ouu la laah!</h1>
  </div>
  <div v-else-if="isHappy">
    <h1>wayoo! am sad</h1>
  </div>











  <div :class="{ bg_red: isRed }">
      <h2>this h2  has a red background-color</h2>
    </div>
  <div v-show="!isRed">
      <h2>this is not displayed</h2>
    </div>

    <div :class="{ bg_red: isRed, border_green: borderIsGreen }">
      <h2>this h2 might have a red background-color</h2>
    </div>
    <div :class="[{ bg_red: isRed},{ border_green: !borderIsGreen }]">
      <h2>this h2  haves a red backound without a green border</h2>
    </div>
    <div :class="['bg_red', 'border_green']">
      <h2>this h2 might have a red background-color</h2>
    </div>















  <main>

  </main>
</template>


<style scoped>
body{
  max-width: 800px;
}

.bg_red{
  background-color: red;
}
.border_green{
    border: 3px solid green;
}



.box {
  position: relative;
  border: 3px solid green;
  padding: 0 1.3rem;
}

.box::before {
  content: attr(data-dims);
  position: absolute;
  background-color: green;
  color: white;

  top: 50%;
  left: 102%;
  width: 13rem;
  transform: translateY(-50%);
  padding: 5px;
  border-radius: 5px;
}
</style>
