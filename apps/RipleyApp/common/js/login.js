/**
 * 
 */

$(function() {
	var userString = localStorage.getItem('user');
	if(!userString) {
		console.log('No user yet');
		userString = JSON.stringify({
			name: 'Pablo Lluch',
			rut: '17.085.953-7',
			image: 'https://lh5.googleusercontent.com/-rSkJysYsga4/UuMYzAVk0TI/AAAAAAAABZ4/9rqnNFucbK0/s320-no/362238c7-41de-464c-abae-fc5f843ca7a2'
		});
		localStorage.setItem('user', userString);
	} 
	
	var user = JSON.parse(userString);
	console.log('User: ' + user.name);
	initializeImage(user);
	
	$('#login').submit(function() {
		$.mobile.changePage('#products', {transition: "slide"});
		return false;
	});
	
});



function initializeImage(user) {
	if(user.image) {
		$('#loginImage').attr("src", user.image);
	} else {
		$('#loginImage').attr("src", "images/ripley_logo.jpg");
	}
}
