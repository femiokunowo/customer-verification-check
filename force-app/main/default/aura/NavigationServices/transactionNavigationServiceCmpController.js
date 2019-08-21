({
    getWorkflowUrl : function(component, event, helper) {
        
        var exeAction = component.get("c.getUrl");
        exeAction.setParams( {"transactionId": component.get("v.transactionId")});      
        helper.serverSideCall(component,exeAction).then(
            function(response) {
                
                /*TODO: Returned target URL is baseline. Workflow specific query string can 
                 * be passed here and concatenated to the baseline URL
                 */ 
                console.log('response: '+JSON.stringify(response));
                component.set("v.navigationUrl", response ); 
                var pageReference = {
                    type: 'standard__webPage',
                    attributes: {
                        url: response
                    }
                };
             
                component.set("v.pageReference", pageReference);  
                
                
            }
        ).catch(
            function(error) {               
                console.log(error);
            }
        );
        
    },
    
    navigationHandler: function(component, event, helper) {
        
        var navService  = component.find("navigationService");
        var theurl = component.get("v.navigationUrl");
        console.log('theurl: '+theurl);
        
        var pageReference = { 
            type: 'standard__webPage',
            attributes: {
                url: theurl
            }
        };
        
        navService.navigate(pageReference);
     
        
        
    }
    
    
})