export const metadata = {
  title: "About Us",
};

export default function AboutUsLayout({ children }) {
  return (
    <div>
      {children}
      &copy; Next JS is great!
    </div>
  );
}
