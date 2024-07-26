
const fs = require("fs");

module.exports.config = {
		name: "prefix",
		version: "1.0.1",
		role: 0,
		credits: "cliff",
		description: "Display the prefix of your bot",
		hasPrefix: false,
		usages: "prefix",
		cooldown: 5,
		aliases: ["prefix", "Prefix", "PREFIX", "prefi"],
};

module.exports.run = function ({ api, event, prefix, admin }) {
		const { threadID, messageID } = event;

		if (event.body.toLowerCase() === `${prefix}prefix`) {
				api.sendMessage(
						"This command cannot be executed manually.",
						threadID,
						messageID
				);
				return;
		}

		api.sendMessage(
				{
						body: `🎯𝘀𝘆𝘀𝘁𝗲𝗺𝘀 𝗽𝗿𝗲𝗳𝗶𝘅 𝗶𝘀 [ ${prefix} ]\𝗻🎯𝘆𝗼𝘂𝗿 𝗰𝗵𝗮𝘁𝗯𝗼𝘁 𝗽𝗿𝗲𝗳𝗶𝘅 𝗶𝘀 [ ${prefix} ]`,
						attachment: fs.createReadStream(__dirname + "/cache2/prefix.jpeg")
				},
				threadID,
				(err, messageInfo) => {
						if (err) return console.error(err);

						const voiceFile = fs.readFileSync(__dirname + "https://i.imgur.com/YGqmflw.jpeg");
						api.sendMessage(
								{
										attachment: voiceFile,
										type: "audio",
										body: "Hey, listen to my prefix information!",
								},
								threadID,
								() => {}
						);
						api.setMessageReaction("🚀", messageInfo.messageID, (err) => {}, true);
				}
		);
};
