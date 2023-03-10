const express = require("express");

const Router = express.Router();

const tanggalController = require("./tanggalController");
const middlewareAuth = require("../../middleware/auth");

// Router.get("/", tanggalController.getAllKaryawan);
Router.post("/:id", tanggalController.createAbsensi);
Router.get("/:id", tanggalController.getTanggalById);
Router.get("/", tanggalController.getTanggalByIdAndTgl);
Router.patch("/:id", tanggalController.updateAbsensiById);

module.exports = Router;
