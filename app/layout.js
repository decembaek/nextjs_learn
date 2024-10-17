import Navigation from "../components/navigation";

export const metadata = {
  title: {
    template: "%s | Next.js",
    default: "Next.js",
  },
  description: "The best movies by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
