/*------------------------------------------------------------
Cotntroller class for the TransactionNavigationService component                                                        

History                                                                                                                       
<Date>         <Author Name>           <Brief description of change>
15 Aug, 2019	Femi Okunowo		   added aura-enabled method to get target URL  

------------------------------------------------------------ */

public class TransactionNavigationServiceCC {

    // get the target URL of the servicing workflow
    @AuraEnabled
    public static String getUrl(string transactionId) {
       system.debug('### transactionId'+transactionId);
        system.debug('### return: '+TransactionUtility.getTargetUrl(transactionId));
       return TransactionUtility.getTargetUrl(transactionId);
    }
}