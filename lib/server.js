"use strict";

var _http = _interopRequireDefault(require("http"));
var _socket = require("socket.io");
var _cors = _interopRequireDefault(require("cors"));
var _app = _interopRequireWildcard(require("./app"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const {
  PORT
} = process.env;
_app.default.use((0, _cors.default)());
const server = _http.default.createServer(_app.default);
const io = new _socket.Server(server);
io.on('connection', socket => {
  console.log('A user connected');
  socket.on('customEvent', data => {
    console.log('Custom event received:', data);
  });
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});
const startServer = async () => {
  try {
    await (0, _app.connectDB)();
    server.listen(PORT, () => {
      console.log(`🍏 Server is running on: http://localhost:${PORT} ... 🌊`);
    });
  } catch (err) {
    console.error(`❌ Error starting the server: ${err}`);
    process.exit(1);
  }
};
startServer();