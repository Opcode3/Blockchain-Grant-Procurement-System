// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract GrantSystem {
    // Grant application struct
    struct GrantApplication {
        uint id;
        address applicant;
        string title;
        string description;
        uint amount;
        bool approved;
    }

    // Grant applications mapping
    mapping(uint => GrantApplication) public grantApplications;

    // Grant application count
    uint public grantApplicationCount;

    // Grant approval event
    event GrantApproval(uint grantId, bool approved);

    // Grant application function
    function applyForGrant(string memory _title, string memory _description, uint _amount) public {
        // Increment grant application count
        grantApplicationCount++;

        // Add grant application to mapping
        grantApplications[grantApplicationCount] = GrantApplication(grantApplicationCount, msg.sender, _title, _description, _amount, false);
    }

    // Grant approval function
    function approveGrant(uint _grantId, bool _approved) public {
        // Get grant application from mapping
        GrantApplication storage grantApplication = grantApplications[_grantId];

        // Update grant application approval status
        grantApplication.approved = _approved;

        // Emit grant approval event
        emit GrantApproval(_grantId, _approved);
    }
}
