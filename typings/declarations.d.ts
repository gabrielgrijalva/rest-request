/**
 * 
 * 
 * 
 * DECLARATIONS
 * 
 * 
 * 
 */
declare namespace DeclarationsN {
  /**
   * 
   * 
   * 
   * SEND REQUEST PARAMS
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
  type requestReturnParams = {
    data: any;
    status: number;
    headers: any;
  }
}
export = DeclarationsN;
