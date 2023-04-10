import axios from 'axios';

export default class CharacterRepository {
    findAll(page){
        return axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
    }
}