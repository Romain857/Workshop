var maphover_fill = "#778899";	// Couleur de survol au passage de la souris
var mapstroke = "#000000";		// Couleur des lignes de séparation des régions
var mapstroke_width = 1.2;		// Epaisseur des lignes de séparation des régions (en points)
var mapWidth=1500;				// Largeur de la carte en pixels
var mapHeight=500;				// Hauteur de la carte en pixels (facultatif)


var path = {

    Z01: {
        title: "Ain",
        popu:61,
        gaz:26,
        ssp: 65,
        elec: 11,
        moy:40.75

    },
    Z02: {
        title: "Aisne",
        popu:44,
        gaz:35,
        ssp: 39,
        elec: 7,
        moy:31.25
    },
    Z03: {
        title: "Allier",
        popu:33,
        gaz:40,
        ssp: 31,
        elec: 10,
        moy:28.5
    },
    Z04: {
        title: "Alpes-de-Haute-Provence",
        popu: 7,
        gaz:4,
        ssp: 12,
        elec: 20,
        moy:10.75
    },
    Z05: {
        title: "Hautes-alpes",
        popu:6,
        gaz:6,
        ssp: 8,
        elec: 21,
        moy:10.25
    },
    Z06: {
        title: "Alpes-maritimes",
        popu:71,
        gaz:47,
        ssp: 91,
        elec: 27,
        moy:59
    },
    Z07: {
        title: "Ardèche",
        popu:14,
        gaz:3,
        ssp: 24,
        elec: 13,
        moy:13.5
    },
    Z08: {
        title: "Ardennes",
        popu:15,
        gaz:42,
        ssp: 9,
        elec:5,
        moy:17.75
    },
    Z09: {
        title: "Ariège",
        popu:4,
        gaz:19,
        ssp: 4,
        elec: 0,
        moy:9
    },
    Z10: {
        title: "Aube",
        popu:27,
        gaz:36,
        ssp: 23,
        elec: 8,
        moy:23.5
    },
    Z11: {
        title: "Aude",
        popu:37,
        gaz:2,
        ssp: 36,
        elec: 0,
        moy:25
    },
    Z12: {
        title: "Aveyron",
        popu:19,
        gaz:5,
        ssp: 20,
        elec: 0,
        moy:14.5
    },
    Z13: {
        title: "Bouches-du-Rhone",
        popu:94,
        gaz:43,
        ssp: 94,
        elec: 0,
        moy:77
    },
    Z14: {
        title: "Calvados",
        popu:64,
        gaz:27,
        ssp: 68,
        elec: 12,
        moy:42.5
    },
    Z15: {
        title: "Cantal",
        popu:3,
        gaz:11,
        ssp: 2,
        elec: 17,
        moy:8.25
    },
    Z16: {
        title: "Charente",
        popu:42,
        gaz:28,
        ssp: 32,
        elec: 9,
        moy:27.75
    },
    Z17: {
        title: "Charente-maritime",
        popu:74,
        gaz:9,
        ssp: 72,
        elec: 19,
        moy:43.5
    },
    Z18: {
        title: "Cher",
        popu:26,
        gaz:23,
        ssp: 26,
        elec: 0,
        moy:24,
    },
    Z19: {
        title: "Corrèze",
        popu:23,
        gaz:23,
        ssp: 22,
        elec: 15,
        moy:20.75
    },
    Z2A: {
        title: "Corse-du-sud",
        popu:0,
        gaz:0,
        ssp: 0,
        elec: 0,
        moy:0
    },
    Z2B: {
        title: "Haute-Corse",
        popu:0,
        gaz:0,
        ssp: 0,
        elec: 0,
        moy:0
    },
    Z21: {
        title: "Cotes-d'Or",
        popu:52,
        gaz:41,
        ssp: 51,
        elec: 1,
        moy:36.25
    },
    Z22: {
        title: "Cotes-dArmor",
        popu:57,
        gaz:13,
        ssp: 48,
        elec: 4,
        moy:30.5
    },
    Z23: {
        title: "Creuse",
        popu:5,
        gaz:14,
        ssp: 6,
        elec: 14,
        moy:9.75
    },
    Z24: {
        title: "Dordogne",
        popu:31,
        gaz:21,
        ssp: 35,
        elec: 18,
        moy:26.25
    },
    Z25: {
        title: "Doubs",
        popu:49,
        gaz:32,
        ssp: 49,
        elec: 6,
        moy:34
    },
    Z26: {
        title: "Drome",
        popu:70,
        gaz:22,
        ssp: 58,
        elec: 2,
        moy:38
    },
    Z27: {
        title: "Eure",
        popu:51,
        gaz:24,
        ssp: 50,
        elec: 3,
        moy:32
    },

    Z28: {
        title: "Eure-et-loir",
        popu:43,
        gaz:33,
        ssp: 43,
        elec: 0,
        moy:39.67
    },
    Z29: {
        title: "Finistère",
        popu:75,
        gaz:17,
        ssp: 73,
        elec: 0,
        moy:55
    },
    Z30: {
        title: "Gard",
        popu:55,
        gaz:16,
        ssp: 64,
        elec: 0,
        moy:45
    },
    Z31: {
        title: "Haute-garonne",
        popu:85,
        gaz:55,
        ssp: 84,
        elec: 0,
        moy:74.67
    },
    Z32: {
        title: "Gers",
        popu:9,
        gaz:6,
        ssp: 7,
        elec: 0,
        moy:7
    },
    Z33: {
        title: "Gironde",
        popu:90,
        gaz:57,
        ssp: 92,
        elec: 0,
        moy:79.67
    },
    Z34: {
        title: "Hérault",
        popu:86,
        gaz:49,
        ssp: 82,
        elec: 0,
        moy:72.33
    },
    Z35: {
        title: "Ille-et-vilaine",
        popu:84,
        gaz:52,
        ssp: 76,
        elec: 0,
        moy:70.66
    },
    Z36: {
        title: "Indre",
        popu:18,
        gaz:29,
        ssp: 16,
        elec: 0,
        moy:21
    },
    Z37: {
        title: "Inde-et-loire",
        popu:47,
        gaz:31,
        ssp: 53,
        elec: 0,
        moy:43.67
    },
    Z38: {
        title: "Isère",
        popu:83,
        gaz:53,
        ssp: 81,
        elec: 0,
        moy:72.33
    },
    Z39: {
        title: "Jura",
        popu:25,
        gaz:1,
        ssp: 25,
        elec: 0,
        moy:17
    },
    Z40: {
        title: "Landes",
        popu:38,
        gaz:0,
        ssp: 40,
        elec: 0,
        moy:39
    },
    Z41: {
        title: "Loire-et-cher",
        popu:30,
        gaz:0,
        ssp: 34,
        elec: 16,
        moy:26.67
    },
    Z42: {
        title: "Loire",
        popu:60,
        gaz:0,
        ssp: 55,
        elec: 0,
        moy:57.5
    },
    Z43: {
        title: "Haute-loire",
        popu:13,
        gaz:0,
        ssp: 14,
        elec: 0,
        moy:13.5
    },
    Z44: {
        title: "Loire-atlantique",
        popu:89,
        gaz:0,
        ssp: 86,
        elec: 0,
        moy:87.5
    },
    Z45: {
        title: "Loiret",
        popu:67,
        gaz:0,
        ssp: 62,
        elec: 0,
        moy:64.5
    },
    Z46: {
        title: "Lot",
        popu:8,
        gaz:0,
        ssp: 10,
        elec: 0,
        moy:9
    },
    Z47: {
        title: "Lot-et-garonne",
        popu:35,
        gaz:0,
        ssp: 27,
        elec: 0,
        moy:31
    },
    Z48: {
        title: "Lozère",
        popu:1,
        gaz:0,
        ssp: 1,
        elec: 0,
        moy:1
    },
    Z49: {
        title: "Maine-et-loire",
        popu:72,
        gaz:0,
        ssp: 60,
        elec: 0,
        moy:66
    },
    Z50: {
        title: "Manche",
        popu:45,
        gaz:0,
        ssp: 42,
        elec: 0,
        moy:43.5
    },

    Z51: {
        title: "Marne",
        popu:69,
        gaz:0,
        ssp: 69,
        elec: 0,
        moy:69
    },
    Z52: {
        title: "Haute-marne",
        popu:20,
        gaz:0,
        ssp: 13,
        elec: 0,
        moy:16.5
    },
    Z53: {
        title: "Mayenne",
        popu:28,
        gaz:0,
        ssp: 21,
        elec: 0,
        moy:24.5
    },
    Z54: {
        title: "Meurthe-et-moselle",
        popu:48,
        gaz:0,
        ssp: 45,
        elec: 0,
        moy:46.5
    },
    Z55: {
        title: "Meuse",
        popu:11,
        gaz:0,
        ssp: 5,
        elec: 0,
        moy:8
    },
    Z56: {
        title: "Morbihan",
        popu:73,
        gaz:0,
        ssp: 67,
        elec: 0,
        moy:70
    },
    Z57: {
        title: "Moselle",
        popu:65,
        gaz:0,
        ssp: 66,
        elec: 0,
        moy:65.5
    },
    Z58: {
        title: "Nièvre",
        popu:10,
        gaz:0,
        ssp: 18,
        elec: 0,
        moy:14
    },
    Z59: {
        title: "Nord",
        popu:93,
        gaz:0,
        ssp: 93,
        elec: 0,
        moy:93
    },
    Z60: {
        title: "Oise",
        popu:68,
        gaz:0,
        ssp: 63,
        elec: 0,
        moy:65.5
    },
    Z61: {
        title: "Orne",
        popu:21,
        gaz:0,
        ssp: 19,
        elec: 0,
        moy:20
    },
    Z62: {
        title: "Pas-de-calais",
        popu:92,
        gaz:0,
        ssp: 79,
        elec: 0,
        moy:85.5
    },
    Z63: {
        title: "Puy-du-dome",
        popu:58,
        gaz:0,
        ssp: 61,
        elec: 0,
        moy:59.5
    },
    Z64: {
        title: "Pyrénées-atlantiques",
        popu:46,
        gaz:0,
        ssp: 56,
        elec: 0,
        moy:51
    },
    Z65: {
        title: "Hautes-Pyrénées",
        popu:12,
        gaz:0,
        ssp: 15,
        elec: 0,
        moy:13.5
    },
    Z66: {
        title: "Pyrénées-orientales",
        popu:36,
        gaz:0,
        ssp: 43,
        elec: 0,
        moy:39.5
    },
    Z67: {
        title: "Bas-rhin",
        popu:77,
        gaz:0,
        ssp: 78,
        elec: 0,
        moy:77.5
    },
    Z68: {
        title: "Haut-rhin",
        popu:62,
        gaz:0,
        ssp: 69,
        elec: 0,
        moy:65.5
    },
    Z69: {
        title: "Rhone",
        popu:91,
        gaz:0,
        ssp: 89,
        elec: 0,
        moy:90
    },
    Z70: {
        title: "Haute-saone",
        popu:17,
        gaz:0,
        ssp: 17,
        elec: 0,
        moy:17
    },
    Z71: {
        title: "Saone-et-loire",
        popu:63,
        gaz:0,
        ssp: 57,
        elec: 0,
        moy:60
    },
    Z72: {
        title: "Sarthe",
        popu:56,
        gaz:0,
        ssp: 52,
        elec: 0,
        moy:54
    },
    Z73: {
        title: "Savoie",
        popu:50,
        gaz:0,
        ssp: 47,
        elec: 0,
        moy:48.5
    },
    Z74: {
        title: "Haute-savoie",
        popu:76,
        gaz:0,
        ssp: 77,
        elec: 0,
        moy:76.5
    },
    Z75: {
        title: "Paris",
        popu:16,
        gaz:54,
        ssp: 54,
        elec: 25,
        moy:41.33
    },
    Z76: {
        title: "Seine-maritime",
        popu:87,
        gaz:56,
        ssp: 80,
        elec: 59,
        moy:70.5
    },
    Z77: {
        title: "Seine-et-marne",
        popu:88,
        gaz:48,
        ssp: 88,
        elec: 25,
        moy:74.66
    },
    Z78: {
        title: "Yvelines",
        popu:78,
        gaz:44,
        ssp: 90,
        elec: 48,
        moy:70.66
    },
    Z79: {
        title: "Deux-sèvres",
        popu:41,
        gaz:15,
        ssp: 30,
        elec: 0,
        moy:28.66
    },
    Z80: {
        title: "Somme",
        popu:52,
        gaz:30,
        ssp: 44,
        elec: 0,
        moy:42
    },
    Z81: {
        title: "Tarn",
        popu:24,
        gaz:18,
        ssp: 28,
        elec: 0,
        moy:23.33
    },
    Z82: {
        title: "Tarn-et-garonne",
        popu:22,
        gaz:8,
        ssp: 17,
        elec: 0,
        moy:15.66
    },
    Z83: {
        title: "Var",
        popu:81,
        gaz:45,
        ssp: 87,
        elec: 0,
        moy:71
    },
    Z84: {
        title: "Vaucluse",
        popu:54,
        gaz:10,
        ssp: 59,
        elec: 0,
        moy:41
    },
    Z85: {
        title: "Vendée",
        popu:79,
        gaz:12,
        ssp: 70,
        elec: 1,
        moy:53.66
    },
    Z86: {
        title: "Vienne",
        popu:38,
        gaz:20,
        ssp: 38,
        elec: 0,
        moy:32
    },
    Z87: {
        title: "Haute-vienne",
        popu:29,
        gaz:34,
        ssp: 33,
        elec: 0,
        moy:32
    },
    Z88: {
        title: "Vosges",
        popu:32,
        gaz:39,
        ssp: 29,
        elec: 0,
        moy:33
    },
    Z89: {
        title: "Yonne",
        popu:34,
        gaz:37,
        ssp: 37,
        elec: 0,
        moy:36
    },
    Z90: {
        title: "Territoire-de-belfort",
        popu:2,
        gaz:38,
        ssp: 3,
        elec: 1,
        moy:14.33
    },
    Z91: {
        title: "Essonne",
        popu:80,
        gaz:51,
        ssp: 85,
        elec: 26,
        moy:60.5
    },
    Z92: {
        title: "Hauts-de-seine",
        popu:40,
        gaz:0,
        ssp: 74,
        elec: 22,
        moy:45.33
    },
    Z93: {
        title: "Seine-Saint-Denis",
        popu:59,
        gaz:58,
        ssp: 71,
        elec: 23,
        moy:52.75
    },
    Z94: {
        title: "Val-de-marne",
        popu:66,
        gaz:45,
        ssp: 75,
        elec: 24,
        moy:52.5
    },
    Z95: {
        title: "Val-doise",
        popu:81,
        gaz:50,
        ssp: 83,
        elec: 25,
        moy:59.75
    }
}