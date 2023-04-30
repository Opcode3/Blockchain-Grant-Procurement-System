# Blockchain-Grant-Procurement-System ([See our pitch video](https://www.youtube.com/watch?v=9WCXMsM7-zk&feature=youtu.be)

This contract allows grant applicants to submit grant applications and grant administrators to approve or reject grant applications. When a grant application is submitted, a new grant application struct is created and stored in a mapping. When a grant application is approved or rejected, the grant application approval status is updated in the struct and an event is emitted. To use this contract, grant applicants would call the applyForGrant function, passing in the grant title, description, and amount. Grant administrators would call the approveGrant function, passing in the grant ID and approval status. The grantApplications mapping can be used to retrieve grant application information, and the GrantApproval event can be used to monitor grant approval events.


# How Pitch Vidoe
