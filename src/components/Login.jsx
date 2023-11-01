"use client";
import '@/app/global.css';

export default function Login() {

    return (
    <div class="max-w-[280px] mx-auto ">
        <div class="flex flex-col items-center mt-[10vh]">
            <h2 class="mb-5 text-gray-900 font-mono font-bold text-xl">Sign Up</h2>
           
            <form>
                <input type="text" id='user' name='user' class="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium " placeholder="Username"  required/>
                <input type="password" id='password' name='password' class="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium " placeholder="Password"  required/>
                <button class="bg-slate-500 hover:bg-slate-700 text-white text-base rounded-lg py-2.5 px-5 transition-colors w-full text-[19px]">Log In</button>
            </form>
        
        </div>
        <div class="mt-10 text-center">
            <a href="#" class="text-gray-500 hover:text-gray-900">Forgot your password?</a>
        </div>
    </div>
    );
};