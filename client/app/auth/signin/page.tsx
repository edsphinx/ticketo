'use client';

import LoginForm from '@/components/login-form';

export default function SignUp() {
	return (
		<LoginForm
			url='/api/users/signin'
			method='post'
			title='Login to an account'
			subtitle='Enter your email & password below to signin your account'
			actionButton='Sign In'
		/>
	);
}
