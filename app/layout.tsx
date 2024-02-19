import type { Metadata } from 'next';

// UTILS
import { cn } from '@/lib/utils';

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
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
