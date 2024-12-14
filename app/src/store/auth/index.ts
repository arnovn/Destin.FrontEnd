import { defineStore } from 'pinia';
import { authState } from './state';
import { authGetters } from './getters';
import { authActions } from './actions';

export const useAuthStore = defineStore('auth', {
  state: authState,
  getters: {
    isAuthenticated(): boolean {
      return authGetters.isAuthenticated(this);
    },
    getUser(): unknown {
      return authGetters.getUser(this);
    },
    getLoadingState(): boolean {
      return authGetters.getLoadingState(this);
    },
    getErrorMessage(): string {
      return authGetters.getErrorMessage(this);
    },
  },
  actions: {
    async sendMagicLink(email: string, isLogin: boolean) {
      return authActions.sendMagicLink(this, email, isLogin);
    },
    async fetchUser() {
      return authActions.fetchUser(this);
    },
    async signOut() {
      return authActions.signOut(this);
    },
    async verifyOtp(token: string, type: string) {
      return authActions.verifyOtp(this, token, type);
    },
    async refreshSession() {
      return authActions.refreshSession(this);
    },
  },
});
