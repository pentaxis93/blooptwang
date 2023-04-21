import AppHeader from './app-header';
import { headers, cookies } from 'next/headers';
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import ChatPanel from '@/components/chat-panel';

export default async function Bots() {
  const supabase = createServerComponentSupabaseClient({
    headers,
    cookies,
  })

  const {data: bots} = await supabase.from('Bot').select();

  return (
    <div className='h-screen w-screen flex flex-col align-middle items-center gap-3'>
      <AppHeader />
      {/* <div className='grow'> */}
      {/*   <pre>{JSON.stringify(bots, null, 2)}</pre> */}
      {/* </div> */}
      <div className='flex flex-col w-screen grow'>
        <ChatPanel />
      </div>
    </div>
  );
};
