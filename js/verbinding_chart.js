google.load("visualization", "1", {packages:["geomap"]});
google.setOnLoadCallback(drawMap);

function drawMap() {
	var data = google.visualization.arrayToDataTable([
		['Country',  'Verbindingen per 100 burgers'],
		['China',            		97],
		['India',            		93.2],
		['United States',         	103.1],
		['Brazil',            		141.3],
		['Russia',            		155.5],
		['Indonesia',            	99.7],
		['Nigeria',            		94.5],
		['Pakistan',            	77],
		['Bangladesh',				80.5],
		['Japan',            		95.1],
		['Germany',            		130.1],
		['Philippines',           	113.8],
		['Iran',            		130],
		['Mexico',            		90.2],
		['Italy',            		147.4],
		['United Kingdom',        	129.6],
		['Vietnam',            		79],
		['France',            		114.2],
		['Egypt',            		112.8],
		['Thailand',            	105],
		['Turkey',            		89.9],
		['Ukraine',            		126],
		['South Korea',           	111.5],
		['Spain',            		118],
		['Argentina',            	141.3],
		['Poland',            		123.5],
		['Colombia',            	104.4],
		['South Africa',          	117.6],
		['Algeria',            		94.2],
		['Taiwan',            		123.3],
		['Kenya',            		71.3],
		['Venezuela',            	106.1],
		['Peru',            		110],
		['Romania',            		123.4],
		['Canada',            		79.1],
		['Morocco',            		113.6],
		['Netherlands',           	121.1],
		['Australia',            	133],
		['Saudi Arabia',          	169.5],
		['Malaysia',            	143.8],
		['Sri Lanka',         		107],
		['Chile',            		122.9],
		['Nepal',            		86.8],
		['Ethiopia',            	21.8],
		['Guatemala',            	122.9],
		['Ecuador',            		111.1],
		['Portugal',            	126.9],
		['Hong Kong',            	240.2],
		['Belgium',            		113.6],
		['Hungary',            		116.7],
		['United Arab Emirates',  	203.7],
		['Sweden',            		122.9],
		['Bulgaria',            	140.2],
		['Israel',            		127.5],
		['Finland',           		170.4],
		['Singapore',            	150.1],
		['Denmark',            		126.2],
		['Azerbaijan',            	78.7],
		['Jordan',            		101],
		['New Zealand',           	111.1],
		['Mongolia',            	117.4],
		['Estonia',            		159.9],
		['Lebanon',            		64.4],
		['Lithuania',            	167.1],
		['Cuba',            		11.6],
		['North Korea',           	8.3],
		['Panama',            		202.5],
		['Malta',            		122.6],
		['Zimbabwe',            	103.5],
		['Montenegro',            	178],
		['Ireland',           		125.9]
]);

var options = {};
	options['dataMode'] = 'regions';
	options['colors'] = [0xFFB581, 0xFF8747, 0xC06000]; //orange colors
	options['width'] = '100%';
	options['height'] = '100%';

var container = document.getElementById('verbinding_chart');
var geomap = new google.visualization.GeoMap(container);

geomap.draw(data, options);
};