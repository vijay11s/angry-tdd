import moment from "moment";

const stockPricesDay = Array.from({ length: 100 }, (v, i) => ({
  timestamp: moment("2024-09-01T09:00:00Z")
    .add(i * 15, "minutes")
    .toISOString(),
  price: parseFloat((100 + (Math.random() * 10 - 5)).toFixed(2)),
}));

const stockPricesWeek = Array.from({ length: 7 }, (v, i) => ({
  timestamp: moment("2024-09-01T09:00:00Z").add(i, "days").toISOString(),
  price: parseFloat((100 + (Math.random() * 10 - 5)).toFixed(2)),
}));

const stockPricesMonth = Array.from({ length: 6 }, (v, i) => ({
  timestamp: moment("2024-09-01T09:00:00Z")
    .add(i * 5, "days")
    .toISOString(),
  price: parseFloat((100 + (Math.random() * 10 - 5)).toFixed(2)),
}));

const stockPricesYear = Array.from({ length: 12 }, (v, i) => ({
  timestamp: moment("2024-01-01T09:00:00Z").add(i, "months").toISOString(),
  price: parseFloat((100 + (Math.random() * 10 - 5)).toFixed(2)),
}));

const stockPricesFiveYears = Array.from({ length: 5 }, (v, i) => ({
  timestamp: moment("2020-01-01T09:00:00Z").add(i, "years").toISOString(),
  price: parseFloat((100 + (Math.random() * 20 - 10)).toFixed(2)),
}));

const priceMapper = {
  DAY: stockPricesDay,
  WEEK: stockPricesWeek,
  MONTH: stockPricesMonth,
  YEAR: stockPricesYear,
  "5_YEAR": stockPricesFiveYears,
};

export const getChartData = (activeFilter) => priceMapper[activeFilter];

export const filterTypes = [
  {
    label: "1D",
    value: "DAY",
  },
  {
    label: "1W",
    value: "WEEK",
  },
  {
    label: "1M",
    value: "MONTH",
  },
  {
    label: "1Y",
    value: "YEAR",
  },
  {
    label: "5Y",
    value: "5_YEAR",
  },
];
