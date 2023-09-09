import '@/css/globals.css';
import { NextPageContext } from 'next';
import buildClient from '@/api/build-client';

interface IProps {
	data: {
		currentUser: {
			email: string;
			iat: number;
			id: string;
		};
	};
}
const LandingPage = ({ data: { currentUser } }: IProps) => {
	return currentUser ? (
		<h1>You are signed in</h1>
	) : (
		<h1>You are NOT signed in</h1>
	);
};

LandingPage.getInitialProps = async (context: NextPageContext) => {
	const client = buildClient(context);

	const { data } = await client.get('/api/users/currentuser');

	return { data };
};

export default LandingPage;
