<script lang="ts">
	import {
		Cursor,
		Twitter,
		Discord,
		YouTube,
	} from '$lib/components/icons/index';
	import Card from './Card.svelte';
	import type { Component } from 'svelte';
	import Twitch from './icons/Twitch.svelte';
	import GitHub from './icons/GitHub.svelte';

	const links: {
		name: string;
		icon: Component;
		href: string;
	}[] = [
		{
			name: '@cosrnic',
			icon: GitHub,
			href: 'https://github.com/cosrnic',
		},
		{
			name: '@cosrnic',
			icon: Discord,
			href: 'https://discord.com/users/508662064063971348',
		},

		{
			name: '@cosrnic',
			icon: Twitch,
			href: 'https://twitch.tv/cosrnic',
		},
		{
			name: '@nottypesafe',
			icon: YouTube,
			href: 'https://youtube.com/@nottypesafe',
		},
		{
			name: '@nottypesafe',
			icon: Twitter,
			href: 'https://twitter.com/nottypesafe',
		},
	];
</script>

<Card>
	<p class="mx-auto tracking-widest font-display">Socials</p>
	<div class="flex flex-wrap justify-center gap-2">
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
