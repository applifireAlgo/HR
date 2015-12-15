Ext.define('Hrproject.hrproject.shared.demo.model.backgroundcheck.EduDocModel', {
     "extend": "Ext.data.Model",
     "fields": [{
          "name": "primaryKey",
          "type": "int",
          "defaultValue": ""
     }, {
          "name": "eduDocPk",
          "type": "int",
          "defaultValue": ""
     }, {
          "name": "edupk",
          "reference": "EducationDetails",
          "defaultValue": ""
     }, {
          "name": "docid",
          "reference": "DocumentList",
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