export function Router(routes) {  // Named proto instead of using default name because ref to it needed below to add methods to it.

    this.routes = routes
    this.viewStates= new Map()
    this.currentView= null

    this.setBrowserHistory()
}

export function route(path, view, guard = null) {
    return {
        path,
        guard,
        view
    };
}

Router.prototype.setBrowserHistory = function() {
    window.addEventListener('popstate', async (event) => {
        if(event){
            await this.goTo(window.location.pathname.slice(1), undefined, false,false)
        }
    })
}

Router.prototype.goTo = async function(fullRoute, params = [], forceNewView = false, pushState = true) {
    console.log("goTo", fullRoute, params)

    const splitRoute = fullRoute.split("/")
    const routeBase = splitRoute[0]
    const routeParams = splitRoute.slice(1).filter((e) => e !== "")


    let previousView = this.currentView;

    let foundState = this.viewStates.get(fullRoute)
    if(foundState && !forceNewView){ this.viewStates.delete(fullRoute)}

    let paths = this.routes.map((route) => route.route)
    console.log("paths", paths)
    console.log("routeBase", routeBase)

    let route = this.routes.find( r => r.path === routeBase )

    if (!route) {
        route = this.routes[0]
        fullRoute = this.routes[0].path
        console.warn(`View ${routeBase} not found, using default view`)
    }


    const createView = async (viewConstructor, params = [], state = null)=> {
        let view = await new viewConstructor(routeParams, ...params)
        view.path = fullRoute
        if(state) await view.setState(state)
        return view
    }
    

    async function switchView(currentView, viewStates) {
        if(previousView) {
            viewStates.set(previousView.path, previousView.getState()) // Store the previous view state in the views map
            await previousView?.unsetView()
        }

        if(pushState) history.pushState({path: routeBase}, null, "../" + fullRoute) //History only store the route of the view
        await currentView.setView()
    }

    
    if(route.guard) {
        let answer = await route.guard.awaitAnswer(fullRoute, params)
        switch (answer) {
            case "allow":
                console.log("allow")
                this.currentView = await createView(route.view, params, foundState)
                await switchView(this.currentView, this.viewStates)
                break;
            case "redirect":
                console.log("redirecting to " + route.redirect)
                await this.goTo(this.currentView.redirect ?? this.routes[0].path, params, forceNewView, pushState)
                break;
            case "stop":
                console.log("guard stopped")
                break;
            default:
                console.error("guard answer not recognized: " + answer)
        }
    }
    else  {

        this.currentView = await createView(route.view, params, foundState)
        await switchView(this.currentView, this.viewStates)
    }
}

