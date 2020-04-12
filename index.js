const easymidi = require('easymidi');

const avenue = new easymidi.Output('ReMidi from Reason', true);
const reason = new easymidi.Input('ReMidi to Avenue', true);

reason.on('noteon', ({_type: type, channel, note, velocity}) => {
	console.log('Output from Reason', {type, channel, note, velocity});
	avenue.send(type, {channel, note, velocity});
});

reason.on('noteoff', ({_type: type, channel, note, velocity}) => {
	console.log('Output from Reason', {type, channel, note, velocity});
	avenue.send(type, {channel, note, velocity});
});

reason.on('cc', ({_type: type, controller, value, channel}) => {
	console.log('Output from Reason', {type, controller, value, channel});
	avenue.send(type, {controller, value, channel});
});

console.log('ReMidi is running!');
