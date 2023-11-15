'use client'
import { useState } from "react";
import Link from "next/link";

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      // Aquí iría la lógica para manejar el envío del email de restablecimiento de contraseña
      console.log('Request password reset for:', email);
      // Implementar la llamada a la API o la lógica correspondiente
    };
  
    return (
        <div className="max-w-[280px] mx-auto ">
        <div className="flex flex-col items-center mt-[10vh]">
            <h2 className="mb-5 text-gray-900 font-mono font-bold text-xl">Olvidaste tu contraseña</h2>
           
            <form>
                <input type="email" id='password' name='email'
                    className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium " placeholder="Email" required
                     />
                     <input type="password" id='password' name='password'
                    className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium " placeholder="Nueva Contraseña" required
                     />
                     <input type="password" id='password' name='repeat'
                    className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium " placeholder="Repetir la Contraseña" required
                     />
                <button type='submit' className="bg-slate-500 hover:bg-slate-700 text-white text-base rounded-lg py-2.5 px-5 transition-colors w-full text-[19px]">Cambiar la Contraseña</button>
            </form>
        
        </div>
    </div>
    );
  }
  