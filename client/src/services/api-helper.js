import axios from 'axios';

//you can choose to use it or not
let baseUrl = 'http://localhost:5000/api/cats'

export const getCats = async () => {
  //make an axios.get call all the cats and store the response in a variable
  //don't forget to return 

  // return axios.get(`${baseUrl}`)

}

export const createCat = async (data) => {
  // make an axios.post call to create a cat
  // pass the data as a second argument to your post function and store the response in a variable
   //don't forget to return 
}
export const destroyCat = async (id) => {
  //make an axios.delete call to delete a cat, interpolating the `id` with your baseUrl, store your response in a variable 
  //don't forget to return
}