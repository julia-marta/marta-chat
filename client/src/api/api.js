const axios = require(`axios`);

const TIMEOUT = 1000;
const DEFAULT_PORT = 5000;
const DEFAULT_HOST = `http://localhost`;

const port = process.env.API_PORT || DEFAULT_PORT;
const host = process.env.HOST || DEFAULT_HOST;
const defaultURL = `${host}:${port}/`;

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

const defaultAPI = new API(defaultURL, TIMEOUT);

const apiFactory = {
  API,
  getAPI: () => defaultAPI
};

export default apiFactory;