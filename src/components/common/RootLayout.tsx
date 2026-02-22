import { Outlet } from 'react-router-dom';
import { Toaster } from 'sonner';
import Navbar from './Navbar';
import Footer from './Footer';
import Cart from './Cart';
import { useAppStore } from '@/store/useAppStore';

export function RootLayout() {
    const { isCartOpen, setIsCartOpen } = useAppStore();

    return (
        <div className="relative min-h-screen bg-background font-sans antialiased text-foreground flex flex-col">
            <Navbar />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
            <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
            <Toaster position="top-right" richColors />
        </div>
    );
}
