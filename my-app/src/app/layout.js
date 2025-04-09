import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import InstallBootstrap from "./components/InstallBootstrap";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <InstallBootstrap />
        {children}
      </body>
    </html>
  );
}
