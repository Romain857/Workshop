var mapfill = "#B0E0E6";		// Couleur de remplissage des régions
var maphover_fill = "#778899";	// Couleur de survol au passage de la souris
var mapstroke = "#000000";		// Couleur des lignes de séparation des régions
var mapstroke_width = 1.2;		// Epaisseur des lignes de séparation des régions (en points)
var mapWidth=1500;				// Largeur de la carte en pixels
var mapHeight=500;				// Hauteur de la carte en pixels (facultatif)


var path = {

    Z01: {
        title: "Ain",
        url: "#"
    },
    Z02: {
        title: "Aisne",
        url: "#"
    },
    Z03: {
        title: "Allier",
        url: "#"
    },
    Z04: {
        title: "Alpes-de-Haute-Provence",
        url: "#"
    },
    Z05: {
        title: "Hautes-alpes",
        url: "#"
    },
    Z06: {
        title: "Alpes-maritimes",
        url: "#"
    },
    Z07: {
        title: "Ardèche",
        url: "#"
    },
    Z08: {
        title: "Ardennes",
        url: "#"
    },
    Z09: {
        title: "Ariège",
        url: "https://fr.wikipedia.org/wiki/Ari%C3%A8ge_(d%C3%A9partement)"
    },
    Z10: {
        title: "Aube",
    },
    Z11: {
        title: "Aude",
        url: "#"
    },
    Z12: {
        title: "Aveyron",
        url: "#"
    },
    Z13: {
        title: "Bouches-du-Rhone",
        url: "#",
        pop : ""
    },
    Z14: {
        title: "Calvados",
        url: "#"
    },
    Z15: {
        title: "Cantal",
        url: "#"
    },
    Z16: {
        title: "Charente",
        url: "#"
    },
    Z17: {
        title: "Charente-maritime",
        url: "#"
    },
    Z18: {
        title: "Cher",
        url: "#"
    },
    Z19: {
        title: "Corrèze",
        url: "#"
    },
    Z2A: {
        title: "Corse-du-sud",
        url: "#"
    },
    Z2B: {
        title: "Haute-Corse",
        url: "#"
    },
    Z21: {
        title: "Cotes-d'Or",
        url: "#"
    },
    Z22: {
        title: "Cotes-dArmor",
        url: "#"
    },
    Z23: {
        title: "Creuse",
        url: "#"
    },
    Z24: {
        title: "Dordogne",
    },
    Z25: {
        title: "Doubs",
        url: "#"
    },
    Z26: {
        title: "Drome",
        url: "#"
    },
    Z27: {
        title: "Eure",
        url: "#"
    },

    Z28: {
        title: "Eure-et-loir",
        url: "#"
    },
    Z29: {
        title: "Finistère",
        url: "#"
    },
    Z30: {
        title: "Gard",
        url: "#"
    },
    Z31: {
        title: "Haute-garonne",
        url: "#"
    },
    Z32: {
        title: "Gers",
        url: "#"
    },
    Z33: {
        title: "Gironde",
        url: "#"
    },
    Z34: {
        title: "Hérault",
    },
    Z35: {
        title: "Ille-et-vilaine",
        url: "#"
    },
    Z36: {
        title: "Indre",
        url: "#"
    },
    Z37: {
        title: "Inde-et-loire",
        url: "#"
    },
    Z38: {
        title: "Isère",
        url: "#"
    },
    Z39: {
        title: "Jura",
        url: "#"
    },
    Z40: {
        title: "Landes",
        url: "#"
    },
    Z41: {
        title: "Loire-et-cher",
        url: "#"
    },
    Z42: {
        title: "Loire",
        url: "#"
    },
    Z43: {
        title: "Haute-loire",
        url: "#"
    },
    Z44: {
        title: "Loire-atlantique",
        url: "#"
    },
    Z45: {
        title: "Loiret",
        url: "#"
    },
    Z46: {
        title: "Lot",
        url: "#"
    },
    Z47: {
        title: "Lot-et-garonne",
    },
    Z48: {
        title: "Lozère",
        url: "#"
    },
    Z49: {
        title: "Maine-et-loire",
        url: "#"
    },
    Z50: {
        title: "Manche",
        url: "#"
    },

    Z51: {
        title: "Marne",
        url: "#"
    },
    Z52: {
        title: "Haute-marne",
        url: "#"
    },
    Z53: {
        title: "Mayenne",
        url: "#"
    },
    Z54: {
        title: "Meurthe-et-moselle",
        url: "#"
    },
    Z55: {
        title: "Meuse",
        url: "#"
    },
    Z56: {
        title: "Morbihan",
        url: "#"
    },
    Z57: {
        title: "Moselle",
        url: "#"
    },
    Z58: {
        title: "Nièvre",
        url: "#"
    },
    Z59: {
        title: "Nord",
        url: "#"
    },
    Z60: {
        title: "Oise",
    },
    Z61: {
        title: "Orne",
        url: "#"
    },
    Z62: {
        title: "Pas-de-calais",
        url: "#"
    },
    Z63: {
        title: "Puy-du-dome",
        url: "#"
    },
    Z64: {
        title: "Pyrénées-atlantiques",
        url: "#"
    },
    Z65: {
        title: "Hautes-Pyrénées",
        url: "#"
    },
    Z66: {
        title: "Pyrénées-orientales",
        url: "#"
    },
    Z67: {
        title: "Bas-rhin",
        url: "#"
    },
    Z68: {
        title: "Haut-rhin",
        url: "#"
    },
    Z69: {
        title: "Rhone",
        url: "#"
    },
    Z70: {
        title: "Haute-saone",
        url: "#"
    },
    Z71: {
        title: "Saone-et-loire",
        url: "#"
    },
    Z72: {
        title: "Sarthe",
        url: "#"
    },
    Z73: {
        title: "Savoie",
    },
    Z74: {
        title: "Haute-savoie",
        url: "#"
    },
    Z75: {
        title: "Paris",
        url: "#"
    },
    Z76: {
        title: "Seine-maritime",
        url: "#"
    },
    Z77: {
        title: "Seine-et-marne",
        url: "#"
    },
    Z78: {
        title: "Yvelines",
        url: "#"
    },
    Z79: {
        title: "Deux-sèvres",
    },
    Z80: {
        title: "Somme",
        url: "#"
    },
    Z81: {
        title: "Tarn",
        url: "#"
    },
    Z82: {
        title: "Tarn-et-garonne",
        url: "#"
    },
    Z83: {
        title: "Var",
        url: "#"
    },
    Z84: {
        title: "Vaucluse",
        url: "#"
    },
    Z85: {
        title: "Vendée",
        url: "#"
    },
    Z86: {
        title: "Vienne",
        url: "#"
    },
    Z87: {
        title: "Haute-vienne",
        url: "#"
    },
    Z88: {
        title: "Vosges",
        url: "#"
    },
    Z89: {
        title: "Yonne",
        url: "#"
    },
    Z90: {
        title: "Territoire-de-belfort",
        url: "#"
    },
    Z91: {
        title: "Essonne",
    },
    Z92: {
        title: "Hauts-de-seine",
        url: "#"
    },
    Z93: {
        title: "Seine-Saint-Denis",
        url: "#"
    },
    Z94: {
        title: "Val-de-marne",
        url: "#"
    },
    Z95: {
        title: "Val-doise",
        url: "#"
    }
}