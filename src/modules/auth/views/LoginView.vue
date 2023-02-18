<template>
    <div class="md:flex md:items-center md:h-full md:justify-center bg-login overflow-hidden">

        <div  class="bg-gray-300 lg:w-7/12 lg:h-full lg:flex lg:items-center sm:hidden hidden h-auto">
            <img src="../../../assets/login.jpg" alt="" >
        </div>
        <div 
            class="lg:h-full lg:w-5/12 lg:border-none flex flex-col items-center justify-center
            md:w-5/12 md:py-8 md:border-2 md:border-sky-500 md:border-solid md:rounded-3xl
            md:bg-cover sm:bg-white
            mt-8
            ">
            <div>
                <h1 class="text-3xl font-bold mb-2 text-center">Sign In</h1>
                <h3 class="text-2xl font-thin">Welcome back!</h3>
            </div>
            <form action="" class="flex flex-col justify-center p-5 w-10/12">
                <div class="mb-5">
                    <label id="email" class="mb-2 block font-bold">Email</label>
                    <input type="email" name="email" class="border p-1 w-full rounded-lg">
                </div>
                <div class="mb-5">
                    <label id="password" class="mb-2 block font-bold">Password</label>
                    <input type="password" name="password" class="border p-1 w-full rounded-lg">
                </div>
                <div class="mb-5 flex flex-col items-center">
                    <button class="mb-3 rounded-lg bg-sky-500 p-3 text-sm text-white font-bold">Create account</button>
                    <p class="mb-3">or</p>
                </div>
                <div class="grid grid-cols-2 gap-5">
                    <div  class="flex justify-end">facebook</div>
                    <div class="bg-sky-500">
                        <div id="g_id_onload"
                            data-client_id="55235280503-hdlb0hc6vqhui3g362u1pudnfcjqe6ci.apps.googleusercontent.com"
                            data-context="signup"
                            data-ux_mode="redirect"
                            data-login_uri="http://localhost:3000/api/auth/register/google"
                            data-nonce=""
                            data-itp_support="true">
                        </div>

                        <div class="g_id_signin"
                            data-type="icon"
                            data-shape="circle"
                            data-theme="filled_blue"
                            data-text="signup_with"
                            data-size="large"
                            data-locale="en-US">
                        </div>
                        
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts" setup>

    let recaptchaScript = document.createElement('script');
    recaptchaScript.setAttribute('src', 'https://accounts.google.com/gsi/client');
    document.head.appendChild(recaptchaScript);

</script>


<style scoped>

@media screen and (max-width: 1024px) {
    .bg-login{
        background-image: url('../../../assets/login.jpg');
    }
    
}

@media screen and (max-width: 640px) {
    .bg-login{
        background-image: none;
    }

    .image {
        display: hidden;
    }
    
}
</style>