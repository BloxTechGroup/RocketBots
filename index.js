const fetch = require('node-fetch');
const api = "https://roblox-rocketapps.bloxtech.tech/roblox/bots";

function request(url, method, headers, body) {
    return new Promise(function (resolve, reject) {
        if (method == "GET") {
            fetch(url, {
                method: method,
                headers: headers,
                credentials: "include"
            }).then(async response => {
                if (response.status == 500) {
                    reject("Internal server error.");
                } else {
                    response.json().then(data => {
                        resolve(data);
                    })
                }
            })
        } else {
            fetch(url, {
                method: method,
                headers: headers,
                body: body,
                credentials: "include"
            }).then(async response => {
                if (response.status == 500) {
                    setTimeout(function () {
                        if (retries <= 15) {
                            request(url, method, headers, body, cb, retries + 1)
                        }
                    }, 1000)
                } else {
                    response.json().then(data => {
                        resolve(data);
                    })
                }
            })
        }
    });
}

class RocketBot {
    constructor(teamId) {
        this.teamId = teamId;
    }
    async info() {
        const response = await request(`${api}/${this.teamId}`, 'GET', {}, {});
        return (response.success ? response.response : { success: false, reason: response.reason });
    }
    async getJoinRequests() {
        const response = await request(`${api}/${this.teamId}/getjoinrequests`, 'GET', {}, {});
        return (response.success ? response.response : { success: false, reason: response.reason });
    }
    async shout(message) {
        const response = await request(`${api}/${this.teamId}/shout`, "POST", { "Content-Type": "application/json" }, JSON.stringify({
            msg: message
        }));
        return (response.success ? response : { success: false, reason: response.reason });
    }
    async messageUser(userId,subject,message) {
        const response = await request(`${api}/${this.teamId}/messageuser`, "POST", { "Content-Type": "application/json" }, JSON.stringify({
            userId: userId,
            subject: subject,
            message: message
        }));
        return (response.success ? response : { success: false, reason: response.reason });
    }
    async approveJoinRequest(userId) {
        const response = await request(`${api}/${this.teamId}/approvejoinrequest`, "POST", { "Content-Type": "application/json" }, JSON.stringify({
            userId: userId,
        }));
        return (response.success ? response : { success: false, reason: response.reason });
    }
    async declineJoinRequest(userId) {
        const response = await request(`${api}/${this.teamId}/declinejoinrequest`, "POST", { "Content-Type": "application/json" }, JSON.stringify({
            userId: userId,
        }));
        return (response.success ? response : { success: false, reason: response.reason });
    }
    async rankInGroup(userId,rankId) {
        const response = await request(`${api}/${this.teamId}/rankingroup`, "POST", { "Content-Type": "application/json" }, JSON.stringify({
            userId: userId,
            rankId: rankId
        }));
        return (response.success ? response : { success: false, reason: response.reason });
    }
    async exile(userId) {
        const response = await request(`${api}/${this.teamId}/exile`, "POST", { "Content-Type": "application/json" }, JSON.stringify({
            userId: userId,
        }));
        return (response.success ? response : { success: false, reason: response.reason });
    }
    async getIdFromUsername(username) {
        const response = await request(`${api}/${this.teamId}/getidfromusername/${username}`, 'GET', {}, {});
        return (response.success ? {success: true, response: response.response} : { success: false, reason: response.reason });
    }
}

module.exports = RocketBot
