import { getSession } from "next-auth/client";
import Head from "next/head";
import Header from "../components/Header";
import "tailwindcss/tailwind.css";
import Login from "../components/Login";
import Sidebar from "../Sidebar";
import Feed from "../components/Feed";
import Widgets from "../components/Widgets";
import { db } from "../firebase";

export default function Home({ session, posts }) {
  if (!session) return <Login />;

  return (
    <div className="h-screen bg-gray-100 overflow-hidden  ">
      
      <Head>
        <title>Facebook</title>
        <link rel = "icon" href = "https://static.xx.fbcdn.net/rsrc.php/yD/r/d4ZIVX-5C-b.ico?_nc_eui2=AeEuzN0tZdmea-rKrIme50AWaBWfmC2eGbdoFZ-YLZ4ZtzAnwzr9Fq7NWGkxbHX0Fcm1HzBsef6U1v5_cibz4ZnP" 
        type = "image/x-icon"></link>
        <link src=""/>
      </Head>

      <Header />

      <main className="flex">
        <Sidebar />
        <Feed posts={posts} />
        <Widgets />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  // Get the user
  const session = await getSession(context);

  const posts = await db.collection("posts").orderBy("timestamp", "desc").get();

  const docs = posts.docs.map(post => ({
    id: post.id,
    ...post.data(),
    timestamp: null
  }))

  return {
    props: {
      session,
      posts: docs,
    },
  };
}
