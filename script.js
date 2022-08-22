//init variables

//get carbon 2011-2019

//get population 2011-2019
var years = [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019]
//var populationData = []
var states = {
    "AK": {
        "abbr": "AK",
        "carbon": {},
        "fips": "02",
        "name": "Alaska",
        "population": {}
    },
    "AL": {
        "abbr": "AL",
        "carbon": {},
        "fips": "01",
        "name": "Alabama",
        "population": {}
    },
    "AR": {
        "abbr": "AR",
        "carbon": {},
        "fips": "05",
        "name": "Arkansas",
        "population": {}
    },
    "AZ": {
        "abbr": "AZ",
        "carbon": {},
        "fips": "04",
        "name": "Arizona",
        "population": {}
    },
    "CA": {
        "abbr": "CA",
        "carbon": {},
        "fips": "06",
        "name": "California",
        "population": {}
    },
    "CO": {
        "abbr": "CO",
        "carbon": {},
        "fips": "08",
        "name": "Colorado",
        "population": {}
    },
    "CT": {
        "abbr": "CT",
        "carbon": {},
        "fips": "09",
        "name": "Connecticut",
        "population": {}
    },
    "DC": {
        "abbr": "DC",
        "carbon": {},
        "fips": "11",
        "name": "District of Columbia",
        "population": {}
    },
    "DE": {
        "abbr": "DE",
        "carbon": {},
        "fips": "10",
        "name": "Delaware",
        "population": {}
    },
    "FL": {
        "abbr": "FL",
        "carbon": {},
        "fips": "12",
        "name": "Florida",
        "population": {}
    },
    "GA": {
        "abbr": "GA",
        "carbon": {},
        "fips": "13",
        "name": "Georgia",
        "population": {}
    },
    "HI": {
        "abbr": "HI",
        "carbon": {},
        "fips": "15",
        "name": "Hawaii",
        "population": {}
    },
    "IA": {
        "abbr": "IA",
        "carbon": {},
        "fips": "19",
        "name": "Iowa",
        "population": {}
    },
    "ID": {
        "abbr": "ID",
        "carbon": {},
        "fips": "16",
        "name": "Idaho",
        "population": {}
    },
    "IL": {
        "abbr": "IL",
        "carbon": {},
        "fips": "17",
        "name": "Illinois",
        "population": {}
    },
    "IN": {
        "abbr": "IN",
        "carbon": {},
        "fips": "18",
        "name": "Indiana",
        "population": {}
    },
    "KS": {
        "abbr": "KS",
        "carbon": {},
        "fips": "20",
        "name": "Kansas",
        "population": {}
    },
    "KY": {
        "abbr": "KY",
        "carbon": {},
        "fips": "21",
        "name": "Kentucky",
        "population": {}
    },
    "LA": {
        "abbr": "LA",
        "carbon": {},
        "fips": "22",
        "name": "Louisiana",
        "population": {}
    },
    "MA": {
        "abbr": "MA",
        "carbon": {},
        "fips": "25",
        "name": "Massachusetts",
        "population": {}
    },
    "MD": {
        "abbr": "MD",
        "carbon": {},
        "fips": "24",
        "name": "Maryland",
        "population": {}
    },
    "ME": {
        "abbr": "ME",
        "carbon": {},
        "fips": "23",
        "name": "Maine",
        "population": {}
    },
    "MI": {
        "abbr": "MI",
        "carbon": {},
        "fips": "26",
        "name": "Michigan",
        "population": {}
    },
    "MN": {
        "abbr": "MN",
        "carbon": {},
        "fips": "27",
        "name": "Minnesota",
        "population": {}
    },
    "MO": {
        "abbr": "MO",
        "carbon": {},
        "fips": "29",
        "name": "Missouri",
        "population": {}
    },
    "MS": {
        "abbr": "MS",
        "carbon": {},
        "fips": "28",
        "name": "Mississippi",
        "population": {}
    },
    "MT": {
        "abbr": "MT",
        "carbon": {},
        "fips": "30",
        "name": "Montana",
        "population": {}
    },
    "NC": {
        "abbr": "NC",
        "carbon": {},
        "fips": "37",
        "name": "North Carolina",
        "population": {}
    },
    "ND": {
        "abbr": "ND",
        "carbon": {},
        "fips": "38",
        "name": "North Dakota",
        "population": {}
    },
    "NE": {
        "abbr": "NE",
        "carbon": {},
        "fips": "31",
        "name": "Nebraska",
        "population": {}
    },
    "NH": {
        "abbr": "NH",
        "carbon": {},
        "fips": "33",
        "name": "New Hampshire",
        "population": {}
    },
    "NJ": {
        "abbr": "NJ",
        "carbon": {},
        "fips": "34",
        "name": "New Jersey",
        "population": {}
    },
    "NM": {
        "abbr": "NM",
        "carbon": {},
        "fips": "35",
        "name": "New Mexico",
        "population": {}
    },
    "NV": {
        "abbr": "NV",
        "carbon": {},
        "fips": "32",
        "name": "Nevada",
        "population": {}
    },
    "NY": {
        "abbr": "NY",
        "carbon": {},
        "fips": "36",
        "name": "New York",
        "population": {}
    },
    "OH": {
        "abbr": "OH",
        "carbon": {},
        "fips": "39",
        "name": "Ohio",
        "population": {}
    },
    "OK": {
        "abbr": "OK",
        "carbon": {},
        "fips": "40",
        "name": "Oklahoma",
        "population": {}
    },
    "OR": {
        "abbr": "OR",
        "carbon": {},
        "fips": "41",
        "name": "Oregon",
        "population": {}
    },
    "PA": {
        "abbr": "PA",
        "carbon": {},
        "fips": "42",
        "name": "Pennsylvania",
        "population": {}
    },
    "PR": {
        "abbr": "PR",
        "carbon": {},
        "fips": "72",
        "name": "Puerto Rico",
        "population": {}
    },
    "RI": {
        "abbr": "RI",
        "carbon": {},
        "fips": "44",
        "name": "Rhode Island",
        "population": {}
    },
    "SC": {
        "abbr": "SC",
        "carbon": {},
        "fips": "45",
        "name": "South Carolina",
        "population": {}
    },
    "SD": {
        "abbr": "SD",
        "carbon": {},
        "fips": "46",
        "name": "South Dakota",
        "population": {}
    },
    "TN": {
        "abbr": "TN",
        "carbon": {},
        "fips": "47",
        "name": "Tennessee",
        "population": {}
    },
    "TX": {
        "abbr": "TX",
        "carbon": {},
        "fips": "48",
        "name": "Texas",
        "population": {}
    },
    "UT": {
        "abbr": "UT",
        "carbon": {},
        "fips": "49",
        "name": "Utah",
        "population": {}
    },
    "VA": {
        "abbr": "VA",
        "carbon": {},
        "fips": "51",
        "name": "Virginia",
        "population": {}
    },
    "VT": {
        "abbr": "VT",
        "carbon": {},
        "fips": "50",
        "name": "Vermont",
        "population": {}
    },
    "WA": {
        "abbr": "WA",
        "carbon": {},
        "fips": "53",
        "name": "Washington",
        "population": {}
    },
    "WI": {
        "abbr": "WI",
        "carbon": {},
        "fips": "55",
        "name": "Wisconsin",
        "population": {}
    },
    "WV": {
        "abbr": "WV",
        "carbon": {},
        "fips": "54",
        "name": "West Virginia",
        "population": {}
    },
    "WY": {
        "abbr": "WY",
        "carbon": {},
        "fips": "56",
        "name": "Wyoming",
        "population": {}
    }
}
//create d3 map
var map = new Datamap({ // INITIALIZES THE MAP OF THE USA ON TO THE PAGE
    element: document.getElementById('container'),
    scope: 'usa',
    responsive: true,
    done: function (datamap) {
        datamap.svg.selectAll('.datamaps-subunit').on('click', function (geography) {
            console.log(geography.id)
            console.log(states[geography.id])

        });
    }
});

function getPopulation(years){
    var popByYear = []
    years.forEach(function (y){
        var xhttp = new XMLHttpRequest()
        url = "https://api.census.gov/data/" + y + "/acs/acs5?get=NAME,B01003_001E&for=state"
        xhttp.onload = function() {
            //console.log(y)
            //console.log(JSON.parse(this.responseText))
            popByYear.push(JSON.parse(this.responseText))
            console.log(popByYear)
        }
        xhttp.open("GET", url)
        xhttp.send()
    })
    return popByYear
}

function getCarbon(states){
    var carbonByYear = {}
    var apiKey = "08e47fd145ef2607fce2a1442928469e";
    Object.keys(states).forEach(function (state){
        var xhttp = new XMLHttpRequest() 
        url = "https://api.eia.gov/series/?api_key=" + apiKey + "&series_id=EMISS.CO2-TOTV-TT-TO-" + state + ".A";
        xhttp.onload = function(){
            console.log(JSON.parse(this.responseText)) 
            carbonByYear[state] = JSON.parse(this.responseText)
        }
        xhttp.open("GET", url)
        xhttp.send() 
    })
    return carbonByYear 
}

getPopulation(years)
getCarbon(states)