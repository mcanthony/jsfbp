var fbp = require('..')
  , path = require('path');

// --- define network ---
var network = new fbp.Network();

var gendata = network.defProc('./examples/components/gendata.js');
var reader = network.defProc('./components/reader.js');
var copier = network.defProc('./components/copier.js');
var recvr  = network.defProc('./components/recvr.js');

network.initialize(gendata, 'COUNT', '20');
network.connect(gendata, 'OUT', copier, 'IN', 5);
network.initialize(reader, 'FILE', path.resolve(__dirname, 'data/text.txt'));
network.connect(reader, 'OUT', copier, 'IN', 5);
network.connect(copier, 'OUT', recvr, 'IN', 5);

// --- run ---
var fiberRuntime = new fbp.FiberRuntime();
network.run(fiberRuntime, { trace: false });