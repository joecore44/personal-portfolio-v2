import { useState, useEffect } from "react";
import Head from "next/head";
import { getPost } from '../../hooks/useGetPost';
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { imageLoader, shimmer, toBase64 } from "../../lib/utils";
import { Breadcrumb } from "../../components/elements";
import { Layout } from "../../components/layout";
import { Spinner } from "../../components/utils";

const PostPage = () => {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);

  const key = "how-to-develop-your-brands-organic-social-media-content-strategy"
  const {error, loading, data } = getPost(slug);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error}</p>;
  if(data) console.log(data);

  /*
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <div className="block py-20 text-center">
        <Spinner />
      </div>
    );
*/
  return (
    <Layout>
      <Head>
        <title>
          Joe Shepard - Article - {data.post.title}
        </title>
      </Head>
      <Breadcrumb
        title={data.post.title}
        paths={[
          {
            name: "Home",
            link: "/",
          },
          {
            name: "Projects & Content",
            link: "/post/" + data.post.title,
          },
          {
            name: data.post.title,
            link: "",
          },
        ]}
      />
      <div className="single-post py-24 lg:py-28 xl:py-32">
        <div className="container mx-auto">
          <div className="post-header mb-8">
            <div className="fiximage mb-5 overflow-hidden rounded border border-white border-opacity-20">
              <Image
                loader={imageLoader}
                unoptimized={true}
                src={data.post.featuredImage.node.sourceUrl}
                height={650}
                width={1350}
                alt="Blog Image"
                layout="responsive"
                objectFit="cover"
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(1350, 650)
                )}`}
              />
            </div>
            <div className="flex flex-wrap justify-between gap-x-4">
              <div className="mb-0 flex gap-2 text-heading">
                Category :
                <div className="inline-flex list-none gap-1.5">
                  <span className="after:content-[','] last:after:hidden">
                    <Link href="/category/trend/1">
                      <a className="text-body hover:text-primary">Trend</a>
                    </Link>
                  </span>
                </div>
              </div>
              <p className="mb-0 text-heading">
                Published on :
                <span className="ml-1.5 text-body">{data.post.date}</span>
              </p>
            </div>
          </div>
          <div className="post-body mt-4">
            <div className="post-content">
            <div dangerouslySetInnerHTML={{ __html: data.post.content }} />
            </div>  
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PostPage;
