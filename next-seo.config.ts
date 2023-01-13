const description = `Learn how to build modern marketing websites, with localization and SEO, using Hygraph, NextJS, Tailwind css, and Vercel.`;
const title = `Build Modern Marketing Websites with a Headless CMS`;
const url = `https://landingpagecms.vercel.app/`;

const seo = {
  title,
  titleTemplate: "%s | Produto 1",
  description,
  openGraph: {
    description,
    title,
    type: "website",
    url,
  },
};

export { seo as defaultSEO, url as defaultUrl };
