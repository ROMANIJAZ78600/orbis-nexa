import "../globals.css";

export const metadata = {
  title: "About Us | OrbisNexa Consultancy",
  description:
    "Learn about OrbisNexa Consultancy and our commitment to helping students achieve their international education goals.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
