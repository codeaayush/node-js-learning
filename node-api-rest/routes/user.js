const postController = require('../controllers/post')
const express = require('express');

const router = express.Router();
router.get('/', function(req,res){
     res.json({'message' : "hey man"});
});


module.exports = router;

