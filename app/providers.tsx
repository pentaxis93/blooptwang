'use client';

import { SessionContextProvider } from "@supabase/auth-helpers-react";
import SupabaseProvider from "./supabase-provider";
import { useState } from "react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";

export default function Providers({
  children
}: {
  children: React.ReactNode
}) {
  const [supabase] = useState(() => createBrowserSupabaseClient());

  return (
    <SupabaseProvider>
      <SessionContextProvider supabaseClient={supabase} >
        {children}
      </SessionContextProvider>
    </SupabaseProvider>
  );
}
