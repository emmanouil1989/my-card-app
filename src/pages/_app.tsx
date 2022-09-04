import type { AppProps } from 'next/app';
import './styles/global.css';
import { withTRPC } from '@trpc/next';
import type { AppRouter } from './api/backend/router';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
};

export default withTRPC<AppRouter>({
  config({ ctx }) {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    console.log('VERCEL URL', process.env.VERCEL_URL);
    const url = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/api/trpc`
      : 'http://localhost:3000/api/trpc';

    return {
      url,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
      headers: {
        // optional - inform server that it's an ssr request
        'x-ssr': '1',
      },
  
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: false,
})(MyApp);
