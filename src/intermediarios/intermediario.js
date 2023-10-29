const validarSenha = (req, res, next) => {
  let { qtd } = req.query;

  qtd = Number(qtd);

  if (!qtd) {
    return res.status(400).json({
      mensagem:
        "Preencha a quantidade de caracteres com ?qtd= usando 'http://localhost:3000/?qtd=6' por exemplo.",
    });
  }
  next();
};

module.exports = { validarSenha };
