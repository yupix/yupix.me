import "./assets/css/global.css";
import type { LinksFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Navbar } from "./components/NavBar";
import { Container } from "./components/Container";
import { Spacer } from "./components/Spacer";

export const links: LinksFunction = () => [
];



export default function App() {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <header className="p-4 border-b sticky top-0 bg-white dark:bg-base-100">
          <Navbar />
        </header>
        <Container>
          <Spacer size="2xs" />
          <Outlet />
        </Container>
        <ScrollRestoration />
        <LiveReload />
        <Scripts />
      </body>
    </html>
  );
}
