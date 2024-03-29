/**
 * 
 * 
 * 
 * request params
 * 
 * 
 * 
 */
export type requestParams = {
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
export type requestResponse = {
  data: any;
  status: number;
  headers: any;
}
