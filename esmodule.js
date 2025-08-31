const obs=[
    {id:1,name:"toy1"},
    {id:2,name:"toy2"},
    {id:3,name:"toy3"}
]

function mul(a,b)
{
    return a*b;
}

function sq(i)
{
    return i*i;
}

export const mult=mul
console.log(sq(2));
export const getobs=obs