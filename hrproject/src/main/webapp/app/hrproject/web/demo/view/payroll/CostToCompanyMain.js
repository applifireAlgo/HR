Ext.define('Hrproject.hrproject.web.demo.view.payroll.CostToCompanyMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "controller": "CostToCompanyMainController",
     "restURL": "/CostToCompany",
     "defaults": {
          "split": true
     },
     "requires": ["Hrproject.hrproject.web.demo.controller.payroll.CostToCompanyMainController", "Hrproject.hrproject.shared.demo.model.employee.EmpInformationModel", "Hrproject.hrproject.shared.demo.viewmodel.payroll.CostToCompanyViewModel"],
     "tabPosition": "bottom",
     "communicationLog": [],
     "itemId": "CostToCompanyFormGridContainer",
     "items": [{
          "title": "Data Browser",
          "layout": "border",
          "autoScroll": false,
          "customWidgetType": "vdBorderLayout",
          "items": [{
               "region": "center",
               "layout": "border",
               "customWidgetType": "vdBorderLayout",
               "items": [{
                    "customWidgetType": "vdFormpanel",
                    "viewModel": "CostToCompanyViewModel",
                    "xtype": "form",
                    "displayName": "Cost To Company",
                    "title": "Cost To Company",
                    "name": "CostToCompany",
                    "itemId": "CostToCompany",
                    "bodyPadding": 10,
                    "items": [{
                         "name": "salaryId",
                         "itemId": "salaryId",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Applicant Id",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Applicant Id<font color='red'> *<\/font>",
                         "fieldId": "FA23B534-5708-4F86-9D55-E21ADE92CF1A",
                         "minLength": "0",
                         "maxLength": "64",
                         "hidden": true,
                         "value": "",
                         "bindable": "salaryId",
                         "bind": "{salaryId}"
                    }, {
                         "name": "empId",
                         "itemId": "empId",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "Employee",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Employee<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "9418CC64-1716-4F76-99FE-ABDDE218762F",
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
                         "bind": "{empId}"
                    }, {
                         "name": "totalCTC",
                         "itemId": "totalCTC",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Total CTC",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Total CTC<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "506D1EDF-4BAC-473A-BD74-E4DBE6C841BA",
                         "minValue": "0",
                         "bindable": "totalCTC",
                         "bind": "{totalCTC}"
                    }, {
                         "name": "basic",
                         "itemId": "basic",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Basic",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Basic<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "0531CC1A-21B9-4696-BE8F-64799B19DD75",
                         "minValue": "0",
                         "bindable": "basic",
                         "bind": "{basic}"
                    }, {
                         "name": "hra",
                         "itemId": "hra",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "HRA",
                         "margin": "5 5 5 5",
                         "fieldLabel": "HRA<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "B808451A-9EA2-4DD3-B4AA-CD29B60DAD11",
                         "minValue": "0",
                         "bindable": "hra",
                         "bind": "{hra}"
                    }, {
                         "name": "convenceAllowance",
                         "itemId": "convenceAllowance",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Convence Allowance",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Convence Allowance<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "23DAD1A3-7603-4FF2-9834-112C36757634",
                         "minValue": "0",
                         "bindable": "convenceAllowance",
                         "bind": "{convenceAllowance}"
                    }, {
                         "name": "medicalAllowance",
                         "itemId": "medicalAllowance",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Medical Allowance",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Medical Allowance<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "D066E8E1-0A56-47A5-907E-A88D935DEC20",
                         "minValue": "0",
                         "bindable": "medicalAllowance",
                         "bind": "{medicalAllowance}"
                    }, {
                         "name": "educationalAllowance",
                         "itemId": "educationalAllowance",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Educational Allowance",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Educational Allowance<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "6E5E2581-4DE0-42B2-9D38-D7243B22D77F",
                         "minValue": "0",
                         "bindable": "educationalAllowance",
                         "bind": "{educationalAllowance}"
                    }, {
                         "name": "specailAllowance",
                         "itemId": "specailAllowance",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Special Allowance",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Special Allowance<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "3BF4D167-B1FC-474F-856A-59516D3E62FB",
                         "minValue": "0",
                         "bindable": "specailAllowance",
                         "bind": "{specailAllowance}"
                    }, {
                         "name": "takeHome",
                         "itemId": "takeHome",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Take Home",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Take Home<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "E2C529AC-BF39-4F2D-9283-606A08F6ABD9",
                         "minValue": "0",
                         "bindable": "takeHome",
                         "bind": "{takeHome}"
                    }, {
                         "name": "perk",
                         "itemId": "perk",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Take Home",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Take Home<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "5F604ED3-C9EC-4230-BFA8-24F9F6BE229C",
                         "minValue": "0",
                         "bindable": "perk",
                         "bind": "{perk}"
                    }, {
                         "name": "year",
                         "itemId": "year",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Year",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Year<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "CA18679B-C6BF-46C0-A813-AC326E63E4E8",
                         "minValue": "0",
                         "maxValue": "10",
                         "bindable": "year",
                         "bind": "{year}"
                    }, {
                         "name": "versionId",
                         "itemId": "versionId",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "versionId",
                         "margin": "5 5 5 5",
                         "value": "-1",
                         "fieldLabel": "versionId",
                         "fieldId": "4CF1505A-7CBD-4C6E-9990-E6746B1C7B23",
                         "bindable": "versionId",
                         "bind": "{versionId}",
                         "hidden": true
                    }],
                    "layout": "column",
                    "defaults": {
                         "columnWidth": 0.5,
                         "labelAlign": "left",
                         "labelWidth": 200
                    },
                    "autoScroll": true,
                    "dockedItems": [{
                         "xtype ": "toolbar",
                         "customWidgetType": "vdBBar",
                         "dock": "bottom",
                         "ui": "footer",
                         "isDockedItem": true,
                         "parentId": 1,
                         "customId": 43,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill",
                              "parentId": 43,
                              "customId": 692
                         }, {
                              "customWidgetType": "vdButton",
                              "xtype": "button",
                              "margin": "0 5 0 5",
                              "text": "Save",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "saveFormButton",
                              "parentId": 43,
                              "customId": 693,
                              "listeners": {
                                   "click": "saveForm"
                              }
                         }, {
                              "customWidgetType": "vdButton",
                              "xtype": "button",
                              "margin": "0 5 0 5",
                              "text": "Reset",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "resetFormButton",
                              "parentId": 43,
                              "customId": 694,
                              "listeners": {
                                   "click": "resetForm"
                              }
                         }],
                         "defaults": {}
                    }],
                    "listeners": {
                         "scope": "controller"
                    },
                    "tools": [{
                         "type": "help",
                         "tooltip": "Console",
                         "handler": "onConsoleClick"
                    }, {
                         "type": "refresh",
                         "tooltip": "Refresh Tab",
                         "handler": "init"
                    }],
                    "extend": "Ext.form.Panel",
                    "region": "center"
               }, {
                    "xtype": "panel",
                    "layout": "border",
                    "customWidgetType": "vdPanel",
                    "title": "Details Grid",
                    "columns": [{
                         "header": "Applicant Id",
                         "dataIndex": "salaryId",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "primaryDisplay",
                         "dataIndex": "primaryDisplay",
                         "hidden": true
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
                         "header": "Total CTC",
                         "dataIndex": "totalCTC",
                         "flex": 1
                    }, {
                         "header": "Basic",
                         "dataIndex": "basic",
                         "flex": 1
                    }, {
                         "header": "HRA",
                         "dataIndex": "hra",
                         "flex": 1
                    }, {
                         "header": "Convence Allowance",
                         "dataIndex": "convenceAllowance",
                         "flex": 1
                    }, {
                         "header": "Medical Allowance",
                         "dataIndex": "medicalAllowance",
                         "flex": 1
                    }, {
                         "header": "Educational Allowance",
                         "dataIndex": "educationalAllowance",
                         "flex": 1
                    }, {
                         "header": "Special Allowance",
                         "dataIndex": "specailAllowance",
                         "flex": 1
                    }, {
                         "header": "Take Home",
                         "dataIndex": "takeHome",
                         "flex": 1
                    }, {
                         "header": "Take Home",
                         "dataIndex": "perk",
                         "flex": 1
                    }, {
                         "header": "Year",
                         "dataIndex": "year",
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
                    "items": [{
                         "xtype": "form",
                         "title": "Advance Search",
                         "region": "west",
                         "width": "20%",
                         "margin": "0 5 0 0",
                         "collapsible": true,
                         "collapsed": true,
                         "customWidgetType": "vdFormpanel",
                         "itemId": "queryPanel",
                         "dockedItems": [{
                              "xtype ": "toolbar",
                              "customWidgetType": "vdBBar",
                              "dock": "bottom",
                              "isDockedItem": true,
                              "items": [{
                                   "xtype": "tbfill",
                                   "customWidgetType": "vdTbFill"
                              }, {
                                   "xtype": "button",
                                   "customWidgetType": "vdButton",
                                   "text": "Filter",
                                   "handler": "onFilterClick"
                              }]
                         }],
                         "items": [{
                              "name": "empId",
                              "itemId": "empId",
                              "xtype": "combo",
                              "customWidgetType": "vdCombo",
                              "displayName": "Employee",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Employee",
                              "fieldId": "9418CC64-1716-4F76-99FE-ABDDE218762F",
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
                         }]
                    }, {
                         "region": "center",
                         "xtype": "gridpanel",
                         "customWidgetType": "vdGrid",
                         "displayName": "Cost To Company",
                         "name": "CostToCompanyGrid",
                         "itemId": "CostToCompanyGrid",
                         "restURL": "/CostToCompany",
                         "store": [],
                         "bodyPadding": 10,
                         "dockedItems": [{
                              "xtype": "toolbar",
                              "dock": "top",
                              "items": [{
                                   "xtype": "triggerfield",
                                   "emptyText": "search",
                                   "triggerCls": "",
                                   "listeners": {
                                        "change": "onTriggerfieldChange",
                                        "buffer": 250
                                   }
                              }]
                         }],
                         "columns": [{
                              "header": "Applicant Id",
                              "dataIndex": "salaryId",
                              "hidden": true,
                              "flex": 1
                         }, {
                              "header": "primaryDisplay",
                              "dataIndex": "primaryDisplay",
                              "hidden": true
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
                              "header": "Total CTC",
                              "dataIndex": "totalCTC",
                              "flex": 1
                         }, {
                              "header": "Basic",
                              "dataIndex": "basic",
                              "flex": 1
                         }, {
                              "header": "HRA",
                              "dataIndex": "hra",
                              "flex": 1
                         }, {
                              "header": "Convence Allowance",
                              "dataIndex": "convenceAllowance",
                              "flex": 1
                         }, {
                              "header": "Medical Allowance",
                              "dataIndex": "medicalAllowance",
                              "flex": 1
                         }, {
                              "header": "Educational Allowance",
                              "dataIndex": "educationalAllowance",
                              "flex": 1
                         }, {
                              "header": "Special Allowance",
                              "dataIndex": "specailAllowance",
                              "flex": 1
                         }, {
                              "header": "Take Home",
                              "dataIndex": "takeHome",
                              "flex": 1
                         }, {
                              "header": "Take Home",
                              "dataIndex": "perk",
                              "flex": 1
                         }, {
                              "header": "Year",
                              "dataIndex": "year",
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
                         }
                    }],
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
               "customWidgetType": "vdFormpanel",
               "viewModel": "CostToCompanyViewModel",
               "xtype": "form",
               "displayName": "Cost To Company",
               "title": "Cost To Company",
               "name": "CostToCompany",
               "itemId": "CostToCompany",
               "bodyPadding": 10,
               "items": [{
                    "name": "salaryId",
                    "itemId": "salaryId",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "Applicant Id",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Applicant Id<font color='red'> *<\/font>",
                    "fieldId": "FA23B534-5708-4F86-9D55-E21ADE92CF1A",
                    "minLength": "0",
                    "maxLength": "64",
                    "hidden": true,
                    "value": "",
                    "bindable": "salaryId",
                    "bind": "{salaryId}"
               }, {
                    "name": "empId",
                    "itemId": "empId",
                    "xtype": "combo",
                    "customWidgetType": "vdCombo",
                    "displayName": "Employee",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Employee<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "9418CC64-1716-4F76-99FE-ABDDE218762F",
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
                    "bind": "{empId}"
               }, {
                    "name": "totalCTC",
                    "itemId": "totalCTC",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "Total CTC",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Total CTC<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "506D1EDF-4BAC-473A-BD74-E4DBE6C841BA",
                    "minValue": "0",
                    "bindable": "totalCTC",
                    "bind": "{totalCTC}"
               }, {
                    "name": "basic",
                    "itemId": "basic",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "Basic",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Basic<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "0531CC1A-21B9-4696-BE8F-64799B19DD75",
                    "minValue": "0",
                    "bindable": "basic",
                    "bind": "{basic}"
               }, {
                    "name": "hra",
                    "itemId": "hra",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "HRA",
                    "margin": "5 5 5 5",
                    "fieldLabel": "HRA<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "B808451A-9EA2-4DD3-B4AA-CD29B60DAD11",
                    "minValue": "0",
                    "bindable": "hra",
                    "bind": "{hra}"
               }, {
                    "name": "convenceAllowance",
                    "itemId": "convenceAllowance",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "Convence Allowance",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Convence Allowance<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "23DAD1A3-7603-4FF2-9834-112C36757634",
                    "minValue": "0",
                    "bindable": "convenceAllowance",
                    "bind": "{convenceAllowance}"
               }, {
                    "name": "medicalAllowance",
                    "itemId": "medicalAllowance",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "Medical Allowance",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Medical Allowance<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "D066E8E1-0A56-47A5-907E-A88D935DEC20",
                    "minValue": "0",
                    "bindable": "medicalAllowance",
                    "bind": "{medicalAllowance}"
               }, {
                    "name": "educationalAllowance",
                    "itemId": "educationalAllowance",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "Educational Allowance",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Educational Allowance<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "6E5E2581-4DE0-42B2-9D38-D7243B22D77F",
                    "minValue": "0",
                    "bindable": "educationalAllowance",
                    "bind": "{educationalAllowance}"
               }, {
                    "name": "specailAllowance",
                    "itemId": "specailAllowance",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "Special Allowance",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Special Allowance<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "3BF4D167-B1FC-474F-856A-59516D3E62FB",
                    "minValue": "0",
                    "bindable": "specailAllowance",
                    "bind": "{specailAllowance}"
               }, {
                    "name": "takeHome",
                    "itemId": "takeHome",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "Take Home",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Take Home<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "E2C529AC-BF39-4F2D-9283-606A08F6ABD9",
                    "minValue": "0",
                    "bindable": "takeHome",
                    "bind": "{takeHome}"
               }, {
                    "name": "perk",
                    "itemId": "perk",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "Take Home",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Take Home<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "5F604ED3-C9EC-4230-BFA8-24F9F6BE229C",
                    "minValue": "0",
                    "bindable": "perk",
                    "bind": "{perk}"
               }, {
                    "name": "year",
                    "itemId": "year",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "Year",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Year<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "CA18679B-C6BF-46C0-A813-AC326E63E4E8",
                    "minValue": "0",
                    "maxValue": "10",
                    "bindable": "year",
                    "bind": "{year}"
               }, {
                    "name": "versionId",
                    "itemId": "versionId",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "versionId",
                    "margin": "5 5 5 5",
                    "value": "-1",
                    "fieldLabel": "versionId",
                    "fieldId": "4CF1505A-7CBD-4C6E-9990-E6746B1C7B23",
                    "bindable": "versionId",
                    "bind": "{versionId}",
                    "hidden": true
               }],
               "layout": "column",
               "defaults": {
                    "columnWidth": 0.5,
                    "labelAlign": "left",
                    "labelWidth": 200
               },
               "autoScroll": true,
               "dockedItems": [{
                    "xtype ": "toolbar",
                    "customWidgetType": "vdBBar",
                    "dock": "bottom",
                    "ui": "footer",
                    "isDockedItem": true,
                    "parentId": 1,
                    "customId": 43,
                    "items": [{
                         "xtype": "tbfill",
                         "customWidgetType": "vdTbFill",
                         "parentId": 43,
                         "customId": 692
                    }, {
                         "customWidgetType": "vdButton",
                         "xtype": "button",
                         "margin": "0 5 0 5",
                         "text": "Save",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "saveFormButton",
                         "parentId": 43,
                         "customId": 693,
                         "listeners": {
                              "click": "saveForm"
                         }
                    }, {
                         "customWidgetType": "vdButton",
                         "xtype": "button",
                         "margin": "0 5 0 5",
                         "text": "Reset",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "resetFormButton",
                         "parentId": 43,
                         "customId": 694,
                         "listeners": {
                              "click": "resetForm"
                         }
                    }],
                    "defaults": {}
               }],
               "listeners": {
                    "scope": "controller"
               },
               "tools": [{
                    "type": "help",
                    "tooltip": "Console",
                    "handler": "onConsoleClick"
               }, {
                    "type": "refresh",
                    "tooltip": "Refresh Tab",
                    "handler": "init"
               }],
               "extend": "Ext.form.Panel",
               "region": "center"
          }]
     }]
});