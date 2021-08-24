/* eslint-disable no-unused-vars */
import { createLogger } from "vuex";

function myPlugin1(store) {
    console.log('only one time');
    console.log(store);
}

// eslint-disable-next-line no-unused-vars
const subscribeHandlerFn = (mutation, state) => {};
const subscriberPlugin = (store) =>{
    console.log('subscribing to store mutations');
    // store.subscribe(subscribeHandlerFn);
    store.subscribe((mutation, state) => {
        console.log('subscriberPlugin subscription');
        console.log(mutation, state);
    });
}

const subscriberPlugin2 = (store) =>{
    store.subscribe(
        () => { console.log('subscriberPlugin2');}, 
        { prepend: true }
    );
}
/**
Subscriptions:
[
    callbackfn4,
    callbackfn1,
    callbackfn2,
    callbackfn3,
]

 */

const plugins = [
    myPlugin1,
    // subscriberPlugin,
    // subscriberPlugin2,
    createLogger(),
];

export default plugins;