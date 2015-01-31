
var fbp = require('./fbp.js');
  
// --- define network ---

var reader = fbp.defProc('./reader.js', 'reader');
var reader2 = fbp.defProc('./reader.js', 'reader', 2);
var copier = fbp.defProc('./copier.js', 'copier');
var recvr = fbp.defProc('./recvr.js', 'recvr');

fbp.initialize(reader, 'FILE', './text.txt');
fbp.connect(reader, 'OUT', copier, 'IN', 5);
fbp.initialize(reader2, 'FILE', './zzzs.txt');
fbp.connect(reader2, 'OUT', copier, 'IN', 5);
fbp.connect(copier, 'OUT', recvr, 'IN', 5);

var trace = false;
// --- run ---  
fbp.run(trace);