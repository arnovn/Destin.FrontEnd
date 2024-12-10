import { authState } from './state';

export const authGetters = {
  isAuthenticated: (state: ReturnType<typeof authState>) => !!state.user,
  getUser: (state: ReturnType<typeof authState>) => state.user,
  getLoadingState: (state: ReturnType<typeof authState>) => state.isLoading,
  getErrorMessage: (state: ReturnType<typeof authState>) => state.errorMessage,
};
