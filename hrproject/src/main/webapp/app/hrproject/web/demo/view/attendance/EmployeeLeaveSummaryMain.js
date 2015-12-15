Ext.define('Hrproject.hrproject.web.demo.view.attendance.EmployeeLeaveSummaryMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "controller": "EmployeeLeaveSummaryMainController",
     "restURL": "/EmployeeLeaveSummary",
     "defaults": {
          "split": true
     },
     "requires": ["Hrproject.hrproject.web.demo.controller.attendance.EmployeeLeaveSummaryMainController", "Hrproject.hrproject.shared.demo.model.employee.EmpInformationModel", "Hrproject.hrproject.shared.demo.viewmodel.attendance.EmployeeLeaveSummaryViewModel"],
     "tabPosition": "bottom",
     "communicationLog": [],
     "itemId": "EmployeeLeaveSummaryFormGridContainer",
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
                    "viewModel": "EmployeeLeaveSummaryViewModel",
                    "xtype": "form",
                    "displayName": "Employee Leave Summary",
                    "title": "Employee Leave Summary",
                    "name": "EmployeeLeaveSummary",
                    "itemId": "EmployeeLeaveSummary",
                    "bodyPadding": 10,
                    "items": [{
                         "name": "empLeaveStatusId",
                         "itemId": "empLeaveStatusId",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "attendenceId",
                         "margin": "5 5 5 5",
                         "fieldLabel": "attendenceId<font color='red'> *<\/font>",
                         "fieldId": "99273BB0-2467-4224-B6E2-B13C90528CAE",
                         "minLength": "0",
                         "maxLength": "64",
                         "hidden": true,
                         "value": "",
                         "bindable": "empLeaveStatusId",
                         "bind": "{empLeaveStatusId}"
                    }, {
                         "name": "empId",
                         "itemId": "empId",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "Employee",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Employee<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "C761A7E2-7D79-4338-B06A-6A3DC9DA12AF",
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
                         "name": "privilege",
                         "itemId": "privilege",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Privilege Leave",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Privilege Leave<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "5A25B328-A2D1-4BCD-9AC4-32CC44C538B5",
                         "minValue": "0",
                         "maxValue": "10",
                         "bindable": "privilege",
                         "bind": "{privilege}"
                    }, {
                         "name": "casualLeave",
                         "itemId": "casualLeave",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Casual Leave",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Casual Leave<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "AA023D83-33B9-4EEC-B0CF-72146FFFE75B",
                         "minValue": "0",
                         "maxValue": "10",
                         "bindable": "casualLeave",
                         "bind": "{casualLeave}"
                    }, {
                         "name": "sickLeave",
                         "itemId": "sickLeave",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Sick Leave",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Sick Leave<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "467C1B01-2D85-433E-B897-93358FBBF63E",
                         "minValue": "0",
                         "maxValue": "10",
                         "bindable": "sickLeave",
                         "bind": "{sickLeave}"
                    }, {
                         "name": "maternityLeave",
                         "itemId": "maternityLeave",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Maternity Leave",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Maternity Leave<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "7083FA4F-27E0-4FFA-B155-26FB02D9767D",
                         "minValue": "0",
                         "maxValue": "10",
                         "bindable": "maternityLeave",
                         "bind": "{maternityLeave}"
                    }, {
                         "name": "privilegeTaken",
                         "itemId": "privilegeTaken",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Privilege Leave",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Privilege Leave<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "E42C1B42-3B4D-4578-B320-5A9F09B69F91",
                         "minValue": "0",
                         "maxValue": "10",
                         "bindable": "privilegeTaken",
                         "bind": "{privilegeTaken}"
                    }, {
                         "name": "casualLeaveTaken",
                         "itemId": "casualLeaveTaken",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Casual Leave",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Casual Leave<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "55678686-46C8-4C89-8A35-62F1DE898900",
                         "minValue": "0",
                         "maxValue": "10",
                         "bindable": "casualLeaveTaken",
                         "bind": "{casualLeaveTaken}"
                    }, {
                         "name": "sickLeaveTaken",
                         "itemId": "sickLeaveTaken",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Sick Leave",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Sick Leave<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "84B0A440-1381-4EFF-B476-400545800970",
                         "minValue": "0",
                         "maxValue": "10",
                         "bindable": "sickLeaveTaken",
                         "bind": "{sickLeaveTaken}"
                    }, {
                         "name": "maternityLeaveTaken",
                         "itemId": "maternityLeaveTaken",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Maternity Leave",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Maternity Leave<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "C7B70B97-92DF-4B22-84E3-DEAE75B2F15D",
                         "minValue": "0",
                         "maxValue": "10",
                         "bindable": "maternityLeaveTaken",
                         "bind": "{maternityLeaveTaken}"
                    }, {
                         "name": "year",
                         "itemId": "year",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Financial Year",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Financial Year<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "D6C1CF8A-9079-47FC-9F96-BB7682EB0B84",
                         "minValue": "0",
                         "maxValue": "10",
                         "bindable": "year",
                         "bind": "{year}"
                    }, {
                         "name": "lop",
                         "itemId": "lop",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Loss Of Pay",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Loss Of Pay<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "3E04C184-6BA3-43FC-9CDA-A145D84EE9EE",
                         "minValue": "0",
                         "maxValue": "10",
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
                         "fieldId": "61E5DA25-4705-4274-91DC-FC4C19357BBD",
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
                         "customId": 737,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill",
                              "parentId": 737,
                              "customId": 797
                         }, {
                              "customWidgetType": "vdButton",
                              "xtype": "button",
                              "margin": "0 5 0 5",
                              "text": "Save",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "saveFormButton",
                              "parentId": 737,
                              "customId": 798,
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
                              "parentId": 737,
                              "customId": 799,
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
                         "header": "attendenceId",
                         "dataIndex": "empLeaveStatusId",
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
                         "header": "Privilege Leave",
                         "dataIndex": "privilege",
                         "flex": 1
                    }, {
                         "header": "Casual Leave",
                         "dataIndex": "casualLeave",
                         "flex": 1
                    }, {
                         "header": "Sick Leave",
                         "dataIndex": "sickLeave",
                         "flex": 1
                    }, {
                         "header": "Maternity Leave",
                         "dataIndex": "maternityLeave",
                         "flex": 1
                    }, {
                         "header": "Privilege Leave",
                         "dataIndex": "privilegeTaken",
                         "flex": 1
                    }, {
                         "header": "Casual Leave",
                         "dataIndex": "casualLeaveTaken",
                         "flex": 1
                    }, {
                         "header": "Sick Leave",
                         "dataIndex": "sickLeaveTaken",
                         "flex": 1
                    }, {
                         "header": "Maternity Leave",
                         "dataIndex": "maternityLeaveTaken",
                         "flex": 1
                    }, {
                         "header": "Financial Year",
                         "dataIndex": "year",
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
                              "fieldId": "C761A7E2-7D79-4338-B06A-6A3DC9DA12AF",
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
                         "displayName": "Employee Leave Summary",
                         "name": "EmployeeLeaveSummaryGrid",
                         "itemId": "EmployeeLeaveSummaryGrid",
                         "restURL": "/EmployeeLeaveSummary",
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
                              "header": "attendenceId",
                              "dataIndex": "empLeaveStatusId",
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
                              "header": "Privilege Leave",
                              "dataIndex": "privilege",
                              "flex": 1
                         }, {
                              "header": "Casual Leave",
                              "dataIndex": "casualLeave",
                              "flex": 1
                         }, {
                              "header": "Sick Leave",
                              "dataIndex": "sickLeave",
                              "flex": 1
                         }, {
                              "header": "Maternity Leave",
                              "dataIndex": "maternityLeave",
                              "flex": 1
                         }, {
                              "header": "Privilege Leave",
                              "dataIndex": "privilegeTaken",
                              "flex": 1
                         }, {
                              "header": "Casual Leave",
                              "dataIndex": "casualLeaveTaken",
                              "flex": 1
                         }, {
                              "header": "Sick Leave",
                              "dataIndex": "sickLeaveTaken",
                              "flex": 1
                         }, {
                              "header": "Maternity Leave",
                              "dataIndex": "maternityLeaveTaken",
                              "flex": 1
                         }, {
                              "header": "Financial Year",
                              "dataIndex": "year",
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
               "viewModel": "EmployeeLeaveSummaryViewModel",
               "xtype": "form",
               "displayName": "Employee Leave Summary",
               "title": "Employee Leave Summary",
               "name": "EmployeeLeaveSummary",
               "itemId": "EmployeeLeaveSummary",
               "bodyPadding": 10,
               "items": [{
                    "name": "empLeaveStatusId",
                    "itemId": "empLeaveStatusId",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "attendenceId",
                    "margin": "5 5 5 5",
                    "fieldLabel": "attendenceId<font color='red'> *<\/font>",
                    "fieldId": "99273BB0-2467-4224-B6E2-B13C90528CAE",
                    "minLength": "0",
                    "maxLength": "64",
                    "hidden": true,
                    "value": "",
                    "bindable": "empLeaveStatusId",
                    "bind": "{empLeaveStatusId}"
               }, {
                    "name": "empId",
                    "itemId": "empId",
                    "xtype": "combo",
                    "customWidgetType": "vdCombo",
                    "displayName": "Employee",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Employee<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "C761A7E2-7D79-4338-B06A-6A3DC9DA12AF",
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
                    "name": "privilege",
                    "itemId": "privilege",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "Privilege Leave",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Privilege Leave<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "5A25B328-A2D1-4BCD-9AC4-32CC44C538B5",
                    "minValue": "0",
                    "maxValue": "10",
                    "bindable": "privilege",
                    "bind": "{privilege}"
               }, {
                    "name": "casualLeave",
                    "itemId": "casualLeave",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "Casual Leave",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Casual Leave<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "AA023D83-33B9-4EEC-B0CF-72146FFFE75B",
                    "minValue": "0",
                    "maxValue": "10",
                    "bindable": "casualLeave",
                    "bind": "{casualLeave}"
               }, {
                    "name": "sickLeave",
                    "itemId": "sickLeave",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "Sick Leave",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Sick Leave<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "467C1B01-2D85-433E-B897-93358FBBF63E",
                    "minValue": "0",
                    "maxValue": "10",
                    "bindable": "sickLeave",
                    "bind": "{sickLeave}"
               }, {
                    "name": "maternityLeave",
                    "itemId": "maternityLeave",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "Maternity Leave",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Maternity Leave<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "7083FA4F-27E0-4FFA-B155-26FB02D9767D",
                    "minValue": "0",
                    "maxValue": "10",
                    "bindable": "maternityLeave",
                    "bind": "{maternityLeave}"
               }, {
                    "name": "privilegeTaken",
                    "itemId": "privilegeTaken",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "Privilege Leave",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Privilege Leave<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "E42C1B42-3B4D-4578-B320-5A9F09B69F91",
                    "minValue": "0",
                    "maxValue": "10",
                    "bindable": "privilegeTaken",
                    "bind": "{privilegeTaken}"
               }, {
                    "name": "casualLeaveTaken",
                    "itemId": "casualLeaveTaken",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "Casual Leave",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Casual Leave<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "55678686-46C8-4C89-8A35-62F1DE898900",
                    "minValue": "0",
                    "maxValue": "10",
                    "bindable": "casualLeaveTaken",
                    "bind": "{casualLeaveTaken}"
               }, {
                    "name": "sickLeaveTaken",
                    "itemId": "sickLeaveTaken",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "Sick Leave",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Sick Leave<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "84B0A440-1381-4EFF-B476-400545800970",
                    "minValue": "0",
                    "maxValue": "10",
                    "bindable": "sickLeaveTaken",
                    "bind": "{sickLeaveTaken}"
               }, {
                    "name": "maternityLeaveTaken",
                    "itemId": "maternityLeaveTaken",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "Maternity Leave",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Maternity Leave<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "C7B70B97-92DF-4B22-84E3-DEAE75B2F15D",
                    "minValue": "0",
                    "maxValue": "10",
                    "bindable": "maternityLeaveTaken",
                    "bind": "{maternityLeaveTaken}"
               }, {
                    "name": "year",
                    "itemId": "year",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "Financial Year",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Financial Year<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "D6C1CF8A-9079-47FC-9F96-BB7682EB0B84",
                    "minValue": "0",
                    "maxValue": "10",
                    "bindable": "year",
                    "bind": "{year}"
               }, {
                    "name": "lop",
                    "itemId": "lop",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "Loss Of Pay",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Loss Of Pay<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "3E04C184-6BA3-43FC-9CDA-A145D84EE9EE",
                    "minValue": "0",
                    "maxValue": "10",
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
                    "fieldId": "61E5DA25-4705-4274-91DC-FC4C19357BBD",
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
                    "customId": 737,
                    "items": [{
                         "xtype": "tbfill",
                         "customWidgetType": "vdTbFill",
                         "parentId": 737,
                         "customId": 797
                    }, {
                         "customWidgetType": "vdButton",
                         "xtype": "button",
                         "margin": "0 5 0 5",
                         "text": "Save",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "saveFormButton",
                         "parentId": 737,
                         "customId": 798,
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
                         "parentId": 737,
                         "customId": 799,
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