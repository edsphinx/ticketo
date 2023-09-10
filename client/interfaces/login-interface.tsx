import { Method } from 'axios';

export interface ILogin {
	url: string;
	method: Method;
	title: string;
	subtitle: string;
	actionButton: string;
}
