<script lang="ts">
	import { page } from '$app/stores';

	const urls: {
		name: string;
		colour: string;
	}[] = [
		{
			name: '/blog',
			colour: 'ctp-peach',
		},
		{
			name: '/projects',
			colour: 'ctp-yellow',
		},
	];

	$: pathname = $page.url.pathname;

	$: console.log(pathname);

	const styles = 'transition-all duration-200 ease-in-out group';
	const hoverStyles = `bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-in-out`;
</script>

<header
	class="w-full h-8 items-center font-mono px-5 my-2 italic flex flex-row justify-between"
>
	<a
		href="/"
		class={`${pathname == '/' ? 'text-ctp-red' : 'text-ctp-red/60'} hover:text-ctp-red/90 ${styles}`}
	>
		<span
			class={`from-ctp-red to-ctp-red bg-left-bottom bg-gradient-to-r ${hoverStyles}`}
			>cosrnic.dev</span
		>
	</a>

	<div class="flex flex-row gap-5">
		{#each urls as url}
			<a
				href={url.name}
				class={`${pathname.startsWith(url.name) ? `text-${url.colour}` : `text-${url.colour}/60`} hover:text-${url.colour}/90 ${styles}`}
			>
				<span
					class={`to-${url.colour} from-${url.colour} bg-right-bottom bg-gradient-to-l ${hoverStyles}`}
					>{url.name}</span
				>
			</a>
		{/each}
	</div>
</header>
