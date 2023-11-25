"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBatteries = exports.createBattery = void 0;
var express_validator_1 = require("express-validator");
var batteryservices_1 = require("../services/batteryservices");
var utils_1 = require("../utils");
// Create a book
function createBattery(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, name, postcode, wattCapacity, errors, validationError, battery, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, name = _a.name, postcode = _a.postcode, wattCapacity = _a.wattCapacity;
                    errors = (0, express_validator_1.validationResult)(req);
                    console.log(errors);
                    if (!errors.isEmpty()) {
                        validationError = new utils_1.CustomError(errors.array()[0].msg, 422);
                        console.log("validationError", validationError);
                        throw validationError;
                    }
                    return [4 /*yield*/, (0, batteryservices_1.createBatteryService)(name, postcode, wattCapacity)];
                case 1:
                    battery = _b.sent();
                    res.status(201).json(battery);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _b.sent();
                    if (error_1 === null || error_1 === void 0 ? void 0 : error_1.statusCode) {
                        next(error_1);
                    }
                    else {
                        error_1 = new utils_1.CustomError("Internal Server Error", 500);
                        next(error_1);
                    }
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.createBattery = createBattery;
function getBatteries(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var batteries, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, (0, batteryservices_1.getBatteryService)()];
                case 1:
                    batteries = _a.sent();
                    res.status(200).json(batteries);
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    error_2 = new utils_1.CustomError("Internal Server Error", 500);
                    next(error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getBatteries = getBatteries;
