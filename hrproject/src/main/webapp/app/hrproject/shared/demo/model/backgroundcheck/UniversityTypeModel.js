Ext.define('Hrproject.hrproject.shared.demo.model.backgroundcheck.UniversityTypeModel', {
     "extend": "Ext.data.Model",
     "fields": [{
          "name": "primaryKey",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "unvCode",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "unvDesc",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "unvHelp",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "unvIcon",
          "type": "string",
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