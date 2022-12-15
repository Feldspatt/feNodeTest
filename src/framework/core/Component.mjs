import {stringToHTMLElement} from "./helpers.mjs";

export function Component(){

    /**
     * a reference to the main DOM element of this component. Preferably, use getElement() instead.
     */
    this.element= null

    /**
     * Make sure the returned string have only one component at the top level
     * @returns <string>
     */
     this.getHTML= function() { return `
        <div>
            <h1>default component content</h1>
        </div>
        `
     }


    /**
     * Add js to the component
     * @returns <void>
     */
    this.bindScript= function(){

    }


    /**
     * Get the DOM element of the component. Init the element if it is not already done.
     * @returns <Element>
     */
    this.getElement = function(){

        console.log("getting element")

        if(!this.element) {
            this.element = stringToHTMLElement(this.getHTML())
            this.bindScript()
        }

        return this.element
    }


    /**
     * Remove the element from the DOM. Can be overridden to do other things.
     * @returns <void>
     */
    this.removeElement= function() {
        if(this.element) this.element.remove()
    }


    this.getState= function(state) {
        return null
    }

    this.setState= function(state) {
        // do something
    }


    /**
     * Replace the designated slot with the given element
     * @param slotName {String}
     * @param element {HTMLElement}
     */
    this.fillSlot= function(slotName, element) {

        if(!this.element) throw new Error("Cannot fill slot before the element is defined.")

        const slot = this.element.querySelector(`[data-slot="${slotName.toString()}"]`)
        if(!slot) throw new Error(`Slot ${slotName} not found`)
        slot.replaceWith(element)
    }


    /**
     * Replace the designated slots with the given elements
     * @param slotMap {Map<String,HTMLElement>}
     */
    this.fillSlots= function (slotMap) {
        for(let [slotName, element] of slotMap){ this.fillSlot(slotName, element) }
    }


}

