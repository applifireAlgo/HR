Ext.define('Hrproject.hrproject.web.demo.view.payroll.PaySlipMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "controller": "PaySlipMainController",
     "restURL": "/PaySlip",
     "defaults": {
          "split": true
     },
     "requires": ["Hrproject.hrproject.web.demo.controller.payroll.PaySlipMainController", "Hrproject.hrproject.shared.demo.model.employee.EmpInformationModel", "Hrproject.hrproject.shared.demo.viewmodel.payroll.PaySlipViewModel"],
     "tabPosition": "bottom",
     "communicationLog": [],
     "itemId": "PaySlipFormGridContainer",
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
                    "viewModel": "PaySlipViewModel",
                    "xtype": "form",
                    "displayName": "Pay Slip",
                    "title": "Pay Slip",
                    "name": "PaySlip",
                    "itemId": "PaySlip",
                    "bodyPadding": 10,
                    "items": [{
                         "name": "salaryId",
                         "itemId": "salaryId",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Applicant Id",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Applicant Id<font color='red'> *<\/font>",
                         "fieldId": "F431144F-E889-46A8-A245-82170A97BDE1",
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
                         "fieldId": "3182C369-85DE-46E7-8F13-0D829CF84BE6",
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
                         "name": "basic",
                         "itemId": "basic",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Basic",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Basic<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "E376E65E-BDAC-4A3C-A0EA-6B41991F8E8B",
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
                         "fieldId": "4365AE5F-6832-495E-AA3C-2363C13BC921",
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
                         "fieldId": "E2D4DB34-87EF-4F02-AE87-5855804C9F13",
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
                         "fieldId": "55F42234-4203-41C9-B11A-66648A750607",
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
                         "fieldId": "7F714B3C-101E-4734-BB00-D2AD22BCDE10",
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
                         "fieldId": "F389728B-BC35-4CFD-ADF9-80B4BB2BC84C",
                         "minValue": "0",
                         "bindable": "specailAllowance",
                         "bind": "{specailAllowance}"
                    }, {
                         "name": "tax",
                         "itemId": "tax",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Total Tax",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Total Tax<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "B08B2E3F-E588-4B4D-BB8B-399CE7022CB9",
                         "minValue": "0",
                         "bindable": "tax",
                         "bind": "{tax}"
                    }, {
                         "name": "takeHome",
                         "itemId": "takeHome",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Take Home",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Take Home<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "224C52A3-1E57-40B4-9AFE-AB49CD99F2DC",
                         "minValue": "0",
                         "bindable": "takeHome",
                         "bind": "{takeHome}"
                    }, {
                         "name": "year",
                         "itemId": "year",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Year",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Year<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "9170FD92-13E5-41EE-AE6B-E875783CF995",
                         "minValue": "0",
                         "maxValue": "10",
                         "bindable": "year",
                         "bind": "{year}"
                    }, {
                         "name": "month",
                         "itemId": "month",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Month",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Month<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "19FF4901-8E01-4BE5-AB58-3CAC7A1161AE",
                         "minValue": "0",
                         "maxValue": "10",
                         "bindable": "month",
                         "bind": "{month}"
                    }, {
                         "name": "lop",
                         "itemId": "lop",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Loss Of Pay",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Loss Of Pay<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "76391273-30FB-4961-8D24-92ADFC8AA608",
                         "minValue": "0",
                         "bindable": "lop",
                         "bind": "{lop}"
                    }, {
                         "name": "versionId",
                         "itemId": "versionId",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "versionId",
                         "margin": "5 5 5 5",
                         "value": "-1",
                         "fieldLabel": "versionId",
                         "fieldId": "4410D1DF-6A7E-409F-B688-5200BB16BAA7",
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
                         "customId": 234,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill",
                              "parentId": 234,
                              "customId": 386
                         }, {
                              "customWidgetType": "vdButton",
                              "xtype": "button",
                              "margin": "0 5 0 5",
                              "text": "Save",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "saveFormButton",
                              "parentId": 234,
                              "customId": 387,
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
                              "parentId": 234,
                              "customId": 388,
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
                         "header": "Total Tax",
                         "dataIndex": "tax",
                         "flex": 1
                    }, {
                         "header": "Take Home",
                         "dataIndex": "takeHome",
                         "flex": 1
                    }, {
                         "header": "Year",
                         "dataIndex": "year",
                         "flex": 1
                    }, {
                         "header": "Month",
                         "dataIndex": "month",
                         "flex": 1
                    }, {
                         "header": "Loss Of Pay",
                         "dataIndex": "lop",
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
                              "fieldId": "3182C369-85DE-46E7-8F13-0D829CF84BE6",
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
                         "displayName": "Pay Slip",
                         "name": "PaySlipGrid",
                         "itemId": "PaySlipGrid",
                         "restURL": "/PaySlip",
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
                              "header": "Total Tax",
                              "dataIndex": "tax",
                              "flex": 1
                         }, {
                              "header": "Take Home",
                              "dataIndex": "takeHome",
                              "flex": 1
                         }, {
                              "header": "Year",
                              "dataIndex": "year",
                              "flex": 1
                         }, {
                              "header": "Month",
                              "dataIndex": "month",
                              "flex": 1
                         }, {
                              "header": "Loss Of Pay",
                              "dataIndex": "lop",
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
               "viewModel": "PaySlipViewModel",
               "xtype": "form",
               "displayName": "Pay Slip",
               "title": "Pay Slip",
               "name": "PaySlip",
               "itemId": "PaySlip",
               "bodyPadding": 10,
               "items": [{
                    "name": "salaryId",
                    "itemId": "salaryId",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "Applicant Id",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Applicant Id<font color='red'> *<\/font>",
                    "fieldId": "F431144F-E889-46A8-A245-82170A97BDE1",
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
                    "fieldId": "3182C369-85DE-46E7-8F13-0D829CF84BE6",
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
                    "name": "basic",
                    "itemId": "basic",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "Basic",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Basic<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "E376E65E-BDAC-4A3C-A0EA-6B41991F8E8B",
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
                    "fieldId": "4365AE5F-6832-495E-AA3C-2363C13BC921",
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
                    "fieldId": "E2D4DB34-87EF-4F02-AE87-5855804C9F13",
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
                    "fieldId": "55F42234-4203-41C9-B11A-66648A750607",
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
                    "fieldId": "7F714B3C-101E-4734-BB00-D2AD22BCDE10",
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
                    "fieldId": "F389728B-BC35-4CFD-ADF9-80B4BB2BC84C",
                    "minValue": "0",
                    "bindable": "specailAllowance",
                    "bind": "{specailAllowance}"
               }, {
                    "name": "tax",
                    "itemId": "tax",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "Total Tax",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Total Tax<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "B08B2E3F-E588-4B4D-BB8B-399CE7022CB9",
                    "minValue": "0",
                    "bindable": "tax",
                    "bind": "{tax}"
               }, {
                    "name": "takeHome",
                    "itemId": "takeHome",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "Take Home",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Take Home<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "224C52A3-1E57-40B4-9AFE-AB49CD99F2DC",
                    "minValue": "0",
                    "bindable": "takeHome",
                    "bind": "{takeHome}"
               }, {
                    "name": "year",
                    "itemId": "year",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "Year",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Year<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "9170FD92-13E5-41EE-AE6B-E875783CF995",
                    "minValue": "0",
                    "maxValue": "10",
                    "bindable": "year",
                    "bind": "{year}"
               }, {
                    "name": "month",
                    "itemId": "month",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "Month",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Month<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "19FF4901-8E01-4BE5-AB58-3CAC7A1161AE",
                    "minValue": "0",
                    "maxValue": "10",
                    "bindable": "month",
                    "bind": "{month}"
               }, {
                    "name": "lop",
                    "itemId": "lop",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "Loss Of Pay",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Loss Of Pay<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "76391273-30FB-4961-8D24-92ADFC8AA608",
                    "minValue": "0",
                    "bindable": "lop",
                    "bind": "{lop}"
               }, {
                    "name": "versionId",
                    "itemId": "versionId",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "versionId",
                    "margin": "5 5 5 5",
                    "value": "-1",
                    "fieldLabel": "versionId",
                    "fieldId": "4410D1DF-6A7E-409F-B688-5200BB16BAA7",
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
                    "customId": 234,
                    "items": [{
                         "xtype": "tbfill",
                         "customWidgetType": "vdTbFill",
                         "parentId": 234,
                         "customId": 386
                    }, {
                         "customWidgetType": "vdButton",
                         "xtype": "button",
                         "margin": "0 5 0 5",
                         "text": "Save",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "saveFormButton",
                         "parentId": 234,
                         "customId": 387,
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
                         "parentId": 234,
                         "customId": 388,
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