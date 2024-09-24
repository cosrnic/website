<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children, class: class_ }: { children: Snippet; class?: string } =
		$props();
</script>

<div
	class="flex flex-col gap-2 lg:max-w-[400px] lg:min-w-[400px] min-w-full max-w-full px-4 py-2 border-2 rounded-md border-border bg-black/5 {class_}"
>
	{@render children()}
</div>
