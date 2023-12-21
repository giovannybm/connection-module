import type { AppProps } from 'next/app';
import { ThemeProvider, CssBaseline, Container } from '@mui/material';
// Internal app
import { theme } from '@/theme/theme';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Container maxWidth={false} sx={{ height: '100vh' }}>
      <Component {...pageProps} />
    </Container>
  </ThemeProvider>
);

export default MyApp;
