
/*
exports.getData = function(req,res) {
    res.send('hello i am in a express');
}
exports.putData= function(req,res) {
    res.send('hello i am in a express');
}

*/

const  getData = function(req,res) {
    res.send('hello i am in a express');
}
const  putData= function(req,res) {
    res.send('hello i am in a express');
}
const postData = function(req,res) {
    res.json(req.body);
}

module.exports = {
    getData : getData,
    putData : putData,
    postData : postData

}

