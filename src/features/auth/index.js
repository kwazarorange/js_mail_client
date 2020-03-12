/* global gapi */
import { gapiLoad } from "./AuthSlice";
import { CLIENT_ID, API_KEY } from "./gapiAuthData";

const DISCOVERY_DOCS =
  "https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest";
const SCOPES = "https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/gmail.send";

const handleClientLoad = () => {
  return dispatch => {
    gapi.load("client:auth2", () => {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
      });
      gapi.client.load("gmail", "v1", () => {
        dispatch(gapiLoad());
      });
    });
  };
};

export default handleClientLoad;
