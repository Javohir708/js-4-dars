// 1-misol
{
  let n = 5;
  if (n > 0) {
    n++;
    console.log(n);
  } else {
    console.log(n);
  }
}

// 2-misol
{
  let n = 8;
  if (n > 0) {
    n++;
    console.log(n);
  } else {
    n -= 2;
    console.log(n);
  }
}

// 3-misol
{
  let n = 0;
  if (n > 0) {
    n++;
  } else if (n < 0) {
    n -= 2;
  } else {
    n = 10;
  }

  console.log(n);
}

// 4-misol
{
  let n1 = 4,
    n2 = -4,
    n3 = 9,
    musbat = 0;
  if (n1 > 0) {
    musbat++;
  }

  if (n2 > 0) {
    musbat++;
  }

  if (n3 > 0) {
    musbat++;
  }

  console.log(musbat);
}

// 5-misol
{
  let n1 = 2,
    n2 = 13,
    n3 = 7,
    musbat = 0,
    manfiy = 0;
  if (n1 > 0) {
    musbat++;
  } else if (n1 < 0) {
    manfiy++;
  }

  if (n2 > 0) {
    musbat++;
  } else if (n2 < 0) {
    manfiy++;
  }

  if (n3 > 0) {
    musbat++;
  } else if (n3 < 0) {
    manfiy++;
  }

  console.log(musbat);
  console.log(manfiy);
}

// 6-misol
{
  let a = 2,
    b = 8;

  if (a > b) {
    console.log(a);
  } else {
    console.log(b);
  }
}

// 7-misol
{
  let a = 5,
    b = 11;

  if (a < b) {
    console.log(`eng kichik son ${a}`);
  } else if (a > b) {
    console.log(`eng kichik son ${b}`);
  } else {
    console.log(`ikkala son teng`);
  }
}

// 8-misol
{
  let a = 6,
    b = 15;
  if (a > b) {
    console.log(`${a} katta son ${b} kichik son`);
  } else {
    console.log(`${b} katta son ${a} kichik son`);
  }
}

// 9-misol
{
  let a = 13,
    b = 8;
  if (a > b) {
    [a, b] = [b, a];
  }

  console.log(`a=${a}, b=${b}`);
}

// 10-misol
{
  let a = 6,
    b = 5;
  if (a !== b) {
    a = a + b;
    b = a;
  } else {
    (a = 0), (b = 0);
  }

  console.log("a", a);
  console.log("b", b);
}

// 11-misol
{
  let n = 2;

  switch (n) {
    case 1:
      result = "dushanba";
      break;
    case 2:
      result = "Seshanba";
      break;
    case 3:
      result = "Chorshanba";
      break;
    case 4:
      result = "Payshanba";
      break;
    case 5:
      result = "Juma";
      break;
    case 6:
      result = "Shanba";
      break;
    case 7:
      result = "Yakshanba";
      break;

    default:
      result = "Bunday kun yo'q";
  }

  console.log(result);
}

// 12 -misol
{
  let k = 5;
  switch (k) {
    case 1:
      result = "1-yomon";
      break;
    case 2:
      result = "2-qoniqarsiz";
      break;
    case 3:
      result = "3-qoniqarli";
      break;
    case 4:
      result = "4-yaxshi";
      break;
    case 5:
      result = "5-a'lo";
      break;

    default:
      result = "xato";
  }

  console.log(result);
}

// 13-misol
{
  let n = 4;
  switch (n) {
    case 1:
    case 2:
    case 12:
      result = `${n} - oy qish`;
      break;
    case 3:
    case 4:
    case 5:
      result = `${n} - oy bahor`;
      break;
    case 6:
    case 7:
    case 8:
      result = `${n} - oy yoz`;
      break;
    case 9:
    case 10:
    case 11:
      result = `${n} - oy kuz`;
      break;

    default:
      result = "bunday oy yo'q";
  }

  console.log(result);
}

