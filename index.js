const axios = require("axios");
const fs = require("fs");

const LineNotify = class LineNotify {
	constructor(token) {
		this.token = token;
		this.urlCheckStatus = "https://notify-api.line.me/api/status";
		this.urlNotify = "https://notify-api.line.me/api/notify";
	}

	checkStatus() {
		return axios({
			method: "get",
			url: this.urlCheckStatus,
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				Authorization: `Bearer ${this.token}`,
			},
		})
			.then((res) => {
				return res.data;
			})
			.catch((err) => {
				return err.response.data;
			});
	}

	sendMessage(message) {
		return axios({
			method: "post",
			url: this.urlNotify,
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				Authorization: `Bearer ${this.token}`,
			},
			data: {
				message: message,
			},
		})
			.then((res) => {
				return res.data;
			})
			.catch((err) => {
				return err.response.data;
			});
	}

	sendFile(message, imagePath) {
		return axios({
			method: "post",
			url: this.urlNotify,
			headers: {
				"Content-Type": "multipart/form-data",
				Authorization: `Bearer ${this.token}`,
			},
			data: {
				message: message,
				imageFile: fs.createReadStream(imagePath),
			},
		})
			.then((res) => {
				return res.data;
			})
			.catch((err) => {
				return err.message || err.response.data;
			});
	}
};
module.exports = LineNotify;


