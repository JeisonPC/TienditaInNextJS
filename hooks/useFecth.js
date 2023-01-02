/* import { useState, useEffect } from 'react';
import axios from 'axios';

function MyPage(props) {
  const [data, setData] = useState(props.data);
  const [loading, setLoading] = useState(props.loading);
  const [error, setError] = useState(props.error);

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        const {productos} = res.data;
        setData({productos});
      } catch (error) {
        setError('An error occurred. Awkward..');
      } finally {
        setLoading(false);
      }
    }

    if (!data) {
      getData();
    }
  }, [data]);

  return (
    // Render your component here
  );
}

export async function getServerSideProps(context) {
  try {
    const res = await axios.get("https://fakestoreapi.com/products");
    const {productos} = res.data;
    return {
      props: {
        data: {productos},
        loading: false,
        error: null,
      },
    };
  } catch (error) {
    return {
      props: {
        data: null,
        loading: false,
        error: 'An error occurred. Awkward..',
      },
    };
  }
}

export default MyPage;
 */
