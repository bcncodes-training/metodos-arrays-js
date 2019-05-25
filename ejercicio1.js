let cities = ["miami", "barcelona", "madrid"];

let citiesCap = new Array;

citiesCap = capitalize2(cities);
console.log(citiesCap);

////////////////////////////////////////////////////////////

function capitalize(mArray) {
    let mArrayNew = new Array;
    mArray.forEach(element => {
        mArrayNew.push(element.substring(0,1).toUpperCase() + element.substring(1))});
    return mArrayNew;
    }

function capitalize2(mArray) {
    let mArrayNew = mArray.map(e => {return (e.substring(0,1).toUpperCase() + e.substring(1))});
    return mArrayNew;
}