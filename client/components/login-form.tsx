import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import AuthContainer from '@/components/ui/auth-container';
import useRequest from '@/hooks/use-request';
import { ILogin } from '@/interfaces/login-interface';

export default function LoginForm({
	url,
	method,
	actionButton,
	title,
	subtitle,
}: ILogin) {
	const router = useRouter();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { doRequest, errors } = useRequest({
		url,
		method,
		body: {
			email,
			password,
		},
		onSuccess: () => router.push('/'),
	});

	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		await doRequest();
	};

	return (
		<AuthContainer>
			<div className='container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:px-0'>
				<form onSubmit={onSubmit}>
					<Card>
						<CardHeader className='space-y-1'>
							<CardTitle className='text-2xl'>{title}</CardTitle>
							<CardDescription>{subtitle}</CardDescription>
						</CardHeader>
						<CardContent className='grid gap-6'>
							<div className='grid gap-2'>
								<Label htmlFor='email'>Email</Label>
								<Input
									id='email'
									type='email'
									placeholder='m@example.com'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div className='grid gap-2'>
								<Label htmlFor='password'>Password</Label>
								<Input
									id='password'
									type='password'
									value={password}
									autoComplete='currentpassword'
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
							{errors && <div className='flex w-full'>{errors}</div>}
						</CardContent>
						<CardFooter>
							<div className='flex w-full'>
								<Button
									className='w-full'
									variant='default'
								>
									{actionButton}
								</Button>
							</div>
						</CardFooter>
					</Card>
				</form>
			</div>
		</AuthContainer>
	);
}
