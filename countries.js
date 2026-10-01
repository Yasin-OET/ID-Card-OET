// ISO 3166-1 alpha-3
window.COUNTRIES = `AFG Afghanistan
ALA Åland Islands
ALB Albania
DZA Algeria
ASM American Samoa
AND Andorra
AGO Angola
AIA Anguilla
ATA Antarctica
ATG Antigua and Barbuda
ARG Argentina
ARM Armenia
ABW Aruba
AUS Australia
AUT Austria
AZE Azerbaijan
BHS Bahamas
BHR Bahrain
BGD Bangladesh
BRB Barbados
BLR Belarus
BEL Belgium
BLZ Belize
BEN Benin
BMU Bermuda
BTN Bhutan
BOL Bolivia
BES Bonaire, Sint Eustatius and Saba
BIH Bosnia and Herzegovina
BWA Botswana
BVT Bouvet Island
BRA Brazil
IOT British Indian Ocean Territory
BRN Brunei Darussalam
BGR Bulgaria
BFA Burkina Faso
BDI Burundi
CPV Cabo Verde
KHM Cambodia
CMR Cameroon
CAN Canada
CYM Cayman Islands
CAF Central African Republic
TCD Chad
CHL Chile
CHN China
CXR Christmas Island
CCK Cocos (Keeling) Islands
COL Colombia
COM Comoros
COG Congo
COD Congo, Democratic Republic of the
COK Cook Islands
CRI Costa Rica
CIV Côte d'Ivoire
HRV Croatia
CUB Cuba
CUW Curaçao
CYP Cyprus
CZE Czechia
DNK Denmark
DJI Djibouti
DMA Dominica
DOM Dominican Republic
ECU Ecuador
EGY Egypt
SLV El Salvador
GNQ Equatorial Guinea
ERI Eritrea
EST Estonia
SWZ Eswatini
ETH Ethiopia
FLK Falkland Islands
FRO Faroe Islands
FJI Fiji
FIN Finland
FRA France
GUF French Guiana
PYF French Polynesia
ATF French Southern Territories
GAB Gabon
GMB Gambia
GEO Georgia
DEU Germany
GHA Ghana
GIB Gibraltar
GRC Greece
GRL Greenland
GRD Grenada
GLP Guadeloupe
GUM Guam
GTM Guatemala
GGY Guernsey
GIN Guinea
GNB Guinea-Bissau
GUY Guyana
HTI Haiti
HMD Heard Island and McDonald Islands
VAT Holy See
HND Honduras
HKG Hong Kong
HUN Hungary
ISL Iceland
IND India
IDN Indonesia
IRN Iran
IRQ Iraq
IRL Ireland
IMN Isle of Man
ISR Israel
ITA Italy
JAM Jamaica
JPN Japan
JEY Jersey
JOR Jordan
KAZ Kazakhstan
KEN Kenya
KIR Kiribati
PRK Korea, Democratic People's Republic of
KOR Korea, Republic of
KWT Kuwait
KGZ Kyrgyzstan
LAO Lao People's Democratic Republic
LVA Latvia
LBN Lebanon
LSO Lesotho
LBR Liberia
LBY Libya
LIE Liechtenstein
LTU Lithuania
LUX Luxembourg
MAC Macao
MDG Madagascar
MWI Malawi
MYS Malaysia
MDV Maldives
MLI Mali
MLT Malta
MHL Marshall Islands
MTQ Martinique
MRT Mauritania
MUS Mauritius
MYT Mayotte
MEX Mexico
FSM Micronesia
MDA Moldova
MCO Monaco
MNG Mongolia
MNE Montenegro
MSR Montserrat
MAR Morocco
MOZ Mozambique
MMR Myanmar
NAM Namibia
NRU Nauru
NPL Nepal
NLD Netherlands
NCL New Caledonia
NZL New Zealand
NIC Nicaragua
NER Niger
NGA Nigeria
NIU Niue
NFK Norfolk Island
MKD North Macedonia
MNP Northern Mariana Islands
NOR Norway
OMN Oman
PAK Pakistan
PLW Palau
PSE Palestine, State of
PAN Panama
PNG Papua New Guinea
PRY Paraguay
PER Peru
PHL Philippines
PCN Pitcairn
POL Poland
PRT Portugal
PRI Puerto Rico
QAT Qatar
REU Réunion
ROU Romania
RUS Russian Federation
RWA Rwanda
BLM Saint Barthélemy
SHN Saint Helena, Ascension and Tristan da Cunha
KNA Saint Kitts and Nevis
LCA Saint Lucia
MAF Saint Martin (French part)
SPM Saint Pierre and Miquelon
VCT Saint Vincent and the Grenadines
WSM Samoa
SMR San Marino
STP Sao Tome and Principe
SAU Saudi Arabia
SEN Senegal
SRB Serbia
SYC Seychelles
SLE Sierra Leone
SGP Singapore
SXM Sint Maarten (Dutch part)
SVK Slovakia
SVN Slovenia
SLB Solomon Islands
SOM Somalia
ZAF South Africa
SGS South Georgia and the South Sandwich Islands
SSD South Sudan
ESP Spain
LKA Sri Lanka
SDN Sudan
SUR Suriname
SJM Svalbard and Jan Mayen
SWE Sweden
CHE Switzerland
SYR Syrian Arab Republic
TWN Taiwan
TJK Tajikistan
TZA Tanzania
THA Thailand
TLS Timor-Leste
TGO Togo
TKL Tokelau
TON Tonga
TTO Trinidad and Tobago
TUN Tunisia
TUR Türkiye
TKM Turkmenistan
TCA Turks and Caicos Islands
TUV Tuvalu
UGA Uganda
UKR Ukraine
ARE United Arab Emirates
GBR United Kingdom
USA United States of America
UMI United States Minor Outlying Islands
URY Uruguay
UZB Uzbekistan
VUT Vanuatu
VEN Venezuela
VNM Viet Nam
VGB Virgin Islands (British)
VIR Virgin Islands (U.S.)
WLF Wallis and Futuna
ESH Western Sahara
YEM Yemen
ZMB Zambia
ZWE Zimbabwe`.split('\n').map(l => ({ code: l.slice(0, 3), name: l.slice(4) }));
// ISO 3166-1 alpha-2 + continent code (AF AN AS EU NA OC SA)
{ const m = {}; `AFG AF AS|ALA AX EU|ALB AL EU|DZA DZ AF|ASM AS OC|AND AD EU|AGO AO AF|AIA AI NA|ATA AQ AN|ATG AG NA|ARG AR SA|ARM AM AS|ABW AW NA|AUS AU OC|AUT AT EU|AZE AZ AS|BHS BS NA|BHR BH AS|BGD BD AS|BRB BB NA|BLR BY EU|BEL BE EU|BLZ BZ NA|BEN BJ AF|BMU BM NA|BTN BT AS|BOL BO SA|BES BQ NA|BIH BA EU|BWA BW AF|BVT BV AN|BRA BR SA|IOT IO AS|BRN BN AS|BGR BG EU|BFA BF AF|BDI BI AF|CPV CV AF|KHM KH AS|CMR CM AF|CAN CA NA|CYM KY NA|CAF CF AF|TCD TD AF|CHL CL SA|CHN CN AS|CXR CX AS|CCK CC AS|COL CO SA|COM KM AF|COG CG AF|COD CD AF|COK CK OC|CRI CR NA|CIV CI AF|HRV HR EU|CUB CU NA|CUW CW NA|CYP CY AS|CZE CZ EU|DNK DK EU|DJI DJ AF|DMA DM NA|DOM DO NA|ECU EC SA|EGY EG AF|SLV SV NA|GNQ GQ AF|ERI ER AF|EST EE EU|SWZ SZ AF|ETH ET AF|FLK FK SA|FRO FO EU|FJI FJ OC|FIN FI EU|FRA FR EU|GUF GF SA|PYF PF OC|ATF TF AN|GAB GA AF|GMB GM AF|GEO GE AS|DEU DE EU|GHA GH AF|GIB GI EU|GRC GR EU|GRL GL NA|GRD GD NA|GLP GP NA|GUM GU OC|GTM GT NA|GGY GG EU|GIN GN AF|GNB GW AF|GUY GY SA|HTI HT NA|HMD HM AN|VAT VA EU|HND HN NA|HKG HK AS|HUN HU EU|ISL IS EU|IND IN AS|IDN ID AS|IRN IR AS|IRQ IQ AS|IRL IE EU|IMN IM EU|ISR IL AS|ITA IT EU|JAM JM NA|JPN JP AS|JEY JE EU|JOR JO AS|KAZ KZ AS|KEN KE AF|KIR KI OC|PRK KP AS|KOR KR AS|KWT KW AS|KGZ KG AS|LAO LA AS|LVA LV EU|LBN LB AS|LSO LS AF|LBR LR AF|LBY LY AF|LIE LI EU|LTU LT EU|LUX LU EU|MAC MO AS|MDG MG AF|MWI MW AF|MYS MY AS|MDV MV AS|MLI ML AF|MLT MT EU|MHL MH OC|MTQ MQ NA|MRT MR AF|MUS MU AF|MYT YT AF|MEX MX NA|FSM FM OC|MDA MD EU|MCO MC EU|MNG MN AS|MNE ME EU|MSR MS NA|MAR MA AF|MOZ MZ AF|MMR MM AS|NAM NA AF|NRU NR OC|NPL NP AS|NLD NL EU|NCL NC OC|NZL NZ OC|NIC NI NA|NER NE AF|NGA NG AF|NIU NU OC|NFK NF OC|MKD MK EU|MNP MP OC|NOR NO EU|OMN OM AS|PAK PK AS|PLW PW OC|PSE PS AS|PAN PA NA|PNG PG OC|PRY PY SA|PER PE SA|PHL PH AS|PCN PN OC|POL PL EU|PRT PT EU|PRI PR NA|QAT QA AS|REU RE AF|ROU RO EU|RUS RU EU|RWA RW AF|BLM BL NA|SHN SH AF|KNA KN NA|LCA LC NA|MAF MF NA|SPM PM NA|VCT VC NA|WSM WS OC|SMR SM EU|STP ST AF|SAU SA AS|SEN SN AF|SRB RS EU|SYC SC AF|SLE SL AF|SGP SG AS|SXM SX NA|SVK SK EU|SVN SI EU|SLB SB OC|SOM SO AF|ZAF ZA AF|SGS GS AN|SSD SS AF|ESP ES EU|LKA LK AS|SDN SD AF|SUR SR SA|SJM SJ EU|SWE SE EU|CHE CH EU|SYR SY AS|TWN TW AS|TJK TJ AS|TZA TZ AF|THA TH AS|TLS TL AS|TGO TG AF|TKL TK OC|TON TO OC|TTO TT NA|TUN TN AF|TUR TR AS|TKM TM AS|TCA TC NA|TUV TV OC|UGA UG AF|UKR UA EU|ARE AE AS|GBR GB EU|USA US NA|UMI UM OC|URY UY SA|UZB UZ AS|VUT VU OC|VEN VE SA|VNM VN AS|VGB VG NA|VIR VI NA|WLF WF OC|ESH EH AF|YEM YE AS|ZMB ZM AF|ZWE ZW AF`.split('|').forEach(s => { const [a3, a2, ct] = s.split(' '); m[a3] = [a2, ct]; });
  window.COUNTRIES.forEach(c => { [c.a2, c.cont] = m[c.code] || ['', '']; }); }
