const mongoose = require("mongoose");
const { anime } = require("./models/anime")
const express = require("express");
const { mongoURI } = require('./config.json')

const app = express();
const port = 3000;
app.listen(port, () => console.log(`Server started on http://localhost:${port}/`));

mongoose.connect(mongoURI)
    .then(console.log("Connected to database!"))
    .catch(console.error());

app.get('/animes', async (req, res) => {
        const animes = await anime.find({});
        res.send(animes);
    }
)

app.get('/animes/:id', async(req,res) => {
    const animeToFind = await anime.findOne({ id: req.params.id });
    if(!animeToFind) return res.status(404).send({data: "No anime found"});
    res.send(animeToFind);
})



app.use("/", express.static('public'));

/*
async function createAnime() {
    let spy = await anime.create({
        id: 2,
        name: "Date a Live",
        image: "https://i.pinimg.com/564x/b7/ab/a8/b7aba84da97db994ba525f156fa8719e.jpg",
        characters: [
            {
                name: "Kurumi Tokisaki",
                image: "https://i.pinimg.com/564x/e8/ee/cc/e8eecc6d4b7ae9d42e8ef6cc0251230d.jpg",
                description: "smashable"
            },
            {
                name: "Tohka",
                image: "https://i.pinimg.com/564x/36/0f/51/360f51579a7e8cc872e9b340604da44d.jpg",
                description: "Smash"
            }
        ],
        rating: 9,
        description: "this is a good anime"
    });
    console.log(spy);
}
createAnime();
*/