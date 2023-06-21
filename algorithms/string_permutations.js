function permutation(string) {
  const splited = string.split("");

  function print(current, total) {
    console.log('entrei     ');
    if (current.length === 0) {
      return;
    }
    if (current.length === 1) {
      // console.log(total + current[0]);
      return;
    }
    let right;
    let left;
    for (i = 0; i < current.length; i++) {
      left = current.slice(0, i);
      right = current.slice(i + 1, current.length);
      print(left, total + current[i]);
      print(right, total + current[i]);
      // console.log(current, i);
    }
  }

  print(splited, "");
}

permutation("abc");
