import path from "path"
import * as grpc from "@grpc/grpc-js"
import * as protoLoader from "@grpc/proto-loader"
import { ProtoGrpcType } from "./proto/customer"

const PORT = 5001
const PROTO_FILE = './proto/customer.proto'

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE))
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType

const client = new grpcObj.customer.Customer("localhost:5001", grpc.credentials.createInsecure())

client.GetCustomerInfo({ userId: 1 }, (err, result) => {
    if(err) {
        console.error(err)
        return
    }
    console.log(result)
})