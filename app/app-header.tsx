'use client';

import { Auth } from "@supabase/auth-ui-react";
import { useState } from "react";
import { useSupabase } from "./supabase-provider";
import { ThemeSupa } from "@supabase/auth-ui-shared";

export default function AppHeader() {
  const { supabase } = useSupabase();

  const [showAuth, setShowAuth] = useState(false)

  const handleButtonClick = () => {
    setShowAuth(true)
  }

  const handleCloseAuth = () => {
    setShowAuth(false)
  }
  
  return(
    <div className="navbar bg-base-100">
      <div className="navbar-start items-start flex">
        <a className="btn btn-ghost normal-case text-xl">blooptwang</a>
      </div>
      <div className="navbar-end items-end flex gap-3">
        <label htmlFor="sign-up-modal" className="btn btn-outline">Sign up</label>
        <label htmlFor="sign-in-modal" className="btn btn-outline">Sign in</label>
      </div>

      <input type="checkbox" id="sign-up-modal" className="modal-toggle" />
      <label htmlFor="sign-up-modal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <Auth
            appearance={{ theme: ThemeSupa }}
            providers={['facebook', 'github', 'google']}
            supabaseClient={supabase}
            theme="dark"
            view="sign_up"
          />
        </label>
      </label>

      <input type="checkbox" id="sign-in-modal" className="modal-toggle" />
      <label htmlFor="sign-in-modal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <Auth
            appearance={{ theme: ThemeSupa }}
            providers={['facebook', 'github', 'google']}
            supabaseClient={supabase}
            theme="dark"
            view="sign_in"
          />
        </label>
      </label>
    </div>
  )
}
