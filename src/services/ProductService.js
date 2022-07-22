import axios from "axios";

const api_url = "http://localhost:8080/products" 

class ProductService{
  getProducts() {
    return axios.get(api_url);
  }

  getPages(name,page,size) {
    return axios.get(api_url+'/views?name='+name+'&page='+page+'&size='+size);
  }

  getOneProduct(id) {
    return axios.get(api_url + '/'+id);
  }
}

export default new ProductService();
