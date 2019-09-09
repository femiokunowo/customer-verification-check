({
    authenticationResult : function(component, response) {
        var workspaceAPI = component.find("workspace");
        
        var WireMoneyFlowPageRef = {    
            "type": "standard__navItemPage",
            "attributes": {
                "apiName": "Wire_Money_Example"    
            }
        };
        
        if(response.state === "SUCCESS"){
            workspaceAPI
            .getFocusedTabInfo()
            .then(function(response) {
                return workspaceAPI.openSubtab({
                    parentTabId: response.tabId,
                    pageReference: WireMoneyFlowPageRef,
                    focus: true
                });
            })
            .then(function(subTabId) {
                $A.get("e.force:closeQuickAction").fire();
                workspaceAPI.focusTab({tabId : subTabId}); //being paranoid about focus
            });
            
        } else if (response.state === "FAIL") {
            alert("Authentication Failed"); //TODO: Replace with Toast
            
        } else if (response.state === "BLOCK") {
            alert("Authentication Blocked"); //TODO: Replace with Toast
            
        } else {
            alert("ERROR: Something went wrong"); //TODO: Replace with Toast
        }
    }
})