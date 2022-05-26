import React from "react";

import NavBar from "../../Reusable_Components/NavBar/NavBar";
import AccountsBar from "../../Reusable_Components/NavBar/AccountsBar";
import RecipeModal from "../../Popups/RecipeModal";
import Footer from "../../Reusable_Components/Footer";
import recipes from "../../../constants/recipe.json";


class RecipeView extends React.Component {
  state = { filteredDataSource: [] };

  componentDidMount() {
    this.setState({filteredDataSource: recipes})
  }

  clickedTD = (iRecipe) => {
    console.log("clicked", iRecipe.name)
    this.setState({ showPopup: true });
    return(
      <RecipeModal
        name={iRecipe.name}
        type={iRecipe.yield}
        ingredient={iRecipe.ingredients}
        decoration={iRecipe.decoration}
      />
    )
  };

  gelatoFilter = (filtType) => {
    var newItems = recipes.filter(function (entry) {
      return entry.type === filtType;
  });
  this.setState({filteredDataSource: newItems})
  }

  clearFilter = (a) => {
  this.setState({filteredDataSource: recipes})
  }

  /*
   */

  render() {
    return (
      <div>
        <h2>Recipes</h2>
        <div>
        <button onClick={()=> this.gelatoFilter("Gelato")}>Gelato</button>
        <button onClick={()=> this.gelatoFilter("Sorbet")}>Sorbet</button>
        <button onClick={()=> this.gelatoFilter("Alcoholic")}>Alcoholic</button>
        <button onClick={()=> this.gelatoFilter("Base")}>Base</button>
        <button onClick={()=> this.clearFilter("bah")}>Clear</button>
        </div>
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
            {this.state.filteredDataSource.map((rec, i) => (
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
              <td>Recipes : {this.state.filteredDataSource.length}</td>
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
