'use client';

import { useState, FormEvent } from 'react';
import axios, { AxiosError } from 'axios';
import { cn } from '@/lib/utils';
import { AlertCircle, FileWarning, Terminal } from 'lucide-react';

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
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

function AuthContainer({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cn(
				'flex items-center justify-center [&>div]:w-full',
				className
			)}
			{...props}
		/>
	);
}

export default function SignUp() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState([]);

	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			const response = await axios.post('/api/users/signup', {
				email,
				password,
			});
			setErrors([]);
		} catch (err: any) {
			setErrors(err.response?.data.errors);
		}
	};

	return (
		// <main className='flex min-h-screen flex-col items-center justify-between'>
		// 	<div className='z-10 max-w-xl w-full items-center justify-between font-mono text-sm lg:flex'>
		<>
			<AuthContainer>
				<div className='container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:px-0'>
					<form onSubmit={onSubmit}>
						<Card>
							<CardHeader className='space-y-1'>
								<CardTitle className='text-2xl'>Create an account</CardTitle>
								<CardDescription>
									Enter your email & password below to create your account
								</CardDescription>
							</CardHeader>
							<CardContent className='grid gap-6'>
								<div className='grid gap-2'>
									<Label htmlFor='email'>Email</Label>
									<Input
										id='email'
										// type='email'
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
										onChange={(e) => setPassword(e.target.value)}
									/>
								</div>
								{errors.length > 0 && (
									<div className='flex w-full'>
										<Alert
											variant='destructive'
											className='w-full'
										>
											<AlertCircle className='h-4 w-4' />
											<AlertTitle>Error</AlertTitle>
											<AlertDescription>
												<ul>
													{errors.map((err: any) => (
														<li key={err.message}>{err.message}</li>
													))}
												</ul>
											</AlertDescription>
										</Alert>
										<br />
									</div>
								)}
							</CardContent>
							<CardFooter>
								<div className='flex w-full'>
									<Button
										className='w-full'
										variant='default'
									>
										Sign Up
									</Button>
								</div>
							</CardFooter>
						</Card>
					</form>
				</div>
			</AuthContainer>
		</>
		//
		// </main>
	);
}
