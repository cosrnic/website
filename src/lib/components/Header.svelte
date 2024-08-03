<script lang="ts">
	import { Book, Folder, House } from '@o7/icon/lucide';
	import { onDestroy, onMount, type Component } from 'svelte';

	let links: {
		path: string;
		icon: Component;
		text: string;
	}[] = [
		{
			path: '/',
			icon: House,
			text: 'Home',
		},
		{
			path: '/projects',
			icon: Folder,
			text: 'Projects',
		},
		{
			path: '/blog',
			icon: Book,
			text: 'Blog',
		},
	];

	const textStyle = 'text-ctp-mauve';
	const blurStyle = '[text-shadow:0px_0px_3px_currentColor]';

	let text = 'cosrnic';
	let activeIndex = -1;
	let interval: number | undefined = undefined;

	function changeColor(index: number) {
		activeIndex = index;
		console.log(activeIndex);
		interval = setTimeout(() => {
			activeIndex = -1;
			changeColor((index + 1) % (text.length + links.length));
		}, 1000);
	}

	onMount(() => {
		changeColor(0);
	});

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<header
	class="fixed bottom-0 lg:top-0 w-full h-16 lg:justify-between flex-row lg:flex-col lg:w-16 lg:h-full justify-center items-center flex py-6 [box-shadow:0px_0px_15px_#FFFFFF1E]"
>
	<div
		class="font-mono text-xl items-center flex-col hidden lg:flex leading-none"
	>
		{#each text.split('') as char, index}
			<span
				class={`transition-all duration-200 ease-in-out ${activeIndex === index ? textStyle : 'text-ctp-blue'} ${blurStyle}`}
				>{char}</span
			>
		{/each}
	</div>
	<div class="flex lg:flex-col gap-2">
		{#each links as link, index}
			<a
				href={link.path}
				class={`group relative flex items-center justify-center h-12 w-12 mx-auto cursor-pointer transition-all duration-200 ease-in-out
				${
					activeIndex - text.length === index ? textStyle : 'text-ctp-blue'
				} active:text-ctp-mauve hover:text-ctp-mauve`}
			>
				<svelte:component
					this={link.icon}
					class={`[filter:drop-shadow(0px_0px_3px_currentColor)]`}
				/>
				<span
					class={`absolute w-auto p-2 m-2 min-w-max bottom-14 lg:left-14 lg:bottom-0 scale-0 origin-bottom lg:origin-left group-hover:scale-100 group-hover:opacity-100 opacity-0 ${blurStyle} transition-all duration-200 ease-in-out`}
				>
					{link.text}
				</span>
			</a>
		{/each}
	</div>
</header>
