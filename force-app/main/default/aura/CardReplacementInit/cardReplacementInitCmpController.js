({
	
    doInit : function(component, event, helper) {
        
        //TODO: check that authentication is successful before calling transaction navigation service below
        
        var transNavService = component.find("transNavigationServiceCmp");
        transNavService.getServicingWorkflowUrl(component.get("v.transactionId"), 
                                                component.get("v.ECN"));  
                                                
        //TODO: Other Servicing Workflow specific business logic can be added here before calling the doNavigate() method
         
        // call doNavigate
        var dismissActionPanel = $A.get("e.force:closeQuickAction");
        dismissActionPanel.fire();
        
        transNavService.doNavigate();

	}   
})