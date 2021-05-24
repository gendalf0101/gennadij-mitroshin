/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Клаус Хартл
 * Выпущено по лицензии MIT
 */
(функция (завод) {
	if (typeof define === 'function' && define.amd) {
		// AMD (Регистрация в качестве анонимного модуля)
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// Node/CommonJS
		module.exports = factory(require('jquery'));
	} еще {
		// Браузерные глобалы
		фабрика(jQuery);
	}
}(функция ($) {

	var плюсы = /\+/g;

	функция кодирования(ы) {
		return config.raw ? s : encodeURIComponent(s);
	}

	функция декодирования(ов) {
		return config.raw ? s : decodeURIComponent(s);
	}

	функция stringifyCookieValue(значение) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	функция parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// Это цитируемый файл cookie, как в соответствии с RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\/g, '\\');
		}

		попробуй {
			// Замените написанные на стороне сервера плюсы пробелами.
			// Если мы не можем расшифровать файл cookie, игнорируйте его, он непригоден.
			// Если мы не можем разобрать файл cookie, проигнорируйте его, он непригоден.
			s = decodeURIComponent(s.replace(pluses, ''));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	функция чтения(s, конвертер) {
		var value = config.raw ? s : parseCookieValue(s);
		возврат $.isFunction(converter) ? конвертер(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (arguments.length > 1 && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setMilliseconds(t.getMilliseconds() + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {},
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// вызов $.cookie().
			cookies = document.cookie ? document.cookie.split('; ') : [],
			i = 0,
			l = длина печенья .;

		for (; i < l; i++) {
			var parts = cookies[i].split('='),
				name = decode(parts.shift()),
				cookie = parts.join('=');

			если (ключ === имя) {
				// Если второй аргумент (значение) является функцией, то это преобразователь...
				result = read(cookie, value);
				перерыв;
			}

			// Предотвратите хранение файла cookie, который мы не смогли бы расшифровать.
			если (!key && (cookie = read(cookie)) !== undefined) {
				результат[имя] = файл cookie;
			}
		}

		возвращаемый результат;
	};

	config.defaults = {};

	$.removeCookie = функция (клавиша, параметры) {
		// Не должен изменять параметры, расширяя таким образом новый объект...
		$.cookie(key, ", $.extend({}, options, { expires: -1 }));
		вернись !$.cookie(ключ);
	};

}));