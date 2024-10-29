const express = require("express");

const router = express.Router();
const Book = require("../models/bookModel.js");


// routes
router.post("/books", async(req, res) => {
    try{
        if(!req.body.title || req.body.title.length < 3 || !req.body.author || req.body.author.length < 3 || !req.body.description || req.body.description.length < 3 || !req.body.publishedDate || !req.body.pageCount || !req.body.category){
            throw new Error("Invalid data, Please provide required data title, author, description, publishedDate, pageCount, category")

        }

        const book = new Book(req.body);
        await book.save();
        res.send("Book Added Successfully");
    }
    catch(err){
        console.log(err.message);
        res.status(500).json({error:err.message})
    } 
});

router.get("/books", async(req, res) => {
    try{
        const books = await Book.find();
        res.send(books);
    }
    catch(err){
        console.log(err.message);
        res.status(500).json({error:err.message})
    } 
});

router.get("/book/:id", async(req, res) => {
    try{
        const book = await Book.findById(req.params.id);
        res.send(book);
    }
    catch(err){
        console.log(err.message);
        res.status(500).json({error:err.message})
    }
})

router.patch("/book/:id", async (req, res) => {
    console.log("Request to update book with ID:", req.params.id);
    console.log("Request body:", req.body);
    
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        
        if (!book) {
            return res.status(404).json({ error: "Book not found" });
        }

        res.send(book);
    } catch (err) {
        console.log("Error occurred:", err.message);
        res.status(500).json({ error: err.message });
    }
});
 

router.delete("/book/:id", async(req, res) => {
    try{
        const book = await Book.findByIdAndDelete(req.params.id);
        res.send(book);
    }
    catch(err){
        console.log(err.message);
        res.status(500).json({error:err.message})
    }
})

module.exports = router