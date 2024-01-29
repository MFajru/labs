// GET Request
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => {
//     const a = response.headers.get("content-type");
//     console.log(a);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });
//======================================================================
// GET Request Query with Query String
// fetch("https://jsonplaceholder.typicode.com/todos?id=1&id=2")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

//   console.error()

// Async await fetch request
// async function getTitle() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/todos?userId=1"
//     );
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }
//===============================================================

// POST data
// const url = "https://653b39022e42fd0d54d4cecb.mockapi.io/users";
// const options = {
//   method: "POST",
//   headers: {
//     "content-type": "application/json",
//   },
//   body: JSON.stringify({
//     name: "Fajru",
//   }),
// };

// async function postName(options) {
//   try {
//     const response = await fetch(url, options);
//     if (!response.ok) {
//       throw new Error(`Something wrong ${response.status}`);
//     }
//     return response.json();
//   } catch (error) {
//     console.error(error);
//   }
// }
// ===================================================================

//db.json key must be wrapped in object / array of object

// ===================================================================

// Fetch using Axios
import axios from "axios";

const url = "http://localhost:9000";
// GET DATA
async function getData() {
  try {
    const response = await axios.get(`${url}/users`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// POST DATA
async function postData(dataPost) {
  try {
    const response = await axios.post(`${url}/users`, dataPost);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

//DELETE DATA
async function deleteData() {
  try {
    const response = await axios.delete(`${url}/users/4`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

//UPDATE DATA
async function updateData(updateData) {
  try {
    const response = await axios.put(`${url}/users/2`, updateData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function main() {
  //   const title = await getTitle();
  //   console.log(title);
  // const postResponse = await postName(options);
  // console.log(postResponse);
  const dataPost = {
    firstName: "Fernando",
    middleName: "Labs",
  };
  // await postData(dataPost);
  // await deleteData();
  const dataUpdate = {
    id: 2,
    firstName: "Joseph",
    middleName: "Wasik",
  };
  await updateData(dataUpdate);
  const data = await getData();
  console.log(data);
}

main();
