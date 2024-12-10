import { createClient } from '@supabase/supabase-js';

export const authActions = {
  async sendMagicLink(
    state: any,
    email: string,
    isLogin: boolean,
  ): Promise<void> {
    state.isLoading = true;
    state.errorMessage = '';
    const supabaseUrl = '<YOUR_SUPABASE_URL>';
    const supabaseAnonKey = '<YOUR_SUPABASE_ANON_KEY>';

    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          shouldCreateUser: !isLogin,
        },
      });

      if (error) {
        state.errorMessage = error.message;
        console.error('Error sending magic link:', error.message);
      } else {
        alert(
          `A magic link has been sent to ${email}. Please check your inbox.`,
        );
      }
    } catch (err) {
      state.errorMessage = 'An unexpected error occurred.';
      console.error(err);
    } finally {
      state.isLoading = false;
    }
  },

  async fetchUser(state: unknown): Promise<void> {
    const supabaseUrl = '<YOUR_SUPABASE_URL>';
    const supabaseAnonKey = '<YOUR_SUPABASE_ANON_KEY>';

    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    const { data } = await supabase.auth.getSession();
    state.user = data.session?.user || null;
  },

  async signOut(state: unknown): Promise<void> {
    const supabaseUrl = '<YOUR_SUPABASE_URL>';
    const supabaseAnonKey = '<YOUR_SUPABASE_ANON_KEY>';

    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    await supabase.auth.signOut();
    state.user = null;
  },
};
