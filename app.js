const countries = [
    {
        flag:"https://cdn.britannica.com/12/12-004-A40EEB6F/Flag-Ethiopia.jpg",
        country:"Ethiopia",
        capital:"Addis-Ababa",
        population:"114.9 million",
        region:"Eastern Africa"
    },  
    
    {
        flag:"https://media.istockphoto.com/photos/flag-of-tanzania-picture-id639704862?k=20&m=639704862&s=170667a&w=0&h=5MnapZvrRW-D0nICUil5fYsGQFxR6DR_mpQ5sgb1Hgk=",
        country:"Tanzania",
        capital:"Dodoma",
        population:"59.7 million",
        region:"Eastern Africa"
    },

    {
        flag:"https://media.istockphoto.com/photos/kenya-flag-picture-id182810324?k=20&m=182810324&s=612x612&w=0&h=SsEj-arQuZ1KqxSjy0h7DqpJj5_PtpVEVPpiwiqqs38=",
        country:"Kenya",
        capital:"Nairobi",
        population:" 53.7million",
        region:"Eastern Africa"
    },
    
    {
        flag:"data:image/png;base64,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",
        country:"Uganda",
        capital:"Kampala",
        population:"45.7 million",
        region:"Eastern Africa"
    },
    
    {
        flag:"https://flagpedia.net/data/flags/w1600/mz.png",
        country:"Mozambique",
        capital:"Maputo",
        population:"31.2 million",
        region:"Eastern Africa"
    },
    

    
    {
        flag:"https://media.istockphoto.com/videos/malawi-flag-video-id1149864806?s=640x640",
        country:"Malawi",
        capital:"Lilongwe",
        population:"19.1 million",
        region:"Eastern Africa"
    },
    
    {
        flag:"https://media.istockphoto.com/vectors/zambia-flag-vector-id1091648302?k=20&m=1091648302&s=170667a&w=0&h=TvxkWEggAAB7X3S5iYKUwuViqnsA5zIOLbRwWoEUJqo=",
        country:"Zambia",
        capital:"Lusaka",
        population:"18.3 million",
        region:"Eastern Africa"
    },
    
    {
        flag:"https://media.istockphoto.com/photos/somalia-flag-picture-id464646938?k=20&m=464646938&s=170667a&w=0&h=kLKnKUHC9G3delwMdAWz2M56mdeblcT_nio-RIxCDsA=",
        country:"Somalia",
        capital:"Mogadishu",
        population:"15.8 million",
        region:"Eastern Africa"
    },

    {
        flag:"https://img.freepik.com/free-vector/silk-waving-flag-zimbabwe-silk-satin-texture-background_565585-3590.jpg?w=2000",
        country:"Zimbabwe",
        capital:"Harare",
        population:"14.8 million",
        region:"Eastern Africa"
    },

    {
        flag:"https://image.shutterstock.com/image-illustration/rwanda-flag-on-background-texture-260nw-1713352585.jpg",
        country:"Rwanda",
        capital:"Kigali",
        population:"12.9 million",
        region:"Eastern Africa"
    },

    {
        flag :"https://cdn1.vectorstock.com/i/1000x1000/51/00/burundi-flag-vector-4805100.jpg",
        country:"Burundi",
        capital:"Bujumbura",
        population:"11.8 million",
        region:"Eastern Africa"
    },

    {
        flag:"https://img.freepik.com/free-vector/flag-south-sudan-background-template_19426-614.jpg",
        country:"South Sudan",
        capital:"Juba",
        population:"11.1 million",
        region:"Eastern Africa"
    },

    {
        flag:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Flag_of_Eritrea.svg/800px-Flag_of_Eritrea.svg.png",
        country:"Eritrea",
        capital:"Asmara",
        population:"3.5 million",
        region:"Eastern Africa"
    },

    {
        flag:"https://i.pinimg.com/originals/54/f8/33/54f8338f3de7b1f4aec72f759ed2bf47.jpg",
        country:"Madagascar",
        capital:"Antananarivo",
        population:"27.6 million",
        region:"Eastern Africa"
    },

    {
        flag:"https://img.freepik.com/free-photo/silk-flag-djibouti-djibouti-flag-silk-fabric_158023-1127.jpg",
        country:"Djibouti",
        capital:"Djibouti (City)",
        population:" 988 thousand",
        region:"Eastern Africa"
    },

    {
        flag:"https://www.flagsonline.it/uploads/2016-9-2/1200-0/comoros.jpg",
        country:"Comoros",
        capital:"Moroni",
        population:" 869.6 thousand",
        region:"Eastern Africa"
    },

    {
        flag:"https://flagsworld.org/img/cflags/seychelles-flag.png",
        country:"Seychelles",
        capital:"Victoria",
        population:" 98.3 thousand",
        region:"Eastern Africa"
    },

    {
        flag:"https://media.istockphoto.com/photos/mauritius-flag-picture-id178507324?k=20&m=178507324&s=612x612&w=0&h=y80Ck4UcDowVxDZz1Fai3PH-GgBtphtjJeIKhSKO9fQ=",
        country:"Mauritius",
        capital:"Port Louis",
        population:"1.2 million",
        region:"Eastern Africa"
    },

// West African Countries
    {
        flag:"https://image.shutterstock.com/image-illustration/nigeria-national-flag-waving-design-260nw-1448118155.jpg",
        country:"Nigeria",
        capital:"Abuja",
        population:"206.1 million",
        region:"Western Africa"
    },

    {
        flag:"https://media.istockphoto.com/photos/image-of-the-flag-of-ghana-series-africa-picture-id1161593798?k=20&m=1161593798&s=170667a&w=0&h=B21xB9DZWlMP_fqI8cOalAWkgx1bU-jS5LtCfdWjyWQ=",
        country:"Ghana",
        capital:"Accra",
        population:"31 million",
        region:"Western Africa"
    },

    {
        flag:"https://media.istockphoto.com/photos/image-of-the-flag-of-cote-divoire-series-africa-picture-id1161593910?k=20&m=1161593910&s=612x612&w=0&h=9fMk-CqYzFIMhnh0fat2G74Qch53k5xnd1CWyZTNM0o=",
        country:"Cote d'Ivoire",
        capital:"Yamoussoukro",
        population:" 26.3 million",
        region:"Western Africa"
    },

    {
        flag:"https://www.nationsonline.org/flags/niger_flag.gif",
        country:"Niger",
        capital:"Niamey",
        population:"24.2 million",
        region:"Western Africa"
    },

    {
        flag:"https://www.nationsonline.org/flags/burkina_faso_flag.gif",
        country:"Burkina Faso",
        capital:"Ouagadougou",
        population:"20.9 million",
        region:"Western Africa"
    },

    {
        flag:"https://www.nationsonline.org/flags/mali_flag.gif",
        country:"Mali",
        capital:"Bamako",
        population:"20.2 million",
        region:"Western Africa"
    },

    {
        flag:"https://www.nationsonline.org/flags/senegal_flag.gif",
        country:"Senegal",
        capital:"Dakar",
        population:"16.7 million",
        region:"Western Africa"
    },

    {
        flag:"https://www.nationsonline.org/flags/guinea_flag.gif",
        country:"Guinea",
        capital:"Conakry",
        population:"13.1 million",
        region:"Western Africa"
    },

    {
        flag:"https://www.nationsonline.org/flags/benin_flag.gif",
        country:"Benin",
        capital:"Port Novo",
        population:"12.1 million",
        region:"Western Africa"
    },

    {
        flag:"https://www.nationsonline.org/flags/togo_flag.gif",
        country:"Togo",
        capital:"Lome",
        population:"8.2 million",
        region:"Western Africa"
    },

    {
        flag:"https://www.nationsonline.org/flags/sierra_leone_flag.gif",
        country:"Sierra Leone",
        capital:"Freetown",
        population:"7.9 million",
        region:"Western Africa"
    },

    {
        flag:"https://www.nationsonline.org/flags/liberia_flag.gif",
        country:"Liberia",
        capital:"Monrovia",
        population:"5.0 million",
        region:"Western Africa"
    },

    {
        flag:"https://www.nationsonline.org/flags/mauritania_flag.gif",
        country:"Mauritania",
        capital:"Nouakcholl",
        population:"4.6 million",
        region:"Western Africa"
    },

    {
        flag:"https://www.nationsonline.org/flags/gabon_flag.gif",
        country:"Gambia",
        capital:"Banjul",
        population:"2.4 million",
        region:"Western Africa"
    },

    {
        flag:"https://www.nationsonline.org/flags/guinea-bissau_flag.gif",
        country:"Guinea-Bissau",
        capital:"Bissau",
        population:"1.9 million",
        region:"Western Africa"
    },

    {
        flag:"https://www.nationsonline.org/flags/cape_verde_flag.gif",
        country:"Cape-Verde",
        capital:"Praia",
        population:"555.9 thousand",
        region:"Western Africa"
    },

    // Central Africa
    {
        flag:"https://www.nationsonline.org/flags/congo_drc_flag.gif",
        country:"DR Congo",
        capital:"Kinshasa",
        population:"89.5 million",
        region:"central Africa"
    },

    {
        flag:"https://www.nationsonline.org/flags/angola_flag.gif",
        country:"Angola",
        capital:"Luanda",
        population:" 32.8 million",
        region:"central Africa"
    },

    {
        flag:"https://www.nationsonline.org/flags/cameroon_flag.gif",
        country:"Cameroon",
        capital:"Yaounde",
        population:"26.5 million",
        region:"central Africa"
    },

    {
        flag:"https://www.nationsonline.org/flags/chad_flag.gif",
        country:"Chad",
        capital:"N'Djamena",
        population:"16.4 million",
        region:"central Africa"
    },
    {
        flag:"https://www.nationsonline.org/flags/central_african_republic.gif",
        country:"Central African Republic",
        capital:"Bangui",
        population:"4.8 million",
        region:"central Africa"
    },

    {
        flag:"https://www.nationsonline.org/flags/gabon_flag.gif",
        country:"Gabon",
        capital:"Libreville",
        population:"2.2 million",
        region:"central Africa"
    },

    {
        flag:"https://www.nationsonline.org/flags/equatorial_guinea_flag.gif",
        country:"Equatorial Guinea",
        capital:"Malabo",
        population:"1.4 million",
        region:"central Africa"
    },

    {
        flag:"https://www.nationsonline.org/flags/sao_tome_and_principe_flag.gif",
        country:"Sao Tome & Principe",
        capital:"Sao Tome",
        population:"219.1 thousand",
        region:"central Africa"
    },

    {
        flag:"https://www.nationsonline.org/flags/congo_republic_of_the_flag.gif",
        country:"Congo",
        capital:"Brazzaville",
        population:"5.5 million",
        region:"central Africa"
    },

    // North African Countries
    {
        flag:"https://www.nationsonline.org/flags/egypt_flag.gif",
        country:"Egypt",
        capital:"Cairo",
        population:"102.3 million",
        region:"Northern Africa"
    },

    {
        flag:"https://www.nationsonline.org/flags/algeria_flag.gif",
        country:"Algeria",
        capital:"Algeris",
        population:"43.8 million",
        region:"Northern Africa"
    },

    {
        flag:"https://www.nationsonline.org/flags/sudan_flag.gif",
        country:"Sudan",
        capital:"Khartoum",
        population:"43.8 million",
        region:"Eastern Africa"
    },

    {
        flag:"https://www.nationsonline.org/flags/morocco_flag.gif",
        country:"Morocco",
        capital:"Rabat",
        population:"36.9 million",
        region:"Northern Africa"
    },

    {
        flag:"https://www.nationsonline.org/flags/tunisia_flag.gif",
        country:"Tunisia",
        capital:"Tunis",
        population:"11.8 million",
        region:"Northern Africa"
    },

    {
        flag:"https://www.nationsonline.org/flags/libya_flag_new.gif",
        country:"Libya",
        capital:"Tripoli",
        population:" 6.8 million",
        region:"Northern Africa"
    },

    // South Africa

    {
        flag:"https://www.nationsonline.org/flags/south_africa_flag.gif",
        country:"South Africa",
        capital:"Pretoria",
        population:"59.3 million",
        region:"Southern Africa"
    },

    {
        flag:"https://www.nationsonline.org/flags/namibia_flag.gif",
        country:"Namibia",
        capital:"Windhoek",
        population:"2.5 million",
        region:"Southern Africa"
    },

    {
        flag:"https://www.nationsonline.org/flags/botswana_flag.gif",
        country:"Botswana",
        capital:"Gaborone",
        population:"2.3 million",
        region:"Southern Africa"
    },

    {
        flag:"https://www.nationsonline.org/flags/lesotho_flag.gif",
        country:"Lesotho",
        capital:"Maseru",
        population:"2.1 million",
        region:"Southern Africa"
    },

    {
        flag:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Flag_of_Eswatini.svg/255px-Flag_of_Eswatini.svg.png",
        country:"Eswatini",
        capital:"Mbabane",
        population:"1.1 million",
        region:"Southern Africa"
    }
];

