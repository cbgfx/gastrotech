import React from "react";

import CoolButton from "../../Reusable_Components/CoolButton";
import NavBar from "../../Reusable_Components/NavBar/NavBar";
import Footer from "../../Reusable_Components/Footer";
import recipes from "../../../constants/cocktails.json";
import * as CONST from "../../../constants/constants";

class DrinksView extends React.Component {
  state = { mountDataSource: [], filteredDataSource: [], passLog: false };

  componentDidMount() {
    var filteredItemArray = recipes.filter(function (entry) {
      if (!entry.hasOwnProperty("hidden")) {
        return entry;
      }
      return null;
    });
    var sortedFilteredDS = this.sortRecipe(filteredItemArray);
    this.setState({
      mountDataSource: sortedFilteredDS,
      filteredDataSource: sortedFilteredDS,
    });
  }

  sortRecipe = (ds) => {
    var dataSource = ds.sort((a, b) => a.name.localeCompare(b.name));
    return dataSource;
  };

  textFilter = (a) => {
    var filteredItemArray = this.state.mountDataSource.filter((items) => {
      return items.name.toLowerCase().includes(a.toLowerCase());
    });
    var sortedFilteredDS = this.sortRecipe(filteredItemArray);
    this.setState({ filteredDataSource: sortedFilteredDS });
  };

  ingFilter = (a) => {
    var filtered = [];
    for (var i = 0; i < this.state.mountDataSource.length; i++) {
      var filteredIngs = this.state.filteredDataSource[i].ingredients.filter(
        (entry) => {
          return entry.name.toLowerCase().includes(a.toLowerCase());
        }
      );
      if (filteredIngs.length > 0) {
        filtered.push(this.state.filteredDataSource[i]);
      }
    }
    var sortedFilteredDS = this.sortRecipe(filtered);
    this.setState({ filteredDataSource: sortedFilteredDS });
  };

  typeFilter = (filtType) => {
    var filteredItemArray = this.state.mountDataSource.filter(function (entry) {
      return entry.type === filtType;
    });
    var sortedFilteredDS = this.sortRecipe(filteredItemArray);
    this.setState({ filteredDataSource: sortedFilteredDS });
  };

  comFilter = () => {
    var filteredItemArray = this.state.mountDataSource.filter(function (entry) {
      if (entry.hasOwnProperty("com")) {
        return entry;
      }
      return null;
    });
    var sortedFilteredDS = this.sortRecipe(filteredItemArray);
    this.setState({ filteredDataSource: sortedFilteredDS });
  };

  clearFilter = (a) => {
    var filteredItemArray = recipes.filter(function (entry) {
      if (!entry.hasOwnProperty("hidden")) {
        return entry;
      }
      return null;
    });
    var sortedFilteredDS = this.sortRecipe(filteredItemArray);
    this.setState({ filteredDataSource: sortedFilteredDS });
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
              <input
                type="ui search"
                placeholder="Name"
                onChange={(e) => {
                  this.textFilter(e.target.value);
                }}
              />
              <input
                type="ui search"
                placeholder="Ingredient"
                onChange={(e) => {
                  this.ingFilter(e.target.value);
                }}
              />
              <div>
                <CoolButton
                  title="Cocktail of the Month"
                  didClick={() => this.comFilter()}
                />
              </div>
            </div>
            <CoolButton
              title="Clear Filters"
              didClick={() => this.clearFilter("clear")}
              whiskyStyle={true}
            />
            <table className="table table-striped table-hover text-white">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Ingredients</th>
                  <th scope="col">Glassware</th>
                  <th scope="col">Garnish</th>
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
                      <td>{rec.glass}</td>
                      <td>{rec.garnish}</td>
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
          </div>
        ) : (
          <p>
            Password:{" "}
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                if (CONST.textPass(e.target.value, "peter")) {
                  this.setState({ passLog: true });
                }
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
