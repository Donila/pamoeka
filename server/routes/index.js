"use strict";

const TodoRoutes = require("../api/todo/route/todo-route");
const TopicRoutes = require("../api/topic/route/topic-route");

const StaticDispatcher = require("../commons/static/index");


module.exports = class Routes {
   static init(app, router) {
     TodoRoutes.init(router);
     TopicRoutes.init(router);
     
     router
       .route("*")
       .get(StaticDispatcher.sendIndex);
     

     app.use("/", router);
   }
}
