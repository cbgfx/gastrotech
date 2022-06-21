import React from "react";

import CoolButton from "../../Reusable_Components/CoolButton";
import NavBar from "../../Reusable_Components/NavBar/NavBar";
import Footer from "../../Reusable_Components/Footer";
import recipes from "../../../constants/base.json";

class BaseView extends React.Component {
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
        <NavBar />
        <h2>Bases</h2>
        <div>
          <input type="ui search" className="cone" placeholder="Search" onChange={(e) => {this.textFilter(e.target.value);}}/>
        </div>
        <CoolButton title="Clear Filters" didClick={()=> this.clearFilter("clear")} />
        <table className="table table-striped table-hover text-white">
          <thead>
            <tr>
              <th scope="col">Name</th>

              <th scope="col">Ingredients</th>
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
                  <td>{rec.decoration}</td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>Bases : {this.state.filteredDataSource.length}</td>
            </tr>
          </tfoot>
        </table>
        <Footer />
      </div>
    );
  }
}

BaseView.defaultProps = {};

export default BaseView;
