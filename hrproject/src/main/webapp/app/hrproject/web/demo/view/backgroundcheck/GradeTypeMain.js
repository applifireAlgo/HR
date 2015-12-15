Ext.define('Hrproject.hrproject.web.demo.view.backgroundcheck.GradeTypeMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "GradeTypeMainController",
     "restURL": "/GradeType",
     "defaults": {
          "split": true
     },
     "requires": ["Hrproject.hrproject.shared.demo.model.backgroundcheck.GradeTypeModel", "Hrproject.hrproject.web.demo.controller.backgroundcheck.GradeTypeMainController", "Hrproject.hrproject.shared.demo.viewmodel.backgroundcheck.GradeTypeViewModel"],
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
               "displayName": "Grade Type",
               "name": "GradeTypeTreeContainer",
               "itemId": "GradeTypeTreeContainer",
               "restURL": "/GradeType",
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
                    "itemId": "GradeTypeTree",
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
                         "name": "grdDesc",
                         "itemId": "grdDesc",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Grade",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Grade",
                         "fieldId": "CEA283B1-E923-43A6-90A9-764AD8B99022",
                         "minLength": "0",
                         "maxLength": "256"
                    }, {
                         "name": "grdHelp",
                         "itemId": "grdHelp",
                         "xtype": "textareafield",
                         "customWidgetType": "vdTextareafield",
                         "displayName": "Grade Details",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Grade Details",
                         "fieldId": "8D7809F6-4A82-45D5-BF88-D0750DD0FFB0"
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
                    "viewModel": "GradeTypeViewModel",
                    "xtype": "form",
                    "displayName": "Grade Type",
                    "title": "Grade Type",
                    "name": "GradeType",
                    "itemId": "GradeType",
                    "bodyPadding": 10,
                    "items": [{
                         "name": "grdCode",
                         "itemId": "grdCode",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "grdCode",
                         "margin": "5 5 5 5",
                         "fieldLabel": "grdCode<font color='red'> *<\/font>",
                         "fieldId": "DEE37082-15EB-4F67-84D3-23AA16B593AD",
                         "minLength": "0",
                         "maxLength": "64",
                         "hidden": true,
                         "value": "",
                         "bindable": "grdCode",
                         "bind": "{grdCode}"
                    }, {
                         "name": "grdDesc",
                         "itemId": "grdDesc",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Grade",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Grade<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "CEA283B1-E923-43A6-90A9-764AD8B99022",
                         "minLength": "0",
                         "maxLength": "256",
                         "bindable": "grdDesc",
                         "bind": "{grdDesc}",
                         "columnWidth": 0.5
                    }, {
                         "name": "grdHelp",
                         "itemId": "grdHelp",
                         "xtype": "textareafield",
                         "customWidgetType": "vdTextareafield",
                         "displayName": "Grade Details",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Grade Details<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "8D7809F6-4A82-45D5-BF88-D0750DD0FFB0",
                         "bindable": "grdHelp",
                         "bind": "{grdHelp}",
                         "columnWidth": 0.5
                    }, {
                         "name": "grdIcon",
                         "itemId": "grdIcon",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "grdIcon",
                         "margin": "5 5 5 5",
                         "fieldLabel": "grdIcon",
                         "fieldId": "63D33CF4-64A8-4A19-976C-0933EEC5E03C",
                         "minLength": "0",
                         "bindable": "grdIcon",
                         "bind": "{grdIcon}",
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
                         "fieldId": "CB3C1684-7C7A-4FCC-9B9F-682C26BEDE34",
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
                         "customId": 494,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill",
                              "parentId": 494,
                              "customId": 994
                         }, {
                              "customWidgetType": "vdButton",
                              "xtype": "button",
                              "margin": "0 5 0 5",
                              "text": "Save",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "saveFormButton",
                              "parentId": 494,
                              "customId": 995,
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
                              "parentId": 494,
                              "customId": 996,
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
                    "displayName": "Grade Type",
                    "title": "Details Grid",
                    "name": "GradeTypeGrid",
                    "itemId": "GradeTypeGrid",
                    "restURL": "/GradeType",
                    "store": [],
                    "bodyPadding": 10,
                    "columns": [{
                         "header": "grdCode",
                         "dataIndex": "grdCode",
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
                         "header": "Grade",
                         "dataIndex": "grdDesc",
                         "flex": 1
                    }, {
                         "header": "Grade Details",
                         "dataIndex": "grdHelp",
                         "flex": 1
                    }, {
                         "header": "grdIcon",
                         "dataIndex": "grdIcon",
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
               "viewModel": "GradeTypeViewModel",
               "xtype": "form",
               "displayName": "Grade Type",
               "title": "Grade Type",
               "name": "GradeType",
               "itemId": "GradeType",
               "bodyPadding": 10,
               "items": [{
                    "name": "grdCode",
                    "itemId": "grdCode",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "grdCode",
                    "margin": "5 5 5 5",
                    "fieldLabel": "grdCode<font color='red'> *<\/font>",
                    "fieldId": "DEE37082-15EB-4F67-84D3-23AA16B593AD",
                    "minLength": "0",
                    "maxLength": "64",
                    "hidden": true,
                    "value": "",
                    "bindable": "grdCode",
                    "bind": "{grdCode}"
               }, {
                    "name": "grdDesc",
                    "itemId": "grdDesc",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "Grade",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Grade<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "CEA283B1-E923-43A6-90A9-764AD8B99022",
                    "minLength": "0",
                    "maxLength": "256",
                    "bindable": "grdDesc",
                    "bind": "{grdDesc}",
                    "columnWidth": 0.5
               }, {
                    "name": "grdHelp",
                    "itemId": "grdHelp",
                    "xtype": "textareafield",
                    "customWidgetType": "vdTextareafield",
                    "displayName": "Grade Details",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Grade Details<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "8D7809F6-4A82-45D5-BF88-D0750DD0FFB0",
                    "bindable": "grdHelp",
                    "bind": "{grdHelp}",
                    "columnWidth": 0.5
               }, {
                    "name": "grdIcon",
                    "itemId": "grdIcon",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "grdIcon",
                    "margin": "5 5 5 5",
                    "fieldLabel": "grdIcon",
                    "fieldId": "63D33CF4-64A8-4A19-976C-0933EEC5E03C",
                    "minLength": "0",
                    "bindable": "grdIcon",
                    "bind": "{grdIcon}",
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
                    "fieldId": "CB3C1684-7C7A-4FCC-9B9F-682C26BEDE34",
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
                    "customId": 494,
                    "items": [{
                         "xtype": "tbfill",
                         "customWidgetType": "vdTbFill",
                         "parentId": 494,
                         "customId": 994
                    }, {
                         "customWidgetType": "vdButton",
                         "xtype": "button",
                         "margin": "0 5 0 5",
                         "text": "Save",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "saveFormButton",
                         "parentId": 494,
                         "customId": 995,
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
                         "parentId": 494,
                         "customId": 996,
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