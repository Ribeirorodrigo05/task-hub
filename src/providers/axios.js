import axios from 'axios';

export class AxiosProvider {
  async get(parameters = undefined) {
    const url = import.meta.env.VITE_base_url + parameters + import.meta.env.VITE_api_key;
    const data = await axios.get(url);
    return data;
  }
}
