import express from "express";
import {createServer} from "node:http";

import {Server} from "socket.io";
import {connectToSocket} from "./controllers/socketManager.js";
import mongoose from "mongoose";

import cors from "cors";
import { create } from "node:domain";

const app = express();
const server= createServer(app);
const io =connectToSocket(server);

app.set("port",(process.env.PORT || 8000));
app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb",extended:true}));


app.get("/",(req,res)=>{
    return res.json({"hello": "world"})
});

const start = async () =>{
    const connectionDb= await mongoose.connect("mongodb+srv://username:password@cluster0.yo8jy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log(`Mongo connected: ${connectionDb.connection.host}`);

    server.listen(app.get("port"), () =>{
        console.log("listening to port 8000");
    })
};

start();
