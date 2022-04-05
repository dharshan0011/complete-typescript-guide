import { RequestHandler } from 'express'
import 'reflect-metadata'
import { MetadataKeys } from './MetadataKeys'
import { Methods } from './Methods'

/* To ensure that the route decorator is not applied to any other function which 
is not an express request handler*/
interface RouteHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler
}

function routeBinder(method: string) {
  return function (path: string) {
    // factory decorator
    return function (target: any, key: string, desc: RouteHandlerDescriptor) {
      // actual decorator
      Reflect.defineMetadata(MetadataKeys.path, path, target, key)
      Reflect.defineMetadata(MetadataKeys.method, method, target, key)
    }
  }
}

export const get = routeBinder(Methods.get)
export const post = routeBinder(Methods.post)
export const put = routeBinder(Methods.put)
export const del = routeBinder(Methods.del)
