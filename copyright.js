var Company  = '';
// Please stat your company, or your name.

var Start = '';
// Please state the year your website started.
// If nothing is in here, nothing will show for start.

var Rights = '';
// Want all rights reserved, or no rights.
	// Legend, CaSe SeNsAtIvE!
		// All =  All Rights Reserved.  (Means that anything on the website that's stolen from you can be prosecuted.)
		// No =  No Rights Reserved.    (Means that anything on the is avalible for public use, including images and text.)
		// Some = Some Rights Reserved. (Means that somethings can be used for public use, you must specify these/)

var Comments = '';
// Write anything you want to add, like Licenses, etc.
// Leaving it blank will show nothing.



// Commands
var dash = '-';

var period = '. ';

var space = ' ';

if (Start==''){
	Start = '';
	dash = '';
}

if (Company==''){
	space = '';
}

if (Rights=='All'){
	Rights = 'All Rights Reserved.';
}
else if (Rights=='No'){
	Rights = 'No Rights Reserved.';
}
else if (Rights=='Some'){
	Rights = 'Some Rights Reserved.';
}
else {
	Rights = '';
	period = '';
}

var d = new Date();
var Date = d.getFullYear();

document.write("&copy ",Start,dash,Date,space,Company,period,Rights,space,Comments);
console.log('Copyright Loaded.')
