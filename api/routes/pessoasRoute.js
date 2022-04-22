const { Router } = require("express")
const PessoaController = require("../controllers/PessoaController")

const router = Router()

// rota/endpoint para pegar todas a pessoas
router.get("/pessoas/all", PessoaController.pegaTodasAsPessoas)
// rota/endpoint para pegar todas a pessoas ativas
router.get("/pessoas", PessoaController.pegaTodasAsPessoasAtivas)
// endpoint para pegar uma pessoa /pessoas/:id é o parametro passado
router.get("/pessoas/:id", PessoaController.pegaUmaPessoa)
// endpoint para criar
router.post("/pessoas", PessoaController.criaPessoa)
// endpoint para editar registros
router.put("/pessoas/:id", PessoaController.atualizaPessoa)
// endpoint para deletar registros
router.delete("/pessoas/:id", PessoaController.apagaPessoa)
router.post("/pessoas/:id/restaura", PessoaController.restauraPessoa)

router.get(
  "/pessoas/:estudanteId/matricula/:matriculaId",
  PessoaController.pegaUmaMatricula
)
router.post("/pessoas/:estudanteId/matricula", PessoaController.criaMatricula)
router.put(
  "/pessoas/:estudanteId/matricula/:matriculaId",
  PessoaController.atualizaMatricula
)
router.delete(
  "/pessoas/:estudanteId/matricula/:matriculaId",
  PessoaController.apagaMatricula
)
router.post("/pessoas/:id/restaura", PessoaController.restauraPessoa)

router.post(
  "/pessoas/:estudanteId/matricula/:matriculaId/restaura",
  PessoaController.restauraMatricula
)

module.exports = router
