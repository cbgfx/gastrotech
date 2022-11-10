import React from "react";

import CoolButton from "../../Reusable_Components/CoolButton";
import CollapsibleSection from "../../Reusable_Components/CollapsibleSection";
import NavBar from "../../Reusable_Components/NavBar/WhiskeyNavBar";
import Footer from "../../Reusable_Components/Footer";
import recipes from "../../../recipes/syrup.json";
import * as CONST from "../../../constants/constants";

class SyrupsView extends React.Component {
  state = { mountDataSource: [], filteredDataSource: [], passLog: false };

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
    var filteredItemArray = this.state.mountDataSource.filter(function (entry) {
      return entry.type === filtType;
    });
    var sortedFilteredDS = this.sortRecipe(filteredItemArray);
    this.setState({ filteredDataSource: sortedFilteredDS });
  };

  allFilter = () => {
    this.setState({
      mountDataSource: recipes,
      filteredDataSource: recipes,
    });
  };

  clearFilter = (a) => {
    var filteredItemArray = recipes.filter(function (entry) {
      if (entry.hidden === 0) {
        return entry;
      }
      return null;
    });
    var sortedFilteredDS = this.sortRecipe(filteredItemArray);
    this.setState({ filteredDataSource: sortedFilteredDS });
    document.getElementById("sName").value = "";
    document.getElementById("sIngredient").value = "";
  };

  renderSubSection = (rec) => {
    return (
      <div>
        <div className="col" onClick={(e) => e.stopPropagation()}>
          <b>Ingredients:</b>
          <ul>
            {rec.ingredients.map((ing, j) => (
              <React.Fragment key={j}>
                <li>
                  {ing.quantity} {ing.qty} {ing.name}
                </li>
              </React.Fragment>
            ))}
          </ul>
        </div>
        <div className="col" onClick={(e) => e.stopPropagation()}>
          <b>Prep:</b>
          <ul>
            {rec.prep.map((prp, p) => (
              <React.Fragment key={p}>
                <li>
                  Step {prp.step} - {prp.description}
                </li>
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  /*
   */

  render() {
    return (
      <div>
        <NavBar />
        <img
          alt="logo"
          src="https://www.whiskycafe.com/wp-content/uploads/2022/02/logo-4.png"
        />
        <h2>Syrup recipes</h2>
        {this.state.passLog ? (
          <div>
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
                id="sIngredient"
                placeholder="Ingredient"
                onChange={(e) => {
                  this.ingFilter(e.target.value);
                }}
              />
            </div>
            <CoolButton
              title="Clear Filters"
              didClick={() => this.clearFilter("clear")}
              whiskyStyle={true}
            />
            <div>
              {this.state.filteredDataSource.map((rec, i) => (
                <React.Fragment key={i}>
                  <CollapsibleSection
                    id={i}
                    name={rec.name}
                    embededComponent={this.renderSubSection(rec)}
                  />
                </React.Fragment>
              ))}
            </div>

            <div>Recipes : {this.state.filteredDataSource.length}</div>
          </div>
        ) : (
          <p>
            Password:{" "}
            <input
              type="password"
              onChange={(e) => {
                if (CONST.textPass(e.target.value, "siri")) {
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

SyrupsView.defaultProps = {};

export default SyrupsView;
