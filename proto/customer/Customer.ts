// Original file: proto/customer.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CustomerLookupModel as _customer_CustomerLookupModel, CustomerLookupModel__Output as _customer_CustomerLookupModel__Output } from '../customer/CustomerLookupModel';
import type { CustomerModel as _customer_CustomerModel, CustomerModel__Output as _customer_CustomerModel__Output } from '../customer/CustomerModel';

export interface CustomerClient extends grpc.Client {
  GetCustomerInfo(argument: _customer_CustomerLookupModel, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_customer_CustomerModel__Output>): grpc.ClientUnaryCall;
  GetCustomerInfo(argument: _customer_CustomerLookupModel, metadata: grpc.Metadata, callback: grpc.requestCallback<_customer_CustomerModel__Output>): grpc.ClientUnaryCall;
  GetCustomerInfo(argument: _customer_CustomerLookupModel, options: grpc.CallOptions, callback: grpc.requestCallback<_customer_CustomerModel__Output>): grpc.ClientUnaryCall;
  GetCustomerInfo(argument: _customer_CustomerLookupModel, callback: grpc.requestCallback<_customer_CustomerModel__Output>): grpc.ClientUnaryCall;
  getCustomerInfo(argument: _customer_CustomerLookupModel, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_customer_CustomerModel__Output>): grpc.ClientUnaryCall;
  getCustomerInfo(argument: _customer_CustomerLookupModel, metadata: grpc.Metadata, callback: grpc.requestCallback<_customer_CustomerModel__Output>): grpc.ClientUnaryCall;
  getCustomerInfo(argument: _customer_CustomerLookupModel, options: grpc.CallOptions, callback: grpc.requestCallback<_customer_CustomerModel__Output>): grpc.ClientUnaryCall;
  getCustomerInfo(argument: _customer_CustomerLookupModel, callback: grpc.requestCallback<_customer_CustomerModel__Output>): grpc.ClientUnaryCall;
  
}

export interface CustomerHandlers extends grpc.UntypedServiceImplementation {
  GetCustomerInfo: grpc.handleUnaryCall<_customer_CustomerLookupModel__Output, _customer_CustomerModel>;
  
}

export interface CustomerDefinition extends grpc.ServiceDefinition {
  GetCustomerInfo: MethodDefinition<_customer_CustomerLookupModel, _customer_CustomerModel, _customer_CustomerLookupModel__Output, _customer_CustomerModel__Output>
}
