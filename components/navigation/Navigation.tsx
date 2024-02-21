'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LogOut } from 'lucide-react';

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
            description: 'Biblioteca UI',
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
            description: 'Framework CSS modular e utilitário.',
        },
        {
            title: 'FastApi',
            href: 'https://openai.com/',
            description: 'Framework Python rápido para APIs',
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
            title: 'Tailwind',
            href: 'https://tailwindcss.com/',
            description: 'Framework CSS modular e utilitário.',
        },
        {
            title: 'Ui Shadcn',
            href: 'https://ui.shadcn.com/',
            description: 'Biblioteca UI',
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

    /* Render */
    return (
        <div className="flex items-center justify-between bg-[#F1F6F2]">
            <NavigationMenu className="mr-1">
                <div className="flex pl-[2rem] pt-[0.5rem] pb-[0.5rem] invisible lg:visible">
                    <Image
                        src="/images/logo.png"
                        alt="icone"
                        width={45}
                        height={45}
                        loading="lazy"
                    />
                </div>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="hover:bg-primary">
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
                        <NavigationMenuTrigger className="hover:bg-primary">
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
                        <NavigationMenuTrigger className="hover:bg-primary">
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
            <div className="invisible lg:visible mr-8">
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
                <NavigationMenuLink asChild>
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
