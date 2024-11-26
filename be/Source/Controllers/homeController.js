class HomeControllers {
  RenderHomeView(req, res, next) {
    res.send("Welcome to Home Page");
  }
}

export default new HomeControllers();
