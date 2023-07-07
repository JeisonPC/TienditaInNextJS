import { signIn, signOut, useSession } from "next-auth/react";
import Head from 'next/head';
import Layout from "../components/Layout";

const IndexPage = () => {
  const { data: session } = useSession();

  const signInButtonNode = () => {
    if (session) {
      return false;
    }

    return (
      <div>
        <button onClick={signIn}>Sign In</button>
      </div>
    );
  };

  const signOutButtonNode = () => {
    if (!session) {
      return false;
    }

    return (

      <div>
        <button onClick={signOut}>Sign Out</button>
      </div>
    );
  };

  if (!session) {
    return (
      <div className="hero">
        <div className="navbar">
          {signOutButtonNode()}
          {signInButtonNode()}
        </div>
        <div className="text">
          No estás autorizado para ver esta página.
        </div>
      </div>
    );
  }

  return (
    <div className="hero">
      <Head>
        <title>Index Page</title>
      </Head>
      <div className="navbar">
        {signOutButtonNode()}
        {signInButtonNode()}
      </div>
      <div className="text">
        Hello world
        {session.token}
      </div>
    </div>
  );
};


export default IndexPage;
