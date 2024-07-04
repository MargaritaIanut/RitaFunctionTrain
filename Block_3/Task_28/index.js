function ryangosling(str) {
  const one = str.split(" ");
  console.log(one);
  const two = one.reverse();
  console.log(two);
  const three = two.join(" ");
  console.log(three);
  return three;
}

ryangosling("Собака ела жопу");
