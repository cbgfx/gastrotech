import japi from "../japi";
import { NPCField, Dispo } from "../../constants/constants";

export const showFilterView = (category, campaignID) => async (dispatch) => {
  switch (category) {
    case NPCField.Position:
      dispatch(fetchPositions(campaignID));
      break;
    case NPCField.Loc:
      dispatch(fetchLocations(campaignID));
      break;
    case NPCField.Race:
      dispatch(fetchRaces(campaignID));
      break;
    case NPCField.Org:
      dispatch(fetchOrganizations(campaignID));
      break;
    case NPCField.Disposition:
      dispatch(fetchDispositions(campaignID));
      break;
    case NPCField.Stats:
      dispatch(fetchStats(campaignID));
      break;
    default:
      break;
  }

  dispatch({ type: "SHOW_FILTER_VIEW", payload: null });
};

export const hideFilterView = () => async (dispatch) => {
  dispatch({ type: "HIDE_FILTER_VIEW", payload: null });
};

export const clearFilterSelection = () => async (dispatch, getState) => {
  const completeDataSource = Object.values(getState().npcsViewReducer.npcs);

  dispatch({ type: "CLEAR_FILTER_SELECTION", payload: null });
  dispatch({ type: "FILTER_NPCS", payload: completeDataSource });
};

export const didSelectFilterValue = (categoryType, categoryObj) => async (
  dispatch
) => {
  switch (categoryType) {
    default:
      dispatch({
        type: "DID_SELECT_FILTER_CATEGORY_VALUE",
        payload: categoryObj,
      });
      break;
  }
};

export const didToggleMet = () => (dispatch, getState) => {
  const metButtonValue = getState().filterViewReducer.metSelected;

  switch (metButtonValue) {
    case null:
      return dispatch({ type: "DID_TOGGLE_MET", payload: true });

    case true:
      return dispatch({ type: "DID_TOGGLE_MET", payload: false });

    case false:
      return dispatch({ type: "DID_TOGGLE_MET", payload: null });
    default:
      return;
  }
};

export const didToggleAlive = () => (dispatch, getState) => {
  const aliveButtonValue = getState().filterViewReducer.aliveSelected;
 
  switch (aliveButtonValue) {
    case null:
      return dispatch({ type: "DID_TOGGLE_ALIVE", payload: true });

    case true:
      return dispatch({ type: "DID_TOGGLE_ALIVE", payload: false });

    case false:
      return dispatch({ type: "DID_TOGGLE_ALIVE", payload: null });
    
      default:
        return;
  }
};

export const filterNPCs = () => (dispatch, getState) => {

  var temp = [];
  var secondTemp = []; // Maybe this should hold some value instead of being empty ?
  var filteredByValue = [];
  var thirdTemp = [];

  const selectedFilterValues = getState().filterViewReducer.selectedFilterValues;
  const completeDataSource = Object.values(getState().npcsViewReducer.npcs);


  for (const [category, value] of Object.entries(selectedFilterValues)) {

    if (category === "alive" || category === "met") {
      switch (value) {
        case null:
          if (category === "alive") {
            dispatch({ type: "NULLIFY_ALIVE", payload: null})
          }
          if (category === "met") {
            dispatch({ type: "NULLIFY_MET", payload: null})
          }
          if (thirdTemp.length === 0) {
            secondTemp = completeDataSource
          } else {
            secondTemp = thirdTemp;
          }
          break;

        default:
          if (temp.length === 0) {
            temp = completeDataSource;
          } else {
            temp = secondTemp;
            secondTemp = [];
            thirdTemp = secondTemp;
          }
      
          filteredByValue = temp.filter(function (npc) {
            if (npc[category] === value) {
              return true;
            }
            return false;
          });
          
      }
      secondTemp.push(...filteredByValue);
      
    } else {
      if (temp.length === 0) {
        temp = completeDataSource;
      } else {
        temp = secondTemp;
        secondTemp = [];
        thirdTemp = secondTemp;
      }
  
      for (const [id, value] of Object.entries(selectedFilterValues[category])) {
        filteredByValue = temp.filter(function (npc) {
          if (npc[category] === value) {
            console.log(id)
            return true;
          }
          return false;
        });
  
        secondTemp.push(...filteredByValue);
        thirdTemp = secondTemp;
      }

    }

  }

  dispatch({ type: "FILTER_NPCS", payload: secondTemp });
};

