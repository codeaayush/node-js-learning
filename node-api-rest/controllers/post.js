
const Posts = require('../models/post');
class Controller {
    static getAllPosts(req, res) {
         Posts.find({})
            .then(function (data) {
               res.status(200).json({'message' : 'success', data : data})
            }).catch(function (err) {
                res.status(500).json({'message' : 'failed'})
            })
    }
    static getPostById(req, res) {
        const id = req.params.id;
       //  Posts.findByIdAndDelete(id).then(function(data){})
       //  Posts.findById
        Posts.findById(id)
        .then(function (data) {
            res.status(200).json({'message' : 'success', data : data})
        }).catch(function (err) {
            res.status(500).json({'message' : 'failed'})
        })
    }
   /* static deletePost(id){
        return Posts.findByIdAndDelete(id)
        .then(function (data) {
            return Promise.resolve(data)
        }).catch(function (err) {
            return Promise.reject(err)
        })
    }
    static createPosts(data) {
        let post = new Posts({
            'title': data.title,
            'body': data.body
        }); // this is modal object.
        return post.save()
            .then((data) => {
                return Promise.resolve(data)
            })
            .catch((err) => {
                return Promise.reject(err)
            })
    } */
}


module.exports = Controller;

