<script lang="ts">
	import LinkCard from './LinkCard.svelte';
	import type { Tech } from '$lib/types';

	let { tech }: { tech: Tech } = $props();
</script>

<LinkCard
	href={tech.url}
	class="text-sm transition-colors duration-200 ease-in-out hover:border-primary-foreground"
>
	<div class="flex flex-row w-full gap-2">
		<p class="text-base group-hover:underline">{tech.name}</p>
		{#if tech.time}
			<p class="mt-1 text-muted-foreground">{tech.time}</p>
		{/if}
	</div>
</LinkCard>
