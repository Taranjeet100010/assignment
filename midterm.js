let vehicles = [
    {
        id: 1,
        productName: "Cars",
        inventory: 4,
        unitsSold: 30,
        unitPrice: 684,
        brand: ["Tesla", "Daimler", "Toyota", "Ferrari"]
    },
    {
        id: 2,
        productName: "Trucks",
        inventory: 2,
        unitsSold: 50,
        unitPrice: 159,
        brand: ["Ducati", "Ferrari", "BMW", "Hyundai"]
    },
    {
        id: 3,
        productName: "Bicycle",
        inventory: 12,
        unitsSold: 40,
        unitPrice: 369,
        brand: ["Benz", "Tesla"]
    },
    {
        id: 4,
        productName: "Bus",
        inventory: 18,
        unitsSold: 60,
        unitPrice: 475,
        brand: ["BMW", "Mercedes", "Otdi"]
    },
    {
        id: 5,
        productName: "Train",
        inventory: 12,
        unitsSold: 20,
        unitPrice: 687,
        brand: ["Kia", "Duster", "Ferrari"]
    },
    {
        id: 6,
        productName: "Crane",
        inventory: 15,
        unitsSold: 35,
        unitPrice: 468,
        brand: ["Tata", "Volvo", "Benz"]
    },
    {
        id: 7,
        productName: "Buldozer",
        inventory: 16,
        unitsSold: 50,
        unitPrice: 400,
        brand: ["Tata", "Benz"]
    },
    {
        id: 8,
        productName: "Aircraft",
        inventory: 18,
        unitsSold: 26,
        unitPrice: 425,
        brand: ["Nissan", "Honda", "Toyota"]
    },
    {
        id: 9,
        productName: "MotorBikes",
        inventory: 19,
        unitsSold: 32,
        unitPrice: 975,
        brand: ["Honda", "Nissan", "Volkswagen"]
    },
    {
        id: 10,
        productName: "Racing Cars",
        inventory: 11,
        unitPrice: 875,
        unitsSold: 24,
        brand: ["Volkswagen", "Tata", "Toyota"]
    }
]

function calculateCost(obj) {
    let vehicle = vehicles.filter(vehicle => { return vehicle.productName === obj.productName });
    vehicle = vehicle[0];
    let str = `(${obj.inventory}) with total inventory cost of $${obj.inventory * vehicle.unitPrice}`;
    return str;
}

console.log(calculateCost({
    productName: "Cars",
    inventory: 19,
    unitsSold: 32,
    unitPrice: 650,
    brand: ["Honda", "Nissan", "Volkswagen"]
}));

let vehicles1 = vehicles;
let totalInventoryCost =0;
let totalInventory =0;
function calculateInventoryCost() {

    vehicles = vehicles.map(vehicle => {
        totalInventoryCost = Number(totalInventoryCost) +(vehicle.inventory * vehicle.unitPrice);
        totalInventory = Number(totalInventory) + vehicle.inventory;
        let str = `(${vehicle.inventory}) with total inventory cost of $${vehicle.inventory * vehicle.unitPrice}`;
        return str;
    });
    return vehicles;
}

console.log(calculateInventoryCost());

function conditionBasedData(n) {
    let v = [];
    vehicles1.filter(vehicle => {
        if (vehicle.inventory <= n) {
            let str = `(${vehicle.inventory}) with total inventory cost of $${vehicle.inventory * vehicle.unitPrice}`;
            v.push(str);
        }
    });

    if (v && v.length < 1) {
        v = ["No data can be matched with given condition"];
    }
    return v;
}

let data = conditionBasedData(5);
data.forEach(d=>{
    console.log(d);
})


console.log(`The average of total inventory sold for products is : ${parseFloat(totalInventoryCost/totalInventory).toFixed(2)}`)