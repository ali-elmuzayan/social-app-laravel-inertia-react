import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\AuthenticateSessionController::create
* @see app/Http/Controllers/Auth/AuthenticateSessionController.php:15
* @route '/login'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\AuthenticateSessionController::create
* @see app/Http/Controllers/Auth/AuthenticateSessionController.php:15
* @route '/login'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\AuthenticateSessionController::create
* @see app/Http/Controllers/Auth/AuthenticateSessionController.php:15
* @route '/login'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticateSessionController::create
* @see app/Http/Controllers/Auth/AuthenticateSessionController.php:15
* @route '/login'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticateSessionController::store
* @see app/Http/Controllers/Auth/AuthenticateSessionController.php:20
* @route '/login'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/login',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\AuthenticateSessionController::store
* @see app/Http/Controllers/Auth/AuthenticateSessionController.php:20
* @route '/login'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\AuthenticateSessionController::store
* @see app/Http/Controllers/Auth/AuthenticateSessionController.php:20
* @route '/login'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

const login = {
    create: Object.assign(create, create),
    store: Object.assign(store, store),
}

export default login