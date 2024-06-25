import { createClient } from '@supabase/supabase-js'
import 'dotenv/config.js';

const supabaseUrl = 'https://tiqlaateuguyviwaumpm.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)