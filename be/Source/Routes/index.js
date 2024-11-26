import HomeControllers from "../Controllers/homeController.js";

function Routes(app) {
  app.get("/", HomeControllers.RenderHomeView);
}

export default Routes;
