class VersionInfoService {
    _base = "https://my-json-server.typicode.com/svognev/";
    
    async getInfo(url, noCors) {
        const res = noCors ? await fetch(url, "no-cors") : await fetch(url);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}. Res status: ${res.status}`);
        }
        return await res.json();
    }

    async getAllVersions(lang) {
        const versions = await this.getInfo(`${this._base}${lang}-main/versions`);
        document.getElementsByClassName(`footer_${lang}`)[0].style.display = "block";
        return versions;
    }

    async getVersionDetails(lang, num) {
        const versionDetails = await this.getInfo(`${this._base}${lang}-${num.replace(".", "-")}/features`);
        document.getElementsByClassName(`footer_${lang}`)[0].style.display = "block";
        return versionDetails;
    }

}

export default VersionInfoService;