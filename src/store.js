import { act } from "react";

export const initialStore=()=>{
  return{
    message: null,
 character: [
     {
        uid: "1",
        name: "Luke Skywalker",
        birth_year: "19 BBY",
        eye_color: "Blue",
        gender: "Male",
        height: "172",
        mass: "77",
        skin_color: "Fair",
        hair_color: "Blond",
        url: "https://www.swapi.tech/api/people/1/"
      },
      {
        uid: "2",
        name: "C-3PO",
        birth_year: "112 BBY",
        eye_color: "Yellow",
        gender: "Male",
        height: "167",
        mass: "75",
        skin_color: "Gold",
        hair_color: "N/A",
        url: "https://www.swapi.tech/api/people/2/"
      },
      {
        uid: "3",
        name: "R2-D2",
        birth_year: "33 BBY",
        eye_color: "Red",
        gender: "N/A",
        height: "96",
        mass: "32",
        skin_color: "White, Blue",
        hair_color: "N/A",
        url: "https://www.swapi.tech/api/people/3/"
      },
      {
        uid: "4",
        name: "Darth Vader",
        birth_year: "41.9 BBY",
        eye_color: "Yellow",
        gender: "Male",
        height: "202",
        mass: "136",
        skin_color: "White",
        hair_color: "None",
        url: "https://www.swapi.tech/api/people/4/"
      },
      {
        uid: "5",
        name: "Leia Organa",
        birth_year: "19 BBY",
        eye_color: "Brown",
        gender: "Female",
        height: "150",
        mass: "49",
        skin_color: "Light",
        hair_color: "Brown",
        url: "https://www.swapi.tech/api/people/5/"
      },
      {
        uid: "6",
        name: "Owen Lars",
        birth_year: "52 BBY",
        eye_color: "Blue",
        gender: "Male",
        height: "178",
        mass: "120",
        skin_color: "Fair",
        hair_color: "Brown, Grey",
        url: "https://www.swapi.tech/api/people/6/"
      },
      {
        uid: "7",
        name: "Beru Whitesun Lars",
        birth_year: "47 BBY",
        eye_color: "Blue",
        gender: "Female",
        height: "165",
        mass: "75",
        skin_color: "Light",
        hair_color: "Brown",
        url: "https://www.swapi.tech/api/people/7/"
      },
      {
        uid: "8",
        name: "R5-D4",
        birth_year: "unknown",
        eye_color: "Red",
        gender: "N/A",
        height: "97",
        mass: "32",
        skin_color: "White, Red",
        hair_color: "N/A",
        url: "https://www.swapi.tech/api/people/8/"
      },
      {
        uid: "9",
        name: "Biggs Darklighter",
        birth_year: "24 BBY",
        eye_color: "Brown",
        gender: "Male",
        height: "183",
        mass: "84",
        skin_color: "Light",
        hair_color: "Black",
        url: "https://www.swapi.tech/api/people/9/"
      },
      {
        uid: "10",
        name: "Obi-Wan Kenobi",
        birth_year: "57 BBY",
        eye_color: "Blue",
        gender: "Male",
        height: "182",
        mass: "77",
        skin_color: "Fair",
        hair_color: "Auburn, White",
        url: "https://www.swapi.tech/api/people/10/"
      }
    ],
    planets: [
      {
        uid: "1",
        name: "Tatooine",
        rotation_period: "23",
        orbital_period: "304",
        diameter: "10465",
        climate: "arid",
        gravity: "1 standard",
        terrain: "desert",
        surface_water: "1",
        population: "200000",
        url: "https://www.swapi.tech/api/planets/1"
      },
      {
        uid: "2",
        name: "Alderaan",
        rotation_period: "24",
        orbital_period: "364",
        diameter: "12500",
        climate: "temperate",
        gravity: "1 standard",
        terrain: "grasslands, mountains",
        surface_water: "40",
        population: "2000000000",
        url: "https://www.swapi.tech/api/planets/2"
      },
      {
        uid: "3",
        name: "Yavin IV",
        rotation_period: "24",
        orbital_period: "4818",
        diameter: "10200",
        climate: "temperate, tropical",
        gravity: "1 standard",
        terrain: "jungle, rainforests",
        surface_water: "8",
        population: "1000",
        url: "https://www.swapi.tech/api/planets/3"
      },
      {
        uid: "4",
        name: "Hoth",
        rotation_period: "23",
        orbital_period: "549",
        diameter: "7200",
        climate: "frozen",
        gravity: "1.1 standard",
        terrain: "tundra, ice caves, mountain ranges",
        surface_water: "100",
        population: "unknown",
        url: "https://www.swapi.tech/api/planets/4"
      },
      {
        uid: "5",
        name: "Dagobah",
        rotation_period: "23",
        orbital_period: "341",
        diameter: "8900",
        climate: "murky",
        gravity: "N/A",
        terrain: "swamp, jungles",
        surface_water: "8",
        population: "unknown",
        url: "https://www.swapi.tech/api/planets/5"
      },
      {
        uid: "6",
        name: "Bespin",
        rotation_period: "12",
        orbital_period: "5110",
        diameter: "118000",
        climate: "temperate",
        gravity: "1.5 (surface)",
        terrain: "gas giant",
        surface_water: "0",
        population: "6000000",
        url: "https://www.swapi.tech/api/planets/6"
      },
      {
        uid: "7",
        name: "Endor",
        rotation_period: "18",
        orbital_period: "402",
        diameter: "4900",
        climate: "temperate",
        gravity: "0.85 standard",
        terrain: "forests, mountains, lakes",
        surface_water: "8",
        population: "30000000",
        url: "https://www.swapi.tech/api/planets/7"
      },
      {
        uid: "8",
        name: "Naboo",
        rotation_period: "26",
        orbital_period: "312",
        diameter: "12120",
        climate: "temperate",
        gravity: "1 standard",
        terrain: "grassy hills, swamps, forests, mountains",
        surface_water: "12",
        population: "4500000000",
        url: "https://www.swapi.tech/api/planets/8"
      },
      {
        uid: "9",
        name: "Coruscant",
        rotation_period: "24",
        orbital_period: "368",
        diameter: "12240",
        climate: "temperate",
        gravity: "1 standard",
        terrain: "cityscape, mountains",
        surface_water: "unknown",
        population: "1000000000000",
        url: "https://www.swapi.tech/api/planets/9"
      },
      {
        uid: "10",
        name: "Kamino",
        rotation_period: "27",
        orbital_period: "463",
        diameter: "19720",
        climate: "temperate",
        gravity: "1 standard",
        terrain: "ocean",
        surface_water: "100",
        population: "1000000000",
        url: "https://www.swapi.tech/api/planets/10"
      }
    ],
    vehicles: [
   {
        uid: "4",
        name: "Sand Crawler",
        model: "Digger Crawler",
        manufacturer: "Corellia Mining Corporation",
        cost_in_credits: "150000",
        length: "36.8",
        max_atmosphering_speed: "30",
        crew: "46",
        passengers: "30",
        cargo_capacity: "50000",
        consumables: "2 months",
        vehicle_class: "wheeled",
        url: "https://www.swapi.tech/api/vehicles/4"
      },
      {
        uid: "7",
        name: "X-34 landspeeder",
        model: "X-34",
        manufacturer: "SoroSuub Corporation",
        cost_in_credits: "10550",
        length: "3.4",
        max_atmosphering_speed: "250",
        crew: "1",
        passengers: "1",
        cargo_capacity: "5",
        consumables: "unknown",
        vehicle_class: "repulsorcraft",
        url: "https://www.swapi.tech/api/vehicles/7"
      },
      {
        uid: "6",
        name: "T-16 skyhopper",
        model: "T-16 skyhopper",
        manufacturer: "Incom Corporation",
        cost_in_credits: "14500",
        length: "10.4",
        max_atmosphering_speed: "1200",
        crew: "1",
        passengers: "1",
        cargo_capacity: "50",
        consumables: "unknown",
        vehicle_class: "repulsorcraft",
        url: "https://www.swapi.tech/api/vehicles/6"
      },
      {
        uid: "8",
        name: "TIE/LN starfighter",
        model: "Twin Ion Engine/Ln Starfighter",
        manufacturer: "Sienar Fleet Systems",
        cost_in_credits: "unknown",
        length: "6.4",
        max_atmosphering_speed: "1200",
        crew: "1",
        passengers: "0",
        cargo_capacity: "65",
        consumables: "2 days",
        vehicle_class: "starfighter",
        url: "https://www.swapi.tech/api/vehicles/8"
      },
      {
        uid: "14",
        name: "Snowspeeder",
        model: "t-47 airspeeder",
        manufacturer: "Incom corporation",
        cost_in_credits: "unknown",
        length: "4.5",
        max_atmosphering_speed: "650",
        crew: "2",
        passengers: "0",
        cargo_capacity: "10",
        consumables: "none",
        vehicle_class: "airspeeder",
        url: "https://www.swapi.tech/api/vehicles/14"
      },
      {
        uid: "18",
        name: "AT-AT",
        model: "All Terrain Armored Transport",
        manufacturer: "Kuat Drive Yards, Imperial Department of Military Research",
        cost_in_credits: "unknown",
        length: "20",
        max_atmosphering_speed: "60",
        crew: "5",
        passengers: "40",
        cargo_capacity: "1000",
        consumables: "unknown",
        vehicle_class: "walker",
        url: "https://www.swapi.tech/api/vehicles/18"
      },
      {
        uid: "16",
        name: "TIE bomber",
        model: "TIE/IN bomber",
        manufacturer: "Sienar Fleet Systems",
        cost_in_credits: "unknown",
        length: "7.8",
        max_atmosphering_speed: "850",
        crew: "1",
        passengers: "0",
        cargo_capacity: "unknown",
        consumables: "2 days",
        vehicle_class: "space/planetary bomber",
        url: "https://www.swapi.tech/api/vehicles/16"
      },
      {
        uid: "19",
        name: "AT-ST",
        model: "All Terrain Scout Transport",
        manufacturer: "Kuat Drive Yards, Imperial Department of Military Research",
        cost_in_credits: "unknown",
        length: "2",
        max_atmosphering_speed: "90",
        crew: "2",
        passengers: "0",
        cargo_capacity: "200",
        consumables: "none",
        vehicle_class: "walker",
        url: "https://www.swapi.tech/api/vehicles/19"
      },
      {
        uid: "20",
        name: "Storm IV Twin-Pod cloud car",
        model: "Storm IV Twin-Pod",
        manufacturer: "Bespin Motors",
        cost_in_credits: "75000",
        length: "7",
        max_atmosphering_speed: "1500",
        crew: "2",
        passengers: "0",
        cargo_capacity: "10",
        consumables: "1 day",
        vehicle_class: "repulsorcraft",
        url: "https://www.swapi.tech/api/vehicles/20"
      },
      {
        uid: "24",
        name: "Sail barge",
        model: "C-9979 landing craft",
        manufacturer: "Ubrikkian Industries",
        cost_in_credits: "285000",
        length: "30",
        max_atmosphering_speed: "100",
        crew: "26",
        passengers: "500",
        cargo_capacity: "20000",
        consumables: "Live food tanks",
        vehicle_class: "sail barge",
        url: "https://www.swapi.tech/api/vehicles/24"}
    ],
favorites: [],
  };
};

export default function storeReducer(store, action = {}) {
 
    switch(action.type){
    
      case "obtenercharacter":
      return {
        ...store,
        character: action.payload
      };
      case "obtenerplanets":
      return {
        ...store,
        planets: action.payload
      };
      case "obtenervehicles":
      return {
        ...store,
        vehicles: action.payload
      };
      case "add_favorite":
    return {
        ...store,
        favorites: [...store.favorites, action.payload]
    };

case "remove_favorite":
    return {
        ...store,
        favorites: store.favorites.filter(fav => fav.uid !== action.payload.uid)
    };
    default:
      throw Error('Unknown action.');

    }
}