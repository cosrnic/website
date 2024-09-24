<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
		href,
		class: class_,
	}: { children: Snippet; href: string; class?: string } = $props();
</script>

<a
	{href}
	class="gap-2 px-4 py-2 border-2 rounded-md border-border bg-black/5 {class_}"
>
	{@render children()}
</a>
