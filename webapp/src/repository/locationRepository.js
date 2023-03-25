import axios from 'axios';

export default class LocationRepository {
    findAll(){
        return axios.get("https://rickandmortyapi.com/api/location");
    }
}