const images = document.querySelector('.images')
const search = document.querySelector('input');

countries.forEach(country => {

    // CREATING CONTAINER DIV
    const img = document.createElement('div');
    img.classList.add('img');

    // CREATING IMAGE TAG
    const imag = document.createElement('img');
    imag.src = country.flag;
    img.name = country.country;

    // CREATING NATION P TAG
    const nation = document.createElement('p');
    nation.setAttribute('id', 'nation');
    nation.innerHTML += ` ${country.country}`;

    // CREATING NATION P TAG
    const capital = document.createElement('p');
    capital.setAttribute('id', 'capital');
    capital.innerHTML += `Capital: ${country.capital}`;

    // CREATING NATION P TAG
    const population = document.createElement('p');
    population.setAttribute('id', 'population');
    population.innerHTML = `Population: ${country.population}`;


    // CREATING NATION P TAG
    const region = document.createElement('p');
    region.setAttribute('id', 'region');
    region.innerHTML = `Region: ${country.region}`;

    img.appendChild(imag);
    img.appendChild(nation);
    img.appendChild(capital);
    img.appendChild(population);
    img.appendChild(region);

    images.appendChild(img);
});

const wrapperDiv = document.querySelectorAll('.img');

// Search Bar
const filterCountries = (searchValue) => {

    Array.from(wrapperDiv)
    .filter((eachCountry) => !eachCountry.textContent.includes(searchValue))
    .forEach((eachCountry) => eachCountry.classList.add('filter'));

    Array.from(wrapperDiv)
    .filter((eachCountry) => eachCountry.textContent.includes(searchValue))
    .forEach((eachCountry) => {
        eachCountry.classList.remove('filter');
        eachCountry.classList.add('unfilter');
        eachCountry.classList.remove('unfilter');
    });
};


search.addEventListener('keyup', () => {
    const searchValue = search.value.trim();

    filterCountries(searchValue);
});

