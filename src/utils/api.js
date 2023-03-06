import axios from "axios";

const BASE_URL = 'https://youtube138.p.rapidapi.com';

const options = {
    params: {q: 'desp', hl: 'en', gl: 'US'},
    headers: {
      'X-RapidAPI-Key': 'd6966d063amsh6e76a2f7e3a62cbp1ea083jsn8d6c05715e6b',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

export const FetchDataFromApi = async (url)=>{
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    return data
}