<script lang="ts">
	import { Braces } from '$lib/components/icons/index';
	import type { Component } from 'svelte';

	const tabs: {
		title: string;
		icon: Component;
		href: string;
	}[] = [
		{
			title: 'Projects',
			icon: Braces,
			href: '/projects',
		},
	];
</script>

<header class="fixed w-full px-2 py-2 lg:px-10 z-[100]">
	<div
		class="flex flex-row items-center justify-between px-3 py-1.5 border-2 rounded-lg border-border backdrop-blur bg-black/5 text-xl tracking-wider font-display"
	>
		<p class="text-2xl">cosmic.🏴󠁧󠁢󠁷󠁬󠁳󠁿</p>
		{#each tabs as tab}
			<a
				href={tab.href}
				class="transition-colors duration-200 ease-in-out hover:text-primary-foreground"
			>
				<svelte:component this={tab.icon} size={24} />
			</a>
		{/each}
	</div>
</header>
