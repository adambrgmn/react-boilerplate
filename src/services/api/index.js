import Firebase from 'firebase';
import { firebaseUrl } from '../../config.js';

function isString(string) {
  return typeof string === 'string' && string != null;
}
function isObject(object) {
  return typeof object === 'object' && object != null;
}

export default class FirebaseConnection {
  constructor() {
    this.ref = new Firebase(firebaseUrl);
  }

  syncState(endpoint, context, cb) {
    if (!isString(endpoint)) throw new Error('You need to define an endpoint as a string');
    if (!isObject(context)) throw new Error('Context needs to be a React-object (e.g. this)');

    const endpointRef = this.ref.child(endpoint);
    endpointRef.once('value', (snap) => {
      context.setState(() => snap.val());
      if (cb) cb();
    });
  }

  updateState(endpoint, context, newState, cb) {
    if (!isString(endpoint)) throw new Error('You need to define an endpoint as a string');
    if (!isObject(context)) throw new Error('Context needs to be a React-object (e.g. this)');

    const endpointRef = this.ref.child(endpoint);
    context.setState(() => newState);

    endpointRef.update(newState, () => {
      if (cb) cb();
    });
  }
}
