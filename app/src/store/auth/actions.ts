import type { AuthState } from '@/types/auth';
import { supabaseService } from '@/services/supabaseService';
import { AuthKeys } from '@/types/auth';

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
    const { data, error } = await supabaseService.getSession();
    if (error) throw new Error(error.message);
    if (!data.session) throw new Error('No session provided in auth response');

    localStorage.setItem(AuthKeys.AccessToken, data.session.access_token);
    localStorage.setItem(AuthKeys.RefreshToken, data.session.refresh_token);

    store.accessToken = data.session.access_token;
    store.refreshToken = data.session.refresh_token;
    store.user = data.session.user;
  },

  async signOut(store: AuthState): Promise<void> {
    const res = await supabaseService.signOut();
    if (res.error) throw Error(res.error.message);
    store.user = null;
    store.accessToken = undefined;
    store.refreshToken = undefined;
    localStorage.removeItem(AuthKeys.AccessToken);
    localStorage.removeItem(AuthKeys.RefreshToken);
  },

  async verifyOtp(store: AuthState, token: string, type: string) {
    const { data, error } = await supabaseService.verifyOtp(token, type);
    if (error) throw new Error(error.message);
    if (!data.session) throw new Error('No session provided in auth response');

    localStorage.setItem(AuthKeys.AccessToken, data.session.access_token);
    localStorage.setItem(AuthKeys.RefreshToken, data.session.refresh_token);

    store.accessToken = data.session.access_token;
    store.refreshToken = data.session.refresh_token;
    store.user = data.user;
  },

  async loadSession(store: AuthState) {
    // Load session from localStorage (optional)
    const accessToken = localStorage.getItem(AuthKeys.AccessToken);
    const refreshToken = localStorage.getItem(AuthKeys.RefreshToken);

    if (accessToken && refreshToken) {
      store.accessToken = accessToken;
      store.refreshToken = refreshToken;

      // Fetch user info (if required)
      const { data } = await supabaseService.getUser(accessToken);
      store.user = data.user;
    }
  },

  async refreshSession(store: AuthState) {
    const refreshToken = localStorage.getItem(AuthKeys.RefreshToken);
    if (!refreshToken) {
      console.error('No refresh token found.');
      return;
    }

    const { data, error } = await supabaseService.refreshSession(refreshToken);

    if (error) throw new Error(error.message);
    if (!data.session) throw new Error('No session provided in auth response');

    localStorage.setItem('accessToken', data.session.access_token);
    localStorage.setItem('refreshToken', data.session.refresh_token);
    store.accessToken = data.session.access_token;
    store.refreshToken = data.session.refresh_token;
    store.user = data.user;
  },
};
