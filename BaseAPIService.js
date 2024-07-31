class BaseApiService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }


  async _get(endPoints) {
    try {
      let cacheResponseData = CacheServiceInstance.getCache(this.baseUrl + endPoints);
      if (cacheResponseData == null) {
        const response = await fetch(this.baseUrl + endPoints);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message);
        }

        const responseData = await response.json();
        CacheServiceInstance.setCache(this.baseUrl + endPoints, responseData);
        return responseData;
      } else {
        return cacheResponseData;
      }
    } catch (error) {
      throw error;
    }
  }
}
