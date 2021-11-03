const items = [
    {name: 'Bike', price: 100},
    {name: 'Car', price: 10000},
    {name: 'Motorcycle', price: 2500},
    {name: 'Scooter', price: 500}
]

const filteredItems = items.filter((item)=>{
    return item.price <= 1000
})

console.log(filteredItems);
