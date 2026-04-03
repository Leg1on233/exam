import {
    Logistics,
    RoadLogistics,
    SeaLogistics,
    AirLogistics,
} from "../src/creational/factory-method/index";

// --- Client code: works with any Logistics via the abstract interface ---
function clientCode(logistics: Logistics): void {
    console.log(logistics.planDelivery());
}

console.log("--- Тест Factory Method ---\n");

console.log("RoadLogistics:");
clientCode(new RoadLogistics());

console.log("\nSeaLogistics:");
clientCode(new SeaLogistics());

console.log("\nAirLogistics:");
clientCode(new AirLogistics());