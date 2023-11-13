
import "./global.css";
export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Error 404: Página no encontrada
                </h1>
            </div>
        </div>
    );
}

export function Unauthorized() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Error 401: No autorizado
                </h1>
            </div>
        </div>
    );
}