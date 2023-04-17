export default function AppHeader() {
  return(
    <div className="navbar bg-base-100">
      <div className="navbar-start items-start flex">
        <a className="btn btn-ghost normal-case text-xl">blooptwang</a>
      </div>
      <div className="navbar-end items-end flex gap-3">
        <button className="btn btn-outline">Log in</button>
        <button className="btn btn-outline">Sign up</button>
      </div>
    </div>
  )
}
