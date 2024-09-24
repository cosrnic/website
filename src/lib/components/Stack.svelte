<script lang="ts">
	import { Cursor, Svelte, Tailwind, Bun } from '$lib/components/icons/index';
	import Card from './Card.svelte';
	import type { Component } from 'svelte';

	const links: {
		name: string;
		icon: Component;
		href: string;
	}[] = [
		{
			name: 'SvelteKit',
			icon: Svelte,
			href: 'https://kit.svelte.dev',
		},
		{
			name: 'TailwindCSS',
			icon: Tailwind,
			href: 'https://tailwindcss.com',
		},

		{
			name: 'Bun',
			icon: Bun,
			href: 'https://bun.sh',
		},
	];
</script>

<Card>
	<p class="mx-auto tracking-widest font-display">Stack</p>
	<div class="flex flex-wrap justify-center gap-2">
		<span class="flex items-center justify-center w-full">
			<a
				class="inline-flex items-center gap-1 transition-all duration-200 ease-in-out cursor-pointer hover:underline text-muted-foreground hover:text-primary-foreground group"
				href="https://github.com/ottomated/create-o7-app"
				rel="noreferrer"
				target="_blank"
			>
				<!-- <svelte:component this={link.icon} size={20} class="mt-1" /> -->
				<img
					src="https://i.postimg.cc/T1Wk3khh/logo.png"
					class="w-5 mt-1"
					alt="o7 logo"
				/>
				o7-stack
				<div
					class="mt-1 transition-opacity duration-200 ease-in-out opacity-0 group-hover:opacity-100"
				>
					<Cursor size={14} />
				</div>
			</a>
		</span>
		{#each links as link}
			<span>
				<a
					class="inline-flex items-center gap-1 transition-all duration-200 ease-in-out cursor-pointer hover:underline text-muted-foreground hover:text-primary-foreground group"
					href={link.href}
					rel="noreferrer"
					target="_blank"
				>
					<svelte:component this={link.icon} size={20} class="mt-1" />
					{link.name}
					<div
						class="mt-1 transition-opacity duration-200 ease-in-out opacity-0 group-hover:opacity-100"
					>
						<Cursor size={14} />
					</div>
				</a>
			</span>
		{/each}
	</div>
</Card>
