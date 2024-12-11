import type { AuthState } from '@/types/auth';
import { supabaseService } from '@/services/supabaseService';

export const authActions = {
  async sendMagicLink(
    store: AuthState,
    email: string,
    isLogin: boolean,
  ): Promise<void> {
    store.isLoading = true;
    store.errorMessage = '';
    try {
      const { error } = await supabaseService.sendMagicLink(email, !isLogin);
      if (error) {
        store.errorMessage = error.message;
        console.error('Error sending magic link:', error.message);
      } else {
        alert(
          `A magic link has been sent to ${email}. Please check your inbox.`,
        );
      }
    } catch (err) {
      store.errorMessage = 'An unexpected error occurred.';
      console.error(err);
    } finally {
      store.isLoading = false;
    }
  },

  async fetchUser(store: AuthState): Promise<void> {
    const { data } = await supabaseService.getSession();
    store.user = data.session?.user || null;
  },

  async signOut(store: AuthState): Promise<void> {
    await supabaseService.signOut();
    store.user = null;
  },
};
