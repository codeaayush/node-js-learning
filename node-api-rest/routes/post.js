/* const postController = require('../controllers/post')

class Routes {
  static getAllPosts(req, res) {
    postController.getAllPosts().then(data => {
      // write transformer 
      res.status(200).json(data)
    }).catch(err => {
      res.status(500).json({ 'success': false, 'message': 'internal server error occured...' })
    })
  }
  static getPostById(req, res) {
    postController.getPostById(req.params.id).then(data => {
      // write transformer 
      res.status(200).json(data)
    }).catch(err => {
      res.status(500).json({ 'success': false, 'message': 'internal server error occured...' })
    })
  }
  static createPosts(req, res) {
    console.log(req.body);
    postController.createPosts(req.body).then(data => {
      res.status(200).json({ 'success': true, 'message': 'created successfully' })
    }).catch(err => {
      res.status(500).json({ 'success': false, 'message': 'internal server error occured...' })
    })
  }
  static deletePostById(req, res) {
    postController.deletePost(req.params.id).then(data => {
      res.status(200).json({ 'success': true, 'message': 'deleted successfully' })
    }).catch(err => {
      res.status(500).json({ 'success': false, 'message': 'internal server error occured...' })
    })
  }
}


module.exports = Routes;
*/

const postController = require('../controllers/post')
const express = require('express');

const router = express.Router();


router.get('/:id', postController.getPostById );
router.get('/', postController.getAllPosts );



module.exports = router;