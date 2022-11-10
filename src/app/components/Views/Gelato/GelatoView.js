import React from "react";

import CoolButton from "../../Reusable_Components/CoolButton";
import NavBar from "../../Reusable_Components/NavBar/ConeNavBar";
import Footer from "../../Reusable_Components/Footer";
import recipes from "../../../recipes/gelato.json";

class GelatoView extends React.Component {
  state = {
    filteredDataSource: [],
    colYield: true,
    colBase: true,
    colDeco: true,
    colIng: true,
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
    for (var i = 0; i < recipes.length; i++) {
      var filteredIngs = recipes[i].ingredients.filter((entry) => {
        return entry.name.toLowerCase().includes(a.toLowerCase());
      });
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
    this.setState({ filteredDataSource: sortedFilteredDS });
  };

  decoFilter = () => {
    var filteredItemArray = recipes.filter(function (entry) {
      if (entry.hasOwnProperty("decoration")) {
        return entry;
      }
      return null;
    });
    var sortedFilteredDS = this.sortRecipe(filteredItemArray);
    this.setState({ filteredDataSource: sortedFilteredDS });
  };

  baseFilter = (filtType) => {
    var filteredItemArray = recipes.filter(function (entry) {
      return entry.base === filtType;
    });
    var sortedFilteredDS = this.sortRecipe(filteredItemArray);
    this.setState({ filteredDataSource: sortedFilteredDS });
  };

  clearFilter = (a) => {
    this.setState({
      filteredDataSource: recipes,
      colBase: true,
      colDeco: true,
      colIng: true,
      colYield: true,
    });
    document.getElementById('sName').value = ''
  };

  /*
   */

  render() {
    return (
      <div>
        <NavBar />
        <h2>Recipes</h2>
        <div>
          <input
            type="ui search"
            placeholder="Name"
            id="sName"
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
        </div>
        <div>
          Filter by Type:
          <CoolButton
            title="Alcoholic"
            didClick={() => this.typeFilter("Alcoholic")}
          />
          <CoolButton
            title="Sorbet"
            didClick={() => this.typeFilter("Sorbet")}
          />
          <CoolButton
            title="Gelato"
            didClick={() => this.typeFilter("Gelato")}
          />
          <CoolButton title="Decoration" didClick={() => this.decoFilter()} />
        </div>
        <div>
          Filter by Base:
          <CoolButton
            title="White Sugar"
            didClick={() => this.baseFilter("White Sugar")}
          />
          <CoolButton
            title="White Fat"
            didClick={() => this.baseFilter("White Fat")}
          />
          <CoolButton
            title="Chocolate"
            didClick={() => this.baseFilter("Chocolate")}
          />
          <CoolButton
            title="Sprint"
            didClick={() => this.baseFilter("Sprint")}
          />
        </div>
        <CoolButton
          title="Clear Filters"
          didClick={() => this.clearFilter("clear")}
        />
        <table className="table table-striped table-hover text-white">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Type</th>
              {this.state.colYield ? (
                <th scope="col">
                  <span onClick={() => this.setState({ colYield: false })}>
                    Yield
                  </span>
                </th>
              ) : null}
              {this.state.colBase ? (
                <th scope="col">
                  <span onClick={() => this.setState({ colBase: false })}>
                    Base
                  </span>
                </th>
              ) : null}
              {this.state.colIng ? (
                <th scope="col">
                  <span onClick={() => this.setState({ colIng: false })}>
                    Ingredients
                  </span>
                </th>
              ) : null}
              {this.state.colDeco ? (
                <th scope="col">
                  <span onClick={() => this.setState({ colDeco: false })}>
                    Decoration
                  </span>
                </th>
              ) : null}
            </tr>
          </thead>
          <tbody>
            {this.state.filteredDataSource.map((rec, i) => (
              <React.Fragment key={i}>
                <tr onClick={() => this.clickedTD(rec)}>
                  <td>{rec.name}</td>
                  <td>{rec.type}</td>
                  {this.state.colYield ? <td>{rec.yield}</td> : null}
                  {this.state.colBase ? <td>{rec.base}</td> : null}
                  {this.state.colIng ? (
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
                  ) : null}
                  {this.state.colDeco ? <td>{rec.decoration}</td> : null}
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

GelatoView.defaultProps = {};

export default GelatoView;
