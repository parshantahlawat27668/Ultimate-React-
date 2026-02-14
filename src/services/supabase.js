
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://zxashcehkmgqmoaoimfq.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4YXNoY2Voa21ncW1vYW9pbWZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg0ODcwNzYsImV4cCI6MjA4NDA2MzA3Nn0.OxDbdYPew5LXFjUPDJQfaBLsWXdeeFR5Hxx7Mez4c-s";
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;