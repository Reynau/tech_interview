Ex 1:
-----
If you had to use the next node.js module and call methods a and then b sequencially, explain why it's not so straightforward and what are the different solutions if we are using node v.8+.
Which is the most elegant solution in your opinion.
```javascript
module.exports = {
    a: (cb) => {
        setTimeout(()=>{
          return cb(null,1000)
        },1000)
    },

    b: (cb) => {
        setTimeout(()=>{
            return cb(null,500)
        },500)
    },
}
```
Ex 2:
-----
Enum top 5 features a table web component should have


Ex 3:
-----

- Create a rest api containing methods GET/POST/PUT/DELETE, using express, following standards, and with minimal code
  Use the following dataset:

- Create a vue (v2) app with view to manage this rest

```javascript
const COUNTRIES = [
{name: 'Afghanistan', code: 'AF'},
{name: 'Åland Islands', code: 'AX'},
{name: 'Albania', code: 'AL'},
{name: 'Algeria', code: 'DZ'},
{name: 'American Samoa', code: 'AS'},
{name: 'AndorrA', code: 'AD'},
{name: 'Angola', code: 'AO'},
{name: 'Anguilla', code: 'AI'},
{name: 'Antarctica', code: 'AQ'},
{name: 'Antigua and Barbuda', code: 'AG'},
{name: 'Argentina', code: 'AR'},
{name: 'Armenia', code: 'AM'},
{name: 'Aruba', code: 'AW'},
{name: 'Australia', code: 'AU'},
{name: 'Austria', code: 'AT'},
{name: 'Azerbaijan', code: 'AZ'},
{name: 'Bahamas', code: 'BS'},
{name: 'Bahrain', code: 'BH'},
{name: 'Bangladesh', code: 'BD'},
{name: 'Barbados', code: 'BB'},
{name: 'Belarus', code: 'BY'},
{name: 'Belgium', code: 'BE'},
{name: 'Belize', code: 'BZ'},
{name: 'Benin', code: 'BJ'},
{name: 'Bermuda', code: 'BM'},
{name: 'Bhutan', code: 'BT'},
{name: 'Bolivia', code: 'BO'},
{name: 'Bosnia and Herzegovina', code: 'BA'},
{name: 'Botswana', code: 'BW'},
{name: 'Bouvet Island', code: 'BV'},
{name: 'Brazil', code: 'BR'},
{name: 'British Indian Ocean Territory', code: 'IO'},
{name: 'Brunei Darussalam', code: 'BN'},
{name: 'Bulgaria', code: 'BG'},
{name: 'Burkina Faso', code: 'BF'},
{name: 'Burundi', code: 'BI'},
{name: 'Cambodia', code: 'KH'},
{name: 'Cameroon', code: 'CM'},
{name: 'Canada', code: 'CA'},
{name: 'Cape Verde', code: 'CV'},
{name: 'Cayman Islands', code: 'KY'},
{name: 'Central African Republic', code: 'CF'},
{name: 'Chad', code: 'TD'},
{name: 'Chile', code: 'CL'},
{name: 'China', code: 'CN'},
{name: 'Christmas Island', code: 'CX'},
{name: 'Cocos (Keeling) Islands', code: 'CC'},
{name: 'Colombia', code: 'CO'},
{name: 'Comoros', code: 'KM'},
{name: 'Congo', code: 'CG'},
{name: 'Congo, The Democratic Republic of the', code: 'CD'},
{name: 'Cook Islands', code: 'CK'},
{name: 'Costa Rica', code: 'CR'},
{name: 'Cote D\'Ivoire', code: 'CI'},
{name: 'Croatia', code: 'HR'},
{name: 'Cuba', code: 'CU'},
{name: 'Cyprus', code: 'CY'},
{name: 'Czech Republic', code: 'CZ'},
{name: 'Denmark', code: 'DK'},
{name: 'Djibouti', code: 'DJ'},
{name: 'Dominica', code: 'DM'},
{name: 'Dominican Republic', code: 'DO'},
{name: 'Ecuador', code: 'EC'},
{name: 'Egypt', code: 'EG'},
{name: 'El Salvador', code: 'SV'},
{name: 'Equatorial Guinea', code: 'GQ'},
{name: 'Eritrea', code: 'ER'},
{name: 'Estonia', code: 'EE'},
{name: 'Ethiopia', code: 'ET'},
{name: 'Falkland Islands (Malvinas)', code: 'FK'},
{name: 'Faroe Islands', code: 'FO'},
{name: 'Fiji', code: 'FJ'},
{name: 'Finland', code: 'FI'},
{name: 'France', code: 'FR'},
{name: 'French Guiana', code: 'GF'},
{name: 'French Polynesia', code: 'PF'},
{name: 'French Southern Territories', code: 'TF'},
{name: 'Gabon', code: 'GA'},
{name: 'Gambia', code: 'GM'},
{name: 'Georgia', code: 'GE'},
{name: 'Germany', code: 'DE'},
{name: 'Ghana', code: 'GH'},
{name: 'Gibraltar', code: 'GI'},
{name: 'Greece', code: 'GR'},
{name: 'Greenland', code: 'GL'},
{name: 'Grenada', code: 'GD'},
{name: 'Guadeloupe', code: 'GP'},
{name: 'Guam', code: 'GU'},
{name: 'Guatemala', code: 'GT'},
{name: 'Guernsey', code: 'GG'},
{name: 'Guinea', code: 'GN'},
{name: 'Guinea-Bissau', code: 'GW'},
{name: 'Guyana', code: 'GY'},
{name: 'Haiti', code: 'HT'},
{name: 'Heard Island and Mcdonald Islands', code: 'HM'},
{name: 'Holy See (Vatican City State)', code: 'VA'},
{name: 'Honduras', code: 'HN'},
{name: 'Hong Kong', code: 'HK'},
{name: 'Hungary', code: 'HU'},
{name: 'Iceland', code: 'IS'},
{name: 'India', code: 'IN'},
{name: 'Indonesia', code: 'ID'},
{name: 'Iran, Islamic Republic Of', code: 'IR'},
{name: 'Iraq', code: 'IQ'},
{name: 'Ireland', code: 'IE'},
{name: 'Isle of Man', code: 'IM'},
{name: 'Israel', code: 'IL'},
{name: 'Italy', code: 'IT'},
{name: 'Jamaica', code: 'JM'},
{name: 'Japan', code: 'JP'},
{name: 'Jersey', code: 'JE'},
{name: 'Jordan', code: 'JO'},
{name: 'Kazakhstan', code: 'KZ'},
{name: 'Kenya', code: 'KE'},
{name: 'Kiribati', code: 'KI'},
{name: 'Korea, Democratic People\'S Republic of', code: 'KP'},
{name: 'Korea, Republic of', code: 'KR'},
{name: 'Kuwait', code: 'KW'},
{name: 'Kyrgyzstan', code: 'KG'},
{name: 'Lao People\'S Democratic Republic', code: 'LA'},
{name: 'Latvia', code: 'LV'},
{name: 'Lebanon', code: 'LB'},
{name: 'Lesotho', code: 'LS'},
{name: 'Liberia', code: 'LR'},
{name: 'Libyan Arab Jamahiriya', code: 'LY'},
{name: 'Liechtenstein', code: 'LI'},
{name: 'Lithuania', code: 'LT'},
{name: 'Luxembourg', code: 'LU'},
{name: 'Macao', code: 'MO'},
{name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'},
{name: 'Madagascar', code: 'MG'},
{name: 'Malawi', code: 'MW'},
{name: 'Malaysia', code: 'MY'},
{name: 'Maldives', code: 'MV'},
{name: 'Mali', code: 'ML'},
{name: 'Malta', code: 'MT'},
{name: 'Marshall Islands', code: 'MH'},
{name: 'Martinique', code: 'MQ'},
{name: 'Mauritania', code: 'MR'},
{name: 'Mauritius', code: 'MU'},
{name: 'Mayotte', code: 'YT'},
{name: 'Mexico', code: 'MX'},
{name: 'Micronesia, Federated States of', code: 'FM'},
{name: 'Moldova, Republic of', code: 'MD'},
{name: 'Monaco', code: 'MC'},
{name: 'Mongolia', code: 'MN'},
{name: 'Montserrat', code: 'MS'},
{name: 'Morocco', code: 'MA'},
{name: 'Mozambique', code: 'MZ'},
{name: 'Myanmar', code: 'MM'},
{name: 'Namibia', code: 'NA'},
{name: 'Nauru', code: 'NR'},
{name: 'Nepal', code: 'NP'},
{name: 'Netherlands', code: 'NL'},
{name: 'Netherlands Antilles', code: 'AN'},
{name: 'New Caledonia', code: 'NC'},
{name: 'New Zealand', code: 'NZ'},
{name: 'Nicaragua', code: 'NI'},
{name: 'Niger', code: 'NE'},
{name: 'Nigeria', code: 'NG'},
{name: 'Niue', code: 'NU'},
{name: 'Norfolk Island', code: 'NF'},
{name: 'Northern Mariana Islands', code: 'MP'},
{name: 'Norway', code: 'NO'},
{name: 'Oman', code: 'OM'},
{name: 'Pakistan', code: 'PK'},
{name: 'Palau', code: 'PW'},
{name: 'Palestinian Territory, Occupied', code: 'PS'},
{name: 'Panama', code: 'PA'},
{name: 'Papua New Guinea', code: 'PG'},
{name: 'Paraguay', code: 'PY'},
{name: 'Peru', code: 'PE'},
{name: 'Philippines', code: 'PH'},
{name: 'Pitcairn', code: 'PN'},
{name: 'Poland', code: 'PL'},
{name: 'Portugal', code: 'PT'},
{name: 'Puerto Rico', code: 'PR'},
{name: 'Qatar', code: 'QA'},
{name: 'Reunion', code: 'RE'},
{name: 'Romania', code: 'RO'},
{name: 'Russian Federation', code: 'RU'},
{name: 'RWANDA', code: 'RW'},
{name: 'Saint Helena', code: 'SH'},
{name: 'Saint Kitts and Nevis', code: 'KN'},
{name: 'Saint Lucia', code: 'LC'},
{name: 'Saint Pierre and Miquelon', code: 'PM'},
{name: 'Saint Vincent and the Grenadines', code: 'VC'},
{name: 'Samoa', code: 'WS'},
{name: 'San Marino', code: 'SM'},
{name: 'Sao Tome and Principe', code: 'ST'},
{name: 'Saudi Arabia', code: 'SA'},
{name: 'Senegal', code: 'SN'},
{name: 'Serbia and Montenegro', code: 'CS'},
{name: 'Seychelles', code: 'SC'},
{name: 'Sierra Leone', code: 'SL'},
{name: 'Singapore', code: 'SG'},
{name: 'Slovakia', code: 'SK'},
{name: 'Slovenia', code: 'SI'},
{name: 'Solomon Islands', code: 'SB'},
{name: 'Somalia', code: 'SO'},
{name: 'South Africa', code: 'ZA'},
{name: 'South Georgia and the South Sandwich Islands', code: 'GS'},
{name: 'Spain', code: 'ES'},
{name: 'Sri Lanka', code: 'LK'},
{name: 'Sudan', code: 'SD'},
{name: 'Suriname', code: 'SR'},
{name: 'Svalbard and Jan Mayen', code: 'SJ'},
{name: 'Swaziland', code: 'SZ'},
{name: 'Sweden', code: 'SE'},
{name: 'Switzerland', code: 'CH'},
{name: 'Syrian Arab Republic', code: 'SY'},
{name: 'Taiwan, Province of China', code: 'TW'},
{name: 'Tajikistan', code: 'TJ'},
{name: 'Tanzania, United Republic of', code: 'TZ'},
{name: 'Thailand', code: 'TH'},
{name: 'Timor-Leste', code: 'TL'},
{name: 'Togo', code: 'TG'},
{name: 'Tokelau', code: 'TK'},
{name: 'Tonga', code: 'TO'},
{name: 'Trinidad and Tobago', code: 'TT'},
{name: 'Tunisia', code: 'TN'},
{name: 'Turkey', code: 'TR'},
{name: 'Turkmenistan', code: 'TM'},
{name: 'Turks and Caicos Islands', code: 'TC'},
{name: 'Tuvalu', code: 'TV'},
{name: 'Uganda', code: 'UG'},
{name: 'Ukraine', code: 'UA'},
{name: 'United Arab Emirates', code: 'AE'},
{name: 'United Kingdom', code: 'GB'},
{name: 'United States', code: 'US'},
{name: 'United States Minor Outlying Islands', code: 'UM'},
{name: 'Uruguay', code: 'UY'},
{name: 'Uzbekistan', code: 'UZ'},
{name: 'Vanuatu', code: 'VU'},
{name: 'Venezuela', code: 'VE'},
{name: 'Viet Nam', code: 'VN'},
{name: 'Virgin Islands, British', code: 'VG'},
{name: 'Virgin Islands, U.S.', code: 'VI'},
{name: 'Wallis and Futuna', code: 'WF'},
{name: 'Western Sahara', code: 'EH'},
{name: 'Yemen', code: 'YE'},
{name: 'Zambia', code: 'ZM'},
{name: 'Zimbabwe', code: 'ZW'}
]
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
