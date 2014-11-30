'use strict';

chrome.windows.getCurrent(
	function(win_id) {

		// Get all tabs in current window
		chrome.tabs.getAllInWindow( win_id.id,
			function(t){

				// Array to Object
				$.extend({}, t);

				console.log( t );

				var template = $('#template').html()
			    var ret = Mustache.render(template, { tabs: t });
			        
			    $('#tabs').html(ret);

			    $( "#tabs ul" ).selectable();
			}
		);

	}
);