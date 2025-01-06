'use client'

import Link from 'next/link';
import { ExternalLink, Globe, Github } from 'lucide-react';
import React from 'react';

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-6">
            <div className="max-w-4xl w-full">
                <h1 className='text-4xl text-center font-bold mb-8'>choose the login style.</h1>
                <div className="grid md:grid-cols-3 gap-6 mb-12 text-center">
                    <Link
                        href="/dark-login"
                        className="group bg-zinc-900 rounded-xl p-6 transition-all hover:bg-zinc-800 hover:scale-[1.02] border border-zinc-800"
                    >
                        <h3 className="text-xl font-bold text-white">dark login</h3>
                    </Link>

                    <Link
                        href="/colorful-login"
                        className="group bg-zinc-900 rounded-xl p-6 transition-all hover:bg-zinc-800 hover:scale-[1.02] border border-zinc-800"
                    >
                        <h3 className="text-xl font-bold text-white">colorful login</h3>
                    </Link>

                    <Link
                        href="/white-login"
                        className="group bg-zinc-900 rounded-xl p-6 transition-all hover:bg-zinc-800 hover:scale-[1.02] border border-zinc-800"
                    >
                        <h3 className="text-xl font-bold text-white">white login</h3>
                    </Link>
                </div>
                <p className='text-center mb-4 font-bold'>links.</p>
                <div className="flex justify-center space-x-6">
                    <a
                        href="https://x.com/vvaltterisa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-400 transition-colors flex items-center"
                    >
                        <svg width="19" height="21" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="white" />
                        </svg>

                    </a>
                    <a
                        href="https://github.com/valtterisa/login-pages-demo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-400 transition-colors flex items-center"
                    >
                        <Github />
                    </a>
                    <a
                        href="https://bittive.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-400 transition-colors flex items-center"
                    >
                        <Globe />
                    </a>

                </div>
            </div>
        </div>
    );
};

export default LandingPage;