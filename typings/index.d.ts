import { requestParams, requestResponse } from './params';
/**
 * 
 * 
 * 
 * rest request interface
 * 
 * 
 * 
 */

interface RestRequest {
  send(params: requestParams): Promise<requestResponse>;
}
export = RestRequest;
