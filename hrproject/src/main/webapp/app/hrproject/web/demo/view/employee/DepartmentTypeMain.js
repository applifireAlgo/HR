Ext.define('Hrproject.hrproject.web.demo.view.employee.DepartmentTypeMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "DepartmentTypeMainController",
     "restURL": "/DepartmentType",
     "defaults": {
          "split": true
     },
     "requires": ["Hrproject.hrproject.shared.demo.model.employee.DepartmentTypeModel", "Hrproject.hrproject.web.demo.controller.employee.DepartmentTypeMainController", "Hrproject.hrproject.shared.demo.viewmodel.employee.DepartmentTypeViewModel"],
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
               "displayName": "Department Type",
               "name": "DepartmentTypeTreeContainer",
               "itemId": "DepartmentTypeTreeContainer",
               "restURL": "/DepartmentType",
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
                    "itemId": "DepartmentTypeTree",
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
                    "items": [{
                         "name": "deptTypeDesc",
                         "itemId": "deptTypeDesc",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Department Name",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Department Name",
                         "fieldId": "A089302C-7227-4070-B47B-8E6570134FBB",
                         "minLength": "0",
                         "maxLength": "256"
                    }, {
                         "name": "deptTypeHelp",
                         "itemId": "deptTypeHelp",
                         "xtype": "textareafield",
                         "customWidgetType": "vdTextareafield",
                         "displayName": "Department Details",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Department Details",
                         "fieldId": "37B3E9E1-B5BC-4998-8C5A-16FF5FF24271"
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
                    "customWidgetType": "vdFormpanel",
                    "viewModel": "DepartmentTypeViewModel",
                    "xtype": "form",
                    "displayName": "Department Type",
                    "title": "Department Type",
                    "name": "DepartmentType",
                    "itemId": "DepartmentType",
                    "bodyPadding": 10,
                    "items": [{
                         "name": "deptTypeCode",
                         "itemId": "deptTypeCode",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "deptTypeCode",
                         "margin": "5 5 5 5",
                         "fieldLabel": "deptTypeCode<font color='red'> *<\/font>",
                         "fieldId": "9998EA83-6724-4219-8EE2-E5FC63AAECDF",
                         "minLength": "0",
                         "maxLength": "64",
                         "hidden": true,
                         "value": "",
                         "bindable": "deptTypeCode",
                         "bind": "{deptTypeCode}"
                    }, {
                         "name": "deptTypeDesc",
                         "itemId": "deptTypeDesc",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Department Name",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Department Name<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "A089302C-7227-4070-B47B-8E6570134FBB",
                         "minLength": "0",
                         "maxLength": "256",
                         "bindable": "deptTypeDesc",
                         "bind": "{deptTypeDesc}",
                         "columnWidth": 0.5
                    }, {
                         "name": "deptTypeHelp",
                         "itemId": "deptTypeHelp",
                         "xtype": "textareafield",
                         "customWidgetType": "vdTextareafield",
                         "displayName": "Department Details",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Department Details<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "37B3E9E1-B5BC-4998-8C5A-16FF5FF24271",
                         "bindable": "deptTypeHelp",
                         "bind": "{deptTypeHelp}",
                         "columnWidth": 0.5
                    }, {
                         "name": "deptTypeIcon",
                         "itemId": "deptTypeIcon",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "deptTypeIcon",
                         "margin": "5 5 5 5",
                         "fieldLabel": "deptTypeIcon",
                         "fieldId": "D360CD71-DF2A-47D5-8EAF-1C9DB41F0D97",
                         "minLength": "0",
                         "bindable": "deptTypeIcon",
                         "bind": "{deptTypeIcon}",
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
                         "fieldId": "55AEA7D3-8C93-483A-AC46-4DC5125ED073",
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
                         "customId": 763,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill",
                              "parentId": 763,
                              "customId": 690
                         }, {
                              "customWidgetType": "vdButton",
                              "xtype": "button",
                              "margin": "0 5 0 5",
                              "text": "Save",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "saveFormButton",
                              "parentId": 763,
                              "customId": 691,
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
                              "parentId": 763,
                              "customId": 692,
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
                    "displayName": "Department Type",
                    "title": "Details Grid",
                    "name": "DepartmentTypeGrid",
                    "itemId": "DepartmentTypeGrid",
                    "restURL": "/DepartmentType",
                    "store": [],
                    "bodyPadding": 10,
                    "columns": [{
                         "header": "deptTypeCode",
                         "dataIndex": "deptTypeCode",
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
                         "header": "Department Name",
                         "dataIndex": "deptTypeDesc",
                         "flex": 1
                    }, {
                         "header": "Department Details",
                         "dataIndex": "deptTypeHelp",
                         "flex": 1
                    }, {
                         "header": "deptTypeIcon",
                         "dataIndex": "deptTypeIcon",
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
               "viewModel": "DepartmentTypeViewModel",
               "xtype": "form",
               "displayName": "Department Type",
               "title": "Department Type",
               "name": "DepartmentType",
               "itemId": "DepartmentType",
               "bodyPadding": 10,
               "items": [{
                    "name": "deptTypeCode",
                    "itemId": "deptTypeCode",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "deptTypeCode",
                    "margin": "5 5 5 5",
                    "fieldLabel": "deptTypeCode<font color='red'> *<\/font>",
                    "fieldId": "9998EA83-6724-4219-8EE2-E5FC63AAECDF",
                    "minLength": "0",
                    "maxLength": "64",
                    "hidden": true,
                    "value": "",
                    "bindable": "deptTypeCode",
                    "bind": "{deptTypeCode}"
               }, {
                    "name": "deptTypeDesc",
                    "itemId": "deptTypeDesc",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "Department Name",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Department Name<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "A089302C-7227-4070-B47B-8E6570134FBB",
                    "minLength": "0",
                    "maxLength": "256",
                    "bindable": "deptTypeDesc",
                    "bind": "{deptTypeDesc}",
                    "columnWidth": 0.5
               }, {
                    "name": "deptTypeHelp",
                    "itemId": "deptTypeHelp",
                    "xtype": "textareafield",
                    "customWidgetType": "vdTextareafield",
                    "displayName": "Department Details",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Department Details<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "37B3E9E1-B5BC-4998-8C5A-16FF5FF24271",
                    "bindable": "deptTypeHelp",
                    "bind": "{deptTypeHelp}",
                    "columnWidth": 0.5
               }, {
                    "name": "deptTypeIcon",
                    "itemId": "deptTypeIcon",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "deptTypeIcon",
                    "margin": "5 5 5 5",
                    "fieldLabel": "deptTypeIcon",
                    "fieldId": "D360CD71-DF2A-47D5-8EAF-1C9DB41F0D97",
                    "minLength": "0",
                    "bindable": "deptTypeIcon",
                    "bind": "{deptTypeIcon}",
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
                    "fieldId": "55AEA7D3-8C93-483A-AC46-4DC5125ED073",
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
                    "customId": 763,
                    "items": [{
                         "xtype": "tbfill",
                         "customWidgetType": "vdTbFill",
                         "parentId": 763,
                         "customId": 690
                    }, {
                         "customWidgetType": "vdButton",
                         "xtype": "button",
                         "margin": "0 5 0 5",
                         "text": "Save",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "saveFormButton",
                         "parentId": 763,
                         "customId": 691,
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
                         "parentId": 763,
                         "customId": 692,
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