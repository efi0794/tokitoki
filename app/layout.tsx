import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "18:00までに復旧せよ | セキュリティ謎解き研修",
  description: "フィッシングやパスワード使い回しの危険を体験して学ぶ、社内PC風セキュリティ謎解きゲーム。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">{children}</body>
    </html>
  );
}
