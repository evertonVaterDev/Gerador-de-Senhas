let charset =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%";

function generatePassword(req, res) {
  const { qtd } = req.query;

  let pass = "";
  for (let i = 0; i < Number(qtd); i++) {
    n = charset.length;
    pass += charset.charAt(Math.floor(Math.random() * n));
  }

  return res
    .status(200)
    .json({ mensagem: `A sua senha foi gerada com sucesso: ${pass}` });
}

module.exports = { generatePassword };
