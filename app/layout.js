import "./globals.css";

export const metadata = {
  title: "Your'e Motivation",
  description: "website for student encouragement",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth bg-slate-400 ">
      <body>{children}</body>
    </html>
  );
}
//
