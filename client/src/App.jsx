import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'



function App() {
  // 1. STATE ZONE
  const [showForm, setShowForm] = useState('none');

  // 2. JAVASCRIPT LOGIC ZONE
  const handleSignInClick = () => {
    setShowForm('signin');
  };

  const handleSignUpClick = () => {
    setShowForm('signup');
  };

  // 3. LAYOUT TEMPLATE ZONE (Styled with Tailwind)
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* HEADER */}
      <header className="p-6 text-2xl font-black tracking-wider text-blue-600">
        RETOLI
      </header>
      
      {/* MAIN CONTAINER */}
      <main className="flex flex-col items-center justify-center px-4 py-12">
        
        {/* HERO SECTION */}
        <section className="max-w-xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Turn your PDFs to audio books
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Listen to any PDF in realistic human voices
          </p>
          
          {/* Landing Buttons */}
          <div className="mt-8 flex justify-center gap-4">
            <button 
              onClick={handleSignInClick}
              className="rounded-lg border-2 border-blue-600 px-6 py-2.5 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white active:scale-95"
            >
              Sign In
            </button>
            <button 
              onClick={handleSignUpClick}
              className="rounded-lg bg-blue-600 px-6 py-2.5 font-semibold text-white shadow-md transition hover:bg-blue-700 active:scale-95"
            >
              Sign Up
            </button>
          </div>
        </section>

        {/* SIGNUP FORM */}
        {showForm === 'signup' && (
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
        )}

        {/* SIGNIN FORM */}
        {showForm === 'signin' && (
          <form id="signinForm" className="mt-10 w-full max-w-md rounded-xl bg-white p-8 shadow-xl border border-slate-100 flex flex-col gap-4">
            <h2 className="text-xl font-bold text-center text-slate-800 mb-2">Welcome Back</h2>
            
            <div className="flex flex-col gap-1">
              <label htmlFor="signin-name1" className="text-sm font-medium text-slate-600">Username</label>
              <input type="text" name="username" id="signin-name1" className="rounded-md border border-slate-300 p-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="signin-pword" className="text-sm font-medium text-slate-600">Password</label>
              <input type="password" name="user-pasword" id="signin-pword" className="rounded-md border border-slate-300 p-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
            </div>

            <button type="submit" className="mt-2 rounded-md bg-blue-600 py-2 font-semibold text-white hover:bg-blue-700 transition">
              Login
            </button>
          </form>
        )}

      </main>
    </div>
  );
}

export default App;

  