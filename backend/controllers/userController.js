import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import User from "../models/userModel.js";
import Post from "../models/postList.js";




// @description  Register user
// route  POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;
  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error("User already exist");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  console.log(name, email, password); 

  // if user was created successfully
  if (user) {
    const token = await generateToken(res, user._id);
    console.log('token inside register: ', token);
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite : 'strict',
      maxAge : 30 * 24 * 60 * 60 * 1000,
    }).status(200).json({ message: "Registered successfully" });
  } else { 
    res.status(400);
    throw new Error("Invalid user data");
  }
});


//@description  PostList
// route GET /api/users/postList
// @ access Private - means user must have a valid jwt token 
const posts = asyncHandler (async (req, res, next) => {

 console.log("postlist hitted"); 

  // try {
  //   const res = await axios.get(
  //     `https://jsonplaceholder.typicode.com/posts?_limit=9&_page= ${page}`
  //   );
  //   const data = res.data;
  //   res.json({data});
  // } catch (error) {
  //   res.json({message : 'Internal server error'});
  // }

  res.status(200).json({message: "Hitted postroute"});
  throw new Error("Invalid user data");
});


export {
  registerUser,
  posts
}


