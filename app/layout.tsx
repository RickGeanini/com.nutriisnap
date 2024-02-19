import type { Metadata } from 'next';

// UTILS
import { cn } from '@/lib/utils';

// COMPONENTS
import NavigationMenuComponent from '@/components/navigation/Navigation';

// STYLES
import '@/styles/globals.css';

export const metadata: Metadata = {
    title: 'NutriiSnap',
    description: '',
};

const RootLayout = ({ children }: IChildrenProps) => {
    return (
        <html lang="pt-BR" suppressHydrationWarning>
            <body className={cn('min-h-screen bg-background font-sans antialiased')}>
                <NavigationMenuComponent />
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
