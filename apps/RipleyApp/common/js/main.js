

function wlCommonInit(){

	// var searchFields = { name: 'string'};
	// var name = 'customers';

	// var headerSource = $("#header-template").html();
	// var headerTemplate = Handlebars.compile(headerSource);
	// var footerTemplate = Handlebars.compile($("#footer-template").html());

	// $('.header').each(function(idx, el) {
	// 	var title = $(this).attr('data-title');
	// 	var html = headerTemplate({ title: title });
	// 	$(this).html(html);
	// });

	

	// $('.footer').each(function(idx, el) {
	// 	console.log('Footer');
	// 	$(this).html(footerTemplate({}));
	// });
//
//
//	WL.JSONStore.init(name, searchFields, {}).
//	then(function(res) {
//		console.log(res);
//	})
//	.fail(function(err) {
//		console.log(err);
//	});
	
	/*
	 * Use of WL.Client.connect() API before any connectivity to a Worklight Server is required. 
	 * This API should be called only once, before any other WL.Client methods that communicate with the Worklight Server.
	 * Don't forget to specify and implement onSuccess and onFailure callback functions for WL.Client.connect(), e.g:
	 *    
	 *    WL.Client.connect({
	 *    		onSuccess: onConnectSuccess,
	 *    		onFailure: onConnectFailure
	 *    });
	 *     
	 */

	// Common initialization code goes here
	$('.ui-icon-home').click(function() {
		$.mobile.changePage('#products', { transition: "slide" });
	});

	$('.login').click(function() {
		$.mobile.changePage('#login', { transition: "slide" });
	});
	
	
	
//	
//	alert('Device Model: ' + device.model + '\n' +
//			'Device Cordova: ' + device.cordova + '\n' +
//			'Device Platform: ' + device.platform + '\n' +
//			'Device UUID: ' + device.uuid + '\n' +
//			'Device Version: ' + device.version + '\n>');
}


