function captializeNames(names){
    return  names.map (names => names.charAt(0).toUpperCase()+ names.slice(1).toLowerCase());


}
console.log(captializeNames(["jo", "nelson", "jurie"]));
console.log(captializeNames(["KARLY", "DANIEL","KELSEY"]));