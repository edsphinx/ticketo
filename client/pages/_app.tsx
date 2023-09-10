import { FC } from 'react';

interface AppProps {
	Component: FC;
	pageProps: any;
}

const App: FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<div>
			<h1>Header</h1>
			<Component {...pageProps} />
		</div>
	);
};

export default App;
