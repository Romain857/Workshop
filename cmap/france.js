/*
Plugin Name: France regions map
Plugin URI: http://blog.comersis.com/articles/SVG-Raphael-map/
Description: France departements map.
Version: fr-reg-1.0215
Author: S.Marmion ©2015
Author URI: http://www.cmap.comersis.com
License: non-comercial
*/
var maphover_fill = "#ffffff";	// Couleur de survol au passage de la souris
var mapstroke = "#000000";		// Couleur des lignes de séparation des régions
var mapstroke_width = 1.2;		// Epaisseur des lignes de séparation des régions (en points)
var mapWidth=1500;				// Largeur de la carte en pixels
var mapHeight=500;				// Hauteur de la carte en pixels (facultatif)



/*
Modifiez ci-dessous les 2 variables pour chaque région :

title:	" Texte associé à la région ";

url:	" Lien vers la page ou le site souhaité ";
*/		
var path = {
Z1: {
title: "Grand-Est",
popu:7
},
Z2: {
title: "Nouvelle-Aquitaine",
popu:11
},
Z3: {
title: "Auvergne-Rhône-Alpes",
url: "#",
popu:12
},
Z4: {
title: "Bourgogne-Franche-Comté",
url: "#",
popu:2

},
Z5: {
title: "Bretagne",
url: "#",
popu:4
},
Z6: {
title: "Centre",
url: "#",
popu:1
},
Z7: {
title: "Corse",
popu: 0
},
Z8: {
title: "Occitanie",
url: "#",
popu:9
},
Z9: {
title: "Ile-de-France",
url: "#",
popu:10
},
Z10: {
title: "Hauts-de-France",
popu:8
},
Z11: {
title: "Normandie",
url: "#",
popu:2
},
Z12: {
title: "Pays-de-la-Loire",
url: "#",
popu:5
},
Z13: {
title: "Provence-Alpes-Côte-d-Azur",
url: "#",
popu:6
}
}