const mongoose = require("mongoose");
const { Schema } = require("mongoose");

var animeSchema = new Schema({
    id: { type: Number },
    name: { type: String, default: 'your mom' },
    characters: {
        type: [{
            name: { type: String, default: 'your mom' },
            image: { type: String, default: "your mom" },
            description: { type: String, default: 'your mom' }
        }],
        default: []
    },
    rating: { type: Number, min: 0, max: 10, default: 0 },
    image: { type: String, default: "your mom" },
    description: { type: String, default: 'your mom' }
});

const anime = mongoose.model('Anime', animeSchema);

module.exports = { animeSchema: animeSchema, anime: anime };