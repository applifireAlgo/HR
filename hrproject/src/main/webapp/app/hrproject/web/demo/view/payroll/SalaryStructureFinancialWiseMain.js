Ext.define('Hrproject.hrproject.web.demo.view.payroll.SalaryStructureFinancialWiseMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "controller": "SalaryStructureFinancialWiseMainController",
     "restURL": "/SalaryStructureFinancialWise",
     "defaults": {
          "split": true
     },
     "requires": ["Hrproject.hrproject.web.demo.controller.payroll.SalaryStructureFinancialWiseMainController", "Hrproject.hrproject.shared.demo.model.employee.EmpInformationModel", "Hrproject.hrproject.shared.demo.viewmodel.payroll.SalaryStructureFinancialWiseViewModel"],
     "tabPosition": "bottom",
     "communicationLog": [],
     "itemId": "SalaryStructureFinancialWiseFormGridContainer",
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
                    "viewModel": "SalaryStructureFinancialWiseViewModel",
                    "xtype": "form",
                    "displayName": "Salary Structure Financial Wise",
                    "title": "Salary Structure Financial Wise",
                    "name": "SalaryStructureFinancialWise",
                    "itemId": "SalaryStructureFinancialWise",
                    "bodyPadding": 10,
                    "items": [{
                         "name": "salaryId",
                         "itemId": "salaryId",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Applicant Id",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Applicant Id<font color='red'> *<\/font>",
                         "fieldId": "A838BBF9-CF37-4E41-ADB1-0E7E90400347",
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
                         "fieldId": "8E8513EA-9D91-4294-9B36-682CA16CD226",
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
                         "fieldId": "2935B832-DBDB-495A-860C-8DC8BEA9EE7A",
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
                         "fieldId": "8FFFCA1B-0398-4281-8FDB-CB00D73BBC16",
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
                         "fieldId": "A8769303-D0FE-4266-AED8-417C808AA3EE",
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
                         "fieldId": "82B301E8-0297-4E52-9137-4359E44DB9FE",
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
                         "fieldId": "6C5FBD50-B7F2-4554-A6A0-281B5DE8EC23",
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
                         "fieldId": "36CBF66D-8057-4EBA-BFD6-41358901D8B7",
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
                         "fieldId": "8AB4D78A-09DC-4A5A-BEA8-2733C1C67548",
                         "minValue": "0",
                         "bindable": "specailAllowance",
                         "bind": "{specailAllowance}"
                    }, {
                         "name": "taxableAmount",
                         "itemId": "taxableAmount",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Taxable Amount",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Taxable Amount<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "81DCF843-BAB5-412D-AE2B-AD39E832CA70",
                         "minValue": "0",
                         "bindable": "taxableAmount",
                         "bind": "{taxableAmount}"
                    }, {
                         "name": "nonTaxableAmount",
                         "itemId": "nonTaxableAmount",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Non Taxable Amoount",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Non Taxable Amoount<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "25FF6F22-4237-489E-9C1E-AA28B4E00C1B",
                         "minValue": "0",
                         "bindable": "nonTaxableAmount",
                         "bind": "{nonTaxableAmount}"
                    }, {
                         "name": "totalTax",
                         "itemId": "totalTax",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Total Tax",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Total Tax<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "23FFDC05-56BF-4317-A577-C118C9B535E0",
                         "minValue": "0",
                         "bindable": "totalTax",
                         "bind": "{totalTax}"
                    }, {
                         "name": "takeHome",
                         "itemId": "takeHome",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Take Home",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Take Home<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "CD2D8882-98DD-4D9D-A6E8-CB80993D19CF",
                         "minValue": "0",
                         "bindable": "takeHome",
                         "bind": "{takeHome}"
                    }, {
                         "name": "salaryDrawn",
                         "itemId": "salaryDrawn",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Salary Drawn",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Salary Drawn<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "9DA28392-B46E-41C8-BB6D-9BD6E4C27259",
                         "minValue": "0",
                         "bindable": "salaryDrawn",
                         "bind": "{salaryDrawn}"
                    }, {
                         "name": "perk",
                         "itemId": "perk",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Perk",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Perk<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "111AD96C-534D-4FEF-AFBC-8E6A5D100A72",
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
                         "fieldId": "997F5D55-EC80-4726-BFD2-7E3B466D9484",
                         "minValue": "2010",
                         "maxValue": "9999",
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
                         "fieldId": "28348601-EEC0-4979-A51F-2B7864880D76",
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
                         "customId": 62,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill",
                              "parentId": 62,
                              "customId": 274
                         }, {
                              "customWidgetType": "vdButton",
                              "xtype": "button",
                              "margin": "0 5 0 5",
                              "text": "Save",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "saveFormButton",
                              "parentId": 62,
                              "customId": 275,
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
                              "parentId": 62,
                              "customId": 276,
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
                         "header": "Taxable Amount",
                         "dataIndex": "taxableAmount",
                         "flex": 1
                    }, {
                         "header": "Non Taxable Amoount",
                         "dataIndex": "nonTaxableAmount",
                         "flex": 1
                    }, {
                         "header": "Total Tax",
                         "dataIndex": "totalTax",
                         "flex": 1
                    }, {
                         "header": "Take Home",
                         "dataIndex": "takeHome",
                         "flex": 1
                    }, {
                         "header": "Salary Drawn",
                         "dataIndex": "salaryDrawn",
                         "flex": 1
                    }, {
                         "header": "Perk",
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
                              "fieldId": "8E8513EA-9D91-4294-9B36-682CA16CD226",
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
                         "displayName": "Salary Structure Financial Wise",
                         "name": "SalaryStructureFinancialWiseGrid",
                         "itemId": "SalaryStructureFinancialWiseGrid",
                         "restURL": "/SalaryStructureFinancialWise",
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
                              "header": "Taxable Amount",
                              "dataIndex": "taxableAmount",
                              "flex": 1
                         }, {
                              "header": "Non Taxable Amoount",
                              "dataIndex": "nonTaxableAmount",
                              "flex": 1
                         }, {
                              "header": "Total Tax",
                              "dataIndex": "totalTax",
                              "flex": 1
                         }, {
                              "header": "Take Home",
                              "dataIndex": "takeHome",
                              "flex": 1
                         }, {
                              "header": "Salary Drawn",
                              "dataIndex": "salaryDrawn",
                              "flex": 1
                         }, {
                              "header": "Perk",
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
               "viewModel": "SalaryStructureFinancialWiseViewModel",
               "xtype": "form",
               "displayName": "Salary Structure Financial Wise",
               "title": "Salary Structure Financial Wise",
               "name": "SalaryStructureFinancialWise",
               "itemId": "SalaryStructureFinancialWise",
               "bodyPadding": 10,
               "items": [{
                    "name": "salaryId",
                    "itemId": "salaryId",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "Applicant Id",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Applicant Id<font color='red'> *<\/font>",
                    "fieldId": "A838BBF9-CF37-4E41-ADB1-0E7E90400347",
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
                    "fieldId": "8E8513EA-9D91-4294-9B36-682CA16CD226",
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
                    "fieldId": "2935B832-DBDB-495A-860C-8DC8BEA9EE7A",
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
                    "fieldId": "8FFFCA1B-0398-4281-8FDB-CB00D73BBC16",
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
                    "fieldId": "A8769303-D0FE-4266-AED8-417C808AA3EE",
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
                    "fieldId": "82B301E8-0297-4E52-9137-4359E44DB9FE",
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
                    "fieldId": "6C5FBD50-B7F2-4554-A6A0-281B5DE8EC23",
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
                    "fieldId": "36CBF66D-8057-4EBA-BFD6-41358901D8B7",
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
                    "fieldId": "8AB4D78A-09DC-4A5A-BEA8-2733C1C67548",
                    "minValue": "0",
                    "bindable": "specailAllowance",
                    "bind": "{specailAllowance}"
               }, {
                    "name": "taxableAmount",
                    "itemId": "taxableAmount",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "Taxable Amount",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Taxable Amount<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "81DCF843-BAB5-412D-AE2B-AD39E832CA70",
                    "minValue": "0",
                    "bindable": "taxableAmount",
                    "bind": "{taxableAmount}"
               }, {
                    "name": "nonTaxableAmount",
                    "itemId": "nonTaxableAmount",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "Non Taxable Amoount",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Non Taxable Amoount<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "25FF6F22-4237-489E-9C1E-AA28B4E00C1B",
                    "minValue": "0",
                    "bindable": "nonTaxableAmount",
                    "bind": "{nonTaxableAmount}"
               }, {
                    "name": "totalTax",
                    "itemId": "totalTax",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "Total Tax",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Total Tax<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "23FFDC05-56BF-4317-A577-C118C9B535E0",
                    "minValue": "0",
                    "bindable": "totalTax",
                    "bind": "{totalTax}"
               }, {
                    "name": "takeHome",
                    "itemId": "takeHome",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "Take Home",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Take Home<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "CD2D8882-98DD-4D9D-A6E8-CB80993D19CF",
                    "minValue": "0",
                    "bindable": "takeHome",
                    "bind": "{takeHome}"
               }, {
                    "name": "salaryDrawn",
                    "itemId": "salaryDrawn",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "Salary Drawn",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Salary Drawn<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "9DA28392-B46E-41C8-BB6D-9BD6E4C27259",
                    "minValue": "0",
                    "bindable": "salaryDrawn",
                    "bind": "{salaryDrawn}"
               }, {
                    "name": "perk",
                    "itemId": "perk",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "Perk",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Perk<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "111AD96C-534D-4FEF-AFBC-8E6A5D100A72",
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
                    "fieldId": "997F5D55-EC80-4726-BFD2-7E3B466D9484",
                    "minValue": "2010",
                    "maxValue": "9999",
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
                    "fieldId": "28348601-EEC0-4979-A51F-2B7864880D76",
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
                    "customId": 62,
                    "items": [{
                         "xtype": "tbfill",
                         "customWidgetType": "vdTbFill",
                         "parentId": 62,
                         "customId": 274
                    }, {
                         "customWidgetType": "vdButton",
                         "xtype": "button",
                         "margin": "0 5 0 5",
                         "text": "Save",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "saveFormButton",
                         "parentId": 62,
                         "customId": 275,
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
                         "parentId": 62,
                         "customId": 276,
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