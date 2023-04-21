'use client';

import { Auth } from "@supabase/auth-ui-react";
import { useSupabase } from "./supabase-provider";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useSession } from "@supabase/auth-helpers-react";

export default function AppHeader() {
  const { supabase } = useSupabase();

  const session = useSession();

  const signOut = () => {
    supabase.auth.signOut();
  };

  return(
    <div className="navbar bg-base-300">
      <div className="navbar-start items-start flex">
        <a className="btn btn-ghost text-primary normal-case text-xl">blooptwang</a>
      </div>
      <div className="navbar-end items-end flex gap-3">
        {!session ? (
          <div className="flex gap-3">
            <label htmlFor="sign-up-modal" className="btn btn-secondary btn-sm btn-outline">Sign up</label>
            <label htmlFor="sign-in-modal" className="btn btn-sm btn-primary btn-outline">Sign in</label>
          </div>
        ) : (
            <button onClick={signOut} className="btn btn-sm btn-outline">Sign out</button>
        )}
      </div>

      <input type="checkbox" id="sign-up-modal" className="modal-toggle" />
      <label htmlFor="sign-up-modal" className="modal">
        <label className="modal-box relative" htmlFor="">
          <Auth
            appearance={{ theme: ThemeSupa }}
            providers={['github']}
            supabaseClient={supabase}
            theme="dark"
            view="sign_up"
          />
        </label>
      </label>

      <input type="checkbox" id="sign-in-modal" className="modal-toggle" />
      <label htmlFor="sign-in-modal" className="modal">
        <label className="modal-box relative" htmlFor="">
          <Auth
            appearance={{ theme: ThemeSupa }}
            providers={['github']}
            supabaseClient={supabase}
            theme="dark"
            view="sign_in"
          />
        </label>
      </label>
    </div>
  )
}
