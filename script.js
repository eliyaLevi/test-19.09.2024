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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
var _a;
var form = (_a = document
    .querySelector("form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
});
var box1 = document.querySelector(".box-1");
var table = document.querySelector("#tableKorkinet");
var tbody = document.createElement("tbody");
table.appendChild(tbody);
var base_url = "https://nbaserver-q21u.onrender.com/api/filter/";
//פונקצייה שמביאה את כל השחקנים
function getPlayeres(req) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch(base_url, {
                            method: "POST",
                            body: JSON.stringify(req),
                            headers: {
                                "Content-Type": "application/json",
                            },
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    renderPlayers(data);
                    return [2 /*return*/, data];
                case 3:
                    error_1 = _a.sent();
                    console.error("שגיאה בהוספת קורקינט:", error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/, new console.error("error ssss")];
            }
        });
    });
}
//פונקצייה שמציגה לי את כל השחקנים
function renderPlayers(Player) {
    tbody.textContent = "";
    Player.forEach(function (p) {
        var trow = document.createElement("tr");
        var tPlayer = document.createElement("td");
        var tPosition = document.createElement("td");
        var tPoints = document.createElement("td");
        var tFG = document.createElement("td");
        var t3P = document.createElement("td");
        var tAction = document.createElement("td");
        var btnAction = document.createElement("button");
        btnAction.textContent = "Add Damian to Current Team";
        btnAction.onclick = function (event) { return addPlayer(p); };
        btnAction.classList.add("btnAction");
        tPlayer.textContent = p.playerName;
        tPosition.textContent = p.position;
        tPoints.textContent = p.points;
        tFG.textContent = p.twoPercent;
        t3P.textContent = p.threePercent;
        tAction.textContent = btnAction;
        tbody.appendChild(trow);
        trow.appendChild(tPlayer);
        trow.appendChild(tPosition);
        trow.appendChild(tPoints);
        trow.appendChild(tFG);
        trow.appendChild(t3P);
        trow.appendChild(tAction);
        tAction.appendChild(btnAction);
        trow.appendChild(tAction);
    });
}
//פונקצייה שמחפסת שחקנים לפי סינון
function serchFilter(player) {
    return __awaiter(this, void 0, void 0, function () {
        var position, points, twoPercent, threePercent, req1, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    position = document.querySelector(".input-position");
                    points = document.querySelector(".input-points");
                    twoPercent = document.querySelector(".input-twoPercent");
                    threePercent = document.querySelector(".input-threePercent");
                    req1 = {
                        position: position.value,
                        twoPercent: Number(twoPercent.value),
                        threePercent: Number(threePercent.value),
                        points: Number(points.value),
                    };
                    console.log(req1);
                    return [4 /*yield*/, getPlayeres(req1)];
                case 1:
                    data = _a.sent();
                    console.log(data);
                    return [2 /*return*/, data];
            }
        });
    });
}
function addPlayer(p) {
    switch (p.position) {
        case "PG": {
            var player = document.querySelector("#player-box1");
            player.textContent = p.playerName;
            var threePercent = document.querySelector("#threePercent-box1");
            threePercent.textContent = p.threePercent;
            var twoPercent = document.querySelector("#twoPercent-box1");
            twoPercent.textContent = p.twoPercent;
            var points = document.querySelector("#points-box1");
            points.textContent = p.points;
            break;
        }
        case "SG": {
            var player = document.querySelector("#player-box2");
            player.textContent = p.playerName;
            var threePercent = document.querySelector("#threePercent-box2");
            threePercent.textContent = p.threePercent;
            var twoPercent = document.querySelector("#twoPercent-box2");
            twoPercent.textContent = p.twoPercent;
            var points = document.querySelector("#points-box2");
            points.textContent = p.points;
            break;
        }
        case "SF": {
            var player = document.querySelector("#player-box3");
            player.textContent = p.playerName;
            var threePercent = document.querySelector("#threePercent-box3");
            threePercent.textContent = p.threePercent;
            var twoPercent = document.querySelector("#twoPercent-box3");
            twoPercent.textContent = p.twoPercent;
            var points = document.querySelector("#points-box3");
            points.textContent = p.points;
            break;
        }
        case "PF": {
            var player = document.querySelector("#player-box4");
            player.textContent = p.playerName;
            var threePercent = document.querySelector("#threePercent-box4");
            threePercent.textContent = p.threePercent;
            var twoPercent = document.querySelector("#twoPercent-box4");
            twoPercent.textContent = p.twoPercent;
            var points = document.querySelector("#points-box4");
            points.textContent = p.points;
            break;
        }
        case "C": {
            var player = document.querySelector("#player-box5");
            player.textContent = p.playerName;
            var threePercent = document.querySelector("#threePercent-box5");
            threePercent.textContent = p.threePercent;
            var twoPercent = document.querySelector("#twoPercent-box5");
            twoPercent.textContent = p.twoPercent;
            var points = document.querySelector("#points-box5");
            points.textContent = p.points;
            break;
        }
    }
    console.log(p);
}
