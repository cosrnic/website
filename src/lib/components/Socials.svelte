<script lang="ts">
	import { Cursor } from '$lib/components/icons/index';
	import Card from './Card.svelte';
	import { socials } from '$lib';
</script>

<Card>
	<p class="mx-auto tracking-widest font-display">Socials</p>
	<div class="flex flex-wrap justify-center gap-2">
		{#each socials as link}
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
