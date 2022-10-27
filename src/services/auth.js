import { api } from "./api"

export async function signInRequest(data) {
    api.post('/login', data)
    .then(response => response.json())
    .then((data) => {
        'yay'
    })
}

export async function recoverUserInformation() {
    const response = await api.get('/user/info')
    const data = await response.json()

    return data
}