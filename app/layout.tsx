import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';

// UTILS
import { cn } from '@/lib/utils';

export const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
});

// STYLES
import '@/styles/globals.css';

export const metadata: Metadata = {
    title: 'NutriiSnap',
    description: '',
};

const RootLayout = ({ children }: IChildrenProps) => {
    return (
        <html lang="pt-BR" suppressHydrationWarning>
            <body
                className={cn(
                    'min-h-screen bg-background font-sans antialiased',
                    fontSans.variable
                )}
            >
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
