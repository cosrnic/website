<script lang="ts">
	import { Cursor } from '$lib/components/icons/index';
	import Card from './Card.svelte';

	const friends: {
		name: string;
		href: string;
	}[] = [
		{
			name: 'acatia',
			href: 'https://acatia.uk',
		},
		{
			name: 'golden',
			href: 'https://goldenstack.net',
		},
		{
			name: 'ollie',
			href: 'https://ollie.lol',
		},
		{
			name: 'emortal',
			href: 'https://emort.al',
		},
		{
			name: 'luis',
			href: 'https://lu15.dev/',
		},
		{
			name: 'vpeak',
			href: 'https://www.youtube.com/@vPeakVariety',
		},
		{
			name: 'nimsy',
			href: 'https://www.youtube.com/@nimsy',
		},
		{
			name: 'zax',
			href: 'https://github.com/zax71',
		},
	];
</script>

<Card>
	<p class="mx-auto tracking-widest font-display">
		Friends <span class="text-sm text-muted-foreground"
			>(no specific order)</span
		>
	</p>
	<div class="flex flex-wrap justify-center gap-2">
		{#each friends as friend}
			<span>
				<a
					class="inline-flex items-center gap-1 transition-all duration-200 ease-in-out cursor-pointer hover:underline text-muted-foreground hover:text-primary-foreground group"
					href={friend.href}
					rel="noreferrer"
					target="_blank"
				>
					{friend.name}
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
