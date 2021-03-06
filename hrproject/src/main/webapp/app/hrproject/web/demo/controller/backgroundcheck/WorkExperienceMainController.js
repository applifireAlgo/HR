Ext.define('Hrproject.hrproject.web.demo.controller.backgroundcheck.WorkExperienceMainController', {
     extend: 'Hrproject.view.fw.frameworkController.AggregateViewController',
     alias: 'controller.WorkExperienceMainController',
     init: function() {
          var but = this.view.down('#resetFormButton');
          but.up('form').reset();
          if (this.view.disableDB != null && this.view.disableDB) {
               this.hideDataBrowser();
          } else {
               this.renderTreeGridData();
          }
          this.docTypeCodeLoad();
          this.empIdLoad();
     },
     docTypeCodeLoad: function() {
          var scope = this.getView();
          Ext.Ajax.request({
               url: 'secure/DocumentType/findAll',
               method: 'GET',
               sender: scope,
               jsonData: {},
               success: function(response, scope) {
                    var compRef = scope.sender.down('#docTypeCode');
                    scope.sender.controller.assignAllComboData(scope.sender, 'docTypeCode', response.responseText);
                    scope.sender.controller.addCommunicationLog(response, true, compRef);
               },
               failure: function(response, scope) {
                    var compRef = scope.sender.down('#docTypeCode');
                    scope.sender.controller.addCommunicationLog(response, false, compRef);
               }
          }, scope);
     },
     empIdLoad: function() {
          var scope = this.getView();
          Ext.Ajax.request({
               url: 'secure/EmpInformation/findAll',
               method: 'GET',
               sender: scope,
               jsonData: {},
               success: function(response, scope) {
                    var compRef = scope.sender.down('#empId');
                    scope.sender.controller.assignAllComboData(scope.sender, 'empId', response.responseText);
                    scope.sender.controller.addCommunicationLog(response, true, compRef);
               },
               failure: function(response, scope) {
                    var compRef = scope.sender.down('#empId');
                    scope.sender.controller.addCommunicationLog(response, false, compRef);
               }
          }, scope);
     },
     renderTreeGridData: function(responseData) {
          if (responseData == null) {
               responseData = this.fetchDataAjaxCall();
          }
          if (responseData.response.success) {
               var data = responseData.response.data;
               var tree = this.view.down('#WorkExperienceTree');
               var rootNode = tree.getRootNode();
               rootNode.removeAll();
               for (var int = 0; int < data.length; int++) {
                    var childNode = {
                         text: data[int].primaryDisplay,
                         bConfig: data[int],
                         leaf: true,
                         icon: 'images/table_icon.png'
                    };
                    rootNode.appendChild(childNode);
               }
               tree.getStore().sort('text', 'ASC');
               this.setGridData(data);
               var compRef = this.view.down('#WorkExperienceTree');
          } else if (!sessionTimeOutFlag) {
               Ext.Msg.alert('Server Response', responseData.response.message);
          }
     },
     /*********************Main Controller Functions*********************************/
     onDeleteActionColumnClickMainGrid: function(grid, rowIndex) {
          var recordId = grid.store.data.items[rowIndex].data.workPk;
          me = this;
          Ext.MessageBox.confirm({
               title: 'Confirm',
               msg: 'Delete Record',
               buttons: Ext.MessageBox.YESNO,
               fn: function(clickedButtonId) {
                    if (clickedButtonId == 'yes') {
                         me.deleteRecord(recordId);
                    }
               },
               animateTarget: this,
               icon: Ext.MessageBox.QUESTION
          })
     },
     deleteRecord: function(recordId) {
          var restURL = this.view.restURL;
          var url = 'secure' + restURL + '/' + recordId;
          Ext.Ajax.request({
               url: url,
               method: 'DELETE',
               jsonData: {},
               success: function(response, opts) {
                    if (response.status == 204) {
                         Ext.Msg.alert('Server Response', 'Record Deleted Sucessfully');
                         me.refreshMainForm(but, responseData.response.data);
                    } else {
                         responseData = Ext.JSON.decode(response.responseText);
                         Ext.Msg.alert('Server Response', responseData.response.message);
                    }
               },
               failure: function(response, scope) {
                    Ext.Msg.alert('Server Response', response.statusText);
                    me.addCommunicationLog(response, false);
               }
          }, this);
     },
     resetForm: function(but) {
          var form = but.up('form');
          form.reset();
          var data = form.viewModel.getData();
          for (var element in data) {
               data[element] = '';
          }
          var gridDocumentList = but.up('form').down('#DocumentListGrid');
          gridDocumentList.getStore().removeAll();
     },
     hideDataBrowser: function() {
          debugger;
          var form = this.view.down('#WorkExperience');
          var grid = this.view.down('#WorkExperienceGrid');
          var tree = this.view.down('#WorkExperienceTreeContainer');
          this.view.down('#addNewForm').destroy();
          grid.setHidden(true);
          tree.setHidden(true);
          if (this.view.primaryKey != null) {
               this.findById(this.view.primaryKey);
          }
     },
     fetchDataAjaxCall: function() {
          var url = this.getView().restURL;
          var me = this;
          var data = null;
          Ext.Ajax.request({
               url: 'secure' + url + '/findAll',
               method: 'GET',
               maskEnable: true,
               async: false,
               jsonData: {},
               success: function(response, scope) {
                    var responseData = Ext.JSON.decode(response.responseText);
                    data = responseData;
                    me.addCommunicationLog(response, true);
               },
               failure: function(response, scope) {
                    debugger;
                    var responseData = Ext.JSON.decode(response.responseText);
                    Ext.Msg.alert('Server Response', responseData.response.message);
                    me.addCommunicationLog(response, false);
               }
          }, this);
          return data;
     },
     onTreeRefreshClick: function(event, toolEl, panelHeader) {
          var responseData = this.fetchDataAjaxCall();
          var data = responseData.response.data;
          var tree = this.view.down('#WorkExperienceTree');
          var rootNode = tree.getRootNode();
          rootNode.removeAll();
          for (var int = 0; int < data.length; int++) {
               var childNode = {
                    text: data[int].primaryDisplay,
                    bConfig: data[int],
                    leaf: true,
                    icon: 'images/table_icon.png'
               };
               rootNode.appendChild(childNode);
          }
          tree.getStore().sort('text', 'ASC');
     },
     onGridRefreshClick: function(event, toolEl, panelHeader) {
          var responseData = this.fetchDataAjaxCall();
          var data = responseData.response.data;
          this.setGridData(data);
     },
     refreshMainForm: function(but, data) {
          if (but != null) {
               this.resetForm(but);
          } else {
               var but = this.view.down('#resetFormButton');
               this.resetForm(but);
          } /** Adding data to tree and grid */
          if (data != null) {
               debugger;
               var grid = this.view.down('#WorkExperienceGrid');
               grid.store.add(data);
               var tree = this.view.down('#WorkExperienceTree');
               var rootNode = tree.getRootNode();
               var childNode = {
                    text: data.primaryDisplay,
                    bConfig: data,
                    leaf: true,
                    icon: 'images/table_icon.png'
               };
               rootNode.appendChild(childNode);
          }
     },
     /********************************Tree Controller Functions**********************************/
     onFilterClick: function(but, evt) {
          debugger;
          var currentObject = this.getView();
          var data = but.up('form').getForm().getValues();
          var searchData = {};
          for (key in data) {
               if (data[key] != null && data[key] != '') {
                    searchData[key] = data[key];
               }
          }
          Ext.Ajax.request({
               url: 'secure' + currentObject.restURL + '/search',
               method: 'POST',
               maskEnable: true,
               maskEle: currentObject,
               view: currentObject,
               jsonData: Ext.JSON.encode(searchData),
               success: function(response, currentObject) {
                    currentObject.view.controller.renderTreeGridData(response);
               },
               failure: function(response, currentObject) {
                    Ext.MessageBox.show({
                         title: 'Error',
                         msg: response.statusText,
                         icon: Ext.MessageBox.ERROR
                    });
                    var currentView = currentObject.view;
                    var compRef = scope.sender.view.down('#WorkExperienceTree');
                    currentView.controller.addCommunicationLog(response, false, compRef);
               }
          });
     },
     treeClick: function(me, record, item, index, e, eOpts) {
          if (record.data.leaf) {
               var WorkExperience = this.view.down('#WorkExperienceForm');
               WorkExperience.reset();
               var gridPanel = this.view.down('#WorkExperienceGrid');
               var foundRecord = gridPanel.store.findRecord('primaryKey', record.data.bConfig.primaryKey);
               if (gridPanel && foundRecord) {
                    gridPanel.setSelection(foundRecord);
               }
          }
          var formPanel = this.getView().up().down('#WorkExperienceForm');
          var vm = formPanel.getViewModel(); /** Finding record by id */
          var data = this.findRecordById(this.view.restURL, record.data.bConfig.primaryKey);
          vm.setData(data);
          for (var key in data) {
               if (formPanel.down('#' + key) != null && formPanel.down('#' + key).xtype == 'datefield') {
                    formPanel.down('#' + key).setValue(new Date(data[key]));
               }
          }
          var DocumentListGrid = formPanel.down('#DocumentListGrid');
          DocumentListGrid.store.loadData(data.documentList);
          DocumentListGrid.setSelection(0);
          this.showFirstCard(formPanel);
          tabPanel = formPanel.up('tabpanel');
          tabPanel.setActiveTab(0);
     },
     /********************************Grid Controller Functions***********************************/
     onGridItemClick: function(me, record, item, index, e, eOpts) { /** Finding record by id */
          record.data = this.findRecordById(this.view.restURL, record.data.primaryKey);
          var treePanel = this.view.up().up().down('#WorkExperienceTree');
          var foundNode = this.findChild(treePanel.getRootNode(), 'primaryKey', record.data.primaryKey);
          if (treePanel && foundNode) {
               treePanel.setSelection(foundNode);
          }
          var formPanel = this.getView().up().down('#WorkExperienceForm');
          var vm = formPanel.getViewModel();
          var data = record.data;
          vm.setData(data);
          for (var key in data) {
               if (formPanel.down('#' + key) != null && formPanel.down('#' + key).xtype == 'datefield') {
                    formPanel.down('#' + key).setValue(new Date(data[key]));
               }
          }
          var DocumentListGrid = formPanel.down('#DocumentListGrid');
          DocumentListGrid.store.loadData(data.documentList);
          DocumentListGrid.setSelection(0);
          this.showFirstCard(formPanel);
          tabPanel = formPanel.up('tabpanel');
          tabPanel.setActiveTab(0);
     },
     renderFormValue: function(val, me) {
          store = this.view.up().down('#WorkExperience').down('#' + me.column.dataIndex + '').store;
          if (store.data.length == 0) {
               return '';
          }
          var displayValue = store.findRecord('primaryKey', val).data.primaryDisplay;
          return displayValue != null ? displayValue : '';
     },
     setGridData: function(data) {
          var gridStore = this.view.down('#WorkExperienceGrid').store;
          gridStore.removeAll();
          gridStore.add(data);
          gridStore.sort('primaryDisplay', 'ASC');
     },
     /********************************Form Controller Functions***********************************/
     findById: function(primaryKey) {
          var me = this;
          var restURL = this.view.restURL;
          Ext.Ajax.request({
               url: 'secure' + restURL + '/findById',
               method: 'POST',
               controller: me,
               jsonData: {
                    'findKey': primaryKey
               },
               success: function(response, request) {
                    responseData = Ext.JSON.decode(response.responseText);
                    if (responseData.response.success) {
                         request.controller.loadData(responseData);
                    } else if (!sessionTimeOutFlag) {
                         Ext.Msg.alert('Server Response', responseData.response.message);
                    }
               },
               failure: function(response, scope) {
                    Ext.Msg.alert('Server Response', response.statusText);
               }
          }, this);
     },
     loadData: function(responseData) {
          this.view.down('#WorkExperienceForm').getViewModel().setData(responseData.response.data);
     },
     fetchDataFromStore: function(store) {
          storeItems = store.data.items;
          obj = {};
          arr = [];
          for (counter in storeItems) {
               arr.push(storeItems[counter].data);
          }
          return obj['objArr'] = arr;
     },
     addDocumentList: function(but) {
          var formDocumentList = but.up();
          var gridDocumentList = but.up().up().down('#DocumentListGrid');
          if (formDocumentList.isValid()) {
               var values = formDocumentList.getValues();
               var duplicateRecordFound = false;
               var records = gridDocumentList.getStore().data.items;
               var duplicateRecordFound = false;
               for (var index = 0; index < records.length; index++) {
                    if (this.isDuplicateRecord(values, records[index].data)) {
                         duplicateRecordFound = true;
                         break;
                    }
               }
               if (!duplicateRecordFound) {
                    var modifiedValues = this.modifyFormValues(values, formDocumentList);
                    gridDocumentList.getStore().add(modifiedValues);
               }
               formDocumentList.reset();
          }
     },
     onDocumentListGridItemClick: function(cellModel, record, rowIndex, columnIndex, eOpts, comp) {
          var form;
          if (comp != null) {
               form = comp.up();
          } else {
               form = this.view.down('#DocumentListForm');
          }
          form.loadRecord(record)
     },
     renderFormValue: function(value, metaData, record, row, col, store, gridView) {
          try {
               var comboStore = this.getView().down('#' + metaData.column.dataIndex).getStore();
               var index = comboStore.findExact('primaryKey', value);
               return comboStore.getAt(index).data.primaryDisplay;
          } catch (e) {
               return value;
          }
     },
     saveForm: function(but, evt) {
          var form = but.up('form');
          var firstCard = form.down('#form0');
          if (!firstCard.getForm().isValid()) {
               this.showCard(form, firstCard);
               return;
          }
          var DocumentListForm = form.down('#DocumentListForm');
          var DocumentList = form.down('#DocumentListGrid');
          if (!(DocumentListForm.isValid() || DocumentList.store.getCount() != 0)) {
               this.showCard(form, DocumentListForm);
               return;
          }
          this.addDocumentList(DocumentListForm.down('button'));
          var data = form.getViewModel().getData();
          var DocumentListBindLavel = DocumentList.bindLevel;
          delete data[DocumentListBindLavel];
          this.createObject(data, DocumentListBindLavel, this.fetchDataFromStore(DocumentList.getStore()));
          var jsonData = this.getData(form);
          var method;
          if (jsonData.workPk == null) {
               method = 'POST'
          } else {
               method = 'PUT';
               jsonData.systemInfo = {
                    'activeStatus': 1
               }
          }
          restURL = this.view.restURL;
          var me = this;
          Ext.Ajax.request({
               url: 'secure' + restURL + '/',
               but: but,
               method: method,
               maskEnable: true,
               maskEle: form,
               jsonData: jsonData,
               success: function(response, opts) {
                    responseData = Ext.JSON.decode(response.responseText);
                    if (responseData.response.success) {
                         me.refreshMainForm(but, responseData.response.data);
                         Ext.Msg.alert('Server Response', responseData.response.message);
                    } else if (!sessionTimeOutFlag) {
                         Ext.Msg.alert('Server Response', responseData.response.message);
                    }
               },
               failure: function(response, scope) {
                    Ext.Msg.alert('Server Response', response.statusText);
                    me.addCommunicationLog(response, false);
               }
          }, this);
     },
});