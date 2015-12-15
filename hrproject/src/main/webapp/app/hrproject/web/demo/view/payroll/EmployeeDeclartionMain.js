Ext.define('Hrproject.hrproject.web.demo.view.payroll.EmployeeDeclartionMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "controller": "EmployeeDeclartionMainController",
     "restURL": "/EmployeeDeclartion",
     "defaults": {
          "split": true
     },
     "requires": ["Hrproject.hrproject.web.demo.controller.payroll.EmployeeDeclartionMainController", "Hrproject.hrproject.shared.demo.model.employee.EmpInformationModel", "Hrproject.hrproject.shared.demo.viewmodel.payroll.EmployeeDeclartionViewModel"],
     "tabPosition": "bottom",
     "communicationLog": [],
     "itemId": "EmployeeDeclartionFormGridContainer",
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
                    "viewModel": "EmployeeDeclartionViewModel",
                    "xtype": "form",
                    "displayName": "Employee Declartion",
                    "title": "Employee Declartion",
                    "name": "EmployeeDeclartion",
                    "itemId": "EmployeeDeclartion",
                    "bodyPadding": 10,
                    "items": [{
                         "name": "empDecId",
                         "itemId": "empDecId",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "empDecId",
                         "margin": "5 5 5 5",
                         "fieldLabel": "empDecId<font color='red'> *<\/font>",
                         "fieldId": "2CE49E87-2C04-4A72-A9EC-F0F50A16E60C",
                         "minLength": "0",
                         "maxLength": "64",
                         "hidden": true,
                         "value": "",
                         "bindable": "empDecId",
                         "bind": "{empDecId}"
                    }, {
                         "name": "empId",
                         "itemId": "empId",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "empId",
                         "margin": "5 5 5 5",
                         "fieldLabel": "empId<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "39360431-5234-4946-BC51-B02F81448456",
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
                         "name": "hRA",
                         "itemId": "hRA",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "HRA",
                         "margin": "5 5 5 5",
                         "fieldLabel": "HRA<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "A8870418-0FDA-4143-A633-B43562EF7422",
                         "minValue": "0",
                         "bindable": "hRA",
                         "bind": "{hRA}"
                    }, {
                         "name": "eightyC",
                         "itemId": "eightyC",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "80C",
                         "margin": "5 5 5 5",
                         "fieldLabel": "80C<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "4FF3EB40-27E7-45F1-B409-79778CD6194B",
                         "minValue": "0",
                         "bindable": "eightyC",
                         "bind": "{eightyC}"
                    }, {
                         "name": "eightyD",
                         "itemId": "eightyD",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "80D",
                         "margin": "5 5 5 5",
                         "fieldLabel": "80D<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "7BCC56DF-E543-4BD1-9948-66BB244D56C0",
                         "minValue": "0",
                         "bindable": "eightyD",
                         "bind": "{eightyD}"
                    }, {
                         "name": "eightyG",
                         "itemId": "eightyG",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "80G",
                         "margin": "5 5 5 5",
                         "fieldLabel": "80G<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "0F92D166-78D7-4FE0-9A5C-B0B3EB023D47",
                         "minValue": "0",
                         "bindable": "eightyG",
                         "bind": "{eightyG}"
                    }, {
                         "name": "eightyE",
                         "itemId": "eightyE",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "80E",
                         "margin": "5 5 5 5",
                         "fieldLabel": "80E<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "2345E667-0AC6-4B76-9722-85ACFAEA9176",
                         "minValue": "0",
                         "bindable": "eightyE",
                         "bind": "{eightyE}"
                    }, {
                         "name": "year",
                         "itemId": "year",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Year",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Year<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "3480DB94-39E3-41E4-ADEA-73E882D4826A",
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
                         "fieldId": "99DB7177-D568-4DF8-8555-0800BC340C55",
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
                         "customId": 264,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill",
                              "parentId": 264,
                              "customId": 112
                         }, {
                              "customWidgetType": "vdButton",
                              "xtype": "button",
                              "margin": "0 5 0 5",
                              "text": "Save",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "saveFormButton",
                              "parentId": 264,
                              "customId": 113,
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
                              "parentId": 264,
                              "customId": 114,
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
                         "header": "empDecId",
                         "dataIndex": "empDecId",
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
                         "header": "empId",
                         "dataIndex": "empId",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "HRA",
                         "dataIndex": "hRA",
                         "flex": 1
                    }, {
                         "header": "80C",
                         "dataIndex": "eightyC",
                         "flex": 1
                    }, {
                         "header": "80D",
                         "dataIndex": "eightyD",
                         "flex": 1
                    }, {
                         "header": "80G",
                         "dataIndex": "eightyG",
                         "flex": 1
                    }, {
                         "header": "80E",
                         "dataIndex": "eightyE",
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
                              "displayName": "empId",
                              "margin": "5 5 5 5",
                              "fieldLabel": "empId",
                              "fieldId": "39360431-5234-4946-BC51-B02F81448456",
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
                         "displayName": "Employee Declartion",
                         "name": "EmployeeDeclartionGrid",
                         "itemId": "EmployeeDeclartionGrid",
                         "restURL": "/EmployeeDeclartion",
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
                              "header": "empDecId",
                              "dataIndex": "empDecId",
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
                              "header": "empId",
                              "dataIndex": "empId",
                              "renderer": "renderFormValue",
                              "flex": 1
                         }, {
                              "header": "HRA",
                              "dataIndex": "hRA",
                              "flex": 1
                         }, {
                              "header": "80C",
                              "dataIndex": "eightyC",
                              "flex": 1
                         }, {
                              "header": "80D",
                              "dataIndex": "eightyD",
                              "flex": 1
                         }, {
                              "header": "80G",
                              "dataIndex": "eightyG",
                              "flex": 1
                         }, {
                              "header": "80E",
                              "dataIndex": "eightyE",
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
               "viewModel": "EmployeeDeclartionViewModel",
               "xtype": "form",
               "displayName": "Employee Declartion",
               "title": "Employee Declartion",
               "name": "EmployeeDeclartion",
               "itemId": "EmployeeDeclartion",
               "bodyPadding": 10,
               "items": [{
                    "name": "empDecId",
                    "itemId": "empDecId",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "empDecId",
                    "margin": "5 5 5 5",
                    "fieldLabel": "empDecId<font color='red'> *<\/font>",
                    "fieldId": "2CE49E87-2C04-4A72-A9EC-F0F50A16E60C",
                    "minLength": "0",
                    "maxLength": "64",
                    "hidden": true,
                    "value": "",
                    "bindable": "empDecId",
                    "bind": "{empDecId}"
               }, {
                    "name": "empId",
                    "itemId": "empId",
                    "xtype": "combo",
                    "customWidgetType": "vdCombo",
                    "displayName": "empId",
                    "margin": "5 5 5 5",
                    "fieldLabel": "empId<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "39360431-5234-4946-BC51-B02F81448456",
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
                    "name": "hRA",
                    "itemId": "hRA",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "HRA",
                    "margin": "5 5 5 5",
                    "fieldLabel": "HRA<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "A8870418-0FDA-4143-A633-B43562EF7422",
                    "minValue": "0",
                    "bindable": "hRA",
                    "bind": "{hRA}"
               }, {
                    "name": "eightyC",
                    "itemId": "eightyC",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "80C",
                    "margin": "5 5 5 5",
                    "fieldLabel": "80C<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "4FF3EB40-27E7-45F1-B409-79778CD6194B",
                    "minValue": "0",
                    "bindable": "eightyC",
                    "bind": "{eightyC}"
               }, {
                    "name": "eightyD",
                    "itemId": "eightyD",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "80D",
                    "margin": "5 5 5 5",
                    "fieldLabel": "80D<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "7BCC56DF-E543-4BD1-9948-66BB244D56C0",
                    "minValue": "0",
                    "bindable": "eightyD",
                    "bind": "{eightyD}"
               }, {
                    "name": "eightyG",
                    "itemId": "eightyG",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "80G",
                    "margin": "5 5 5 5",
                    "fieldLabel": "80G<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "0F92D166-78D7-4FE0-9A5C-B0B3EB023D47",
                    "minValue": "0",
                    "bindable": "eightyG",
                    "bind": "{eightyG}"
               }, {
                    "name": "eightyE",
                    "itemId": "eightyE",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "80E",
                    "margin": "5 5 5 5",
                    "fieldLabel": "80E<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "2345E667-0AC6-4B76-9722-85ACFAEA9176",
                    "minValue": "0",
                    "bindable": "eightyE",
                    "bind": "{eightyE}"
               }, {
                    "name": "year",
                    "itemId": "year",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "Year",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Year<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "3480DB94-39E3-41E4-ADEA-73E882D4826A",
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
                    "fieldId": "99DB7177-D568-4DF8-8555-0800BC340C55",
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
                    "customId": 264,
                    "items": [{
                         "xtype": "tbfill",
                         "customWidgetType": "vdTbFill",
                         "parentId": 264,
                         "customId": 112
                    }, {
                         "customWidgetType": "vdButton",
                         "xtype": "button",
                         "margin": "0 5 0 5",
                         "text": "Save",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "saveFormButton",
                         "parentId": 264,
                         "customId": 113,
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
                         "parentId": 264,
                         "customId": 114,
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