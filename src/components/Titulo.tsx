import { Link } from "react-router-dom"
import { useUsuarioStore } from "../context/UsuarioContext"
import { useNavigate } from "react-router-dom"
import { InputPesquisa } from "./InputPesquisa"
import type { SetStateAction } from "react"
import type { AnuncioType } from "../utils/AnuncioType"

export default function Titulo() {
    const { usuario, deslogaUsuario } = useUsuarioStore()
    const navigate = useNavigate()

    function usuarioSair() {
        if (confirm("Confirma saída do sistema?")) {
            deslogaUsuario()
            if (localStorage.getItem("clienteKey")) {
                localStorage.removeItem("clienteKey")
            }
            navigate("/login")
        }
    }

    return (
        <><nav className="border-green-800 bg-green-800 dark:bg-green-700 dark:border-green-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <div className="bg-white rounded-full p-2 shadow-md">
                            <img src="./livroLogo.webp" className="h-12" alt="Logo sebo" />
                        </div>
                        <span className="self-center text-2xl font-bold whitespace-nowrap text-white dark:text-white">Sebo dos guris</span>
                    </Link>
                </div>
                <div className="flex-1 mx-4">
                    {/* Botão roxo */}
                    <InputPesquisa setAnuncios={function (value: SetStateAction<AnuncioType[]>): void {
                        throw new Error("Function not implemented.")
                    } } />
                </div>
                <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                    <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                        <li>
                            {/* procura cliente ID pra ver se tem algum logado  */}
                            {usuario.id ?
                                <>
                                    <span className="text-black">
                                        {usuario.nome}
                                    </span>&nbsp;&nbsp;
                                    <Link to="/minhasPropostas" className="text-white font-bold bg-gray-600 hover:bg-gray-700 focus:ring-2 focus:outline-none focus:ring-gray-400 rounded-lg text-sm w-full sm:w-auto px-3 py-2 text-center dark:bg-gray-500 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                        Minhas Propostas
                                    </Link>&nbsp;&nbsp;
                                    <span className="cursor-pointer font-bold text-gray-600"
                                        onClick={usuarioSair}>
                                        Sair
                                    </span>
                                </>
                                :
                                <Link to="/login" className="block py-2 px-3 md:p-0 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                    Login
                                </Link>}
                        </li>
                    </ul>
                </div>
            </div>
        </nav><nav className="bg-gray-100 dark:bg-gray-700">
            <div className="flex justify-between items-center mx-auto max-w-screen-xl p-4 border-b border-gray-200 dark:border-gray-600">
                <h2 className="mb-1 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Filtro por gênero</h2>
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Terror</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline">Aventura</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline">literatura</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline">Ficção</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline">Suspense</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline">Religião</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline">Auto Ajuda</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline">Quadrinhos</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline">Mangá</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </nav></>
    )
}