import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}
export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        {/* <header>[header TODO]</header> */}
        <main>{children}</main>
        {/* <footer>[footer TODO]</footer> */}
      </body>
    </html>
  );
}
