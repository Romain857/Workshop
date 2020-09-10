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
var mapWidth = 1500;				// Largeur de la carte en pixels
var mapHeight = 500;				// Hauteur de la carte en pixels (facultatif)


/*
Modifiez ci-dessous les 2 variables pour chaque région :

title:	" Texte associé à la région ";

url:	" Lien vers la page ou le site souhaité ";
*/
var path = {
    Z1: {
        title: "Grand-Est",
        popu: 7,
        gaz: 3,
        ssp: 7,
        elec: 2,
        moy:4.75
    },

    Z2: {
        title: "Nouvelle-Aquitaine",
        popu: 11,
        gaz: 9,
        ssp: 9,
        elec: 10,
        moy:9.75
    },

    Z3: {
        title: "Auvergne-Rhône-Alpes",
        popu: 12,
        gaz: 5,
        ssp: 11,
        elec: 5,
        moy:8.25
    },

    Z4: {
        title: "Bourgogne-Franche-Comté",
        popu: 2,
        gaz: 12,
        ssp: 2,
        elec: 10,
        moy:6.5
    },

    Z5: {
        title: "Bretagne",
        popu: 4,
        gaz: 6,
        ssp: 4,
        elec: 4,
        moy:4.5
    },

    Z6: {
        title: "Centre",
        popu: 1,
        gaz: 10,
        ssp: 1,
        elec: 3,
        moy:3.75

    },

    Z7: {
        title: "Corse",
        popu: 0,
        gaz: 0,
        ssp: 0,
        elec: 0,
        moy:0
    },

    Z8: {
        title: "Occitanie",
        popu: 9,
        gaz: 7,
        ssp: 8,
        elec: 0,
        moy:8
    },

    Z9: {
        title: "Ile-de-France",
        popu: 10,
        gaz: 8,
        ssp: 12,
        elec: 7,
        moy:9.25
    },

    Z10: {
        title: "Hauts-de-France",
        popu: 8,
        gaz: 2,
        ssp: 6,
        elec: 1,
        moy:4.25
    },

    Z11: {
        title: "Normandie",
        popu: 2,
        gaz: 11,
        ssp: 3,
        elec: 8,
        moy:6
    },

    Z12: {
        title: "Pays-de-la-Loire",
        popu: 5,
        gaz: 1,
        ssp: 5,
        elec: 0,
        moy:3.67
    },

    Z13: {
        title: "Provence-Alpes-Côte-d-Azur",
        popu: 6,
        gaz: 4,
        ssp: 10,
        elec: 6,
        moy:6.5
    }
}