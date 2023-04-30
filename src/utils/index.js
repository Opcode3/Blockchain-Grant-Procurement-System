export function getFlagEmoji(countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char =>  127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}


export function getCountriesCode(){
  const countries = require('/public/locals/countryPhoneCodes.json');
  return countries;
}

export function formatReactSelectProps(selectedProps){
  const resString = selectedProps.map( option => {
    return ""+option.value
  })
  return resString.join(',')
}
// TODO: functions for download, copy, cut
