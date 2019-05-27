class VersionInfoService {
    _base = "https://my-json-server.typicode.com/svognev/what-s-new-fake-server"
    
    async getInfo(url) {
        const res = await fetch(`${this._base}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}. Res status: ${res.status}`);
        }
        return await res.json();
    }

    async getAllVersionsEN() {
        const versions = await this.getInfo("/en");
        return versions;
    }

    async getAllVersionsDE() {
        const versions = await this.getInfo("/de");
        return versions;
    }

}

export default VersionInfoService;