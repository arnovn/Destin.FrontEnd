<template>
  <div>
    <NavBar />
    <div class="flex justify-center items-center">
      <div class="max-w-80">
        <main class="flex flex-col items-center mt-large mb-large">
          <h1 class="text-5xl text-color-brown mb-medium">
            {{ isLogin ? 'Log in' : 'Sign up' }}
          </h1>

          <form @submit.prevent="handleSubmit" class="auth-form">
            <label for="email" class="text-color-brown">Email Address</label>
            <BaseInputField
              v-model="email"
              id="email"
              type="email"
              placeholder="Enter your email"
              class="input"
            />
            <div class="flex items-center gap-2">
              <BaseButton type="submit" class="button w-80">
                {{ isLogin ? 'Log in' : 'Send signup code' }}
              </BaseButton>

              <p
                v-tooltip.bottom="
                  'We use magic link registration, where an authentication code is sent to the provided email address for secure signup.'
                "
              >
                ℹ️
              </p>
            </div>
          </form>
          <p class="text-color-brown mt-medium">or</p>
          <div class="w-full flex justify-center gap-4 mt-2">
            <BaseButton
              @click="loginWithProvider('google')"
              class="social-button"
              >Google</BaseButton
            >
            <BaseButton
              @click="loginWithProvider('facebook')"
              class="social-button"
              >Facebook</BaseButton
            >
          </div>

          <div class="mt-2">
            <p class="text-color-brown">
              {{
                isLogin ? "Don't have an account?" : 'Already have an account?'
              }}
              <a
                href="#"
                @click.prevent="toggleAuthMode"
                class="font-bold underline"
                >{{ isLogin ? 'Sign up' : 'Log in' }}</a
              >
            </p>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import NavBar from '@/components/organisms/NavBar.vue';
import BaseInputField from '@/components/atoms/BaseInputField.vue';
import BaseButton from '@/components/atoms/BaseButton.vue';

export default {
  components: {
    BaseButton,
    BaseInputField,
    NavBar,
  },
  setup() {
    const isLogin = ref(true); // State to toggle between login and signup
    const email = ref('');
    const message = ref('');

    const toggleAuthMode = () => {
      isLogin.value = !isLogin.value;
    };

    const handleSubmit = async () => {
      // if (isLogin.value) {
      //   // Handle login with magic link
      //   const { error } = await supabase.auth.signInWithOtp({ email: email.value });
      //   if (error) {
      //     console.error(error.message);
      //   } else {
      //     message.value = 'Magic link sent! Check your email to log in.';
      //   }
      // } else {
      //   // Handle signup with magic link
      //   const { error } = await supabase.auth.signInWithOtp({ email: email.value });
      //   if (error) {
      //     console.error(error.message);
      //   } else {
      //     message.value = 'Magic link sent! Check your email to complete registration.';
      //   }
      // }
    };

    const loginWithProvider = async (provider: string) => {
      // const { error } = await supabase.auth.signInWithOAuth({ provider });
      // if (error) {
      //   console.error(`Error with ${provider} login:`, error.message);
      // }
    };

    return {
      isLogin,
      email,
      message,
      toggleAuthMode,
      handleSubmit,
      loginWithProvider,
    };
  },
};
</script>

<style scoped>
/* Add contact page-specific styles here */
</style>