// 14-misol
{
  let n = 11;
  switch (n) {
    case 1:
      result = `${n} - yanvar oyi bu oyda 31 kun bor`;
      break;
    case 2:
      result = `${n} - fevral oyi bu oyda 28 kun bor`;
      break;
    case 3:
      result = `${n} - mart oyi bu oyda 31 kun bor`;
      break;
    case 4:
      result = `${n} - aprel oyi bu oyda 30 kun bor`;
      break;
    case 5:
      result = `${n} - may oyi bu oyda 31 kun bor`;
      break;
    case 6:
      result = `${n} - iyun oyi bu oyda 30 kun bor`;
      break;
    case 7:
      result = `${n} - iyul oyi bu oyda 31 kun bor`;
      break;
    case 8:
      result = `${n} - avgust oyi bu oyda 31 kun bor`;
      break;
    case 9:
      result = `${n} - sentabr oyi bu oyda 30 kun bor`;
      break;
    case 10:
      result = `${n} - oktabr oyi bu oyda 31 kun bor`;
      break;
    case 11:
      result = `${n} - noyabr oyi bu oyda 30 kun bor`;
      break;
    case 12:
      result = `${n} - dekabr oyi bu oyda 31 kun bor`;
      break;

    default:
      result = `bunday oy yo'q`;
  }
  console.log(result);
}

// tepadagi misolni qisqartirilgani ya'ni oy nomlarini olib tashladim
{
  let n = 11;
  let result;
  switch (n) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      result = `${n} - bu oyda 31 kun bor`;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      result = `${n} - bu oyda 30 kun bor`;
      break;
    case 2:
      result = `${n} - bu oyda 28 kun bor`;
      break;
    default:
      result = `bunday oy yo'q`;
  }
  console.log(result);
}

// 15-misol
{
  let a = 44,
    b = 15,
    amal = 3,
    natija;

  if (amal === 1) {
    natija = a + b;
  } else if (amal === 2) {
    natija = a - b;
  } else if (amal === 3) {
    natija = a * b;
  } else if (amal === 4) {
    natija = a / b;
  } else {
    console.log("amalni xato kiritdingiz");
  }

  console.log(natija);
}

// 16-misol
{
  {
    let birlik = 2;
    let uzunlik = 5;
    let result;

    switch (birlik) {
      case 1:
        result = uzunlik / 10;
        break;
      case 2:
        result = uzunlik * 1000;
        break;
      case 3:
        result = uzunlik;
        break;
      case 4:
        result = uzunlik / 1000;
        break;
      case 5:
        result = uzunlik / 100;
        break;
      default:
        result = "Noto'g'ri birlik kiritildi!";
    }

    console.log(result);
  }
}

// 17-misol
{
  {
    let birlik = 4;
    let ogirlik = 3;

    let result;

    switch (birlik) {
      case 1:
        result = ogirlik;
        break;
      case 2:
        result = ogirlik / 1_000_000;
        break;
      case 3:
        result = ogirlik / 1000;
        break;
      case 4:
        result = ogirlik * 1000;
        break;
      case 5:
        result = ogirlik * 100;
        break;
      default:
        result = "Noto'g'ri birlik kiritildi";
    }

    console.log(result);
  }
}

// 18-misol
{
  let D = 28;
  let M = 2;

  let result;

  if (M < 1 || M > 12 || D < 1 || D > 31) {
    result = "Noto'g'ri sana!";
  } else {
    switch (M) {
      case 2:
        result = D <= 28 ? `Sana: ${D}-Fevral` : "Noto'g'ri sana";
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        result =
          D <= 30
            ? `Sana: ${D}-${["Aprel", "Iyun", "Sentyabr", "Noyabr"][M / 2 - 2]}`
            : "Noto'g'ri sana";
        break;
      default:
        result =
          D <= 31
            ? `Sana: ${D}-${
                ["Yanvar", "Mart", "May", "Iyul", "Avgust", "Oktabr", "Dekabr"][
                  (M - 1) / 2
                ]
              }`
            : "Noto'g'ri sana!";
    }
  }

  console.log(result);
}

// 19-misol
{
  let D = 28;
  let M = 2;

  let oyKunlari = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (M < 1 || M > 12 || D < 1 || D > oyKunlari[M - 1]) {
    console.log("Noto'g'ri sana kiritildi!");
  } else {
    D += 1;

    switch (true) {
      case D > oyKunlari[M - 1]:
        D = 1;
        M += 1;

        switch (true) {
          case M > 12:
            M = 1;
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }

    console.log(`Keyingi sana: ${D}-${M}`);
  }
}

// 20-misol
