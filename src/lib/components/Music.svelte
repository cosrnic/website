<script lang="ts">
	import type { Song } from '$lib/types';
	import { Cursor } from '$lib/components/icons/index';
	import { onDestroy, onMount } from 'svelte';
	import Card from './Card.svelte';
	import { PUBLIC_MUSIC_API_URL } from '$env/static/public';

	let song = $state<Song | undefined>(undefined);
	let isRecent = $derived.by(() => {
		if (song == undefined) return false;
		let now = Date.now();

		if (now - song.last_played * 1000 < 600 * 1000) return true;

		return false;
	});

	async function fetchSong() {
		const res = await fetch(`${PUBLIC_MUSIC_API_URL}/latest`);

		if (res.ok) {
			const json: Song = await res.json();

			song = json;
		}
	}

	let interval: number | undefined;

	onMount(async () => {
		if (PUBLIC_MUSIC_API_URL) {
			await fetchSong();

			interval = setInterval(() => {
				fetchSong();
			}, 15_000);
		}
	});

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<Card>
	{#if PUBLIC_MUSIC_API_URL}
		<p class="mx-auto tracking-widest font-display">
			{#if isRecent}
				What I'm listening to
			{:else}
				What I last listened to
			{/if}
		</p>
		<div class="flex flex-row items-center gap-4">
			{#if song}
				<a
					href="https://music.youtube.com/watch?v={song.id}"
					class="w-28 group"
				>
					<div
						class="absolute z-10 flex items-center justify-center transition-all duration-200 ease-in-out opacity-0 text-foreground w-28 h-28 group-hover:opacity-100"
					>
						<Cursor size={20} />
					</div>
					<div
						class="absolute flex transition-all duration-200 ease-in-out bg-black rounded opacity-0 w-28 h-28 group-hover:opacity-70"
					></div>
					{#if isRecent}
						<div
							class="absolute flex items-end justify-end w-[7.25rem] h-[7.25rem]"
						>
							<div
								class="w-4 h-4 rounded-full bg-primary-foreground animate-ping"
							></div>
						</div>
					{/if}
					<img
						src={song.cover_url}
						class="transition-all duration-200 ease-in-out rounded min-w-28 min-h-28 h-28 w-28"
						alt={song.name}
					/>
				</a>
			{:else}
				<div class="w-28">
					<img
						src="favicon.png"
						class="transition-all duration-200 ease-in-out rounded min-w-28 min-h-28 h-28 w-28"
						alt="No Song"
					/>
				</div>
			{/if}
			<div class="flex flex-col text-muted-foreground max-w-[60%]">
				{#if song}
					<a
						class="overflow-hidden text-lg font-semibold text-foreground whitespace-nowrap text-ellipsis hover:underline max-w-60"
						href="https://music.youtube.com/watch?v={song.id}"
					>
						{song.name.replaceAll('&amp;', '&')}
					</a>
					<div class="flex flex-row items-center">
						{#if song.artists.length == 0}
							<p>No Artists</p>
						{:else}
							<div class="flex flex-row flex-wrap">
								{#each song.artists as artist, i}
									<a
										href="https://music.youtube.com/channel/{artist.id}"
										class="flex flex-row items-center hover:underline h-fit whitespace-nowrap {artist.name ==
										'Porter Robinson'
											? 'text-primary-foreground'
											: ''}"
									>
										{#if artist.name == 'Porter Robinson'}
											<img
												class="h-4 mr-1"
												alt={artist.name}
												src="https://store.porterrobinson.com/cdn/shop/files/Porter-Chibi-Happy---Head-Only-pink.png?v=1722375672"
											/>
										{/if}
										{artist.name}
									</a>{#if i !== song.artists.length - 1}
										<p class="mr-1">,</p>{/if}
								{/each}
							</div>
						{/if}
					</div>
					<div>
						{#if song.album}
							<a
								href="https://music.youtube.com/browse/{song.album.id}"
								class="hover:underline"
							>
								<p
									class="overflow-hidden whitespace-nowrap text-ellipsis hover:underline max-w-60"
								>
									{song.album.name}
								</p>
							</a>
						{:else}
							<p>No Album</p>
						{/if}
					</div>
				{:else}
					<p
						class="overflow-hidden text-lg font-semibold text-foreground whitespace-nowrap text-ellipsis max-w-60"
					>
						Unable to fetch song
					</p>
					<p>Unable to fetch artists</p>
					<p>Unable to fetch album</p>
				{/if}
			</div>
		</div>
		{#if song}
			<div class="text-muted-foreground">
				<p>
					Last Played: {new Date(song.last_played * 1000).toLocaleString(
						'en-UK',
					)}
				</p>
				<p>Times Played: {song.plays.length}</p>
				<span class="text-sm">
					Powered by <a
						href="https://note.cosrnic.dev"
						class="inline-flex transition-colors duration-200 ease-in-out text-accent-foreground hover:text-primary-foreground hover:underline group"
						>Note
						<div
							class="mt-1 transition-opacity duration-200 ease-in-out opacity-0 group-hover:opacity-100"
						>
							<Cursor size={14} />
						</div>
					</a>
				</span>
			</div>
		{/if}
	{:else}
		<p>Music disabled.</p>
	{/if}
</Card>

<style>
	@keyframes ping {
		95%,
		100% {
			transform: scale(1.75);
			opacity: 0;
		}
	}
	.animate-ping {
		animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
	}
</style>
