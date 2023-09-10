'use client';

import LoginForm from '@/components/login-form';

export default function SignUp() {
	return (
		<LoginForm
			url='/api/users/signup'
			method='post'
			title='Create an account'
			subtitle='Enter your email & password below to create your account'
			actionButton='Sign Up'
		/>
	);
}
