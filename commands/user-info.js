module.exports = {
	name: 'user-info',
	description: 'Displays info about you.',
	execute(message, args) {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	},
};