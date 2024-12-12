export function validateConfig(config: object) {
  for (const [key, value] of Object.entries(config)) {
    if (!value) {
      throw new Error(`Vue Configuration error: Missing value for key: ${key}`);
    }
  }
}

export const vueConfig = {
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL,
  supabaseAnonKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
};

validateConfig(vueConfig);
