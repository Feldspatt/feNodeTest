export function Router(viewMap) {  // Named proto instead of using default name because ref to it needed below to add methods to it.

    this.viewMap = viewMap
    this.viewStates= new Map()
    this.currentView= null

    this.setBrowserHistory()
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

    let viewConstructor = this.viewMap.get(routeBase)
    if (!viewConstructor) {
        const [firstView] = this.viewMap.values()
        viewConstructor = firstView
        fullRoute = this.viewMap.keys().next().value
        console.warn(`View ${routeBase} not found, using default view`)
    }



    const createView = async (viewConstructor, params = [], state = null)=> {
        let view = await new viewConstructor(routeParams, ...params)
        view.route = fullRoute
        if(state) await view.setState(state)
        return view
    }
    

    async function switchView(currentView, viewStates) {
        if(previousView) {
            viewStates.set(previousView.route, previousView.getState()) // Store the previous view state in the views map
            await previousView?.unsetView()
        }

        if(pushState) history.pushState({route: routeBase}, null, "../" + fullRoute) //History only store the route of the view
        await currentView.setView()
    }

    
    if(viewConstructor.constructor.guard) {
        let answer = await viewConstructor.guard.awaitAnswer(fullRoute, params)
        switch (answer) {
            case "allow":
                console.log("allow")
                this.currentView = await createView(viewConstructor.view, params, foundState)
                await switchView(this.currentView, this.viewStates)
                break;
            case "redirect":
                console.log("redirecting to " + viewConstructor.redirect)
                await this.goTo(this.currentView.redirect ?? this.viewConstructors[0].name, params, forceNewView, pushState)
                break;
            case "stop":
                console.log("guard stopped")
                break;
            default:
                console.error("guard answer not recognized: " + answer)
        }
    }
    else  {

        this.currentView = await createView(viewConstructor, params, foundState)
        await switchView(this.currentView, this.viewStates)
    }
}

