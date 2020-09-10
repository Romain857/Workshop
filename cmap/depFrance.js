var maphover_fill = "#778899";	// Couleur de survol au passage de la souris
var mapstroke = "#000000";		// Couleur des lignes de séparation des régions
var mapstroke_width = 1.2;		// Epaisseur des lignes de séparation des régions (en points)
var mapWidth=1500;				// Largeur de la carte en pixels
var mapHeight=500;				// Hauteur de la carte en pixels (facultatif)


var path = {

    Z01: {
        title: "Ain",
        popu:61

    },
    Z02: {
        title: "Aisne",
        popu:44
    },
    Z03: {
        title: "Allier",
        popu:33
    },
    Z04: {
        title: "Alpes-de-Haute-Provence",
        popu: 7
    },
    Z05: {
        title: "Hautes-alpes",
        popu:6
    },
    Z06: {
        title: "Alpes-maritimes",
        popu:71
    },
    Z07: {
        title: "Ardèche",
        popu:14
    },
    Z08: {
        title: "Ardennes",
        popu:15
    },
    Z09: {
        title: "Ariège",
        popu:4
    },
    Z10: {
        title: "Aube",
        popu:27
    },
    Z11: {
        title: "Aude",
        popu:37
    },
    Z12: {
        title: "Aveyron",
        popu:19
    },
    Z13: {
        title: "Bouches-du-Rhone",
        popu:94
    },
    Z14: {
        title: "Calvados",
        popu:64
    },
    Z15: {
        title: "Cantal",
        popu:3
    },
    Z16: {
        title: "Charente",
        popu:42
    },
    Z17: {
        title: "Charente-maritime",
        popu:74
    },
    Z18: {
        title: "Cher",
        popu:26
    },
    Z19: {
        title: "Corrèze",
        popu:23
    },
    Z2A: {
        title: "Corse-du-sud",
        popu:0
    },
    Z2B: {
        title: "Haute-Corse",
        popu:0
    },
    Z21: {
        title: "Cotes-d'Or",
        popu:52
    },
    Z22: {
        title: "Cotes-dArmor",
        popu:57
    },
    Z23: {
        title: "Creuse",
        popu:5
    },
    Z24: {
        title: "Dordogne",
        popu:31
    },
    Z25: {
        title: "Doubs",
        popu:49
    },
    Z26: {
        title: "Drome",
        popu:70
    },
    Z27: {
        title: "Eure",
        popu:51
    },

    Z28: {
        title: "Eure-et-loir",
        popu:43
    },
    Z29: {
        title: "Finistère",
        popu:75
    },
    Z30: {
        title: "Gard",
        popu:55
    },
    Z31: {
        title: "Haute-garonne",
        popu:85
    },
    Z32: {
        title: "Gers",
        popu:9
    },
    Z33: {
        title: "Gironde",
        popu:90
    },
    Z34: {
        title: "Hérault",
        popu:86
    },
    Z35: {
        title: "Ille-et-vilaine",
        popu:84
    },
    Z36: {
        title: "Indre",
        popu:18
    },
    Z37: {
        title: "Inde-et-loire",
        popu:47
    },
    Z38: {
        title: "Isère",
        popu:83
    },
    Z39: {
        title: "Jura",
        popu:25
    },
    Z40: {
        title: "Landes",
        popu:38
    },
    Z41: {
        title: "Loire-et-cher",
        popu:30
    },
    Z42: {
        title: "Loire",
        popu:60
    },
    Z43: {
        title: "Haute-loire",
        popu:13
    },
    Z44: {
        title: "Loire-atlantique",
        popu:89
    },
    Z45: {
        title: "Loiret",
        popu:67
    },
    Z46: {
        title: "Lot",
        popu:8
    },
    Z47: {
        title: "Lot-et-garonne",
        popu:35
    },
    Z48: {
        title: "Lozère",
        popu:1
    },
    Z49: {
        title: "Maine-et-loire",
        popu:72
    },
    Z50: {
        title: "Manche",
        popu:45
    },

    Z51: {
        title: "Marne",
        popu:69
    },
    Z52: {
        title: "Haute-marne",
        popu:20
    },
    Z53: {
        title: "Mayenne",
        popu:28
    },
    Z54: {
        title: "Meurthe-et-moselle",
        popu:48
    },
    Z55: {
        title: "Meuse",
        popu:11
    },
    Z56: {
        title: "Morbihan",
        popu:73
    },
    Z57: {
        title: "Moselle",
        popu:65
    },
    Z58: {
        title: "Nièvre",
        popu:10
    },
    Z59: {
        title: "Nord",
        popu:93
    },
    Z60: {
        title: "Oise",
        popu:68
    },
    Z61: {
        title: "Orne",
        popu:21
    },
    Z62: {
        title: "Pas-de-calais",
        popu:92
    },
    Z63: {
        title: "Puy-du-dome",
        popu:58
    },
    Z64: {
        title: "Pyrénées-atlantiques",
        popu:46
    },
    Z65: {
        title: "Hautes-Pyrénées",
        popu:12
    },
    Z66: {
        title: "Pyrénées-orientales",
        popu:36
    },
    Z67: {
        title: "Bas-rhin",
        popu:77
    },
    Z68: {
        title: "Haut-rhin",
        popu:62
    },
    Z69: {
        title: "Rhone",
        popu:91
    },
    Z70: {
        title: "Haute-saone",
        popu:17
    },
    Z71: {
        title: "Saone-et-loire",
        popu:63
    },
    Z72: {
        title: "Sarthe",
        popu:56
    },
    Z73: {
        title: "Savoie",
        popu:50
    },
    Z74: {
        title: "Haute-savoie",
        popu:76
    },
    Z75: {
        title: "Paris",
        popu:16
    },
    Z76: {
        title: "Seine-maritime",
        popu:87
    },
    Z77: {
        title: "Seine-et-marne",
        popu:88
    },
    Z78: {
        title: "Yvelines",
        popu:78
    },
    Z79: {
        title: "Deux-sèvres",
        popu:41
    },
    Z80: {
        title: "Somme",
        popu:52
    },
    Z81: {
        title: "Tarn",
        popu:24
    },
    Z82: {
        title: "Tarn-et-garonne",
        popu:22
    },
    Z83: {
        title: "Var",
        popu:81
    },
    Z84: {
        title: "Vaucluse",
        popu:54
    },
    Z85: {
        title: "Vendée",
        popu:79
    },
    Z86: {
        title: "Vienne",
        popu:38
    },
    Z87: {
        title: "Haute-vienne",
        popu:29
    },
    Z88: {
        title: "Vosges",
        popu:32
    },
    Z89: {
        title: "Yonne",
        popu:34
    },
    Z90: {
        title: "Territoire-de-belfort",
        popu:2
    },
    Z91: {
        title: "Essonne",
        popu:80
    },
    Z92: {
        title: "Hauts-de-seine",
        popu:40
    },
    Z93: {
        title: "Seine-Saint-Denis",
        popu:59
    },
    Z94: {
        title: "Val-de-marne",
        popu:66
    },
    Z95: {
        title: "Val-doise",
        popu:81
    }
}