
<template>
  <header class="w-full">
        <div class="bg-sky-600 w-full">
            <nav class="flex justify-end w-full h-full items-center">
                <router-link 
                :to="{name:'login'}"
                class="text-gray-50 font-bold text-sm mr-3 border-sky-900 border-2 p-2 rounded-md"
                >Sign up</router-link>

                <router-link 
                class="text-gray-50 font-bold text-sm mr-3 border-sky-900 border-2 p-2 rounded-md"
                :to="{name:'login'}"
                >Sign in</router-link>
            </nav>
        </div>
  </header>
  <main>
    <router-View></router-View>
  </main>
  

</template>

<style scoped>
  main{
    height: calc(100vh - 40px);
  }
</style>
