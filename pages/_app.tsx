import type { AppProps } from 'next/app'
import { Wrapper } from '@context/store.tsx'
import Head from 'next/head'
import '../styles/globals.css'

function App({ Component, pageProps }: AppProps) {
	return (
		<Wrapper>
			<Head>
				<meta
					name='viewport'
					content='minimum-scale=1, initial-scale=1,maximum-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover'
				/>
			</Head>
			<Component {...pageProps} />
		</Wrapper>
	)
}

export default App
