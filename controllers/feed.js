exports.getPosts = (req, res, next) =>{
    res.status(200).json({
        posts: [{title: 'First Post', content: 'This is first post'}]
    });
};

exports.createPost = (req, res, next) => {
    //Create in database
    const title = req.body.title;
    const content = req.body.content;
    console.log(req.body.title)
    res.status(201).json({
        message: 'Post created sucessfully!',
        post: {
            id: new Date().toISOString(), 
            title: title, 
            content: content
        }
    });
}