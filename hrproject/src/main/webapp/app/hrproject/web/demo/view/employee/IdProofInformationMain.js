Ext.define('Hrproject.hrproject.web.demo.view.employee.IdProofInformationMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "IdProofInformationMainController",
     "restURL": "/IdProofInformation",
     "defaults": {
          "split": true
     },
     "requires": ["Hrproject.hrproject.shared.demo.model.employee.IdProofInformationModel", "Hrproject.hrproject.web.demo.controller.employee.IdProofInformationMainController", "Hrproject.hrproject.shared.demo.viewmodel.employee.IdProofInformationViewModel"],
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
               "displayName": "IdProof Information",
               "name": "IdProofInformationTreeContainer",
               "itemId": "IdProofInformationTreeContainer",
               "restURL": "/IdProofInformation",
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
                    "itemId": "IdProofInformationTree",
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
                         "name": "idDesc",
                         "itemId": "idDesc",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Id Proof",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Id Proof",
                         "fieldId": "656B9DA7-6449-49D0-B89F-5AEA2E9C18DC",
                         "minLength": "0",
                         "maxLength": "256"
                    }, {
                         "name": "idHelp",
                         "itemId": "idHelp",
                         "xtype": "textareafield",
                         "customWidgetType": "vdTextareafield",
                         "displayName": "Id Proof Details",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Id Proof Details",
                         "fieldId": "3E405813-29A5-45DB-8DCC-6B71E7B17969"
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
                    "viewModel": "IdProofInformationViewModel",
                    "xtype": "form",
                    "displayName": "IdProof Information",
                    "title": "IdProof Information",
                    "name": "IdProofInformation",
                    "itemId": "IdProofInformation",
                    "bodyPadding": 10,
                    "items": [{
                         "name": "idCode",
                         "itemId": "idCode",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "idCode",
                         "margin": "5 5 5 5",
                         "fieldLabel": "idCode<font color='red'> *<\/font>",
                         "fieldId": "E1480482-07D4-4447-A5A5-254DAB3A249C",
                         "minLength": "0",
                         "maxLength": "64",
                         "hidden": true,
                         "value": "",
                         "bindable": "idCode",
                         "bind": "{idCode}"
                    }, {
                         "name": "idDesc",
                         "itemId": "idDesc",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Id Proof",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Id Proof<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "656B9DA7-6449-49D0-B89F-5AEA2E9C18DC",
                         "minLength": "0",
                         "maxLength": "256",
                         "bindable": "idDesc",
                         "bind": "{idDesc}",
                         "columnWidth": 0.5
                    }, {
                         "name": "idHelp",
                         "itemId": "idHelp",
                         "xtype": "textareafield",
                         "customWidgetType": "vdTextareafield",
                         "displayName": "Id Proof Details",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Id Proof Details<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "3E405813-29A5-45DB-8DCC-6B71E7B17969",
                         "bindable": "idHelp",
                         "bind": "{idHelp}",
                         "columnWidth": 0.5
                    }, {
                         "name": "idIcon",
                         "itemId": "idIcon",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "idIcon",
                         "margin": "5 5 5 5",
                         "fieldLabel": "idIcon",
                         "fieldId": "F84AAFF2-3E6A-470B-84AE-4CFDBF8590AD",
                         "minLength": "0",
                         "bindable": "idIcon",
                         "bind": "{idIcon}",
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
                         "fieldId": "758BEF5E-CE81-4ED8-867C-4B25AB41DE65",
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
                         "customId": 854,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill",
                              "parentId": 854,
                              "customId": 917
                         }, {
                              "customWidgetType": "vdButton",
                              "xtype": "button",
                              "margin": "0 5 0 5",
                              "text": "Save",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "saveFormButton",
                              "parentId": 854,
                              "customId": 918,
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
                              "parentId": 854,
                              "customId": 919,
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
                    "displayName": "IdProof Information",
                    "title": "Details Grid",
                    "name": "IdProofInformationGrid",
                    "itemId": "IdProofInformationGrid",
                    "restURL": "/IdProofInformation",
                    "store": [],
                    "bodyPadding": 10,
                    "columns": [{
                         "header": "idCode",
                         "dataIndex": "idCode",
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
                         "header": "Id Proof",
                         "dataIndex": "idDesc",
                         "flex": 1
                    }, {
                         "header": "Id Proof Details",
                         "dataIndex": "idHelp",
                         "flex": 1
                    }, {
                         "header": "idIcon",
                         "dataIndex": "idIcon",
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
               "viewModel": "IdProofInformationViewModel",
               "xtype": "form",
               "displayName": "IdProof Information",
               "title": "IdProof Information",
               "name": "IdProofInformation",
               "itemId": "IdProofInformation",
               "bodyPadding": 10,
               "items": [{
                    "name": "idCode",
                    "itemId": "idCode",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "idCode",
                    "margin": "5 5 5 5",
                    "fieldLabel": "idCode<font color='red'> *<\/font>",
                    "fieldId": "E1480482-07D4-4447-A5A5-254DAB3A249C",
                    "minLength": "0",
                    "maxLength": "64",
                    "hidden": true,
                    "value": "",
                    "bindable": "idCode",
                    "bind": "{idCode}"
               }, {
                    "name": "idDesc",
                    "itemId": "idDesc",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "Id Proof",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Id Proof<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "656B9DA7-6449-49D0-B89F-5AEA2E9C18DC",
                    "minLength": "0",
                    "maxLength": "256",
                    "bindable": "idDesc",
                    "bind": "{idDesc}",
                    "columnWidth": 0.5
               }, {
                    "name": "idHelp",
                    "itemId": "idHelp",
                    "xtype": "textareafield",
                    "customWidgetType": "vdTextareafield",
                    "displayName": "Id Proof Details",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Id Proof Details<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "3E405813-29A5-45DB-8DCC-6B71E7B17969",
                    "bindable": "idHelp",
                    "bind": "{idHelp}",
                    "columnWidth": 0.5
               }, {
                    "name": "idIcon",
                    "itemId": "idIcon",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "idIcon",
                    "margin": "5 5 5 5",
                    "fieldLabel": "idIcon",
                    "fieldId": "F84AAFF2-3E6A-470B-84AE-4CFDBF8590AD",
                    "minLength": "0",
                    "bindable": "idIcon",
                    "bind": "{idIcon}",
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
                    "fieldId": "758BEF5E-CE81-4ED8-867C-4B25AB41DE65",
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
                    "customId": 854,
                    "items": [{
                         "xtype": "tbfill",
                         "customWidgetType": "vdTbFill",
                         "parentId": 854,
                         "customId": 917
                    }, {
                         "customWidgetType": "vdButton",
                         "xtype": "button",
                         "margin": "0 5 0 5",
                         "text": "Save",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "saveFormButton",
                         "parentId": 854,
                         "customId": 918,
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
                         "parentId": 854,
                         "customId": 919,
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