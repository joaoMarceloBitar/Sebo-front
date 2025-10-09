export type PropostaType = {
  id: number
  usuarioId: string       // id do usuário que fez a proposta
  anuncioId: number       // id do anúncio do livro
  descricao: string
  resposta: string | null
  createdAt: string       // ou Date se preferir manipular datas
  updatedAt: string | null
}