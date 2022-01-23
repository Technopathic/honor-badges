import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import type { MetaFunction } from "remix";
import { Global, css } from '@emotion/react'

export const meta: MetaFunction = () => {
  return {
    title: "Honor Badges",
    description: "Badges to show where you stand on your projects usage."
  };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />

        <link rel="apple-touch-icon" sizes="180x180" href="/favicon128.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon32.png" />

        <meta name="og:title" property="og:title" content="Honor Badges" />
        <meta name="og:site_name" property="og:site_name" content="Honor Badges" />
        <meta name="og:locale" property="og:locale" content="en" />
        <meta name="og:type" property="og:type" content="website" />
        <meta name="og:description" property="og:description" content="Badges to show where you stand on your projects usage." />
        <meta name="og:url" property="og:url" content="https://honorbadges.com" />

        <meta name="og:image:type" property="og:image:type" content="image/png" />
        <meta name="og:image:width" property="og:image:width" content="1200" />
        <meta name="og:image:height" property="og:image:height" content="630" />
        <meta name="og:image" property="og:image" content="https://honorbadges.com/og-image.png" />
        <meta name="og:image:secure_url" property="og:image:secure_url" content="https://honorbadges.com/og-image.png" />

        <link rel="preload" href="/fonts/8wonder.ttf" as="font" type="font/ttf" crossorigin="anonymous" />
        <link rel="preload" href="/fonts/Inter-Regular.ttf" as="font" type="font/ttf" crossorigin="anonymous" />
        <link rel="preload" href="/fonts/Inter-Bold.ttf" as="font" type="font/ttf" crossorigin="anonymous" />
      </head>
      <body>
        <Global
          styles={css`
            @font-face {
              font-family: "wonder";
              src: url(/fonts/8wonder.ttf) format("truetype");
              font-weight: normal;
              font-style: normal;
              font-display: swap;
            }

            @font-face {
              font-family: "inter-regular";
              src: url(/fonts/Inter-Regular.ttf) format("truetype");
              font-weight: normal;
              font-style: normal;
              font-display: swap;
            }

            @font-face {
              font-family: 'inter-bold';
              src: url(/fonts/Inter-Bold.ttf) format('truetype');
              font-weight: normal;
              font-style: normal;
              font-display: swap;
            }

            * {
              box-sizing: border-box;
              margin: 0;
              padding: 0;
            }

            body {
              margin: 0;
              padding: 0;
              font-family: inter-regular;
              color: #f6f2fd;
            }
          `}
        />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
