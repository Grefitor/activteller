export class JokeModel {
    id?:     string;
    joke?:   string;

    constructor(data: {id?: string, joke?: string}) {
        this.id = data.id;
        this.joke = data.joke;
    }
}
