import { createClient } from '@supabase/supabase-js';
import {vueConfig} from "../../vue.config";

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

  async signOut() {
    return await supabase.auth.signOut();
  },
};
