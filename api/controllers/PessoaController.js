//const database = require("../models")
//const Sequelize = require("sequelize")
const { PessoasServices } = require("../services")
const pessoasServices = new PessoasServices()

class PessoaController {
  static async pegaTodasAsPessoasAtivas(req, res) {
    try {
      const todasAsPessoasAtivas = await pessoasServices.pegaRegistrosAtivos()
      return res.status(200).json(todasAsPessoasAtivas)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaTodasAsPessoas(req, res) {
    try {
      const todasAsPessoas = await pessoasServices.pegaTodosOsRegistros()
      return res.status(200).json(todasAsPessoas)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaUmaPessoa(req, res) {
    // o que é preciso para pegar uma pessoa, vai pegar isso na requisição que é a url
    const { id } = req.params
    try {
      const umaPessoa = await pessoasServices.pegaUmRegistro({ id })
      return res.status(200).json(umaPessoa)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaPessoa(req, res) {
    const novaPessoa = req.body
    try {
      const novaPessoaCriada = await pessoasServices.criaRegistro(novaPessoa)
      return res.status(200).json(novaPessoaCriada)
    } catch (error) {
      //const { id } = req.params
      return res.status(500).json(error.message)
    }
  }

  // atualizar
  static async atualizaPessoa(req, res) {
    const novasInfos = req.body
    const { id } = req.params
    try {
      await pessoasServices.atualizaRegistro(novasInfos, Number(id))
      const pessoaAtualizada = await pessoasServices.pegaUmRegistro({ id })
      return res.status(200).json(pessoaAtualizada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  //deletar
  static async apagaPessoa(req, res) {
    const { id } = req.params
    try {
      await pessoasServices.apagaRegistro(Number(id))
      return res.status(200).json({ mensagem: `id ${id} deletado` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  //restaura
  static async restauraPessoa(req, res) {
    const { id } = req.params
    try {
      const registroRestaurado = await pessoasServices.restauraRegistro(
        Number(id)
      )
      return res.status(200).json(registroRestaurado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  ///
  static async pegaMatriculas(req, res) {
    const { estudanteId } = req.params
    try {
      const pessoa = await pessoasServices.pegaMatriculasPorEstudante({
        id: Number(estudanteId)
      })
      const matriculas = await pessoa.getAulasMatriculadas()
      return res.status(200).json(matriculas)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async cancelaPessoas(req, res) {
    const { estudanteId } = req.params
    try {
      await pessoasServices.cancelaPessoaEMatriculas(Number(estudanteId))
      return res.status(200).json({
        message: `matriculas ref. estudante ${estudanteId} canceladas`
      })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = PessoaController
