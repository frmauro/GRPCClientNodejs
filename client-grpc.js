var grpc = require('grpc');
var protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = './notes.proto';

var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,//
     defaults: true,
     oneofs: true
    });

var NoteService = grpc.loadPackageDefinition(packageDefinition).NoteService;

//const client = new NoteService('127.0.0.1:50051', grpc.credentials.createInsecure());
//const client = new NoteService('localhost:50051', grpc.credentials.createInsecure());
//const client = new NoteService('host.docker.internal', grpc.credentials.createInsecure());
const client = new NoteService('0.0.0.0:50051', grpc.credentials.createInsecure());

//const client = new NoteService('localhost:50051', grpc.credentials.createSsl());
//const client = new NoteService('127.0.0.1:50051', grpc.credentials.createSsl());

module.exports = client;