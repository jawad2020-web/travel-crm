const toString = Object.prototype.toString;

/**
 * @description: Determine whether the value is of a certain type
 */
export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`;
}

/**
 * @description: Is it a function
 */
export function isFunction<T = Function>(val: unknown): val is T {
  return is(val, 'Function') || is(val, 'AsyncFunction');
}

/**
 * @description: Is it defined
 */
export const isDef = <T = unknown>(val?: T): val is T => {
  return typeof val !== 'undefined';
};

export const isUnDef = <T = unknown>(val?: T): val is T => {
  return !isDef(val);
};
/**
 * @description: Whether it is an object
 */
export const isObject = (val: any): val is Record<any, any> => {
  return val !== null && is(val, 'Object');
};

/**
 * @description: Is it time
 */
export function isDate(val: unknown): val is Date {
  return is(val, 'Date');
}

/**
 * @description: Is it a value
 */
export function isNumber(val: unknown): val is number {
  return is(val, 'Number');
}

/**
 * @description: Whether it is AsyncFunction
 */
export function isAsyncFunction<T = any>(val: unknown): val is () => Promise<T> {
  return is(val, 'AsyncFunction');
}

/**
 * @description: Whether it is a promise
 */
export function isPromise<T = any>(val: unknown): val is Promise<T> {
  return is(val, 'Promise') && isObject(val) && isFunction(val.then) && isFunction(val.catch);
}

/**
 * @description: Is it a string
 */

export function isString(val: unknown): val is string {
  return is(val, 'String');
}

/**
 * @description: Whether it is boolean type
 */
export function isBoolean(val: unknown): val is boolean {
  return is(val, 'Boolean');
}

/**
 * @description: Whether it is an array
 */
export function isArray(val: any): val is Array<any> {
  return val && Array.isArray(val);
}

/**
 * @description: whether client
 */
export const isClient = () => {
  return typeof window !== 'undefined';
};

/**
 * @description: Is it a browser
 */
export const isWindow = (val: any): val is Window => {
  return typeof window !== 'undefined' && is(val, 'Window');
};

export const isElement = (val: unknown): val is Element => {
  return isObject(val) && !!val.tagName;
};

export const isServer = typeof window === 'undefined';

// Whether it is an image node
export function isImageDom(o: Element) {
  return o && ['IMAGE', 'IMG'].includes(o.tagName);
}

export function isNull(val: unknown): val is null {
  return val === null;
}

export function isNullAndUnDef(val: unknown): val is null | undefined {
  return isUnDef(val) && isNull(val);
}

export function isNullOrUnDef(val: unknown): val is null | undefined {
  return isUnDef(val) || isNull(val);
}
