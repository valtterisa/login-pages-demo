'use client';

import React, { useState } from 'react';
import { GoogleOAuthButton } from '../components/GoogleOAuthButton';
import Link from 'next/link';
import { ArrowLeftIcon } from 'lucide-react';

export default function LoginForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function onSubmit(event: React.FormEvent) {
        event.preventDefault();
        setIsLoading(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsLoading(false);
    }

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">
            {/* Enhanced background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iIzAwMDAwMCI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiIGZpbGw9IiMxYTFhMWEiPjwvY2lyY2xlPgo8L3N2Zz4=')] opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-cyan-900/10"></div>
            </div>

            <div className="relative z-10 flex flex-col min-h-screen items-center justify-center p-4">
                <Link href={"/"} className="flex items-center text-white mb-4 hover:underline"><ArrowLeftIcon className='w-4 h-4 mr-2' />Back to homepage</Link>

                <div className="w-full max-w-md space-y-8 rounded-2xl border border-white/10 bg-black/50 p-6 backdrop-blur-xl">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold tracking-tight">Welcome back to Duty Pro</h1>
                        <p className="mt-2 text-sm text-gray-400">We are glad to see you here.</p>
                    </div>

                    <form onSubmit={onSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                                className="w-full px-3 py-2 text-white bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-gray-400"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-200">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                required
                                className="w-full px-3 py-2 text-white bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-gray-400"
                            />
                        </div>

                        <button
                            type="submit"
                            className={`relative text-white w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-500 font-medium rounded-md hover:bg-gradient-to-r hover:from-blue-700 hover:to-purple-700 hover:shadow-lg`}
                        >
                            {isLoading ? 'Loading...' : 'Start using Duty Pro'}
                        </button>
                    </form>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-white/10"></div>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-black px-2 text-gray-400">or</span>
                        </div>
                    </div>

                    <GoogleOAuthButton />

                    <div className="text-center">
                        <p className="text-sm text-gray-400">
                            Don&apos;t have an account?{' '}
                            <a href="/signup" className="text-purple-400 hover:text-purple-300">
                                Sign up
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
