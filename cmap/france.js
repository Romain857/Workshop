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
Z1: {
title: "Grand-Est",
url: "#"
},
Z2: {
title: "Nouvelle-Aquitaine",
url: "#"
},
Z3: {
title: "Auvergne-Rhône-Alpes",
url: "#"
},
Z4: {
title: "Bourgogne-Franche-Comté",
url: "#"
},
Z5: {
title: "Bretagne",
url: "#"
},
Z6: {
title: "Centre",
url: "#"
},
Z7: {
title: "Corse",
url: "#"
},
Z8: {
title: "Occitanie",
url: "#"
},
Z9: {
title: "Ile-de-France",
url: "#"
},
Z10: {
title: "Hauts-de-France",
},
Z11: {
title: "Normandie",
url: "#"
},
Z12: {
title: "Pays-de-la-Loire",
url: "#"
},
Z13: {
title: "Provence-Alpes-Côte-d-Azur",
url: "#"
}

}