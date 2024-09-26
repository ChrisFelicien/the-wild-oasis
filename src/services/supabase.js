import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://sckkmqxsatjpvzalixwm.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNja2ttcXhzYXRqcHZ6YWxpeHdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5OTA3MjgsImV4cCI6MjA0MTU2NjcyOH0.hHnA5yeZAgdGYbzFV5l9MxUcYu3PCUXjQR4KywphXJg';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

// https://sckkmqxsatjpvzalixwm.supabase.co/storage/v1/object/public/cabin_images/0.9283044097759738-undefined
