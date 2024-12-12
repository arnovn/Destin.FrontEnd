<template>
  <div class="auth-verify">
    <h1>Verifying...</h1>
    <div v-if="loading">Please wait...</div>
    <div v-else-if="success">Verification successful! Redirecting...</div>
    <div v-else-if="error">{{ error }}</div>
  </div>
</template>

<script>
import { supabase } from '@/services/supabaseService';

export default {
  data() {
    return {
      loading: true,
      success: false,
      error: null,
    };
  },
  async mounted() {
    try {
      // Extract query parameters
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get('token_hash');
      const type = urlParams.get('type'); // Default to magic link

      if (!token) {
        throw new Error('Token is missing.');
      }

      // Call Supabase's verifyOtp method
      const { data, error } = await supabase.auth.verifyOtp({
        token,
        type, // Can be 'magiclink' or 'email'
      });

      if (error) {
        throw new Error(error.message);
      }

      // Handle successful verification
      console.log('Session:', data);
      this.success = true;

      // Redirect to dashboard or another page
      setTimeout(() => {
        this.$router.push('/dashboard');
      }, 2000);
    } catch (err) {
      // Handle errors
      this.error = err.message;
      console.error('Verification error:', err);
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style scoped>
.auth-verify {
  text-align: center;
  padding: 20px;
}
</style>
