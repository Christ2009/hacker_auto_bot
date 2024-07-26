const axios = require('axios');

module.exports = {
    name: 'ai',
    description: 'An AI command powered by Neuronspike, modified by joshua apostol',
    aliases: ['globalGPT'],
    cooldown: 3,
    nashPrefix: false,
    execute: async (api, event, args) => {
        const input = args.join(' ');

        if (!input) {
            api.sendMessage(
                `👻 𝐂𝐡𝐫𝐢𝐬 𝐡𝐚𝐜𝐤𝐞𝐫\n━━━━━━━━━\n\nsalut moi c'est mark l'assistant virtuel de metoushela walker\nJe dispose de 8cmd au total\n faite info pour voir toutes mes cmd..🎯`,
                event.threadID,
                event.messageID
            );
            return;
        }

        api.sendMessage(`👻𝘼𝙩𝙩𝙚𝙣𝙙𝙨 𝙪𝙣𝙚 𝙢𝙞𝙣𝙪𝙩𝙚 𝙨𝙤𝙞𝙨 𝙪𝙣 𝙥𝙚𝙪 𝙥𝙖𝙩𝙞𝙚𝙣𝙩...😈`, event.threadID, event.messageID);

        try {
            const { data } = await axios.get(`https://api.easy-api.online/v1/globalgpt?q=${encodeURIComponent(input)}`);
            const response = data.content;

            const finalResponse = `👻 𝐂𝐡𝐫𝐢𝐬 𝐡𝐚𝐜𝐤𝐞𝐫\n━━━━━━━━━━\n\n${response}\n\n━━━━━━━━━━\n`;
            api.sendMessage(finalResponse, event.threadID, event.messageID);
        } catch (error) {
            api.sendMessage('An error occurred while processing your request, please try sending your question again', event.threadID, event.messageID);
            console.error(error);
        }
    },
};
