let alien = {
    name:'Radhika',
    tech:'JS',
    laptop:{
        cpu:'17',
        ram:4,
        brand:'HP'
    }
}
for(let key in alien)
{
    console.log(key,alien[key])
}