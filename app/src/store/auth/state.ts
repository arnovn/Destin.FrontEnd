import { AuthState } from '@/types/auth';

// Initial state: not authenticated
export const authState = (): AuthState => ({
  user: null,
  isLoading: false,
  errorMessage: '',
  accessToken: '',
  refreshToken: '',
});
