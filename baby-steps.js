
var i= 2
var sum =0
while (process.argv[i])
{
    sum =sum+Number(process.argv[i])
    ++i
}
console.log (sum)