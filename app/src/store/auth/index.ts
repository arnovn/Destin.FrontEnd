import { defineStore } from 'pinia';
import { authState } from './state';
import { authGetters } from './getters';
import { authActions } from './actions';

export const useAuthStore = defineStore('auth', {
  state: authState,
  getters: authGetters,
  actions: authActions,
});
