const fetchUserData = async (token, url) => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (response.ok) return response.json();
  throw new Error("Http Error");
};

export default fetchUserData;

// import { useState } from "react";

// const fetchUserData = async (token, route) => {
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(false);
//   try {
//     const url = `${process.env.BASE_SERVER_URL}/api${route}`;
//     const response = await fetch(url, {
//       method: "GET",
//       headers: {
//         "content-type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     if (response?.ok) {
//       const result = await response.json();
//       setData(result);
//     } else {
//       setError(true);
//     }
//   } catch (error) {
//     setError(true);
//   } finally {
//     setIsLoading(false);
//   }
//   return {
//     isLoading,
//     error,
//     data,
//   };
// };

// export default fetchUserData;
