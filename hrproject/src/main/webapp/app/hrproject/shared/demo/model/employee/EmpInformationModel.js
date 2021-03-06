Ext.define('Hrproject.hrproject.shared.demo.model.employee.EmpInformationModel', {
     "extend": "Ext.data.Model",
     "fields": [{
          "name": "primaryKey",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "empId",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "depttypecode",
          "reference": "DepartmentType",
          "defaultValue": ""
     }, {
          "name": "designatntypecode",
          "reference": "DesignationType",
          "defaultValue": ""
     }, {
          "name": "reportingOfficer",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "jobcode",
          "reference": "JobType",
          "defaultValue": ""
     }, {
          "name": "visacode",
          "reference": "Visa",
          "defaultValue": ""
     }, {
          "name": "pAN",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "versionId",
          "type": "int",
          "defaultValue": ""
     }, {
          "name": "CoreContacts",
          "reference": "CoreContactsModel"
     }, {
          "name": "entityAudit",
          "reference": "EntityAudit"
     }, {
          "name": "primaryDisplay",
          "type": "string",
          "defaultValue": ""
     }]
});