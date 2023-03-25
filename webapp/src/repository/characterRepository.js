import axios from 'axios';

export default class CharacterRepository {
    findAll(){
        return axios.get("https://rickandmortyapi.com/api/character")
    }
}