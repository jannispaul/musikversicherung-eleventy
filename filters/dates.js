/*
A date formatter filter for Nunjucks
*/
module.exports = function(date, part) {
  var d = new Date(date);
  if (part == "year") {
    return d.getUTCFullYear();
  }
  var month = [
    "Jan",
    "Feb",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Dez",
  ];
  var ordinal = {
    1: "st",
    2: "nd",
    3: "rd",
    21: "st",
    22: "nd",
    23: "rd",
    31: "st",
  };
  return (
    d.getDate() +
    // (ordinal[d.getDate()] || ".") +
    "." +
    " " +
    month[d.getMonth()] +
    d.getUTCFullYear()
  );
};
