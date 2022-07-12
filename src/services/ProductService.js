import axios from "axios";

const api_url = "http://localhost:8080/products" 

class ProductService{
  getProducts() {
    return axios.get(api_url);
  }

  getOneProduct(id) {
    return axios.get(api_url + '/'+id);
  }
}

export default new ProductService();
