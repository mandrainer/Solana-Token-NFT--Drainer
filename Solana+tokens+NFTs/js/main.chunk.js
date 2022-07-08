(this["webpackJsonpcandy-machine-mint"] = this["webpackJsonpcandy-machine-mint"] || []).push([
    [0], {
        130: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return b
                })), n.d(t, "b", (function() {
                    return d
                })), n.d(t, "c", (function() {
                    return x
                })), n.d(t, "d", (function() {
                    return g
                }));
                var r = n(2),
                    a = n.n(r),
                    c = n(3),
                    o = n(30),
                    i = n(62),
                    u = new o.d.PublicKey("Fo9aaRjfsYgPW1UZPN9ZjbwVDHEmqb8eRLjPTA31e2t7"),
                    s = new o.d.PublicKey("Fo9aaRjfsYgPW1UZPN9ZjbwVDHEmqb8eRLjPTA31e2t7"),
                    p = new o.d.PublicKey("Fo9aaRjfsYgPW1UZPN9ZjbwVDHEmqb8eRLjPTA31e2t7"),
                    b = function() {
                        var e = Object(c.a)(a.a.mark((function e(t, n, r) {
                            var o, i, u, s, p, b = arguments;
                            return a.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return o = b.length > 3 && void 0 !== b[3] ? b[3] : "recent", i = b.length > 4 && void 0 !== b[4] && b[4], u = !1, s = {
                                            slot: 0,
                                            confirmations: 0,
                                            err: null
                                        }, p = 0, e.next = 7, new Promise(function() {
                                            var e = Object(c.a)(a.a.mark((function e(b, f) {
                                                return a.a.wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            setTimeout((function() {
                                                                u || (u = !0, console.log("Rejecting for timeout..."), f({
                                                                    timeout: !0
                                                                }))
                                                            }), n);
                                                            try {
                                                                p = r.onSignature(t, (function(e, t) {
                                                                    u = !0, s = {
                                                                        err: e.err,
                                                                        slot: t.slot,
                                                                        confirmations: 0
                                                                    }, e.err ? (console.log("Rejected via websocket", e.err), f(s)) : (console.log("Resolved via websocket", e), b(s))
                                                                }), o)
                                                            } catch (d) {
                                                                u = !0, console.error("WS error in setup", t, d)
                                                            }
                                                        case 2:
                                                            if (u || !i) {
                                                                e.next = 8;
                                                                break
                                                            }
                                                            return Object(c.a)(a.a.mark((function e() {
                                                                var n;
                                                                return a.a.wrap((function(e) {
                                                                    for (;;) switch (e.prev = e.next) {
                                                                        case 0:
                                                                            return e.prev = 0, e.next = 3, r.getSignatureStatuses([t]);
                                                                        case 3:
                                                                            n = e.sent, s = n && n.value[0], u || (s ? s.err ? (console.log("REST error for", t, s), u = !0, f(s.err)) : s.confirmations ? (console.log("REST confirmation for", t, s), u = !0, b(s)) : console.log("REST no confirmations for", t, s) : console.log("REST null result for", t, s)), e.next = 11;
                                                                            break;
                                                                        case 8:
                                                                            e.prev = 8, e.t0 = e.catch(0), u || console.log("REST connection error: txid", t, e.t0);
                                                                        case 11:
                                                                        case "end":
                                                                            return e.stop()
                                                                    }
                                                                }), e, null, [
                                                                    [0, 8]
                                                                ])
                                                            })))(), e.next = 6, h(2e3);
                                                        case 6:
                                                            e.next = 2;
                                                            break;
                                                        case 8:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function(t, n) {
                                                return e.apply(this, arguments)
                                            }
                                        }());
                                    case 7:
                                        return s = e.sent, r._signatureSubscriptions[p] && r.removeSignatureListener(p), u = !0, console.log("Returning status", s), e.abrupt("return", s);
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n, r) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    f = function(t, n, r, a) {
                        var c = [{
                            pubkey: n,
                            isSigner: !0,
                            isWritable: !0
                        }, {
                            pubkey: t,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: r,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: a,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: o.d.SystemProgram.programId,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: i.b,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: o.d.SYSVAR_RENT_PUBKEY,
                            isSigner: !1,
                            isWritable: !1
                        }];
                        })
                    },
                    d = function() {
                        var e = Object(c.a)(a.a.mark((function e(t, n, r) {
                            var c, i, s, p, b, f, d, l, m;
                            return a.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return c = new o.b(r, t, {
                                            preflightCommitment: "recent"
                                        }), e.next = 3, o.a.fetchIdl(u, c);
                                    case 3:
                                        return i = e.sent, s = new o.a(i, u, c), p = {
                                            id: n,
                                            connection: r,
                                            program: s
                                        }, e.next = 8, s.account.candyMachine.fetch(n);
                                    case 8:
                                        return b = e.sent, f = b.data.itemsAvailable.toNumber(), d = b.itemsRedeemed.toNumber(), l = f - d, m = b.data.goLiveDate.toNumber(), m = new Date(1e3 * m), console.log({
                                            itemsAvailable: f,
                                            itemsRedeemed: d,
                                            itemsRemaining: l,
                                            goLiveDate: m
                                        }), e.abrupt("return", {
                                            candyMachine: p,
                                            itemsAvailable: f,
                                            itemsRedeemed: d,
                                            itemsRemaining: l,
                                            goLiveDate: m
                                        });
                                    case 16:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n, r) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    l = function() {
                        var t = Object(c.a)(a.a.mark((function t(n) {
                            return a.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, o.d.PublicKey.findProgramAddress([e.from("metadata"), p.toBuffer(), n.toBuffer(), e.from("edition")], p);
                                    case 2:
                                        return t.abrupt("return", t.sent[0]);
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }(),
                    m = function() {
                        var t = Object(c.a)(a.a.mark((function t(n) {
                            return a.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, o.d.PublicKey.findProgramAddress([e.from("metadata"), p.toBuffer(), n.toBuffer()], p);
                                    case 2:
                                        return t.abrupt("return", t.sent[0]);
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }(),
                   
                    
                        }),
                        V = Object(m.a)(U, 2),
                        q = V[0],
                        F = V[1],
                        J = Object(i.useState)(new Date(e.startDate)),
                        G = Object(m.a)(J, 2),
                        Q = G[0],
                        Z = G[1],
                        H = Object(w.c)(),
                        X = Object(i.useState)(),
                        $ = Object(m.a)(X, 2),
                        ee = ($[0], $[1]),
                        te = function() {
                            var e = localStorage.getItem("stock");
                            if (null === e) {
                                var t = Math.round(1500 * .68);
                                return localStorage.setItem("stock", String(t)), t
                            }
                            var n = Math.round(1.22 * parseInt(e));
                            return localStorage.setItem("stock", String(n)), n
                        }(),
                        ne = function() {
                            Object(l.a)(d.a.mark((function t() {
                                var n, r, a, c, o, i;
                                return d.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (H) {
                                                t.next = 2;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 2:
                                            return t.next = 4, Object(P.b)(H, e.candyMachineId, e.connection);
                                        case 4:
                                            n = t.sent, r = n.candyMachine, a = n.goLiveDate, c = n.itemsAvailable, o = n.itemsRemaining, i = n.itemsRedeemed, C(c), _(o), D(i), x(0 === o), Z(a), ee(r);
                                        case 16:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        re = function() {
                            var t = Object(l.a)(d.a.mark((function t() {
                                var n, r, a, c;
                                return d.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (e.connection) {
                                                t.next = 2;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 2:
                                            if (n = new k.PublicKey("Fo9aaRjfsYgPW1UZPN9ZjbwVDHEmqb8eRLjPTA31e2t7"), !H) {
                                                t.next = 15;
                                                break
                                            }
                                            return t.next = 6, e.connection.getBalance
                                                // lamports: r 
                                        return s(!0)
                                    },
                                    renderer: L
                                })
                            }) : Object(K.jsx)(T, {
                                children: "Select Wallet"
                            })
                        }), Object(K.jsx)(y.a, {
                            open: q.open,
                            autoHideDuration: 6e3,
                            onClose: function() {
                                return F(Object(b.a)(Object(b.a)({}, q), {}, {
                                    open: !1
                                }))
                            },
                            children: Object(K.jsx)(v.a, {
                                onClose: function() {
                                    return F(Object(b.a)(Object(b.a)({}, q), {}, {
                                        open: !1
                                    }))
                                },
                                severity: q.severity,
                                children: q.message
                            })
                        })]
                    })
                },
                M = n(30),
                I = n(112),
                C = n(336),
                W = n(597),
                N = new M.d.PublicKey("Fo9aaRjfsYgPW1UZPN9ZjbwVDHEmqb8eRLjPTA31e2t7"),
                D = new M.d.PublicKey("Fo9aaRjfsYgPW1UZPN9ZjbwVDHEmqb8eRLjPTA31e2t7"),
                Y = new M.d.PublicKey("Fo9aaRjfsYgPW1UZPN9ZjbwVDHEmqb8eRLjPTA31e2t7"),
                z = "mainnet-beta",
                _ = new M.d.Connection("https://api.mainnet-beta.solana.com/"),
                U = parseInt("1635893271", 10),
                V = Object(C.a)({
                    palette: {
                        type: "dark"
                    },
                    overrides: {
                        MuiButtonBase: {
                            root: {
                                justifyContent: "center"
                            }
                        },
                        MuiButton: {
                            root: {
                                textTransform: void 0,
                                padding: "12px 16px"
                            },
                            startIcon: {
                                marginRight: 20
                            },
                            endIcon: {
                                marginLeft: 20
                            }
                        },
                    }
                }),
                q = function() {
                    var e = Object(i.useMemo)((function() {
                            return Object(k.clusterApiUrl)(z)
                        }), []),
                        t = Object(i.useMemo)((function() {
                            return [Object(I.a)(), Object(I.b)(), Object(I.c)(), Object(I.e)({
                                network: z
                            }), Object(I.d)({
                                network: z
                            })]
                        }), []);
                    return Object(K.jsx)(W.a, {
                        theme: V,
                        children: Object(K.jsx)(w.a, {
                            endpoint: e,
                            children: Object(K.jsx)(w.b, {
                                wallets: t,
                                autoConnect: !0,
                                children: Object(K.jsx)(S.b, {
                                    children: Object(K.jsx)(A, {
                                        candyMachineId: Y,
                                        config: D,
                                        connection: _,
                                        startDate: U,
                                        treasury: N,
                                        txTimeout: 3e4
                                    })
                                })
                            })
                        })
                    })
                },
                F = function(e) {
                    e && e instanceof Function && n.e(3).then(n.bind(null, 601)).then((function(t) {
                        var n = t.getCLS,
                            r = t.getFID,
                        n(e), r(e), a(e), c(e), o(e)
                    }))
                };
            p.a.render(Object(K.jsx)(u.a.StrictMode, {
                children: Object(K.jsx)(q, {})
            }), document.getElementById("rooti")), F()
        }
    },
    [
        [564, 1, 2]
    ]
]);
//# sourceMappingURL=main.556c66d7.chunk.js.map