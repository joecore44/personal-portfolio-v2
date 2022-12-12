import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Blog, Breadcrumb } from "../../components/elements";
import { childrenAnimation } from "../../lib/motion";
import { Layout } from "../../components/layout";
import { getPosts } from "../../hooks/useGetPosts";

const Posts = ({ hasMore }) => {
  const [mounted, setMounted] = useState(false);

  const router = useRouter();
  const { slug: page } = router.query;

  useEffect(() => {
    setMounted(true);
  }, []);
  const {error, loading, data } = getPosts();
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error}</p>;
  const postsData = [];
  if(data) postsData = data.posts.nodes;
  console.log('Posts: ', postsData);

  if (!mounted) return <p className="text-center">Loading...</p>;

  return (
    <Layout>
      <Head>
        <title>Joe Shepard - Software Engineering Projects</title>
      </Head>
      <Breadcrumb
        title="Projects & Content"
        paths={[
          {
            name: "Home",
            link: "/",
          },
          {
            name: "Projects",
            link: "",
          },
        ]}
      />
      <div className="blogs py-24 lg:py-28 xl:py-32">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-7 lg:grid-cols-12">
            <div className="col-span-1 lg:col-span-12">
              <div className="grid grid-cols-2 gap-7">
                
              {postsData &&
                  postsData?.map((post, index) => (
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 * index }}
                      variants={childrenAnimation}
                      className="col-span-2 sm:col-span-1"
                      key={index}
                    >
                      <Blog post={post} />
                    </motion.div>
                  ))}
                
              </div>
              <div className="flex gap-3 pt-10 text-center">
                {page !== "1" && (
                  <Link href={`/posts/${String(parseInt(page) - 1)}`}>
                    <a className="btn btn-small">
                      <span>Prev</span>
                    </a>
                  </Link>
                )}
                {hasMore && (
                  <Link href={`/posts/${String(parseInt(page) + 1)}`}>
                    <a className="btn btn-small">
                      <span>Next</span>
                    </a>
                  </Link>
                )}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Posts;
