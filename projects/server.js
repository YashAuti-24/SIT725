var express = require("express")
var app = express()
var port = process.env.port || 3004
const mongoose = require('mongoose');

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
mongoose.connect('mongodb://localhost:27017/myprojectDB', {
useNewUrlParser: true,
useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
console.log('Connected to MongoDB');
});

const ProjectSchema = new mongoose.Schema({
title: String,
image: String,
link: String,
});
const Project = mongoose.model('Project', ProjectSchema);

const sampleProject = new Project({
    title: "Burwood campus",
    image: "deakin1.png",
    link: "About this campus",
  });
const sampleProject = new Project({
    title: "Geelong campus",
    image: "deakin2.png",
    link: "About this campus",
  });

app.get('/projects', async (req, res) => {
const projects = await Project.find({});
res.json({ statusCode: 200, data: projects, message: 'Success' });
});

app.listen(port, () => {
console.log(`App listening on port ${port}`);
});