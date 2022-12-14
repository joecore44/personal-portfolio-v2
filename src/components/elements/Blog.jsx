import Image from "next/image";
import Link from "next/link";
import { createSlug } from "../../lib";

import { imageLoader, shimmer, toBase64 } from "../../lib/utils";

const Blog = ({ post: { title, date, slug, featuredImage, categories } }) => {
  //const date = "2022-04-30T20:31:59.889Z";
  return (
    <article className="blog card p-4 md:p-5">
      <div className="blog-top relative mb-4">
        <Link href={`/post/${slug}`}>
          <a
            className="fiximage hover-scale block"
            title={ title }
          >
            <Image
              loader={imageLoader}
              unoptimized={true}
              src={ featuredImage.node.sourceUrl }
              height={240}
              width={400}
              alt={ featuredImage.node.altText }
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
          {new Date(date).toLocaleDateString("en-us", {
                  month: "short",
                })}
          </span>
          <span className="date block text-2xl leading-none">
          {new Date(date).toLocaleDateString("en-us", {
                  day: "2-digit",
                })}
          </span>
          <span className="year block text-sm leading-none">
          {new Date(date).getFullYear({
                  year: "numeric",
                })}
          </span>
        </div>
      </div>
      <h5 className="mb-0">
        <Link href={`/post/${slug}`}>
          <a
            className=" block overflow-hidden overflow-ellipsis whitespace-nowrap transition-colors duration-500 hover:text-primary"
            title={title}
          >
            {title}
          </a>
        </Link>
      </h5>
      <div className="flex list-none gap-1.5 text-sm">
        <span className="after:content-[','] last:after:hidden">
          <Link href="#">
            <a className=" hover:text-primary">{categories.nodes[0].name}</a>
          </Link>
        </span>
      </div>
    </article>
  );
};

export default Blog;
