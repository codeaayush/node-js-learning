
const mongoose=require('mongoose');
 
const postSchema=new mongoose.Schema({
    title: {
            type: String
    },
    body: {
        type:String
    }
});
const Posts = mongoose.model('Post', postSchema);

module.exports = Posts;
