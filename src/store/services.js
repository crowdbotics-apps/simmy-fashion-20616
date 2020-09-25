import axios from "axios"
const signup = axios.create({
  baseURL: "https://tstcr2020092101-20512.botics.co/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function signup_post_api_v1_signup_read(requestBody) {
  return signup.post(`/api/v1/signup`, requestBody)
}
export const apiService = { signup_post_api_v1_signup_read }
