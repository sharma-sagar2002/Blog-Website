class BaseApiService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }


  async _get(endPoints) {
    try {
      let cachResponseData = CacheServiceInstance.getCache(
        this.baseUrl + endPoints
      );
      if (cachResponseData == null) {
        const response = await fetch(this.baseUrl + endPoints);
        console.log(response);
        if (!response.ok) {
          const errorData = await response.json();
          this.showMessage(errorData.message, "error");
          return;
        }

        const responseData = await response.json();
        CacheServiceInstance.setCache(this.baseUrl + endPoints, responseData);
        return responseData;
      } else {
        return cachResponseData;
      }
    } catch (error) {
      this.showMessage("Internal Server error", "error");
    }
  }

}
