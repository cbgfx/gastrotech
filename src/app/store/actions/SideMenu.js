import japi from "../japi";
import { NPCField, Dispo } from "../../constants/constants";
import { change } from "redux-form";

export const showSideMenu = (category, campaignID) => async (dispatch) => {
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

  dispatch({ type: "SHOW_SIDE_MENU", payload: null });
};

export const hideSideMenu = () => async (dispatch) => {
  dispatch({ type: "HIDE_SIDE_MENU", payload: null });
};

export const didSelectCategory = (categoryType, categoryObj) => async (
  dispatch
) => {
  dispatch({ type: "DID_SELECT_CATEGORY_VALUE", payload: categoryObj });

  switch (categoryType) {
    case NPCField.Disposition:
     dispatch(change("NPCDetailForm", categoryType, categoryObj.name));
      break;
    
    case NPCField.Stats:
      dispatch(change("NPCDetailForm", categoryType, categoryObj));
      break;

    default:
      dispatch(change("NPCDetailForm", categoryType, categoryObj.name));
      break;
  }

  dispatch(hideSideMenu());
};

/* ---- DATA FETCHING ---- */

export const fetchPositions = (campaignID) => async (dispatch) => {
  const response = await japi.get(
    `/positions?campaignID=${campaignID}`
  );
  dispatch({
    type: "GET_POSITIONS_SM",
    payload: { data: response.data, category: NPCField.Position },
  });
};

export const fetchOrganizations = (campaignID) => async (dispatch) => {
  const response = await japi.get(
    `/organizations?campaignID=${campaignID}`
  );
  dispatch({
    type: "GET_ORGANIZATIONS_SM",
    payload: { data: response.data, category: NPCField.Org },
  });
};

export const fetchRaces = (campaignID) => async (dispatch) => {
  const response = await japi.get(`/races?campaignID=${campaignID}`);
  dispatch({
    type: "GET_RACES_SM",
    payload: { data: response.data, category: NPCField.Race },
  });
};

export const fetchStats = (campaignID) => async (dispatch) => {
  const response = await japi.get(`/stats?campaignID=${campaignID}`);
  dispatch({
    type: "GET_STATS_SM",
    payload: { data: response.data, category: NPCField.Stats },
  });
};

export const fetchLocations = (campaignID) => async (dispatch) => {
  const response = await japi.get(
    `/locations?campaignID=${campaignID}`
  );
  dispatch({
    type: "GET_LOCATIONS_SM",
    payload: { data: response.data, category: NPCField.Loc },
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
    type: "GET_DISPOSITIONS_SM",
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

export const createStats = (stats) => async (dispatch) => {
  const response = await japi.post("/stats/create", stats);
  dispatch({ type: "CREATE_STATS_FROM_SM", payload: response.data });
};

export const filterItems = (searchText) => (dispatch, getState) => {
  const completeDataSource = Object.values(getState().sideMenuReducer.values);
  var filteredItemArray = completeDataSource.filter((items) => {
    return items.name.toLowerCase().includes(searchText.toLowerCase());
  });

  dispatch({ type: "FILTER_ITEMS_SM", payload: filteredItemArray });
};
