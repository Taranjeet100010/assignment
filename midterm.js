let vehicles=[
    {
        id:1,
        productName:"Cars",
        inventory: 15,
        unitsSold: 30,
        brand:["Tesla","Daimler","Toyota","Ferrari"]
    },
    {
        id:2,
        productName:"Cars",
        inventory: 20,
        unitsSold: 50,
        brand:["Ducati","Ferrari","BMW","Hyundai"]
    },
    {
        id:3,
        productName:"Cars",
        inventory: 12,
        unitsSold: 40,
        brand:["Benz","Tesla"]
    },
    {        
        id:4,
        productName:"Cars",
        inventory: 18,
        unitsSold: 60,
        brand:["BMW","Mercedes","Otdi"]
    },
    {
        id:5,
        productName:"Cars",
        inventory: 12,
        unitsSold: 20,
        brand:["Kia","Duster","Ferrari"]
    },
    {
        id:6,
        productName:"Cars",
        inventory: 15,
        unitsSold: 35,
        brand:["Tata","Volvo","Benz"]
    },
    {
        id:7,
        productName:"Cars",
        inventory: 16,
        unitsSold: 50,
        brand:["Tata","Benz"]
    },
    {
        id:8,
        productName:"Cars",
        inventory: 18,
        unitsSold: 26,
        brand:["Nissan","Honda","Toyota"]
    },
    {
        id:9,
        productName:"Cars",
        inventory: 19,
        unitsSold: 32,
        brand:["Honda","Nissan","Volkswagen"]
    },
    {
        id:10,
        productName:"Cars",
        inventory: 11,
        unitsSold: 24,
        brand:["Volkswagen","Tata","Toyota"]
    }
]

function calculateInventoryCost(obj){

obj.brand.forEach(brand=>{
    vehicles.forEach(vehicle =>{
        if(vehicle.brand.includes(brand)){
            
        }
    });

}


)
   
}