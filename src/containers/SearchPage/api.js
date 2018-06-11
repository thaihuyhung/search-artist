import request from '../../utils/request';
import { APP_ID } from '../../utils/constant';

const queryArtist = name => request(`https://rest.bandsintown.com/artists/${name}?app_id=${APP_ID}`);
const queryArtistName = name => request(`/searchSuggestions?searchTerm=${name}&cameFromCode=257`);
const queryArtistEvents = name => request(`https://rest.bandsintown.com/artists/${name}/events?app_id=${APP_ID}`);

export default {
  queryArtist,
  queryArtistName,
  queryArtistEvents
}