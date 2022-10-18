import axios from "axios";

const api_url = "http://localhost:8080/login" 

class LoginService{
  async loginUser(user) {
    return await axios.post(api_url, user);
  }
}

export default new LoginService();
