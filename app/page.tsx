import { createClient } from "@supabase/supabase-js"

export default async function Bots() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  const {data: posts} = await supabase.from('Bot').select();

  return (
    <div>
      <h1>blooptwang</h1>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  );
};
