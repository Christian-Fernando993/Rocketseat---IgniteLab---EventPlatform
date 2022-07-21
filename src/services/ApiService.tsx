import axios from "axios";


export const linkApi="http://app-marcel-nascimento-api.azurewebsites.net/";

export const axiosCon = axios.create({
    baseURL: linkApi,
       
  });

//teste https://localhost:44303/
//prod  https://app-marcel-nascimento-api.azurewebsites.net



export default axiosCon;