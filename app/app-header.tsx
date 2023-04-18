'use client';

import { Auth } from "@supabase/auth-ui-react";
import { useSupabase } from "./supabase-provider";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useUser, useSession } from "@supabase/auth-helpers-react";

export default function AppHeader() {
  const { supabase } = useSupabase();

  const session = useSession();

  const signOut = () => {
    supabase.auth.signOut();
  };

  // Set redirect URL depending on environment
  const getURL = () => {
    let url =
      process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
      process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
      'http://localhost:3000/';
    // Make sure to include `https://` when not localhost.
    url = url.includes('http') ? url : `https://${url}`;
    // Make sure to including trailing `/`.
    url = url.charAt(url.length - 1) === '/' ? url : `${url}/`;
    return url;
  };

  return(
    <div className="navbar bg-base-100">
      <div className="navbar-start items-start flex">
        <a className="btn btn-ghost normal-case text-xl">blooptwang</a>
      </div>
      <div className="navbar-end items-end flex gap-3">
        {!session ? (
          <div className="flex gap-3">
            <label htmlFor="sign-up-modal" className="btn btn-outline">Sign up</label>
            <label htmlFor="sign-in-modal" className="btn btn-outline">Sign in</label>
          </div>
        ) : (
            <button onClick={signOut} className="btn btn-outline">Sign out</button>
        )}
      </div>

      <input type="checkbox" id="sign-up-modal" className="modal-toggle" />
      <label htmlFor="sign-up-modal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <Auth
            appearance={{ theme: ThemeSupa }}
            providers={['github']}
            supabaseClient={supabase}
            theme="dark"
            view="sign_up"
            redirectTo={getURL()}
          />
        </label>
      </label>

      <input type="checkbox" id="sign-in-modal" className="modal-toggle" />
      <label htmlFor="sign-in-modal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <Auth
            appearance={{ theme: ThemeSupa }}
            providers={['github']}
            supabaseClient={supabase}
            theme="dark"
            view="sign_in"
            redirectTo={getURL()}
          />
        </label>
      </label>
    </div>
  )
}
