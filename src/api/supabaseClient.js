// supabase 불러오기
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY

if( !supabaseUrl || !supabaseKey ){
    console.error('환경변수에러! env 설정 파일 확인');}

const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;