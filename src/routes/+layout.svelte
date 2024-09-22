<script lang="ts">
	import '@fontsource/rubik-mono-one';
	import '@fontsource/shadows-into-light-two';

	import Header from '$lib/components/Header.svelte';
	import '../app.css';
	import Music from '$lib/components/Music.svelte';
	import Socials from '$lib/components/Socials.svelte';
	import Credits from '$lib/components/Credits.svelte';
</script>

<Header />
<div class="flex flex-col lg:flex-row px-2 lg:px-10 pt-[64px] gap-2 lg:gap-0">
	<div class="w-full lg:px-8">
		<slot />
	</div>
	<div class="min-w-[400px] max-w-[400px]">
		<div class="flex flex-col gap-2 lg:fixed">
			<Music />
			<Socials />
			<Credits />
		</div>
	</div>
</div>
