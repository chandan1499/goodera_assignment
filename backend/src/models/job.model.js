const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    description: { type: String, require: true },
    title: { type: String, require: true },
    image: { type: String, require: true },
    type: { type: String, require: true },
    pulication_date: { type: String, require: true },
    id: { type: String, require: true },
    location: { type: String, require: true },
    level: { type: String, require: true },
    tags: [{ type: String, require: true }],
    company: {
        id: { type: String, require: true },
        short_name: { type: String, require: true },
        name: { type: String, require: true }
    }
})

const Jobs = mongoose.model("jobs", jobSchema);

module.exports = Jobs;