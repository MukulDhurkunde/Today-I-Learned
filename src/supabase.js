import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kludbfjsaambroxhqoqw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsdWRiZmpzYWFtYnJveGhxb3F3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgzODQwNTksImV4cCI6MTk5Mzk2MDA1OX0.tv-dRqaqkTSuhJ2Q_HviQ9P0d2-CbwjJdR3-OtKtkyQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
