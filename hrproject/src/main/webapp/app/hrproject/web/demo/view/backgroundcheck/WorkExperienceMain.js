Ext.define('Hrproject.hrproject.web.demo.view.backgroundcheck.WorkExperienceMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "WorkExperienceMainController",
     "restURL": "/WorkExperience",
     "defaults": {
          "split": true
     },
     "requires": ["Hrproject.hrproject.shared.demo.model.backgroundcheck.WorkExperienceModel", "Hrproject.hrproject.web.demo.controller.backgroundcheck.WorkExperienceMainController", "Hrproject.hrproject.shared.demo.model.employee.EmpInformationModel", "Hrproject.view.fw.component.Grids", "Hrproject.hrproject.shared.demo.model.documentmanager.DocumentTypeModel", "Hrproject.view.fw.component.DateFields", "Hrproject.hrproject.shared.demo.viewmodel.backgroundcheck.WorkExperienceViewModel"],
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
               "displayName": "Work Experience",
               "name": "WorkExperienceTreeContainer",
               "itemId": "WorkExperienceTreeContainer",
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
                    "itemId": "WorkExperienceTree",
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
                         "name": "empId",
                         "itemId": "empId",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "Employee",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Employee",
                         "fieldId": "0A09D9BB-6F81-4EC3-8AC0-A8DF8741AC54",
                         "restURL": "EmpInformation",
                         "displayField": "primaryDisplay",
                         "valueField": "primaryKey",
                         "typeAhead": true,
                         "queryMode": "local",
                         "minChars": 2,
                         "store": {
                              "data": [],
                              "model": "Hrproject.hrproject.shared.demo.model.employee.EmpInformationModel"
                         }
                    }, {
                         "name": "previousCompany",
                         "itemId": "previousCompany",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Previous Company",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Previous Company",
                         "fieldId": "246165E4-80A1-4FC1-8511-93489B86B8FC",
                         "minLength": "0",
                         "maxLength": "256"
                    }, {
                         "name": "duration",
                         "itemId": "duration",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Duration",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Duration",
                         "fieldId": "908FD3EB-5A73-44A8-9801-8A05CF0E5BA6",
                         "minLength": "0",
                         "maxLength": "128"
                    }, {
                         "name": "immediateSupervisor",
                         "itemId": "immediateSupervisor",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Immediate Supervisor",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Immediate Supervisor",
                         "fieldId": "C3361229-DAC0-4BFB-BB3B-F542E093B43F",
                         "minLength": "0",
                         "maxLength": "128"
                    }, {
                         "name": "supervisorContactNo",
                         "itemId": "supervisorContactNo",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Supervisor Contact No",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Supervisor Contact No",
                         "fieldId": "3ED7190E-59D8-4D5B-8429-918553737FF4",
                         "minValue": "0",
                         "maxValue": "10"
                    }, {
                         "name": "worknResponsibilities",
                         "itemId": "worknResponsibilities",
                         "xtype": "textareafield",
                         "customWidgetType": "vdTextareafield",
                         "displayName": "Work And Responsibilities",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Work And Responsibilities",
                         "fieldId": "ACF5FE4B-D859-4B99-92BD-05A2423B2D3B"
                    }, {
                         "name": "jobTitle",
                         "itemId": "jobTitle",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Job Title",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Job Title",
                         "fieldId": "2810C369-73E2-45BF-92BE-1A433F83C434",
                         "minLength": "0",
                         "maxLength": "128"
                    }, {
                         "name": "reasonForLeaving",
                         "itemId": "reasonForLeaving",
                         "xtype": "textareafield",
                         "customWidgetType": "vdTextareafield",
                         "displayName": "Reason For Leaving",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Reason For Leaving",
                         "fieldId": "22759BDB-3E9F-4ABC-A832-B13B51EE450F"
                    }, {
                         "name": "salaryPerAanum",
                         "itemId": "salaryPerAanum",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Salary Per Annum",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Salary Per Annum",
                         "fieldId": "6075A401-512C-4F32-B79D-8A618875C185",
                         "minLength": "0",
                         "maxLength": "128"
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
                    "displayName": "Work Experience",
                    "name": "WorkExperience",
                    "itemId": "WorkExperienceForm",
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
                                   "name": "workPk",
                                   "itemId": "workPk",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "workPk",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "workPk<font color='red'> *<\/font>",
                                   "fieldId": "71074042-D92C-4D7D-98E2-F5A81D4408E9",
                                   "minLength": "0",
                                   "maxLength": "64",
                                   "hidden": true,
                                   "value": "",
                                   "bindable": "workPk",
                                   "bind": "{workPk}"
                              }, {
                                   "name": "empId",
                                   "itemId": "empId",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "Employee",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Employee<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "0A09D9BB-6F81-4EC3-8AC0-A8DF8741AC54",
                                   "restURL": "EmpInformation",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "typeAhead": true,
                                   "queryMode": "local",
                                   "minChars": 2,
                                   "store": {
                                        "data": [],
                                        "model": "Hrproject.hrproject.shared.demo.model.employee.EmpInformationModel"
                                   },
                                   "bindable": "empId",
                                   "columnWidth": 0.5,
                                   "bind": "{empId}"
                              }, {
                                   "name": "previousCompany",
                                   "itemId": "previousCompany",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Previous Company",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Previous Company<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "246165E4-80A1-4FC1-8511-93489B86B8FC",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "bindable": "previousCompany",
                                   "columnWidth": 0.5,
                                   "bind": "{previousCompany}"
                              }, {
                                   "name": "duration",
                                   "itemId": "duration",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Duration",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Duration<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "908FD3EB-5A73-44A8-9801-8A05CF0E5BA6",
                                   "minLength": "0",
                                   "maxLength": "128",
                                   "bindable": "duration",
                                   "columnWidth": 0.5,
                                   "bind": "{duration}"
                              }, {
                                   "name": "immediateSupervisor",
                                   "itemId": "immediateSupervisor",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Immediate Supervisor",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Immediate Supervisor<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "C3361229-DAC0-4BFB-BB3B-F542E093B43F",
                                   "minLength": "0",
                                   "maxLength": "128",
                                   "bindable": "immediateSupervisor",
                                   "columnWidth": 0.5,
                                   "bind": "{immediateSupervisor}"
                              }, {
                                   "name": "supervisorContactNo",
                                   "itemId": "supervisorContactNo",
                                   "xtype": "numberfield",
                                   "customWidgetType": "vdNumberfield",
                                   "displayName": "Supervisor Contact No",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Supervisor Contact No<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "3ED7190E-59D8-4D5B-8429-918553737FF4",
                                   "minValue": "0",
                                   "maxValue": "10",
                                   "bindable": "supervisorContactNo",
                                   "columnWidth": 0.5,
                                   "bind": "{supervisorContactNo}"
                              }, {
                                   "name": "worknResponsibilities",
                                   "itemId": "worknResponsibilities",
                                   "xtype": "textareafield",
                                   "customWidgetType": "vdTextareafield",
                                   "displayName": "Work And Responsibilities",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Work And Responsibilities<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "ACF5FE4B-D859-4B99-92BD-05A2423B2D3B",
                                   "bindable": "worknResponsibilities",
                                   "columnWidth": 0.5,
                                   "bind": "{worknResponsibilities}"
                              }, {
                                   "name": "jobTitle",
                                   "itemId": "jobTitle",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Job Title",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Job Title<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "2810C369-73E2-45BF-92BE-1A433F83C434",
                                   "minLength": "0",
                                   "maxLength": "128",
                                   "bindable": "jobTitle",
                                   "columnWidth": 0.5,
                                   "bind": "{jobTitle}"
                              }, {
                                   "name": "reasonForLeaving",
                                   "itemId": "reasonForLeaving",
                                   "xtype": "textareafield",
                                   "customWidgetType": "vdTextareafield",
                                   "displayName": "Reason For Leaving",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Reason For Leaving<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "22759BDB-3E9F-4ABC-A832-B13B51EE450F",
                                   "bindable": "reasonForLeaving",
                                   "columnWidth": 0.5,
                                   "bind": "{reasonForLeaving}"
                              }, {
                                   "name": "salaryPerAanum",
                                   "itemId": "salaryPerAanum",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Salary Per Annum",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Salary Per Annum<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "6075A401-512C-4F32-B79D-8A618875C185",
                                   "minLength": "0",
                                   "maxLength": "128",
                                   "bindable": "salaryPerAanum",
                                   "columnWidth": 0.5,
                                   "bind": "{salaryPerAanum}"
                              }, {
                                   "name": "versionId",
                                   "itemId": "versionId",
                                   "xtype": "numberfield",
                                   "customWidgetType": "vdNumberfield",
                                   "displayName": "versionId",
                                   "margin": "5 5 5 5",
                                   "value": "-1",
                                   "fieldLabel": "versionId",
                                   "fieldId": "2877D17D-725A-4F4C-87A5-F03F63312D29",
                                   "bindable": "versionId",
                                   "bind": "{versionId}",
                                   "hidden": true
                              }]
                         }]
                    }, {
                         "xtype": "form",
                         "displayName": "Document List",
                         "title": "Document List",
                         "name": "DocumentList",
                         "itemId": "DocumentListForm",
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
                                        "name": "docTypeCode",
                                        "itemId": "docTypeCode",
                                        "xtype": "combo",
                                        "customWidgetType": "vdCombo",
                                        "displayName": "Doc Type Code",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Doc Type Code<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "E3DFF558-AA2A-45CC-9030-17F531AB13C6",
                                        "restURL": "DocumentType",
                                        "displayField": "primaryDisplay",
                                        "valueField": "primaryKey",
                                        "typeAhead": true,
                                        "queryMode": "local",
                                        "minChars": 2,
                                        "store": {
                                             "data": [],
                                             "model": "Hrproject.hrproject.shared.demo.model.documentmanager.DocumentTypeModel"
                                        },
                                        "bindable": "documentList.docTypeCode",
                                        "columnWidth": 0.5
                                   }, {
                                        "name": "docName",
                                        "itemId": "docName",
                                        "xtype": "textfield",
                                        "customWidgetType": "vdTextfield",
                                        "displayName": "Doc Name",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Doc Name<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "DD0EA5CE-D79B-4F33-9D20-11F144D63A3A",
                                        "minLength": "0",
                                        "maxLength": "512",
                                        "errorMessage": "Please enter valid Document Name",
                                        "bindable": "documentList.docName",
                                        "columnWidth": 0.5
                                   }, {
                                        "name": "docFile",
                                        "itemId": "docFile",
                                        "xtype": "textfield",
                                        "customWidgetType": "vdTextfield",
                                        "displayName": "Doc File",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Doc File<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "2663E550-29C5-4094-BC43-0C340504360F",
                                        "minLength": "0",
                                        "maxLength": "128",
                                        "bindable": "documentList.docFile",
                                        "columnWidth": 0.5
                                   }, {
                                        "name": "docDesc",
                                        "itemId": "docDesc",
                                        "xtype": "textareafield",
                                        "customWidgetType": "vdTextareafield",
                                        "displayName": "Doc Desc",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Doc Desc",
                                        "fieldId": "14E58370-ED3B-4577-AA1B-42AB9E73D90B",
                                        "bindable": "documentList.docDesc",
                                        "columnWidth": 0.5
                                   }, {
                                        "name": "docDate",
                                        "itemId": "docDate",
                                        "xtype": "datefields",
                                        "customWidgetType": "vdDatefield",
                                        "displayName": "Doc Date",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Doc Date",
                                        "fieldId": "F3D5190E-A134-472F-B8DB-5A60D82CD829",
                                        "bindable": "documentList.docDate",
                                        "columnWidth": 0.5
                                   }]
                              }]
                         }, {
                              "columnWidth": 1,
                              "xtype": "button",
                              "customWidgetType": "vdButton",
                              "maxWidth": 187,
                              "text": "Add DocumentList",
                              "handler": "addDocumentList"
                         }, {
                              "xtype": "grids",
                              "customWidgetType": "vdGrid",
                              "title": "DocumentList",
                              "columnWidth": 1,
                              "itemId": "DocumentListGrid",
                              "fieldLabel": "List",
                              "bindLevel": "documentList",
                              "bindable": "documentList",
                              "listeners": {
                                   "select": "onDocumentListGridItemClick"
                              },
                              "store": {
                                   "fields": [],
                                   "data": []
                              },
                              "columns": [{
                                   "header": "Doc Id",
                                   "text": "Doc Id",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "docId",
                                   "hidden": true,
                                   "flex": 1
                              }, {
                                   "header": "Doc Type Code",
                                   "text": "Doc Type Code",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "docTypeCode",
                                   "renderer": "renderFormValue",
                                   "flex": 1
                              }, {
                                   "header": "Doc Name",
                                   "text": "Doc Name",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "docName",
                                   "flex": 1
                              }, {
                                   "header": "Doc File",
                                   "text": "Doc File",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "docFile",
                                   "flex": 1
                              }, {
                                   "header": "Doc Desc",
                                   "text": "Doc Desc",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "docDesc",
                                   "flex": 1
                              }, {
                                   "header": "Doc Date",
                                   "text": "Doc Date",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "docDate",
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
                    "viewModel": "WorkExperienceViewModel",
                    "listeners": {},
                    "extend": "Ext.form.Panel",
                    "region": "center",
                    "customWidgetType": "vdCardLayout"
               }, {
                    "xtype": "grid",
                    "customWidgetType": "vdGrid",
                    "displayName": "Work Experience",
                    "title": "Details Grid",
                    "name": "WorkExperienceGrid",
                    "itemId": "WorkExperienceGrid",
                    "store": [],
                    "bodyPadding": 10,
                    "requires": [],
                    "columns": [{
                         "header": "workPk",
                         "dataIndex": "workPk",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "primaryKey",
                         "dataIndex": "primaryKey",
                         "hidden": true
                    }, {
                         "header": "Employee",
                         "dataIndex": "empId",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "Previous Company",
                         "dataIndex": "previousCompany",
                         "flex": 1
                    }, {
                         "header": "Duration",
                         "dataIndex": "duration",
                         "flex": 1
                    }, {
                         "header": "Immediate Supervisor",
                         "dataIndex": "immediateSupervisor",
                         "flex": 1
                    }, {
                         "header": "Supervisor Contact No",
                         "dataIndex": "supervisorContactNo",
                         "flex": 1
                    }, {
                         "header": "Work And Responsibilities",
                         "dataIndex": "worknResponsibilities",
                         "flex": 1
                    }, {
                         "header": "Job Title",
                         "dataIndex": "jobTitle",
                         "flex": 1
                    }, {
                         "header": "Reason For Leaving",
                         "dataIndex": "reasonForLeaving",
                         "flex": 1
                    }, {
                         "header": "Salary Per Annum",
                         "dataIndex": "salaryPerAanum",
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
               "displayName": "Work Experience",
               "name": "WorkExperience",
               "itemId": "WorkExperienceForm",
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
                              "name": "workPk",
                              "itemId": "workPk",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "workPk",
                              "margin": "5 5 5 5",
                              "fieldLabel": "workPk<font color='red'> *<\/font>",
                              "fieldId": "71074042-D92C-4D7D-98E2-F5A81D4408E9",
                              "minLength": "0",
                              "maxLength": "64",
                              "hidden": true,
                              "value": "",
                              "bindable": "workPk",
                              "bind": "{workPk}"
                         }, {
                              "name": "empId",
                              "itemId": "empId",
                              "xtype": "combo",
                              "customWidgetType": "vdCombo",
                              "displayName": "Employee",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Employee<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "0A09D9BB-6F81-4EC3-8AC0-A8DF8741AC54",
                              "restURL": "EmpInformation",
                              "displayField": "primaryDisplay",
                              "valueField": "primaryKey",
                              "typeAhead": true,
                              "queryMode": "local",
                              "minChars": 2,
                              "store": {
                                   "data": [],
                                   "model": "Hrproject.hrproject.shared.demo.model.employee.EmpInformationModel"
                              },
                              "bindable": "empId",
                              "columnWidth": 0.5,
                              "bind": "{empId}"
                         }, {
                              "name": "previousCompany",
                              "itemId": "previousCompany",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "Previous Company",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Previous Company<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "246165E4-80A1-4FC1-8511-93489B86B8FC",
                              "minLength": "0",
                              "maxLength": "256",
                              "bindable": "previousCompany",
                              "columnWidth": 0.5,
                              "bind": "{previousCompany}"
                         }, {
                              "name": "duration",
                              "itemId": "duration",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "Duration",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Duration<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "908FD3EB-5A73-44A8-9801-8A05CF0E5BA6",
                              "minLength": "0",
                              "maxLength": "128",
                              "bindable": "duration",
                              "columnWidth": 0.5,
                              "bind": "{duration}"
                         }, {
                              "name": "immediateSupervisor",
                              "itemId": "immediateSupervisor",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "Immediate Supervisor",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Immediate Supervisor<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "C3361229-DAC0-4BFB-BB3B-F542E093B43F",
                              "minLength": "0",
                              "maxLength": "128",
                              "bindable": "immediateSupervisor",
                              "columnWidth": 0.5,
                              "bind": "{immediateSupervisor}"
                         }, {
                              "name": "supervisorContactNo",
                              "itemId": "supervisorContactNo",
                              "xtype": "numberfield",
                              "customWidgetType": "vdNumberfield",
                              "displayName": "Supervisor Contact No",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Supervisor Contact No<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "3ED7190E-59D8-4D5B-8429-918553737FF4",
                              "minValue": "0",
                              "maxValue": "10",
                              "bindable": "supervisorContactNo",
                              "columnWidth": 0.5,
                              "bind": "{supervisorContactNo}"
                         }, {
                              "name": "worknResponsibilities",
                              "itemId": "worknResponsibilities",
                              "xtype": "textareafield",
                              "customWidgetType": "vdTextareafield",
                              "displayName": "Work And Responsibilities",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Work And Responsibilities<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "ACF5FE4B-D859-4B99-92BD-05A2423B2D3B",
                              "bindable": "worknResponsibilities",
                              "columnWidth": 0.5,
                              "bind": "{worknResponsibilities}"
                         }, {
                              "name": "jobTitle",
                              "itemId": "jobTitle",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "Job Title",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Job Title<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "2810C369-73E2-45BF-92BE-1A433F83C434",
                              "minLength": "0",
                              "maxLength": "128",
                              "bindable": "jobTitle",
                              "columnWidth": 0.5,
                              "bind": "{jobTitle}"
                         }, {
                              "name": "reasonForLeaving",
                              "itemId": "reasonForLeaving",
                              "xtype": "textareafield",
                              "customWidgetType": "vdTextareafield",
                              "displayName": "Reason For Leaving",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Reason For Leaving<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "22759BDB-3E9F-4ABC-A832-B13B51EE450F",
                              "bindable": "reasonForLeaving",
                              "columnWidth": 0.5,
                              "bind": "{reasonForLeaving}"
                         }, {
                              "name": "salaryPerAanum",
                              "itemId": "salaryPerAanum",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "Salary Per Annum",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Salary Per Annum<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "6075A401-512C-4F32-B79D-8A618875C185",
                              "minLength": "0",
                              "maxLength": "128",
                              "bindable": "salaryPerAanum",
                              "columnWidth": 0.5,
                              "bind": "{salaryPerAanum}"
                         }, {
                              "name": "versionId",
                              "itemId": "versionId",
                              "xtype": "numberfield",
                              "customWidgetType": "vdNumberfield",
                              "displayName": "versionId",
                              "margin": "5 5 5 5",
                              "value": "-1",
                              "fieldLabel": "versionId",
                              "fieldId": "2877D17D-725A-4F4C-87A5-F03F63312D29",
                              "bindable": "versionId",
                              "bind": "{versionId}",
                              "hidden": true
                         }]
                    }]
               }, {
                    "xtype": "form",
                    "displayName": "Document List",
                    "title": "Document List",
                    "name": "DocumentList",
                    "itemId": "DocumentListForm",
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
                                   "name": "docTypeCode",
                                   "itemId": "docTypeCode",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "Doc Type Code",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Doc Type Code<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "E3DFF558-AA2A-45CC-9030-17F531AB13C6",
                                   "restURL": "DocumentType",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "typeAhead": true,
                                   "queryMode": "local",
                                   "minChars": 2,
                                   "store": {
                                        "data": [],
                                        "model": "Hrproject.hrproject.shared.demo.model.documentmanager.DocumentTypeModel"
                                   },
                                   "bindable": "documentList.docTypeCode",
                                   "columnWidth": 0.5
                              }, {
                                   "name": "docName",
                                   "itemId": "docName",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Doc Name",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Doc Name<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "DD0EA5CE-D79B-4F33-9D20-11F144D63A3A",
                                   "minLength": "0",
                                   "maxLength": "512",
                                   "errorMessage": "Please enter valid Document Name",
                                   "bindable": "documentList.docName",
                                   "columnWidth": 0.5
                              }, {
                                   "name": "docFile",
                                   "itemId": "docFile",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Doc File",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Doc File<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "2663E550-29C5-4094-BC43-0C340504360F",
                                   "minLength": "0",
                                   "maxLength": "128",
                                   "bindable": "documentList.docFile",
                                   "columnWidth": 0.5
                              }, {
                                   "name": "docDesc",
                                   "itemId": "docDesc",
                                   "xtype": "textareafield",
                                   "customWidgetType": "vdTextareafield",
                                   "displayName": "Doc Desc",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Doc Desc",
                                   "fieldId": "14E58370-ED3B-4577-AA1B-42AB9E73D90B",
                                   "bindable": "documentList.docDesc",
                                   "columnWidth": 0.5
                              }, {
                                   "name": "docDate",
                                   "itemId": "docDate",
                                   "xtype": "datefields",
                                   "customWidgetType": "vdDatefield",
                                   "displayName": "Doc Date",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Doc Date",
                                   "fieldId": "F3D5190E-A134-472F-B8DB-5A60D82CD829",
                                   "bindable": "documentList.docDate",
                                   "columnWidth": 0.5
                              }]
                         }]
                    }, {
                         "columnWidth": 1,
                         "xtype": "button",
                         "customWidgetType": "vdButton",
                         "maxWidth": 187,
                         "text": "Add DocumentList",
                         "handler": "addDocumentList"
                    }, {
                         "xtype": "grids",
                         "customWidgetType": "vdGrid",
                         "title": "DocumentList",
                         "columnWidth": 1,
                         "itemId": "DocumentListGrid",
                         "fieldLabel": "List",
                         "bindLevel": "documentList",
                         "bindable": "documentList",
                         "listeners": {
                              "select": "onDocumentListGridItemClick"
                         },
                         "store": {
                              "fields": [],
                              "data": []
                         },
                         "columns": [{
                              "header": "Doc Id",
                              "text": "Doc Id",
                              "customWidgetType": "vdGridColumn",
                              "dataIndex": "docId",
                              "hidden": true,
                              "flex": 1
                         }, {
                              "header": "Doc Type Code",
                              "text": "Doc Type Code",
                              "customWidgetType": "vdGridColumn",
                              "dataIndex": "docTypeCode",
                              "renderer": "renderFormValue",
                              "flex": 1
                         }, {
                              "header": "Doc Name",
                              "text": "Doc Name",
                              "customWidgetType": "vdGridColumn",
                              "dataIndex": "docName",
                              "flex": 1
                         }, {
                              "header": "Doc File",
                              "text": "Doc File",
                              "customWidgetType": "vdGridColumn",
                              "dataIndex": "docFile",
                              "flex": 1
                         }, {
                              "header": "Doc Desc",
                              "text": "Doc Desc",
                              "customWidgetType": "vdGridColumn",
                              "dataIndex": "docDesc",
                              "flex": 1
                         }, {
                              "header": "Doc Date",
                              "text": "Doc Date",
                              "customWidgetType": "vdGridColumn",
                              "dataIndex": "docDate",
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
               "viewModel": "WorkExperienceViewModel",
               "listeners": {},
               "extend": "Ext.form.Panel",
               "region": "center",
               "customWidgetType": "vdCardLayout"
          }]
     }]
});