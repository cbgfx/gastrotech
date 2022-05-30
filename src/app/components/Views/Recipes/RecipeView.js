import React from "react";

import BlueButton from "../../Reusable_Components/BlueButton";
import Footer from "../../Reusable_Components/Footer";
import recipes from "../../../constants/recipe.json";

class RecipeView extends React.Component {
  state = { filteredDataSource: [] };

  componentDidMount() {
    var sortedDataSource = this.sortRecipe(recipes);
    this.setState({ filteredDataSource: sortedDataSource });
  }

  sortRecipe = (ds) => {
    var dataSource = ds.sort((a, b) => a.name.localeCompare(b.name));
    return dataSource;
  };

  textFilter = (a) => {
    var filteredItemArray = recipes.filter((items) => {
      return items.name.toLowerCase().includes(a.toLowerCase());
    });
    var sortedFilteredDS = this.sortRecipe(filteredItemArray);
    this.setState({ filteredDataSource: sortedFilteredDS });
  };

  typeFilter = (filtType) => {
    var filteredItemArray = recipes.filter(function (entry) {
      return entry.type === filtType;
  });
  var sortedFilteredDS = this.sortRecipe(filteredItemArray);
  this.setState({filteredDataSource: sortedFilteredDS})
  }

  baseFilter = (filtType) => {
    var filteredItemArray = recipes.filter(function (entry) {
      return entry.base === filtType;
  });
  var sortedFilteredDS = this.sortRecipe(filteredItemArray);
  this.setState({filteredDataSource: sortedFilteredDS})
  }

  clearFilter = (a) => {
    this.setState({ filteredDataSource: recipes });
  };

  /*
   */

  render() {
    return (
      <div>
        <h2>Recipes</h2>
        <div>
          <input type="ui search" placeholder="Search" onChange={(e) => {this.textFilter(e.target.value);}}/>
        </div>
        <div>
          Filter by Type:
          <BlueButton title="Alcoholic" didClick={()=> this.typeFilter("Alcoholic")} />
          <BlueButton title="Sorbet" didClick={()=> this.typeFilter("Sorbet")} />
          <BlueButton title="Gelato" didClick={()=> this.typeFilter("Gelato")} />
          <BlueButton title="Bases" didClick={()=> this.typeFilter("Base")} />
        </div>
        <div>
          Filter by Base:
          <BlueButton title="White Sugar" didClick={()=> this.baseFilter("White Sugar")} />
          <BlueButton title="White Fat" didClick={()=> this.baseFilter("White Fat")} />
          <BlueButton title="Chocolate" didClick={()=> this.baseFilter("Chocolate")} />
        </div>
        <BlueButton title="Clear Filters" didClick={()=> this.clearFilter("clear")} />
        <table className="table table-striped table-hover text-white">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Type</th>
              <th scope="col">Yield</th>
              <th scope="col">Base</th>
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
                  <td>{rec.base}</td>
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
