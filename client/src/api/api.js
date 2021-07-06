const axios = require(`axios`);


const TIMEOUT = 1000;
const URL = `https://marta-chat.herokuapp.com`;

class API {

  constructor(baseURL, timeout) {
    this._http = axios.create({
      baseURL,
      timeout
    });
  }

  async _load(url, options) {
    const response = await this._http.request({url, ...options});
    return response.data;
  }

  getMessages() {
    return this._load(`/messages`);
  }

  createMessage(data) {
    return this._load(`/message`, {
      method: `POST`,
      data
    });
  }
}

const defaultAPI = new API(URL, TIMEOUT);

const apiFactory = {
  API,
  getAPI: () => defaultAPI
};

export default apiFactory;