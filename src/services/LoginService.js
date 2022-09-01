import axios from "axios";

const api_url = "http://localhost:8080/login" 

class LoginService{

  getOneProduct(loginForm) {
    return axios.post(api_url, loginForm);
  }

}

export default new LoginService();
