import React, { useState } from 'react';

const Signin = () => {
  const [formData, setFormData] = useState({ 
    username: '', 
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      const response = await fetch('https://charity-minds-backend.onrender.com/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();

      if (response.ok && data.success) {
        setSuccess("Login successful!");
        
        localStorage.setItem('token', data.token);

        if (data.user) {
          localStorage.setItem('user', JSON.stringify(data.user));
        }

        window.location.href = '/dashboard'; 
      } else {
        setError(data.message || "Invalid credentials. Please try again.");
      }
    } catch (err) {
      setError("Unable to connect to the server. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} id="signinForm" className="mt-10 w-full max-w-md rounded-xl bg-white p-8 shadow-xl border border-slate-100 flex flex-col gap-4">
        <h2 className="text-xl font-bold text-center text-slate-800 mb-2">Welcome Back</h2>
        
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-2 rounded-md text-sm text-center">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-2 rounded-md text-sm text-center">
            {success}
          </div>
        )}
        
        <div className="flex flex-col gap-1">
          <label htmlFor="signin-name1" className="text-sm font-medium text-slate-600">Username</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} id="signin-name1" className="rounded-md border border-slate-300 p-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" required />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="signin-pword" className="text-sm font-medium text-slate-600">Password</label>
          <input type="password" name="password" id="signin-pword" value={formData.password} onChange={handleChange} className="rounded-md border border-slate-300 p-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" required />
        </div>

        <button type="submit" disabled={loading} className="mt-2 rounded-md bg-blue-600 py-2 font-semibold text-white hover:bg-blue-700 transition disabled:bg-blue-400">
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </>
  );
};

export default Signin;