// 1. Імпортуємо хук
import { useSelector, useDispatch } from "react-redux";
// 2. Імпортуємо фабрику екшену
import { setStatusFilter } from "../../redux/filtersSlice";

import { Button } from "../Button/Button";
import css from "./StatusFilter.module.css";

export const StatusFilter = () => {
  // 3. Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();

  // Отримуємо значення фільтра із стану Redux
  const filter = useSelector(state => state.filters.status);

  // 4. Викликаємо фабрику екшену та передаємо значення фільтра
  // 5. Відправляємо результат - екшен зміни фільтра
  const handleFilterChange = filter =>
    dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button onClick={() => handleFilterChange("all")}>
        All {filter === "all" && "is active"}
      </Button>
      <Button onClick={() => handleFilterChange("active")}>
        Active {filter === "active" && "is active"}
      </Button>
      <Button
        onClick={() => handleFilterChange("completed")}
      >
        Completed {filter === "completed" && "is active"}
      </Button>
    </div>
  );
};
