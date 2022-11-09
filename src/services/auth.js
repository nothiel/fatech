import toast from "react-hot-toast"
import { api } from "./api"

export async function signInRequest({email, password}) {
    let formData = new FormData()
    formData.append('username', email)
    formData.append('password', password)
    const response = await api.post('/auth/login', formData)
    .catch(err => {
        return err.response.data?.detail
    })
    
    const token = response?.data?.access_token

    if (!token) {
        toast.error(response)
    }
    
    return {token, user: await recoverUserInformation(token)}
}

export async function recoverUserInformation(token) {
    const response = await api.get('/user/me', {headers: {Authorization: `Bearer ${token}`}})
    
    return response
}