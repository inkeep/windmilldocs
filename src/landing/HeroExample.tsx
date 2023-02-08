import React, { useEffect, useState } from 'react';
import LandingSection from './LandingSection';
import { Code } from 'lucide-react';
import { useTabs } from './tabs/useTabs';
import { Framer } from './tabs/framer';

const tabs = [
	{
		label: 'Scripts',
		icon: Code,
		id: 'scripts',
		data: []
	},
	{
		label: 'Flows',
		icon: Code,
		id: 'flows',
		data: []
	},
	{
		label: 'Apps',
		icon: Code,
		id: 'apps',
		data: []
	}
];

export default function HeroExample() {
	const [hookProps] = useState({
		tabs: tabs,
		initialTabId: tabs[0].id
	});
	const framer = useTabs(hookProps);

	useEffect(() => {
		const video = document.getElementById('main-video') as HTMLVideoElement;

		if (framer.selectedTab.id === 'scripts') {
			video.currentTime = 0;
		}
		if (framer.selectedTab.id === 'flows') {
			video.currentTime = 34;
		}
		if (framer.selectedTab.id === 'apps') {
			video.currentTime = 70;
		}
	}, [framer.selectedTab]);

	// add event listener to video to update tab when video progresses
	useEffect(() => {
		const video = document.getElementById('main-video') as HTMLVideoElement;
		video.addEventListener('timeupdate', () => {
			if (video.currentTime < 0) {
				framer.tabProps.setSelectedTab([0, 1]);
			}
			if (video.currentTime > 34 && video.currentTime < 70) {
				framer.tabProps.setSelectedTab([1, 1]);
			}
			if (video.currentTime > 70) {
				framer.tabProps.setSelectedTab([2, 1]);
			}
		});
		return () => {
			video.removeEventListener('timeupdate', () => {});
		};
	}, []);

	return (
		<LandingSection bgClass="bg-white">
			<div className="w-full gap-8 flex flex-col">
				<h1 className="tracking-tight leading-tight text-left font-bold text-transparent bg-clip-text bg-gradient-to-br from-slate-500 to-slate-800">
					Supercharge your scripts
				</h1>
				<span className="text-lg text-gray-600 max-w-3xl">
					Make your current scripts production grade
					without any effort, and build all of your internal tools with normal scripts. Run everything at scale on your infra or ours, with optimal
					reliability, tight permissioning and clear monitoring. We are fully open-source and easy to deploy on small and large infra.
				</span>
				<Framer.Tabs {...framer.tabProps} color="slate" />

				<video
					className="border-2 rounded-xl object-cover w-full h-full"
					autoPlay
					loop
					controls
					id="main-video"
					src="/videos/main.mp4"
				/>
			</div>
		</LandingSection>
	);
}