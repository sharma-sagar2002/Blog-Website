class ApiService extends BaseApiService {
  constructor(baseURL) {
    super(baseURL);
  }



  async getPosts(page, limit, prev = false,previousPage=null) {
    
      let endpoint = `posts?limit=${limit}&skip=${(page - 1) * limit}`;
      if (prev) {
        endpoint = `posts?limit=${limit * (page-previousPage)}&skip=${previousPage * limit}`;
      }
      return await this._get(endpoint);
    
  }
}

const apiServiceInstance = new ApiService(`https://dummyjson.com/`);
