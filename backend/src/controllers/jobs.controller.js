const express = require('express');

const Jobs = require('../models/job.model')

const router = express.Router();

router.get('/', async (req, res) => {
    try {

        let title = req.query.title || "";
        let location = req.query.location || "";

        if (title != "" && location != "") {
            const jobs = await Jobs.find({ title: title, location: location }).lean().exec();
            return res.status(200).json({ jobs });
        }
        else if (title != "") {
            const jobs = await Jobs.find({ title: title }).lean().exec();
            return res.status(200).json({ jobs });
        }
        else if (location != "") {
            const jobs = await Jobs.find({ location: location }).lean().exec();
            return res.status(200).json({ jobs });
        }

        const jobs = await Jobs.find().lean().exec();
        return res.status(200).json({ jobs });

    }
    catch (err) {
        return res.status(400).json({ status: "failed", message: err.message });
    }
})

router.get('/:id', async (req, res) => {
    try {
        const job = await Jobs.findById(req.params.id);
        return res.status(200).jons({ job });
    }
    catch (err) {
        return res.status(400).json({ status: "failed", message: err })
    }

})

module.exports = router;