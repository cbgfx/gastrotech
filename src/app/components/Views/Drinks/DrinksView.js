import React from "react";

import CoolButton from "../../Reusable_Components/CoolButton";
import NavBar from "../../Reusable_Components/NavBar/NavBar";
import Footer from "../../Reusable_Components/Footer";
import recipes from "../../../constants/cocktails.json";

class DrinksView extends React.Component {
  state = { filteredDataSource: [], passLog: false };

  textPass = (input, password) => {
    if (input.toLowerCase() === password) {
      this.setState({ passLog: true });
    }
  };

  
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

  ingFilter = (a) => {
    var filtered = [];
    for(var i = 0; i < recipes.length; i++) {
      var filteredIngs = recipes[i].ingredients.filter((entry)  => {
        return entry.name.toLowerCase().includes(a.toLowerCase());
      })
      if (filteredIngs.length > 0) {
        filtered.push(recipes[i]);
      }
    }
    var sortedFilteredDS = this.sortRecipe(filtered);
    this.setState({ filteredDataSource: sortedFilteredDS });
  };

  typeFilter = (filtType) => {
    var filteredItemArray = recipes.filter(function (entry) {
      return entry.type === filtType;
    });
    var sortedFilteredDS = this.sortRecipe(filteredItemArray);
    this.setState({ filteredDataSource: sortedFilteredDS })
  }

  decoFilter = () => {
    console.log("Deco Filter");

    var filteredItemArray = recipes.filter(function (entry) {
      if (entry.hasOwnProperty("decoration")) {
        return entry;
      }
      return null;
    });
    var sortedFilteredDS = this.sortRecipe(filteredItemArray);
    this.setState({ filteredDataSource: sortedFilteredDS })
  }


  clearFilter = (a) => {
    this.setState({ filteredDataSource: recipes });
  };

  /*
   */

  render() {
    return (
      <div>
        <NavBar />
        <h2>Drink recipes</h2>
        {this.state.passLog ? (
        <div>
        <div>
          <input type="ui search"  placeholder="Name" onChange={(e) => { this.textFilter(e.target.value); }} />
          <input type="ui search"  placeholder="Ingredient" onChange={(e) => { this.ingFilter(e.target.value); }} />
        </div>
        <CoolButton title="Clear Filters" didClick={() => this.clearFilter("clear")} whiskyStyle={true} />
        <table className="table table-striped table-hover text-white">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Ingredients</th>
              <th scope="col">Preparation</th>
            </tr>
          </thead>
          <tbody>
            {this.state.filteredDataSource.map((rec, i) => (
              <React.Fragment key={i}>
                <tr onClick={() => this.clickedTD(rec)}>
                  <td>{rec.name}</td>
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
                  <td>
                    <ul>
                      {rec.prep.map((prp, p) => (
                        <React.Fragment key={p}>
                          <li>
                           Step {prp.step} - {prp.description}
                          </li>
                        </React.Fragment>
                      ))}
                    </ul>
                  </td>
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
        </div>) : (
          <p>
          Password:{" "}
          <input
            type="ui search"
            placeholder="Password"
            onChange={(e) => {
              this.textPass(e.target.value);
            }}
          />{" "}
        </p>
        )}
        <Footer />
      </div>
    );
  }
}

DrinksView.defaultProps = {};

export default DrinksView;
