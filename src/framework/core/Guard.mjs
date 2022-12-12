export function Guard() {


    this.answers= [
        "allow", // router will continue normally.
        "redirect", // router will go to the redirect url specified in the view.
        "stop", // router do nothing.
    ]


    /**
     * The defense function. Must return a boolean or a string from the answers array.
     * @returns {Promise<string>}
     */
    this.control= async function(route, params){
        return this.answers[0]
    }


    /**
     * Make sure the defense result is a string from the answers array readable by the router.
     * @returns {string}
     */
    this.getFormattedDefenseResult= function(defenseResult){
        // if the result is a boolean, return the corresponding answer
        if(defenseResult ===  true) return this.answers[0]
        else if (defenseResult === false) return this.answers[2]


        if(this.answers.includes(defenseResult)) return defenseResult
        else throw new Error(`answer must be a boolean or one of the following: ${this.answers.join(", ")}`)
    }


    /**
     *
     * @returns {Promise<string>}
     */
    this.awaitAnswer= async function(route, params) {
        let defenseResult = await this.control(route, params)

        return this.getFormattedDefenseResult(defenseResult)
    }

}
