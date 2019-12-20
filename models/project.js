const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    deadline: {
        type: Date
    },
    description: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {timestamp: true});
    
const Project = mongoose.model('Project', ProjectSchema);

module.exports = { Project };