module.exports = {
	name: 'ping',
	description: 'Ping!',
	cooldown: 10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,
	execute(message, args) {
		message.channel.send('Pong.');
	},
};