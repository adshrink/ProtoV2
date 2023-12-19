function Event(name) {
    this.name = name;
    this.callbacks = [];
}

Event.prototype.registerCallback = function (callback) {
    this.callbacks.push(callback);
}

function AdshWebAppEvents() {
    this.events = {};
}

AdshWebAppEvents.prototype.registerEvent = function (eventName) {
    var event = new Event(eventName);
    this.events[eventName] = event;
};

AdshWebAppEvents.prototype.dispatchEvent = function (eventName, eventArgs) {
    this.events[eventName].callbacks.forEach(function (callback) {
        callback(eventArgs);
    });
};

AdshWebAppEvents.prototype.addEventListener = function (eventName, callback) {
    this.events[eventName].registerCallback(callback);
};

export default AdshWebAppEvents;