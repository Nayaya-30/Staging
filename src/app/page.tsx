'use client';

import WaitList from '@/pages/external/waitlistPage';
import Footer from './shared/Footer';
import Navigation from './shared/Navigation';
import { useRouter } from 'next/navigation';

export default function Home() {
	const router = useRouter();

	return (
		<>
			<Navigation />

			{ children }

			<Footer />
		</>
	);
}
