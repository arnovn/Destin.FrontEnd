import {
  AuthError,
  AuthResponse,
  createClient,
  UserResponse,
  VerifyOtpParams,
} from '@supabase/supabase-js';
import { vueConfig } from '../../vue.config';

const supabase = createClient(vueConfig.supabaseUrl, vueConfig.supabaseAnonKey);

export const supabaseService = {
  async sendMagicLink(email: string, shouldCreateUser: boolean) {
    return await supabase.auth.signInWithOtp({
      email,
      options: { shouldCreateUser },
    });
  },

  async getSession() {
    return await supabase.auth.getSession();
  },

  async getUser(accessToken: string): Promise<UserResponse> {
    return await supabase.auth.getUser(accessToken);
  },

  async signOut(): Promise<{ error: AuthError | null }> {
    return await supabase.auth.signOut();
  },

  async verifyOtp(token: string, type: string): Promise<AuthResponse> {
    return await supabase.auth.verifyOtp({
      token,
      type, // Can be 'magiclink' or 'email'
    } as VerifyOtpParams);
  },

  async refreshSession(refreshToken: string): Promise<AuthResponse> {
    return await supabase.auth.refreshSession({ refresh_token: refreshToken });
  },
};
