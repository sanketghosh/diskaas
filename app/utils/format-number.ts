export const formatNumber = (num: number): string => {
  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(1) + "B";
  } else if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1) + "M";
  } else if (num >= 1_000) {
    return (num / 1_000).toFixed(1) + "K";
  } else {
    return num.toString();
  }
};

/**
 * 
console.log(formatNumber(1000)); // "1K"
console.log(formatNumber(1200)); // "1.2K"
console.log(formatNumber(120000)); // "120K"
console.log(formatNumber(1000000)); // "1M"
console.log(formatNumber(950)); // "950"
console.log(formatNumber(1500000000)); // "1.5B"
console.log(formatNumber(250000000)); // "250M"
console.log(formatNumber(50000000000)); // "50B"
*/
