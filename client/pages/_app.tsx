import '@/css/globals.css';
import { ThemeProvider } from '@/components/theme-provider';

import { FC } from 'react';
import buildClient from '@/api/build-client';
import { AppContextType } from 'next/dist/shared/lib/utils';
import { SiteHeader } from '@/components/site-header';
import DashboardPage from '@/components/dashboard';
import { IUser } from '@/interfaces/user-interface';

interface AppProps {
	Component: FC;
	pageProps: any;
	data: {
		currentUser: IUser;
	};
}

interface IHeader {}

const AppComponent = ({ Component, pageProps, data }: AppProps) => {
	return (
		<ThemeProvider
			attribute='class'
			defaultTheme='system'
			enableSystem
		>
			<div>
				<SiteHeader {...data} />
				<Component {...pageProps} />
			</div>
		</ThemeProvider>
	);
};

AppComponent.getInitialProps = async ({ ctx, Component }: AppContextType) => {
	if (ctx) {
		const client = buildClient(ctx);
		const { data } = await client.get('/api/users/currentuser');

		let pageProps = {};
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return {
			pageProps,
			data,
		};
	}
};

export default AppComponent;
