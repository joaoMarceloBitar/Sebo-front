import type { LivroType } from "./LivroType"

export type AnuncioType = {
    id: number
    preco: number
    condicao_detalhada: string |null
    disponivel: boolean
    data_criacao: Date
    id_livro: number
    livro: LivroType
}