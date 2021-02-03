import { Roles } from "@livetiles/livetiles-intranet-hub";

export const MyCustomMenuActions = [
  {
    displayName: "Action",
    groupInfo: {
      displayName: "Custom Code",
      id: "custom"
    },
    value: () => console.log("My custom menu action callback"),
    role: Roles.admin
  }
];
