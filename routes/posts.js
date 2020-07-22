const router = require('express').Router();
const verify = require('../utils/verifyToken');
const Post = require('../models/post');

router.get('/', verify, async (req,res)=>{
    try {
        const posts = await Post.find();
        return res.send(posts);
    } catch ( err ) {
        return res.status(400).send({message: err.message});
    }
})

router.post('/', verify, async (req,res)=>{
    const post = new Post({
        subject: req.body.subject,
        article: req.body.article,
        tags: req.body.tags
    });

    try {
        const savedPost = await post.save();
        return res.send(savedPost);
    } catch ( err ) {
        return res.status(400).send({message: err.message});
    }
});

router.get('/:postId', verify, async (req,res) => {
    try {
        const post = await Post.findById(req.params.postId)
        return res.send(post);
    } catch(err){
        return res.send({message: err.message});
    }
});

router.delete('/:postId', verify,  async (req,res) => {
    try{
        const post = await Post.deleteOne({_id: req.params.postId});
        return res.send(post);
    } catch (err) {
        return res.send({message: err.message});
    }
});

router.put('/:postId', verify, async (req,res) => {
    try{
        const post = await Post.updateOne(
            { _id: req.params.postId},
            { $set: 
                 { subject: req.body.subject,
                   article: req.body.article,
                   tags: req.body.tags }
            });
        return res.send(post);
    } catch(err){
        return res.send({message: err.message});
    }
});

module.exports = router;