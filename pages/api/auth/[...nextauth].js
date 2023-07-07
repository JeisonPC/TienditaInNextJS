import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';


const providers = [
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  })
];

const callbacks = {
  async session({ user, session, token }) {
    session.user = token;
    session.user.id = user ? user.id : null;
    return session;
  },

  async jwt({ token, user, account }) {
    const isSignIn = user ? true : false;
    if (isSignIn && account) {
      try {
        console.log("Google Account >>>>>>>>>>>>>> ", account);
        const publicUrl = process.env.NEXT_PUBLIC_API_URL;
        const response = await fetch(
          `${publicUrl}api/auth/${account.provider}/callback?access_token=${account?.access_token}`
        );
        console.log(" Es la response pura:", response);
        const data = await response.json();
        console.log("Strapi Callback Data >>>>>>>>>>>>>> ", data);

        if (data && data.user && data.user.id) {
          token.jwt = data.jwt;
          token.id = data.user.id;
        } else {
          console.error('User ID not found in the response data');
        }
      } catch (error) {
        console.error('Fetch failed:', error);
      }
    }
    return token;
  }
};

const options = {
  providers,
  callbacks,
  secret: process.env.NEXTAUTH_SECRET
};

export default NextAuth(options);
