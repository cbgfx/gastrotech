import React from "react";

import NavBar from "../../Reusable_Components/NavBar/NavBar";
import AccountsBar from "../../Reusable_Components/NavBar/AccountsBar";
import Footer from "../../Reusable_Components/Footer";
import recipes from "../../../constants/recipe.json";

class RecipeView extends React.Component {
  state = { showPopup: false };

  componentDidMount() {}

  showHidePopup = () => {
    this.setState({ showPopup: !this.state.showPopup });
  };

  clickedTD = (iRecipe) => {
    console.log(iRecipe);
  };

  /*
   */

  render() {
    return (
      <div>
        <h2>Recipes</h2>
        <table className="table table-striped table-hover text-white">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Type</th>
              <th scope="col">Yield</th>
              <th scope="col">Ingredients</th>
              <th scope="col">Decoration</th>
            </tr>
          </thead>
          <tbody>
            {recipes.map((rec, i) => (
              <React.Fragment key={i}>
                <tr onClick={() => this.clickedTD(rec)}>
                  <td>{rec.name}</td>
                  <td>{rec.type}</td>
                  <td>{rec.yield} pans</td>
                  <td>
                    <ul>
                      {rec.ingredients.map((ing, j) => (
                        <React.Fragment key={j}>
                          <li>
                            {ing.quantity} {ing.qty} of {ing.name}
                          </li>
                        </React.Fragment>
                      ))}
                    </ul>
                  </td>
                  <td>{rec.decoration}</td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>Recipes : {recipes.length}</td>
            </tr>
          </tfoot>
        </table>
        <Footer />
      </div>
    );
  }
}

RecipeView.defaultProps = {};

export default RecipeView;
