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
exports.deleteBook = exports.updateBook = exports.getBookById = exports.getAllBooks = exports.createBook = void 0;
var database_1 = require("../database");
// Create a book
function createBook(name, price) {
    return __awaiter(this, void 0, void 0, function () {
        var book;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database_1.prisma.book.create({
                        data: {
                            name: name,
                            price: price
                        }
                    })];
                case 1:
                    book = _a.sent();
                    return [2 /*return*/, book];
            }
        });
    });
}
exports.createBook = createBook;
// Get all books
function getAllBooks() {
    return __awaiter(this, void 0, void 0, function () {
        var books;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database_1.prisma.book.findMany()];
                case 1:
                    books = _a.sent();
                    return [2 /*return*/, books];
            }
        });
    });
}
exports.getAllBooks = getAllBooks;
// Get a book by ID
function getBookById(id) {
    return __awaiter(this, void 0, void 0, function () {
        var book;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database_1.prisma.book.findUnique({
                        where: { id: id }
                    })];
                case 1:
                    book = _a.sent();
                    return [2 /*return*/, book];
            }
        });
    });
}
exports.getBookById = getBookById;
// Update a book
function updateBook(id, name, price) {
    return __awaiter(this, void 0, void 0, function () {
        var book, updatedBook, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database_1.prisma.book.findUnique({ where: { id: id } })];
                case 1:
                    book = _a.sent();
                    if (!book) {
                        return [2 /*return*/, null]; // Book not found
                    }
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, database_1.prisma.book.update({
                            where: { id: id },
                            data: {
                                name: name,
                                price: price
                            }
                        })];
                case 3:
                    updatedBook = _a.sent();
                    return [2 /*return*/, updatedBook];
                case 4:
                    error_1 = _a.sent();
                    console.error("Failed to update the book:", error_1);
                    return [2 /*return*/, null];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.updateBook = updateBook;
// Delete a book
function deleteBook(id) {
    return __awaiter(this, void 0, void 0, function () {
        var book, deletedBook, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database_1.prisma.book.findUnique({ where: { id: id } })];
                case 1:
                    book = _a.sent();
                    if (!book) {
                        return [2 /*return*/, null]; // Book not found
                    }
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, database_1.prisma.book.delete({ where: { id: id } })];
                case 3:
                    deletedBook = _a.sent();
                    return [2 /*return*/, deletedBook];
                case 4:
                    error_2 = _a.sent();
                    console.error("Failed to delete the book:", error_2);
                    return [2 /*return*/, null];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.deleteBook = deleteBook;
