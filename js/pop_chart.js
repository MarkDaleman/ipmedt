google.load("visualization", "1", {packages:["geomap"]});
google.setOnLoadCallback(drawMap);

function drawMap() {
	var data = google.visualization.arrayToDataTable([
		['Country', 'Inwoners (in miljoenen)'],
		['China',            		1370],
		['India',            		1267],
		['United States',         	318],
		['Brazil',            		201],
		['Russia',            		143],
		['Indonesia',            	238],
		['Nigeria',            		177],
		['Pakistan',            	181],
		['Bangladesh',				158],
		['Japan',            		128],
		['Germany',            		82],
		['Philippines',           	94],
		['Iran',            		74],
		['Mexico',            		112],
		['Italy',            		60],
		['United Kingdom',        	64],
		['Vietnam',            		91],
		['France',            		64],
		['Egypt',            		82],
		['Thailand',            	68],
		['Turkey',            		76],
		['Ukraine',            		46],
		['South Korea',           	50],
		['Spain',            		47],
		['Argentina',            	57],
		['Poland',            		38],
		['Colombia',            	47],
		['South Africa',          	51],
		['Algeria',            		35],
		['Taiwan',            		23],
		['Kenya',            		42],
		['Venezuela',            	30],
		['Peru',            		30],
		['Romania',            		21],
		['Canada',            		36],
		['Morocco',            		34],
		['Netherlands',           	17],
		['Australia',            	23],
		['Saudi Arabia',          	27],
		['Malaysia',            	28],
		['Sri Lanka',         		21],
		['Chile',            		17],
		['Nepal',            		27],
		['Ethiopia',            	85],
		['Guatemala',            	17],
		['Ecuador',            		14],
		['Portugal',            	11],
		['Hong Kong',            	7],
		['Belgium',            		10],
		['Hungary',            		10],
		['United Arab Emirates',  	8],
		['Sweden',            		9],
		['Bulgaria',            	8],
		['Israel',            		7],
		['Finland',           		5],
		['Singapore',            	5],
		['Denmark',            		6],
		['Azerbaijan',            	9],
		['Jordan',            		6],
		['New Zealand',           	4],
		['Mongolia',            	3],
		['Estonia',            		1],
		['Lebanon',            		4],
		['Lithuania',            	3],
		['Cuba',            		11],
		['North Korea',           	24],
		['Panama',            		3],
		['Malta',            		0.5],
		['Zimbabwe',            	13],
		['Montenegro',          	0.6],
		['Ireland',           		5]
	]);

var options = {};
	options['dataMode'] = 'regions';
	options['colors'] = [0xCFEBFF, 0x0091F7, 0x004C81]; //blue colors
	options['width'] = '100%';
	options['height'] = '100%';

var container = document.getElementById('pop_chart');
var geomap = new google.visualization.GeoMap(container);

geomap.draw(data, options);
};