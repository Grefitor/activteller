export class Player {
	name: string;
	id: string;
	image: string;

	constructor(name: string) {
		this.name = name
		this.id = this._generateUniqueId()
		this.image = `https://joeschmoe.io/api/v1/${name}`;
	}

	_generateUniqueId() {
		let s4 = () => {
			return Math.floor((1 + Math.random()) * 0x10000)
					.toString(16)
					.substring(1);
	}
	//return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
	return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4(); 
	}
}