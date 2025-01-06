import { ArrowLeft, ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { GoogleOAuthButton } from './GoogleOAuthButton';

const LoginForm3 = () => {
    return (
        <div className="min-h-screen w-full bg-gray-50 flex flex-col items-center justify-center p-4">
            <Link href={"/"} className="flex items-center text-black mb-4 hover:underline"><ArrowLeftIcon className='w-4 h-4 mr-2' />Back to homepage</Link>
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back to Duty Pro</h1>
                    <p className="text-gray-600">We are glad to see you here.</p>
                </div>

                <div className="mb-6">
                    <GoogleOAuthButton dark={true} />
                </div>

                <div className="my-6 flex items-center justify-center">
                    <div className="border-t border-gray-200 flex-grow"></div>
                    <span className="px-4 text-gray-500">or continue with email</span>
                    <div className="border-t border-gray-200 flex-grow"></div>
                </div>

                <form className="space-y-5">
                    <div>
                        <label className="text-sm font-medium text-gray-700 block mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700 block mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label className="ml-2 text-sm text-gray-600">Remember me</label>
                        </div>
                        <a href="#" className="text-sm text-blue-600 hover:text-blue-500 transition-colors">
                            Forgot password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg font-medium transform transition-all duration-200 hover:bg-blue-500 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                    >
                        Start using Duty Pro
                    </button>
                </form>

                <p className="mt-6 text-center text-gray-600">
                    Don't have an account?{' '}
                    <a href="#" className="text-blue-600 hover:text-blue-500 transition-colors">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
};

export default LoginForm3;