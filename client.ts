import path from "path";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { ProtoGrpcType } from "./proto/greet";

const PORT = 5001;
const PROTO_FILE = "./proto/greet.proto";

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE));
const grpcObj = grpc.loadPackageDefinition(
  packageDef
) as unknown as ProtoGrpcType;

const deadline = new Date();
deadline.setSeconds(deadline.getSeconds() + 10);

const client = new grpcObj.greet.Greeter(
  `localhost:5034`,
  grpc.credentials.createInsecure(),
  {
    "grpc.keepalive_timeout_ms": 5000,
  }
);

client.waitForReady(deadline, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  onClientReady();
});

const onClientReady = () => {
  client.SayHello({ name: "Asd" }, (err, result) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(result);
  });
};
