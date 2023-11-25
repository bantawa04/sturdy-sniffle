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
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
var seedDatas = [
    { name: "Red Battery", postcode: "12345", wattCapacity: 10000 },
    { name: "Blue Battery", postcode: "67890", wattCapacity: 15000 },
    { name: "Green Battery", postcode: "54321", wattCapacity: 12000 },
    { name: "Yellow Battery", postcode: "98765", wattCapacity: 8000 },
    { name: "Purple Battery", postcode: "13579", wattCapacity: 11000 },
    { name: "Orange Battery", postcode: "24680", wattCapacity: 13000 },
    { name: "Pink Battery", postcode: "11223", wattCapacity: 9000 },
    { name: "Brown Battery", postcode: "44556", wattCapacity: 16000 },
    { name: "Gray Battery", postcode: "77889", wattCapacity: 7500 },
    { name: "Black Battery", postcode: "99887", wattCapacity: 14000 }
];
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var e_1;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, 3, 5]);
                    // await prisma.$transaction(async (tx) => {
                    //   const books = [
                    //     { name: 'The Great Gatsby', price: 20.99 },
                    //     { name: 'To Kill a Mockingbird', price: 15.50 },
                    //     { name: '1984', price: 30.25 },
                    //     { name: 'The Catcher in the Rye', price: 18.75 },
                    //     { name: 'The Hobbit', price: 25.00 },
                    //   ];
                    //   for (const book of books) {
                    //     await tx.book.create({
                    //       data: book,
                    //     });
                    //   }
                    // });
                    return [4 /*yield*/, prisma.$transaction(function (tx) { return __awaiter(_this, void 0, void 0, function () {
                            var _i, seedDatas_1, data;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _i = 0, seedDatas_1 = seedDatas;
                                        _a.label = 1;
                                    case 1:
                                        if (!(_i < seedDatas_1.length)) return [3 /*break*/, 4];
                                        data = seedDatas_1[_i];
                                        return [4 /*yield*/, tx.battery.create({
                                                data: data
                                            })];
                                    case 2:
                                        _a.sent();
                                        _a.label = 3;
                                    case 3:
                                        _i++;
                                        return [3 /*break*/, 1];
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); })];
                case 1:
                    // await prisma.$transaction(async (tx) => {
                    //   const books = [
                    //     { name: 'The Great Gatsby', price: 20.99 },
                    //     { name: 'To Kill a Mockingbird', price: 15.50 },
                    //     { name: '1984', price: 30.25 },
                    //     { name: 'The Catcher in the Rye', price: 18.75 },
                    //     { name: 'The Hobbit', price: 25.00 },
                    //   ];
                    //   for (const book of books) {
                    //     await tx.book.create({
                    //       data: book,
                    //     });
                    //   }
                    // });
                    _a.sent();
                    console.log("Data seeding successful.");
                    return [3 /*break*/, 5];
                case 2:
                    e_1 = _a.sent();
                    console.error("Error seeding data:", e_1);
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, prisma.$disconnect()];
                case 4:
                    _a.sent();
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    });
}
main();
