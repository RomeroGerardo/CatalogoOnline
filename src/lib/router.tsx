import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '../components/common/RootLayout';
import HomePage from '../pages/HomePage';
import WomenPage from '../pages/WomenPage';
import KidsPage from '../pages/KidsPage';
import ContactPage from '../pages/ContactPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: '/mujer',
                element: <WomenPage />,
            },
            {
                path: '/ninos',
                element: <KidsPage />,
            },
            {
                path: '/contacto',
                element: <ContactPage />,
            },
        ],
        errorElement: <div className="min-h-screen bg-black text-white flex items-center justify-center p-10 flex-col gap-4">
            <h1 className="text-4xl font-bold">404 - Ruta no encontrada</h1>
            <p className="text-white/50">La página que buscas no existe en RomeroLabs.</p>
            <a href="/" className="text-primary hover:underline font-bold">Volver al Inicio</a>
        </div>
    },
]);
