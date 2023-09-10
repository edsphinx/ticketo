import '@/css/globals.css';
import { NextPageContext } from 'next';
import buildClient from '@/api/build-client';
import { IUser } from '@/interfaces/user-interface';
import DashboardPage from '@/components/dashboard';

interface IProps {
	data: {
		currentUser: IUser;
	};
}
const LandingPage = ({ data }: IProps) => {
	return (
		<>
			<DashboardPage {...data?.currentUser} />
		</>
	);
};

LandingPage.getInitialProps = async (context: NextPageContext) => {
	const client = buildClient(context);
	const { data } = await client.get('/api/users/currentuser');

	return { data };
};

export default LandingPage;
