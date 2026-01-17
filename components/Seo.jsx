import Head from "next/head";
import { useLanguage } from "@/context/LanguageContext";

export default function Seo({ 
  title, 
  description, 
  image = "/images/profile/profile.png", // Default image
  url = "https://porto-fadlan.vercel.app" // Replace with actual URL
}) {
  const { lang } = useLanguage();

  const siteTitle = title 
    ? `${title} | Fadlan`
    : "Fadlan - Software Engineer & Data Analyst";

  const siteDesc = description || (lang === "id" 
    ? "Portfolio Muhammad Fadlansyah. Software Engineer dan Data Analyst yang berfokus pada pengembangan web modern dan analisis data."
    : "Portfolio of Muhammad Fadlansyah. Software Engineer and Data Analyst focused on modern web development and data analytics.");

  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDesc} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDesc} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={siteDesc} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
}
