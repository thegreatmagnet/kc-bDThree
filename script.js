//var us = require('us')
var data = {
    "state": {
        "AK": {
            "fips": "02",
            "name": "Alaska",
            "population": 736990.0
        },
        "AL": {
            "fips": "01",
            "name": "Alabama",
            "population": 4893186.0
        },
        "AR": {
            "fips": "05",
            "name": "Arkansas",
            "population": 3011873.0
        },
        "AZ": {
            "fips": "04",
            "name": "Arizona",
            "population": 7174064.0
        },
        "CA": {
            "fips": "06",
            "name": "California",
            "population": 39346023.0
        },
        "CO": {
            "fips": "08",
            "name": "Colorado",
            "population": 5684926.0
        },
        "CT": {
            "fips": "09",
            "name": "Connecticut",
            "population": 3570549.0
        },
        "DC": {
            "fips": "11",
            "name": "District of Columbia",
            "population": 701974.0
        },
        "DE": {
            "fips": "10",
            "name": "Delaware",
            "population": 967679.0
        },
        "FL": {
            "fips": "12",
            "name": "Florida",
            "population": 21216924.0
        },
        "GA": {
            "fips": "13",
            "name": "Georgia",
            "population": 10516579.0
        },
        "HI": {
            "fips": "15",
            "name": "Hawaii",
            "population": 1420074.0
        },
        "IA": {
            "fips": "19",
            "name": "Iowa",
            "population": 3150011.0
        },
        "ID": {
            "fips": "16",
            "name": "Idaho",
            "population": 1754367.0
        },
        "IL": {
            "fips": "17",
            "name": "Illinois",
            "population": 12716164.0
        },
        "IN": {
            "fips": "18",
            "name": "Indiana",
            "population": 6696893.0
        },
        "KS": {
            "fips": "20",
            "name": "Kansas",
            "population": 2912619.0
        },
        "KY": {
            "fips": "21",
            "name": "Kentucky",
            "population": 4461952.0
        },
        "LA": {
            "fips": "22",
            "name": "Louisiana",
            "population": 4664616.0
        },
        "MA": {
            "fips": "25",
            "name": "Massachusetts",
            "population": 6873003.0
        },
        "MD": {
            "fips": "24",
            "name": "Maryland",
            "population": 6037624.0
        },
        "ME": {
            "fips": "23",
            "name": "Maine",
            "population": 1340825.0
        },
        "MI": {
            "fips": "26",
            "name": "Michigan",
            "population": 9973907.0
        },
        "MN": {
            "fips": "27",
            "name": "Minnesota",
            "population": 5600166.0
        },
        "MO": {
            "fips": "29",
            "name": "Missouri",
            "population": 6124160.0
        },
        "MS": {
            "fips": "28",
            "name": "Mississippi",
            "population": 2981835.0
        },
        "MT": {
            "fips": "30",
            "name": "Montana",
            "population": 1061705.0
        },
        "NC": {
            "fips": "37",
            "name": "North Carolina",
            "population": 10386227.0
        },
        "ND": {
            "fips": "38",
            "name": "North Dakota",
            "population": 760394.0
        },
        "NE": {
            "fips": "31",
            "name": "Nebraska",
            "population": 1923826.0
        },
        "NH": {
            "fips": "33",
            "name": "New Hampshire",
            "population": 1355244.0
        },
        "NJ": {
            "fips": "34",
            "name": "New Jersey",
            "population": 8885418.0
        },
        "NM": {
            "fips": "35",
            "name": "New Mexico",
            "population": 2097021.0
        },
        "NV": {
            "fips": "32",
            "name": "Nevada",
            "population": 3030281.0
        },
        "NY": {
            "fips": "36",
            "name": "New York",
            "population": 19514849.0
        },
        "OH": {
            "fips": "39",
            "name": "Ohio",
            "population": 11675275.0
        },
        "OK": {
            "fips": "40",
            "name": "Oklahoma",
            "population": 3949342.0
        },
        "OR": {
            "fips": "41",
            "name": "Oregon",
            "population": 4176346.0
        },
        "PA": {
            "fips": "42",
            "name": "Pennsylvania",
            "population": 12794885.0
        },
        "PR": {
            "fips": "72",
            "name": "Puerto Rico",
            "population": 3255642.0
        },
        "RI": {
            "fips": "44",
            "name": "Rhode Island",
            "population": 1057798.0
        },
        "SC": {
            "fips": "45",
            "name": "South Carolina",
            "population": 5091517.0
        },
        "SD": {
            "fips": "46",
            "name": "South Dakota",
            "population": 879336.0
        },
        "TN": {
            "fips": "47",
            "name": "Tennessee",
            "population": 6772268.0
        },
        "TX": {
            "fips": "48",
            "name": "Texas",
            "population": 28635442.0
        },
        "UT": {
            "fips": "49",
            "name": "Utah",
            "population": 3151239.0
        },
        "VA": {
            "fips": "51",
            "name": "Virginia",
            "population": 8509358.0
        },
        "VT": {
            "fips": "50",
            "name": "Vermont",
            "population": 624340.0
        },
        "WA": {
            "fips": "53",
            "name": "Washington",
            "population": 7512465.0
        },
        "WI": {
            "fips": "55",
            "name": "Wisconsin",
            "population": 5806975.0
        },
        "WV": {
            "fips": "54",
            "name": "West Virginia",
            "population": 1807426.0
        },
        "WY": {
            "fips": "56",
            "name": "Wyoming",
            "population": 581348.0
        }
    }
}

var usMap = new Datamap({ // INITIALIZES THE MAP OF THE USA ON TO THE PAGE
    element: document.getElementById('container'),
    scope: 'usa',
    responsive: true,
    done: function (datamap) {
        datamap.svg.selectAll('.datamaps-subunit').on('click', function (geography) {
            console.log(data.state[geography.id].population)
        });
    }
});
