import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { childrenAnimation } from "../../lib/motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { getPosts } from "../../hooks/useGetPosts"
import { createSlug } from "../../lib";
import { imageLoader, shimmer, toBase64 } from "../../lib/utils";

const Blog = () => {
  const {error, loading, data } = getPosts();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error}</p>;


  return (
    <>
    {data.posts.nodes.map((post, index) => { 
      return (<SwiperSlide >
                <div className="slider-item">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  variants={childrenAnimation}
                  className="col-span-2 sm:col-span-1"
                >
      <article className="blog card p-4 md:p-5">
          <div className="blog-top relative mb-4">
            <Link href={`/post/`+ post.slug}>
              <a
                className="fiximage hover-scale block"
                title={post.title}
              >
                <Image
                  loader={imageLoader}
                  unoptimized={true}
                  src={post.featuredImage.node.sourceUrl}
                  height={240}
                  width={400}
                  alt={post.featuredImage.node.alt}
                  layout="responsive"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer(400, 240)
                  )}`}
                />
              </a>
            </Link>
            <div className="blog-date absolute left-auto right-5 top-5 inline-block min-h-[60px] min-w-[60px] rounded bg-primary p-2 text-center text-grey">
              <span className="month block text-sm uppercase leading-none">
                {new Date(post.date).toLocaleDateString("en-us", {
                  month: "short",
                })}
              </span>
              <span className="date block text-2xl leading-none">
                {new Date(post.date).toLocaleDateString("en-us", {
                  day: "2-digit",
                })}
              </span>
              <span className="year block text-sm leading-none">
                {new Date(post.date).getFullYear({
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
          <h5 className="mb-0">
            <Link href={`/post/`+ post.slug}>
              <a
                className=" block overflow-hidden overflow-ellipsis whitespace-nowrap transition-colors duration-500 hover:text-primary"
                title={post.title}
              >
                {post.title}
              </a>
            </Link>
          </h5>
          <div className="flex list-none gap-1.5 text-sm">
            <span className="after:content-[','] last:after:hidden">
              <Link href={`/category/javascript/1`}>
                <a className=" hover:text-primary">Javascript</a>
              </Link>
            </span>
          </div>
        </article>
        </motion.div>
        </div>
      </SwiperSlide>
      );
    })}
    </>
  );
};

export default Blog;

