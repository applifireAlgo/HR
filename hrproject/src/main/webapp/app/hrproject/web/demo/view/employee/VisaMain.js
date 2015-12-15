Ext.define('Hrproject.hrproject.web.demo.view.employee.VisaMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "VisaMainController",
     "restURL": "/Visa",
     "defaults": {
          "split": true
     },
     "requires": ["Hrproject.hrproject.shared.demo.model.employee.VisaModel", "Hrproject.hrproject.web.demo.controller.employee.VisaMainController", "Hrproject.hrproject.shared.demo.viewmodel.employee.VisaViewModel"],
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
               "displayName": "Visa",
               "name": "VisaTreeContainer",
               "itemId": "VisaTreeContainer",
               "restURL": "/Visa",
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
                    "itemId": "VisaTree",
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
                         "name": "visaDesc",
                         "itemId": "visaDesc",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Visa Type",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Visa Type",
                         "fieldId": "CDBA4F5E-07DD-4875-89AB-168B8A1C0674",
                         "minLength": "0",
                         "maxLength": "256"
                    }, {
                         "name": "visaHelp",
                         "itemId": "visaHelp",
                         "xtype": "textareafield",
                         "customWidgetType": "vdTextareafield",
                         "displayName": "Visa Type Details",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Visa Type Details",
                         "fieldId": "EE8A142A-DFF1-4BAA-8393-8FF43049B51F"
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
                    "viewModel": "VisaViewModel",
                    "xtype": "form",
                    "displayName": "Visa",
                    "title": "Visa",
                    "name": "Visa",
                    "itemId": "Visa",
                    "bodyPadding": 10,
                    "items": [{
                         "name": "visaCode",
                         "itemId": "visaCode",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "visaCode",
                         "margin": "5 5 5 5",
                         "fieldLabel": "visaCode<font color='red'> *<\/font>",
                         "fieldId": "AC312078-D875-4F6D-A754-9BCFCAB5279D",
                         "minLength": "0",
                         "maxLength": "64",
                         "hidden": true,
                         "value": "",
                         "bindable": "visaCode",
                         "bind": "{visaCode}"
                    }, {
                         "name": "visaDesc",
                         "itemId": "visaDesc",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Visa Type",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Visa Type<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "CDBA4F5E-07DD-4875-89AB-168B8A1C0674",
                         "minLength": "0",
                         "maxLength": "256",
                         "bindable": "visaDesc",
                         "bind": "{visaDesc}",
                         "columnWidth": 0.5
                    }, {
                         "name": "visaHelp",
                         "itemId": "visaHelp",
                         "xtype": "textareafield",
                         "customWidgetType": "vdTextareafield",
                         "displayName": "Visa Type Details",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Visa Type Details<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "EE8A142A-DFF1-4BAA-8393-8FF43049B51F",
                         "bindable": "visaHelp",
                         "bind": "{visaHelp}",
                         "columnWidth": 0.5
                    }, {
                         "name": "visaIcon",
                         "itemId": "visaIcon",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "visaIcon",
                         "margin": "5 5 5 5",
                         "fieldLabel": "visaIcon",
                         "fieldId": "369B07A3-C602-4C41-B6F7-A54E6C3E2FFA",
                         "minLength": "0",
                         "bindable": "visaIcon",
                         "bind": "{visaIcon}",
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
                         "fieldId": "191ECFFE-21D6-4AAD-ABC1-31FB04AF8C52",
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
                         "customId": 876,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill",
                              "parentId": 876,
                              "customId": 219
                         }, {
                              "customWidgetType": "vdButton",
                              "xtype": "button",
                              "margin": "0 5 0 5",
                              "text": "Save",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "saveFormButton",
                              "parentId": 876,
                              "customId": 220,
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
                              "parentId": 876,
                              "customId": 221,
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
                    "displayName": "Visa",
                    "title": "Details Grid",
                    "name": "VisaGrid",
                    "itemId": "VisaGrid",
                    "restURL": "/Visa",
                    "store": [],
                    "bodyPadding": 10,
                    "columns": [{
                         "header": "visaCode",
                         "dataIndex": "visaCode",
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
                         "header": "Visa Type",
                         "dataIndex": "visaDesc",
                         "flex": 1
                    }, {
                         "header": "Visa Type Details",
                         "dataIndex": "visaHelp",
                         "flex": 1
                    }, {
                         "header": "visaIcon",
                         "dataIndex": "visaIcon",
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
               "viewModel": "VisaViewModel",
               "xtype": "form",
               "displayName": "Visa",
               "title": "Visa",
               "name": "Visa",
               "itemId": "Visa",
               "bodyPadding": 10,
               "items": [{
                    "name": "visaCode",
                    "itemId": "visaCode",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "visaCode",
                    "margin": "5 5 5 5",
                    "fieldLabel": "visaCode<font color='red'> *<\/font>",
                    "fieldId": "AC312078-D875-4F6D-A754-9BCFCAB5279D",
                    "minLength": "0",
                    "maxLength": "64",
                    "hidden": true,
                    "value": "",
                    "bindable": "visaCode",
                    "bind": "{visaCode}"
               }, {
                    "name": "visaDesc",
                    "itemId": "visaDesc",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "Visa Type",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Visa Type<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "CDBA4F5E-07DD-4875-89AB-168B8A1C0674",
                    "minLength": "0",
                    "maxLength": "256",
                    "bindable": "visaDesc",
                    "bind": "{visaDesc}",
                    "columnWidth": 0.5
               }, {
                    "name": "visaHelp",
                    "itemId": "visaHelp",
                    "xtype": "textareafield",
                    "customWidgetType": "vdTextareafield",
                    "displayName": "Visa Type Details",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Visa Type Details<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "EE8A142A-DFF1-4BAA-8393-8FF43049B51F",
                    "bindable": "visaHelp",
                    "bind": "{visaHelp}",
                    "columnWidth": 0.5
               }, {
                    "name": "visaIcon",
                    "itemId": "visaIcon",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "visaIcon",
                    "margin": "5 5 5 5",
                    "fieldLabel": "visaIcon",
                    "fieldId": "369B07A3-C602-4C41-B6F7-A54E6C3E2FFA",
                    "minLength": "0",
                    "bindable": "visaIcon",
                    "bind": "{visaIcon}",
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
                    "fieldId": "191ECFFE-21D6-4AAD-ABC1-31FB04AF8C52",
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
                    "customId": 876,
                    "items": [{
                         "xtype": "tbfill",
                         "customWidgetType": "vdTbFill",
                         "parentId": 876,
                         "customId": 219
                    }, {
                         "customWidgetType": "vdButton",
                         "xtype": "button",
                         "margin": "0 5 0 5",
                         "text": "Save",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "saveFormButton",
                         "parentId": 876,
                         "customId": 220,
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
                         "parentId": 876,
                         "customId": 221,
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