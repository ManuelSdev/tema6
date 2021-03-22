!function (e) {
    var t = {};
    function n(r) {
        if (t[r]) 
            return t[r].exports;
        
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n),
        i.l = !0,
        i.exports
    }
    n.m = e,
    n.c = t,
    n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    },
    n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    },
    n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) 
            return e;
        
        if (4 & t && "object" == typeof e && e && e.__esModule) 
            return e;
        
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) 
            for (var i in e) 
                n.d(r, i, function (t) {
                    return e[t]
                }.bind(null, i));
            
        
        return r
    },
    n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t),
        t
    },
    n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    },
    n.p = "",
    n(n.s = 0)
}([
    function (e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "drawListGames", (function () {
            return i
        }));
        const r = "http://localhost:3000";
        async function i() {
            let e = await(async () => (await fetch(r + "/games")).json())();
            const t = document.createElement("div");
            t.setAttribute("id", "games-list"),
            t.setAttribute("class", "row"),
            document.getElementById("games").appendChild(t);
            for (var n, i = 0; i < e.length; i++) {
                let t = document.createElement("div");
                t.setAttribute("class", "col-6 col-sm-3"),
                document.getElementById("games-list").appendChild(t).innerHTML = `<div class="game-snippet">\n  <a href="/detail.html?id=${
                    (n = e[i]).id
                }">\n    <div class="game-snippet-container">\n      <img class="img-thumbnail" id="game-${
                    n.id
                }" src="${
                    n.image
                }" alt="Cover of game ${
                    n.name
                }" />\n    </div>\n    <h3 class="game-name">${
                    n.name
                }</h3>\n  </a>\n</div>`
            }
        }
    }
]);
