<template>
    <header class="w-full">
        <div class="bg-sky-700 w-full h-20">
            <nav class="flex justify-end w-full h-full items-center">
                <router-link 
                :to="{name:'home'}"
                class="text-white font-thin text-lg mr-3 border-sky-900 border-2 p-2 rounded-md"
                >Sign up</router-link>

                <router-link 
                :to="{name:'home'}"
                class="text-white font-thin text-lg mr-3 border-sky-900 border-2 p-2 rounded-md"
                >Sign in</router-link>
            </nav>
        </div>
    </header>
    <router-view></router-view>
</template>