exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [{ title: "My Post", content: "This is the content of my post." }],
  });
};

exports.postPosts = (req, res, next) => {
  const { title, content } = req.body;
  res.status(201).json({
    post: { title, content },
    message: "Post created successfully.",
  });
};
