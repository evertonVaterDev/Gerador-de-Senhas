const express = require("express");
const rotas = express();

const { generatePassword } = require("./controladores/controlador.js");
const { validarSenha } = require("./intermediarios/intermediario.js");

rotas.get("/", validarSenha, generatePassword);

module.exports = rotas;
