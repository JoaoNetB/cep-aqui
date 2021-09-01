

export const consultedAPI = async cep => {

   const response = await fetch(`https://cep.awesomeapi.com.br/json/${cep}`)

   return response.json()
}