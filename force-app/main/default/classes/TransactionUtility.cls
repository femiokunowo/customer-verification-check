/*------------------------------------------------------------
Utility class to handle business logic for TTM                                                        

History                                                                                                                       
<Date>         <Author Name>           <Brief description of change>
15 Aug, 2019	Femi Okunowo		   Utility class created 		       

------------------------------------------------------------ */
public class TransactionUtility {

    	@AuraEnabled
        public static String getTargetUrl(string transactionId) {
        
        string endPointUrl;
        List<TTM_Transaction__c> trxn = [SELECT Target_URL__c FROM 
                                            TTM_Transaction__c WHERE Transaction_ID__c = : transactionId LIMIT 1];
        if(trxn.size() > 0)
        {
            // retrieve the targetUrl, concatenate with queryString paramater(s) where needed
    		endPointUrl = trxn[0].Target_URL__c;
            system.debug('Returned URL: ' + endPointUrl);
	            
        }
	      return endPointUrl;
    }
}