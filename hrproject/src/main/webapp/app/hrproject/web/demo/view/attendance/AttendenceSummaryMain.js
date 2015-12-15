Ext.define('Hrproject.hrproject.web.demo.view.attendance.AttendenceSummaryMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "controller": "AttendenceSummaryMainController",
     "restURL": "/AttendenceSummary",
     "defaults": {
          "split": true
     },
     "requires": ["Hrproject.hrproject.web.demo.controller.attendance.AttendenceSummaryMainController", "Hrproject.hrproject.shared.demo.model.employee.EmpInformationModel", "Hrproject.hrproject.shared.demo.viewmodel.attendance.AttendenceSummaryViewModel"],
     "tabPosition": "bottom",
     "communicationLog": [],
     "itemId": "AttendenceSummaryFormGridContainer",
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
                    "viewModel": "AttendenceSummaryViewModel",
                    "xtype": "form",
                    "displayName": "Attendence Summary",
                    "title": "Attendence Summary",
                    "name": "AttendenceSummary",
                    "itemId": "AttendenceSummary",
                    "bodyPadding": 10,
                    "items": [{
                         "name": "attendenceSummaryId",
                         "itemId": "attendenceSummaryId",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "attendenceId",
                         "margin": "5 5 5 5",
                         "fieldLabel": "attendenceId<font color='red'> *<\/font>",
                         "fieldId": "1D49C9D7-D336-4DCF-9721-2B37E8FDE8EC",
                         "minLength": "0",
                         "maxLength": "64",
                         "hidden": true,
                         "value": "",
                         "bindable": "attendenceSummaryId",
                         "bind": "{attendenceSummaryId}"
                    }, {
                         "name": "empId",
                         "itemId": "empId",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "Employee",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Employee<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "BC5CCAB0-486B-4EDD-BB59-933629601A72",
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
                         "name": "present",
                         "itemId": "present",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "No of days present",
                         "margin": "5 5 5 5",
                         "fieldLabel": "No of days present<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "D9684DC2-E464-459C-8D8F-E69523FEEE8E",
                         "minValue": "0",
                         "maxValue": "10",
                         "bindable": "present",
                         "bind": "{present}"
                    }, {
                         "name": "absent",
                         "itemId": "absent",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "No of days absent",
                         "margin": "5 5 5 5",
                         "fieldLabel": "No of days absent<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "7A06EABD-F514-4496-A979-832C3A01139A",
                         "minValue": "0",
                         "maxValue": "10",
                         "bindable": "absent",
                         "bind": "{absent}"
                    }, {
                         "name": "privilege",
                         "itemId": "privilege",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "No of Privilege Leaves Take",
                         "margin": "5 5 5 5",
                         "fieldLabel": "No of Privilege Leaves Take<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "6B191C92-EA99-4891-B879-6D6BBF71338F",
                         "minValue": "0",
                         "maxValue": "10",
                         "bindable": "privilege",
                         "bind": "{privilege}"
                    }, {
                         "name": "casualLeave",
                         "itemId": "casualLeave",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "No of Casual Leaves Take",
                         "margin": "5 5 5 5",
                         "fieldLabel": "No of Casual Leaves Take<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "ABB209CC-2C2A-40A6-BE31-B6626F55CE08",
                         "minValue": "0",
                         "maxValue": "10",
                         "bindable": "casualLeave",
                         "bind": "{casualLeave}"
                    }, {
                         "name": "sickLeave",
                         "itemId": "sickLeave",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "No of Sick Leaves Take",
                         "margin": "5 5 5 5",
                         "fieldLabel": "No of Sick Leaves Take<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "A0BE1A8F-84FC-4345-9DCC-7AE0D07E9E1F",
                         "minValue": "0",
                         "maxValue": "10",
                         "bindable": "sickLeave",
                         "bind": "{sickLeave}"
                    }, {
                         "name": "maternityLeave",
                         "itemId": "maternityLeave",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "No of Maternity Leaves Take",
                         "margin": "5 5 5 5",
                         "fieldLabel": "No of Maternity Leaves Take<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "16331AC9-0A7E-4C50-B89A-B7B65003C95D",
                         "minValue": "0",
                         "maxValue": "10",
                         "bindable": "maternityLeave",
                         "bind": "{maternityLeave}"
                    }, {
                         "name": "year",
                         "itemId": "year",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Year",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Year<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "FE70F245-FFEF-4673-A400-9EC5A7A7BC76",
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
                         "fieldId": "5730B5DA-EA2D-41D2-8C87-67A84D18D52E",
                         "minValue": "0",
                         "maxValue": "10",
                         "bindable": "month",
                         "bind": "{month}"
                    }, {
                         "name": "versionId",
                         "itemId": "versionId",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "versionId",
                         "margin": "5 5 5 5",
                         "value": "-1",
                         "fieldLabel": "versionId",
                         "fieldId": "EE9230BA-C670-45EC-B5F2-1841CECD8292",
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
                         "customId": 127,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill",
                              "parentId": 127,
                              "customId": 843
                         }, {
                              "customWidgetType": "vdButton",
                              "xtype": "button",
                              "margin": "0 5 0 5",
                              "text": "Save",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "saveFormButton",
                              "parentId": 127,
                              "customId": 844,
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
                              "parentId": 127,
                              "customId": 845,
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
                         "dataIndex": "attendenceSummaryId",
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
                         "header": "No of days present",
                         "dataIndex": "present",
                         "flex": 1
                    }, {
                         "header": "No of days absent",
                         "dataIndex": "absent",
                         "flex": 1
                    }, {
                         "header": "No of Privilege Leaves Take",
                         "dataIndex": "privilege",
                         "flex": 1
                    }, {
                         "header": "No of Casual Leaves Take",
                         "dataIndex": "casualLeave",
                         "flex": 1
                    }, {
                         "header": "No of Sick Leaves Take",
                         "dataIndex": "sickLeave",
                         "flex": 1
                    }, {
                         "header": "No of Maternity Leaves Take",
                         "dataIndex": "maternityLeave",
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
                              "fieldId": "BC5CCAB0-486B-4EDD-BB59-933629601A72",
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
                         "displayName": "Attendence Summary",
                         "name": "AttendenceSummaryGrid",
                         "itemId": "AttendenceSummaryGrid",
                         "restURL": "/AttendenceSummary",
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
                              "dataIndex": "attendenceSummaryId",
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
                              "header": "No of days present",
                              "dataIndex": "present",
                              "flex": 1
                         }, {
                              "header": "No of days absent",
                              "dataIndex": "absent",
                              "flex": 1
                         }, {
                              "header": "No of Privilege Leaves Take",
                              "dataIndex": "privilege",
                              "flex": 1
                         }, {
                              "header": "No of Casual Leaves Take",
                              "dataIndex": "casualLeave",
                              "flex": 1
                         }, {
                              "header": "No of Sick Leaves Take",
                              "dataIndex": "sickLeave",
                              "flex": 1
                         }, {
                              "header": "No of Maternity Leaves Take",
                              "dataIndex": "maternityLeave",
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
               "viewModel": "AttendenceSummaryViewModel",
               "xtype": "form",
               "displayName": "Attendence Summary",
               "title": "Attendence Summary",
               "name": "AttendenceSummary",
               "itemId": "AttendenceSummary",
               "bodyPadding": 10,
               "items": [{
                    "name": "attendenceSummaryId",
                    "itemId": "attendenceSummaryId",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "attendenceId",
                    "margin": "5 5 5 5",
                    "fieldLabel": "attendenceId<font color='red'> *<\/font>",
                    "fieldId": "1D49C9D7-D336-4DCF-9721-2B37E8FDE8EC",
                    "minLength": "0",
                    "maxLength": "64",
                    "hidden": true,
                    "value": "",
                    "bindable": "attendenceSummaryId",
                    "bind": "{attendenceSummaryId}"
               }, {
                    "name": "empId",
                    "itemId": "empId",
                    "xtype": "combo",
                    "customWidgetType": "vdCombo",
                    "displayName": "Employee",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Employee<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "BC5CCAB0-486B-4EDD-BB59-933629601A72",
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
                    "name": "present",
                    "itemId": "present",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "No of days present",
                    "margin": "5 5 5 5",
                    "fieldLabel": "No of days present<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "D9684DC2-E464-459C-8D8F-E69523FEEE8E",
                    "minValue": "0",
                    "maxValue": "10",
                    "bindable": "present",
                    "bind": "{present}"
               }, {
                    "name": "absent",
                    "itemId": "absent",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "No of days absent",
                    "margin": "5 5 5 5",
                    "fieldLabel": "No of days absent<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "7A06EABD-F514-4496-A979-832C3A01139A",
                    "minValue": "0",
                    "maxValue": "10",
                    "bindable": "absent",
                    "bind": "{absent}"
               }, {
                    "name": "privilege",
                    "itemId": "privilege",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "No of Privilege Leaves Take",
                    "margin": "5 5 5 5",
                    "fieldLabel": "No of Privilege Leaves Take<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "6B191C92-EA99-4891-B879-6D6BBF71338F",
                    "minValue": "0",
                    "maxValue": "10",
                    "bindable": "privilege",
                    "bind": "{privilege}"
               }, {
                    "name": "casualLeave",
                    "itemId": "casualLeave",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "No of Casual Leaves Take",
                    "margin": "5 5 5 5",
                    "fieldLabel": "No of Casual Leaves Take<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "ABB209CC-2C2A-40A6-BE31-B6626F55CE08",
                    "minValue": "0",
                    "maxValue": "10",
                    "bindable": "casualLeave",
                    "bind": "{casualLeave}"
               }, {
                    "name": "sickLeave",
                    "itemId": "sickLeave",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "No of Sick Leaves Take",
                    "margin": "5 5 5 5",
                    "fieldLabel": "No of Sick Leaves Take<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "A0BE1A8F-84FC-4345-9DCC-7AE0D07E9E1F",
                    "minValue": "0",
                    "maxValue": "10",
                    "bindable": "sickLeave",
                    "bind": "{sickLeave}"
               }, {
                    "name": "maternityLeave",
                    "itemId": "maternityLeave",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "No of Maternity Leaves Take",
                    "margin": "5 5 5 5",
                    "fieldLabel": "No of Maternity Leaves Take<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "16331AC9-0A7E-4C50-B89A-B7B65003C95D",
                    "minValue": "0",
                    "maxValue": "10",
                    "bindable": "maternityLeave",
                    "bind": "{maternityLeave}"
               }, {
                    "name": "year",
                    "itemId": "year",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "Year",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Year<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "FE70F245-FFEF-4673-A400-9EC5A7A7BC76",
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
                    "fieldId": "5730B5DA-EA2D-41D2-8C87-67A84D18D52E",
                    "minValue": "0",
                    "maxValue": "10",
                    "bindable": "month",
                    "bind": "{month}"
               }, {
                    "name": "versionId",
                    "itemId": "versionId",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "versionId",
                    "margin": "5 5 5 5",
                    "value": "-1",
                    "fieldLabel": "versionId",
                    "fieldId": "EE9230BA-C670-45EC-B5F2-1841CECD8292",
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
                    "customId": 127,
                    "items": [{
                         "xtype": "tbfill",
                         "customWidgetType": "vdTbFill",
                         "parentId": 127,
                         "customId": 843
                    }, {
                         "customWidgetType": "vdButton",
                         "xtype": "button",
                         "margin": "0 5 0 5",
                         "text": "Save",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "saveFormButton",
                         "parentId": 127,
                         "customId": 844,
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
                         "parentId": 127,
                         "customId": 845,
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