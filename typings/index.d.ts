import DeclarationsN = require('./declarations');
/**
  * 
  * 
  * 
  * REST REQUEST INTERFACE
  * 
  * 
  * 
  */
interface RestRequest {
  send(params: DeclarationsN.requestParams): Promise<DeclarationsN.requestReturnParams>;
}
export = RestRequest;
