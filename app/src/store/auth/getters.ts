import {AuthState} from "@/types/auth";

export const authGetters = {
  isAuthenticated: (state: AuthState) => !!state.user,
  getUser: (state: AuthState) => state.user,
  getLoadingState: (state: AuthState) => state.isLoading,
  getErrorMessage: (state: AuthState) => state.errorMessage,
};
