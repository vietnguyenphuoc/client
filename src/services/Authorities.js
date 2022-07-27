import axios from "axios";

const api_url = "http://localhost:8080/rest/authorities" 

class Authorities{
  getData() {
    return axios.get(api_url);
  }
}

export default new Authorities();
