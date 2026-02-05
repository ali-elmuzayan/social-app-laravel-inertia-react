import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Frontend\ContactController::__invoke
* @see app/Http/Controllers/Frontend/ContactController.php:14
* @route '/content'
*/
const ContactController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ContactController.url(options),
    method: 'get',
})

ContactController.definition = {
    methods: ["get","head"],
    url: '/content',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\ContactController::__invoke
* @see app/Http/Controllers/Frontend/ContactController.php:14
* @route '/content'
*/
ContactController.url = (options?: RouteQueryOptions) => {
    return ContactController.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\ContactController::__invoke
* @see app/Http/Controllers/Frontend/ContactController.php:14
* @route '/content'
*/
ContactController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ContactController.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\ContactController::__invoke
* @see app/Http/Controllers/Frontend/ContactController.php:14
* @route '/content'
*/
ContactController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ContactController.url(options),
    method: 'head',
})

export default ContactController