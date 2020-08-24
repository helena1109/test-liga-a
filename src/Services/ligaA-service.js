
export default class LigaAService {
    _apiBase = 'https://jsonplaceholder.typicode.com/';

    getPosts= async ()=>{
        const res = await fetch(`${this._apiBase}posts`);
        return await res.json();
    }

    getUserbyId= async (id)=>{
        const res = await fetch(`${this._apiBase}users\${id}`);
        return await res.json();
    }

    getUsers= async ()=>{
        const res = await fetch(`${this._apiBase}users`);
        return await res.json();
    }

}

