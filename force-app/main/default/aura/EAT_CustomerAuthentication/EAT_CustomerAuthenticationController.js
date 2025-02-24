({
    doInit : function(component, event, helper) {
        console.log("In EAT_CustomerAuthenticationController.doInit");
    },
    /*	Calls EAT/OMNI to check if the Customer is sufficiently authenticated to proceed with the workflow
        Passes a response object with state/message attributes into the callback function provided
    */
    doAuthentication : function(component, event, helper) {
        var callerComponent = event.getParam('arguments').callerComponent;
        var workflowId = event.getParam('arguments').workflowId;
        var customerId = event.getParam('arguments').customerId;
        var callback = event.getParam('arguments').callback;

        //TODO: Replace with Apex Controller call to EAT/OMNI
        var response = {
            "state" : "SUCCESS",
            "message" : "All went well"
        };
        
        // TODO: Remove. Simulating CheckAuth call time delay 
        setTimeout(function() {
            var spinner = component.find('animation');
            $A.util.toggleClass(spinner, 'slds-hide');
            
            callback(callerComponent, response);
        }, 1000);
        
       
    }
})
