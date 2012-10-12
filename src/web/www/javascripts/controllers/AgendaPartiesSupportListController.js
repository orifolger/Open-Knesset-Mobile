Ext.regController('AgendaPartiesSupportList', {

	Index: function(options) {
    	
        if ( ! this.AgendaPartiesSupportListView)
        {
            this.AgendaPartiesSupportListView = this.render({
                xtype: 'AgendaPartiesSupportListView',
            }); 
              
             this.AgendaPartiesSupportListView.addListener('itemtap',
            	function(that, index, item, e) {
				var	record = that.store.getAt(index);
			   console.log(record);
			    OKnesset.app.controllers.navigation.dispatchPanel('party/Index/'+ record.data.id, options.historyUrl);
				});
				
        }


       
        var findData = OKnesset.AgendaListStore.findBy(function(r){return r.data.id === parseInt(options.id)});

       findData = OKnesset.AgendaListStore.getAt(findData);
       
  		//OKnesset.AgendaPartiesSupportListStore.loadData(findData.data.parties);
        this.application.viewport.query('#toolbar')[0].setTitle(OKnesset.strings.supportparties + findData.data.name);
        this.application.viewport.setActiveItem(this.AgendaPartiesSupportListView, options.animation);
    
 
    },
//	refresh : function() {
    //   this.AgendaVoteList = this.AgendaVoteListView.query('#AgendaVoteList')[0];		
	//	this.AgendaVoteList.refresh();
	// }
 });