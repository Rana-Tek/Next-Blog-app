"use client";

import Head from "next/head";
import { PostCard, Categories, PostWidget } from "../components";
import { useEffect, useState } from "react";
import fetchPosts from "../../services";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPosts();
      if (data) {
        setPosts(data.posts);
        setLoading(false)
      }
    };
    fetchData();
  }, []);

  {/*if (!posts.length) {
    return <div>LOADING...</div>;
  }

  */}
  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Blogss</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => (
          
            <PostCard post={post.node} key={post.title} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}