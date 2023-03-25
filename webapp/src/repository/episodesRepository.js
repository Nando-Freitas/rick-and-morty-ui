import axios from 'axios';

export default class EpisodesRepository {
    findAll() {
        return axios.get("https://rickandmortyapi.com/api/episode");
    }
}