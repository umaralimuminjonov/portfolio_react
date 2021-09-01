const Work = require("../models/workModel");

const workCtrl = {
  getWorks: async (req, res) => {
    try {
      const works = await Work.find({});

      res.json({ works });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  createWork: async (req, res) => {
    try {
      const { title, description, image, category } = req.body;
      if (!image) return res.status(400).json({ msg: "No image upload" });

      const newWork = new Work({
        title,
        description,
        image,
        category,
      });
      await newWork.save();

      res.status(201).json({ msg: "Work created" });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  updateWork: async (req, res) => {
    try {
      const work = await Work.findByIdAndUpdate(req.params.id, req.body);
      if (!work) return res.status(400).json({ msg: "Work not exist" });

      res.json({ msg: "Work updated" });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  deleteWork: async (req, res) => {
    try {
      const work = await Work.findByIdAndDelete(req.params.id);
      if (!work) return res.status(400).json({ msg: "Work not exist" });

      res.json({ msg: "Work deleted" });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = workCtrl;
