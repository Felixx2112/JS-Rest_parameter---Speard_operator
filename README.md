### Rest parameters

`Rest được hiểu ở đây là lấy ra phần còn lại của tham số, nếu Rest đằng trước không lấy ra bất kì tham số nào thì sẽ trả về tất cả tham số `

```bash
function logger(...params) {
  console.log(params);
}

logger(1, 2, 3, 4, 5, 6);
```

`Nếu bây giờ mình lấy ra số a và phần còn lại thì lúc giờ tham số dầu sẽ là a và và trả về các số còn lại`

```bash
function logger(a,...params) {
  console.log(params);
}

logger(1, 2, 3, 4, 5, 6);
```

`Có thể vận dụng Destructuring cho Rest dể lấy ra các phần tử trong object`

```bash
function logger({ name, price, ...description }) {
  console.log(name);
  console.log(price);
  console.log(description);
}

logger({
  name: "Javascript",
  price: 1000,
  description: "Description content",
});

```

`Tương tự với mảng`

```bash
function logger([a, b, ...rest]) {
  console.log(a);
  console.log(b);
  console.log(rest);
}

logger([1, 2, 3, 4]);

```

### Spread operator

`Theo bài thì mình sẽ tạo ra array_1 và array_2 và nối 2 array lai để tạo ra aray_3`

```bash
const array = ["Javascript", "Ruby", "PHP"];
const array2 = ["ReactJS", "Angular", "React Native"];

const array3 = [?];
```

`Thương thì mn sẽ nghĩ là nên dùng concat để nói 2 array lại với nhau nhưng giờ chúng ta sẽ dùng toán tử Speard để làm điều đó`

`Toán tử Spread giúp loại bỏ dấu ngoặc giữa 2 array`

```bash
const array = ["Javascript", "Ruby", "PHP"];
const array2 = ["ReactJS", "Angular", "React Native"];

const array3 = [...array2, ...array];

console.log(array3);
```

`Tương tự với object`

```bash
const object1 = {
  name: "Javascript",
};

const object2 = {
  price: 1000,
};

const object3 = {
  ...object1,
  ...object2,
};

console.log(object3);
```

`Dùng toán tử Spread để truyền tham số cho hàm`

```bash
const array = ["Javascript", "PHP", "NodeJS"];

function logger(a, b, c) {
  console.log(a, b, c);
}
logger(...array);
```

`Hoặc kết hợp với toán tử Rest`

```bash
const array = ["Javascript", "PHP", "NodeJS", "ReactJS", "Ruby", "Python"];

function logger(...rest) {
  // rest tra ve phan tu con lai
  for (const key in rest) {
    console.log(key, rest[key]);
  }
}
logger(...array); // spread loai bo ngoac

```
