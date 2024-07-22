import { reload } from "./lib/utills.js";
import { Post } from "./components/post.js";
import { User } from "./components/user.js";

const place = document.querySelector('.post_container')
const usersPlace = document.querySelector('.suggestions')


fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=2')
    .then(res => res.json())
    .then(arr => reload(arr, Post, place))

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(arr => reload(arr, User, usersPlace))



