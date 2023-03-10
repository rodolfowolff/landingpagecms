import { GetServerSideProps } from "next";
import { DefaultSeo } from "next-seo";
import { defaultSEO } from "../../next-seo.config";
import { Faqs } from "../components/Faqs";
import { Features } from "../components/Features";
import { Hero } from "../components/Hero";
import { Pricing } from "../components/Pricing";
import { usePageQuery, PageDocument } from "../generated/graphql";
import { client, ssrCache } from "../lib/urql";

export default function Home() {
  const [{ data }] = usePageQuery({
    variables: {
      slug: "home",
    },
  });

  return (
    <>
      <DefaultSeo {...defaultSEO} />
      <Hero title={data.page.title} subtitle={data.page.subtitle} />
      <Features />
      {/* <Pricing /> */}
      <Faqs />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  await client.query(PageDocument, { slug: "home" }).toPromise();

  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
  };
};

// export const getStaticProps: GetStaticProps = async () => {
//   await client.query(PageDocument, { slug: "home" }).toPromise();

//   return {
//     props: {
//       urqlState: ssrCache.extractData(),
//     },
//     revalidate: 10, //60 * 60 * 4, // 4 hours
//   };
// };
