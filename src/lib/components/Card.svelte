<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div
	class="flex flex-col gap-2 max-w-[400px] min-w-[400px] px-4 py-2 border-2 rounded-md border-border bg-black/5"
>
	{@render children()}
</div>
