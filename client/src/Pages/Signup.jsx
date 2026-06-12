const Signup = () => {
  // 1. Setup unified state for all form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    password: '',
    confirmPassword: ''
  });
  // States to manage loading status, errors, and success feedback
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  // 2. Handle input changes dynamically based on the input's "name" attribute
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  // 3. Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-slate-50 font-sans p-4 md:p-8">
        <div className="w-full max-w-2xl rounded-xl bg-white p-6 md:p-10 shadow-md border border-slate-100">
          <h2 className="text-center text-2xl font-bold tracking-tight text-slate-800 mb-2">
            Create an Account
          </h2>
          <p className="text-center text-sm text-slate-500 mb-8">
            Please fill in the details below to register.
          </p>
          
          <form className="space-y-6">
            {/* Form Grid */}
            <div className="grid grid-cols-1 gap-y-5 gap-x-4 sm:grid-cols-2">
              
              {/* First Name */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-slate-600 mb-1">First Name</label>
                <input
                  type="text" id="firstName" name="firstName"
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold text-slate-600 mb-1">Last Name</label>
                <input
                  type="text" id="lastName" name="lastName"
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>

              {/* Username */}
              <div>
                <label htmlFor="username" className="block text-sm font-semibold text-slate-600 mb-1">Username</label>
                <input
                  type="text" id="username" name="username"
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                  autoComplete="username"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-600 mb-1">Email Address</label>
                <input
                  type="email" id="email" name="email"
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                  autoComplete="email"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-600 mb-1">Phone Number</label>
                <input
                  type="tel" id="phone" name="phone"
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>

              {/* Date of Birth */}
              <div>
                <label htmlFor="dob" className="block text-sm font-semibold text-slate-600 mb-1">Date of Birth</label>
                <input
                  type="date" id="dob" name="dob"
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>

              {/* Gender */}
              <div className="sm:col-span-2">
                <label htmlFor="gender" className="block text-sm font-semibold text-slate-600 mb-1">Gender</label>
                <select
                  id="gender" name="gender"
                  required
                  defaultValue=""
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 bg-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                >
                  <option value="" disabled>Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-slate-600 mb-1">Password</label>
                <input
                  type="password" id="password" name="password"
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                  autoComplete="new-password"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-semibold text-slate-600 mb-1">Confirm Password</label>
                <input
                  type="password" id="confirmPassword" name="confirmPassword"
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                  autoComplete="new-password"
                />
              </div>

            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-2 rounded-lg bg-blue-600 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>   
  )
}

export default Signup;