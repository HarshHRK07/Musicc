import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vtczygoesepcyadfnpze.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0Y3p5Z29lc2VwY3lhZGZucHplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQxMTAwMzAsImV4cCI6MjAyOTY4NjAzMH0.INb61zL78wvVwSQydiG0eQqz9qVTlq5mKisqOEhUgDs';

export const supabase = createClient(supabaseUrl, supabaseKey);
