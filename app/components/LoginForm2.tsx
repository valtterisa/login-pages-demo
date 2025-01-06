import React from 'react';
import { GoogleOAuthButton } from './GoogleOAuthButton';
import Link from 'next/link';
import { ArrowLeftIcon } from 'lucide-react';

const LoginForm3 = () => {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-indigo-900 via-purple-900 to-black flex flex-col items-center justify-center p-4">
            <Link href={"/"} className="flex items-center text-white mb-4 hover:underline"><ArrowLeftIcon className='w-4 h-4 mr-2' />Back to homepage</Link>
            <div className="w-full max-w-md bg-black/30 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/10">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-white mb-2">Welcome to Duty Pro</h1>
                    <p className="text-gray-400">Let's get back to business</p>
                </div>

                <form className="space-y-6">
                    <div>
                        <label className="text-sm font-medium text-gray-300 block mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            className="w-full px-4 py-3 bg-black/30 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-300 block mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            className="w-full px-4 py-3 bg-black/30 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Enter your password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-medium transform transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:from-purple-500 hover:to-indigo-500 active:scale-[0.98]"
                    >
                        Start using Duty Pro
                    </button>
                </form>

                <div className="my-6 flex items-center justify-center">
                    <div className="border-t border-gray-700 flex-grow"></div>
                    <span className="px-4 text-gray-500">OR</span>
                    <div className="border-t border-gray-700 flex-grow"></div>
                </div>

                <GoogleOAuthButton />

                <p className="mt-6 text-center text-gray-400">
                    Don't have an account?{' '}
                    <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
};

export default LoginForm3;