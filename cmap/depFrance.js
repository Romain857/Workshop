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
        title: "Eure-et-Loire",
        url: "#"
    },
    Z03: {
        title: "Finistère",
        url: "#"
    },
    Z04: {
        title: "Gard",
        url: "#"
    },
    Z05: {
        title: "Haute-Garonne",
        url: "#"
    },
    Z06: {
        title: "Gers",
        url: "#"
    },
    Z07: {
        title: "Gironde",
        url: "#"
    },
    Z08: {
        title: "Hérault",
        url: "#"
    },
    Z09: {
        title: "Ille-et-Vilaine",
        url: "#"
    },
    Z10: {
        title: "Indre",
    },
    Z11: {
        title: "Indre-et-Loire",
        url: "#"
    },
    Z12: {
        title: "Isère",
        url: "#"
    },
    Z13: {
        title: "Jura",
        url: "#"
    },
    Z14: {
        title: "Landes",
        url: "#"
    },
    Z15: {
        title: "Loir-et-Cher",
        url: "#"
    },
    Z16: {
        title: "Loire",
        url: "#"
    },
    Z17: {
        title: "Haute-Loire",
        url: "#"
    },
    Z18: {
        title: "Loire-Atlantique",
        url: "#"
    },
    Z19: {
        title: "Loiret",
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
    Z20: {
        title: "Lot",
        url: "#"
    },
    Z21: {
        title: "Lot-et-Garonne",
        url: "#"
    },
    Z22: {
        title: "Lozère",
        url: "#"
    },
    Z23: {
        title: "Maine-et-Loire",
    },
    Z24: {
        title: "Manche",
        url: "#"
    },
    Z25: {
        title: "Marne",
        url: "#"
    },
    Z26: {
        title: "Haute-Marne",
        url: "#"
    },

    Z27: {
        title: "Alpes-de-Haute-Provence",
        url: "#"
    },
    Z28: {
        title: "Hautes-Alpes",
        url: "#"
    },
    Z29: {
        title: "Alpes-Maritimes",
        url: "#"
    },
    Z30: {
        title: "Ardèche",
        url: "#"
    },
    Z31: {
        title: "Ardennes",
        url: "#"
    },
    Z32: {
        title: "Ariège",
        url: "#"
    },
    Z33: {
        title: "Aube",
    },
    Z34: {
        title: "Aude",
        url: "#"
    },
    Z35: {
        title: "Aveyron",
        url: "#"
    },
    Z36: {
        title: "Bouches-du-Rhône",
        url: "#"
    },
    Z37: {
        title: "Calvados",
        url: "#"
    },
    Z38: {
        title: "Charente",
        url: "#"
    },
    Z39: {
        title: "Charente-Maritime",
        url: "#"
    },
    Z40: {
        title: "Cher",
        url: "#"
    },
    Z41: {
        title: "Corrèze",
        url: "#"
    },
    Z42: {
        title: "Corse-du-sud",
        url: "#"
    },
    Z43: {
        title: "Haute-Corse",
        url: "#"
    },
    Z44: {
        title: "Côte-d'Or",
        url: "#"
    },
    Z45: {
        title: "Côtes-d'Armor",
        url: "#"
    },
    Z46: {
        title: "Creuse",
    },
    Z47: {
        title: "Dordogne",
        url: "#"
    },
    Z48: {
        title: "Doubs",
        url: "#"
    },
    Z49: {
        title: "Drôme",
        url: "#"
    },

    Z50: {
        title: "Eure",
        url: "#"
    },
    Z51: {
        title: "Eure-et-Loire",
        url: "#"
    },
    Z52: {
        title: "Finistère",
        url: "#"
    },
    Z53: {
        title: "Gard",
        url: "#"
    },
    Z54: {
        title: "Haute-Garonne",
        url: "#"
    },
    Z55: {
        title: "Gers",
        url: "#"
    },
    Z56: {
        title: "Gironde",
        url: "#"
    },
    Z57: {
        title: "Hérault",
        url: "#"
    },
    Z58: {
        title: "Ille-et-Vilaine",
        url: "#"
    },
    Z59: {
        title: "Indre",
    },
    Z60: {
        title: "Indre-et-Loire",
        url: "#"
    },
    Z61: {
        title: "Isère",
        url: "#"
    },
    Z62: {
        title: "Jura",
        url: "#"
    },
    Z63: {
        title: "Landes",
        url: "#"
    },
    Z64: {
        title: "Loir-et-Cher",
        url: "#"
    },
    Z65: {
        title: "Loire",
        url: "#"
    },
    Z66: {
        title: "Haute-Loire",
        url: "#"
    },
    Z67: {
        title: "Loire-Atlantique",
        url: "#"
    },
    Z68: {
        title: "Loiret",
        url: "#"
    },
    Z69: {
        title: "Lot",
        url: "#"
    },
    Z70: {
        title: "Lot-et-Garonne",
        url: "#"
    },
    Z71: {
        title: "Lozère",
        url: "#"
    },
    Z72: {
        title: "Maine-et-Loire",
    },
    Z73: {
        title: "Manche",
        url: "#"
    },
    Z74: {
        title: "Marne",
        url: "#"
    },
    Z75: {
        title: "Haute-Marne",
        url: "#"
    },
    Z76: {
        title: "Lot-et-Garonne",
        url: "#"
    },
    Z77: {
        title: "Lozère",
        url: "#"
    },
    Z78: {
        title: "Maine-et-Loire",
    },
    Z79: {
        title: "Manche",
        url: "#"
    },
    Z80: {
        title: "Marne",
        url: "#"
    },
    Z81: {
        title: "Haute-Marne",
        url: "#"
    },
    Z82: {
        title: "Loir-et-Cher",
        url: "#"
    },
    Z83: {
        title: "Loire",
        url: "#"
    },
    Z84: {
        title: "Haute-Loire",
        url: "#"
    },
    Z85: {
        title: "Loire-Atlantique",
        url: "#"
    },
    Z86: {
        title: "Loiret",
        url: "#"
    },
    Z87: {
        title: "Lot",
        url: "#"
    },
    Z88: {
        title: "Lot-et-Garonne",
        url: "#"
    },
    Z89: {
        title: "Lozère",
        url: "#"
    },
    Z90: {
        title: "Maine-et-Loire",
    },
    Z91: {
        title: "Manche",
        url: "#"
    },
    Z92: {
        title: "Marne",
        url: "#"
    },
    Z93: {
        title: "Haute-Marne",
        url: "#"
    },
    Z94: {
        title: "Lot-et-Garonne",
        url: "#"
    },
    Z95:
        {
        title: "Lozère",
        url: "#"
    }
}