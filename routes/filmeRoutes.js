import express from "express";
import filmeController from "../controllers/filmecontroller.js";

const router = express.Router();
const filme = new filmeController();


router.get('/', (req, res) => {
    try {
        filme.BuscarTodosOsFilmes(req, res);
    } catch(err){
        res.status(500).json({erro: err.message});

    }
});

export default router;