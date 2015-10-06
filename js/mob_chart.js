google.load("visualization", "1", {packages:["geomap"]});
google.setOnLoadCallback(drawMap);

function drawMap() {
	var data = google.visualization.arrayToDataTable([
		['Country', 'Aantal mobieltjes (in miljoenen)'],
		['China',            		1277],
		['India',            		961],
		['United States',         	328],
		['Brazil',            		284],
		['Russia',            		256],
		['Indonesia',            	237],
		['Nigeria',            		167],
		['Pakistan',            	140],
		['Bangladesh',				127],
		['Japan',            		121],
		['Germany',            		107],
		['Philippines',           	107],
		['Iran',            		96],
		['Mexico',            		101],
		['Italy',            		89],
		['United Kingdom',        	83],
		['Vietnam',            		72],
		['France',            		72],
		['Egypt',            		93],
		['Thailand',            	69],
		['Turkey',            		68],
		['Ukraine',            		58],
		['South Korea',           	56],
		['Spain',            		56],
		['Argentina',            	40],
		['Poland',            		47],
		['Colombia',            	49],
		['South Africa',          	59],
		['Algeria',            		33],
		['Taiwan',            		29],
		['Kenya',            		28],
		['Venezuela',            	32],
		['Peru',            		33],
		['Romania',            		26],
		['Canada',            		28],
		['Morocco',            		37],
		['Netherlands',           	20],
		['Australia',            	30],
		['Saudi Arabia',          	46],
		['Malaysia',            	30],
		['Sri Lanka',         		22],
		['Chile',            		21],
		['Nepal',            		18],
		['Ethiopia',            	18],
		['Guatemala',            	21],
		['Ecuador',            		16],
		['Portugal',            	13],
		['Hong Kong',            	17],
		['Belgium',            		12],
		['Hungary',            		12],
		['United Arab Emirates',  	17],
		['Sweden',            		11],
		['Bulgaria',            	11],
		['Israel',            		9],
		['Finland',           		9],
		['Singapore',            	8],
		['Denmark',            		7],
		['Azerbaijan',           	7],
		['Jordan',            		6],
		['New Zealand',          	5],
		['Mongolia',            	4],
		['Estonia',            		2],
		['Lebanon',            		3],
		['Lithuania',            	5],
		['Cuba',            		1],
		['North Korea',           	2],
		['Panama',            		7],
		['Malta',            		0.5],
		['Zimbabwe',            	14],
		['Montenegro',            	1],
		['Ireland',           		6]
]);

var options = {};
options['dataMode'] = 'regions';
options['width'] = '100%';
options['height'] = '100%';

var container = document.getElementById('mob_chart');
var geomap = new google.visualization.GeoMap(container);

geomap.draw(data, options);
};