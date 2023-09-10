'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
// import { Badge } from "@/registry/new-york/ui/badge"

export function MainNav() {
	const pathname = usePathname();

	return (
		<div className='mr-4 hidden md:flex'>
			<Link
				href='/'
				className='mr-6 flex items-center space-x-2'
			>
				<Icons.logo className='h-6 w-6' />
				<span className='hidden font-bold sm:inline-block'>
					{siteConfig.name}
				</span>
			</Link>
			<nav className='flex items-center space-x-6 text-sm font-medium'>
				<Link
					href='/'
					className={cn(
						'transition-colors hover:text-foreground/80',
						pathname === '/' ? 'text-foreground' : 'text-foreground/60'
					)}
				>
					Opcion 1
				</Link>
				<Link
					href='/'
					className={cn(
						'transition-colors hover:text-foreground/80',
						pathname?.startsWith('/') ? 'text-foreground' : 'text-foreground/60'
					)}
				>
					Opcion 2
				</Link>
				<Link
					href='/'
					className={cn(
						'transition-colors hover:text-foreground/80',
						pathname?.startsWith('/') ? 'text-foreground' : 'text-foreground/60'
					)}
				>
					Opcion 3
				</Link>
				<Link
					href='/'
					className={cn(
						'transition-colors hover:text-foreground/80',
						pathname?.startsWith('/') ? 'text-foreground' : 'text-foreground/60'
					)}
				>
					Opcion 4
				</Link>
				<Link
					href={siteConfig.links.github}
					className={cn(
						'hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block'
					)}
				>
					Opcion 5
				</Link>
			</nav>
		</div>
	);
}
