OKnesset.app.controllers.disclaimer = Ext.regController('Disclaimer', {

    // index action
	Index: function(options)
    {
        if ( ! this.view)
        {
            this.view = this.render({
                xtype: 'DisclaimerView',
            });

            var mask = this.mask = new Ext.LoadMask(Ext.getBody(), {msg:OKnesset.strings.showDisclaimer});
            this.view.addListener('hide', function(){mask.hide();});

            this.view.query('#DisclaimerCancel')[0].setHandler(function(){
    			localStorage.setItem("disclaimerDismissed", true);
    			OKnesset.app.controllers.navigation.dispatchBack();
            });

        }

        if (localStorage.getItem("disclaimerDismissed") === 'true'){
            GATrackPage('DisclaimerView', '');
        }

        this.view.show(options.animation);
        this.mask.show();
    },

    openCreditPanel : function(){
        OKnesset.app.controllers.navigation.dispatchBack();
        OKnesset.app.controllers.navigation.dispatchDialog('Credits/Index');
    }

});