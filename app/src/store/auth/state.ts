import { AuthState } from '@/types/auth';

export const authState = (): AuthState => ({
  user: null as unknown,
  isLoading: false,
  errorMessage: '',
});
