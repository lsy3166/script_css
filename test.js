function Item(title, price) {
  this.title = title;
  this.price = price;
  this.showPrice = function () {
    console.log(`가격은 ${price}원 입니다.`);
  };
}

const item1 = new Item("대파", 1000);
const item2 = new Item("마늘", 2000);
const item3 = new Item("사과", 3000);

item1.showPrice();
item2.showPrice();
item3.showPrice();

console.log(
  [1, 2, 3].map(function (n) {
    return n + 1;
  })
);

let numbers = [1, 2, 3];
console.log([1, 2, 3].map((n) => n * 2 + 1));
