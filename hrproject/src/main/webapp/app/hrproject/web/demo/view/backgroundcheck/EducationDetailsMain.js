Ext.define('Hrproject.hrproject.web.demo.view.backgroundcheck.EducationDetailsMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "EducationDetailsMainController",
     "restURL": "/EducationDetails",
     "defaults": {
          "split": true
     },
     "requires": ["Hrproject.hrproject.shared.demo.model.backgroundcheck.EducationDetailsModel", "Hrproject.hrproject.web.demo.controller.backgroundcheck.EducationDetailsMainController", "Hrproject.hrproject.shared.demo.model.employee.EmpInformationModel", "Hrproject.hrproject.shared.demo.model.backgroundcheck.DegreeTypeModel", "Hrproject.hrproject.shared.demo.model.backgroundcheck.UniversityTypeModel", "Hrproject.view.fw.component.Grids", "Hrproject.hrproject.shared.demo.model.documentmanager.DocumentTypeModel", "Hrproject.view.fw.component.DateFields", "Hrproject.hrproject.shared.demo.viewmodel.backgroundcheck.EducationDetailsViewModel"],
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
               "displayName": "Education Details",
               "name": "EducationDetailsTreeContainer",
               "itemId": "EducationDetailsTreeContainer",
               "margin": "5 0 5 5",
               "autoScroll": false,
               "collapsible": true,
               "titleCollapse": true,
               "collapseMode": "header",
               "collapsed": false,
               "items": [{
                    "xtype": "treepanel",
                    "customWidgetType": "vdTree",
                    "useArrows": true,
                    "title": "Browse",
                    "rootVisible": false,
                    "itemId": "EducationDetailsTree",
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
                    "layout": "fit",
                    "autoScroll": false,
                    "itemId": "queryPanel",
                    "buttons": [{
                         "text": "Filter",
                         "handler": "onFilterClick"
                    }],
                    "items": [{
                         "name": "empId",
                         "itemId": "empId",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "Employee",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Employee",
                         "fieldId": "891C116B-2F14-414B-ADBD-107C83CFCA94",
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
                    }, {
                         "name": "degreeCode",
                         "itemId": "degreeCode",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "Degree",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Degree",
                         "fieldId": "B21EFFD0-212B-4FE1-8D8F-DB6D5980FA9D",
                         "restURL": "DegreeType",
                         "displayField": "primaryDisplay",
                         "valueField": "primaryKey",
                         "typeAhead": true,
                         "queryMode": "local",
                         "minChars": 2,
                         "store": {
                              "data": [],
                              "model": "Hrproject.hrproject.shared.demo.model.backgroundcheck.DegreeTypeModel"
                         }
                    }, {
                         "name": "unvCode",
                         "itemId": "unvCode",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "University",
                         "margin": "5 5 5 5",
                         "fieldLabel": "University",
                         "fieldId": "56E77939-F7A9-41AF-8A81-AE2472F54EF7",
                         "restURL": "UniversityType",
                         "displayField": "primaryDisplay",
                         "valueField": "primaryKey",
                         "typeAhead": true,
                         "queryMode": "local",
                         "minChars": 2,
                         "store": {
                              "data": [],
                              "model": "Hrproject.hrproject.shared.demo.model.backgroundcheck.UniversityTypeModel"
                         }
                    }, {
                         "name": "yearOfGraduation",
                         "itemId": "yearOfGraduation",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Year Of Graduation",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Year Of Graduation",
                         "fieldId": "8982992C-210D-40AD-A3FB-07A115F09D6A",
                         "minValue": "0",
                         "maxValue": "11"
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
                    "xtype": "form",
                    "displayName": "Education Details",
                    "name": "EducationDetails",
                    "itemId": "EducationDetailsForm",
                    "bodyPadding": 10,
                    "items": [{
                         "xtype": "form",
                         "itemId": "form0",
                         "customWidgetType": "vdCard",
                         "header": {
                              "hidden": true
                         },
                         "items": [{
                              "layout": "column",
                              "customWidgetType": "vdColumnLayout",
                              "header": {
                                   "hidden": true
                              },
                              "xtype": "panel",
                              "items": [{
                                   "name": "eduPk",
                                   "itemId": "eduPk",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "eduPk",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "eduPk<font color='red'> *<\/font>",
                                   "fieldId": "43F80A2B-513B-4F1F-97F6-28ADFA216263",
                                   "minLength": "0",
                                   "maxLength": "64",
                                   "hidden": true,
                                   "value": "",
                                   "bindable": "eduPk",
                                   "bind": "{eduPk}"
                              }, {
                                   "name": "empId",
                                   "itemId": "empId",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "Employee",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Employee<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "891C116B-2F14-414B-ADBD-107C83CFCA94",
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
                                   "columnWidth": 0.5,
                                   "bind": "{empId}"
                              }, {
                                   "name": "degreeCode",
                                   "itemId": "degreeCode",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "Degree",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Degree<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "B21EFFD0-212B-4FE1-8D8F-DB6D5980FA9D",
                                   "restURL": "DegreeType",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "typeAhead": true,
                                   "queryMode": "local",
                                   "minChars": 2,
                                   "store": {
                                        "data": [],
                                        "model": "Hrproject.hrproject.shared.demo.model.backgroundcheck.DegreeTypeModel"
                                   },
                                   "bindable": "degreeCode",
                                   "columnWidth": 0.5,
                                   "bind": "{degreeCode}"
                              }, {
                                   "name": "unvCode",
                                   "itemId": "unvCode",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "University",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "University<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "56E77939-F7A9-41AF-8A81-AE2472F54EF7",
                                   "restURL": "UniversityType",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "typeAhead": true,
                                   "queryMode": "local",
                                   "minChars": 2,
                                   "store": {
                                        "data": [],
                                        "model": "Hrproject.hrproject.shared.demo.model.backgroundcheck.UniversityTypeModel"
                                   },
                                   "bindable": "unvCode",
                                   "columnWidth": 0.5,
                                   "bind": "{unvCode}"
                              }, {
                                   "name": "yearOfGraduation",
                                   "itemId": "yearOfGraduation",
                                   "xtype": "numberfield",
                                   "customWidgetType": "vdNumberfield",
                                   "displayName": "Year Of Graduation",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Year Of Graduation<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "8982992C-210D-40AD-A3FB-07A115F09D6A",
                                   "minValue": "0",
                                   "maxValue": "11",
                                   "bindable": "yearOfGraduation",
                                   "columnWidth": 0.5,
                                   "bind": "{yearOfGraduation}"
                              }, {
                                   "name": "versionId",
                                   "itemId": "versionId",
                                   "xtype": "numberfield",
                                   "customWidgetType": "vdNumberfield",
                                   "displayName": "versionId",
                                   "margin": "5 5 5 5",
                                   "value": "-1",
                                   "fieldLabel": "versionId",
                                   "fieldId": "CF865641-9887-4B6C-A683-C255957A046A",
                                   "bindable": "versionId",
                                   "bind": "{versionId}",
                                   "hidden": true
                              }]
                         }]
                    }, {
                         "xtype": "form",
                         "displayName": "Document List",
                         "title": "Document List",
                         "name": "DocumentList",
                         "itemId": "DocumentListForm",
                         "bodyPadding": 10,
                         "items": [{
                              "xtype": "form",
                              "itemId": "form1",
                              "customWidgetType": "vdAnchorLayout",
                              "header": {
                                   "hidden": true
                              },
                              "items": [{
                                   "layout": "column",
                                   "customWidgetType": "vdColumnLayout",
                                   "header": {
                                        "hidden": true
                                   },
                                   "xtype": "panel",
                                   "items": [{
                                        "name": "docTypeCode",
                                        "itemId": "docTypeCode",
                                        "xtype": "combo",
                                        "customWidgetType": "vdCombo",
                                        "displayName": "Doc Type Code",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Doc Type Code<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "E3DFF558-AA2A-45CC-9030-17F531AB13C6",
                                        "restURL": "DocumentType",
                                        "displayField": "primaryDisplay",
                                        "valueField": "primaryKey",
                                        "typeAhead": true,
                                        "queryMode": "local",
                                        "minChars": 2,
                                        "store": {
                                             "data": [],
                                             "model": "Hrproject.hrproject.shared.demo.model.documentmanager.DocumentTypeModel"
                                        },
                                        "bindable": "documentList.docTypeCode",
                                        "columnWidth": 0.5
                                   }, {
                                        "name": "docName",
                                        "itemId": "docName",
                                        "xtype": "textfield",
                                        "customWidgetType": "vdTextfield",
                                        "displayName": "Doc Name",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Doc Name<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "DD0EA5CE-D79B-4F33-9D20-11F144D63A3A",
                                        "minLength": "0",
                                        "maxLength": "512",
                                        "errorMessage": "Please enter valid Document Name",
                                        "bindable": "documentList.docName",
                                        "columnWidth": 0.5
                                   }, {
                                        "name": "docFile",
                                        "itemId": "docFile",
                                        "xtype": "textfield",
                                        "customWidgetType": "vdTextfield",
                                        "displayName": "Doc File",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Doc File<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "2663E550-29C5-4094-BC43-0C340504360F",
                                        "minLength": "0",
                                        "maxLength": "128",
                                        "bindable": "documentList.docFile",
                                        "columnWidth": 0.5
                                   }, {
                                        "name": "docDesc",
                                        "itemId": "docDesc",
                                        "xtype": "textareafield",
                                        "customWidgetType": "vdTextareafield",
                                        "displayName": "Doc Desc",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Doc Desc",
                                        "fieldId": "14E58370-ED3B-4577-AA1B-42AB9E73D90B",
                                        "bindable": "documentList.docDesc",
                                        "columnWidth": 0.5
                                   }, {
                                        "name": "docDate",
                                        "itemId": "docDate",
                                        "xtype": "datefields",
                                        "customWidgetType": "vdDatefield",
                                        "displayName": "Doc Date",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Doc Date",
                                        "fieldId": "F3D5190E-A134-472F-B8DB-5A60D82CD829",
                                        "bindable": "documentList.docDate",
                                        "columnWidth": 0.5
                                   }]
                              }]
                         }, {
                              "columnWidth": 1,
                              "xtype": "button",
                              "customWidgetType": "vdButton",
                              "maxWidth": 187,
                              "text": "Add DocumentList",
                              "handler": "addDocumentList"
                         }, {
                              "xtype": "grids",
                              "customWidgetType": "vdGrid",
                              "title": "DocumentList",
                              "columnWidth": 1,
                              "itemId": "DocumentListGrid",
                              "fieldLabel": "List",
                              "bindLevel": "documentList",
                              "bindable": "documentList",
                              "listeners": {
                                   "select": "onDocumentListGridItemClick"
                              },
                              "store": {
                                   "fields": [],
                                   "data": []
                              },
                              "columns": [{
                                   "header": "Doc Id",
                                   "text": "Doc Id",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "docId",
                                   "hidden": true,
                                   "flex": 1
                              }, {
                                   "header": "Doc Type Code",
                                   "text": "Doc Type Code",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "docTypeCode",
                                   "renderer": "renderFormValue",
                                   "flex": 1
                              }, {
                                   "header": "Doc Name",
                                   "text": "Doc Name",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "docName",
                                   "flex": 1
                              }, {
                                   "header": "Doc File",
                                   "text": "Doc File",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "docFile",
                                   "flex": 1
                              }, {
                                   "header": "Doc Desc",
                                   "text": "Doc Desc",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "docDesc",
                                   "flex": 1
                              }, {
                                   "header": "Doc Date",
                                   "text": "Doc Date",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "docDate",
                                   "flex": 1
                              }, {
                                   "header": "createdBy",
                                   "text": "createdBy",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "createdBy",
                                   "hidden": true,
                                   "flex": 1
                              }, {
                                   "header": "createdDate",
                                   "text": "createdDate",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "createdDate",
                                   "hidden": true,
                                   "flex": 1
                              }, {
                                   "header": "updatedBy",
                                   "text": "updatedBy",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "updatedBy",
                                   "hidden": true,
                                   "flex": 1
                              }, {
                                   "header": "updatedDate",
                                   "text": "updatedDate",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "updatedDate",
                                   "hidden": true,
                                   "flex": 1
                              }, {
                                   "header": "versionId",
                                   "text": "versionId",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "versionId",
                                   "hidden": true,
                                   "flex": 1
                              }, {
                                   "header": "activeStatus",
                                   "text": "activeStatus",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "activeStatus",
                                   "hidden": true,
                                   "flex": 1
                              }, {
                                   "header": "txnAccessCode",
                                   "text": "txnAccessCode",
                                   "customWidgetType": "vdGridColumn",
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
                                        "handler": "onDeleteActionColumnClick"
                                   }]
                              }]
                         }],
                         "customWidgetType": "vdCard"
                    }],
                    "tools": [{
                         "type": "help",
                         "tooltip": "Get Console",
                         "handler": "onConsoleClick"
                    }, {
                         "type": "refresh",
                         "tooltip": "Refresh Tab",
                         "handler": "init"
                    }],
                    "layout": "card",
                    "defaults": {
                         "autoScroll": true
                    },
                    "autoScroll": true,
                    "dockedItems": [{
                         "xtype ": "toolbar",
                         "customWidgetType": "vdBBar",
                         "dock": "bottom",
                         "margin": 0,
                         "isDockedItem": true,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill"
                         }, {
                              "xtype": "button",
                              "customWidgetType": "vdButton",
                              "margin": "0 5 0 5",
                              "text": "Save",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "saveFormButton",
                              "listeners": {
                                   "click": "saveForm"
                              }
                         }, {
                              "xtype": "button",
                              "customWidgetType": "vdButton",
                              "margin": "0 5 0 5",
                              "text": "Reset",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "resetFormButton",
                              "listeners": {
                                   "click": "resetForm"
                              }
                         }],
                         "defaults": {
                              "margin": "0 5 0 5"
                         }
                    }, {
                         "xtype": "toolbar",
                         "customWidgetType": "vdTBar",
                         "defaults": {
                              "margin": "0 5 0 5"
                         },
                         "isDockedItem": true,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill"
                         }, {
                              "xtype": "button",
                              "customWidgetType": "vdButton",
                              "itemId": "cardPrev",
                              "text": "&laquo; Previous",
                              "handler": "showPreviousCard",
                              "disabled": true,
                              "margin": "0 5 0 5"
                         }, {
                              "xtype": "button",
                              "customWidgetType": "vdButton",
                              "itemId": "cardNext",
                              "text": "Next &raquo;",
                              "handler": "showNextCard",
                              "margin": "0 5 0 5"
                         }]
                    }],
                    "viewModel": "EducationDetailsViewModel",
                    "listeners": {},
                    "extend": "Ext.form.Panel",
                    "region": "center",
                    "customWidgetType": "vdCardLayout"
               }, {
                    "xtype": "grid",
                    "customWidgetType": "vdGrid",
                    "displayName": "Education Details",
                    "title": "Details Grid",
                    "name": "EducationDetailsGrid",
                    "itemId": "EducationDetailsGrid",
                    "store": [],
                    "bodyPadding": 10,
                    "requires": [],
                    "columns": [{
                         "header": "eduPk",
                         "dataIndex": "eduPk",
                         "hidden": true,
                         "flex": 1
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
                         "header": "Degree",
                         "dataIndex": "degreeCode",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "University",
                         "dataIndex": "unvCode",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "Year Of Graduation",
                         "dataIndex": "yearOfGraduation",
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
               "xtype": "form",
               "displayName": "Education Details",
               "name": "EducationDetails",
               "itemId": "EducationDetailsForm",
               "bodyPadding": 10,
               "items": [{
                    "xtype": "form",
                    "itemId": "form0",
                    "customWidgetType": "vdCard",
                    "header": {
                         "hidden": true
                    },
                    "items": [{
                         "layout": "column",
                         "customWidgetType": "vdColumnLayout",
                         "header": {
                              "hidden": true
                         },
                         "xtype": "panel",
                         "items": [{
                              "name": "eduPk",
                              "itemId": "eduPk",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "eduPk",
                              "margin": "5 5 5 5",
                              "fieldLabel": "eduPk<font color='red'> *<\/font>",
                              "fieldId": "43F80A2B-513B-4F1F-97F6-28ADFA216263",
                              "minLength": "0",
                              "maxLength": "64",
                              "hidden": true,
                              "value": "",
                              "bindable": "eduPk",
                              "bind": "{eduPk}"
                         }, {
                              "name": "empId",
                              "itemId": "empId",
                              "xtype": "combo",
                              "customWidgetType": "vdCombo",
                              "displayName": "Employee",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Employee<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "891C116B-2F14-414B-ADBD-107C83CFCA94",
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
                              "columnWidth": 0.5,
                              "bind": "{empId}"
                         }, {
                              "name": "degreeCode",
                              "itemId": "degreeCode",
                              "xtype": "combo",
                              "customWidgetType": "vdCombo",
                              "displayName": "Degree",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Degree<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "B21EFFD0-212B-4FE1-8D8F-DB6D5980FA9D",
                              "restURL": "DegreeType",
                              "displayField": "primaryDisplay",
                              "valueField": "primaryKey",
                              "typeAhead": true,
                              "queryMode": "local",
                              "minChars": 2,
                              "store": {
                                   "data": [],
                                   "model": "Hrproject.hrproject.shared.demo.model.backgroundcheck.DegreeTypeModel"
                              },
                              "bindable": "degreeCode",
                              "columnWidth": 0.5,
                              "bind": "{degreeCode}"
                         }, {
                              "name": "unvCode",
                              "itemId": "unvCode",
                              "xtype": "combo",
                              "customWidgetType": "vdCombo",
                              "displayName": "University",
                              "margin": "5 5 5 5",
                              "fieldLabel": "University<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "56E77939-F7A9-41AF-8A81-AE2472F54EF7",
                              "restURL": "UniversityType",
                              "displayField": "primaryDisplay",
                              "valueField": "primaryKey",
                              "typeAhead": true,
                              "queryMode": "local",
                              "minChars": 2,
                              "store": {
                                   "data": [],
                                   "model": "Hrproject.hrproject.shared.demo.model.backgroundcheck.UniversityTypeModel"
                              },
                              "bindable": "unvCode",
                              "columnWidth": 0.5,
                              "bind": "{unvCode}"
                         }, {
                              "name": "yearOfGraduation",
                              "itemId": "yearOfGraduation",
                              "xtype": "numberfield",
                              "customWidgetType": "vdNumberfield",
                              "displayName": "Year Of Graduation",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Year Of Graduation<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "8982992C-210D-40AD-A3FB-07A115F09D6A",
                              "minValue": "0",
                              "maxValue": "11",
                              "bindable": "yearOfGraduation",
                              "columnWidth": 0.5,
                              "bind": "{yearOfGraduation}"
                         }, {
                              "name": "versionId",
                              "itemId": "versionId",
                              "xtype": "numberfield",
                              "customWidgetType": "vdNumberfield",
                              "displayName": "versionId",
                              "margin": "5 5 5 5",
                              "value": "-1",
                              "fieldLabel": "versionId",
                              "fieldId": "CF865641-9887-4B6C-A683-C255957A046A",
                              "bindable": "versionId",
                              "bind": "{versionId}",
                              "hidden": true
                         }]
                    }]
               }, {
                    "xtype": "form",
                    "displayName": "Document List",
                    "title": "Document List",
                    "name": "DocumentList",
                    "itemId": "DocumentListForm",
                    "bodyPadding": 10,
                    "items": [{
                         "xtype": "form",
                         "itemId": "form1",
                         "customWidgetType": "vdAnchorLayout",
                         "header": {
                              "hidden": true
                         },
                         "items": [{
                              "layout": "column",
                              "customWidgetType": "vdColumnLayout",
                              "header": {
                                   "hidden": true
                              },
                              "xtype": "panel",
                              "items": [{
                                   "name": "docTypeCode",
                                   "itemId": "docTypeCode",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "Doc Type Code",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Doc Type Code<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "E3DFF558-AA2A-45CC-9030-17F531AB13C6",
                                   "restURL": "DocumentType",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "typeAhead": true,
                                   "queryMode": "local",
                                   "minChars": 2,
                                   "store": {
                                        "data": [],
                                        "model": "Hrproject.hrproject.shared.demo.model.documentmanager.DocumentTypeModel"
                                   },
                                   "bindable": "documentList.docTypeCode",
                                   "columnWidth": 0.5
                              }, {
                                   "name": "docName",
                                   "itemId": "docName",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Doc Name",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Doc Name<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "DD0EA5CE-D79B-4F33-9D20-11F144D63A3A",
                                   "minLength": "0",
                                   "maxLength": "512",
                                   "errorMessage": "Please enter valid Document Name",
                                   "bindable": "documentList.docName",
                                   "columnWidth": 0.5
                              }, {
                                   "name": "docFile",
                                   "itemId": "docFile",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Doc File",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Doc File<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "2663E550-29C5-4094-BC43-0C340504360F",
                                   "minLength": "0",
                                   "maxLength": "128",
                                   "bindable": "documentList.docFile",
                                   "columnWidth": 0.5
                              }, {
                                   "name": "docDesc",
                                   "itemId": "docDesc",
                                   "xtype": "textareafield",
                                   "customWidgetType": "vdTextareafield",
                                   "displayName": "Doc Desc",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Doc Desc",
                                   "fieldId": "14E58370-ED3B-4577-AA1B-42AB9E73D90B",
                                   "bindable": "documentList.docDesc",
                                   "columnWidth": 0.5
                              }, {
                                   "name": "docDate",
                                   "itemId": "docDate",
                                   "xtype": "datefields",
                                   "customWidgetType": "vdDatefield",
                                   "displayName": "Doc Date",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Doc Date",
                                   "fieldId": "F3D5190E-A134-472F-B8DB-5A60D82CD829",
                                   "bindable": "documentList.docDate",
                                   "columnWidth": 0.5
                              }]
                         }]
                    }, {
                         "columnWidth": 1,
                         "xtype": "button",
                         "customWidgetType": "vdButton",
                         "maxWidth": 187,
                         "text": "Add DocumentList",
                         "handler": "addDocumentList"
                    }, {
                         "xtype": "grids",
                         "customWidgetType": "vdGrid",
                         "title": "DocumentList",
                         "columnWidth": 1,
                         "itemId": "DocumentListGrid",
                         "fieldLabel": "List",
                         "bindLevel": "documentList",
                         "bindable": "documentList",
                         "listeners": {
                              "select": "onDocumentListGridItemClick"
                         },
                         "store": {
                              "fields": [],
                              "data": []
                         },
                         "columns": [{
                              "header": "Doc Id",
                              "text": "Doc Id",
                              "customWidgetType": "vdGridColumn",
                              "dataIndex": "docId",
                              "hidden": true,
                              "flex": 1
                         }, {
                              "header": "Doc Type Code",
                              "text": "Doc Type Code",
                              "customWidgetType": "vdGridColumn",
                              "dataIndex": "docTypeCode",
                              "renderer": "renderFormValue",
                              "flex": 1
                         }, {
                              "header": "Doc Name",
                              "text": "Doc Name",
                              "customWidgetType": "vdGridColumn",
                              "dataIndex": "docName",
                              "flex": 1
                         }, {
                              "header": "Doc File",
                              "text": "Doc File",
                              "customWidgetType": "vdGridColumn",
                              "dataIndex": "docFile",
                              "flex": 1
                         }, {
                              "header": "Doc Desc",
                              "text": "Doc Desc",
                              "customWidgetType": "vdGridColumn",
                              "dataIndex": "docDesc",
                              "flex": 1
                         }, {
                              "header": "Doc Date",
                              "text": "Doc Date",
                              "customWidgetType": "vdGridColumn",
                              "dataIndex": "docDate",
                              "flex": 1
                         }, {
                              "header": "createdBy",
                              "text": "createdBy",
                              "customWidgetType": "vdGridColumn",
                              "dataIndex": "createdBy",
                              "hidden": true,
                              "flex": 1
                         }, {
                              "header": "createdDate",
                              "text": "createdDate",
                              "customWidgetType": "vdGridColumn",
                              "dataIndex": "createdDate",
                              "hidden": true,
                              "flex": 1
                         }, {
                              "header": "updatedBy",
                              "text": "updatedBy",
                              "customWidgetType": "vdGridColumn",
                              "dataIndex": "updatedBy",
                              "hidden": true,
                              "flex": 1
                         }, {
                              "header": "updatedDate",
                              "text": "updatedDate",
                              "customWidgetType": "vdGridColumn",
                              "dataIndex": "updatedDate",
                              "hidden": true,
                              "flex": 1
                         }, {
                              "header": "versionId",
                              "text": "versionId",
                              "customWidgetType": "vdGridColumn",
                              "dataIndex": "versionId",
                              "hidden": true,
                              "flex": 1
                         }, {
                              "header": "activeStatus",
                              "text": "activeStatus",
                              "customWidgetType": "vdGridColumn",
                              "dataIndex": "activeStatus",
                              "hidden": true,
                              "flex": 1
                         }, {
                              "header": "txnAccessCode",
                              "text": "txnAccessCode",
                              "customWidgetType": "vdGridColumn",
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
                                   "handler": "onDeleteActionColumnClick"
                              }]
                         }]
                    }],
                    "customWidgetType": "vdCard"
               }],
               "tools": [{
                    "type": "help",
                    "tooltip": "Get Console",
                    "handler": "onConsoleClick"
               }, {
                    "type": "refresh",
                    "tooltip": "Refresh Tab",
                    "handler": "init"
               }],
               "layout": "card",
               "defaults": {
                    "autoScroll": true
               },
               "autoScroll": true,
               "dockedItems": [{
                    "xtype ": "toolbar",
                    "customWidgetType": "vdBBar",
                    "dock": "bottom",
                    "margin": 0,
                    "isDockedItem": true,
                    "items": [{
                         "xtype": "tbfill",
                         "customWidgetType": "vdTbFill"
                    }, {
                         "xtype": "button",
                         "customWidgetType": "vdButton",
                         "margin": "0 5 0 5",
                         "text": "Save",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "saveFormButton",
                         "listeners": {
                              "click": "saveForm"
                         }
                    }, {
                         "xtype": "button",
                         "customWidgetType": "vdButton",
                         "margin": "0 5 0 5",
                         "text": "Reset",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "resetFormButton",
                         "listeners": {
                              "click": "resetForm"
                         }
                    }],
                    "defaults": {
                         "margin": "0 5 0 5"
                    }
               }, {
                    "xtype": "toolbar",
                    "customWidgetType": "vdTBar",
                    "defaults": {
                         "margin": "0 5 0 5"
                    },
                    "isDockedItem": true,
                    "items": [{
                         "xtype": "tbfill",
                         "customWidgetType": "vdTbFill"
                    }, {
                         "xtype": "button",
                         "customWidgetType": "vdButton",
                         "itemId": "cardPrev",
                         "text": "&laquo; Previous",
                         "handler": "showPreviousCard",
                         "disabled": true,
                         "margin": "0 5 0 5"
                    }, {
                         "xtype": "button",
                         "customWidgetType": "vdButton",
                         "itemId": "cardNext",
                         "text": "Next &raquo;",
                         "handler": "showNextCard",
                         "margin": "0 5 0 5"
                    }]
               }],
               "viewModel": "EducationDetailsViewModel",
               "listeners": {},
               "extend": "Ext.form.Panel",
               "region": "center",
               "customWidgetType": "vdCardLayout"
          }]
     }]
});