<script lang="ts">
	import { Cursor, Javascript, Go, Svelte } from '$lib/components/icons/index';
	import Minecraft from '$lib/components/icons/Minecraft.svelte';
	import LinkCard from '$lib/components/LinkCard.svelte';
	import TechCard from '$lib/components/TechCard.svelte';
	import type { Tech } from '$lib/types';
	import type { Component } from 'svelte';

	const projects: {
		url: string;
		title: string;
		description: string;
		langs: Component[];
	}[] = [
		{
			title: 'Note',
			description:
				'<p>A <span class="text-[#ff0000]">YouTube Music</span> extension and <span class="text-[#5dc9e2]">go</span> API to broadcast what im listening to!</p>',
			url: 'https://note.cosrnic.dev',
			langs: [Go, Javascript],
		},
		{
			title: 'BunnMC',
			description:
				'<p>A Work in Progress <span class="text-primary-foreground">Minecraft</span> server created with <span class="inline-flex gap-1"><img src="https://minestom.net/minestom-logo-lg.png" alt="minestom logo" class="w-4 h-4 mt-1.5" /> <span style="color: transparent;background: -webkit-linear-gradient(120deg, #ff76b6 30%, #ff6c32);background-clip: text;">Minestom</span></span></p>',
			url: 'https://bunnmc.com',
			langs: [Minecraft],
		},

		{
			title: 'SmallViewModel',
			description:
				'<p>A <span class="text-primary-foreground">Minecraft</span> mod that allows you to modify your view model, This mod has gained over <span class="text-primary-foreground">24,000</span> downloads!</p>',
			url: 'https://modrinth.com/mod/smallviewmodel',
			langs: [Minecraft],
		},
	];

	const tools: Tech[] = [
		{
			name: 'Git',
			time: '4 years',
			url: 'https://git-scm.com',
		},
		{
			name: 'Node.js',
			time: '4 years',
			url: 'https://nodejs.org',
		},
		{
			name: 'Vite',
			time: '2 years',
			url: 'https://vitejs.dev',
		},
		{
			name: 'pnpm',
			time: '1 year',
			url: 'https://pnpm.io/',
		},
		{
			name: 'bun',
			time: '4 months',
			url: 'https://bun.sh/',
		},
	];

	const frameworks: Tech[] = [
		{
			name: 'SvelteKit',
			time: '2 years',
			url: 'https://kit.svelte.dev',
		},
		{
			name: 'ReactJS',
			time: '2 years',
			url: 'https://react.dev',
		},
		{
			name: 'NextJS',
			time: '2 years',
			url: 'https://nextjs.org',
		},
		{
			name: 'Astro',
			time: '1 year',
			url: 'https://astro.build',
		},
		{
			name: 'ExpressJS',
			time: '4 months',
			url: 'https://http://expressjs.com/',
		},
		{
			name: 'Nest.js',
			time: '3 months',
			url: 'https://nestjs.com/',
		},

		{
			name: 'go-fiber',
			url: 'https://gofiber.io',
		},
	];

	const langs: Tech[] = [
		{
			name: 'Java',
			time: '4 years',
			url: 'https://java.com',
		},
		{
			name: 'TypeScript',
			time: '3 years',
			url: 'https://www.typescriptlang.org/',
		},
		{
			name: 'JavaScript',
			time: '3 years',
			url: 'https://en.wikipedia.org/wiki/JavaScript',
		},
		{
			name: 'Svelte',
			time: '1 year',
			url: 'https://svelte.dev',
		},
		{
			name: 'Go',
			time: '5 months',
			url: 'https://go.dev',
		},
		{
			name: 'SQL',
			url: 'https://en.wikipedia.org/wiki/SQL',
		},
		{
			name: 'Elixir',
			url: 'https://elixir-lang.org/',
		},
	];
</script>

<div class="flex flex-col gap-2">
	<p class="flex flex-col gap-1">
		<span class="text-xl font-semibold text-primary-foreground"
			>Hello! I'm Cosmic</span
		>
		<span>I'm a 19 year old developer from Wales.</span>
	</p>

	<div class="flex items-center w-full h-0.5 mt-2 mb-4 rounded bg-border">
		<span class="px-1 ml-2 text-xl tracking-wider bg-background font-display"
			>Projects</span
		>
	</div>

	<div class="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
		{#each projects as project}
			<LinkCard
				href={project.url}
				class="flex flex-col w-full transition-colors duration-200 ease-in-out hover:border-primary-foreground group"
			>
				<div class="w-full h-full">
					<div class="flex flex-row">
						<h1 class="text-lg group-hover:underline">{project.title}</h1>
						<div
							class="mt-1.5 transition-opacity duration-200 ease-in-out opacity-0 group-hover:opacity-100"
						>
							<Cursor size={16} />
						</div>
					</div>
					<!-- eslint-disable-next-line svelte/no-at-html-tags -->
					{@html project.description}
				</div>
				<div class="flex justify-end w-full gap-2">
					{#each project.langs as lang}
						<svelte:component this={lang} size={28} />
					{/each}
				</div>
			</LinkCard>
		{/each}
	</div>
	<div class="flex items-center w-full h-0.5 mt-2 mb-4 rounded bg-border">
		<span class="px-1 ml-2 text-xl tracking-wider bg-background font-display"
			>Tech I'm familiar with</span
		>
	</div>
	<p class="text-lg tracking-wide font-display">Tools</p>
	<div class="flex flex-row flex-wrap gap-2">
		{#each tools as tool}
			<TechCard tech={tool} />
		{/each}
	</div>
	<p class="text-lg tracking-wide font-display">Frameworks</p>
	<div class="flex flex-row flex-wrap gap-2">
		{#each frameworks as framework}
			<TechCard tech={framework} />
		{/each}
	</div>
	<p class="text-lg tracking-wide font-display">Languages</p>
	<div class="flex flex-row flex-wrap gap-2">
		{#each langs as lang}
			<TechCard tech={lang} />
		{/each}
	</div>
</div>
