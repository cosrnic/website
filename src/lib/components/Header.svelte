<script lang="ts">
	import {
		Discord,
		GitHub,
		Twitch,
		Twitter,
		YouTube,
	} from '$lib/components/icons/index';
	import type { Component } from 'svelte';

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

<header class="fixed w-full px-2 py-2 lg:px-10 z-[100]">
	<div
		class="flex flex-row items-center justify-between px-3 py-1.5 border-2 rounded-lg border-border backdrop-blur bg-black/5 text-xl tracking-wider font-display"
	>
		<a
			href="/"
			class="inline-flex text-2xl transition-colors duration-200 ease-in-out hover:text-primary-foreground"
		>
			cosmic.<img src="/favicon.png" alt="welsh flag" class="h-8" />
		</a>
		<div class="flex flex-row items-center justify-center gap-1">
			{#each links as tab}
				<a
					href={tab.href}
					class="transition-colors duration-200 ease-in-out hover:text-primary-foreground"
				>
					<svelte:component this={tab.icon} size={24} />
				</a>
			{/each}
		</div>
	</div>
</header>
