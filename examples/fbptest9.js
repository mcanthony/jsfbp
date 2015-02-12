var fbp = require('..');

// --- define network ---
var sender = fbp.defProc('./components/sender');
var copier = fbp.defProc('./components/copier_closing');
var recvr = fbp.defProc('./components/recvr');

fbp.initialize(sender, 'COUNT', '200');
fbp.connect(sender, 'OUT', copier, 'IN', 5);
fbp.connect(copier, 'OUT', recvr, 'IN', 1);

// --- run ---
fbp.run({ trace: false });
