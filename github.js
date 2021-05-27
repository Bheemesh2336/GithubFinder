class GitHub {
    constructor() {
        // Register Applucation https://github.com/settings/applications
        this.clientid = '85cb53881ccd87faf976';
        this.client_secret = 'ead1bf0a31ae8f50eedf749d0c1cec70ab2241ac';
        this.repos_count = 5;
        this.repos_sort = 'created:asc';
    }
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientid}&client_secret=${this.client_secret}`);
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.clientid}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        const repos = await reposResponse.json();
        return {
            profile,
            repos
        }
    }
}