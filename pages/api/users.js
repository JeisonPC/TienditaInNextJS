import axios from "axios";

export default async function handler(req, res) {
  const { jwt, email, name } = req.body;

  try {
    // check if user already exists in Strapi
    const userResponse = await axios.get(`${process.env.STRAPI_URL}/api/users?email=${email}`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    const [user] = userResponse.data;

    if (!user) {
      // if user doesn't exist, create a new user
      await axios.post(
        `${process.env.STRAPI_URL}/api/auth/local/register`,
        {
          username: email,
          email,
          password: "random-password",
          name,
        },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
    } else {
      // if user exists, update the user's name
      await axios.put(
        `${process.env.STRAPI_URL}/api/users/${user.id}`,
        {
          name,
        },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
    }

    res.status(200).json({ message: "User saved successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error saving user." });
  }
}
