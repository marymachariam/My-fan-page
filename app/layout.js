import "./globals.css";
import Nav from "./components/Nav";

export const metadata = {
  title: "My Fan Page",
  description: "A page about the things I love.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <footer style={{ marginTop: "3rem", textAlign: "center", color: "#888" }}>
          Built with Love 💙
        </footer>
      </body>
    </html>
  );
}