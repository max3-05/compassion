var countries = [
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Afghanistan.svg",
        "code": "AFG",
        "name": "Afghanistan"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg",
        "code": "ALB",
        "name": "Albania"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg",
        "code": "DZA",
        "name": "Algeria"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Andorra.svg",
        "code": "AND",
        "name": "Andorra"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Angola.svg",
        "code": "AGO",
        "name": "Angola"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Antigua_and_Barbuda.svg",
        "code": "ATG",
        "name": "Antigua and Barbuda"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg",
        "code": "ARG",
        "name": "Argentina"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Armenia.svg",
        "code": "ARM",
        "name": "Armenia"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/en/b/b9/Flag_of_Australia.svg",
        "code": "AUS",
        "name": "Australia"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/6/67/Flag_of_Christmas_Island.svg",
        "code": "CXR",
        "name": "Christmas Island"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_the_Cocos_%28Keeling%29_Islands.svg",
        "code": "CCK",
        "name": "Cocos (Keeling) Islands"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Norfolk_Island.svg",
        "code": "NFK",
        "name": "Norfolk Island"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg",
        "code": "AUT",
        "name": "Austria"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg",
        "code": "AZE",
        "name": "Azerbaijan"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/9/93/Flag_of_the_Bahamas.svg",
        "name": "The Bahamas"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Bahrain.svg",
        "code": "BHR",
        "name": "Bahrain"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg",
        "code": "BGD",
        "name": "Bangladesh"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_Barbados.svg",
        "code": "BRB",
        "name": "Barbados"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/8/85/Flag_of_Belarus.svg",
        "code": "BLR",
        "name": "Belarus"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Belgium_%28civil%29.svg",
        "code": "BEL",
        "name": "Belgium"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/e/e7/Flag_of_Belize.svg",
        "code": "BLZ",
        "name": "Belize"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Benin.svg",
        "code": "BEN",
        "name": "Benin"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/9/91/Flag_of_Bhutan.svg",
        "code": "BTN",
        "name": "Bhutan"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Bolivia.svg",
        "name": "Bolivia"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bosnia_and_Herzegovina.svg",
        "code": "BIH",
        "name": "Bosnia and Herzegovina"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bosnia_and_Herzegovina.svg",
        "name": "Federation of Bosnia and Herzegovina"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/3/39/Flag_of_Republika_Srpska.svg",
        "name": "Republika Srpska"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_Botswana.svg",
        "code": "BWA",
        "name": "Botswana"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg",
        "code": "BRA",
        "name": "Brazil"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Brunei.svg",
        "name": "Brunei"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Bulgaria.svg",
        "code": "BGR",
        "name": "Bulgaria"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Burkina_Faso.svg",
        "code": "BFA",
        "name": "Burkina Faso"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/5/50/Flag_of_Burundi.svg",
        "code": "BDI",
        "name": "Burundi"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_Cambodia.svg",
        "code": "KHM",
        "name": "Cambodia"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Cameroon.svg",
        "code": "CMR",
        "name": "Cameroon"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/en/c/cf/Flag_of_Canada.svg",
        "code": "CAN",
        "name": "Canada"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Cape_Verde.svg",
        "name": "Cape Verde"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Central_African_Republic.svg",
        "code": "CAF",
        "name": "Central African Republic"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Flag_of_Chad.svg",
        "code": "TCD",
        "name": "Chad"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg",
        "code": "CHL",
        "name": "Chile"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
        "code": "CHN",
        "name": "China"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg",
        "code": "HKG",
        "name": "Hong Kong"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/6/63/Flag_of_Macau.svg",
        "name": "Macau"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg",
        "code": "COL",
        "name": "Colombia"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/9/94/Flag_of_the_Comoros.svg",
        "code": "COM",
        "name": "Comoros"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg",
        "name": "Democratic Republic of the Congo"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_the_Republic_of_the_Congo.svg",
        "name": "Republic of the Congo"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/f/f2/Flag_of_Costa_Rica.svg",
        "code": "CRI",
        "name": "Costa Rica"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg",
        "code": "HRV",
        "name": "Croatia"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Flag_of_Cuba.svg",
        "code": "CUB",
        "name": "Cuba"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Cyprus.svg",
        "code": "CYP",
        "name": "Cyprus"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg",
        "code": "CZE",
        "name": "Czech Republic"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg",
        "code": "DNK",
        "name": "Denmark"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/3/3c/Flag_of_the_Faroe_Islands.svg",
        "code": "FRO",
        "name": "Faroe Islands"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_Greenland.svg",
        "code": "GRL",
        "name": "Greenland"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_Djibouti.svg",
        "code": "DJI",
        "name": "Djibouti"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/c/c4/Flag_of_Dominica.svg",
        "code": "DMA",
        "name": "Dominica"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_the_Dominican_Republic.svg",
        "code": "DOM",
        "name": "Dominican Republic"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/2/26/Flag_of_East_Timor.svg",
        "name": "East Timor"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/e/e8/Flag_of_Ecuador.svg",
        "code": "ECU",
        "name": "Ecuador"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg",
        "code": "EGY",
        "name": "Egypt"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_El_Salvador.svg",
        "code": "SLV",
        "name": "El Salvador"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Equatorial_Guinea.svg",
        "code": "GNQ",
        "name": "Equatorial Guinea"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/2/29/Flag_of_Eritrea.svg",
        "code": "ERI",
        "name": "Eritrea"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Estonia.svg",
        "code": "EST",
        "name": "Estonia"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia.svg",
        "code": "ETH",
        "name": "Ethiopia"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Flag_of_the_Federated_States_of_Micronesia.svg",
        "name": "Federated States of Micronesia"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Fiji.svg",
        "code": "FJI",
        "name": "Fiji"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg",
        "code": "FIN",
        "name": "Finland"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/5/52/Flag_of_%C3%85land.svg",
        "code": "ALA",
        "name": "\u00c5land Islands"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
        "code": "FRA",
        "name": "France"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/d/db/Flag_of_French_Polynesia.svg",
        "code": "PYF",
        "name": "French Polynesia"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/8/88/Pro-Independence_Flag_of_New_Caledonia.svg",
        "code": "NCL",
        "name": "New Caledonia"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/d/df/Flag_of_Saint_Barthelemy_%28local%29.svg",
        "code": "BLM",
        "name": "Saint Barth\u00e9lemy"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_Saint-Pierre_and_Miquelon.svg",
        "code": "SPM",
        "name": "Saint Pierre and Miquelon"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d2/Flag_of_Wallis_and_Futuna.svg",
        "code": "WLF",
        "name": "Wallis and Futuna"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Flag_of_the_French_Southern_and_Antarctic_Lands.svg",
        "name": "French Southern and Antarctic Lands"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/0/04/Flag_of_Gabon.svg",
        "code": "GAB",
        "name": "Gabon"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_The_Gambia.svg",
        "name": "The Gambia"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Georgia.svg",
        "name": "Georgia (country)"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg",
        "code": "DEU",
        "name": "Germany"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Ghana.svg",
        "code": "GHA",
        "name": "Ghana"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg",
        "code": "GRC",
        "name": "Greece"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Grenada.svg",
        "code": "GRD",
        "name": "Grenada"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Flag_of_Guatemala.svg",
        "code": "GTM",
        "name": "Guatemala"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/e/ed/Flag_of_Guinea.svg",
        "code": "GIN",
        "name": "Guinea"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Guinea-Bissau.svg",
        "code": "GNB",
        "name": "Guinea-Bissau"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_Guyana.svg",
        "code": "GUY",
        "name": "Guyana"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Haiti.svg",
        "code": "HTI",
        "name": "Haiti"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/8/82/Flag_of_Honduras.svg",
        "code": "HND",
        "name": "Honduras"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg",
        "code": "HUN",
        "name": "Hungary"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Iceland.svg",
        "code": "ISL",
        "name": "Iceland"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
        "code": "IND",
        "name": "India"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg",
        "code": "IDN",
        "name": "Indonesia"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Iran.svg",
        "name": "Iran"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Iraq.svg",
        "code": "IRQ",
        "name": "Iraq"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg",
        "name": "Republic of Ireland"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Israel.svg",
        "code": "ISR",
        "name": "Israel"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg",
        "code": "ITA",
        "name": "Italy"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_C%C3%B4te_d%27Ivoire.svg",
        "name": "Ivory Coast"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Jamaica.svg",
        "code": "JAM",
        "name": "Jamaica"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg",
        "code": "JPN",
        "name": "Japan"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/c/c0/Flag_of_Jordan.svg",
        "code": "JOR",
        "name": "Jordan"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kazakhstan.svg",
        "code": "KAZ",
        "name": "Kazakhstan"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg",
        "code": "KEN",
        "name": "Kenya"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kiribati.svg",
        "code": "KIR",
        "name": "Kiribati"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/5/51/Flag_of_North_Korea.svg",
        "name": "North Korea"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg",
        "name": "South Korea"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/a/aa/Flag_of_Kuwait.svg",
        "code": "KWT",
        "name": "Kuwait"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/c/c7/Flag_of_Kyrgyzstan.svg",
        "code": "KGZ",
        "name": "Kyrgyzstan"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Laos.svg",
        "name": "Laos"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Latvia.svg",
        "code": "LVA",
        "name": "Latvia"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/5/59/Flag_of_Lebanon.svg",
        "code": "LBN",
        "name": "Lebanon"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/4/4a/Flag_of_Lesotho.svg",
        "code": "LSO",
        "name": "Lesotho"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b8/Flag_of_Liberia.svg",
        "code": "LBR",
        "name": "Liberia"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Libya.svg",
        "code": "LBY",
        "name": "Libya"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/8/87/Flag_of_Cyrenaica.svg",
        "name": "Cyrenaica"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/4/47/Flag_of_Liechtenstein.svg",
        "code": "LIE",
        "name": "Liechtenstein"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Lithuania.svg",
        "code": "LTU",
        "name": "Lithuania"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/d/da/Flag_of_Luxembourg.svg",
        "code": "LUX",
        "name": "Luxembourg"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/f/f8/Flag_of_Macedonia.svg",
        "name": "Republic of Macedonia"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Madagascar.svg",
        "code": "MDG",
        "name": "Madagascar"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d1/Flag_of_Malawi.svg",
        "code": "MWI",
        "name": "Malawi"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg",
        "code": "MYS",
        "name": "Malaysia"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Maldives.svg",
        "code": "MDV",
        "name": "Maldives"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Mali.svg",
        "code": "MLI",
        "name": "Mali"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Malta.svg",
        "code": "MLT",
        "name": "Malta"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_the_Marshall_Islands.svg",
        "code": "MHL",
        "name": "Marshall Islands"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/4/43/Flag_of_Mauritania.svg",
        "code": "MRT",
        "name": "Mauritania"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Mauritius.svg",
        "code": "MUS",
        "name": "Mauritius"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg",
        "code": "MEX",
        "name": "Mexico"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Moldova.svg",
        "name": "Moldova"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/e/ea/Flag_of_Monaco.svg",
        "code": "MCO",
        "name": "Monaco"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Mongolia.svg",
        "code": "MNG",
        "name": "Mongolia"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Montenegro.svg",
        "code": "MNE",
        "name": "Montenegro"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg",
        "code": "MAR",
        "name": "Morocco"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Mozambique.svg",
        "code": "MOZ",
        "name": "Mozambique"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/8/8c/Flag_of_Myanmar.svg",
        "code": "MMR",
        "name": "Myanmar"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Namibia.svg",
        "code": "NAM",
        "name": "Namibia"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/3/30/Flag_of_Nauru.svg",
        "code": "NRU",
        "name": "Nauru"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg",
        "code": "NPL",
        "name": "Nepal"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg",
        "name": "Kingdom of the Netherlands"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg",
        "code": "NLD",
        "name": "Netherlands"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Aruba.svg",
        "code": "ABW",
        "name": "Aruba"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b1/Flag_of_Cura%C3%A7ao.svg",
        "code": "CUW",
        "name": "Cura\u00e7ao"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Sint_Maarten.svg",
        "name": "Sint Maarten"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg",
        "code": "NZL",
        "name": "New Zealand"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Flag_of_Tokelau.svg",
        "code": "TKL",
        "name": "Tokelau"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/3/35/Flag_of_the_Cook_Islands.svg",
        "code": "COK",
        "name": "Cook Islands"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Niue.svg",
        "code": "NIU",
        "name": "Niue"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Nicaragua.svg",
        "code": "NIC",
        "name": "Nicaragua"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/f/f4/Flag_of_Niger.svg",
        "code": "NER",
        "name": "Niger"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg",
        "code": "NGA",
        "name": "Nigeria"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg",
        "code": "NOR",
        "name": "Norway"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Oman.svg",
        "code": "OMN",
        "name": "Oman"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg",
        "code": "PAK",
        "name": "Pakistan"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/4/4d/Flag_of_Azad_Kashmir.svg",
        "name": "Azad Kashmir"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Palau.svg",
        "code": "PLW",
        "name": "Palau"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Palestine.svg",
        "name": "State of Palestine"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/a/ab/Flag_of_Panama.svg",
        "code": "PAN",
        "name": "Panama"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Flag_of_Papua_New_Guinea.svg",
        "code": "PNG",
        "name": "Papua New Guinea"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Paraguay.svg",
        "code": "PRY",
        "name": "Paraguay"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/d/df/Flag_of_Peru_%28state%29.svg",
        "code": "PER",
        "name": "Peru"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_the_Philippines.svg",
        "code": "PHL",
        "name": "Philippines"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg",
        "code": "POL",
        "name": "Poland"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg",
        "code": "PRT",
        "name": "Portugal"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Qatar.svg",
        "code": "QAT",
        "name": "Qatar"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg",
        "code": "ROU",
        "name": "Romania"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg",
        "name": "Russia"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Rwanda.svg",
        "code": "RWA",
        "name": "Rwanda"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Saint_Kitts_and_Nevis.svg",
        "code": "KNA",
        "name": "Saint Kitts and Nevis"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Saint_Lucia.svg",
        "code": "LCA",
        "name": "Saint Lucia"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines.svg",
        "code": "VCT",
        "name": "Saint Vincent and the Grenadines"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Samoa.svg",
        "code": "WSM",
        "name": "Samoa"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b1/Flag_of_San_Marino.svg",
        "code": "SMR",
        "name": "San Marino"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Sao_Tome_and_Principe.svg",
        "name": "S\u00e3o Tom\u00e9 and Pr\u00edncipe"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg",
        "code": "SAU",
        "name": "Saudi Arabia"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg",
        "code": "SEN",
        "name": "Senegal"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/f/ff/Flag_of_Serbia.svg",
        "code": "SRB",
        "name": "Serbia"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Seychelles.svg",
        "code": "SYC",
        "name": "Seychelles"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Sierra_Leone.svg",
        "code": "SLE",
        "name": "Sierra Leone"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg",
        "code": "SGP",
        "name": "Singapore"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Slovakia.svg",
        "code": "SVK",
        "name": "Slovakia"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Slovenia.svg",
        "code": "SVN",
        "name": "Slovenia"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_the_Solomon_Islands.svg",
        "code": "SLB",
        "name": "Solomon Islands"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_Somalia.svg",
        "code": "SOM",
        "name": "Somalia"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg",
        "code": "ZAF",
        "name": "South Africa"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/7/7a/Flag_of_South_Sudan.svg",
        "code": "SSD",
        "name": "South Sudan"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg",
        "code": "ESP",
        "name": "Spain"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Sri_Lanka.svg",
        "code": "LKA",
        "name": "Sri Lanka"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Sudan.svg",
        "code": "SDN",
        "name": "Sudan"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/6/60/Flag_of_Suriname.svg",
        "code": "SUR",
        "name": "Suriname"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/1/1e/Flag_of_Swaziland.svg",
        "code": "SWZ",
        "name": "Swaziland"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg",
        "code": "SWE",
        "name": "Sweden"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg",
        "code": "CHE",
        "name": "Switzerland"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/5/53/Flag_of_Syria.svg",
        "name": "Syria"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_Syrian_Kurdistan.svg",
        "name": "Rojava"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Tajikistan.svg",
        "code": "TJK",
        "name": "Tajikistan"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tanzania.svg",
        "name": "Tanzania"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg",
        "code": "THA",
        "name": "Thailand"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/6/68/Flag_of_Togo.svg",
        "code": "TGO",
        "name": "Togo"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Tonga.svg",
        "code": "TON",
        "name": "Tonga"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Trinidad_and_Tobago.svg",
        "code": "TTO",
        "name": "Trinidad and Tobago"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Tunisia.svg",
        "code": "TUN",
        "name": "Tunisia"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg",
        "code": "TUR",
        "name": "Turkey"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Turkmenistan.svg",
        "code": "TKM",
        "name": "Turkmenistan"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tuvalu.svg",
        "code": "TUV",
        "name": "Tuvalu"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Flag_of_Uganda.svg",
        "code": "UGA",
        "name": "Uganda"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg",
        "code": "UKR",
        "name": "Ukraine"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg",
        "code": "ARE",
        "name": "United Arab Emirates"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
        "code": "GBR",
        "name": "United Kingdom"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
        "name": "Akrotiri and Dhekelia"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Anguilla.svg",
        "code": "AIA",
        "name": "Anguilla"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bermuda.svg",
        "code": "BMU",
        "name": "Bermuda"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/6/6e/Flag_of_the_British_Indian_Ocean_Territory.svg",
        "code": "IOT",
        "name": "British Indian Ocean Territory"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/4/42/Flag_of_the_British_Virgin_Islands.svg",
        "name": "British Virgin Islands"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_the_Cayman_Islands.svg",
        "code": "CYM",
        "name": "Cayman Islands"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_Falkland_Islands.svg",
        "name": "Falkland Islands"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/0/02/Flag_of_Gibraltar.svg",
        "code": "GIB",
        "name": "Gibraltar"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Montserrat.svg",
        "code": "MSR",
        "name": "Montserrat"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_the_Pitcairn_Islands.svg",
        "name": "Pitcairn Islands"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
        "code": "SHN",
        "name": "Saint Helena, Ascension and Tristan da Cunha"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/e/ed/Flag_of_South_Georgia_and_the_South_Sandwich_Islands.svg",
        "code": "SGS",
        "name": "South Georgia and the South Sandwich Islands"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_the_Turks_and_Caicos_Islands.svg",
        "code": "TCA",
        "name": "Turks and Caicos Islands"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_the_British_Antarctic_Territory.svg",
        "name": "British Antarctic Territory"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_Guernsey.svg",
        "code": "GGY",
        "name": "Guernsey"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Alderney.svg",
        "name": "Alderney"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b8/Flag_of_Herm.svg",
        "name": "Herm"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Sark.svg",
        "name": "Sark"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_the_Isle_of_Man.svg",
        "code": "IMN",
        "name": "Isle of Man"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/1/1c/Flag_of_Jersey.svg",
        "code": "JEY",
        "name": "Jersey"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
        "code": "USA",
        "name": "United States"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/8/87/Flag_of_American_Samoa.svg",
        "code": "ASM",
        "name": "American Samoa"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/0/07/Flag_of_Guam.svg",
        "code": "GUM",
        "name": "Guam"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/e/e0/Flag_of_the_Northern_Mariana_Islands.svg",
        "code": "MNP",
        "name": "Northern Mariana Islands"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/2/28/Flag_of_Puerto_Rico.svg",
        "code": "PRI",
        "name": "Puerto Rico"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/f/f8/Flag_of_the_United_States_Virgin_Islands.svg",
        "name": "United States Virgin Islands"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_the_Marshall_Islands.svg",
        "code": "MHL",
        "name": "Marshall Islands"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Flag_of_the_Federated_States_of_Micronesia.svg",
        "name": "Federated States of Micronesia"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Palau.svg",
        "code": "PLW",
        "name": "Palau"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Uruguay.svg",
        "code": "URY",
        "name": "Uruguay"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg",
        "code": "UZB",
        "name": "Uzbekistan"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Vanuatu.svg",
        "code": "VUT",
        "name": "Vanuatu"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_the_Vatican_City.svg",
        "name": "Vatican City"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Venezuela.svg",
        "name": "Venezuela"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg",
        "name": "Vietnam"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Yemen.svg",
        "code": "YEM",
        "name": "Yemen"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Zambia.svg",
        "code": "ZMB",
        "name": "Zambia"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Flag_of_Zimbabwe.svg",
        "code": "ZWE",
        "name": "Zimbabwe"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Abkhazia.svg",
        "name": "Abkhazia"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/3/35/Flag_of_the_Cook_Islands.svg",
        "code": "COK",
        "name": "Cook Islands"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/1/1f/Flag_of_Kosovo.svg",
        "name": "Kosovo"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/8/8d/Flag_of_Nagorno-Karabakh.svg",
        "name": "Nagorno-Karabakh Republic"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Niue.svg",
        "code": "NIU",
        "name": "Niue"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/1/1e/Flag_of_the_Turkish_Republic_of_Northern_Cyprus.svg",
        "name": "Northern Cyprus"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/2/26/Flag_of_the_Sahrawi_Arab_Democratic_Republic.svg",
        "name": "Sahrawi Arab Democratic Republic"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/4/4d/Flag_of_Somaliland.svg",
        "name": "Somaliland"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/1/12/Flag_of_South_Ossetia.svg",
        "name": "South Ossetia"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/7/72/Flag_of_the_Republic_of_China.svg",
        "name": "Taiwan"
    },
    {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Transnistria_%28state%29.svg",
        "name": "Transnistria"
    }
]