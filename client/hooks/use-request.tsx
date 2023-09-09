import axios, { AxiosRequestConfig, Method } from 'axios';
import { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface IRequest {
	url: string;
	method: Method | undefined;
	body: any;
	onSuccess: any;
}

interface Error {
	message: string;
}

const useRequest = ({ url, method, body, onSuccess }: IRequest) => {
	const [errors, setErrors] = useState<any>();

	const doRequest = async () => {
		try {
			let config: AxiosRequestConfig = {
				url: url,
				method: method,
				data: body,
			};
			setErrors(null);
			const response = await axios.request(config);

			if (onSuccess) {
				onSuccess(response.data);
			}

			return response.data;
		} catch (err: any) {
			setErrors(
				<Alert
					variant='destructive'
					className='w-full'
				>
					<AlertCircle className='h-4 w-4' />
					<AlertTitle>Error</AlertTitle>
					<AlertDescription>
						<ul>
							{err.response.data.errors.map((er: Error) => (
								<li key={er.message}>{er.message}</li>
							))}
						</ul>
					</AlertDescription>
				</Alert>
			);
		}
	};

	return { doRequest, errors };
};

export default useRequest;
