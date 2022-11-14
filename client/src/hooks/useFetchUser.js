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
