Ext.define('Hrproject.hrproject.web.demo.view.documentmanager.DocumentTypeMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "DocumentTypeMainController",
     "restURL": "/DocumentType",
     "defaults": {
          "split": true
     },
     "requires": ["Hrproject.hrproject.shared.demo.model.documentmanager.DocumentTypeModel", "Hrproject.hrproject.web.demo.controller.documentmanager.DocumentTypeMainController", "Hrproject.hrproject.shared.demo.viewmodel.documentmanager.DocumentTypeViewModel"],
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
               "displayName": "Document Type",
               "name": "DocumentTypeTreeContainer",
               "itemId": "DocumentTypeTreeContainer",
               "restURL": "/DocumentType",
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
                    "itemId": "DocumentTypeTree",
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
                         "name": "docTypeName",
                         "itemId": "docTypeName",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Doc Type",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Doc Type",
                         "fieldId": "D0CED675-6BE2-4D3E-B62D-33C2CC2C58CE",
                         "minLength": "0",
                         "maxLength": "256",
                         "errorMessage": "Please enter valid Document Type"
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
                    "viewModel": "DocumentTypeViewModel",
                    "xtype": "form",
                    "displayName": "Document Type",
                    "title": "Document Type",
                    "name": "DocumentType",
                    "itemId": "DocumentType",
                    "bodyPadding": 10,
                    "items": [{
                         "name": "docTypeCode",
                         "itemId": "docTypeCode",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Doc Type Code",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Doc Type Code<font color='red'> *<\/font>",
                         "fieldId": "77234F34-82D2-411E-8831-1481C07E8E5D",
                         "minLength": "0",
                         "maxLength": "64",
                         "hidden": true,
                         "value": "",
                         "bindable": "docTypeCode",
                         "bind": "{docTypeCode}"
                    }, {
                         "name": "docTypeName",
                         "itemId": "docTypeName",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Doc Type",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Doc Type<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "D0CED675-6BE2-4D3E-B62D-33C2CC2C58CE",
                         "minLength": "0",
                         "maxLength": "256",
                         "errorMessage": "Please enter valid Document Type",
                         "bindable": "docTypeName",
                         "bind": "{docTypeName}",
                         "columnWidth": 0.5
                    }, {
                         "name": "docTypeDesc",
                         "itemId": "docTypeDesc",
                         "xtype": "textareafield",
                         "customWidgetType": "vdTextareafield",
                         "displayName": "Doc Type Description",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Doc Type Description",
                         "fieldId": "03760D13-8201-4E67-81F9-6F51F39E15CA",
                         "bindable": "docTypeDesc",
                         "bind": "{docTypeDesc}",
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
                         "fieldId": "87E7CF9E-C496-4252-B5E4-A361580FC42A",
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
                         "customId": 194,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill",
                              "parentId": 194,
                              "customId": 412
                         }, {
                              "customWidgetType": "vdButton",
                              "xtype": "button",
                              "margin": "0 5 0 5",
                              "text": "Save",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "saveFormButton",
                              "parentId": 194,
                              "customId": 413,
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
                              "parentId": 194,
                              "customId": 414,
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
                    "displayName": "Document Type",
                    "title": "Details Grid",
                    "name": "DocumentTypeGrid",
                    "itemId": "DocumentTypeGrid",
                    "restURL": "/DocumentType",
                    "store": [],
                    "bodyPadding": 10,
                    "columns": [{
                         "header": "Doc Type Code",
                         "dataIndex": "docTypeCode",
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
                         "header": "Doc Type",
                         "dataIndex": "docTypeName",
                         "flex": 1
                    }, {
                         "header": "Doc Type Description",
                         "dataIndex": "docTypeDesc",
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
               "viewModel": "DocumentTypeViewModel",
               "xtype": "form",
               "displayName": "Document Type",
               "title": "Document Type",
               "name": "DocumentType",
               "itemId": "DocumentType",
               "bodyPadding": 10,
               "items": [{
                    "name": "docTypeCode",
                    "itemId": "docTypeCode",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "Doc Type Code",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Doc Type Code<font color='red'> *<\/font>",
                    "fieldId": "77234F34-82D2-411E-8831-1481C07E8E5D",
                    "minLength": "0",
                    "maxLength": "64",
                    "hidden": true,
                    "value": "",
                    "bindable": "docTypeCode",
                    "bind": "{docTypeCode}"
               }, {
                    "name": "docTypeName",
                    "itemId": "docTypeName",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "Doc Type",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Doc Type<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "D0CED675-6BE2-4D3E-B62D-33C2CC2C58CE",
                    "minLength": "0",
                    "maxLength": "256",
                    "errorMessage": "Please enter valid Document Type",
                    "bindable": "docTypeName",
                    "bind": "{docTypeName}",
                    "columnWidth": 0.5
               }, {
                    "name": "docTypeDesc",
                    "itemId": "docTypeDesc",
                    "xtype": "textareafield",
                    "customWidgetType": "vdTextareafield",
                    "displayName": "Doc Type Description",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Doc Type Description",
                    "fieldId": "03760D13-8201-4E67-81F9-6F51F39E15CA",
                    "bindable": "docTypeDesc",
                    "bind": "{docTypeDesc}",
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
                    "fieldId": "87E7CF9E-C496-4252-B5E4-A361580FC42A",
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
                    "customId": 194,
                    "items": [{
                         "xtype": "tbfill",
                         "customWidgetType": "vdTbFill",
                         "parentId": 194,
                         "customId": 412
                    }, {
                         "customWidgetType": "vdButton",
                         "xtype": "button",
                         "margin": "0 5 0 5",
                         "text": "Save",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "saveFormButton",
                         "parentId": 194,
                         "customId": 413,
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
                         "parentId": 194,
                         "customId": 414,
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