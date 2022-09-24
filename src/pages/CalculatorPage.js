import { MainDish } from "../components/MainDish";
import { useCallback, useState } from "react";
import Button from "@mui/material/Button";
import { exactProp } from "@mui/utils";
import { Salads } from "../components/Salads";
import { allIngredients } from "../foodData";

export const CalculatorPage = () => {
  const [dishes, setDishes] = useState([]);
  const [salads, setSalads] = useState([]);

  const [ing, setIng] = useState([]);
  // console.log(dishes[0].weight);
  const [meat, setMeat] = useState(0);
  const [paper, setPaper] = useState(0);
  const [visible, setVisible] = useState(false);
  const [button, setButton] = useState(false);

  const [all, setAll] = useState(allIngredients);
  const countProducts = (e) => {
    setButton(true);
    const allFood = [...dishes, ...salads];
    // setAll(allFood);
    for (let i = 0; i < allFood.length; i++) {
      allFood[i].dish.ingredients.forEach((ingredient) => {
        setIng((ing) => [
          ...ing,
          { label: ingredient.label, weight: (ingredient.percent / 100) * allFood[i].weight },
        ]);
      });
    }
  };
  const showTable = () => {
    setVisible(true);
    console.log(ing, "ppp");
    for (let i = 0; i < ing.length; i++) {
      // if (ing[i].label === "Мясо") {
      //   // setMeat((meat) => meat + ing[i].weight);

      //   // console.log(meat + ing[i].weight);

      // }
      // if (ing[i].label === "Перец") {
      //   setPaper((paper) => paper + ing[i].weight);
      //   console.log(paper + ing[i].weight);
      // }
      change("weight", ing[i].weight, ing[i].label);
    }
  };
  console.log(meat);
  function change(weight, kg, name) {
    setAll((all) =>
      all.map((obj) => {
        console.log(obj, name, kg);
        if (obj.label === name) {
          return { ...obj, weight: obj.weight + kg };
        } else {
          return obj;
        }
      }),
    );
  }
  console.log(all);
  return (
    <div>
      <div style={{ width: "500px" }}>
        <MainDish dishes={dishes} setDishes={setDishes} />
        <Salads dishes={salads} setDishes={setSalads} />

        <Button
          variant="contained"
          onClick={(e) => countProducts(e)}
          style={{ display: button ? "none" : "" }}>
          Считать
        </Button>
        <Button
          variant="contained"
          onClick={(e) => showTable(e)}
          style={{ display: button ? "" : "none" }}>
          Table
        </Button>
      </div>

      <table style={{ display: visible ? "" : "none" }}>
        <thead>
          <tr>
            <td>#</td>
            <th style={{ width: "150px" }}>name</th>
            <th>kg</th>
          </tr>
        </thead>
        <tbody>
          {all.map((item, i) => (
            <tr>
              <td>{i + 1}</td>
              <td>{item.label}</td>
              <td>{item.weight.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
