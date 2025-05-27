import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.42.3/+esm";

const supabaseUrl = "https://dacwjlvyeeanbbkusbte.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRhY3dqbHZ5ZWVhbmJia3VzYnRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgzMjg3ODgsImV4cCI6MjA2MzkwNDc4OH0.lyfDPQ3vV3kV8mKyyYQAImhToIwbPAEuEA3WLbRqNHk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
