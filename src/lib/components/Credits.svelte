<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import { Cursor } from '$lib/components/icons/index';
</script>

<Card>
	<p class="mx-auto tracking-widest font-display">Credits</p>
	<div class="flex flex-wrap justify-center gap-2">
		<span>
			<a
				class="inline-flex items-center gap-1 transition-all duration-200 ease-in-out cursor-pointer hover:underline text-muted-foreground hover:text-primary-foreground group"
				href="https://remixicon.com/"
				rel="noreferrer"
				target="_blank"
			>
				Remix Icon - Icons
				<div
					class="mt-1 transition-opacity duration-200 ease-in-out opacity-0 group-hover:opacity-100"
				>
					<Cursor size={14} />
				</div>
			</a>
		</span>
		<span>
			<a
				class="inline-flex items-center gap-1 transition-all duration-200 ease-in-out cursor-pointer hover:underline text-muted-foreground hover:text-primary-foreground group"
				href="https://github.com/twitter/twemoji"
				rel="noreferrer"
				target="_blank"
			>
				Twemoji - Welsh flag
				<div
					class="mt-1 transition-opacity duration-200 ease-in-out opacity-0 group-hover:opacity-100"
				>
					<Cursor size={14} />
				</div>
			</a>
		</span>
	</div>
</Card>
