import express from "express";
import { signup } from "../Controllers/Signup.js";
import { login } from "../Controllers/Login.js";
import { uploadData } from "../Controllers/Upload.js";
import { home } from "../Controllers/Home.js";
import { searchData } from "../Controllers/Search.js";

const Route = express.Router();

Route.post("/signup", signup);
Route.get("/login", login);
Route.post("/upload", uploadData);
Route.get("/search", searchData);
Route.get("/home", home);


export default Route;
