({
    doInit : function(component, event, helper) {
        console.log("Initialize Transaction Navigation Service");
    },
    
    getServicingWorkflowUrl : function(component, event, helper) {
        
        var transId = event.getParam('arguments').transactionId;

        var exeAction = component.get("c.getUrl");
        exeAction.setParams( {"transactionId": transId});      
        helper.serverSideCall(component,exeAction).then(
            function(response) {                
                            
                component.set("v.navigationUrl", response );              
                
            }
        ).catch(
            function(error) {               
                console.log(error);
            }
        );
        
    },
    
    doNavigate: function(component) {
       
        var theUrl = component.get("v.navigationUrl");                
        window.open(theUrl);
     
        
        
    }
    
    
})