/**
 * The Info of each party
 * of the current selected party
 */
 /*
OKnesset.app.views.PartyInfoView = new Ext.extend(Ext.Panel, {
			id : 'PartyInfoView',
			layout: {
				type: 'vbox',
				align: 'stretch'
			},
			scroll: 'vertical',
			listeners: {
			},
			title : '',
			currentInfo : null,
			tpl: new Ext.XTemplate(
				'<tpl for=".">',
					'<p><img class= "party-logo" src="{logo_url}" alt="{party_name}" title="{party_name}">{info}</p>',
				'</tpl>',
				'<div class="x-clear"></div>'
			),/*
			initComponent: function () {
				console.log(arguments);
				debugger;
			//	this.info = new OKnesset.app.views.PartyInfoView.Info();
				OKnesset.app.views.PartyInfoView.superclass.initComponent.apply(this, arguments);
			},*//*
			store: OKnesset.PartyInfoStore,
			onItemDisclosure: true,
			emptyText: 'אין מידע על המפלגה'
		});

Ext.reg('PartyInfoView', OKnesset.app.views.PartyInfoView);

OKnesset.app.views.PartyInfoView.Info = new new Ext.extend(Ext.Panel, {
	id: 'infoContent',
	store: OKnesset.partyInfo,
	tpl: new Ext.XTemplate(
		'<tpl for=".">',
			'<p><img class= "party-logo" src="{logoUrl}" alt="{party_name}" title="{party_name}">{info}</p>',
		'</tpl>',
		'<div class="x-clear"></div>'
	),
	onItemDisclosure: true,
	emptyText: 'אין מידע על המפלגה'
});*/

OKnesset.app.views.PartyInfoView = new Ext.extend(Ext.Panel, {
			id : 'PartyInfoView',
			layout : 'fit',
			title : '',
			currentParty : null,
			initComponent: function()
			{
				this.partyInfo = new OKnesset.app.views.PartyInfoView.Info();
				this.items = [this.partyInfo];
				OKnesset.app.views.PartyInfoView.superclass.initComponent.apply(this, arguments);
			}
		});

Ext.reg('PartyInfoView', OKnesset.app.views.PartyInfoView);

OKnesset.app.views.PartyInfoView.Info = new Ext.extend(Ext.Panel, {
	id : 'Info',
	padding: 5,
	scroll: 'vertical',
	tpl : '<div><p class="partyInfo" dir="rtl"><img class= "party-logo" src="{logo_url}" alt="{party_name}" title="{party_name}">{info}</p><p>' + OKnesset.strings.CreditFrom + '<a href="{credit_url}">{credit_text}</a></p></div>'
});
