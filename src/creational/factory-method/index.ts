// ============================================================
// Factory Method — Creational Pattern
// ============================================================

// --- Product Interface ---
export interface Transport {
    deliver(): string;
}

// --- Concrete Products ---
export class Truck implements Transport {
    deliver(): string {
        return "Доставка вантажівкою по дорозі";
    }
}

export class Ship implements Transport {
    deliver(): string {
        return "Доставка судном морем";
    }
}

export class Plane implements Transport {
    deliver(): string {
        return "Доставка літаком по повітрю";
    }
}

// --- Creator (Abstract) ---
export abstract class Logistics {
    // Factory Method — subclasses decide which product to create
    abstract createTransport(): Transport;

    // Template method that uses the factory method
    planDelivery(): string {
        const transport = this.createTransport();
        return transport.deliver();
    }
}

// --- Concrete Creators ---
export class RoadLogistics extends Logistics {
    createTransport(): Transport {
        return new Truck();
    }
}

export class SeaLogistics extends Logistics {
    createTransport(): Transport {
        return new Ship();
    }
}

export class AirLogistics extends Logistics {
    createTransport(): Transport {
        return new Plane();
    }
}