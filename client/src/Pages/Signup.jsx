 const Signup = () => {
  return (
    <>
    <form id="signupForm" className="mt-10 w-full max-w-md rounded-xl bg-white p-8 shadow-xl border border-slate-100 flex flex-col gap-4">
            <h2 className="text-xl font-bold text-center text-slate-800 mb-2">Create Account</h2>
            
            <div className="flex flex-col gap-1">
              <label htmlFor="name1" className="text-sm font-medium text-slate-600">Username</label>
              <input type="text" name="username" id="name1" className="rounded-md border border-slate-300 p-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="pword" className="text-sm font-medium text-slate-600">Password</label>
              <input type="password" name="user-pasword" id="pword" className="rounded-md border border-slate-300 p-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm font-medium text-slate-600">Email</label>
              <input type="email" name="email" id="email" className="rounded-md border border-slate-300 p-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
            </div>

            <button type="submit" className="mt-2 rounded-md bg-blue-600 py-2 font-semibold text-white hover:bg-blue-700 transition">
              Register
            </button>
          </form>
     </>   
  )
}
export default Signup