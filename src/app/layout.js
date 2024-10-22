import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  metadataBase: new URL("https://universal-taekwondo-academy.netlify.app/"),
  title: "Universal Taekwondo Academy - Master the Art of Taekwondo",
  description: "Universal Taekwondo Academy offers expert training in Taekwondo, focusing on self-discipline, fitness, and personal growth in a supportive community.",
  keywords: "Taekwondo, martial arts, self-defense, fitness, Universal Taekwondo Academy, training, martial arts academy, sport, health",
  author: "Universal Taekwondo Academy Team",
  openGraph: {
    title: "Universal Taekwondo Academy - Master the Art of Taekwondo",
    description: "Join us at Universal Taekwondo Academy for expert training and a vibrant community dedicated to martial arts.",
    url: "https://universal-taekwondo-academy.netlify.app/",
    siteName: "Universal Taekwondo Academy",
    images: [
      {
        url: "favicon.ico", // Update with actual favicon URL
        width: 800,
        height: 600,
        alt: "Universal Taekwondo Academy Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@UniversalTKD", // Update with actual Twitter handle if available
    title: "Universal Taekwondo Academy - Master the Art of Taekwondo",
    description: "Join us at Universal Taekwondo Academy for expert training in Taekwondo and a supportive community.",
    image: "favicon.ico", // Update with actual favicon URL
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
