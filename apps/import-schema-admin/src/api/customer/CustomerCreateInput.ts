import { EventCreateNestedManyWithoutCustomersInput } from "./EventCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  events?: EventCreateNestedManyWithoutCustomersInput;
  firstNAme?: string | null;
  lastName?: string | null;
};
