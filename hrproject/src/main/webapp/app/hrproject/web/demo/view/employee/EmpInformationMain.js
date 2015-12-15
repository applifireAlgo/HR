Ext.define('Hrproject.hrproject.web.demo.view.employee.EmpInformationMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "EmpInformationMainController",
     "restURL": "/EmpInformation",
     "defaults": {
          "split": true
     },
     "requires": ["Hrproject.hrproject.shared.demo.model.employee.EmpInformationModel", "Hrproject.hrproject.web.demo.controller.employee.EmpInformationMainController", "Hrproject.hrproject.shared.demo.model.employee.DepartmentTypeModel", "Hrproject.hrproject.shared.demo.model.employee.DesignationTypeModel", "Hrproject.hrproject.shared.demo.model.employee.JobTypeModel", "Hrproject.hrproject.shared.demo.model.employee.VisaModel", "Hrproject.hrproject.shared.demo.model.contacts.TitleModel", "Hrproject.hrproject.shared.demo.model.location.LanguageModel", "Hrproject.hrproject.shared.demo.model.contacts.GenderModel", "Hrproject.view.fw.component.DateFields", "Hrproject.hrproject.shared.demo.model.location.TimezoneModel", "Hrproject.view.fw.component.Grids", "Hrproject.hrproject.shared.demo.model.location.AddressTypeModel", "Hrproject.hrproject.shared.demo.model.location.CountryModel", "Hrproject.hrproject.shared.demo.model.location.StateModel", "Hrproject.hrproject.shared.demo.model.location.CityModel", "Hrproject.view.fw.component.Grids", "Hrproject.hrproject.shared.demo.model.contacts.CommunicationGroupModel", "Hrproject.hrproject.shared.demo.model.contacts.CommunicationTypeModel", "Hrproject.hrproject.shared.demo.viewmodel.employee.EmpInformationViewModel"],
     "communicationLog": [],
     "tabPosition": "bottom",
     "items": [{
          "title": "Data Browser",
          "layout": "border",
          "defaults": {
               "split": true
          },
          "autoScroll": false,
          "customWidgetType": "vdBorderLayout",
          "items": [{
               "xtype": "tabpanel",
               "customWidgetType": "vdTabLayout",
               "displayName": "Emp Information",
               "name": "EmpInformationTreeContainer",
               "itemId": "EmpInformationTreeContainer",
               "margin": "5 0 5 5",
               "autoScroll": false,
               "collapsible": true,
               "titleCollapse": true,
               "collapseMode": "header",
               "collapsed": false,
               "items": [{
                    "xtype": "treepanel",
                    "customWidgetType": "vdTree",
                    "useArrows": true,
                    "title": "Browse",
                    "rootVisible": false,
                    "itemId": "EmpInformationTree",
                    "listeners": {
                         "select": "treeClick"
                    },
                    "tbar": [{
                         "xtype": "triggerfield",
                         "customWidgetType": "vdTriggerField",
                         "emptyText": "Search",
                         "triggerCls": "",
                         "listeners": {
                              "change": "onTriggerfieldChange",
                              "buffer": 250
                         }
                    }, "->", {
                         "xtype": "tool",
                         "type": "refresh",
                         "tooltip": "Refresh Tree Data",
                         "handler": "onTreeRefreshClick"
                    }]
               }, {
                    "title": "Advance Search",
                    "xtype": "form",
                    "customWidgetType": "vdFormpanel",
                    "layout": "fit",
                    "autoScroll": false,
                    "itemId": "queryPanel",
                    "buttons": [{
                         "text": "Filter",
                         "handler": "onFilterClick"
                    }],
                    "items": [{
                         "name": "deptTypeCode",
                         "itemId": "deptTypeCode",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "Department",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Department",
                         "fieldId": "A4EE3AC8-CC61-4425-A80C-B2AB20E531DB",
                         "restURL": "DepartmentType",
                         "displayField": "primaryDisplay",
                         "valueField": "primaryKey",
                         "typeAhead": true,
                         "queryMode": "local",
                         "minChars": 2,
                         "store": {
                              "data": [],
                              "model": "Hrproject.hrproject.shared.demo.model.employee.DepartmentTypeModel"
                         }
                    }, {
                         "name": "designatnTypeCode",
                         "itemId": "designatnTypeCode",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "Designation",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Designation",
                         "fieldId": "FEDDA62A-EF85-4782-B6D1-3610FB666562",
                         "restURL": "DesignationType",
                         "displayField": "primaryDisplay",
                         "valueField": "primaryKey",
                         "typeAhead": true,
                         "queryMode": "local",
                         "minChars": 2,
                         "store": {
                              "data": [],
                              "model": "Hrproject.hrproject.shared.demo.model.employee.DesignationTypeModel"
                         }
                    }, {
                         "name": "reportingOfficer",
                         "itemId": "reportingOfficer",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Reporting Officer",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Reporting Officer",
                         "fieldId": "EFCC1091-E7AF-4E1D-9721-80D8462AE65D",
                         "minLength": "0",
                         "maxLength": "128"
                    }, {
                         "name": "jobCode",
                         "itemId": "jobCode",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "Job Type",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Job Type",
                         "fieldId": "36D65CC5-C02A-45BD-96F3-E1E1CDBED4EE",
                         "restURL": "JobType",
                         "displayField": "primaryDisplay",
                         "valueField": "primaryKey",
                         "typeAhead": true,
                         "queryMode": "local",
                         "minChars": 2,
                         "store": {
                              "data": [],
                              "model": "Hrproject.hrproject.shared.demo.model.employee.JobTypeModel"
                         }
                    }, {
                         "name": "visaCode",
                         "itemId": "visaCode",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "Visa Type",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Visa Type",
                         "fieldId": "70B264D0-0CC1-4BAA-AA3A-F6CDB204F4C6",
                         "restURL": "Visa",
                         "displayField": "primaryDisplay",
                         "valueField": "primaryKey",
                         "typeAhead": true,
                         "queryMode": "local",
                         "minChars": 2,
                         "store": {
                              "data": [],
                              "model": "Hrproject.hrproject.shared.demo.model.employee.VisaModel"
                         }
                    }, {
                         "name": "pAN",
                         "itemId": "pAN",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "PAN",
                         "margin": "5 5 5 5",
                         "fieldLabel": "PAN",
                         "fieldId": "87FBE833-1581-4AFE-B8A8-C4873B6769C7",
                         "minLength": "0",
                         "maxLength": "64"
                    }]
               }],
               "region": "west",
               "width": "20%"
          }, {
               "region": "center",
               "layout": "border",
               "defaults": {
                    "split": true
               },
               "customWidgetType": "vdBorderLayout",
               "items": [{
                    "xtype": "form",
                    "displayName": "Emp Information",
                    "name": "EmpInformation",
                    "itemId": "EmpInformationForm",
                    "bodyPadding": 10,
                    "items": [{
                         "xtype": "form",
                         "itemId": "form0",
                         "customWidgetType": "vdCard",
                         "header": {
                              "hidden": true
                         },
                         "items": [{
                              "layout": "column",
                              "customWidgetType": "vdColumnLayout",
                              "header": {
                                   "hidden": true
                              },
                              "xtype": "panel",
                              "items": [{
                                   "name": "empId",
                                   "itemId": "empId",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Employee",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Employee<font color='red'> *<\/font>",
                                   "fieldId": "886D85A8-D593-4710-BEC4-B4DB06FD9B68",
                                   "minLength": "0",
                                   "maxLength": "64",
                                   "hidden": true,
                                   "value": "",
                                   "bindable": "empId",
                                   "bind": "{empId}"
                              }, {
                                   "name": "deptTypeCode",
                                   "itemId": "deptTypeCode",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "Department",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Department<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "A4EE3AC8-CC61-4425-A80C-B2AB20E531DB",
                                   "restURL": "DepartmentType",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "typeAhead": true,
                                   "queryMode": "local",
                                   "minChars": 2,
                                   "store": {
                                        "data": [],
                                        "model": "Hrproject.hrproject.shared.demo.model.employee.DepartmentTypeModel"
                                   },
                                   "bindable": "deptTypeCode",
                                   "columnWidth": 0.5,
                                   "bind": "{deptTypeCode}"
                              }, {
                                   "name": "designatnTypeCode",
                                   "itemId": "designatnTypeCode",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "Designation",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Designation<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "FEDDA62A-EF85-4782-B6D1-3610FB666562",
                                   "restURL": "DesignationType",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "typeAhead": true,
                                   "queryMode": "local",
                                   "minChars": 2,
                                   "store": {
                                        "data": [],
                                        "model": "Hrproject.hrproject.shared.demo.model.employee.DesignationTypeModel"
                                   },
                                   "bindable": "designatnTypeCode",
                                   "columnWidth": 0.5,
                                   "bind": "{designatnTypeCode}"
                              }, {
                                   "name": "reportingOfficer",
                                   "itemId": "reportingOfficer",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Reporting Officer",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Reporting Officer<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "EFCC1091-E7AF-4E1D-9721-80D8462AE65D",
                                   "minLength": "0",
                                   "maxLength": "128",
                                   "bindable": "reportingOfficer",
                                   "columnWidth": 0.5,
                                   "bind": "{reportingOfficer}"
                              }, {
                                   "name": "jobCode",
                                   "itemId": "jobCode",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "Job Type",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Job Type<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "36D65CC5-C02A-45BD-96F3-E1E1CDBED4EE",
                                   "restURL": "JobType",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "typeAhead": true,
                                   "queryMode": "local",
                                   "minChars": 2,
                                   "store": {
                                        "data": [],
                                        "model": "Hrproject.hrproject.shared.demo.model.employee.JobTypeModel"
                                   },
                                   "bindable": "jobCode",
                                   "columnWidth": 0.5,
                                   "bind": "{jobCode}"
                              }, {
                                   "name": "visaCode",
                                   "itemId": "visaCode",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "Visa Type",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Visa Type<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "70B264D0-0CC1-4BAA-AA3A-F6CDB204F4C6",
                                   "restURL": "Visa",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "typeAhead": true,
                                   "queryMode": "local",
                                   "minChars": 2,
                                   "store": {
                                        "data": [],
                                        "model": "Hrproject.hrproject.shared.demo.model.employee.VisaModel"
                                   },
                                   "bindable": "visaCode",
                                   "columnWidth": 0.5,
                                   "bind": "{visaCode}"
                              }, {
                                   "name": "pAN",
                                   "itemId": "pAN",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "PAN",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "PAN<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "87FBE833-1581-4AFE-B8A8-C4873B6769C7",
                                   "minLength": "0",
                                   "maxLength": "64",
                                   "bindable": "pAN",
                                   "columnWidth": 0.5,
                                   "bind": "{pAN}"
                              }, {
                                   "name": "versionId",
                                   "itemId": "versionId",
                                   "xtype": "numberfield",
                                   "customWidgetType": "vdNumberfield",
                                   "displayName": "versionId",
                                   "margin": "5 5 5 5",
                                   "value": "-1",
                                   "fieldLabel": "versionId",
                                   "fieldId": "24D01DCA-9352-4738-8938-4608993CEA5F",
                                   "bindable": "versionId",
                                   "bind": "{versionId}",
                                   "hidden": true
                              }]
                         }]
                    }, {
                         "xtype": "form",
                         "displayName": "Core Contacts",
                         "title": "Core Contacts",
                         "name": "CoreContacts",
                         "itemId": "CoreContactsForm",
                         "bodyPadding": 10,
                         "items": [{
                              "xtype": "form",
                              "itemId": "form1",
                              "customWidgetType": "vdAnchorLayout",
                              "header": {
                                   "hidden": true
                              },
                              "items": [{
                                   "layout": "column",
                                   "customWidgetType": "vdColumnLayout",
                                   "header": {
                                        "hidden": true
                                   },
                                   "xtype": "panel",
                                   "items": [{
                                        "name": "titleId",
                                        "itemId": "titleId",
                                        "xtype": "combo",
                                        "customWidgetType": "vdCombo",
                                        "displayName": "Title",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Title<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "758F0852-ADA4-49C6-AB58-DCB2F5EDE0F0",
                                        "errorMessage": "Please enter title",
                                        "restURL": "Title",
                                        "displayField": "primaryDisplay",
                                        "valueField": "primaryKey",
                                        "typeAhead": true,
                                        "queryMode": "local",
                                        "minChars": 2,
                                        "store": {
                                             "data": [],
                                             "model": "Hrproject.hrproject.shared.demo.model.contacts.TitleModel"
                                        },
                                        "bindable": "coreContacts.titleId",
                                        "columnWidth": 0.5,
                                        "bind": "{coreContacts.titleId}"
                                   }, {
                                        "name": "firstName",
                                        "itemId": "firstName",
                                        "xtype": "textfield",
                                        "customWidgetType": "vdTextfield",
                                        "displayName": "First Name",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "First Name<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "787E79B7-6F39-409C-9872-A5BA5C9F6235",
                                        "minLength": "0",
                                        "maxLength": "256",
                                        "errorMessage": "Please enter First Name",
                                        "bindable": "coreContacts.firstName",
                                        "columnWidth": 0.5,
                                        "bind": "{coreContacts.firstName}"
                                   }, {
                                        "name": "middleName",
                                        "itemId": "middleName",
                                        "xtype": "textfield",
                                        "customWidgetType": "vdTextfield",
                                        "displayName": "Middle Name",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Middle Name",
                                        "fieldId": "C0D764CC-FC28-4785-903A-E442994CA75E",
                                        "minLength": "0",
                                        "maxLength": "256",
                                        "bindable": "coreContacts.middleName",
                                        "columnWidth": 0.5,
                                        "bind": "{coreContacts.middleName}"
                                   }, {
                                        "name": "lastName",
                                        "itemId": "lastName",
                                        "xtype": "textfield",
                                        "customWidgetType": "vdTextfield",
                                        "displayName": "Last Name",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Last Name<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "477110DF-7070-4516-BE4B-36E804BC4F21",
                                        "minLength": "0",
                                        "maxLength": "256",
                                        "errorMessage": "Please enter Last Name",
                                        "bindable": "coreContacts.lastName",
                                        "columnWidth": 0.5,
                                        "bind": "{coreContacts.lastName}"
                                   }, {
                                        "name": "nativeLanguageCode",
                                        "itemId": "nativeLanguageCode",
                                        "xtype": "combo",
                                        "customWidgetType": "vdCombo",
                                        "displayName": "Native Language Code",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Native Language Code",
                                        "fieldId": "FE385394-D883-4718-8CD1-5F00D9F13B01",
                                        "errorMessage": "Please enter gender",
                                        "restURL": "Language",
                                        "displayField": "primaryDisplay",
                                        "valueField": "primaryKey",
                                        "typeAhead": true,
                                        "queryMode": "local",
                                        "minChars": 2,
                                        "store": {
                                             "data": [],
                                             "model": "Hrproject.hrproject.shared.demo.model.location.LanguageModel"
                                        },
                                        "bindable": "coreContacts.nativeLanguageCode",
                                        "columnWidth": 0.5,
                                        "bind": "{coreContacts.nativeLanguageCode}"
                                   }, {
                                        "name": "nativeTitle",
                                        "itemId": "nativeTitle",
                                        "xtype": "combo",
                                        "customWidgetType": "vdCombo",
                                        "displayName": "Native Title",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Native Title",
                                        "fieldId": "A823E757-1DC6-4BCD-8915-2451927E6B3B",
                                        "displayField": "primaryDisplay",
                                        "valueField": "primaryKey",
                                        "typeAhead": true,
                                        "queryMode": "local",
                                        "minChars": 2,
                                        "bindable": "coreContacts.nativeTitle",
                                        "columnWidth": 0.5,
                                        "bind": "{coreContacts.nativeTitle}"
                                   }, {
                                        "name": "nativeFirstName",
                                        "itemId": "nativeFirstName",
                                        "xtype": "textfield",
                                        "customWidgetType": "vdTextfield",
                                        "displayName": "Native First Name",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Native First Name",
                                        "fieldId": "CCB2F2DC-04E0-49BC-9EED-282E616F3C38",
                                        "minLength": "0",
                                        "maxLength": "256",
                                        "bindable": "coreContacts.nativeFirstName",
                                        "columnWidth": 0.5,
                                        "bind": "{coreContacts.nativeFirstName}"
                                   }, {
                                        "name": "nativeMiddleName",
                                        "itemId": "nativeMiddleName",
                                        "xtype": "textfield",
                                        "customWidgetType": "vdTextfield",
                                        "displayName": "Native Middle Name",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Native Middle Name",
                                        "fieldId": "793C01E8-128C-4655-ACE5-35BBB58C2BFD",
                                        "minLength": "0",
                                        "maxLength": "256",
                                        "bindable": "coreContacts.nativeMiddleName",
                                        "columnWidth": 0.5,
                                        "bind": "{coreContacts.nativeMiddleName}"
                                   }, {
                                        "name": "nativeLastName",
                                        "itemId": "nativeLastName",
                                        "xtype": "textfield",
                                        "customWidgetType": "vdTextfield",
                                        "displayName": "Native LastName",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Native LastName",
                                        "fieldId": "FC111698-AC41-4E90-B5D5-0B514BA9E473",
                                        "minLength": "0",
                                        "maxLength": "256",
                                        "bindable": "coreContacts.nativeLastName",
                                        "columnWidth": 0.5,
                                        "bind": "{coreContacts.nativeLastName}"
                                   }, {
                                        "name": "genderId",
                                        "itemId": "genderId",
                                        "xtype": "combo",
                                        "customWidgetType": "vdCombo",
                                        "displayName": "Gender",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Gender<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "BE9B3B57-4CB3-46F5-8768-0C585388589E",
                                        "errorMessage": "Please enter gender",
                                        "restURL": "Gender",
                                        "displayField": "primaryDisplay",
                                        "valueField": "primaryKey",
                                        "typeAhead": true,
                                        "queryMode": "local",
                                        "minChars": 2,
                                        "store": {
                                             "data": [],
                                             "model": "Hrproject.hrproject.shared.demo.model.contacts.GenderModel"
                                        },
                                        "bindable": "coreContacts.genderId",
                                        "columnWidth": 0.5,
                                        "bind": "{coreContacts.genderId}"
                                   }, {
                                        "name": "dateofbirth",
                                        "itemId": "dateofbirth",
                                        "xtype": "datefields",
                                        "customWidgetType": "vdDatefield",
                                        "displayName": "DOB",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "DOB",
                                        "fieldId": "37266066-EFDA-44A2-A7AC-1A46844BAA89",
                                        "errorMessage": "Please enter Date of birth",
                                        "bindable": "coreContacts.dateofbirth",
                                        "columnWidth": 0.5,
                                        "bind": "{coreContacts.dateofbirth}"
                                   }, {
                                        "name": "age",
                                        "itemId": "age",
                                        "xtype": "numberfield",
                                        "customWidgetType": "vdNumberfield",
                                        "displayName": "Age",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Age",
                                        "fieldId": "C27F1612-A46B-4A08-A40B-8314AFE5BFEC",
                                        "minValue": "0",
                                        "maxValue": "125",
                                        "bindable": "coreContacts.age",
                                        "columnWidth": 0.5,
                                        "bind": "{coreContacts.age}"
                                   }, {
                                        "name": "approximateDOB",
                                        "itemId": "approximateDOB",
                                        "xtype": "datefields",
                                        "customWidgetType": "vdDatefield",
                                        "displayName": "Approx DOB",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Approx DOB",
                                        "fieldId": "1B842B7F-076B-4776-9D60-45CB8E5B6127",
                                        "bindable": "coreContacts.approximateDOB",
                                        "columnWidth": 0.5,
                                        "bind": "{coreContacts.approximateDOB}"
                                   }, {
                                        "name": "emailId",
                                        "itemId": "emailId",
                                        "xtype": "textfield",
                                        "customWidgetType": "vdTextfield",
                                        "displayName": "Email ID",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Email ID<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "61B65926-8981-43EA-8A96-DFCE88B3D336",
                                        "minLength": "0",
                                        "maxLength": "256",
                                        "errorMessage": "Please enter Email ID",
                                        "bindable": "coreContacts.emailId",
                                        "columnWidth": 0.5,
                                        "bind": "{coreContacts.emailId}"
                                   }, {
                                        "name": "phoneNumber",
                                        "itemId": "phoneNumber",
                                        "xtype": "textfield",
                                        "customWidgetType": "vdTextfield",
                                        "displayName": "Phone Number",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Phone Number<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "5B611CFB-0A14-4A4E-A653-140076E55338",
                                        "minLength": "0",
                                        "maxLength": "20",
                                        "errorMessage": "Please enter Phone Number",
                                        "bindable": "coreContacts.phoneNumber",
                                        "columnWidth": 0.5,
                                        "bind": "{coreContacts.phoneNumber}"
                                   }, {
                                        "name": "timeZone",
                                        "itemId": "timeZone",
                                        "xtype": "combo",
                                        "customWidgetType": "vdCombo",
                                        "displayName": "Time Zone",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Time Zone",
                                        "fieldId": "D44D6954-0F85-4AD7-B930-E36D8918610D",
                                        "errorMessage": "Please enter time zone",
                                        "restURL": "Timezone",
                                        "displayField": "primaryDisplay",
                                        "valueField": "primaryKey",
                                        "typeAhead": true,
                                        "queryMode": "local",
                                        "minChars": 2,
                                        "store": {
                                             "data": [],
                                             "model": "Hrproject.hrproject.shared.demo.model.location.TimezoneModel"
                                        },
                                        "bindable": "coreContacts.timeZone",
                                        "columnWidth": 0.5,
                                        "bind": "{coreContacts.timeZone}"
                                   }]
                              }]
                         }, {
                              "xtype": "form",
                              "displayName": "Address",
                              "title": "Address",
                              "name": "Address",
                              "itemId": "AddressForm",
                              "bodyPadding": 10,
                              "items": [{
                                   "xtype": "form",
                                   "itemId": "form2",
                                   "customWidgetType": "vdAnchorLayout",
                                   "header": {
                                        "hidden": true
                                   },
                                   "items": [{
                                        "layout": "column",
                                        "customWidgetType": "vdColumnLayout",
                                        "header": {
                                             "hidden": true
                                        },
                                        "xtype": "panel",
                                        "items": [{
                                             "name": "addressTypeId",
                                             "itemId": "addressTypeId",
                                             "xtype": "combo",
                                             "customWidgetType": "vdCombo",
                                             "displayName": "Address Type",
                                             "margin": "5 5 5 5",
                                             "fieldLabel": "Address Type<font color='red'> *<\/font>",
                                             "allowBlank": false,
                                             "fieldId": "E9A6F7FE-29EB-4A70-B26B-E34A6449C95C",
                                             "errorMessage": "Please enter valid Address type",
                                             "restURL": "AddressType",
                                             "displayField": "primaryDisplay",
                                             "valueField": "primaryKey",
                                             "typeAhead": true,
                                             "queryMode": "local",
                                             "minChars": 2,
                                             "store": {
                                                  "data": [],
                                                  "model": "Hrproject.hrproject.shared.demo.model.location.AddressTypeModel"
                                             },
                                             "bindable": "coreContacts.address.addressTypeId",
                                             "columnWidth": 0.5
                                        }, {
                                             "name": "addressLabel",
                                             "itemId": "addressLabel",
                                             "xtype": "textfield",
                                             "customWidgetType": "vdTextfield",
                                             "displayName": "Address Label",
                                             "margin": "5 5 5 5",
                                             "fieldLabel": "Address Label",
                                             "fieldId": "A9D8A5E2-435A-4E22-9CF5-80736F1F9F53",
                                             "minLength": "0",
                                             "maxLength": "11",
                                             "bindable": "coreContacts.address.addressLabel",
                                             "columnWidth": 0.5
                                        }, {
                                             "name": "address1",
                                             "itemId": "address1",
                                             "xtype": "textareafield",
                                             "customWidgetType": "vdTextareafield",
                                             "displayName": "Address1",
                                             "margin": "5 5 5 5",
                                             "fieldLabel": "Address1",
                                             "fieldId": "54870DFE-C6A4-4A8C-BFE2-AFB382BC18FB",
                                             "bindable": "coreContacts.address.address1",
                                             "columnWidth": 0.5
                                        }, {
                                             "name": "address2",
                                             "itemId": "address2",
                                             "xtype": "textareafield",
                                             "customWidgetType": "vdTextareafield",
                                             "displayName": "Address2",
                                             "margin": "5 5 5 5",
                                             "fieldLabel": "Address2",
                                             "fieldId": "09B0F279-BAF2-4316-8B3B-E0C541997C0B",
                                             "bindable": "coreContacts.address.address2",
                                             "columnWidth": 0.5
                                        }, {
                                             "name": "address3",
                                             "itemId": "address3",
                                             "xtype": "textareafield",
                                             "customWidgetType": "vdTextareafield",
                                             "displayName": "Address3",
                                             "margin": "5 5 5 5",
                                             "fieldLabel": "Address3",
                                             "fieldId": "DDADF10C-F1A7-4A7A-A818-FA0DF7EFBF72",
                                             "bindable": "coreContacts.address.address3",
                                             "columnWidth": 0.5
                                        }, {
                                             "name": "countryId",
                                             "itemId": "countryId",
                                             "xtype": "combo",
                                             "customWidgetType": "vdCombo",
                                             "displayName": "Country",
                                             "margin": "5 5 5 5",
                                             "fieldLabel": "Country<font color='red'> *<\/font>",
                                             "allowBlank": false,
                                             "fieldId": "6FDE7BAA-9A6B-4BF5-8467-48BC2BBB7265",
                                             "errorMessage": "Please enter Country",
                                             "restURL": "Country",
                                             "displayField": "primaryDisplay",
                                             "valueField": "primaryKey",
                                             "typeAhead": true,
                                             "queryMode": "local",
                                             "minChars": 2,
                                             "store": {
                                                  "data": [],
                                                  "model": "Hrproject.hrproject.shared.demo.model.location.CountryModel"
                                             },
                                             "bindable": "coreContacts.address.countryId",
                                             "columnWidth": 0.5,
                                             "listeners": {
                                                  "change": "onCountryIdChange"
                                             }
                                        }, {
                                             "name": "stateId",
                                             "itemId": "stateId",
                                             "xtype": "combo",
                                             "customWidgetType": "vdCombo",
                                             "displayName": "State",
                                             "margin": "5 5 5 5",
                                             "fieldLabel": "State<font color='red'> *<\/font>",
                                             "allowBlank": false,
                                             "fieldId": "8D731999-BEBF-43AA-9F0B-B1F10FA634EC",
                                             "errorMessage": "Please enter State",
                                             "restURL": "State",
                                             "displayField": "primaryDisplay",
                                             "valueField": "primaryKey",
                                             "typeAhead": true,
                                             "queryMode": "local",
                                             "minChars": 2,
                                             "store": {
                                                  "data": [],
                                                  "model": "Hrproject.hrproject.shared.demo.model.location.StateModel"
                                             },
                                             "bindable": "coreContacts.address.stateId",
                                             "columnWidth": 0.5,
                                             "listeners": {
                                                  "change": "onStateIdChange"
                                             }
                                        }, {
                                             "name": "cityId",
                                             "itemId": "cityId",
                                             "xtype": "combo",
                                             "customWidgetType": "vdCombo",
                                             "displayName": "City",
                                             "margin": "5 5 5 5",
                                             "fieldLabel": "City<font color='red'> *<\/font>",
                                             "allowBlank": false,
                                             "fieldId": "CA7DDA8E-FE4C-4DE0-8EA8-A3C565BF2457",
                                             "errorMessage": "Please enter City",
                                             "restURL": "City",
                                             "displayField": "primaryDisplay",
                                             "valueField": "primaryKey",
                                             "typeAhead": true,
                                             "queryMode": "local",
                                             "minChars": 2,
                                             "store": {
                                                  "data": [],
                                                  "model": "Hrproject.hrproject.shared.demo.model.location.CityModel"
                                             },
                                             "bindable": "coreContacts.address.cityId",
                                             "columnWidth": 0.5
                                        }, {
                                             "name": "zipcode",
                                             "itemId": "zipcode",
                                             "xtype": "textfield",
                                             "customWidgetType": "vdTextfield",
                                             "displayName": "Postal Code",
                                             "margin": "5 5 5 5",
                                             "fieldLabel": "Postal Code<font color='red'> *<\/font>",
                                             "allowBlank": false,
                                             "fieldId": "6E60FEE5-5FC7-4355-865D-58283DFF6140",
                                             "minLength": "0",
                                             "maxLength": "6",
                                             "errorMessage": "Please enter postal code",
                                             "bindable": "coreContacts.address.zipcode",
                                             "columnWidth": 0.5
                                        }, {
                                             "name": "latitude",
                                             "itemId": "latitude",
                                             "xtype": "textfield",
                                             "customWidgetType": "vdTextfield",
                                             "displayName": "Latitude",
                                             "margin": "5 5 5 5",
                                             "fieldLabel": "Latitude",
                                             "fieldId": "CF8CD91B-F913-413C-A8F7-F994AB55DFAA",
                                             "minLength": "0",
                                             "maxLength": "64",
                                             "bindable": "coreContacts.address.latitude",
                                             "columnWidth": 0.5
                                        }, {
                                             "name": "longitude",
                                             "itemId": "longitude",
                                             "xtype": "textfield",
                                             "customWidgetType": "vdTextfield",
                                             "displayName": "Longitude",
                                             "margin": "5 5 5 5",
                                             "fieldLabel": "Longitude",
                                             "fieldId": "8F652D22-2A38-460C-A14B-CA782E568A49",
                                             "minLength": "0",
                                             "maxLength": "64",
                                             "bindable": "coreContacts.address.longitude",
                                             "columnWidth": 0.5
                                        }]
                                   }]
                              }, {
                                   "columnWidth": 1,
                                   "xtype": "button",
                                   "customWidgetType": "vdButton",
                                   "maxWidth": 132,
                                   "text": "Add Address",
                                   "handler": "addAddress"
                              }, {
                                   "xtype": "grids",
                                   "customWidgetType": "vdGrid",
                                   "title": "Address",
                                   "columnWidth": 1,
                                   "itemId": "AddressGrid",
                                   "fieldLabel": "List",
                                   "bindLevel": "coreContacts.address",
                                   "bindable": "coreContacts.address",
                                   "listeners": {
                                        "select": "onAddressGridItemClick"
                                   },
                                   "store": {
                                        "fields": [],
                                        "data": []
                                   },
                                   "columns": [{
                                        "header": "Address Id",
                                        "text": "Address Id",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "addressId",
                                        "hidden": true,
                                        "flex": 1
                                   }, {
                                        "header": "Address Type",
                                        "text": "Address Type",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "addressTypeId",
                                        "renderer": "renderFormValue",
                                        "flex": 1
                                   }, {
                                        "header": "Address Label",
                                        "text": "Address Label",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "addressLabel",
                                        "flex": 1
                                   }, {
                                        "header": "Address1",
                                        "text": "Address1",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "address1",
                                        "flex": 1
                                   }, {
                                        "header": "Address2",
                                        "text": "Address2",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "address2",
                                        "flex": 1
                                   }, {
                                        "header": "Address3",
                                        "text": "Address3",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "address3",
                                        "flex": 1
                                   }, {
                                        "header": "Country",
                                        "text": "Country",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "countryId",
                                        "renderer": "renderFormValue",
                                        "flex": 1
                                   }, {
                                        "header": "State",
                                        "text": "State",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "stateId",
                                        "renderer": "renderFormValue",
                                        "flex": 1
                                   }, {
                                        "header": "City",
                                        "text": "City",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "cityId",
                                        "renderer": "renderFormValue",
                                        "flex": 1
                                   }, {
                                        "header": "Postal Code",
                                        "text": "Postal Code",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "zipcode",
                                        "flex": 1
                                   }, {
                                        "header": "Latitude",
                                        "text": "Latitude",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "latitude",
                                        "flex": 1
                                   }, {
                                        "header": "Longitude",
                                        "text": "Longitude",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "longitude",
                                        "flex": 1
                                   }, {
                                        "header": "createdBy",
                                        "text": "createdBy",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "createdBy",
                                        "hidden": true,
                                        "flex": 1
                                   }, {
                                        "header": "createdDate",
                                        "text": "createdDate",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "createdDate",
                                        "hidden": true,
                                        "flex": 1
                                   }, {
                                        "header": "updatedBy",
                                        "text": "updatedBy",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "updatedBy",
                                        "hidden": true,
                                        "flex": 1
                                   }, {
                                        "header": "updatedDate",
                                        "text": "updatedDate",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "updatedDate",
                                        "hidden": true,
                                        "flex": 1
                                   }, {
                                        "header": "versionId",
                                        "text": "versionId",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "versionId",
                                        "hidden": true,
                                        "flex": 1
                                   }, {
                                        "header": "activeStatus",
                                        "text": "activeStatus",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "activeStatus",
                                        "hidden": true,
                                        "flex": 1
                                   }, {
                                        "header": "txnAccessCode",
                                        "text": "txnAccessCode",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "txnAccessCode",
                                        "hidden": true,
                                        "flex": 1
                                   }, {
                                        "xtype": "actioncolumn",
                                        "customWidgetType": "vdActionColumn",
                                        "width": 30,
                                        "sortable": false,
                                        "menuDisable": true,
                                        "items": [{
                                             "icon": "images/delete.gif",
                                             "tooltip": "Delete Record",
                                             "handler": "onDeleteActionColumnClick"
                                        }]
                                   }]
                              }],
                              "customWidgetType": "vdCard"
                         }, {
                              "xtype": "form",
                              "displayName": "Communication Data",
                              "title": "Communication Data",
                              "name": "CommunicationData",
                              "itemId": "CommunicationDataForm",
                              "bodyPadding": 10,
                              "items": [{
                                   "xtype": "form",
                                   "itemId": "form2",
                                   "customWidgetType": "vdAnchorLayout",
                                   "header": {
                                        "hidden": true
                                   },
                                   "items": [{
                                        "layout": "column",
                                        "customWidgetType": "vdColumnLayout",
                                        "header": {
                                             "hidden": true
                                        },
                                        "xtype": "panel",
                                        "items": [{
                                             "name": "commGroupId",
                                             "itemId": "commGroupId",
                                             "xtype": "combo",
                                             "customWidgetType": "vdCombo",
                                             "displayName": "Communication Group",
                                             "margin": "5 5 5 5",
                                             "fieldLabel": "Communication Group<font color='red'> *<\/font>",
                                             "allowBlank": false,
                                             "fieldId": "F0AFCA02-01E9-4F3C-8EBD-021CF8A0E779",
                                             "restURL": "CommunicationGroup",
                                             "displayField": "primaryDisplay",
                                             "valueField": "primaryKey",
                                             "typeAhead": true,
                                             "queryMode": "local",
                                             "minChars": 2,
                                             "store": {
                                                  "data": [],
                                                  "model": "Hrproject.hrproject.shared.demo.model.contacts.CommunicationGroupModel"
                                             },
                                             "bindable": "coreContacts.communicationData.commGroupId",
                                             "columnWidth": 0.5,
                                             "listeners": {
                                                  "change": "onCommGroupIdChange"
                                             }
                                        }, {
                                             "name": "commType",
                                             "itemId": "commType",
                                             "xtype": "combo",
                                             "customWidgetType": "vdCombo",
                                             "displayName": "Communication Type",
                                             "margin": "5 5 5 5",
                                             "fieldLabel": "Communication Type<font color='red'> *<\/font>",
                                             "allowBlank": false,
                                             "fieldId": "068DA09B-A70B-4AAE-9657-7039928B709A",
                                             "restURL": "CommunicationType",
                                             "displayField": "primaryDisplay",
                                             "valueField": "primaryKey",
                                             "typeAhead": true,
                                             "queryMode": "local",
                                             "minChars": 2,
                                             "store": {
                                                  "data": [],
                                                  "model": "Hrproject.hrproject.shared.demo.model.contacts.CommunicationTypeModel"
                                             },
                                             "bindable": "coreContacts.communicationData.commType",
                                             "columnWidth": 0.5
                                        }, {
                                             "name": "commData",
                                             "itemId": "commData",
                                             "xtype": "textfield",
                                             "customWidgetType": "vdTextfield",
                                             "displayName": "Communication Data",
                                             "margin": "5 5 5 5",
                                             "fieldLabel": "Communication Data<font color='red'> *<\/font>",
                                             "allowBlank": false,
                                             "fieldId": "A86F52FC-4385-48C5-ACA6-9E2F97D18856",
                                             "minLength": "0",
                                             "errorMessage": "please enter communication details",
                                             "bindable": "coreContacts.communicationData.commData",
                                             "columnWidth": 0.5
                                        }]
                                   }]
                              }, {
                                   "columnWidth": 1,
                                   "xtype": "button",
                                   "customWidgetType": "vdButton",
                                   "maxWidth": 242,
                                   "text": "Add CommunicationData",
                                   "handler": "addCommunicationData"
                              }, {
                                   "xtype": "grids",
                                   "customWidgetType": "vdGrid",
                                   "title": "CommunicationData",
                                   "columnWidth": 1,
                                   "itemId": "CommunicationDataGrid",
                                   "fieldLabel": "List",
                                   "bindLevel": "coreContacts.communicationData",
                                   "bindable": "coreContacts.communicationData",
                                   "listeners": {
                                        "select": "onCommunicationDataGridItemClick"
                                   },
                                   "store": {
                                        "fields": [],
                                        "data": []
                                   },
                                   "columns": [{
                                        "header": "commType",
                                        "text": "commType",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "commDataId",
                                        "hidden": true,
                                        "flex": 1
                                   }, {
                                        "header": "Communication Group",
                                        "text": "Communication Group",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "commGroupId",
                                        "renderer": "renderFormValue",
                                        "flex": 1
                                   }, {
                                        "header": "Communication Type",
                                        "text": "Communication Type",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "commType",
                                        "renderer": "renderFormValue",
                                        "flex": 1
                                   }, {
                                        "header": "Communication Data",
                                        "text": "Communication Data",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "commData",
                                        "flex": 1
                                   }, {
                                        "header": "createdBy",
                                        "text": "createdBy",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "createdBy",
                                        "hidden": true,
                                        "flex": 1
                                   }, {
                                        "header": "createdDate",
                                        "text": "createdDate",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "createdDate",
                                        "hidden": true,
                                        "flex": 1
                                   }, {
                                        "header": "updatedBy",
                                        "text": "updatedBy",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "updatedBy",
                                        "hidden": true,
                                        "flex": 1
                                   }, {
                                        "header": "updatedDate",
                                        "text": "updatedDate",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "updatedDate",
                                        "hidden": true,
                                        "flex": 1
                                   }, {
                                        "header": "versionId",
                                        "text": "versionId",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "versionId",
                                        "hidden": true,
                                        "flex": 1
                                   }, {
                                        "header": "activeStatus",
                                        "text": "activeStatus",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "activeStatus",
                                        "hidden": true,
                                        "flex": 1
                                   }, {
                                        "header": "txnAccessCode",
                                        "text": "txnAccessCode",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "txnAccessCode",
                                        "hidden": true,
                                        "flex": 1
                                   }, {
                                        "xtype": "actioncolumn",
                                        "customWidgetType": "vdActionColumn",
                                        "width": 30,
                                        "sortable": false,
                                        "menuDisable": true,
                                        "items": [{
                                             "icon": "images/delete.gif",
                                             "tooltip": "Delete Record",
                                             "handler": "onDeleteActionColumnClick"
                                        }]
                                   }]
                              }],
                              "customWidgetType": "vdCard"
                         }],
                         "customWidgetType": "vdCard"
                    }],
                    "tools": [{
                         "type": "help",
                         "tooltip": "Get Console",
                         "handler": "onConsoleClick"
                    }, {
                         "type": "refresh",
                         "tooltip": "Refresh Tab",
                         "handler": "init"
                    }],
                    "layout": "card",
                    "defaults": {
                         "autoScroll": true
                    },
                    "autoScroll": true,
                    "dockedItems": [{
                         "xtype ": "toolbar",
                         "customWidgetType": "vdBBar",
                         "dock": "bottom",
                         "margin": 0,
                         "isDockedItem": true,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill"
                         }, {
                              "xtype": "button",
                              "customWidgetType": "vdButton",
                              "margin": "0 5 0 5",
                              "text": "Save",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "saveFormButton",
                              "listeners": {
                                   "click": "saveForm"
                              }
                         }, {
                              "xtype": "button",
                              "customWidgetType": "vdButton",
                              "margin": "0 5 0 5",
                              "text": "Reset",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "resetFormButton",
                              "listeners": {
                                   "click": "resetForm"
                              }
                         }],
                         "defaults": {
                              "margin": "0 5 0 5"
                         }
                    }, {
                         "xtype": "toolbar",
                         "customWidgetType": "vdTBar",
                         "defaults": {
                              "margin": "0 5 0 5"
                         },
                         "isDockedItem": true,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill"
                         }, {
                              "xtype": "button",
                              "customWidgetType": "vdButton",
                              "itemId": "cardPrev",
                              "text": "&laquo; Previous",
                              "handler": "showPreviousCard",
                              "disabled": true,
                              "margin": "0 5 0 5"
                         }, {
                              "xtype": "button",
                              "customWidgetType": "vdButton",
                              "itemId": "cardNext",
                              "text": "Next &raquo;",
                              "handler": "showNextCard",
                              "margin": "0 5 0 5"
                         }]
                    }],
                    "viewModel": "EmpInformationViewModel",
                    "listeners": {},
                    "extend": "Ext.form.Panel",
                    "region": "center",
                    "customWidgetType": "vdCardLayout"
               }, {
                    "xtype": "grid",
                    "customWidgetType": "vdGrid",
                    "displayName": "Emp Information",
                    "title": "Details Grid",
                    "name": "EmpInformationGrid",
                    "itemId": "EmpInformationGrid",
                    "store": [],
                    "bodyPadding": 10,
                    "requires": [],
                    "columns": [{
                         "header": "Employee",
                         "dataIndex": "empId",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "primaryKey",
                         "dataIndex": "primaryKey",
                         "hidden": true
                    }, {
                         "header": "Department",
                         "dataIndex": "deptTypeCode",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "Designation",
                         "dataIndex": "designatnTypeCode",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "Reporting Officer",
                         "dataIndex": "reportingOfficer",
                         "flex": 1
                    }, {
                         "header": "Job Type",
                         "dataIndex": "jobCode",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "Visa Type",
                         "dataIndex": "visaCode",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "PAN",
                         "dataIndex": "pAN",
                         "flex": 1
                    }, {
                         "header": "createdBy",
                         "dataIndex": "createdBy",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "createdDate",
                         "dataIndex": "createdDate",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "updatedBy",
                         "dataIndex": "updatedBy",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "updatedDate",
                         "dataIndex": "updatedDate",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "versionId",
                         "dataIndex": "versionId",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "activeStatus",
                         "dataIndex": "activeStatus",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "txnAccessCode",
                         "dataIndex": "txnAccessCode",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "xtype": "actioncolumn",
                         "customWidgetType": "vdActionColumn",
                         "width": 30,
                         "sortable": false,
                         "menuDisable": true,
                         "items": [{
                              "icon": "images/delete.gif",
                              "tooltip": "Delete Record",
                              "handler": "onDeleteActionColumnClickMainGrid"
                         }]
                    }],
                    "listeners": {
                         "itemclick": "onGridItemClick"
                    },
                    "tools": [{
                         "type": "refresh",
                         "tooltip": "Refresh Grid Data",
                         "handler": "onGridRefreshClick"
                    }],
                    "collapsible": true,
                    "titleCollapse": true,
                    "collapseMode": "header",
                    "region": "south",
                    "height": "40%"
               }]
          }]
     }, {
          "title": "Add New",
          "itemId": "addNewForm",
          "layout": "border",
          "customWidgetType": "vdBorderLayout",
          "autoScroll": false,
          "items": [{
               "xtype": "form",
               "displayName": "Emp Information",
               "name": "EmpInformation",
               "itemId": "EmpInformationForm",
               "bodyPadding": 10,
               "items": [{
                    "xtype": "form",
                    "itemId": "form0",
                    "customWidgetType": "vdCard",
                    "header": {
                         "hidden": true
                    },
                    "items": [{
                         "layout": "column",
                         "customWidgetType": "vdColumnLayout",
                         "header": {
                              "hidden": true
                         },
                         "xtype": "panel",
                         "items": [{
                              "name": "empId",
                              "itemId": "empId",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "Employee",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Employee<font color='red'> *<\/font>",
                              "fieldId": "886D85A8-D593-4710-BEC4-B4DB06FD9B68",
                              "minLength": "0",
                              "maxLength": "64",
                              "hidden": true,
                              "value": "",
                              "bindable": "empId",
                              "bind": "{empId}"
                         }, {
                              "name": "deptTypeCode",
                              "itemId": "deptTypeCode",
                              "xtype": "combo",
                              "customWidgetType": "vdCombo",
                              "displayName": "Department",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Department<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "A4EE3AC8-CC61-4425-A80C-B2AB20E531DB",
                              "restURL": "DepartmentType",
                              "displayField": "primaryDisplay",
                              "valueField": "primaryKey",
                              "typeAhead": true,
                              "queryMode": "local",
                              "minChars": 2,
                              "store": {
                                   "data": [],
                                   "model": "Hrproject.hrproject.shared.demo.model.employee.DepartmentTypeModel"
                              },
                              "bindable": "deptTypeCode",
                              "columnWidth": 0.5,
                              "bind": "{deptTypeCode}"
                         }, {
                              "name": "designatnTypeCode",
                              "itemId": "designatnTypeCode",
                              "xtype": "combo",
                              "customWidgetType": "vdCombo",
                              "displayName": "Designation",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Designation<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "FEDDA62A-EF85-4782-B6D1-3610FB666562",
                              "restURL": "DesignationType",
                              "displayField": "primaryDisplay",
                              "valueField": "primaryKey",
                              "typeAhead": true,
                              "queryMode": "local",
                              "minChars": 2,
                              "store": {
                                   "data": [],
                                   "model": "Hrproject.hrproject.shared.demo.model.employee.DesignationTypeModel"
                              },
                              "bindable": "designatnTypeCode",
                              "columnWidth": 0.5,
                              "bind": "{designatnTypeCode}"
                         }, {
                              "name": "reportingOfficer",
                              "itemId": "reportingOfficer",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "Reporting Officer",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Reporting Officer<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "EFCC1091-E7AF-4E1D-9721-80D8462AE65D",
                              "minLength": "0",
                              "maxLength": "128",
                              "bindable": "reportingOfficer",
                              "columnWidth": 0.5,
                              "bind": "{reportingOfficer}"
                         }, {
                              "name": "jobCode",
                              "itemId": "jobCode",
                              "xtype": "combo",
                              "customWidgetType": "vdCombo",
                              "displayName": "Job Type",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Job Type<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "36D65CC5-C02A-45BD-96F3-E1E1CDBED4EE",
                              "restURL": "JobType",
                              "displayField": "primaryDisplay",
                              "valueField": "primaryKey",
                              "typeAhead": true,
                              "queryMode": "local",
                              "minChars": 2,
                              "store": {
                                   "data": [],
                                   "model": "Hrproject.hrproject.shared.demo.model.employee.JobTypeModel"
                              },
                              "bindable": "jobCode",
                              "columnWidth": 0.5,
                              "bind": "{jobCode}"
                         }, {
                              "name": "visaCode",
                              "itemId": "visaCode",
                              "xtype": "combo",
                              "customWidgetType": "vdCombo",
                              "displayName": "Visa Type",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Visa Type<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "70B264D0-0CC1-4BAA-AA3A-F6CDB204F4C6",
                              "restURL": "Visa",
                              "displayField": "primaryDisplay",
                              "valueField": "primaryKey",
                              "typeAhead": true,
                              "queryMode": "local",
                              "minChars": 2,
                              "store": {
                                   "data": [],
                                   "model": "Hrproject.hrproject.shared.demo.model.employee.VisaModel"
                              },
                              "bindable": "visaCode",
                              "columnWidth": 0.5,
                              "bind": "{visaCode}"
                         }, {
                              "name": "pAN",
                              "itemId": "pAN",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "PAN",
                              "margin": "5 5 5 5",
                              "fieldLabel": "PAN<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "87FBE833-1581-4AFE-B8A8-C4873B6769C7",
                              "minLength": "0",
                              "maxLength": "64",
                              "bindable": "pAN",
                              "columnWidth": 0.5,
                              "bind": "{pAN}"
                         }, {
                              "name": "versionId",
                              "itemId": "versionId",
                              "xtype": "numberfield",
                              "customWidgetType": "vdNumberfield",
                              "displayName": "versionId",
                              "margin": "5 5 5 5",
                              "value": "-1",
                              "fieldLabel": "versionId",
                              "fieldId": "24D01DCA-9352-4738-8938-4608993CEA5F",
                              "bindable": "versionId",
                              "bind": "{versionId}",
                              "hidden": true
                         }]
                    }]
               }, {
                    "xtype": "form",
                    "displayName": "Core Contacts",
                    "title": "Core Contacts",
                    "name": "CoreContacts",
                    "itemId": "CoreContactsForm",
                    "bodyPadding": 10,
                    "items": [{
                         "xtype": "form",
                         "itemId": "form1",
                         "customWidgetType": "vdAnchorLayout",
                         "header": {
                              "hidden": true
                         },
                         "items": [{
                              "layout": "column",
                              "customWidgetType": "vdColumnLayout",
                              "header": {
                                   "hidden": true
                              },
                              "xtype": "panel",
                              "items": [{
                                   "name": "titleId",
                                   "itemId": "titleId",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "Title",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Title<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "758F0852-ADA4-49C6-AB58-DCB2F5EDE0F0",
                                   "errorMessage": "Please enter title",
                                   "restURL": "Title",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "typeAhead": true,
                                   "queryMode": "local",
                                   "minChars": 2,
                                   "store": {
                                        "data": [],
                                        "model": "Hrproject.hrproject.shared.demo.model.contacts.TitleModel"
                                   },
                                   "bindable": "coreContacts.titleId",
                                   "columnWidth": 0.5,
                                   "bind": "{coreContacts.titleId}"
                              }, {
                                   "name": "firstName",
                                   "itemId": "firstName",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "First Name",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "First Name<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "787E79B7-6F39-409C-9872-A5BA5C9F6235",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "errorMessage": "Please enter First Name",
                                   "bindable": "coreContacts.firstName",
                                   "columnWidth": 0.5,
                                   "bind": "{coreContacts.firstName}"
                              }, {
                                   "name": "middleName",
                                   "itemId": "middleName",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Middle Name",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Middle Name",
                                   "fieldId": "C0D764CC-FC28-4785-903A-E442994CA75E",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "bindable": "coreContacts.middleName",
                                   "columnWidth": 0.5,
                                   "bind": "{coreContacts.middleName}"
                              }, {
                                   "name": "lastName",
                                   "itemId": "lastName",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Last Name",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Last Name<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "477110DF-7070-4516-BE4B-36E804BC4F21",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "errorMessage": "Please enter Last Name",
                                   "bindable": "coreContacts.lastName",
                                   "columnWidth": 0.5,
                                   "bind": "{coreContacts.lastName}"
                              }, {
                                   "name": "nativeLanguageCode",
                                   "itemId": "nativeLanguageCode",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "Native Language Code",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Native Language Code",
                                   "fieldId": "FE385394-D883-4718-8CD1-5F00D9F13B01",
                                   "errorMessage": "Please enter gender",
                                   "restURL": "Language",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "typeAhead": true,
                                   "queryMode": "local",
                                   "minChars": 2,
                                   "store": {
                                        "data": [],
                                        "model": "Hrproject.hrproject.shared.demo.model.location.LanguageModel"
                                   },
                                   "bindable": "coreContacts.nativeLanguageCode",
                                   "columnWidth": 0.5,
                                   "bind": "{coreContacts.nativeLanguageCode}"
                              }, {
                                   "name": "nativeTitle",
                                   "itemId": "nativeTitle",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "Native Title",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Native Title",
                                   "fieldId": "A823E757-1DC6-4BCD-8915-2451927E6B3B",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "typeAhead": true,
                                   "queryMode": "local",
                                   "minChars": 2,
                                   "bindable": "coreContacts.nativeTitle",
                                   "columnWidth": 0.5,
                                   "bind": "{coreContacts.nativeTitle}"
                              }, {
                                   "name": "nativeFirstName",
                                   "itemId": "nativeFirstName",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Native First Name",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Native First Name",
                                   "fieldId": "CCB2F2DC-04E0-49BC-9EED-282E616F3C38",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "bindable": "coreContacts.nativeFirstName",
                                   "columnWidth": 0.5,
                                   "bind": "{coreContacts.nativeFirstName}"
                              }, {
                                   "name": "nativeMiddleName",
                                   "itemId": "nativeMiddleName",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Native Middle Name",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Native Middle Name",
                                   "fieldId": "793C01E8-128C-4655-ACE5-35BBB58C2BFD",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "bindable": "coreContacts.nativeMiddleName",
                                   "columnWidth": 0.5,
                                   "bind": "{coreContacts.nativeMiddleName}"
                              }, {
                                   "name": "nativeLastName",
                                   "itemId": "nativeLastName",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Native LastName",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Native LastName",
                                   "fieldId": "FC111698-AC41-4E90-B5D5-0B514BA9E473",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "bindable": "coreContacts.nativeLastName",
                                   "columnWidth": 0.5,
                                   "bind": "{coreContacts.nativeLastName}"
                              }, {
                                   "name": "genderId",
                                   "itemId": "genderId",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "Gender",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Gender<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "BE9B3B57-4CB3-46F5-8768-0C585388589E",
                                   "errorMessage": "Please enter gender",
                                   "restURL": "Gender",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "typeAhead": true,
                                   "queryMode": "local",
                                   "minChars": 2,
                                   "store": {
                                        "data": [],
                                        "model": "Hrproject.hrproject.shared.demo.model.contacts.GenderModel"
                                   },
                                   "bindable": "coreContacts.genderId",
                                   "columnWidth": 0.5,
                                   "bind": "{coreContacts.genderId}"
                              }, {
                                   "name": "dateofbirth",
                                   "itemId": "dateofbirth",
                                   "xtype": "datefields",
                                   "customWidgetType": "vdDatefield",
                                   "displayName": "DOB",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "DOB",
                                   "fieldId": "37266066-EFDA-44A2-A7AC-1A46844BAA89",
                                   "errorMessage": "Please enter Date of birth",
                                   "bindable": "coreContacts.dateofbirth",
                                   "columnWidth": 0.5,
                                   "bind": "{coreContacts.dateofbirth}"
                              }, {
                                   "name": "age",
                                   "itemId": "age",
                                   "xtype": "numberfield",
                                   "customWidgetType": "vdNumberfield",
                                   "displayName": "Age",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Age",
                                   "fieldId": "C27F1612-A46B-4A08-A40B-8314AFE5BFEC",
                                   "minValue": "0",
                                   "maxValue": "125",
                                   "bindable": "coreContacts.age",
                                   "columnWidth": 0.5,
                                   "bind": "{coreContacts.age}"
                              }, {
                                   "name": "approximateDOB",
                                   "itemId": "approximateDOB",
                                   "xtype": "datefields",
                                   "customWidgetType": "vdDatefield",
                                   "displayName": "Approx DOB",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Approx DOB",
                                   "fieldId": "1B842B7F-076B-4776-9D60-45CB8E5B6127",
                                   "bindable": "coreContacts.approximateDOB",
                                   "columnWidth": 0.5,
                                   "bind": "{coreContacts.approximateDOB}"
                              }, {
                                   "name": "emailId",
                                   "itemId": "emailId",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Email ID",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Email ID<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "61B65926-8981-43EA-8A96-DFCE88B3D336",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "errorMessage": "Please enter Email ID",
                                   "bindable": "coreContacts.emailId",
                                   "columnWidth": 0.5,
                                   "bind": "{coreContacts.emailId}"
                              }, {
                                   "name": "phoneNumber",
                                   "itemId": "phoneNumber",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Phone Number",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Phone Number<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "5B611CFB-0A14-4A4E-A653-140076E55338",
                                   "minLength": "0",
                                   "maxLength": "20",
                                   "errorMessage": "Please enter Phone Number",
                                   "bindable": "coreContacts.phoneNumber",
                                   "columnWidth": 0.5,
                                   "bind": "{coreContacts.phoneNumber}"
                              }, {
                                   "name": "timeZone",
                                   "itemId": "timeZone",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "Time Zone",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Time Zone",
                                   "fieldId": "D44D6954-0F85-4AD7-B930-E36D8918610D",
                                   "errorMessage": "Please enter time zone",
                                   "restURL": "Timezone",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "typeAhead": true,
                                   "queryMode": "local",
                                   "minChars": 2,
                                   "store": {
                                        "data": [],
                                        "model": "Hrproject.hrproject.shared.demo.model.location.TimezoneModel"
                                   },
                                   "bindable": "coreContacts.timeZone",
                                   "columnWidth": 0.5,
                                   "bind": "{coreContacts.timeZone}"
                              }]
                         }]
                    }, {
                         "xtype": "form",
                         "displayName": "Address",
                         "title": "Address",
                         "name": "Address",
                         "itemId": "AddressForm",
                         "bodyPadding": 10,
                         "items": [{
                              "xtype": "form",
                              "itemId": "form2",
                              "customWidgetType": "vdAnchorLayout",
                              "header": {
                                   "hidden": true
                              },
                              "items": [{
                                   "layout": "column",
                                   "customWidgetType": "vdColumnLayout",
                                   "header": {
                                        "hidden": true
                                   },
                                   "xtype": "panel",
                                   "items": [{
                                        "name": "addressTypeId",
                                        "itemId": "addressTypeId",
                                        "xtype": "combo",
                                        "customWidgetType": "vdCombo",
                                        "displayName": "Address Type",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Address Type<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "E9A6F7FE-29EB-4A70-B26B-E34A6449C95C",
                                        "errorMessage": "Please enter valid Address type",
                                        "restURL": "AddressType",
                                        "displayField": "primaryDisplay",
                                        "valueField": "primaryKey",
                                        "typeAhead": true,
                                        "queryMode": "local",
                                        "minChars": 2,
                                        "store": {
                                             "data": [],
                                             "model": "Hrproject.hrproject.shared.demo.model.location.AddressTypeModel"
                                        },
                                        "bindable": "coreContacts.address.addressTypeId",
                                        "columnWidth": 0.5
                                   }, {
                                        "name": "addressLabel",
                                        "itemId": "addressLabel",
                                        "xtype": "textfield",
                                        "customWidgetType": "vdTextfield",
                                        "displayName": "Address Label",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Address Label",
                                        "fieldId": "A9D8A5E2-435A-4E22-9CF5-80736F1F9F53",
                                        "minLength": "0",
                                        "maxLength": "11",
                                        "bindable": "coreContacts.address.addressLabel",
                                        "columnWidth": 0.5
                                   }, {
                                        "name": "address1",
                                        "itemId": "address1",
                                        "xtype": "textareafield",
                                        "customWidgetType": "vdTextareafield",
                                        "displayName": "Address1",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Address1",
                                        "fieldId": "54870DFE-C6A4-4A8C-BFE2-AFB382BC18FB",
                                        "bindable": "coreContacts.address.address1",
                                        "columnWidth": 0.5
                                   }, {
                                        "name": "address2",
                                        "itemId": "address2",
                                        "xtype": "textareafield",
                                        "customWidgetType": "vdTextareafield",
                                        "displayName": "Address2",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Address2",
                                        "fieldId": "09B0F279-BAF2-4316-8B3B-E0C541997C0B",
                                        "bindable": "coreContacts.address.address2",
                                        "columnWidth": 0.5
                                   }, {
                                        "name": "address3",
                                        "itemId": "address3",
                                        "xtype": "textareafield",
                                        "customWidgetType": "vdTextareafield",
                                        "displayName": "Address3",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Address3",
                                        "fieldId": "DDADF10C-F1A7-4A7A-A818-FA0DF7EFBF72",
                                        "bindable": "coreContacts.address.address3",
                                        "columnWidth": 0.5
                                   }, {
                                        "name": "countryId",
                                        "itemId": "countryId",
                                        "xtype": "combo",
                                        "customWidgetType": "vdCombo",
                                        "displayName": "Country",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Country<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "6FDE7BAA-9A6B-4BF5-8467-48BC2BBB7265",
                                        "errorMessage": "Please enter Country",
                                        "restURL": "Country",
                                        "displayField": "primaryDisplay",
                                        "valueField": "primaryKey",
                                        "typeAhead": true,
                                        "queryMode": "local",
                                        "minChars": 2,
                                        "store": {
                                             "data": [],
                                             "model": "Hrproject.hrproject.shared.demo.model.location.CountryModel"
                                        },
                                        "bindable": "coreContacts.address.countryId",
                                        "columnWidth": 0.5,
                                        "listeners": {
                                             "change": "onCountryIdChange"
                                        }
                                   }, {
                                        "name": "stateId",
                                        "itemId": "stateId",
                                        "xtype": "combo",
                                        "customWidgetType": "vdCombo",
                                        "displayName": "State",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "State<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "8D731999-BEBF-43AA-9F0B-B1F10FA634EC",
                                        "errorMessage": "Please enter State",
                                        "restURL": "State",
                                        "displayField": "primaryDisplay",
                                        "valueField": "primaryKey",
                                        "typeAhead": true,
                                        "queryMode": "local",
                                        "minChars": 2,
                                        "store": {
                                             "data": [],
                                             "model": "Hrproject.hrproject.shared.demo.model.location.StateModel"
                                        },
                                        "bindable": "coreContacts.address.stateId",
                                        "columnWidth": 0.5,
                                        "listeners": {
                                             "change": "onStateIdChange"
                                        }
                                   }, {
                                        "name": "cityId",
                                        "itemId": "cityId",
                                        "xtype": "combo",
                                        "customWidgetType": "vdCombo",
                                        "displayName": "City",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "City<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "CA7DDA8E-FE4C-4DE0-8EA8-A3C565BF2457",
                                        "errorMessage": "Please enter City",
                                        "restURL": "City",
                                        "displayField": "primaryDisplay",
                                        "valueField": "primaryKey",
                                        "typeAhead": true,
                                        "queryMode": "local",
                                        "minChars": 2,
                                        "store": {
                                             "data": [],
                                             "model": "Hrproject.hrproject.shared.demo.model.location.CityModel"
                                        },
                                        "bindable": "coreContacts.address.cityId",
                                        "columnWidth": 0.5
                                   }, {
                                        "name": "zipcode",
                                        "itemId": "zipcode",
                                        "xtype": "textfield",
                                        "customWidgetType": "vdTextfield",
                                        "displayName": "Postal Code",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Postal Code<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "6E60FEE5-5FC7-4355-865D-58283DFF6140",
                                        "minLength": "0",
                                        "maxLength": "6",
                                        "errorMessage": "Please enter postal code",
                                        "bindable": "coreContacts.address.zipcode",
                                        "columnWidth": 0.5
                                   }, {
                                        "name": "latitude",
                                        "itemId": "latitude",
                                        "xtype": "textfield",
                                        "customWidgetType": "vdTextfield",
                                        "displayName": "Latitude",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Latitude",
                                        "fieldId": "CF8CD91B-F913-413C-A8F7-F994AB55DFAA",
                                        "minLength": "0",
                                        "maxLength": "64",
                                        "bindable": "coreContacts.address.latitude",
                                        "columnWidth": 0.5
                                   }, {
                                        "name": "longitude",
                                        "itemId": "longitude",
                                        "xtype": "textfield",
                                        "customWidgetType": "vdTextfield",
                                        "displayName": "Longitude",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Longitude",
                                        "fieldId": "8F652D22-2A38-460C-A14B-CA782E568A49",
                                        "minLength": "0",
                                        "maxLength": "64",
                                        "bindable": "coreContacts.address.longitude",
                                        "columnWidth": 0.5
                                   }]
                              }]
                         }, {
                              "columnWidth": 1,
                              "xtype": "button",
                              "customWidgetType": "vdButton",
                              "maxWidth": 132,
                              "text": "Add Address",
                              "handler": "addAddress"
                         }, {
                              "xtype": "grids",
                              "customWidgetType": "vdGrid",
                              "title": "Address",
                              "columnWidth": 1,
                              "itemId": "AddressGrid",
                              "fieldLabel": "List",
                              "bindLevel": "coreContacts.address",
                              "bindable": "coreContacts.address",
                              "listeners": {
                                   "select": "onAddressGridItemClick"
                              },
                              "store": {
                                   "fields": [],
                                   "data": []
                              },
                              "columns": [{
                                   "header": "Address Id",
                                   "text": "Address Id",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "addressId",
                                   "hidden": true,
                                   "flex": 1
                              }, {
                                   "header": "Address Type",
                                   "text": "Address Type",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "addressTypeId",
                                   "renderer": "renderFormValue",
                                   "flex": 1
                              }, {
                                   "header": "Address Label",
                                   "text": "Address Label",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "addressLabel",
                                   "flex": 1
                              }, {
                                   "header": "Address1",
                                   "text": "Address1",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "address1",
                                   "flex": 1
                              }, {
                                   "header": "Address2",
                                   "text": "Address2",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "address2",
                                   "flex": 1
                              }, {
                                   "header": "Address3",
                                   "text": "Address3",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "address3",
                                   "flex": 1
                              }, {
                                   "header": "Country",
                                   "text": "Country",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "countryId",
                                   "renderer": "renderFormValue",
                                   "flex": 1
                              }, {
                                   "header": "State",
                                   "text": "State",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "stateId",
                                   "renderer": "renderFormValue",
                                   "flex": 1
                              }, {
                                   "header": "City",
                                   "text": "City",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "cityId",
                                   "renderer": "renderFormValue",
                                   "flex": 1
                              }, {
                                   "header": "Postal Code",
                                   "text": "Postal Code",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "zipcode",
                                   "flex": 1
                              }, {
                                   "header": "Latitude",
                                   "text": "Latitude",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "latitude",
                                   "flex": 1
                              }, {
                                   "header": "Longitude",
                                   "text": "Longitude",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "longitude",
                                   "flex": 1
                              }, {
                                   "header": "createdBy",
                                   "text": "createdBy",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "createdBy",
                                   "hidden": true,
                                   "flex": 1
                              }, {
                                   "header": "createdDate",
                                   "text": "createdDate",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "createdDate",
                                   "hidden": true,
                                   "flex": 1
                              }, {
                                   "header": "updatedBy",
                                   "text": "updatedBy",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "updatedBy",
                                   "hidden": true,
                                   "flex": 1
                              }, {
                                   "header": "updatedDate",
                                   "text": "updatedDate",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "updatedDate",
                                   "hidden": true,
                                   "flex": 1
                              }, {
                                   "header": "versionId",
                                   "text": "versionId",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "versionId",
                                   "hidden": true,
                                   "flex": 1
                              }, {
                                   "header": "activeStatus",
                                   "text": "activeStatus",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "activeStatus",
                                   "hidden": true,
                                   "flex": 1
                              }, {
                                   "header": "txnAccessCode",
                                   "text": "txnAccessCode",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "txnAccessCode",
                                   "hidden": true,
                                   "flex": 1
                              }, {
                                   "xtype": "actioncolumn",
                                   "customWidgetType": "vdActionColumn",
                                   "width": 30,
                                   "sortable": false,
                                   "menuDisable": true,
                                   "items": [{
                                        "icon": "images/delete.gif",
                                        "tooltip": "Delete Record",
                                        "handler": "onDeleteActionColumnClick"
                                   }]
                              }]
                         }],
                         "customWidgetType": "vdCard"
                    }, {
                         "xtype": "form",
                         "displayName": "Communication Data",
                         "title": "Communication Data",
                         "name": "CommunicationData",
                         "itemId": "CommunicationDataForm",
                         "bodyPadding": 10,
                         "items": [{
                              "xtype": "form",
                              "itemId": "form2",
                              "customWidgetType": "vdAnchorLayout",
                              "header": {
                                   "hidden": true
                              },
                              "items": [{
                                   "layout": "column",
                                   "customWidgetType": "vdColumnLayout",
                                   "header": {
                                        "hidden": true
                                   },
                                   "xtype": "panel",
                                   "items": [{
                                        "name": "commGroupId",
                                        "itemId": "commGroupId",
                                        "xtype": "combo",
                                        "customWidgetType": "vdCombo",
                                        "displayName": "Communication Group",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Communication Group<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "F0AFCA02-01E9-4F3C-8EBD-021CF8A0E779",
                                        "restURL": "CommunicationGroup",
                                        "displayField": "primaryDisplay",
                                        "valueField": "primaryKey",
                                        "typeAhead": true,
                                        "queryMode": "local",
                                        "minChars": 2,
                                        "store": {
                                             "data": [],
                                             "model": "Hrproject.hrproject.shared.demo.model.contacts.CommunicationGroupModel"
                                        },
                                        "bindable": "coreContacts.communicationData.commGroupId",
                                        "columnWidth": 0.5,
                                        "listeners": {
                                             "change": "onCommGroupIdChange"
                                        }
                                   }, {
                                        "name": "commType",
                                        "itemId": "commType",
                                        "xtype": "combo",
                                        "customWidgetType": "vdCombo",
                                        "displayName": "Communication Type",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Communication Type<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "068DA09B-A70B-4AAE-9657-7039928B709A",
                                        "restURL": "CommunicationType",
                                        "displayField": "primaryDisplay",
                                        "valueField": "primaryKey",
                                        "typeAhead": true,
                                        "queryMode": "local",
                                        "minChars": 2,
                                        "store": {
                                             "data": [],
                                             "model": "Hrproject.hrproject.shared.demo.model.contacts.CommunicationTypeModel"
                                        },
                                        "bindable": "coreContacts.communicationData.commType",
                                        "columnWidth": 0.5
                                   }, {
                                        "name": "commData",
                                        "itemId": "commData",
                                        "xtype": "textfield",
                                        "customWidgetType": "vdTextfield",
                                        "displayName": "Communication Data",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Communication Data<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "A86F52FC-4385-48C5-ACA6-9E2F97D18856",
                                        "minLength": "0",
                                        "errorMessage": "please enter communication details",
                                        "bindable": "coreContacts.communicationData.commData",
                                        "columnWidth": 0.5
                                   }]
                              }]
                         }, {
                              "columnWidth": 1,
                              "xtype": "button",
                              "customWidgetType": "vdButton",
                              "maxWidth": 242,
                              "text": "Add CommunicationData",
                              "handler": "addCommunicationData"
                         }, {
                              "xtype": "grids",
                              "customWidgetType": "vdGrid",
                              "title": "CommunicationData",
                              "columnWidth": 1,
                              "itemId": "CommunicationDataGrid",
                              "fieldLabel": "List",
                              "bindLevel": "coreContacts.communicationData",
                              "bindable": "coreContacts.communicationData",
                              "listeners": {
                                   "select": "onCommunicationDataGridItemClick"
                              },
                              "store": {
                                   "fields": [],
                                   "data": []
                              },
                              "columns": [{
                                   "header": "commType",
                                   "text": "commType",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "commDataId",
                                   "hidden": true,
                                   "flex": 1
                              }, {
                                   "header": "Communication Group",
                                   "text": "Communication Group",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "commGroupId",
                                   "renderer": "renderFormValue",
                                   "flex": 1
                              }, {
                                   "header": "Communication Type",
                                   "text": "Communication Type",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "commType",
                                   "renderer": "renderFormValue",
                                   "flex": 1
                              }, {
                                   "header": "Communication Data",
                                   "text": "Communication Data",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "commData",
                                   "flex": 1
                              }, {
                                   "header": "createdBy",
                                   "text": "createdBy",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "createdBy",
                                   "hidden": true,
                                   "flex": 1
                              }, {
                                   "header": "createdDate",
                                   "text": "createdDate",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "createdDate",
                                   "hidden": true,
                                   "flex": 1
                              }, {
                                   "header": "updatedBy",
                                   "text": "updatedBy",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "updatedBy",
                                   "hidden": true,
                                   "flex": 1
                              }, {
                                   "header": "updatedDate",
                                   "text": "updatedDate",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "updatedDate",
                                   "hidden": true,
                                   "flex": 1
                              }, {
                                   "header": "versionId",
                                   "text": "versionId",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "versionId",
                                   "hidden": true,
                                   "flex": 1
                              }, {
                                   "header": "activeStatus",
                                   "text": "activeStatus",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "activeStatus",
                                   "hidden": true,
                                   "flex": 1
                              }, {
                                   "header": "txnAccessCode",
                                   "text": "txnAccessCode",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "txnAccessCode",
                                   "hidden": true,
                                   "flex": 1
                              }, {
                                   "xtype": "actioncolumn",
                                   "customWidgetType": "vdActionColumn",
                                   "width": 30,
                                   "sortable": false,
                                   "menuDisable": true,
                                   "items": [{
                                        "icon": "images/delete.gif",
                                        "tooltip": "Delete Record",
                                        "handler": "onDeleteActionColumnClick"
                                   }]
                              }]
                         }],
                         "customWidgetType": "vdCard"
                    }],
                    "customWidgetType": "vdCard"
               }],
               "tools": [{
                    "type": "help",
                    "tooltip": "Get Console",
                    "handler": "onConsoleClick"
               }, {
                    "type": "refresh",
                    "tooltip": "Refresh Tab",
                    "handler": "init"
               }],
               "layout": "card",
               "defaults": {
                    "autoScroll": true
               },
               "autoScroll": true,
               "dockedItems": [{
                    "xtype ": "toolbar",
                    "customWidgetType": "vdBBar",
                    "dock": "bottom",
                    "margin": 0,
                    "isDockedItem": true,
                    "items": [{
                         "xtype": "tbfill",
                         "customWidgetType": "vdTbFill"
                    }, {
                         "xtype": "button",
                         "customWidgetType": "vdButton",
                         "margin": "0 5 0 5",
                         "text": "Save",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "saveFormButton",
                         "listeners": {
                              "click": "saveForm"
                         }
                    }, {
                         "xtype": "button",
                         "customWidgetType": "vdButton",
                         "margin": "0 5 0 5",
                         "text": "Reset",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "resetFormButton",
                         "listeners": {
                              "click": "resetForm"
                         }
                    }],
                    "defaults": {
                         "margin": "0 5 0 5"
                    }
               }, {
                    "xtype": "toolbar",
                    "customWidgetType": "vdTBar",
                    "defaults": {
                         "margin": "0 5 0 5"
                    },
                    "isDockedItem": true,
                    "items": [{
                         "xtype": "tbfill",
                         "customWidgetType": "vdTbFill"
                    }, {
                         "xtype": "button",
                         "customWidgetType": "vdButton",
                         "itemId": "cardPrev",
                         "text": "&laquo; Previous",
                         "handler": "showPreviousCard",
                         "disabled": true,
                         "margin": "0 5 0 5"
                    }, {
                         "xtype": "button",
                         "customWidgetType": "vdButton",
                         "itemId": "cardNext",
                         "text": "Next &raquo;",
                         "handler": "showNextCard",
                         "margin": "0 5 0 5"
                    }]
               }],
               "viewModel": "EmpInformationViewModel",
               "listeners": {},
               "extend": "Ext.form.Panel",
               "region": "center",
               "customWidgetType": "vdCardLayout"
          }]
     }]
});