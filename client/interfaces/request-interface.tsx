import { Method } from 'axios';

export interface IRequest {
	url: string;
	method: Method | undefined;
	body: any;
	onSuccess: any;
}
