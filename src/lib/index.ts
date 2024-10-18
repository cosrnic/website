import type { Component } from 'svelte';
import {
	GitHub,
	Discord,
	Twitch,
	YouTube,
	Bluesky,
	Twitter,
} from './components/icons';

export const socials: {
	name: string;
	icon: Component;
	href: string;
}[] = [
	{
		name: '@cosrnic',
		icon: GitHub,
		href: 'https://github.com/cosrnic',
	},
	{
		name: '@cosrnic',
		icon: Discord,
		href: 'https://discord.com/users/508662064063971348',
	},

	{
		name: '@cosrnic',
		icon: Twitch,
		href: 'https://twitch.tv/cosrnic',
	},
	{
		name: '@nottypesafe',
		icon: YouTube,
		href: 'https://youtube.com/@nottypesafe',
	},
	{
		name: '@cosmic.wales',
		icon: Bluesky,
		href: 'https://bsky.app/profile/cosmic.wales',
	},
	{
		name: '@nottypesafe',
		icon: Twitter,
		href: 'https://twitter.com/nottypesafe',
	},
];
