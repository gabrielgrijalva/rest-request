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
export = {
  send(params: DeclarationsN.requestParams): Promise<DeclarationsN.requestReturnParams>;
};