export const filterText = (searchText) => (dispatch, getState) => {
  
  var temp = [];
  var secondTemp = [];

  const completeDataSource = Object.values(getState().filterViewReducer.values);
  //TODO: Tie in to the rest
  if (temp.length === 0) {
    temp = completeDataSource;
  } else {
    temp = secondTemp;
    secondTemp = [];
  }

  var filteredItemArray = temp.filter((items) => {
    return items.name.toLowerCase().includes(searchText.toLowerCase());
  });
  dispatch({ type: "FILTER_ITEMS_FM", payload: filteredItemArray });
};

/* ---- DATA FETCHING ---- */

export const fetchPositions = (campaignID) => async (dispatch) => {
  const response = await japi.get(
    `/positions?campaignID=${campaignID}`
  );
  dispatch({
    type: "GET_POSITIONS_FM",
    payload: { data: response.data, category: NPCField.Position },
  });
};

export const fetchOrganizations = (campaignID) => async (dispatch) => {
  const response = await japi.get(
    `/organizations?campaignID=${campaignID}`
  );
  dispatch({
    type: "GET_ORGANIZATIONS_FM",
    payload: { data: response.data, category: NPCField.Org },
  });
};

export const fetchRaces = (campaignID) => async (dispatch) => {
  const response = await japi.get(`/races?campaignID=${campaignID}`);
  dispatch({
    type: "GET_RACES_FM",
    payload: { data: response.data, category: NPCField.Race },
  });
};

export const fetchStats = (campaignID) => async (dispatch) => {
  const response = await japi.get(`/stats?campaignID=${campaignID}`);
  dispatch({
    type: "GET_STATS_FM",
    payload: { data: response.data, category: NPCField.Stats },
  });
};

export const fetchLocations = (campaignID) => async (dispatch) => {
  const response = await japi.get(
    `/locations?campaignID=${campaignID}`
  );
  const cityLoc = []
  response.data.map((location, i) => (
    location.cities.map((city, y) => (
    cityLoc.push({name: city.name, _id: city._id})
    ))
  ))
  cityLoc.sort((a, b) => (a.name > b.name) ? 1 : -1 )
  dispatch({
    type: "GET_LOCATIONS_FM",
    payload: { data: cityLoc, category: NPCField.Loc },
  });
};

export const fetchDispositions = () => async (dispatch) => {
  const Disposition = [
    { name: Dispo.Rival, _id: 0 },
    { name: Dispo.Enemy, _id: 1 },
    { name: Dispo.Neutral, _id: 2 },
    { name: Dispo.Friendly, _id: 3 },
    { name: Dispo.Ally, _id: 4 },
  ];
  dispatch({
    type: "GET_DISPOSITIONS_FM",
    payload: { data: Disposition, category: NPCField.Disposition },
  });
};

/* Isn't Required in Side Menu, will leave it because we need it
export const fetchRelationships = (campaignID) => async (dispatch) => {
  const response = await japi.get(
    `/relationships?campaignID=${campaignID}`
  );
  dispatch({
    type: "GET_RELATIONSHIPS_SM",
    payload: { data: response.data, category: NPCField.Disposition },
  });
};
*/

/*** DATA CREATION */

export const createPosition = (position) => async (dispatch) => {
  const response = await japi.post("/positions/create", position);
  dispatch({ type: "CREATE_POSITION_FROM_SM", payload: response.data });
};

export const createOrganization = (organization) => async (dispatch) => {
  const response = await japi.post("/organizations/create", organization);
  dispatch({ type: "CREATE_ORGANIZATION_FROM_SM", payload: response.data });
};

export const createRace = (race) => async (dispatch) => {
  const response = await japi.post("/races/create", race);
  dispatch({ type: "CREATE_RACE_FROM_SM", payload: response.data });
};
