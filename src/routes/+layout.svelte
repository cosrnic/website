<script lang="ts">
	import '@fontsource/rubik-mono-one';
	import '@fontsource/shadows-into-light-two';
	import '../app.css';

	import Header from '$lib/components/Header.svelte';
	import Music from '$lib/components/Music.svelte';
	// import Socials from '$lib/components/Socials.svelte';
	import Credits from '$lib/components/Credits.svelte';
	import Stack from '$lib/components/Stack.svelte';
	import GitHub from '$lib/components/icons/GitHub.svelte';
	import Friends from '$lib/components/Friends.svelte';
	import { onMount, type Snippet } from 'svelte';

	let buffer = '';
	const targetWord = 'minestom';

	let secretActive = $state(false);
	let secretDiv: HTMLDivElement;

	function handleKeydown(event: KeyboardEvent) {
		const key = event.key.toLowerCase();

		buffer += key;
		if (buffer.length > targetWord.length) {
			buffer = buffer.slice(-targetWord.length);
		}

		if (buffer === targetWord) {
			secretActive = true;
			setTimeout(() => {
				secretDiv.style.opacity = '100';
			}, 1);
			setTimeout(() => {
				secretDiv.style.opacity = '0';
			}, 3000);
			setTimeout(() => {
				secretActive = false;
			}, 3200);
		}
	}

	onMount(() => {
		window.addEventListener('keydown', handleKeydown);

		return () => {
			window.removeEventListener('keydown', handleKeydown);
		};
	});

	let { children }: { children: Snippet } = $props();
</script>

<div
	class="fixed w-full h-screen justify-center items-center z-[1000] opacity-0 gap-1 flex-row {secretActive
		? 'flex'
		: 'hidden'} text-4xl text-white bg-black/10 backdrop-blur transition-opacity duration-200 ease-in-out"
	bind:this={secretDiv}
>
	<img
		src="https://minestom.net/minestom-logo-lg.png"
		alt="minestom logo"
		class="w-12 h-12 mt-1.5"
	/>
	<span
		style="color: transparent;background: -webkit-linear-gradient(120deg, #ff76b6 30%, #ff6c32);background-clip: text;"
		class="font-semibold">Minestom</span
	>
</div>

<Header />
<div
	class="flex flex-col md:flex-row px-2 lg:px-10 pt-[64px] gap-2 lg:gap-0 pb-6 md:pb-0"
>
	<div class="w-full lg:px-4">
		{@render children()}
	</div>
	<div class="md:min-w-[400px] md:max-w-[400px] min-w-full max-w-full">
		<div class="flex flex-col gap-2 md:fixed">
			<Music />
			<!-- <Socials /> -->
			<Stack />
			<Friends />
			<Credits />
		</div>
	</div>
</div>
<a
	href="https://github.com/cosrnic/website"
	class="fixed flex flex-row items-center justify-center gap-1 text-sm tracking-wider transition-colors duration-200 ease-in-out bottom-1 right-1 text-muted-foreground font-display hover:underline hover:text-primary-foreground"
>
	<span><GitHub /></span>Source avaliable on GitHub</a
>
