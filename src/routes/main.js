import { Router } from "express";
const routes = Router();

routes.get('/', (req, res)=>{
    res.send("hit hit");
})

routes.get('get', (req, res)=>{
    res.send("get get");
})

module.export = routes;