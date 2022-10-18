import axios from "axios";
import { useSelector } from "react-redux";

const api_url = "http://localhost:8080/authorities";

class Authorities {
  getData = async (jwt) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${jwt}`);
    // myHeaders.append("accept", 'application/json');
    myHeaders.append("Access-Control-Allow-Origin", '*');
    myHeaders.append("Content-Type", 'application/json');

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    try {
      const response = await fetch(
        "http://localhost:8080/authorities",
        requestOptions
      );
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const result = await response.json();
      return result;
    } catch (err) {
      console.log(err);
    }

    // .then(response => {
    //   console.log(jwt);
    //   if (response.ok) {
    //     alert("Khong co quyen")
    //     return response.json();
    //   } else {
    //     throw Error(response.status);
    //   }
    // })
    // .then(result => {
    //   console.log(result);
    //   return result;
    // })
    // .catch(error => console.log('error', error));
    // return null;
  };
}

export default new Authorities();
