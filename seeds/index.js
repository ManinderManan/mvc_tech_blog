const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const users = [
   {
      username: "John",
      password: "JohnPassword"
   },
   {
      username: "Jane",
      password: "JanePassword"
   },
   {
      username: "Jim",
      password: "JimPassword"
   }
]

const blogs = [
   {
      title: "Blog Post 1",
      content: "This is the content for blog post 1",
      user_id: 1
   },
   {
      title: "Blog Post 2",
      content: "Hi, I'm John and this is the content for blog post 2",
      user_id: 1
   },
   {
      title: "Blog Post 3",
      content: "Hi, I'm Jane and this is the content for blog post 3",
      user_id: 2  
   },
   {
      title: "Blog Post 4",
      content: "Hi, I'm Jim and this is the content for blog post 4",
      user_id: 3
   }
]

const comments = [
   {
      comment_text: "This is the comment text for comment 1",
      post_id: 1,
      user_id: 1
   },
   {
      comment_text: "This is the comment text for comment 2",
      post_id: 1,
      user_id: 2
   },
   {
      comment_text: "This is the comment text for comment 3",
      post_id: 2,
      user_id: 3
   },
   {
      comment_text: "This is the comment text for comment 4",
      post_id: 3,
      user_id: 1
   },
   ]

   const plantSeeds = async () => {
      try{
         await sequelize.sync({ force: true });
         await User.bulkCreate(users, {
            individualHooks: true,
            returning: true,
         });
         await Post.bulkCreate(blogs);
         await Comment.bulkCreate(comments);
         process.exit(0);
      }catch(err){
         console.log(err);
      }
}

plantSeeds();