export function formatNumber(number) {
    number = Math.round(number);
    if(isNaN(number)){
      return '##'
    }
    if (number >= 1000000) {
      return (number / 1000000).toFixed(1) + 'M';
    } else if (number >= 1000) {
      return (number / 1000).toFixed(1) + 'k';
    } else {
      return number.toString();
    }
}