import axios from "axios";

//you can choose to use it or not
let baseUrl = "http://localhost:5000/api/cats";

export const getCats = async () => {
  const response = await axios.get(baseUrl).then(({ data }) => {
    return data.cats;
  });
  console.log(response);
  return response;
};

export const createCat = async (data) => {
  // make an axios.post call to create a cat
  // pass the data as a second argument to your post function and store the response in a variable
  //don't forget to return
  const response = await axios.post(`${baseUrl}`, data).then(({ res }) => {
    return res;
  });
  console.log(response);
  return response;
};

export const destroyCat = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`).then(({ data }) => {
    return data;
  });
  console.log(response);
  return response;
};
