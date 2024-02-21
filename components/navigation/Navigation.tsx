'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
    const components: { title: string; href: string; description: string }[] = [
        {
            title: 'Tailwind',
            href: '/docs/primitives/alert-dialog',
            description:
                'A modal dialog that interrupts the user with important content and expects a response.',
        },
        {
            title: 'React 18',
            href: '/docs/primitives/hover-card',
            description: 'For sighted users to preview content available behind a link.',
        },
        {
            title: 'Next 14',
            href: '/docs/primitives/progress',
            description:
                'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
        },
        {
            title: 'Ui Shadcn',
            href: '/docs/primitives/scroll-area',
            description: 'Visually or semantically separates content.',
        },
    ];

    /* Render */
    return (
        <div className="flex items-center justify-between bg-[#F1F6F2]">
            <div className="flex pl-[2rem] pt-[0.5rem] pb-[0.5rem] invisible lg:visible">
                <Image src="/images/logo.png" alt="icone" width={45} height={45} loading="lazy" />
                <Image src="/images/name.svg" alt="name" width={100} height={100} loading="lazy" />
            </div>
            <NavigationMenu className="mr-1">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <a
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                            href="/"
                                        >
                                            <div className="h-6 w-6">ICONE</div>
                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                shadcn/ui
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                                Beautifully designed components built with Radix UI
                                                and Tailwind CSS.
                                            </p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <ListItem href="/docs" title="Introduction">
                                    Re-usable components built using Radix UI and Tailwind CSS.
                                </ListItem>
                                <ListItem href="/docs/installation" title="Installation">
                                    How to install dependencies and structure your app.
                                </ListItem>
                                <ListItem href="/docs/primitives/typography" title="Typography">
                                    Styles for headings, paragraphs, lists...etc
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="hover:bg-primary">
                            Frontend
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                {components.map(component => (
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
                <div className="invisible lg:visible">
                    <Link href="/" legacyBehavior passHref>
                        <p className="cursor-pointer text-sm font-medium text-slate-800 group-hover:text-slate-500 mr-6">
                            Logout
                        </p>
                    </Link>
                </div>
            </NavigationMenu>
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
