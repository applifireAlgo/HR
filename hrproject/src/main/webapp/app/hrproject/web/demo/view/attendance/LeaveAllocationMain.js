Ext.define('Hrproject.hrproject.web.demo.view.attendance.LeaveAllocationMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "LeaveAllocationMainController",
     "restURL": "/LeaveAllocation",
     "defaults": {
          "split": true
     },
     "requires": ["Hrproject.hrproject.shared.demo.model.attendance.LeaveAllocationModel", "Hrproject.hrproject.web.demo.controller.attendance.LeaveAllocationMainController", "Hrproject.hrproject.shared.demo.viewmodel.attendance.LeaveAllocationViewModel"],
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
               "margin": "5 0 5 5",
               "border": 1,
               "style": {
                    "borderColor": "#f6f6f6",
                    "borderStyle": "solid",
                    "borderWidth": "1px"
               },
               "displayName": "Leave Allocation",
               "name": "LeaveAllocationTreeContainer",
               "itemId": "LeaveAllocationTreeContainer",
               "restURL": "/LeaveAllocation",
               "autoScroll": false,
               "collapsible": true,
               "titleCollapse": true,
               "collapseMode": "header",
               "collapsed": false,
               "items": [{
                    "xtype": "treepanel",
                    "customWidgetType": "vdTree",
                    "title": "Browse",
                    "useArrows": true,
                    "rootVisible": false,
                    "itemId": "LeaveAllocationTree",
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
                    "items": []
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
                    "customWidgetType": "vdFormpanel",
                    "viewModel": "LeaveAllocationViewModel",
                    "xtype": "form",
                    "displayName": "Leave Allocation",
                    "title": "Leave Allocation",
                    "name": "LeaveAllocation",
                    "itemId": "LeaveAllocation",
                    "bodyPadding": 10,
                    "items": [{
                         "name": "leaveCategoryId",
                         "itemId": "leaveCategoryId",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "leaveCategoryId",
                         "margin": "5 5 5 5",
                         "fieldLabel": "leaveCategoryId<font color='red'> *<\/font>",
                         "fieldId": "CDD9EAA4-7D59-4140-85B8-D30585EA828C",
                         "minLength": "0",
                         "maxLength": "64",
                         "hidden": true,
                         "value": "",
                         "bindable": "leaveCategoryId",
                         "bind": "{leaveCategoryId}"
                    }, {
                         "name": "privilege",
                         "itemId": "privilege",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Privilege Leave",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Privilege Leave<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "D8F364AF-2059-4BE9-B71E-0D761BC703A1",
                         "minValue": "0",
                         "maxValue": "10",
                         "bindable": "privilege",
                         "bind": "{privilege}",
                         "columnWidth": 0.5
                    }, {
                         "name": "casualLeave",
                         "itemId": "casualLeave",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Casual Leave",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Casual Leave<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "0AD926EB-73DC-4A6F-ABE2-9BA583249168",
                         "minValue": "0",
                         "maxValue": "10",
                         "bindable": "casualLeave",
                         "bind": "{casualLeave}",
                         "columnWidth": 0.5
                    }, {
                         "name": "sickLeave",
                         "itemId": "sickLeave",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Sick Leave",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Sick Leave<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "ECC8DBE0-AC21-48C6-BD68-DC35D6D882D7",
                         "minValue": "0",
                         "maxValue": "10",
                         "bindable": "sickLeave",
                         "bind": "{sickLeave}",
                         "columnWidth": 0.5
                    }, {
                         "name": "maternityLeave",
                         "itemId": "maternityLeave",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Maternity Leave",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Maternity Leave<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "432C4F0E-ECD1-4051-A965-412CB525B01F",
                         "minValue": "0",
                         "maxValue": "10",
                         "bindable": "maternityLeave",
                         "bind": "{maternityLeave}",
                         "columnWidth": 0.5
                    }, {
                         "name": "year",
                         "itemId": "year",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Financial Year",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Financial Year<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "68503793-23F9-491F-89B8-2EB62D557458",
                         "minValue": "0",
                         "maxValue": "10",
                         "bindable": "year",
                         "bind": "{year}",
                         "columnWidth": 0.5
                    }, {
                         "name": "versionId",
                         "itemId": "versionId",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "versionId",
                         "margin": "5 5 5 5",
                         "value": "-1",
                         "fieldLabel": "versionId",
                         "fieldId": "71D1793D-73F4-4108-B401-13E3062BA184",
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
                         "customId": 21,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill",
                              "parentId": 21,
                              "customId": 604
                         }, {
                              "customWidgetType": "vdButton",
                              "xtype": "button",
                              "margin": "0 5 0 5",
                              "text": "Save",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "saveFormButton",
                              "parentId": 21,
                              "customId": 605,
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
                              "parentId": 21,
                              "customId": 606,
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
                    "xtype": "gridpanel",
                    "customWidgetType": "vdGrid",
                    "displayName": "Leave Allocation",
                    "title": "Details Grid",
                    "name": "LeaveAllocationGrid",
                    "itemId": "LeaveAllocationGrid",
                    "restURL": "/LeaveAllocation",
                    "store": [],
                    "bodyPadding": 10,
                    "columns": [{
                         "header": "leaveCategoryId",
                         "dataIndex": "leaveCategoryId",
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
                         "header": "Financial Year",
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
               "customWidgetType": "vdFormpanel",
               "viewModel": "LeaveAllocationViewModel",
               "xtype": "form",
               "displayName": "Leave Allocation",
               "title": "Leave Allocation",
               "name": "LeaveAllocation",
               "itemId": "LeaveAllocation",
               "bodyPadding": 10,
               "items": [{
                    "name": "leaveCategoryId",
                    "itemId": "leaveCategoryId",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "leaveCategoryId",
                    "margin": "5 5 5 5",
                    "fieldLabel": "leaveCategoryId<font color='red'> *<\/font>",
                    "fieldId": "CDD9EAA4-7D59-4140-85B8-D30585EA828C",
                    "minLength": "0",
                    "maxLength": "64",
                    "hidden": true,
                    "value": "",
                    "bindable": "leaveCategoryId",
                    "bind": "{leaveCategoryId}"
               }, {
                    "name": "privilege",
                    "itemId": "privilege",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "Privilege Leave",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Privilege Leave<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "D8F364AF-2059-4BE9-B71E-0D761BC703A1",
                    "minValue": "0",
                    "maxValue": "10",
                    "bindable": "privilege",
                    "bind": "{privilege}",
                    "columnWidth": 0.5
               }, {
                    "name": "casualLeave",
                    "itemId": "casualLeave",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "Casual Leave",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Casual Leave<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "0AD926EB-73DC-4A6F-ABE2-9BA583249168",
                    "minValue": "0",
                    "maxValue": "10",
                    "bindable": "casualLeave",
                    "bind": "{casualLeave}",
                    "columnWidth": 0.5
               }, {
                    "name": "sickLeave",
                    "itemId": "sickLeave",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "Sick Leave",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Sick Leave<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "ECC8DBE0-AC21-48C6-BD68-DC35D6D882D7",
                    "minValue": "0",
                    "maxValue": "10",
                    "bindable": "sickLeave",
                    "bind": "{sickLeave}",
                    "columnWidth": 0.5
               }, {
                    "name": "maternityLeave",
                    "itemId": "maternityLeave",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "Maternity Leave",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Maternity Leave<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "432C4F0E-ECD1-4051-A965-412CB525B01F",
                    "minValue": "0",
                    "maxValue": "10",
                    "bindable": "maternityLeave",
                    "bind": "{maternityLeave}",
                    "columnWidth": 0.5
               }, {
                    "name": "year",
                    "itemId": "year",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "Financial Year",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Financial Year<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "68503793-23F9-491F-89B8-2EB62D557458",
                    "minValue": "0",
                    "maxValue": "10",
                    "bindable": "year",
                    "bind": "{year}",
                    "columnWidth": 0.5
               }, {
                    "name": "versionId",
                    "itemId": "versionId",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "versionId",
                    "margin": "5 5 5 5",
                    "value": "-1",
                    "fieldLabel": "versionId",
                    "fieldId": "71D1793D-73F4-4108-B401-13E3062BA184",
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
                    "customId": 21,
                    "items": [{
                         "xtype": "tbfill",
                         "customWidgetType": "vdTbFill",
                         "parentId": 21,
                         "customId": 604
                    }, {
                         "customWidgetType": "vdButton",
                         "xtype": "button",
                         "margin": "0 5 0 5",
                         "text": "Save",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "saveFormButton",
                         "parentId": 21,
                         "customId": 605,
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
                         "parentId": 21,
                         "customId": 606,
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