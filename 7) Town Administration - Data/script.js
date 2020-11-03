// superclass for park and street
class Town {

  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }

}


// park subclass
class park extends Town {

  constructor(name, buildYear, numTrees, area) {
    super(name, buildYear);
    this.numTrees = numTrees;
    this.area = area;
  }

  calcAge() {
    this.age = new Date().getFullYear() - this.buildYear;
  }
  
  density() {
    this.density = this.numTrees / this.area;
    this.density = this.density.toFixed(2);
    console.log(`The tree density of ${this.name} is ${this.density} square per km.`);
  }

}



// street subclass
class street extends Town {

  constructor(name, buildYear, length, size = 3) {
    super(name, buildYear);
    this.length = length; // in km
    this.size = size;
  }

  checkSize() {
    const streetSize = new Map();
    streetSize.set(1, 'Tiny');
    streetSize.set(2, 'Small');
    streetSize.set(3, 'Normal');
    streetSize.set(4, 'Big');
    streetSize.set(5, 'Huge');

    console.log(`${this.name}, built in ${this.buildYear}, is a ${streetSize.get(this.size)} street.`)
  }

}



// creating instances
let park1 = new park('Devi Lal Park', 1975, 824, 2.5);
let park2 = new park('Birthday Park', 2003, 233, 1.1);
let park3 = new park('National Park', 1963, 1125, 4.3);
let street1 = new street('Baker Street', 1982, 1.2, 2);
let street2 = new street('Lion Street', 2003, 1);
let street3 = new street('Sunset Point', 1921, 3.2, 4);
let street4 = new street('13th Street', 1965, 4.1, 5);

// creating array of parks and streets
const parkArr = [park1, park2, park3];
const streetArr = [street1, street2, street3, street4];



// ************report for park
function reportPark() {
console.log(`--------PARKS REPORT--------`);

// 1. Displaying density of each park
for(const cur of parkArr) {
  cur.density();
  cur.calcAge();
}

//  2. Displaying average age of all 3 parks
console.log(`The average age of our 3 parks is ${((park1.age + park2.age + park3.age) / 3).toFixed(2)} years.`);

// 3. Displaying the park that has over 1000 trees
for (const cur of parkArr) {
  if(cur.numTrees > 1000) {
    console.log(`The ${cur.name} has more than 1000 trees with a total of ${cur.numTrees} trees.`)
  }
}

console.log(``);
}



// func for sum 
function calc(arr) {
  const sum = arr.reduce((prev, cur) => prev + cur, 0);
  return [sum, sum / arr.length];
} 

// ************report for street
function reportStreet(s) {
  console.log(`--------STREETS REPORT--------`);

  // 4. Total and average length of streets
  const [totalLength, avgLength] = calc(s.map(cur => cur.length));   //func from line 100
  console.log(`The total length of the town streets is ${(totalLength).toFixed(2)}km and the average length of each street is ${(avgLength).toFixed(2)}km`);

  // 5. Classify the size of the street
  s.forEach(cur => cur.checkSize());
}



reportPark();
reportStreet(streetArr);



