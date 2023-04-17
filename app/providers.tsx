'use client';

import SupabaseProvider from "./supabase-provider";

export default function Providers({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <SupabaseProvider>
      {children}
    </SupabaseProvider>
  );
}
