'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useRequest from '@/hooks/use-request';

const SignOut = () => {
	const router = useRouter();
	const { doRequest } = useRequest({
		url: '/api/users/signout',
		method: 'post',
		body: {},
		onSuccess: () => router.push('/'),
	});

	useEffect(() => {
		doRequest();
	}, [doRequest]);

	return <div>Signing you out...</div>;
};

export default SignOut;
