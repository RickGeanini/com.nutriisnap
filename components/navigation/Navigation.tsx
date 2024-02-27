'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LogOut } from 'lucide-react';
import styles from './Navigation.module.css';

// COMPONENTS
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

// UTILS
import { cn } from '@/lib/utils';

// NAVIGATION MENU COMPONENT
const NavigationMenuComponent = () => {
    /* Vars */
    const frontend: { title: string; href: string; description: string }[] = [
        {
            title: 'Tailwind',
            href: 'https://tailwindcss.com/',
            description: 'Framework CSS modular e utilitário.',
        },
        {
            title: 'Ui Shadcn',
            href: 'https://ui.shadcn.com/',
            description: 'Biblioteca UI.',
        },
        {
            title: 'React 18',
            href: 'https://react.dev/',
            description: 'Nova versão do React com recursos avançados.',
        },
        {
            title: 'Next 14',
            href: 'https://nextjs.org/',
            description: 'Framework React para renderização do lado do servidor.',
        },
        {
            title: 'Typescript',
            href: 'https://www.typescriptlang.org/',
            description: 'Superset tipado do JavaScript.',
        },
    ];

    const backend: { title: string; href: string; description: string }[] = [
        {
            title: 'Python 3.10',
            href: 'https://www.python.org/',
            description: 'Versão atualizada da linguagem Python.',
        },
        {
            title: 'FastApi',
            href: 'https://openai.com/',
            description: 'Framework Python rápido para APIs.',
        },
        {
            title: 'MongoDB',
            href: 'https://www.mongodb.com/',
            description: 'Banco de dados NoSQL flexível.',
        },
        {
            title: 'OpenAI',
            href: 'https://openai.com/',
            description: 'Plataforma IA poderosa e versátil.',
        },
    ];

    const mobile: { title: string; href: string; description: string }[] = [
        {
            title: 'Android Studio Flamingo ',
            href: 'https://tailwindcss.com/',
            description: 'IDE para desenvolvimento Android nativo',
        },
        {
            title: 'Kotlin 1.8.20',
            href: 'https://ui.shadcn.com/',
            description: 'Versão da linguagem utilizada para o desenvolvimento',
        },
        {
            title: 'Retrofit 2.9.0',
            href: 'https://react.dev/',
            description: 'Biblioteca utilizada para realizar as chamadas a API no padrão REST',
        },
        {
            title: 'MVMM',
            href: 'https://nextjs.org/',
            description: 'Padrão de arquitetura utilizado no desenvolvimento',
        },
    ];

    /* Render */
    return (
        <div className="flex items-center justify-between bg-[#F1F6F2]">
            <NavigationMenu className="mr-1">
                <div className={styles.logo}>
                    <Image
                        alt="icone"
                        height={45}
                        loading="lazy"
                        src="/images/logo.png"
                        width={45}
                    />
                </div>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="hover:bg-background active:bg-background focus:bg-background">
                            CaloriCore
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                {backend.map(component => (
                                    <ListItem
                                        key={component.title}
                                        title={component.title}
                                        href={component.href}
                                    >
                                        {component.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="hover:bg-background active:bg-background focus:bg-background">
                            NutriVista
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                {frontend.map(component => (
                                    <ListItem
                                        key={component.title}
                                        title={component.title}
                                        href={component.href}
                                    >
                                        {component.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="hover:bg-background active:bg-background focus:bg-background">
                            SaborScan
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                {mobile.map(component => (
                                    <ListItem
                                        key={component.title}
                                        title={component.title}
                                        href={component.href}
                                    >
                                        {component.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <div className={styles.logout}>
                <Link href="/" legacyBehavior passHref>
                    <LogOut />
                </Link>
            </div>
        </div>
    );
};

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
    ({ className, title, children, ...props }, ref) => {
        return (
            <li>
                <NavigationMenuLink
                    asChild
                    className="hover:bg-white active:bg-white focus:bg-white"
                >
                    <a
                        ref={ref}
                        className={cn(
                            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                            className
                        )}
                        {...props}
                    >
                        <div className="text-sm font-medium leading-none">{title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {children}
                        </p>
                    </a>
                </NavigationMenuLink>
            </li>
        );
    }
);
ListItem.displayName = 'ListItem';

export default NavigationMenuComponent;
