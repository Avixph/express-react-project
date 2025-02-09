import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import CatDisplay from "./components/CatDisplay";
import { destroyCat, getCats, createCat } from "./services/api-helper";

function App() {
  const [cats, setCats] = useState([]);
  console.log(cats);
  const [formData, setFormData] = useState({
    formData: {
      name: "",
      chonkyness: "Chonkyness Level",
      imagelink: "",
      biography: "",
    },
  });

  useEffect(async () => {
    const cats = await getCats();
    setCats(cats);
  }, []);

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    setFormData((prevState) => ({
      ...prevState.formData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const cat = await createCat(formData);
    setCats((prevState) => [cat, ...prevState.cats]);
    setFormData({
      formData: {
        name: "",
        chonkyness: "Chonkyness Level",
        imagelink: "",
        biography: "",
      },
    });
  };

  const handleDelete = async (catId) => {
    await destroyCat(catId);
    setCats((prevState) => prevState.cats.filter((cat) => cat._id !== catId));
  };

  return (
    <div className="app">
      <Header />
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        formData={formData}
      />
      <CatDisplay cats={cats} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
