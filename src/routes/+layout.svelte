<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<Header />
<div class="w-full h-screen px-4 py-2 lg:pl-[5.5rem] lg:py-6">
	<slot />
</div>
