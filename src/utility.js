/**
 * PlumpJS Utility
 */

 /* global define: false */

;(function(root, factory) {

	'use strict';

	if (typeof define === 'function' && define.amd) {
		define(['Utility'], function() {
			return (root.Utility = factory());
		});
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.Utility = root.$ = factory();
	}
}(this, function() {

	'use strict';

	function classRegex(expression) {
		return new RegExp('(\\s|^)' + expression + '(\\s|$)');
	}

	return {

		deepExtend: function(defaults, options) {
			var extended = {};
			var prop;
			for (prop in defaults) {
				if (Object.prototype.hasOwnProperty.call(defaults, prop)) {
					extended[prop] = defaults[prop];
				}
			}
			for (prop in options) {
				if (Object.prototype.hasOwnProperty.call(options, prop)) {
					extended[prop] = options[prop];
				}
			}
			return extended;
		},

		hasClass: function(el, selector) {
			return !!el.className.match(classRegex(selector));
		},

		addClass: function(el, selector) {
			if (!this.hasClass(el, selector)) {
				el.className += ' ' + selector;
			}
		},

		removeClass: function(el, selector) {
			if (this.hasClass(el, selector)) {
				el.className = el.className.replace(classRegex(selector), '  ');
			}
		},

		addEvent: function(el, type, fn) {
			return el.addEventListener(type, fn, false);
		},

		removeEvent: function(el, type, fn) {
			return el.removeEventListener(type, fn, false);
		}
	};
}));
