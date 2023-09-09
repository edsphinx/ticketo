import { FC } from 'react';

interface AppProps {
	Component: FC;
	pageProps: any;
}

const App: FC<AppProps> = ({ Component, pageProps }) => {
	return <Component {...pageProps} />;
};

export default App;
