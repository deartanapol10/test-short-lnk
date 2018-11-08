import { Meteor } from "meteor/meteor";
import ReactDOM from "react-dom";
import { Tracker } from "meteor/tracker";
import { Session } from "meteor/session";

import { routes, onAuthChange } from "../imports/routes/routes";
import "../imports/startup/simple-schema-configuration.js";

Tracker.autorun(() => {
   // !! change it to boolean
   const isAuthenticated = !!Meteor.userId();
   //  console.log(isAuthenticated, Meteor.userId());
   onAuthChange(isAuthenticated);
});

Meteor.startup(() => {
   Session.set("showVisible", true);
   ReactDOM.render(routes, document.getElementById("app"));
});
