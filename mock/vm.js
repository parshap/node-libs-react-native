const Buffer = require("buffer");

const createContext = () => ({});
const createCachedData = () => new Buffer();

exports.compileFunction = () => {};
exports.createContext = createContext;
exports.isContext = () => true;
exports.runInContext = () => true;
exports.runInNewContext = () => true;
exports.runInThisContext = () => true;
exports.measureMemory = () => true;

const Script = () => {};
Script.prototype.createCachedData = createCachedData;
Script.prototype.runInContext = runInContext;
Script.prototype.runInNewContext = runInNewContext;
Script.prototype.runInThisContext = runInThisContext;
exports.Script = Script;

const Module = () => {};
Module.prototype.dependencySpecifiers = () => [];
Module.prototype.error = () => { throw new Error() };
Module.prototype.evaluate = async () => {};
Module.prototype.link = async () => {};
Module.prototype.status = "evaluated";
Module.prototype.identified = "mocked";
exports.Module = Module;

const SourceTextModule = () => {};
SourceTextModule.prototype.createCachedData = createCachedData;
exports.SourceTextModule = SourceTextModule;

const SyntheticModule = () => {};
SourceTextModule.prototype.setExport = () => {};
SourceTextModule.prototype.compileFunction = () => () => {};
SourceTextModule.prototype.createContext = createContext;
exports.SyntheticModule = SyntheticModule;
