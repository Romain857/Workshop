/*
Plugin Name: France regions map
Plugin URI: http://blog.comersis.com/articles/SVG-Raphael-map/
Description: France departements map.
Version: fr-reg-1.0215
Author: S.Marmion ©2015
Author URI: http://www.cmap.comersis.com
License: non-comercial
*/
		var mapfill = "#B0E0E6";		// Couleur de remplissage des régions
		var maphover_fill = "#778899";	// Couleur de survol au passage de la souris
		var mapstroke = "#000000";		// Couleur des lignes de séparation des régions
		var mapstroke_width = 1.2;		// Epaisseur des lignes de séparation des régions (en points)
		var mapWidth=1500;				// Largeur de la carte en pixels
		var mapHeight=500;				// Hauteur de la carte en pixels (facultatif)
		

/*
Modifiez ci-dessous les 2 variables pour chaque région :
	
	title:	" Texte associé à la région ";
	
	url:	" Lien vers la page ou le site souhaité ";

*/		
var paths = {

Z001: {
title: "Grand-Est",
url: "#"
},
Z002: {
title: "Nouvelle-Aquitaine",
url: "#"
},
Z003: {
title: "Auvergne-Rhône-Alpes",
url: "#"
},
Z004: {
title: "Bourgogne-Franche-Comté",
url: "#"
},
Z005: {
title: "Bretagne",
url: "#"
},
Z006: {
title: "Centre",
url: "#"
},
Z007: {
title: "Corse",
url: "#"
},
Z008: {
title: "Occitanie",
url: "#"
},
Z009: {
title: "Ile-de-France",
url: "#"
},
Z0010: {
title: "Hauts-de-France",
},
Z0011: {
title: "Normandie",
url: "#"
},
Z0012: {
title: "Pays-de-la-Loire",
url: "#"
},
Z0013: {
title: "Provence-Alpes-Côte-d-Azur",
url: "#"
}
}