const postData = async (url, data) => {
  let res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: data
  });

  return await res.json();
};

// async function getResource(url) {
//   let res = await fetch(url);

//   if (!res.ok) {
//     throw new Error(`Could not fetch ${url}, status: ${res.status}`);
//   }
//   try {
//     const data = await res.json();
//     return data;
//   }
//   cache(error) {
//     console.log(error);
//   }
//   return await res.json();
// }
async function getResource(url) {
  let res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

  try {
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export {
  postData,
  getResource
};