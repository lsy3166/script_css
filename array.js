console.log([1, 2, 3].map((n) => n * 2 + 1));

{
  let fruits = ["🍓", "🍌", "🍎", "🍈"];
  let strFruits = fruits.join(",");

  console.log(strFruits);
}

{
  let fruits = "🍓,🍌,🍎,🍈";
  let strFruits = fruits.split(",");

  console.log(strFruits);
}

{
  const array = [1, 2, 3, 4, 5];
  const reverseArr = array.reverse();
  console.log(reverseArr);
  console.log(array);
}

{
  const array = [1, 2, 3, 4, 5];
  const result = array.splice(2, 3);
  console.log(result);
  console.log(`origin : ${array}`);

  const array2 = [1, 2, 3, 4, 5];
  const result2 = array2.slice(2, 5);
  console.log(result2);
  console.log(`origin2 : ${array2}`);
}

{
  class Student {
    constructor(_name, age, enrolled, score) {
      this.name = _name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }

  const students = [
    new Student("A", 29, true, 45),
    new Student("B", 28, true, 80),
    new Student("C", 30, true, 90),
    new Student("D", 40, true, 66),
    new Student("E", 18, true, 88),
  ];

  // find  a students with the score 90
  {
    const result = students.find((student, index) => student.score == 90);
    console.log(result);
  }

  // make an array of enrolled students
  {
    const result = students.filter((student) => student.enrolled);
    console.log(result);
  }

  // make an array containing only the students' scores
  {
    // map을 사용 할것!!
    let newArr = [];
    const result = students.forEach((student) => {
      return newArr.push(student.score);
    });

    console.log(newArr);

    console.log(students.map((student) => student.score));
  }

  {
    // check if there is a student with the score lower than 50
    const result = students.some((student) => student.score < 50);
    console.log(result);
  }
  {
    // compute students' average score
    const result = students.reduce((previousValue, currentValue) => {
      return previousValue + currentValue.score;
    }, 0);
    console.log(result / 5);
  }
  {
    console.log(
      students
        .map((student) => student.score)
        .filter((score) => score > 70)
        .join(",")
    );

    //console.clear();
    console.log(
      "sorted : " +
        students
          .map((student) => student.score)
          .sort((a, b) => a - b)
          .join(",")
    );
  }
}

{
  const rabbit = {
    name: "lsy",
    color: "white",
    birthDate: new Date(),
  };

  json = JSON.stringify(rabbit);
  console.log(json);

  json = JSON.stringify(rabbit, ["name", "color", "birthDate"]);
  console.log(json.birthDate);

  //console.clear();
  const obj = JSON.parse(json, (key, value) => {
    console.log(`key : ${key}, value : ${value}`);

    return key === "birthDate" ? new Date(value) : value;
  });
  console.log(
    "rabbit : " +
      rabbit.birthDate.getFullYear() +
      ("0" + (rabbit.birthDate.getMonth() + 1)).slice(-2) +
      ("0" + rabbit.birthDate.getDate()).slice(-2)
  );
  console.log(
    "obj : " +
      obj.birthDate.getFullYear() +
      ("0" + (obj.birthDate.getMonth() + 1)).slice(-2) +
      ("0" + obj.birthDate.getDate()).slice(-2)
  );
}
