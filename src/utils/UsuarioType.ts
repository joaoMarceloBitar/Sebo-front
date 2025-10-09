export type UsuarioType = {
  id: string  
  nome: string
  email: string
  endereco?: string | null
  tipo_usuario: "CLIENTE" | "ADMIN" 
}