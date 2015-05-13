/**
 * 
 */

 $(function() {

 	var tabs = $('#transferTabs');
 	tabs.on("tabscreate", function(event, ui) {
 		tabs.tabs( "option", "disabled", [ 1, 2 ] );
 	});
 	var tab1 = $('#transferTabs a[href="#transfer_1"]');
 	var tab2 = $('#transferTabs a[href="#transfer_2"]');
 	var tab3 = $('#transferTabs a[href="#transfer_3"]');

 	$('#transferBtn').click(function() {
 		$.mobile.changePage('#transfer', { transition: "slide" });
 	});

 	$('#transferBtn2').click(function() {
 		tabs.tabs("enable", 1);
 		tabs.tabs("option", "active", 1);
 		tab1.removeClass("ui-btn-active");
 		tab2.addClass("ui-btn-active");
 	});

 	$('#transferBtn3').click(function() {
 		tabs.tabs("enable", 2);
 		tabs.tabs("option", "active", 2);
 		tab2.removeClass("ui-btn-active");
 		tab3.addClass("ui-btn-active");
 	});

 	$('#newDestination').click(function() {
 		$.mobile.changePage('#new_destination', { transition: "slide" });
 	});

 	
 });


