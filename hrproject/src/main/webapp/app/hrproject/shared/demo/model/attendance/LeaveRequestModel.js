Ext.define('Hrproject.hrproject.shared.demo.model.attendance.LeaveRequestModel', {
     "extend": "Ext.data.Model",
     "fields": [{
          "name": "primaryKey",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "leaveRequestId",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "empid",
          "reference": "EmpInformation",
          "defaultValue": ""
     }, {
          "name": "fromDate",
          "type": "date",
          "defaultValue": ""
     }, {
          "name": "toDate",
          "type": "date",
          "defaultValue": ""
     }, {
          "name": "privilege",
          "type": "int",
          "defaultValue": ""
     }, {
          "name": "casualLeave",
          "type": "int",
          "defaultValue": ""
     }, {
          "name": "sickLeave",
          "type": "int",
          "defaultValue": ""
     }, {
          "name": "maternityLeave",
          "type": "int",
          "defaultValue": ""
     }, {
          "name": "versionId",
          "type": "int",
          "defaultValue": ""
     }, {
          "name": "entityAudit",
          "reference": "EntityAudit"
     }, {
          "name": "primaryDisplay",
          "type": "string",
          "defaultValue": ""
     }]
});