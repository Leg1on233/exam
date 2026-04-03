# Design Patterns — Exam

TypeScript implementation of creational design patterns.

---

## Factory Method

**Розташування:** `src/creational/factory-method/index.ts`

### Структура

```
Transport          ← Product interface
  Truck            ← Concrete Product
  Ship             ← Concrete Product
  Plane            ← Concrete Product

Logistics          ← Abstract Creator (contains the factory method)
  RoadLogistics    ← Concrete Creator → creates Truck
  SeaLogistics     ← Concrete Creator → creates Ship
  AirLogistics     ← Concrete Creator → creates Plane
```

### Запуск прикладу

```bash
npm install
npm run factory
```

### Очікуваний вивід

```
--- Тест Factory Method ---

RoadLogistics:
Доставка вантажівкою по дорозі

SeaLogistics:
Доставка судном морем

AirLogistics:
Доставка літаком по повітрю
```

### Як це працює

1. **`Transport`** — інтерфейс продукту з методом `deliver()`.  
2. **`Logistics`** — абстрактний творець з фабричним методом `createTransport()` та шаблонним методом `planDelivery()`, який його використовує.  
3. **Конкретні творці** (`RoadLogistics`, `SeaLogistics`, `AirLogistics`) перевизначають `createTransport()` і повертають відповідний транспорт.  
4. **Клієнтський код** працює виключно через абстрактний `Logistics` — без прив'язки до конкретних класів.
