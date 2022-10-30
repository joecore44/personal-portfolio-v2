import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Blog, Breadcrumb } from "../../components/elements";
import { childrenAnimation } from "../../lib/motion";
import { Layout } from "../../components/layout";

const Posts = ({ hasMore }) => {
  const [mounted, setMounted] = useState(false);

  const router = useRouter();
  const { slug: page } = router.query;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <p className="text-center">Loading...</p>;

  return (
    <Layout>
      <Head>
        <title>Joe Shepard - Software Engineering Projects</title>
      </Head>
      <Breadcrumb
        title="Projects"
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
            <div className="col-span-1 lg:col-span-9">
              <div className="grid grid-cols-2 gap-7">
                
                  <Blog />
                
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
            <div className="col-span-1 lg:col-span-3">
              <div className="widget sticky top-[107px] mt-8 space-y-10 lg:mt-0">
                <div className="widget widget-category card rounded p-4">
                  <h5 className="border-b border-white border-opacity-20 pb-2 font-medium text-primary">
                    Categories
                  </h5>
                  <ul className="styledlist mb-0 list-none pl-0">
                    <li>
                      <Link href="/category/trend/1">
                        <a className="clearfix hover:text-primary">
                          Trend<span className="float-right">(4)</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/category/trend/1">
                        <a className="clearfix hover:text-primary">
                          Trend<span className="float-right">(4)</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/category/trend/1">
                        <a className="clearfix hover:text-primary">
                          Trend<span className="float-right">(4)</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/category/trend/1">
                        <a className="clearfix hover:text-primary">
                          Trend<span className="float-right">(4)</span>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-recentpost card rounded p-4">
                  <h5 className="border-b border-white border-opacity-20 pb-2 font-medium text-primary">
                    Recent Posts
                  </h5>
                  <ul className="mb-0 list-none pl-0">
                    <li className="mb-4 last:mb-0">
                      <p className="mb-0">
                        <Link href="/postdetails/what-designer-can-do">
                          <a className="text-heading no-underline hover:text-primary hover:underline">
                            What designer can do{" "}
                          </a>
                        </Link>
                      </p>
                      <small className="text-body">May 11, 2022</small>
                    </li>
                    <li className="mb-4 last:mb-0">
                      <p className="mb-0">
                        <Link href="/postdetails/what-designer-can-do">
                          <a className="text-heading no-underline hover:text-primary hover:underline">
                            What designer can do{" "}
                          </a>
                        </Link>
                      </p>
                      <small className="text-body">May 11, 2022</small>
                    </li>
                    <li className="mb-4 last:mb-0">
                      <p className="mb-0">
                        <Link href="/postdetails/what-designer-can-do">
                          <a className="text-heading no-underline hover:text-primary hover:underline">
                            What designer can do{" "}
                          </a>
                        </Link>
                      </p>
                      <small className="text-body">May 11, 2022</small>
                    </li>
                    <li className="mb-4 last:mb-0">
                      <p className="mb-0">
                        <Link href="/postdetails/what-designer-can-do">
                          <a className="text-heading no-underline hover:text-primary hover:underline">
                            What designer can do{" "}
                          </a>
                        </Link>
                      </p>
                      <small className="text-body">May 11, 2022</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Posts;
