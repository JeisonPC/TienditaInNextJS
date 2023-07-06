/* import NextAuth from "next-auth";
import axios from "axios";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // configure providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
    }),
  ],

  // configure callbacks
  callbacks: {
    async jwt(token, user) {
      // Call your API to save the user in Strapi
      console.log("perfil:",_profile)
      if (user) {
        token.id = user.id;
        try {
          const { email, name } = user.user;
          const data = {
            email: email,
            password: "Hole123456",
            username: email,
          };
          const config = {
            headers: {
              Authorization: `Bearer ${access_token}` // si necesita enviar el token de acceso en la solicitud
            }
          };
          const response = await axios.post(`${process.env.STRAPI_URL}/auth/local/register`, data, config);
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      }
      return token;
    },
  },
});
 */
