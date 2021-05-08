const Cat = require("../models/cat");

const createCat = async (req, res) => {
  try {
    const cat = await new Cat(req.body);
    await cat.save();
    return res.status(201).json({ cat });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllCats = async (req, res) => {
  try {
    const cats = await Cat.find();
    return res.status(200).json({ cats });
  } catch (error) {
    return res.status(500).send(eror.message);
  }
};

const getCatByID = async (req, res) => {
  try {
    const { id } = req.params;
    const cat = await Cat.findById(id);
    if (cat) {
      return res.status(200).json({ cat });
    }
    return res.status(404).send("Cat not found 😿");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateCat = async (req, res) => {
  try {
    const { id } = req.params;
    await Cat.findByIdAndUpdate(id, req.body, { new: true }, (err, cat) => {
      if (err) {
        res.status(500).send(err);
      }
      if (!cat) {
        res.status(500).send("Cat not found 😿");
      }
      return res.status(200).json(cat);
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteCat = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Cat.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Cat deleted 🙀");
    }
    throw new Error("Cat not found 😿");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createCat,
  getAllCats,
  getCatByID,
  updateCat,
  deleteCat,
};
