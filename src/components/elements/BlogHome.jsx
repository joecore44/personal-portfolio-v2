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
      return (
        <SwiperSlide key={2}>
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
                      TEST
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

