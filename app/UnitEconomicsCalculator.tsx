"use client";

import { useMemo, useState } from "react";

const money = new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 0 });

export function UnitEconomicsCalculator() {
  const [price, setPrice] = useState(3000);
  const [materials, setMaterials] = useState(300);
  const [hours, setHours] = useState(8);
  const [units, setUnits] = useState(10);

  const result = useMemo(() => {
    const profit = Math.max(price - materials, 0);
    return {
      revenue: price * units,
      profit: profit * units,
      margin: price ? (profit / price) * 100 : 0,
      hourly: hours ? profit / hours : 0,
    };
  }, [price, materials, hours, units]);

  return (
    <div className="calculator">
      <div className="calcInputs">
        <label>Цена продажи<input type="number" min="0" value={price} onChange={(e) => setPrice(Number(e.target.value))} /><span>₽</span></label>
        <label>Материалы<input type="number" min="0" value={materials} onChange={(e) => setMaterials(Number(e.target.value))} /><span>₽</span></label>
        <label>Время на штуку<input type="number" min="0" value={hours} onChange={(e) => setHours(Number(e.target.value))} /><span>ч</span></label>
        <label>Продажи в месяц<input type="number" min="0" value={units} onChange={(e) => setUnits(Number(e.target.value))} /><span>шт</span></label>
      </div>
      <div className="calcResults">
        <div><span>Выручка</span><strong>{money.format(result.revenue)} ₽</strong></div>
        <div><span>Валовая прибыль</span><strong>{money.format(result.profit)} ₽</strong></div>
        <div className="lime"><span>Маржа</span><strong>{result.margin.toFixed(0)}%</strong></div>
        <div><span>Доход за час</span><strong>{money.format(result.hourly)} ₽</strong></div>
      </div>
    </div>
  );
}
