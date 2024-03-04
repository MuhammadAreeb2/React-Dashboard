import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://agzovorewhyhofnrffyb.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFnem92b3Jld2h5aG9mbnJmZnliIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwODgxMzU2MCwiZXhwIjoyMDI0Mzg5NTYwfQ.XtLepiDR_XSymokaKQ9G2PlwcYe6AT5vLcy-Da63b0g"
export const supabase = createClient(supabaseUrl, supabaseKey)
