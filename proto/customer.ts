import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { CustomerClient as _customer_CustomerClient, CustomerDefinition as _customer_CustomerDefinition } from './customer/Customer';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  customer: {
    Customer: SubtypeConstructor<typeof grpc.Client, _customer_CustomerClient> & { service: _customer_CustomerDefinition }
    CustomerLookupModel: MessageTypeDefinition
    CustomerModel: MessageTypeDefinition
  }
}

