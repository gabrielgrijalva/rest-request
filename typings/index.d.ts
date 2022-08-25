/**
  * 
  * 
  * 
  * rest request namespace
  * 
  * 
  * 
  */
export declare namespace RestRequest {
  /**
   * 
   * 
   * 
   * request params
   * 
   * 
   * 
   */
  type requestParams = {
    url: string;
    data?: string;
    method: string,
    headers?: any;
  }
  /**
   * 
   * 
   * 
   * request response
   * 
   * 
   * 
   */
  type requestResponse = {
    data: string;
    status: number;
    headers: any;
  }
  /**
   * 
   * 
   * 
   * rest request interface
   * 
   * 
   * 
   */
  interface restRequest {
    send(params: requestParams): Promise<requestResponse>;
  }
}
