import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vddcfysumgbjvqlofjei.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkZGNmeXN1bWdianZxbG9mamVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkzNzg4ODQsImV4cCI6MjA2NDk1NDg4NH0.E1R9CqSpZPCTEfsnchbejDDhYe8fVx20eJAGjC1Ye8s";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
