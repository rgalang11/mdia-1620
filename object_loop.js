const colorValues = {
    red: 56,
    yellow: 14,
    blue: 76,
    green: 25,
    pink: 95
};

const settings = {
    darkMode: true,
    mute: false,
    fontSize: "larger"
};

const permission = {
    createData: true,
    readData: true,
    updateData: true,
    deleteData: true
};


let total = 0;


for (let key in colorValues) { //to identify the total number of respondents
    let numPpl = colorValues[key];
    total = total + numPpl;
}

// for (let numPpl in colorValues) { //to identify the total number of respondents
//     total = total + numPpl;
// }

console.log("Total number of respondents: ", total);

console.log("These are all the unique colors chosen.");
for (let key in colorValues) {
    let val = colorValues[key];
    let percent = val/total*100; //to get percentage, use .toFixed(2) to format to 2 decimal places


    // console.log("Colors: ", key);
    // console.log("Respondents: ", val);
    console.log(key, " is ", percent, " of ", total); 
}




















/** OBJECTS NOTES
 * 
 * syntax:
 * 
 * Let Key-Value Loop
 * 
 * retrieving the key.
 * 
 * let settings = {}; --empty object
 * for (let key in settings){
 *  --repeat until all keys are explored??
 *      let val = settings[key];
 *  console.log("what is the key", key);
 *  console.log("what is the value", val);
 * }
 * 
 * for (let val of settings){
 *  --repeat until all keys are explored??
 *      let val = settings[key];
 *  console.log("what is the value", val);
 * }
 * 
 * 
 * 
 * other shortcuts:
 * forEach
 * .map()
 * .filter()
 * .reduce()
 * .sort()
 * while()
 */