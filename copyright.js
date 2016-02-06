var Company  = '';
// Please state your company, or your name.

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

var ShowSpace = false;
// Show space between The copyright symbol and year?
// true will have a space, false will not.

var ShowLog = true;
// Want to show that the script worked correctly in the console?
// true will show a log entry, false will not.
// Great for error logging.


// Commands
var dash = '-';

var period = '. ';

var space = ' ';

var CopySymbol = '&copy ';

var Log = 'Copyright Loaded.';

if (ShowLog==true){
	console.log(Log)
}
else {

}

if (ShowSpace==false){
	CopySymbol = '&copy';
}

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

document.write(CopySymbol,Start,dash,Date,space,Company,period,Rights,space,Comments);
