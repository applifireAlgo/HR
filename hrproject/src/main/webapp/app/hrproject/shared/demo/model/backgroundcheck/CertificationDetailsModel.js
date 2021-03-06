Ext.define('Hrproject.hrproject.shared.demo.model.backgroundcheck.CertificationDetailsModel', {
     "extend": "Ext.data.Model",
     "fields": [{
          "name": "primaryKey",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "certPk",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "empid",
          "reference": "EmpInformation",
          "defaultValue": ""
     }, {
          "name": "certcode",
          "reference": "CertificateType",
          "defaultValue": ""
     }, {
          "name": "grdcode",
          "reference": "GradeType",
          "defaultValue": ""
     }, {
          "name": "obtainedDuration",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "instituteName",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "versionId",
          "type": "int",
          "defaultValue": ""
     }, {
          "name": "DocumentList",
          "reference": "DocumentListModel"
     }, {
          "name": "entityAudit",
          "reference": "EntityAudit"
     }, {
          "name": "primaryDisplay",
          "type": "string",
          "defaultValue": ""
     }]
});