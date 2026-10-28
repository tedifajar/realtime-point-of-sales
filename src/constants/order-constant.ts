export const HEADER_TABLE_ORDER = [
  "No",
  "Order ID",
  "Customer Name",
  "Table",
  "Status",
  "Action",
];

export const INITIAL_ORDER = {
  cusomer_name: "",
  table_id: "",
  status: "",
};

export const INITIAL_STATE_ORDER = {
  status: "idle",
  errors: {
    cusomer_name: [],
    table_id: [],
    status: [],
    _form: [],
  },
};

export const STATUS_CREATE_ORDER = [
  {
    value: "reserved",
    label: "Reserved",
  },
  {
    value: "process",
    label: "Process",
  },
];
