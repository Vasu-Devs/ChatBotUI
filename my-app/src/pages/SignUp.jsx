import { useState } from 'react';
import { Eye, EyeOff, Mail, User, Lock } from 'lucide-react';

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // Send data to Express backend
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        console.log('Signup successful:', result);
        alert('Signup successful!');
      } else {
        console.log('Signup failed:', result);
        alert('Signup failed: ' + result.message);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      alert('Signup error: ' + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#171717] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#171717] border border-gray-700/25 rounded-2xl p-8">
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-[#171717] rounded-full flex items-center justify-center mb-4 shadow-lg shadow-gray-700/25">
            <User className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white">Create Account</h1>
          <p className="text-gray-400 mt-2">Please sign up for a new account</p>
        </div>

        <div className="space-y-6">
          {/* Username Field */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-200 mb-2">
              Username
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your username"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-200 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 pr-12 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember"
                name="remember"
                type="checkbox"
                className="h-4 w-4 text-blue-500 focus:ring-blue-500 bg-gray-700 border-gray-600 rounded"
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-300">
                Remember me
              </label>
            </div>
            <button
              type="button"
              className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
              Forgot password?
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40"
          >
            {isSubmitting ? 'Signing Up...' : 'Sign Up'}
          </button>
        </div>

        {/* Sign Up Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            Don't have an account?{' '}
            <button className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
              Sign up here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}