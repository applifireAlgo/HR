Ext.define('Hrproject.view.usermanagement.enduser.EndUserProfileMainView', {
	extend : 'Ext.tab.Panel',
	requires : ['Hrproject.view.usermanagement.enduser.UserProfile',
	            'Hrproject.view.usermanagement.enduser.ChangePwd'],
	xtype : 'endUserMainView',
	margin : '3 0 0 0',
	items:[{
				xtype:'userProfileView',
				title:'User Profile',
				iconCls:'editUserTabIcon',
				tooltip:'View/Edit your profile'
			},
			{
				xtype:'changePwdView',
				title:'Change Password',
				iconCls:'changePwdTabIcon',
				tooltip:'Change Password'
			}]
});