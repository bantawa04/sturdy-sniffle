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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var BooksController_1 = require("../controller/BooksController");
var router = express_1.default.Router();
router.post("/books", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, title, price, parsedPrice, book, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, title = _a.title, price = _a.price;
                parsedPrice = parseFloat(price);
                return [4 /*yield*/, (0, BooksController_1.createBook)(title, parsedPrice)];
            case 1:
                book = _b.sent();
                res.status(201).json(book);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _b.sent();
                res.status(500).json({
                    error: "Failed to create a book",
                    message: error_1
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// Get all books
router.get("/books", function (_, res) { return __awaiter(void 0, void 0, void 0, function () {
    var books, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (0, BooksController_1.getAllBooks)()];
            case 1:
                books = _a.sent();
                res.json(books);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                res.status(500).json({ error: "Failed to retrieve books" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// Get a book by ID
router.get("/books/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, book, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, (0, BooksController_1.getBookById)(id)];
            case 1:
                book = _a.sent();
                if (book) {
                    res.json(book);
                }
                else {
                    res.status(404).json({ error: "Book not found" });
                }
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                res.status(500).json({ error: "Failed to retrieve the book" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// Update a book
router.put("/books/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, title, price, parsedPrice, updatedBook, error_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                id = req.params.id;
                _a = req.body, title = _a.title, price = _a.price;
                parsedPrice = parseFloat(price);
                return [4 /*yield*/, (0, BooksController_1.updateBook)(id, title, parsedPrice)];
            case 1:
                updatedBook = _b.sent();
                if (updatedBook !== null) {
                    res.json(updatedBook);
                }
                else {
                    res.status(404).json({ error: "Book not found" });
                }
                return [3 /*break*/, 3];
            case 2:
                error_4 = _b.sent();
                console.error("Failed to update the book:", error_4);
                res.status(500).json({ error: "Failed to update the book" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// Delete a book
router.delete("/books/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, deletedBook, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, (0, BooksController_1.deleteBook)(id)];
            case 1:
                deletedBook = _a.sent();
                if (deletedBook !== null) {
                    res.json(deletedBook);
                }
                else {
                    // Book not found
                    res.status(404).json({ error: "Book not found" });
                }
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                console.error("Failed to delete the book:", error_5);
                res.status(500).json({ error: "Failed to delete the book" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports.default = router;
