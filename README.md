# num-format
Number format library

## Usage

1) Create instance: `const format = new NumFormat()`
2) Set your format (or not to be default) (you can set only necessary parts of format): `format.setFormat({round: { scale: 2, mode: "half-up" }})`
3) Set number: `format.setValue(1234.6678)`
4) Format it! `const formattedNumber = format.format()`

## Full Usage

```
const f = new NumFormat()
f.setFormat({
    intDelim: { delim:"**", step: 3}, // integer part delimiter (any string and step)
    fracDelim: { delim:"'", step: 4}, // fraction part delimiter (any string and step)

    point: "||", // point (any string)

    round: { scale: 6, mode: "half-up" }, // round mode

    minIntChars: 0, // minimum chars in integer part (if lower then zeros)
    minFracChars: 8, // minimum chars in fraction part (if lower then zeros)
    // if both is zero - zero value will be represent as ""

    nan: "NOT A NUMBER", // NaN symbol
    inf: "INFINITY", // Infinity symbol

    prefix: "@ ", // any string prefix
    suffix: " %" // any string suffix
})

let v
console.log((v=0)+": "+ f.setValue(v).format())
console.log((v=-0)+": "+ f.setValue(v).format())
console.log((v=1)+": "+ f.setValue(v).format())
console.log((v=1.1)+": "+ f.setValue(v).format())
console.log((v=-1.1)+": "+ f.setValue(v).format())
console.log((v=0.21215)+": "+ f.setValue(v).format())
console.log((v=0.0002)+": "+ f.setValue(v).format())
console.log((v=0.03e+30)+": "+ f.setValue(v).format()) //
console.log((v=1214564.4564654)+": "+ f.setValue(v).format())
console.log((v=3e30)+": "+ f.setValue(v).format())
console.log((v=+90000)+": "+ f.setValue(v).format())
console.log((v=.2154)+": "+ f.setValue(v).format())
console.log((v=.5655)+": "+ f.setValue(v).format())
console.log((v=-.08754)+": "+ f.setValue(v).format())
console.log((v=-1546546500000.087554564540000)+": "+ f.setValue(v).format())
console.log((v=999999.99)+": "+ f.setValue(v).format())
console.log((v=1234567890123456789012345678901234567890n)+": "+ f.setValue(v).format())
console.log((v=NaN)+": "+ f.setValue(v).format())
console.log((v=+Infinity)+": "+ f.setValue(v).format())
console.log((v=-Infinity)+": "+ f.setValue(v).format())
/*
OUTPUT:
0: @ ||0000'0000 %
0: @ ||0000'0000 %
1: @ 1||0000'0000 %
1.1: @ 1||1000'0000 %
-1.1: @ -1||1000'0000 %
0.21215: @ ||2121'5000 %
0.0002: @ ||0002'0000 %
3e+28: @ 30**000**000**000**000**000**000**000**000**000||0000'0000 %
1214564.4564654: @ 1**214**564||4564'6500 %
3e+30: @ 3**000**000**000**000**000**000**000**000**000**000||0000'0000 %
90000: @ 90**000||0000'0000 %
0.2154: @ ||2154'0000 %
0.5655: @ ||5655'0000 %
-0.08754: @ -||0875'4000 %
-1546546500000.0876: @ -1**546**546**500**000||0876'0000 %
999999.99: @ 999**999||9900'0000 %
1234567890123456789012345678901234567890: @ 1**234**567**890**123**456**789**012**345**678**901**234**567**890||0000'0000 %
NaN: @ NOT A NUMBER %
Infinity: @ INFINITY %
-Infinity: @ -INFINITY %

*/


f.setFormat() // set empty format makes it reset to default
f.setFormat({
    intDelim: { delim:" ", step: 3},

    point: ".",

    round: { scale: 8, mode: "half-up" },

    minIntChars: 1,
    minFracChars: 0,
})

console.log((v=0)+": "+ f.setValue(v).format())
console.log((v=-0)+": "+ f.setValue(v).format())
console.log((v=1)+": "+ f.setValue(v).format())
console.log((v=1.1)+": "+ f.setValue(v).format())
console.log((v=-1.1)+": "+ f.setValue(v).format())
console.log((v=0.21215)+": "+ f.setValue(v).format())
console.log((v=0.0002)+": "+ f.setValue(v).format())
console.log((v=0.03e+30)+": "+ f.setValue(v).format()) //
console.log((v=1214564.4564654)+": "+ f.setValue(v).format())
console.log((v=3e30)+": "+ f.setValue(v).format())
console.log((v=+90000)+": "+ f.setValue(v).format())
console.log((v=.2154)+": "+ f.setValue(v).format())
console.log((v=.5655)+": "+ f.setValue(v).format())
console.log((v=-.08754)+": "+ f.setValue(v).format())
console.log((v=-1546546500000.087554564540000)+": "+ f.setValue(v).format())
console.log((v=999999.99)+": "+ f.setValue(v).format())
console.log((v=1234567890123456789012345678901234567890n)+": "+ f.setValue(v).format())
console.log((v=NaN)+": "+ f.setValue(v).format())
console.log((v=+Infinity)+": "+ f.setValue(v).format())
console.log((v=-Infinity)+": "+ f.setValue(v).format())
/*
OUTPUT:
0: 0
0: 0
1: 1
1.1: 1.1
-1.1: -1.1
0.21215: 0.21215
0.0002: 0.0002
3e+28: 30 000 000 000 000 000 000 000 000 000
1214564.4564654: 1 214 564.4564654
3e+30: 3 000 000 000 000 000 000 000 000 000 000
90000: 90 000
0.2154: 0.2154
0.5655: 0.5655
-0.08754: -0.08754
-1546546500000.0876: -1 546 546 500 000.0876
999999.99: 999 999.99
1234567890123456789012345678901234567890: 1 234 567 890 123 456 789 012 345 678 901 234 567 890
NaN: nan
Infinity: ∞
-Infinity: -∞
*/


console.log(NumFormat.defaultOutFormat)
/*
OUTPUT:
{
  intDelim: null,
  fracDelim: null,
  point: '.',
  round: { scale: 8, mode: 'half-up' },
  minIntChars: 1,
  minFracChars: 0,
  nan: 'nan',
  inf: '∞',
  prefix: null,
  suffix: null
}

*/
```
