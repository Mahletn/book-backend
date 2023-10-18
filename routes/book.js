const router = require("express").Router();
const Book = require("../model/book");

router.post("/create", async (req, res) => {
  const newBook = new Book({
    author: req.body.author,
    title: req.body.title,
    isbn: req.body.isbn,
    imageUrl: req.body.imageUrl,
  });

  try {
    const savedBook = await newBook.save();
    res.status(200).json(savedBook);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/all", async (req, res) => {
  try {
    const findBook = await Book.find({});
    res.status(200).json(findBook);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:key", async (req, res) => {
  try {
    const findBook = await Book.find({ title: req.params.key });
    res.status(200).json(findBook);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.patch("/:id", async (req, res) => {
  const { author, title, isbn, imageUrl } = req.body;
  try {
    const findBook = await Book.findByIdAndUpdate(
      req.params.id,
      {
        author,
        title,
        isbn,
        imageUrl,
      },
      { new: true }
    );
    res.status(200).json(findBook);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const findBook = await Book.findByIdAndDelete(req.params.id);
    res.status(200).json(findBook);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
