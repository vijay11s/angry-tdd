import { filterTypes } from "../data";

function Filters({ activeFilter, changeFilter }) {
  return (
    <div className="fiter-container">
      {filterTypes.map((filter) => (
        <SingleFilter
          {...filter}
          key={filter.value}
          isActive={activeFilter === filter.value}
          changeFilter={changeFilter}
        />
      ))}
    </div>
  );
}

export default Filters;

function SingleFilter({ label, value, isActive, changeFilter }) {
  return (
    <div
      onClick={() => changeFilter(value)}
      className={`filter ${isActive ? "active-filter" : ""}`}
    >
      <p>{label}</p>
    </div>
  );
}
