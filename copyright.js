var c  = 'Test';
// Please stat your company, or your name.

var s = '2012';
// Please state the year your website started.

var showS = true;
// You want the start to show?

var r = 'All';
// Want all rights reserved, or no rights.
	// Legend, CaSe SeNsAtIvE!
		// All =  All Rights Reserved.
		// No =  No Rights Reserved.
		// Some = Some Rights Reserved.


// Everything under this is so that the script works correctly, change at your will. 
// Some things may not work once you change them.
var dash = '-';

var coma = ', ';

if (showS==false){
	s = '';
	dash = '';
}

if (r=='All'){
	r = 'All Rights Reserved.';
}
else if (r=='No'){
	r = 'No Rights Reserved.';
}
else if (r=='Some'){
	r = 'Some Rights Reserved.';
}
else {
	r = '';
	coma = '';
}

var d = new Date();
var n = d.getFullYear();

document.write("&copy",s,dash,n," ",c,coma,r);
