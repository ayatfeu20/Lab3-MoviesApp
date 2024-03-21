import { MantineProvider } from "@mantine/core";
import { SessionProvider } from "next-auth/react";
import "node_modules/react-modal-video/scss/modal-video.scss";
import { Notifications } from "@mantine/notifications";
import Layout from "@/components/layout";



function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "dark",
      }}
    >
      
      <Notifications />
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </MantineProvider>
  );
}

export default MyApp;