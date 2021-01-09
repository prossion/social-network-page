import * as axios from "axios"

const instance = axios.create ({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "ba851a5f-2969-4d25-a86d-7f621ef6e2fa"
    }
})

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
        }
}

export const followAPI = {
    getUnFollow (userId) {
       return instance.delete(`follow/${userId}`)
           .then(response => {
               return response.data
           })
    },
    getFollow (userId) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    }
}

export const profileAPI = {
    getProfile (userId) {
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data
            })
    },
    getStatus (userId) {
        return instance.get(`profile/status/` + userId)
            .then(response => {
                return response.data
            })
    },
    updateStatus (status) {
        return instance.put(`profile/status`, {status: status})
            .then(response => {
                return response.data
            })
    },
    savePhoto (filePhoto) {
        const formData = new FormData()
        formData.append("image", filePhoto)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                return response.data
            })
    },
   saveProfile (profile) {
        return instance.put(`profile`, profile)
            .then(response => {
                return response.data
            })
    },
}

export const authAPI = {
    getAuth () {
       return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    getLogin (email, password, rememberMe = false, captcha = null) {
        return instance.post('auth/login', {email, password, rememberMe, captcha})
            .then(response => {
                return response.data
            })
    },
    getUnLogin () {
        return instance.delete('auth/login')
            .then(response => {
                return response.data
            })
    }
}
export const captchaAPI = {
    getCaptcha () {
        return instance.get(`security/get-captcha-url`)
            .then(response => {
                return response.data
            })
    }
}