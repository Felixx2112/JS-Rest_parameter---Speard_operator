const array = ["Javascript", "PHP", "NodeJS", "ReactJS", "Ruby", "Python"];

function logger(...rest) {
  // rest tra ve phan tu con lai
  for (const key in rest) {
    console.log(key, rest[key]);
  }
}
logger(...array); // spread loai bo ngoac
