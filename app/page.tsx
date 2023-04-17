import { headers, cookies } from 'next/headers';
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";

export default async function Bots() {
  const supabase = createServerComponentSupabaseClient({
    headers,
    cookies,
  })

  const {data: posts} = await supabase.from('Bot').select();

  return (
    <div>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  );
};
