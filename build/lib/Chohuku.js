'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Jimp = require('jimp');
var Image = require('./Image');
var HASH_BASE = 16; // Hexadecimal
var RESIZE_PX = 32;

module.exports = function () {
  function Chohuku(file) {
    _classCallCheck(this, Chohuku);

    this.image = new Image(file);
    return this;
  }

  _createClass(Chohuku, [{
    key: '_read',
    value: function _read() {
      return Jimp.read(this.image.filepath);
    }
  }, {
    key: 'getHash',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var hashBase = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : HASH_BASE;
        var px = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : RESIZE_PX;
        var image, hash;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return this._read();

              case 3:
                image = _context.sent;
                _context.next = 6;
                return image.resize(px, px).greyscale().hash(hashBase);

              case 6:
                hash = _context.sent;
                return _context.abrupt('return', hash);

              case 10:
                _context.prev = 10;
                _context.t0 = _context['catch'](0);
                throw new Error(_context.t0);

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 10]]);
      }));

      function getHash() {
        return _ref.apply(this, arguments);
      }

      return getHash;
    }()
  }]);

  return Chohuku;
}();