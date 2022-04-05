import express from 'express'

export class AppRouter {
  private static instance: express.Router // private access specifier ensures that this
  //property is only accessible inside the class

  static getInstance(): express.Router {
    //static methods can be accessed directly on class
    //without a instance of the class
    if (!AppRouter.instance) {
      AppRouter.instance = express.Router()
    }
    return AppRouter.instance // or this.instance
  }
}
