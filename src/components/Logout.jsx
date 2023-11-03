"use client";
import '../app/global.css';
import Link from 'next/link';
import urlApi from '@/config/globals_api';
import { useRouter } from 'next/router';
// ...

const Logout = () => {
    const router = useRouter();

    const logout = async () => {
        const response = await fetch(urlApi + '/logout', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        const data = await response.json();
        if (response.ok) {
            // Limpia el token del almacenamiento local si el logout fue exitoso
            localStorage.removeItem('token');
            localStorage.removeItem('role');
            // Redirige al usuario a la página 'home_client'
            router.push('/client/home_client');
        } else {
            console.error(data.message);
        }
    };

    return (
        <div className="hidden md:flex items-center space-x-1">
            <button
                className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
                onClick={logout}
            >
                Signup
            </button>
        </div>
    );
}

export default Logout;

