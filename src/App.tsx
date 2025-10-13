import { CardLivro } from "./components/CardLivro";
import type { AnuncioType } from "./utils/AnuncioType";
import { useEffect, useState } from "react";
import { useUsuarioStore } from "./context/UsuarioContext"

const apiUrl = import.meta.env.VITE_API_URL

export default function App() {
  const [ anuncios, setAnuncios] = useState<AnuncioType[]>([])
  const { logaUsuario } = useUsuarioStore()  

  useEffect(() => {
    async function buscaDados() {
      const response = await fetch(`${apiUrl}/anuncios/destaques`)
      const dados = await response.json()
      console.log(dados)
      setAnuncios(dados)
    }
    buscaDados()

    async function buscaCliente(id: string) {
      const response = await fetch(`${apiUrl}/usuarios/${id}`)
      const dados = await response.json()
      logaUsuario(dados)
    }
    if (localStorage.getItem("usuarioKey")) {
      const idUsuario = localStorage.getItem("usuarioKey")
      buscaCliente(idUsuario as string)
    }    
  }, [])

  const listaAnuncios = anuncios.map( anuncio => (
    <CardLivro data={ anuncio } key={anuncio.id} />
  ))

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <h1 className="mb-4 mt-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-brown-700">
          Livros em Destaque <span className="underline underline-offset-3 decoration-8 decoration-orange-400 dark:decoration-orange-600"></span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {listaAnuncios}
        </div>
        <h1 className="mb-4 mt-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-brown-700">
          Livros em Promoção <span className="underline underline-offset-3 decoration-8 decoration-orange-400 dark:decoration-orange-600"></span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        </div>
      </div>
    </>
  );
}
