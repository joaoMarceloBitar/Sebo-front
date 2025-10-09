import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { AnuncioType } from "../utils/AnuncioType";


const apiUrl = import.meta.env.VITE_API_URL

type Inputs = {
    termo: string
}

type InputPesquisaProps = {
    setAnuncios: React.Dispatch<React.SetStateAction<AnuncioType[]>>
}

export function InputPesquisa({ setAnuncios }: InputPesquisaProps) {
    const { register, handleSubmit, reset } = useForm<Inputs>()

    async function enviaPesquisa(data: Inputs) {
            alert(data.termo)
        if (data.termo.length < 2) {
            toast.error("Informe, no mínimo, 2 caracteres")
            return
        }

        const response = await fetch(`${apiUrl}/Anuncio/livro/titulo/${data.termo}`)
        const dados = await response.json()
        console.log(dados)
        setAnuncios(dados)
    }

    async function mostraDestaques() {
        const response = await fetch(`${apiUrl}/carros`)
        const dados = await response.json()
        reset({ termo: "" })
        setAnuncios(dados)
    }

    return (
        <div className="flex mx-auto max-w-3xl mt-3">
            <form className="flex-1" onSubmit={handleSubmit(enviaPesquisa)}>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">   
                    <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="busca por nome do livro" required 
                        {...register('termo')} />
                    <button type="submit" className="absolute end-2.5 bottom-2.5">
                        <img
                            src="/Search.svg"
                            alt=""
                            className="w-8 h-8 cursor-pointer hover:opacity-50 duration-300"
                        />
                    </button>
                </div>
            </form>
            <button type="button" className="ms-3 mt-2 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                    onClick={mostraDestaques}>
                Exibir Livros
            </button>
        </div>
    )
}