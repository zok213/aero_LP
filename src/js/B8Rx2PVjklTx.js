(self.webpackChunk = self.webpackChunk || []).push([
  ["12"],
  {
    9904: function () {
      "use strict";
      !(function () {
        if ("undefined" == typeof window) return;
        let e = window.navigator.userAgent.match(/Edge\/(\d{2})\./),
          t = !!e && parseInt(e[1], 10) >= 16;
        if ("objectFit" in document.documentElement.style != !1 && !t) {
          window.objectFitPolyfill = function () {
            return !1;
          };
          return;
        }
        let n = function (e) {
            let t = window.getComputedStyle(e, null),
              n = t.getPropertyValue("position"),
              i = t.getPropertyValue("overflow"),
              a = t.getPropertyValue("display");
            ((n && "static" !== n) || (e.style.position = "relative"),
              "hidden" !== i && (e.style.overflow = "hidden"),
              (a && "inline" !== a) || (e.style.display = "block"),
              0 === e.clientHeight && (e.style.height = "100%"),
              -1 === e.className.indexOf("object-fit-polyfill") &&
                (e.className += " object-fit-polyfill"));
          },
          i = function (e) {
            let t = window.getComputedStyle(e, null),
              n = {
                "max-width": "none",
                "max-height": "none",
                "min-width": "0px",
                "min-height": "0px",
                top: "auto",
                right: "auto",
                bottom: "auto",
                left: "auto",
                "margin-top": "0px",
                "margin-right": "0px",
                "margin-bottom": "0px",
                "margin-left": "0px",
              };
            for (let i in n)
              t.getPropertyValue(i) !== n[i] && (e.style[i] = n[i]);
          },
          a = function (e) {
            let t = e.parentNode;
            (n(t),
              i(e),
              (e.style.position = "absolute"),
              (e.style.height = "100%"),
              (e.style.width = "auto"),
              e.clientWidth > t.clientWidth
                ? ((e.style.top = "0"),
                  (e.style.marginTop = "0"),
                  (e.style.left = "50%"),
                  (e.style.marginLeft = -(e.clientWidth / 2) + "px"))
                : ((e.style.width = "100%"),
                  (e.style.height = "auto"),
                  (e.style.left = "0"),
                  (e.style.marginLeft = "0"),
                  (e.style.top = "50%"),
                  (e.style.marginTop = -(e.clientHeight / 2) + "px")));
          },
          r = function (e) {
            if (void 0 === e || e instanceof Event)
              e = document.querySelectorAll("[data-object-fit]");
            else if (e && e.nodeName) e = [e];
            else if ("object" != typeof e || !e.length || !e[0].nodeName)
              return !1;
            for (let n = 0; n < e.length; n++) {
              if (!e[n].nodeName) continue;
              let i = e[n].nodeName.toLowerCase();
              if ("img" === i) {
                if (t) continue;
                e[n].complete
                  ? a(e[n])
                  : e[n].addEventListener("load", function () {
                      a(this);
                    });
              } else
                "video" === i
                  ? e[n].readyState > 0
                    ? a(e[n])
                    : e[n].addEventListener("loadedmetadata", function () {
                        a(this);
                      })
                  : a(e[n]);
            }
            return !0;
          };
        ("loading" === document.readyState
          ? document.addEventListener("DOMContentLoaded", r)
          : r(),
          window.addEventListener("resize", r),
          (window.objectFitPolyfill = r));
      })();
    },
    1724: function () {
      "use strict";
      function e(e) {
        Webflow.env("design") ||
          ($("video").each(function () {
            e && $(this).prop("autoplay") ? this.play() : this.pause();
          }),
          $(".w-background-video--control").each(function () {
            e ? n($(this)) : t($(this));
          }));
      }
      function t(e) {
        e.find("> span").each(function (e) {
          $(this).prop("hidden", () => 0 === e);
        });
      }
      function n(e) {
        e.find("> span").each(function (e) {
          $(this).prop("hidden", () => 1 === e);
        });
      }
      "undefined" != typeof window &&
        $(document).ready(() => {
          let i = window.matchMedia("(prefers-reduced-motion: reduce)");
          (i.addEventListener("change", (t) => {
            e(!t.matches);
          }),
            i.matches && e(!1),
            $("video:not([autoplay])").each(function () {
              $(this)
                .parent()
                .find(".w-background-video--control")
                .each(function () {
                  t($(this));
                });
            }),
            $(document).on(
              "click",
              ".w-background-video--control",
              function (e) {
                if (Webflow.env("design")) return;
                let i = $(e.currentTarget),
                  a = $(`video#${i.attr("aria-controls")}`).get(0);
                if (a)
                  if (a.paused) {
                    let e = a.play();
                    (n(i),
                      e &&
                        "function" == typeof e.catch &&
                        e.catch(() => {
                          t(i);
                        }));
                  } else (a.pause(), t(i));
              },
            ));
        });
    },
    5487: function () {
      "use strict";
      window.tram = (function (e) {
        function t(e, t) {
          return new D.Bare().init(e, t);
        }
        function n(e) {
          var t = parseInt(e.slice(1), 16);
          return [(t >> 16) & 255, (t >> 8) & 255, 255 & t];
        }
        function i(e, t, n) {
          return (
            "#" + (0x1000000 | (e << 16) | (t << 8) | n).toString(16).slice(1)
          );
        }
        function a() {}
        function r(e, t, n) {
          if ((void 0 !== t && (n = t), void 0 === e)) return n;
          var i = n;
          return (
            q.test(e) || !K.test(e)
              ? (i = parseInt(e, 10))
              : K.test(e) && (i = 1e3 * parseFloat(e)),
            0 > i && (i = 0),
            i == i ? i : n
          );
        }
        function o(e) {
          Y.debug && window && window.console.warn(e);
        }
        var l,
          c,
          u,
          s = (function (e, t, n) {
            function i(e) {
              return "object" == typeof e;
            }
            function a(e) {
              return "function" == typeof e;
            }
            function r() {}
            return function o(l, c) {
              function u() {
                var e = new s();
                return (a(e.init) && e.init.apply(e, arguments), e);
              }
              function s() {}
              (c === n && ((c = l), (l = Object)), (u.Bare = s));
              var d,
                f = (r[e] = l[e]),
                p = (s[e] = u[e] = new r());
              return (
                (p.constructor = u),
                (u.mixin = function (t) {
                  return ((s[e] = u[e] = o(u, t)[e]), u);
                }),
                (u.open = function (e) {
                  if (
                    ((d = {}),
                    a(e) ? (d = e.call(u, p, f, u, l)) : i(e) && (d = e),
                    i(d))
                  )
                    for (var n in d) t.call(d, n) && (p[n] = d[n]);
                  return (a(p.init) || (p.init = l), u);
                }),
                u.open(c)
              );
            };
          })("prototype", {}.hasOwnProperty),
          d = {
            ease: [
              "ease",
              function (e, t, n, i) {
                var a = (e /= i) * e,
                  r = a * e;
                return (
                  t +
                  n *
                    (-2.75 * r * a + 11 * a * a + -15.5 * r + 8 * a + 0.25 * e)
                );
              },
            ],
            "ease-in": [
              "ease-in",
              function (e, t, n, i) {
                var a = (e /= i) * e,
                  r = a * e;
                return t + n * (-1 * r * a + 3 * a * a + -3 * r + 2 * a);
              },
            ],
            "ease-out": [
              "ease-out",
              function (e, t, n, i) {
                var a = (e /= i) * e,
                  r = a * e;
                return (
                  t +
                  n *
                    (0.3 * r * a + -1.6 * a * a + 2.2 * r + -1.8 * a + 1.9 * e)
                );
              },
            ],
            "ease-in-out": [
              "ease-in-out",
              function (e, t, n, i) {
                var a = (e /= i) * e,
                  r = a * e;
                return t + n * (2 * r * a + -5 * a * a + 2 * r + 2 * a);
              },
            ],
            linear: [
              "linear",
              function (e, t, n, i) {
                return (n * e) / i + t;
              },
            ],
            "ease-in-quad": [
              "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
              function (e, t, n, i) {
                return n * (e /= i) * e + t;
              },
            ],
            "ease-out-quad": [
              "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
              function (e, t, n, i) {
                return -n * (e /= i) * (e - 2) + t;
              },
            ],
            "ease-in-out-quad": [
              "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
              function (e, t, n, i) {
                return (e /= i / 2) < 1
                  ? (n / 2) * e * e + t
                  : (-n / 2) * (--e * (e - 2) - 1) + t;
              },
            ],
            "ease-in-cubic": [
              "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
              function (e, t, n, i) {
                return n * (e /= i) * e * e + t;
              },
            ],
            "ease-out-cubic": [
              "cubic-bezier(0.215, 0.610, 0.355, 1)",
              function (e, t, n, i) {
                return n * ((e = e / i - 1) * e * e + 1) + t;
              },
            ],
            "ease-in-out-cubic": [
              "cubic-bezier(0.645, 0.045, 0.355, 1)",
              function (e, t, n, i) {
                return (e /= i / 2) < 1
                  ? (n / 2) * e * e * e + t
                  : (n / 2) * ((e -= 2) * e * e + 2) + t;
              },
            ],
            "ease-in-quart": [
              "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
              function (e, t, n, i) {
                return n * (e /= i) * e * e * e + t;
              },
            ],
            "ease-out-quart": [
              "cubic-bezier(0.165, 0.840, 0.440, 1)",
              function (e, t, n, i) {
                return -n * ((e = e / i - 1) * e * e * e - 1) + t;
              },
            ],
            "ease-in-out-quart": [
              "cubic-bezier(0.770, 0, 0.175, 1)",
              function (e, t, n, i) {
                return (e /= i / 2) < 1
                  ? (n / 2) * e * e * e * e + t
                  : (-n / 2) * ((e -= 2) * e * e * e - 2) + t;
              },
            ],
            "ease-in-quint": [
              "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
              function (e, t, n, i) {
                return n * (e /= i) * e * e * e * e + t;
              },
            ],
            "ease-out-quint": [
              "cubic-bezier(0.230, 1, 0.320, 1)",
              function (e, t, n, i) {
                return n * ((e = e / i - 1) * e * e * e * e + 1) + t;
              },
            ],
            "ease-in-out-quint": [
              "cubic-bezier(0.860, 0, 0.070, 1)",
              function (e, t, n, i) {
                return (e /= i / 2) < 1
                  ? (n / 2) * e * e * e * e * e + t
                  : (n / 2) * ((e -= 2) * e * e * e * e + 2) + t;
              },
            ],
            "ease-in-sine": [
              "cubic-bezier(0.470, 0, 0.745, 0.715)",
              function (e, t, n, i) {
                return -n * Math.cos((e / i) * (Math.PI / 2)) + n + t;
              },
            ],
            "ease-out-sine": [
              "cubic-bezier(0.390, 0.575, 0.565, 1)",
              function (e, t, n, i) {
                return n * Math.sin((e / i) * (Math.PI / 2)) + t;
              },
            ],
            "ease-in-out-sine": [
              "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
              function (e, t, n, i) {
                return (-n / 2) * (Math.cos((Math.PI * e) / i) - 1) + t;
              },
            ],
            "ease-in-expo": [
              "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
              function (e, t, n, i) {
                return 0 === e ? t : n * Math.pow(2, 10 * (e / i - 1)) + t;
              },
            ],
            "ease-out-expo": [
              "cubic-bezier(0.190, 1, 0.220, 1)",
              function (e, t, n, i) {
                return e === i
                  ? t + n
                  : n * (-Math.pow(2, (-10 * e) / i) + 1) + t;
              },
            ],
            "ease-in-out-expo": [
              "cubic-bezier(1, 0, 0, 1)",
              function (e, t, n, i) {
                return 0 === e
                  ? t
                  : e === i
                    ? t + n
                    : (e /= i / 2) < 1
                      ? (n / 2) * Math.pow(2, 10 * (e - 1)) + t
                      : (n / 2) * (-Math.pow(2, -10 * --e) + 2) + t;
              },
            ],
            "ease-in-circ": [
              "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
              function (e, t, n, i) {
                return -n * (Math.sqrt(1 - (e /= i) * e) - 1) + t;
              },
            ],
            "ease-out-circ": [
              "cubic-bezier(0.075, 0.820, 0.165, 1)",
              function (e, t, n, i) {
                return n * Math.sqrt(1 - (e = e / i - 1) * e) + t;
              },
            ],
            "ease-in-out-circ": [
              "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
              function (e, t, n, i) {
                return (e /= i / 2) < 1
                  ? (-n / 2) * (Math.sqrt(1 - e * e) - 1) + t
                  : (n / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + t;
              },
            ],
            "ease-in-back": [
              "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
              function (e, t, n, i, a) {
                return (
                  void 0 === a && (a = 1.70158),
                  n * (e /= i) * e * ((a + 1) * e - a) + t
                );
              },
            ],
            "ease-out-back": [
              "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
              function (e, t, n, i, a) {
                return (
                  void 0 === a && (a = 1.70158),
                  n * ((e = e / i - 1) * e * ((a + 1) * e + a) + 1) + t
                );
              },
            ],
            "ease-in-out-back": [
              "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
              function (e, t, n, i, a) {
                return (
                  void 0 === a && (a = 1.70158),
                  (e /= i / 2) < 1
                    ? (n / 2) * e * e * (((a *= 1.525) + 1) * e - a) + t
                    : (n / 2) *
                        ((e -= 2) * e * (((a *= 1.525) + 1) * e + a) + 2) +
                      t
                );
              },
            ],
          },
          f = {
            "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
            "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
            "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
          },
          p = window,
          g = "bkwld-tram",
          E = /[\-\.0-9]/g,
          m = /[A-Z]/,
          y = "number",
          I = /^(rgb|#)/,
          h = /(em|cm|mm|in|pt|pc|px)$/,
          T = /(em|cm|mm|in|pt|pc|px|%)$/,
          b = /(deg|rad|turn)$/,
          v = "unitless",
          _ = /(all|none) 0s ease 0s/,
          O = /^(width|height)$/,
          A = document.createElement("a"),
          w = ["Webkit", "Moz", "O", "ms"],
          S = ["-webkit-", "-moz-", "-o-", "-ms-"],
          L = function (e) {
            if (e in A.style) return { dom: e, css: e };
            var t,
              n,
              i = "",
              a = e.split("-");
            for (t = 0; t < a.length; t++)
              i += a[t].charAt(0).toUpperCase() + a[t].slice(1);
            for (t = 0; t < w.length; t++)
              if ((n = w[t] + i) in A.style) return { dom: n, css: S[t] + e };
          },
          R = (t.support = {
            bind: Function.prototype.bind,
            transform: L("transform"),
            transition: L("transition"),
            backface: L("backface-visibility"),
            timing: L("transition-timing-function"),
          });
        if (R.transition) {
          var N = R.timing.dom;
          if (((A.style[N] = d["ease-in-back"][0]), !A.style[N]))
            for (var C in f) d[C][0] = f[C];
        }
        var P = (t.frame =
            (l =
              p.requestAnimationFrame ||
              p.webkitRequestAnimationFrame ||
              p.mozRequestAnimationFrame ||
              p.oRequestAnimationFrame ||
              p.msRequestAnimationFrame) && R.bind
              ? l.bind(p)
              : function (e) {
                  p.setTimeout(e, 16);
                }),
          F = (t.now =
            (u =
              (c = p.performance) &&
              (c.now || c.webkitNow || c.msNow || c.mozNow)) && R.bind
              ? u.bind(c)
              : Date.now ||
                function () {
                  return +new Date();
                }),
          M = s(function (t) {
            function n(e, t) {
              var n = (function (e) {
                  for (var t = -1, n = e ? e.length : 0, i = []; ++t < n; ) {
                    var a = e[t];
                    a && i.push(a);
                  }
                  return i;
                })(("" + e).split(" ")),
                i = n[0];
              t = t || {};
              var a = H[i];
              if (!a) return o("Unsupported property: " + i);
              if (!t.weak || !this.props[i]) {
                var r = a[0],
                  l = this.props[i];
                return (
                  l || (l = this.props[i] = new r.Bare()),
                  l.init(this.$el, n, a, t),
                  l
                );
              }
            }
            function i(e, t, i) {
              if (e) {
                var o = typeof e;
                if (
                  (t ||
                    (this.timer && this.timer.destroy(),
                    (this.queue = []),
                    (this.active = !1)),
                  "number" == o && t)
                )
                  return (
                    (this.timer = new B({
                      duration: e,
                      context: this,
                      complete: a,
                    })),
                    void (this.active = !0)
                  );
                if ("string" == o && t) {
                  switch (e) {
                    case "hide":
                      c.call(this);
                      break;
                    case "stop":
                      l.call(this);
                      break;
                    case "redraw":
                      u.call(this);
                      break;
                    default:
                      n.call(this, e, i && i[1]);
                  }
                  return a.call(this);
                }
                if ("function" == o) return void e.call(this, this);
                if ("object" == o) {
                  var f = 0;
                  (d.call(
                    this,
                    e,
                    function (e, t) {
                      (e.span > f && (f = e.span), e.stop(), e.animate(t));
                    },
                    function (e) {
                      "wait" in e && (f = r(e.wait, 0));
                    },
                  ),
                    s.call(this),
                    f > 0 &&
                      ((this.timer = new B({ duration: f, context: this })),
                      (this.active = !0),
                      t && (this.timer.complete = a)));
                  var p = this,
                    g = !1,
                    E = {};
                  P(function () {
                    (d.call(p, e, function (e) {
                      e.active && ((g = !0), (E[e.name] = e.nextStyle));
                    }),
                      g && p.$el.css(E));
                  });
                }
              }
            }
            function a() {
              if (
                (this.timer && this.timer.destroy(),
                (this.active = !1),
                this.queue.length)
              ) {
                var e = this.queue.shift();
                i.call(this, e.options, !0, e.args);
              }
            }
            function l(e) {
              var t;
              (this.timer && this.timer.destroy(),
                (this.queue = []),
                (this.active = !1),
                "string" == typeof e
                  ? ((t = {})[e] = 1)
                  : (t = "object" == typeof e && null != e ? e : this.props),
                d.call(this, t, f),
                s.call(this));
            }
            function c() {
              (l.call(this), (this.el.style.display = "none"));
            }
            function u() {
              this.el.offsetHeight;
            }
            function s() {
              var e,
                t,
                n = [];
              for (e in (this.upstream && n.push(this.upstream), this.props))
                (t = this.props[e]).active && n.push(t.string);
              ((n = n.join(",")),
                this.style !== n &&
                  ((this.style = n), (this.el.style[R.transition.dom] = n)));
            }
            function d(e, t, i) {
              var a,
                r,
                o,
                l,
                c = t !== f,
                u = {};
              for (a in e)
                ((o = e[a]),
                  a in Q
                    ? (u.transform || (u.transform = {}), (u.transform[a] = o))
                    : (m.test(a) &&
                        (a = a.replace(/[A-Z]/g, function (e) {
                          return "-" + e.toLowerCase();
                        })),
                      a in H ? (u[a] = o) : (l || (l = {}), (l[a] = o))));
              for (a in u) {
                if (((o = u[a]), !(r = this.props[a]))) {
                  if (!c) continue;
                  r = n.call(this, a);
                }
                t.call(this, r, o);
              }
              i && l && i.call(this, l);
            }
            function f(e) {
              e.stop();
            }
            function p(e, t) {
              e.set(t);
            }
            function E(e) {
              this.$el.css(e);
            }
            function y(e, n) {
              t[e] = function () {
                return this.children
                  ? I.call(this, n, arguments)
                  : (this.el && n.apply(this, arguments), this);
              };
            }
            function I(e, t) {
              var n,
                i = this.children.length;
              for (n = 0; i > n; n++) e.apply(this.children[n], t);
              return this;
            }
            ((t.init = function (t) {
              if (
                ((this.$el = e(t)),
                (this.el = this.$el[0]),
                (this.props = {}),
                (this.queue = []),
                (this.style = ""),
                (this.active = !1),
                Y.keepInherited && !Y.fallback)
              ) {
                var n = X(this.el, "transition");
                n && !_.test(n) && (this.upstream = n);
              }
              R.backface &&
                Y.hideBackface &&
                W(this.el, R.backface.css, "hidden");
            }),
              y("add", n),
              y("start", i),
              y("wait", function (e) {
                ((e = r(e, 0)),
                  this.active
                    ? this.queue.push({ options: e })
                    : ((this.timer = new B({
                        duration: e,
                        context: this,
                        complete: a,
                      })),
                      (this.active = !0)));
              }),
              y("then", function (e) {
                return this.active
                  ? (this.queue.push({ options: e, args: arguments }),
                    void (this.timer.complete = a))
                  : o(
                      "No active transition timer. Use start() or wait() before then().",
                    );
              }),
              y("next", a),
              y("stop", l),
              y("set", function (e) {
                (l.call(this, e), d.call(this, e, p, E));
              }),
              y("show", function (e) {
                ("string" != typeof e && (e = "block"),
                  (this.el.style.display = e));
              }),
              y("hide", c),
              y("redraw", u),
              y("destroy", function () {
                (l.call(this),
                  e.removeData(this.el, g),
                  (this.$el = this.el = null));
              }));
          }),
          D = s(M, function (t) {
            function n(t, n) {
              var i = e.data(t, g) || e.data(t, g, new M.Bare());
              return (i.el || i.init(t), n ? i.start(n) : i);
            }
            t.init = function (t, i) {
              var a = e(t);
              if (!a.length) return this;
              if (1 === a.length) return n(a[0], i);
              var r = [];
              return (
                a.each(function (e, t) {
                  r.push(n(t, i));
                }),
                (this.children = r),
                this
              );
            };
          }),
          G = s(function (e) {
            function t() {
              var e = this.get();
              this.update("auto");
              var t = this.get();
              return (this.update(e), t);
            }
            ((e.init = function (e, t, n, i) {
              ((this.$el = e), (this.el = e[0]));
              var a,
                o,
                l,
                c = t[0];
              (n[2] && (c = n[2]),
                z[c] && (c = z[c]),
                (this.name = c),
                (this.type = n[1]),
                (this.duration = r(t[1], this.duration, 500)),
                (this.ease =
                  ((a = t[2]),
                  (o = this.ease),
                  (l = "ease"),
                  void 0 !== o && (l = o),
                  a in d ? a : l)),
                (this.delay = r(t[3], this.delay, 0)),
                (this.span = this.duration + this.delay),
                (this.active = !1),
                (this.nextStyle = null),
                (this.auto = O.test(this.name)),
                (this.unit = i.unit || this.unit || Y.defaultUnit),
                (this.angle = i.angle || this.angle || Y.defaultAngle),
                Y.fallback || i.fallback
                  ? (this.animate = this.fallback)
                  : ((this.animate = this.transition),
                    (this.string =
                      this.name +
                      " " +
                      this.duration +
                      "ms" +
                      ("ease" != this.ease ? " " + d[this.ease][0] : "") +
                      (this.delay ? " " + this.delay + "ms" : ""))));
            }),
              (e.set = function (e) {
                ((e = this.convert(e, this.type)),
                  this.update(e),
                  this.redraw());
              }),
              (e.transition = function (e) {
                ((this.active = !0),
                  (e = this.convert(e, this.type)),
                  this.auto &&
                    ("auto" == this.el.style[this.name] &&
                      (this.update(this.get()), this.redraw()),
                    "auto" == e && (e = t.call(this))),
                  (this.nextStyle = e));
              }),
              (e.fallback = function (e) {
                var n =
                  this.el.style[this.name] ||
                  this.convert(this.get(), this.type);
                ((e = this.convert(e, this.type)),
                  this.auto &&
                    ("auto" == n && (n = this.convert(this.get(), this.type)),
                    "auto" == e && (e = t.call(this))),
                  (this.tween = new V({
                    from: n,
                    to: e,
                    duration: this.duration,
                    delay: this.delay,
                    ease: this.ease,
                    update: this.update,
                    context: this,
                  })));
              }),
              (e.get = function () {
                return X(this.el, this.name);
              }),
              (e.update = function (e) {
                W(this.el, this.name, e);
              }),
              (e.stop = function () {
                (this.active || this.nextStyle) &&
                  ((this.active = !1),
                  (this.nextStyle = null),
                  W(this.el, this.name, this.get()));
                var e = this.tween;
                e && e.context && e.destroy();
              }),
              (e.convert = function (e, t) {
                if ("auto" == e && this.auto) return e;
                var n,
                  a,
                  r = "number" == typeof e,
                  l = "string" == typeof e;
                switch (t) {
                  case y:
                    if (r) return e;
                    if (l && "" === e.replace(E, "")) return +e;
                    a = "number(unitless)";
                    break;
                  case I:
                    if (l) {
                      if ("" === e && this.original) return this.original;
                      if (t.test(e))
                        return "#" == e.charAt(0) && 7 == e.length
                          ? e
                          : ((n = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(e))
                              ? i(n[1], n[2], n[3])
                              : e
                            ).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
                    }
                    a = "hex or rgb string";
                    break;
                  case h:
                    if (r) return e + this.unit;
                    if (l && t.test(e)) return e;
                    a = "number(px) or string(unit)";
                    break;
                  case T:
                    if (r) return e + this.unit;
                    if (l && t.test(e)) return e;
                    a = "number(px) or string(unit or %)";
                    break;
                  case b:
                    if (r) return e + this.angle;
                    if (l && t.test(e)) return e;
                    a = "number(deg) or string(angle)";
                    break;
                  case v:
                    if (r || (l && T.test(e))) return e;
                    a = "number(unitless) or string(unit or %)";
                }
                return (
                  o(
                    "Type warning: Expected: [" +
                      a +
                      "] Got: [" +
                      typeof e +
                      "] " +
                      e,
                  ),
                  e
                );
              }),
              (e.redraw = function () {
                this.el.offsetHeight;
              }));
          }),
          k = s(G, function (e, t) {
            e.init = function () {
              (t.init.apply(this, arguments),
                this.original || (this.original = this.convert(this.get(), I)));
            };
          }),
          x = s(G, function (e, t) {
            ((e.init = function () {
              (t.init.apply(this, arguments), (this.animate = this.fallback));
            }),
              (e.get = function () {
                return this.$el[this.name]();
              }),
              (e.update = function (e) {
                this.$el[this.name](e);
              }));
          }),
          U = s(G, function (e, t) {
            function n(e, t) {
              var n, i, a, r, o;
              for (n in e)
                ((a = (r = Q[n])[0]),
                  (i = r[1] || n),
                  (o = this.convert(e[n], a)),
                  t.call(this, i, o, a));
            }
            ((e.init = function () {
              (t.init.apply(this, arguments),
                this.current ||
                  ((this.current = {}),
                  Q.perspective &&
                    Y.perspective &&
                    ((this.current.perspective = Y.perspective),
                    W(this.el, this.name, this.style(this.current)),
                    this.redraw())));
            }),
              (e.set = function (e) {
                (n.call(this, e, function (e, t) {
                  this.current[e] = t;
                }),
                  W(this.el, this.name, this.style(this.current)),
                  this.redraw());
              }),
              (e.transition = function (e) {
                var t = this.values(e);
                this.tween = new j({
                  current: this.current,
                  values: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                });
                var n,
                  i = {};
                for (n in this.current) i[n] = n in t ? t[n] : this.current[n];
                ((this.active = !0), (this.nextStyle = this.style(i)));
              }),
              (e.fallback = function (e) {
                var t = this.values(e);
                this.tween = new j({
                  current: this.current,
                  values: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                });
              }),
              (e.update = function () {
                W(this.el, this.name, this.style(this.current));
              }),
              (e.style = function (e) {
                var t,
                  n = "";
                for (t in e) n += t + "(" + e[t] + ") ";
                return n;
              }),
              (e.values = function (e) {
                var t,
                  i = {};
                return (
                  n.call(this, e, function (e, n, a) {
                    ((i[e] = n),
                      void 0 === this.current[e] &&
                        ((t = 0),
                        ~e.indexOf("scale") && (t = 1),
                        (this.current[e] = this.convert(t, a))));
                  }),
                  i
                );
              }));
          }),
          V = s(function (t) {
            function r() {
              var e,
                t,
                n,
                i = c.length;
              if (i)
                for (P(r), t = F(), e = i; e--; ) (n = c[e]) && n.render(t);
            }
            var l = { ease: d.ease[1], from: 0, to: 1 };
            ((t.init = function (e) {
              ((this.duration = e.duration || 0), (this.delay = e.delay || 0));
              var t = e.ease || l.ease;
              (d[t] && (t = d[t][1]),
                "function" != typeof t && (t = l.ease),
                (this.ease = t),
                (this.update = e.update || a),
                (this.complete = e.complete || a),
                (this.context = e.context || this),
                (this.name = e.name));
              var n = e.from,
                i = e.to;
              (void 0 === n && (n = l.from),
                void 0 === i && (i = l.to),
                (this.unit = e.unit || ""),
                "number" == typeof n && "number" == typeof i
                  ? ((this.begin = n), (this.change = i - n))
                  : this.format(i, n),
                (this.value = this.begin + this.unit),
                (this.start = F()),
                !1 !== e.autoplay && this.play());
            }),
              (t.play = function () {
                this.active ||
                  (this.start || (this.start = F()),
                  (this.active = !0),
                  1 === c.push(this) && P(r));
              }),
              (t.stop = function () {
                var t, n;
                this.active &&
                  ((this.active = !1),
                  (n = e.inArray(this, c)) >= 0 &&
                    ((t = c.slice(n + 1)),
                    (c.length = n),
                    t.length && (c = c.concat(t))));
              }),
              (t.render = function (e) {
                var t,
                  n = e - this.start;
                if (this.delay) {
                  if (n <= this.delay) return;
                  n -= this.delay;
                }
                if (n < this.duration) {
                  var a,
                    r,
                    o = this.ease(n, 0, 1, this.duration);
                  return (
                    (t = this.startRGB
                      ? ((a = this.startRGB),
                        (r = this.endRGB),
                        i(
                          a[0] + o * (r[0] - a[0]),
                          a[1] + o * (r[1] - a[1]),
                          a[2] + o * (r[2] - a[2]),
                        ))
                      : Math.round((this.begin + o * this.change) * u) / u),
                    (this.value = t + this.unit),
                    void this.update.call(this.context, this.value)
                  );
                }
                ((t = this.endHex || this.begin + this.change),
                  (this.value = t + this.unit),
                  this.update.call(this.context, this.value),
                  this.complete.call(this.context),
                  this.destroy());
              }),
              (t.format = function (e, t) {
                if (((t += ""), "#" == (e += "").charAt(0)))
                  return (
                    (this.startRGB = n(t)),
                    (this.endRGB = n(e)),
                    (this.endHex = e),
                    (this.begin = 0),
                    void (this.change = 1)
                  );
                if (!this.unit) {
                  var i = t.replace(E, "");
                  (i !== e.replace(E, "") &&
                    o("Units do not match [tween]: " + t + ", " + e),
                    (this.unit = i));
                }
                ((t = parseFloat(t)),
                  (e = parseFloat(e)),
                  (this.begin = this.value = t),
                  (this.change = e - t));
              }),
              (t.destroy = function () {
                (this.stop(),
                  (this.context = null),
                  (this.ease = this.update = this.complete = a));
              }));
            var c = [],
              u = 1e3;
          }),
          B = s(V, function (e) {
            ((e.init = function (e) {
              ((this.duration = e.duration || 0),
                (this.complete = e.complete || a),
                (this.context = e.context),
                this.play());
            }),
              (e.render = function (e) {
                e - this.start < this.duration ||
                  (this.complete.call(this.context), this.destroy());
              }));
          }),
          j = s(V, function (e, t) {
            ((e.init = function (e) {
              var t, n;
              for (t in ((this.context = e.context),
              (this.update = e.update),
              (this.tweens = []),
              (this.current = e.current),
              e.values))
                ((n = e.values[t]),
                  this.current[t] !== n &&
                    this.tweens.push(
                      new V({
                        name: t,
                        from: this.current[t],
                        to: n,
                        duration: e.duration,
                        delay: e.delay,
                        ease: e.ease,
                        autoplay: !1,
                      }),
                    ));
              this.play();
            }),
              (e.render = function (e) {
                var t,
                  n,
                  i = this.tweens.length,
                  a = !1;
                for (t = i; t--; )
                  (n = this.tweens[t]).context &&
                    (n.render(e), (this.current[n.name] = n.value), (a = !0));
                return a
                  ? void (this.update && this.update.call(this.context))
                  : this.destroy();
              }),
              (e.destroy = function () {
                if ((t.destroy.call(this), this.tweens)) {
                  var e;
                  for (e = this.tweens.length; e--; ) this.tweens[e].destroy();
                  ((this.tweens = null), (this.current = null));
                }
              }));
          }),
          Y = (t.config = {
            debug: !1,
            defaultUnit: "px",
            defaultAngle: "deg",
            keepInherited: !1,
            hideBackface: !1,
            perspective: "",
            fallback: !R.transition,
            agentTests: [],
          });
        ((t.fallback = function (e) {
          if (!R.transition) return (Y.fallback = !0);
          Y.agentTests.push("(" + e + ")");
          var t = RegExp(Y.agentTests.join("|"), "i");
          Y.fallback = t.test(navigator.userAgent);
        }),
          t.fallback("6.0.[2-5] Safari"),
          (t.tween = function (e) {
            return new V(e);
          }),
          (t.delay = function (e, t, n) {
            return new B({ complete: t, duration: e, context: n });
          }),
          (e.fn.tram = function (e) {
            return t.call(null, this, e);
          }));
        var W = e.style,
          X = e.css,
          z = { transform: R.transform && R.transform.css },
          H = {
            color: [k, I],
            background: [k, I, "background-color"],
            "outline-color": [k, I],
            "border-color": [k, I],
            "border-top-color": [k, I],
            "border-right-color": [k, I],
            "border-bottom-color": [k, I],
            "border-left-color": [k, I],
            "border-width": [G, h],
            "border-top-width": [G, h],
            "border-right-width": [G, h],
            "border-bottom-width": [G, h],
            "border-left-width": [G, h],
            "border-spacing": [G, h],
            "letter-spacing": [G, h],
            margin: [G, h],
            "margin-top": [G, h],
            "margin-right": [G, h],
            "margin-bottom": [G, h],
            "margin-left": [G, h],
            padding: [G, h],
            "padding-top": [G, h],
            "padding-right": [G, h],
            "padding-bottom": [G, h],
            "padding-left": [G, h],
            "outline-width": [G, h],
            opacity: [G, y],
            top: [G, T],
            right: [G, T],
            bottom: [G, T],
            left: [G, T],
            "font-size": [G, T],
            "text-indent": [G, T],
            "word-spacing": [G, T],
            width: [G, T],
            "min-width": [G, T],
            "max-width": [G, T],
            height: [G, T],
            "min-height": [G, T],
            "max-height": [G, T],
            "line-height": [G, v],
            "scroll-top": [x, y, "scrollTop"],
            "scroll-left": [x, y, "scrollLeft"],
          },
          Q = {};
        (R.transform &&
          ((H.transform = [U]),
          (Q = {
            x: [T, "translateX"],
            y: [T, "translateY"],
            rotate: [b],
            rotateX: [b],
            rotateY: [b],
            scale: [y],
            scaleX: [y],
            scaleY: [y],
            skew: [b],
            skewX: [b],
            skewY: [b],
          })),
          R.transform &&
            R.backface &&
            ((Q.z = [T, "translateZ"]),
            (Q.rotateZ = [b]),
            (Q.scaleZ = [y]),
            (Q.perspective = [h])));
        var q = /ms/,
          K = /s|\./;
        return (e.tram = t);
      })(window.jQuery);
    },
    5756: function (e, t, n) {
      "use strict";
      var i,
        a,
        r,
        o,
        l,
        c,
        u,
        s,
        d,
        f,
        p,
        g,
        E,
        m,
        y,
        I,
        h,
        T,
        b,
        v,
        _ = window.$,
        O = n(5487) && _.tram;
      (((i = {}).VERSION = "1.6.0-Webflow"),
        (a = {}),
        (r = Array.prototype),
        (o = Object.prototype),
        (l = Function.prototype),
        r.push,
        (c = r.slice),
        r.concat,
        o.toString,
        (u = o.hasOwnProperty),
        (s = r.forEach),
        (d = r.map),
        r.reduce,
        r.reduceRight,
        (f = r.filter),
        r.every,
        (p = r.some),
        (g = r.indexOf),
        r.lastIndexOf,
        (E = Object.keys),
        l.bind,
        (m =
          i.each =
          i.forEach =
            function (e, t, n) {
              if (null == e) return e;
              if (s && e.forEach === s) e.forEach(t, n);
              else if (e.length === +e.length) {
                for (var r = 0, o = e.length; r < o; r++)
                  if (t.call(n, e[r], r, e) === a) return;
              } else
                for (var l = i.keys(e), r = 0, o = l.length; r < o; r++)
                  if (t.call(n, e[l[r]], l[r], e) === a) return;
              return e;
            }),
        (i.map = i.collect =
          function (e, t, n) {
            var i = [];
            return null == e
              ? i
              : d && e.map === d
                ? e.map(t, n)
                : (m(e, function (e, a, r) {
                    i.push(t.call(n, e, a, r));
                  }),
                  i);
          }),
        (i.find = i.detect =
          function (e, t, n) {
            var i;
            return (
              y(e, function (e, a, r) {
                if (t.call(n, e, a, r)) return ((i = e), !0);
              }),
              i
            );
          }),
        (i.filter = i.select =
          function (e, t, n) {
            var i = [];
            return null == e
              ? i
              : f && e.filter === f
                ? e.filter(t, n)
                : (m(e, function (e, a, r) {
                    t.call(n, e, a, r) && i.push(e);
                  }),
                  i);
          }),
        (y =
          i.some =
          i.any =
            function (e, t, n) {
              t || (t = i.identity);
              var r = !1;
              return null == e
                ? r
                : p && e.some === p
                  ? e.some(t, n)
                  : (m(e, function (e, i, o) {
                      if (r || (r = t.call(n, e, i, o))) return a;
                    }),
                    !!r);
            }),
        (i.contains = i.include =
          function (e, t) {
            return (
              null != e &&
              (g && e.indexOf === g
                ? -1 != e.indexOf(t)
                : y(e, function (e) {
                    return e === t;
                  }))
            );
          }),
        (i.delay = function (e, t) {
          var n = c.call(arguments, 2);
          return setTimeout(function () {
            return e.apply(null, n);
          }, t);
        }),
        (i.defer = function (e) {
          return i.delay.apply(i, [e, 1].concat(c.call(arguments, 1)));
        }),
        (i.throttle = function (e) {
          var t, n, i;
          return function () {
            t ||
              ((t = !0),
              (n = arguments),
              (i = this),
              O.frame(function () {
                ((t = !1), e.apply(i, n));
              }));
          };
        }),
        (i.debounce = function (e, t, n) {
          var a,
            r,
            o,
            l,
            c,
            u = function () {
              var s = i.now() - l;
              s < t
                ? (a = setTimeout(u, t - s))
                : ((a = null), n || ((c = e.apply(o, r)), (o = r = null)));
            };
          return function () {
            ((o = this), (r = arguments), (l = i.now()));
            var s = n && !a;
            return (
              a || (a = setTimeout(u, t)),
              s && ((c = e.apply(o, r)), (o = r = null)),
              c
            );
          };
        }),
        (i.defaults = function (e) {
          if (!i.isObject(e)) return e;
          for (var t = 1, n = arguments.length; t < n; t++) {
            var a = arguments[t];
            for (var r in a) void 0 === e[r] && (e[r] = a[r]);
          }
          return e;
        }),
        (i.keys = function (e) {
          if (!i.isObject(e)) return [];
          if (E) return E(e);
          var t = [];
          for (var n in e) i.has(e, n) && t.push(n);
          return t;
        }),
        (i.has = function (e, t) {
          return u.call(e, t);
        }),
        (i.isObject = function (e) {
          return e === Object(e);
        }),
        (i.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (i.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        }),
        (I = /(.)^/),
        (h = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        }),
        (T = /\\|'|\r|\n|\u2028|\u2029/g),
        (b = function (e) {
          return "\\" + h[e];
        }),
        (v = /^\s*(\w|\$)+\s*$/),
        (i.template = function (e, t, n) {
          !t && n && (t = n);
          var a,
            r = RegExp(
              [
                ((t = i.defaults({}, t, i.templateSettings)).escape || I)
                  .source,
                (t.interpolate || I).source,
                (t.evaluate || I).source,
              ].join("|") + "|$",
              "g",
            ),
            o = 0,
            l = "__p+='";
          (e.replace(r, function (t, n, i, a, r) {
            return (
              (l += e.slice(o, r).replace(T, b)),
              (o = r + t.length),
              n
                ? (l += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
                : i
                  ? (l += "'+\n((__t=(" + i + "))==null?'':__t)+\n'")
                  : a && (l += "';\n" + a + "\n__p+='"),
              t
            );
          }),
            (l += "';\n"));
          var c = t.variable;
          if (c) {
            if (!v.test(c))
              throw Error("variable is not a bare identifier: " + c);
          } else ((l = "with(obj||{}){\n" + l + "}\n"), (c = "obj"));
          l =
            "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
            l +
            "return __p;\n";
          try {
            a = Function(t.variable || "obj", "_", l);
          } catch (e) {
            throw ((e.source = l), e);
          }
          var u = function (e) {
            return a.call(this, e, i);
          };
          return ((u.source = "function(" + c + "){\n" + l + "}"), u);
        }),
        (e.exports = i));
    },
    9461: function (e, t, n) {
      "use strict";
      var i = n(3949);
      i.define(
        "brand",
        (e.exports = function (e) {
          var t,
            n = {},
            a = document,
            r = e("html"),
            o = e("body"),
            l = window.location,
            c = /PhantomJS/i.test(navigator.userAgent),
            u =
              "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
          function s() {
            var n =
              a.fullScreen ||
              a.mozFullScreen ||
              a.webkitIsFullScreen ||
              a.msFullscreenElement ||
              !!a.webkitFullscreenElement;
            e(t).attr("style", n ? "display: none !important;" : "");
          }
          function d() {
            var e = o.children(".w-webflow-badge"),
              n = e.length && e.get(0) === t,
              a = i.env("editor");
            if (n) {
              a && e.remove();
              return;
            }
            (e.length && e.remove(), a || o.append(t));
          }
          return (
            (n.ready = function () {
              var n,
                i,
                o,
                f = r.attr("data-wf-status"),
                p = r.attr("data-wf-domain") || "";
              (/\.webflow\.io$/i.test(p) && l.hostname !== p && (f = !0),
                f &&
                  !c &&
                  ((t =
                    t ||
                    ((n = e('<a class="w-webflow-badge"></a>').attr(
                      "href",
                      "https://webflow.com?utm_campaign=brandjs",
                    )),
                    (i = e("<img>")
                      .attr(
                        "src",
                        "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg",
                      )
                      .attr("alt", "")
                      .css({ marginRight: "4px", width: "26px" })),
                    (o = e("<img>")
                      .attr(
                        "src",
                        "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg",
                      )
                      .attr("alt", "Made in Webflow")),
                    n.append(i, o),
                    n[0])),
                  d(),
                  setTimeout(d, 500),
                  e(a).off(u, s).on(u, s)));
            }),
            n
          );
        }),
      );
    },
    322: function (e, t, n) {
      "use strict";
      var i = n(3949);
      i.define(
        "edit",
        (e.exports = function (e, t, n) {
          if (
            ((n = n || {}),
            (i.env("test") || i.env("frame")) &&
              !n.fixture &&
              !(function () {
                try {
                  return !!(window.top.__Cypress__ || window.PLAYWRIGHT_TEST);
                } catch (e) {
                  return !1;
                }
              })())
          )
            return { exit: 1 };
          var a,
            r = e(window),
            o = e(document.documentElement),
            l = document.location,
            c = "hashchange",
            u =
              n.load ||
              function () {
                var t, n, i;
                ((a = !0),
                  (window.WebflowEditor = !0),
                  r.off(c, d),
                  (t = function (t) {
                    var n;
                    e.ajax({
                      url: p("https://editor-api.webflow.com/api/editor/view"),
                      data: { siteId: o.attr("data-wf-site") },
                      xhrFields: { withCredentials: !0 },
                      dataType: "json",
                      crossDomain: !0,
                      success:
                        ((n = t),
                        function (t) {
                          var i, a, r;
                          if (!t)
                            return void console.error(
                              "Could not load editor data",
                            );
                          ((t.thirdPartyCookiesSupported = n),
                            (a =
                              (i = t.scriptPath).indexOf("//") >= 0
                                ? i
                                : p("https://editor-api.webflow.com" + i)),
                            (r = function () {
                              window.WebflowEditor(t);
                            }),
                            e
                              .ajax({
                                type: "GET",
                                url: a,
                                dataType: "script",
                                cache: !0,
                              })
                              .then(r, f));
                        }),
                    });
                  }),
                  ((n = window.document.createElement("iframe")).src =
                    "https://webflow.com/site/third-party-cookie-check.html"),
                  (n.style.display = "none"),
                  (n.sandbox = "allow-scripts allow-same-origin"),
                  (i = function (e) {
                    "WF_third_party_cookies_unsupported" === e.data
                      ? (g(n, i), t(!1))
                      : "WF_third_party_cookies_supported" === e.data &&
                        (g(n, i), t(!0));
                  }),
                  (n.onerror = function () {
                    (g(n, i), t(!1));
                  }),
                  window.addEventListener("message", i, !1),
                  window.document.body.appendChild(n));
              },
            s = !1;
          try {
            s =
              localStorage &&
              localStorage.getItem &&
              localStorage.getItem("WebflowEditor");
          } catch (e) {}
          function d() {
            !a && /\?edit/.test(l.hash) && u();
          }
          function f(e, t, n) {
            throw (console.error("Could not load editor script: " + t), n);
          }
          function p(e) {
            return e.replace(/([^:])\/\//g, "$1/");
          }
          function g(e, t) {
            (window.removeEventListener("message", t, !1), e.remove());
          }
          return (
            /[?&](update)(?:[=&?]|$)/.test(l.search) || /\?update$/.test(l.href)
              ? (function () {
                  var e = document.documentElement,
                    t = e.getAttribute("data-wf-site"),
                    n = e.getAttribute("data-wf-page"),
                    i = e.getAttribute("data-wf-item-slug"),
                    a = e.getAttribute("data-wf-collection"),
                    r = e.getAttribute("data-wf-domain");
                  if (t && n) {
                    var o = "pageId=" + n + "&mode=edit";
                    ((o += "&simulateRole=editor&utm_source=legacy_editor"),
                      i &&
                        a &&
                        r &&
                        (o +=
                          "&domain=" +
                          encodeURIComponent(r) +
                          "&itemSlug=" +
                          encodeURIComponent(i) +
                          "&collectionId=" +
                          a),
                      (window.location.href =
                        "https://webflow.com/external/designer/" +
                        t +
                        "?" +
                        o));
                  }
                })()
              : s
                ? u()
                : l.search
                  ? (/[?&](edit)(?:[=&?]|$)/.test(l.search) ||
                      /\?edit$/.test(l.href)) &&
                    u()
                  : r.on(c, d).triggerHandler(c),
            {}
          );
        }),
      );
    },
    2338: function (e, t, n) {
      "use strict";
      n(3949).define(
        "focus-visible",
        (e.exports = function () {
          return {
            ready: function () {
              if ("undefined" != typeof document)
                try {
                  document.querySelector(":focus-visible");
                } catch (e) {
                  !(function (e) {
                    var t = !0,
                      n = !1,
                      i = null,
                      a = {
                        text: !0,
                        search: !0,
                        url: !0,
                        tel: !0,
                        email: !0,
                        password: !0,
                        number: !0,
                        date: !0,
                        month: !0,
                        week: !0,
                        time: !0,
                        datetime: !0,
                        "datetime-local": !0,
                      };
                    function r(e) {
                      return (
                        !!e &&
                        e !== document &&
                        "HTML" !== e.nodeName &&
                        "BODY" !== e.nodeName &&
                        "classList" in e &&
                        "contains" in e.classList
                      );
                    }
                    function o(e) {
                      e.getAttribute("data-wf-focus-visible") ||
                        e.setAttribute("data-wf-focus-visible", "true");
                    }
                    function l() {
                      t = !1;
                    }
                    function c() {
                      (document.addEventListener("mousemove", u),
                        document.addEventListener("mousedown", u),
                        document.addEventListener("mouseup", u),
                        document.addEventListener("pointermove", u),
                        document.addEventListener("pointerdown", u),
                        document.addEventListener("pointerup", u),
                        document.addEventListener("touchmove", u),
                        document.addEventListener("touchstart", u),
                        document.addEventListener("touchend", u));
                    }
                    function u(e) {
                      (e.target.nodeName &&
                        "html" === e.target.nodeName.toLowerCase()) ||
                        ((t = !1),
                        document.removeEventListener("mousemove", u),
                        document.removeEventListener("mousedown", u),
                        document.removeEventListener("mouseup", u),
                        document.removeEventListener("pointermove", u),
                        document.removeEventListener("pointerdown", u),
                        document.removeEventListener("pointerup", u),
                        document.removeEventListener("touchmove", u),
                        document.removeEventListener("touchstart", u),
                        document.removeEventListener("touchend", u));
                    }
                    (document.addEventListener(
                      "keydown",
                      function (n) {
                        n.metaKey ||
                          n.altKey ||
                          n.ctrlKey ||
                          (r(e.activeElement) && o(e.activeElement), (t = !0));
                      },
                      !0,
                    ),
                      document.addEventListener("mousedown", l, !0),
                      document.addEventListener("pointerdown", l, !0),
                      document.addEventListener("touchstart", l, !0),
                      document.addEventListener(
                        "visibilitychange",
                        function () {
                          "hidden" === document.visibilityState &&
                            (n && (t = !0), c());
                        },
                        !0,
                      ),
                      c(),
                      e.addEventListener(
                        "focus",
                        function (e) {
                          if (r(e.target)) {
                            var n, i, l;
                            (t ||
                              ((i = (n = e.target).type),
                              ("INPUT" === (l = n.tagName) &&
                                a[i] &&
                                !n.readOnly) ||
                                ("TEXTAREA" === l && !n.readOnly) ||
                                n.isContentEditable ||
                                0)) &&
                              o(e.target);
                          }
                        },
                        !0,
                      ),
                      e.addEventListener(
                        "blur",
                        function (e) {
                          if (
                            r(e.target) &&
                            e.target.hasAttribute("data-wf-focus-visible")
                          ) {
                            var t;
                            ((n = !0),
                              window.clearTimeout(i),
                              (i = window.setTimeout(function () {
                                n = !1;
                              }, 100)),
                              (t = e.target).getAttribute(
                                "data-wf-focus-visible",
                              ) && t.removeAttribute("data-wf-focus-visible"));
                          }
                        },
                        !0,
                      ));
                  })(document);
                }
            },
          };
        }),
      );
    },
    8334: function (e, t, n) {
      "use strict";
      var i = n(3949);
      i.define(
        "focus",
        (e.exports = function () {
          var e = [],
            t = !1;
          function n(n) {
            t &&
              (n.preventDefault(),
              n.stopPropagation(),
              n.stopImmediatePropagation(),
              e.unshift(n));
          }
          function a(n) {
            var i, a;
            ((a = (i = n.target).tagName),
              ((/^a$/i.test(a) && null != i.href) ||
                (/^(button|textarea)$/i.test(a) && !0 !== i.disabled) ||
                (/^input$/i.test(a) &&
                  /^(button|reset|submit|radio|checkbox)$/i.test(i.type) &&
                  !i.disabled) ||
                (!/^(button|input|textarea|select|a)$/i.test(a) &&
                  !Number.isNaN(Number.parseFloat(i.tabIndex))) ||
                /^audio$/i.test(a) ||
                (/^video$/i.test(a) && !0 === i.controls)) &&
                ((t = !0),
                setTimeout(() => {
                  for (t = !1, n.target.focus(); e.length > 0; ) {
                    var i = e.pop();
                    i.target.dispatchEvent(new MouseEvent(i.type, i));
                  }
                }, 0)));
          }
          return {
            ready: function () {
              "undefined" != typeof document &&
                document.body.hasAttribute("data-wf-focus-within") &&
                i.env.safari &&
                (document.addEventListener("mousedown", a, !0),
                document.addEventListener("mouseup", n, !0),
                document.addEventListener("click", n, !0));
            },
          };
        }),
      );
    },
    7199: function (e) {
      "use strict";
      var t = window.jQuery,
        n = {},
        i = [],
        a = ".w-ix",
        r = {
          reset: function (e, t) {
            t.__wf_intro = null;
          },
          intro: function (e, i) {
            i.__wf_intro ||
              ((i.__wf_intro = !0), t(i).triggerHandler(n.types.INTRO));
          },
          outro: function (e, i) {
            i.__wf_intro &&
              ((i.__wf_intro = null), t(i).triggerHandler(n.types.OUTRO));
          },
        };
      ((n.triggers = {}),
        (n.types = { INTRO: "w-ix-intro" + a, OUTRO: "w-ix-outro" + a }),
        (n.init = function () {
          for (var e = i.length, a = 0; a < e; a++) {
            var o = i[a];
            o[0](0, o[1]);
          }
          ((i = []), t.extend(n.triggers, r));
        }),
        (n.async = function () {
          for (var e in r) {
            var t = r[e];
            r.hasOwnProperty(e) &&
              (n.triggers[e] = function (e, n) {
                i.push([t, n]);
              });
          }
        }),
        n.async(),
        (e.exports = n));
    },
    5134: function (e, t, n) {
      "use strict";
      var i = n(7199);
      function a(e, t, n) {
        var i = document.createEvent("CustomEvent");
        (i.initCustomEvent(t, !0, !0, n || null), e.dispatchEvent(i));
      }
      var r = window.jQuery,
        o = {},
        l = ".w-ix";
      ((o.triggers = {}),
        (o.types = { INTRO: "w-ix-intro" + l, OUTRO: "w-ix-outro" + l }),
        r.extend(o.triggers, {
          reset: function (e, t) {
            i.triggers.reset(e, t);
          },
          intro: function (e, t) {
            (i.triggers.intro(e, t), a(t, "COMPONENT_ACTIVE"));
          },
          outro: function (e, t) {
            (i.triggers.outro(e, t), a(t, "COMPONENT_INACTIVE"));
          },
        }),
        (o.dispatchCustomEvent = a),
        (e.exports = o));
    },
    941: function (e, t, n) {
      "use strict";
      var i = n(3949),
        a = n(6011);
      (a.setEnv(i.env),
        i.define(
          "ix2",
          (e.exports = function () {
            return a;
          }),
        ));
    },
    3949: function (e, t, n) {
      "use strict";
      var i,
        a,
        r = {},
        o = {},
        l = [],
        c = window.Webflow || [],
        u = window.jQuery,
        s = u(window),
        d = u(document),
        f = u.isFunction,
        p = (r._ = n(5756)),
        g = (r.tram = n(5487) && u.tram),
        E = !1,
        m = !1;
      function y(e) {
        (r.env() &&
          (f(e.design) && s.on("__wf_design", e.design),
          f(e.preview) && s.on("__wf_preview", e.preview)),
          f(e.destroy) && s.on("__wf_destroy", e.destroy),
          e.ready &&
            f(e.ready) &&
            (function (e) {
              if (E) return e.ready();
              p.contains(l, e.ready) || l.push(e.ready);
            })(e));
      }
      function I(e) {
        var t;
        (f(e.design) && s.off("__wf_design", e.design),
          f(e.preview) && s.off("__wf_preview", e.preview),
          f(e.destroy) && s.off("__wf_destroy", e.destroy),
          e.ready &&
            f(e.ready) &&
            ((t = e),
            (l = p.filter(l, function (e) {
              return e !== t.ready;
            }))));
      }
      ((g.config.hideBackface = !1),
        (g.config.keepInherited = !0),
        (r.define = function (e, t, n) {
          o[e] && I(o[e]);
          var i = (o[e] = t(u, p, n) || {});
          return (y(i), i);
        }),
        (r.require = function (e) {
          return o[e];
        }),
        (r.push = function (e) {
          if (E) {
            f(e) && e();
            return;
          }
          c.push(e);
        }),
        (r.env = function (e) {
          var t = window.__wf_design,
            n = void 0 !== t;
          return e
            ? "design" === e
              ? n && t
              : "preview" === e
                ? n && !t
                : "slug" === e
                  ? n && window.__wf_slug
                  : "editor" === e
                    ? window.WebflowEditor
                    : "test" === e
                      ? window.__wf_test
                      : "frame" === e
                        ? window !== window.top
                        : void 0
            : n;
        }));
      var h = navigator.userAgent.toLowerCase(),
        T = (r.env.touch =
          "ontouchstart" in window ||
          (window.DocumentTouch && document instanceof window.DocumentTouch)),
        b = (r.env.chrome =
          /chrome/.test(h) &&
          /Google/.test(navigator.vendor) &&
          parseInt(h.match(/chrome\/(\d+)\./)[1], 10)),
        v = (r.env.ios = /(ipod|iphone|ipad)/.test(h));
      ((r.env.safari = /safari/.test(h) && !b && !v),
        T &&
          d.on("touchstart mousedown", function (e) {
            i = e.target;
          }),
        (r.validClick = T
          ? function (e) {
              return e === i || u.contains(e, i);
            }
          : function () {
              return !0;
            }));
      var _ = "resize.webflow orientationchange.webflow load.webflow",
        O = "scroll.webflow " + _;
      function A(e, t) {
        var n = [],
          i = {};
        return (
          (i.up = p.throttle(function (e) {
            p.each(n, function (t) {
              t(e);
            });
          })),
          e && t && e.on(t, i.up),
          (i.on = function (e) {
            "function" == typeof e && (p.contains(n, e) || n.push(e));
          }),
          (i.off = function (e) {
            if (!arguments.length) {
              n = [];
              return;
            }
            n = p.filter(n, function (t) {
              return t !== e;
            });
          }),
          i
        );
      }
      function w(e) {
        f(e) && e();
      }
      function S() {
        (a && (a.reject(), s.off("load", a.resolve)),
          (a = new u.Deferred()),
          s.on("load", a.resolve));
      }
      ((r.resize = A(s, _)),
        (r.scroll = A(s, O)),
        (r.redraw = A()),
        (r.location = function (e) {
          window.location = e;
        }),
        r.env() && (r.location = function () {}),
        (r.ready = function () {
          ((E = !0),
            m ? ((m = !1), p.each(o, y)) : p.each(l, w),
            p.each(c, w),
            r.resize.up());
        }),
        (r.load = function (e) {
          a.then(e);
        }),
        (r.destroy = function (e) {
          ((e = e || {}),
            (m = !0),
            s.triggerHandler("__wf_destroy"),
            null != e.domready && (E = e.domready),
            p.each(o, I),
            r.resize.off(),
            r.scroll.off(),
            r.redraw.off(),
            (l = []),
            (c = []),
            "pending" === a.state() && S());
        }),
        u(r.ready),
        S(),
        (e.exports = window.Webflow = r));
    },
    7624: function (e, t, n) {
      "use strict";
      var i = n(3949);
      i.define(
        "links",
        (e.exports = function (e, t) {
          var n,
            a,
            r,
            o = {},
            l = e(window),
            c = i.env(),
            u = window.location,
            s = document.createElement("a"),
            d = "w--current",
            f = /index\.(html|php)$/,
            p = /\/$/;
          function g() {
            var e = l.scrollTop(),
              n = l.height();
            t.each(a, function (t) {
              if (!t.link.attr("hreflang")) {
                var i = t.link,
                  a = t.sec,
                  r = a.offset().top,
                  o = a.outerHeight(),
                  l = 0.5 * n,
                  c = a.is(":visible") && r + o - l >= e && r + l <= e + n;
                t.active !== c && ((t.active = c), E(i, d, c));
              }
            });
          }
          function E(e, t, n) {
            var i = e.hasClass(t);
            (!n || !i) && (n || i) && (n ? e.addClass(t) : e.removeClass(t));
          }
          return (
            (o.ready =
              o.design =
              o.preview =
                function () {
                  ((n = c && i.env("design")),
                    (r = i.env("slug") || u.pathname || ""),
                    i.scroll.off(g),
                    (a = []));
                  for (var t = document.links, o = 0; o < t.length; ++o)
                    !(function (t) {
                      if (!t.getAttribute("hreflang")) {
                        var i =
                          (n && t.getAttribute("href-disabled")) ||
                          t.getAttribute("href");
                        if (((s.href = i), !(i.indexOf(":") >= 0))) {
                          var o = e(t);
                          if (
                            s.hash.length > 1 &&
                            s.host + s.pathname === u.host + u.pathname
                          ) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                            var l = e(s.hash);
                            l.length && a.push({ link: o, sec: l, active: !1 });
                            return;
                          }
                          "#" !== i &&
                            "" !== i &&
                            E(
                              o,
                              d,
                              (!c && s.href === u.href) ||
                                i === r ||
                                (f.test(i) && p.test(r)),
                            );
                        }
                      }
                    })(t[o]);
                  a.length && (i.scroll.on(g), g());
                }),
            o
          );
        }),
      );
    },
    286: function (e, t, n) {
      "use strict";
      var i = n(3949);
      i.define(
        "scroll",
        (e.exports = function (e) {
          var t = {
              WF_CLICK_EMPTY: "click.wf-empty-link",
              WF_CLICK_SCROLL: "click.wf-scroll",
            },
            n = window.location,
            a = !(function () {
              try {
                return !!window.frameElement;
              } catch (e) {
                return !0;
              }
            })()
              ? window.history
              : null,
            r = e(window),
            o = e(document),
            l = e(document.body),
            c =
              window.requestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              function (e) {
                window.setTimeout(e, 15);
              },
            u = i.env("editor") ? ".w-editor-body" : "body",
            s =
              "header, " +
              u +
              " > .header, " +
              u +
              " > .w-nav:not([data-no-scroll])",
            d = 'a[href="#"]',
            f = 'a[href*="#"]:not(.w-tab-link):not(' + d + ")",
            p = document.createElement("style");
          p.appendChild(
            document.createTextNode(
              '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
            ),
          );
          var g = /^#[a-zA-Z0-9][\w:.-]*$/;
          let E =
            "function" == typeof window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)");
          function m(e, t) {
            var n;
            switch (t) {
              case "add":
                (n = e.attr("tabindex"))
                  ? e.attr("data-wf-tabindex-swap", n)
                  : e.attr("tabindex", "-1");
                break;
              case "remove":
                (n = e.attr("data-wf-tabindex-swap"))
                  ? (e.attr("tabindex", n),
                    e.removeAttr("data-wf-tabindex-swap"))
                  : e.removeAttr("tabindex");
            }
            e.toggleClass("wf-force-outline-none", "add" === t);
          }
          function y(t) {
            var o = t.currentTarget;
            if (
              !(
                i.env("design") ||
                (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(o.className))
              )
            ) {
              var u =
                g.test(o.hash) && o.host + o.pathname === n.host + n.pathname
                  ? o.hash
                  : "";
              if ("" !== u) {
                var d,
                  f = e(u);
                f.length &&
                  (t && (t.preventDefault(), t.stopPropagation()),
                  (d = u),
                  n.hash !== d &&
                    a &&
                    a.pushState &&
                    !(i.env.chrome && "file:" === n.protocol) &&
                    (a.state && a.state.hash) !== d &&
                    a.pushState({ hash: d }, "", d),
                  window.setTimeout(function () {
                    !(function (t, n) {
                      var i = r.scrollTop(),
                        a = (function (t) {
                          var n = e(s),
                            i =
                              "fixed" === n.css("position")
                                ? n.outerHeight()
                                : 0,
                            a = t.offset().top - i;
                          if ("mid" === t.data("scroll")) {
                            var o = r.height() - i,
                              l = t.outerHeight();
                            l < o && (a -= Math.round((o - l) / 2));
                          }
                          return a;
                        })(t);
                      if (i !== a) {
                        var o = (function (e, t, n) {
                            if (
                              "none" ===
                                document.body.getAttribute(
                                  "data-wf-scroll-motion",
                                ) ||
                              E.matches
                            )
                              return 0;
                            var i = 1;
                            return (
                              l.add(e).each(function (e, t) {
                                var n = parseFloat(
                                  t.getAttribute("data-scroll-time"),
                                );
                                !isNaN(n) && n >= 0 && (i = n);
                              }),
                              (472.143 * Math.log(Math.abs(t - n) + 125) -
                                2e3) *
                                i
                            );
                          })(t, i, a),
                          u = Date.now(),
                          d = function () {
                            var e,
                              t,
                              r,
                              l,
                              s,
                              f = Date.now() - u;
                            (window.scroll(
                              0,
                              ((e = i),
                              (t = a),
                              (r = f) > (l = o)
                                ? t
                                : e +
                                  (t - e) *
                                    ((s = r / l) < 0.5
                                      ? 4 * s * s * s
                                      : (s - 1) * (2 * s - 2) * (2 * s - 2) +
                                        1)),
                            ),
                              f <= o ? c(d) : "function" == typeof n && n());
                          };
                        c(d);
                      }
                    })(f, function () {
                      (m(f, "add"),
                        f.get(0).focus({ preventScroll: !0 }),
                        m(f, "remove"));
                    });
                  }, 300 * !t));
              }
            }
          }
          return {
            ready: function () {
              var { WF_CLICK_EMPTY: e, WF_CLICK_SCROLL: n } = t;
              (o.on(n, f, y),
                o.on(e, d, function (e) {
                  e.preventDefault();
                }),
                document.head.insertBefore(p, document.head.firstChild));
            },
          };
        }),
      );
    },
    3695: function (e, t, n) {
      "use strict";
      n(3949).define(
        "touch",
        (e.exports = function (e) {
          var t = {},
            n = window.getSelection;
          function i(t) {
            var i,
              a,
              r = !1,
              o = !1,
              l = Math.min(Math.round(0.04 * window.innerWidth), 40);
            function c(e) {
              var t = e.touches;
              (t && t.length > 1) ||
                ((r = !0),
                t ? ((o = !0), (i = t[0].clientX)) : (i = e.clientX),
                (a = i));
            }
            function u(t) {
              if (r) {
                if (o && "mousemove" === t.type) {
                  (t.preventDefault(), t.stopPropagation());
                  return;
                }
                var i,
                  c,
                  u,
                  s,
                  f = t.touches,
                  p = f ? f[0].clientX : t.clientX,
                  g = p - a;
                ((a = p),
                  Math.abs(g) > l &&
                    n &&
                    "" === String(n()) &&
                    ((i = "swipe"),
                    (c = t),
                    (u = { direction: g > 0 ? "right" : "left" }),
                    (s = e.Event(i, { originalEvent: c })),
                    e(c.target).trigger(s, u),
                    d()));
              }
            }
            function s(e) {
              if (r && ((r = !1), o && "mouseup" === e.type)) {
                (e.preventDefault(), e.stopPropagation(), (o = !1));
                return;
              }
            }
            function d() {
              r = !1;
            }
            (t.addEventListener("touchstart", c, !1),
              t.addEventListener("touchmove", u, !1),
              t.addEventListener("touchend", s, !1),
              t.addEventListener("touchcancel", d, !1),
              t.addEventListener("mousedown", c, !1),
              t.addEventListener("mousemove", u, !1),
              t.addEventListener("mouseup", s, !1),
              t.addEventListener("mouseout", d, !1),
              (this.destroy = function () {
                (t.removeEventListener("touchstart", c, !1),
                  t.removeEventListener("touchmove", u, !1),
                  t.removeEventListener("touchend", s, !1),
                  t.removeEventListener("touchcancel", d, !1),
                  t.removeEventListener("mousedown", c, !1),
                  t.removeEventListener("mousemove", u, !1),
                  t.removeEventListener("mouseup", s, !1),
                  t.removeEventListener("mouseout", d, !1),
                  (t = null));
              }));
          }
          return (
            (e.event.special.tap = {
              bindType: "click",
              delegateType: "click",
            }),
            (t.init = function (t) {
              return (t = "string" == typeof t ? e(t).get(0) : t)
                ? new i(t)
                : null;
            }),
            (t.instance = t.init(document)),
            t
          );
        }),
      );
    },
    6524: function (e, t) {
      "use strict";
      function n(e, t, n, i, a, r, o, l, c, u, s, d, f) {
        return function (p) {
          e(p);
          var g = p.form,
            E = {
              name: g.attr("data-name") || g.attr("name") || "Untitled Form",
              pageId: g.attr("data-wf-page-id") || "",
              elementId: g.attr("data-wf-element-id") || "",
              domain: d("html").attr("data-wf-domain") || null,
              collectionId: d("html").attr("data-wf-collection") || null,
              itemSlug: d("html").attr("data-wf-item-slug") || null,
              source: t.href,
              test: n.env(),
              fields: {},
              fileUploads: {},
              dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
                g.html(),
              ),
              trackingCookies: i(),
            };
          let m = g.attr("data-wf-flow");
          m && (E.wfFlow = m);
          let y = g.attr("data-wf-locale-id");
          (y && (E.localeId = y), a(p));
          var I = r(g, E.fields);
          return I
            ? o(I)
            : ((E.fileUploads = l(g)), c(p), u)
              ? void d
                  .ajax({
                    url: f,
                    type: "POST",
                    data: E,
                    dataType: "json",
                    crossDomain: !0,
                  })
                  .done(function (e) {
                    (e && 200 === e.code && (p.success = !0), s(p));
                  })
                  .fail(function () {
                    s(p);
                  })
              : void s(p);
        };
      }
      Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
    },
    7527: function (e, t, n) {
      "use strict";
      var i = n(3949);
      let a = (e, t, n, i) => {
        let a = document.createElement("div");
        (t.appendChild(a),
          turnstile.render(a, {
            sitekey: e,
            callback: function (e) {
              n(e);
            },
            "error-callback": function () {
              i();
            },
          }));
      };
      i.define(
        "forms",
        (e.exports = function (e, t) {
          let r,
            o = "TURNSTILE_LOADED";
          var l,
            c,
            u,
            s,
            d,
            f = {},
            p = e(document),
            g = window.location,
            E = window.XDomainRequest && !window.atob,
            m = ".w-form",
            y = /e(-)?mail/i,
            I = /^\S+@\S+$/,
            h = window.alert,
            T = i.env();
          let b = p.find("[data-turnstile-sitekey]").data("turnstile-sitekey");
          var v = /list-manage[1-9]?.com/i,
            _ = t.debounce(function () {
              console.warn(
                "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.",
              );
            }, 100);
          function O(t, r) {
            var l = e(r),
              u = e.data(r, m);
            (u || (u = e.data(r, m, { form: l })), A(u));
            var f = l.closest("div.w-form");
            ((u.done = f.find("> .w-form-done")),
              (u.fail = f.find("> .w-form-fail")),
              (u.fileUploads = f.find(".w-file-upload")),
              u.fileUploads.each(function (t) {
                !(function (t, n) {
                  if (n.fileUploads && n.fileUploads[t]) {
                    var i,
                      a = e(n.fileUploads[t]),
                      r = a.find("> .w-file-upload-default"),
                      o = a.find("> .w-file-upload-uploading"),
                      l = a.find("> .w-file-upload-success"),
                      c = a.find("> .w-file-upload-error"),
                      u = r.find(".w-file-upload-input"),
                      s = r.find(".w-file-upload-label"),
                      f = s.children(),
                      p = c.find(".w-file-upload-error-msg"),
                      g = l.find(".w-file-upload-file"),
                      E = l.find(".w-file-remove-link"),
                      m = g.find(".w-file-upload-file-name"),
                      y = p.attr("data-w-size-error"),
                      I = p.attr("data-w-type-error"),
                      h = p.attr("data-w-generic-error");
                    if (
                      (T ||
                        s.on("click keydown", function (e) {
                          ("keydown" !== e.type ||
                            13 === e.which ||
                            32 === e.which) &&
                            (e.preventDefault(), u.click());
                        }),
                      s
                        .find(".w-icon-file-upload-icon")
                        .attr("aria-hidden", "true"),
                      E.find(".w-icon-file-upload-remove").attr(
                        "aria-hidden",
                        "true",
                      ),
                      T)
                    )
                      (u.on("click", function (e) {
                        e.preventDefault();
                      }),
                        s.on("click", function (e) {
                          e.preventDefault();
                        }),
                        f.on("click", function (e) {
                          e.preventDefault();
                        }));
                    else {
                      (E.on("click keydown", function (e) {
                        if ("keydown" === e.type) {
                          if (13 !== e.which && 32 !== e.which) return;
                          e.preventDefault();
                        }
                        (u.removeAttr("data-value"),
                          u.val(""),
                          m.html(""),
                          r.toggle(!0),
                          l.toggle(!1),
                          s.focus());
                      }),
                        u.on("change", function (a) {
                          var l, u, s;
                          (i =
                            a.target && a.target.files && a.target.files[0]) &&
                            (r.toggle(!1),
                            c.toggle(!1),
                            o.toggle(!0),
                            o.focus(),
                            m.text(i.name),
                            S() || w(n),
                            (n.fileUploads[t].uploading = !0),
                            (l = i),
                            (u = _),
                            (s = new URLSearchParams({
                              name: l.name,
                              size: l.size,
                            })),
                            e
                              .ajax({
                                type: "GET",
                                url: `${d}?${s}`,
                                crossDomain: !0,
                              })
                              .done(function (e) {
                                u(null, e);
                              })
                              .fail(function (e) {
                                u(e);
                              }));
                        }));
                      var b = s.outerHeight();
                      (u.height(b), u.width(1));
                    }
                  }
                  function v(e) {
                    var i = e.responseJSON && e.responseJSON.msg,
                      a = h;
                    ("string" == typeof i &&
                    0 === i.indexOf("InvalidFileTypeError")
                      ? (a = I)
                      : "string" == typeof i &&
                        0 === i.indexOf("MaxFileSizeError") &&
                        (a = y),
                      p.text(a),
                      u.removeAttr("data-value"),
                      u.val(""),
                      o.toggle(!1),
                      r.toggle(!0),
                      c.toggle(!0),
                      c.focus(),
                      (n.fileUploads[t].uploading = !1),
                      S() || A(n));
                  }
                  function _(t, n) {
                    if (t) return v(t);
                    var a = n.fileName,
                      r = n.postData,
                      o = n.fileId,
                      l = n.s3Url;
                    (u.attr("data-value", o),
                      (function (t, n, i, a, r) {
                        var o = new FormData();
                        for (var l in n) o.append(l, n[l]);
                        (o.append("file", i, a),
                          e
                            .ajax({
                              type: "POST",
                              url: t,
                              data: o,
                              processData: !1,
                              contentType: !1,
                            })
                            .done(function () {
                              r(null);
                            })
                            .fail(function (e) {
                              r(e);
                            }));
                      })(l, r, i, a, O));
                  }
                  function O(e) {
                    if (e) return v(e);
                    (o.toggle(!1),
                      l.css("display", "inline-block"),
                      l.focus(),
                      (n.fileUploads[t].uploading = !1),
                      S() || A(n));
                  }
                  function S() {
                    return (
                      (n.fileUploads && n.fileUploads.toArray()) ||
                      []
                    ).some(function (e) {
                      return e.uploading;
                    });
                  }
                })(t, u);
              }),
              b &&
                ((function (e) {
                  let t = e.btn || e.form.find(':input[type="submit"]');
                  (e.btn || (e.btn = t),
                    t.prop("disabled", !0),
                    t.addClass("w-form-loading"));
                })(u),
                S(l, !0),
                p.on(
                  "undefined" != typeof turnstile ? "ready" : o,
                  function () {
                    a(
                      b,
                      r,
                      (e) => {
                        ((u.turnstileToken = e), A(u), S(l, !1));
                      },
                      () => {
                        (A(u), u.btn && u.btn.prop("disabled", !0), S(l, !1));
                      },
                    );
                  },
                )));
            var E =
              u.form.attr("aria-label") || u.form.attr("data-name") || "Form";
            (u.done.attr("aria-label") || u.form.attr("aria-label", E),
              u.done.attr("tabindex", "-1"),
              u.done.attr("role", "region"),
              u.done.attr("aria-label") ||
                u.done.attr("aria-label", E + " success"),
              u.fail.attr("tabindex", "-1"),
              u.fail.attr("role", "region"),
              u.fail.attr("aria-label") ||
                u.fail.attr("aria-label", E + " failure"));
            var y = (u.action = l.attr("action"));
            if (
              ((u.handler = null),
              (u.redirect = l.attr("data-redirect")),
              v.test(y))
            ) {
              u.handler = P;
              return;
            }
            if (!y) {
              if (c) {
                u.handler = (0, n(6524).default)(
                  A,
                  g,
                  i,
                  C,
                  M,
                  L,
                  h,
                  R,
                  w,
                  c,
                  F,
                  e,
                  s,
                );
                return;
              }
              _();
            }
          }
          function A(e) {
            var t = (e.btn = e.form.find(':input[type="submit"]'));
            ((e.wait = e.btn.attr("data-wait") || null), (e.success = !1));
            let n = !!(b && !e.turnstileToken);
            (t.prop("disabled", n),
              t.removeClass("w-form-loading"),
              e.label && t.val(e.label));
          }
          function w(e) {
            var t = e.btn,
              n = e.wait;
            (t.prop("disabled", !0), n && ((e.label = t.val()), t.val(n)));
          }
          function S(e, t) {
            let n = e.closest(".w-form");
            t ? n.addClass("w-form-loading") : n.removeClass("w-form-loading");
          }
          function L(t, n) {
            var i = null;
            return (
              (n = n || {}),
              t
                .find(
                  ':input:not([type="submit"]):not([type="file"]):not([type="button"])',
                )
                .each(function (a, r) {
                  var o,
                    l,
                    c,
                    u,
                    s,
                    d = e(r),
                    f = d.attr("type"),
                    p =
                      d.attr("data-name") ||
                      d.attr("name") ||
                      "Field " + (a + 1);
                  p = encodeURIComponent(p);
                  var g = d.val();
                  if ("checkbox" === f) g = d.is(":checked");
                  else if ("radio" === f) {
                    if (null === n[p] || "string" == typeof n[p]) return;
                    g =
                      t
                        .find('input[name="' + d.attr("name") + '"]:checked')
                        .val() || null;
                  }
                  ("string" == typeof g && (g = e.trim(g)),
                    (n[p] = g),
                    (i =
                      i ||
                      ((o = d),
                      (l = f),
                      (c = p),
                      (u = g),
                      (s = null),
                      "password" === l
                        ? (s = "Passwords cannot be submitted.")
                        : o.attr("required")
                          ? u
                            ? y.test(o.attr("type")) &&
                              !I.test(u) &&
                              (s =
                                "Please enter a valid email address for: " + c)
                            : (s = "Please fill out the required field: " + c)
                          : "g-recaptcha-response" !== c ||
                            u ||
                            (s = "Please confirm you're not a robot."),
                      s)));
                }),
              i
            );
          }
          function R(t) {
            var n = {};
            return (
              t.find(':input[type="file"]').each(function (t, i) {
                var a = e(i),
                  r =
                    a.attr("data-name") || a.attr("name") || "File " + (t + 1),
                  o = a.attr("data-value");
                ("string" == typeof o && (o = e.trim(o)), (n[r] = o));
              }),
              n
            );
          }
          f.ready =
            f.design =
            f.preview =
              function () {
                ((function () {
                  if (b) {
                    let e = () => {
                      (((r = document.createElement("script")).src =
                        "https://challenges.cloudflare.com/turnstile/v0/api.js"),
                        document.head.appendChild(r),
                        (r.onload = () => {
                          p.trigger(o);
                        }));
                    };
                    "function" == typeof requestIdleCallback
                      ? window.requestIdleCallback(e)
                      : setTimeout(e, 200);
                  }
                })(),
                  (s =
                    "https://webflow.com/api/v1/form/" +
                    (c = e("html").attr("data-wf-site"))),
                  E &&
                    s.indexOf("https://webflow.com") >= 0 &&
                    (s = s.replace(
                      "https://webflow.com",
                      "https://formdata.webflow.com",
                    )),
                  (d = `${s}/signFile`),
                  (l = e(m + " form")).length && l.each(O),
                  (!T || i.env("preview")) &&
                    !u &&
                    (function () {
                      ((u = !0),
                        p.on("submit", m + " form", function (t) {
                          var n = e.data(this, m);
                          n.handler && ((n.evt = t), n.handler(n));
                        }));
                      let t = ".w-checkbox-input",
                        n = ".w-radio-input",
                        i = "w--redirected-checked",
                        a = "w--redirected-focus",
                        r = "w--redirected-focus-visible",
                        o = [
                          ["checkbox", t],
                          ["radio", n],
                        ];
                      (p.on(
                        "change",
                        m + ' form input[type="checkbox"]:not(' + t + ")",
                        (n) => {
                          e(n.target).siblings(t).toggleClass(i);
                        },
                      ),
                        p.on("change", m + ' form input[type="radio"]', (a) => {
                          e(`input[name="${a.target.name}"]:not(${t})`).map(
                            (t, a) => e(a).siblings(n).removeClass(i),
                          );
                          let r = e(a.target);
                          r.hasClass("w-radio-input") ||
                            r.siblings(n).addClass(i);
                        }),
                        o.forEach(([t, n]) => {
                          (p.on(
                            "focus",
                            m + ` form input[type="${t}"]:not(` + n + ")",
                            (t) => {
                              (e(t.target).siblings(n).addClass(a),
                                e(t.target)
                                  .filter(
                                    ":focus-visible, [data-wf-focus-visible]",
                                  )
                                  .siblings(n)
                                  .addClass(r));
                            },
                          ),
                            p.on(
                              "blur",
                              m + ` form input[type="${t}"]:not(` + n + ")",
                              (t) => {
                                e(t.target)
                                  .siblings(n)
                                  .removeClass(`${a} ${r}`);
                              },
                            ));
                        }));
                    })());
              };
          let N = { _mkto_trk: "marketo" };
          function C() {
            return document.cookie.split("; ").reduce(function (e, t) {
              let n = t.split("="),
                i = n[0];
              if (i in N) {
                let t = N[i],
                  a = n.slice(1).join("=");
                e[t] = a;
              }
              return e;
            }, {});
          }
          function P(n) {
            A(n);
            var i,
              a = n.form,
              r = {};
            if (/^https/.test(g.href) && !/^https/.test(n.action))
              return void a.attr("method", "post");
            M(n);
            var o = L(a, r);
            if (o) return h(o);
            (w(n),
              t.each(r, function (e, t) {
                (y.test(t) && (r.EMAIL = e),
                  /^((full[ _-]?)?name)$/i.test(t) && (i = e),
                  /^(first[ _-]?name)$/i.test(t) && (r.FNAME = e),
                  /^(last[ _-]?name)$/i.test(t) && (r.LNAME = e));
              }),
              i &&
                !r.FNAME &&
                ((r.FNAME = (i = i.split(" "))[0]),
                (r.LNAME = r.LNAME || i[1])));
            var l = n.action.replace("/post?", "/post-json?") + "&c=?",
              c = l.indexOf("u=") + 2;
            c = l.substring(c, l.indexOf("&", c));
            var u = l.indexOf("id=") + 3;
            ((r["b_" + c + "_" + (u = l.substring(u, l.indexOf("&", u)))] = ""),
              e
                .ajax({ url: l, data: r, dataType: "jsonp" })
                .done(function (e) {
                  ((n.success =
                    "success" === e.result || /already/.test(e.msg)),
                    n.success || console.info("MailChimp error: " + e.msg),
                    F(n));
                })
                .fail(function () {
                  F(n);
                }));
          }
          function F(e) {
            var t = e.form,
              n = e.redirect,
              a = e.success;
            if (a && n) return void i.location(n);
            (e.done.toggle(a),
              e.fail.toggle(!a),
              a ? e.done.focus() : e.fail.focus(),
              t.toggle(!a),
              A(e));
          }
          function M(e) {
            (e.evt && e.evt.preventDefault(), (e.evt = null));
          }
          return f;
        }),
      );
    },
    1655: function (e, t, n) {
      "use strict";
      var i = n(3949),
        a = n(5134);
      let r = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
      function o(e, t) {
        a.dispatchCustomEvent(e, "IX3_COMPONENT_STATE_CHANGE", {
          component: "navbar",
          state: t,
        });
      }
      i.define(
        "navbar",
        (e.exports = function (e, t) {
          var n,
            l,
            c,
            u,
            s = {},
            d = e.tram,
            f = e(window),
            p = e(document),
            g = t.debounce,
            E = i.env(),
            m = ".w-nav",
            y = "w--open",
            I = "w--nav-dropdown-open",
            h = "w--nav-dropdown-toggle-open",
            T = "w--nav-dropdown-list-open",
            b = "w--nav-link-open",
            v = a.triggers,
            _ = e();
          function O() {
            i.resize.off(A);
          }
          function A() {
            l.each(D);
          }
          function w(n, i) {
            var a,
              o,
              l,
              s,
              d,
              g = e(i),
              E = e.data(i, m);
            (E ||
              (E = e.data(i, m, {
                open: !1,
                el: g,
                config: {},
                selectedIdx: -1,
              })),
              (E.menu = g.find(".w-nav-menu")),
              (E.links = E.menu.find(".w-nav-link")),
              (E.dropdowns = E.menu.find(".w-dropdown")),
              (E.dropdownToggle = E.menu.find(".w-dropdown-toggle")),
              (E.dropdownList = E.menu.find(".w-dropdown-list")),
              (E.button = g.find(".w-nav-button")),
              (E.container = g.find(".w-container")),
              (E.overlayContainerId = "w-nav-overlay-" + n),
              (E.outside =
                ((a = E).outside && p.off("click" + m, a.outside),
                function (t) {
                  var n = e(t.target);
                  (u && n.closest(".w-editor-bem-EditorOverlay").length) ||
                    M(a, n);
                })));
            var y = g.find(".w-nav-brand");
            (y &&
              "/" === y.attr("href") &&
              null == y.attr("aria-label") &&
              y.attr("aria-label", "home"),
              E.button.attr("style", "-webkit-user-select: text;"),
              null == E.button.attr("aria-label") &&
                E.button.attr("aria-label", "menu"),
              E.button.attr("role", "button"),
              E.button.attr("tabindex", "0"),
              E.button.attr("aria-controls", E.overlayContainerId),
              E.button.attr("aria-haspopup", "menu"),
              E.button.attr("aria-expanded", "false"),
              E.el.off(m),
              E.button.off(m),
              E.menu.off(m),
              R(E),
              c
                ? (L(E),
                  E.el.on(
                    "setting" + m,
                    ((o = E),
                    function (e, n) {
                      n = n || {};
                      var i = f.width();
                      (R(o),
                        !0 === n.open && U(o, !0),
                        !1 === n.open && B(o, !0),
                        o.open &&
                          t.defer(function () {
                            i !== f.width() && C(o);
                          }));
                    }),
                  ))
                : ((l = E).overlay ||
                    ((l.overlay = e(
                      '<div class="w-nav-overlay" data-wf-ignore />',
                    ).appendTo(l.el)),
                    l.overlay.attr("id", l.overlayContainerId),
                    (l.parent = l.menu.parent()),
                    B(l, !0)),
                  E.button.on("click" + m, P(E)),
                  E.menu.on("click" + m, "a", F(E)),
                  E.button.on(
                    "keydown" + m,
                    ((s = E),
                    function (e) {
                      switch (e.keyCode) {
                        case r.SPACE:
                        case r.ENTER:
                          return (
                            P(s)(),
                            e.preventDefault(),
                            e.stopPropagation()
                          );
                        case r.ESCAPE:
                          return (
                            B(s),
                            e.preventDefault(),
                            e.stopPropagation()
                          );
                        case r.ARROW_RIGHT:
                        case r.ARROW_DOWN:
                        case r.HOME:
                        case r.END:
                          if (!s.open)
                            return (e.preventDefault(), e.stopPropagation());
                          return (
                            e.keyCode === r.END
                              ? (s.selectedIdx = s.links.length - 1)
                              : (s.selectedIdx = 0),
                            N(s),
                            e.preventDefault(),
                            e.stopPropagation()
                          );
                      }
                    }),
                  ),
                  E.el.on(
                    "keydown" + m,
                    ((d = E),
                    function (e) {
                      if (d.open)
                        switch (
                          ((d.selectedIdx = d.links.index(
                            document.activeElement,
                          )),
                          e.keyCode)
                        ) {
                          case r.HOME:
                          case r.END:
                            return (
                              e.keyCode === r.END
                                ? (d.selectedIdx = d.links.length - 1)
                                : (d.selectedIdx = 0),
                              N(d),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case r.ESCAPE:
                            return (
                              B(d),
                              d.button.focus(),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case r.ARROW_LEFT:
                          case r.ARROW_UP:
                            return (
                              (d.selectedIdx = Math.max(-1, d.selectedIdx - 1)),
                              N(d),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case r.ARROW_RIGHT:
                          case r.ARROW_DOWN:
                            return (
                              (d.selectedIdx = Math.min(
                                d.links.length - 1,
                                d.selectedIdx + 1,
                              )),
                              N(d),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                        }
                    }),
                  )),
              D(n, i));
          }
          function S(t, n) {
            var i = e.data(n, m);
            i && (L(i), e.removeData(n, m));
          }
          function L(e) {
            e.overlay && (B(e, !0), e.overlay.remove(), (e.overlay = null));
          }
          function R(e) {
            var n = {},
              i = e.config || {},
              a = (n.animation = e.el.attr("data-animation") || "default");
            ((n.animOver = /^over/.test(a)),
              (n.animDirect = /left$/.test(a) ? -1 : 1),
              i.animation !== a && e.open && t.defer(C, e),
              (n.easing = e.el.attr("data-easing") || "ease"),
              (n.easing2 = e.el.attr("data-easing2") || "ease"));
            var r = e.el.attr("data-duration");
            ((n.duration = null != r ? Number(r) : 400),
              (n.docHeight = e.el.attr("data-doc-height")),
              (e.config = n));
          }
          function N(e) {
            if (e.links[e.selectedIdx]) {
              var t = e.links[e.selectedIdx];
              (t.focus(), F(t));
            }
          }
          function C(e) {
            e.open && (B(e, !0), U(e, !0));
          }
          function P(e) {
            return g(function () {
              e.open ? B(e) : U(e);
            });
          }
          function F(t) {
            return function (n) {
              var a = e(this).attr("href");
              if (!i.validClick(n.currentTarget))
                return void n.preventDefault();
              a && 0 === a.indexOf("#") && t.open && B(t);
            };
          }
          ((s.ready =
            s.design =
            s.preview =
              function () {
                ((c = E && i.env("design")),
                  (u = i.env("editor")),
                  (n = e(document.body)),
                  (l = p.find(m)).length && (l.each(w), O(), i.resize.on(A)));
              }),
            (s.destroy = function () {
              ((_ = e()), O(), l && l.length && l.each(S));
            }));
          var M = g(function (e, t) {
            if (e.open) {
              var n = t.closest(".w-nav-menu");
              e.menu.is(n) || B(e);
            }
          });
          function D(t, n) {
            var i = e.data(n, m),
              a = (i.collapsed = "none" !== i.button.css("display"));
            if ((!i.open || a || c || B(i, !0), i.container.length)) {
              var r,
                o =
                  ("none" === (r = i.container.css(G)) && (r = ""),
                  function (t, n) {
                    ((n = e(n)).css(G, ""), "none" === n.css(G) && n.css(G, r));
                  });
              (i.links.each(o), i.dropdowns.each(o));
            }
            i.open && V(i);
          }
          var G = "max-width";
          function k(e, t) {
            t.setAttribute("data-nav-menu-open", "");
          }
          function x(e, t) {
            t.removeAttribute("data-nav-menu-open");
          }
          function U(e, t) {
            if (!e.open) {
              ((e.open = !0),
                e.menu.each(k),
                e.links.addClass(b),
                e.dropdowns.addClass(I),
                e.dropdownToggle.addClass(h),
                e.dropdownList.addClass(T),
                e.button.addClass(y));
              var n = e.config;
              ("none" === n.animation ||
                !d.support.transform ||
                n.duration <= 0) &&
                (t = !0);
              var a = V(e),
                r = e.menu.outerHeight(!0),
                l = e.menu.outerWidth(!0),
                u = e.el.height(),
                s = e.el[0];
              if (
                (D(0, s),
                v.intro(0, s),
                o(s, "open"),
                i.redraw.up(),
                c || p.on("click" + m, e.outside),
                t)
              )
                return void g();
              var f = "transform " + n.duration + "ms " + n.easing;
              if (
                (e.overlay &&
                  ((_ = e.menu.prev()), e.overlay.show().append(e.menu)),
                n.animOver)
              ) {
                (d(e.menu)
                  .add(f)
                  .set({ x: n.animDirect * l, height: a })
                  .start({ x: 0 })
                  .then(g),
                  e.overlay && e.overlay.width(l));
                return;
              }
              d(e.menu)
                .add(f)
                .set({ y: -(u + r) })
                .start({ y: 0 })
                .then(g);
            }
            function g() {
              e.button.attr("aria-expanded", "true");
            }
          }
          function V(e) {
            var t = e.config,
              i = t.docHeight ? p.height() : n.height();
            return (
              t.animOver
                ? e.menu.height(i)
                : "fixed" !== e.el.css("position") &&
                  (i -= e.el.outerHeight(!0)),
              e.overlay && e.overlay.height(i),
              i
            );
          }
          function B(e, t) {
            if (e.open) {
              ((e.open = !1), e.button.removeClass(y));
              var n = e.config;
              if (
                (("none" === n.animation ||
                  !d.support.transform ||
                  n.duration <= 0) &&
                  (t = !0),
                v.outro(0, e.el[0]),
                o(e.el[0], "close"),
                p.off("click" + m, e.outside),
                t)
              ) {
                (d(e.menu).stop(), c());
                return;
              }
              var i = "transform " + n.duration + "ms " + n.easing2,
                a = e.menu.outerHeight(!0),
                r = e.menu.outerWidth(!0),
                l = e.el.height();
              if (n.animOver)
                return void d(e.menu)
                  .add(i)
                  .start({ x: r * n.animDirect })
                  .then(c);
              d(e.menu)
                .add(i)
                .start({ y: -(l + a) })
                .then(c);
            }
            function c() {
              (e.menu.height(""),
                d(e.menu).set({ x: 0, y: 0 }),
                e.menu.each(x),
                e.links.removeClass(b),
                e.dropdowns.removeClass(I),
                e.dropdownToggle.removeClass(h),
                e.dropdownList.removeClass(T),
                e.overlay &&
                  e.overlay.children().length &&
                  (_.length
                    ? e.menu.insertAfter(_)
                    : e.menu.prependTo(e.parent),
                  e.overlay.attr("style", "").hide()),
                e.el.triggerHandler("w-close"),
                e.button.attr("aria-expanded", "false"));
            }
          }
          return s;
        }),
      );
    },
    3946: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        actionListPlaybackChanged: function () {
          return X;
        },
        animationFrameChanged: function () {
          return U;
        },
        clearRequested: function () {
          return D;
        },
        elementStateChanged: function () {
          return W;
        },
        eventListenerAdded: function () {
          return G;
        },
        eventStateChanged: function () {
          return x;
        },
        instanceAdded: function () {
          return B;
        },
        instanceRemoved: function () {
          return Y;
        },
        instanceStarted: function () {
          return j;
        },
        mediaQueriesDefined: function () {
          return H;
        },
        parameterChanged: function () {
          return V;
        },
        playbackRequested: function () {
          return F;
        },
        previewRequested: function () {
          return P;
        },
        rawDataImported: function () {
          return L;
        },
        sessionInitialized: function () {
          return R;
        },
        sessionStarted: function () {
          return N;
        },
        sessionStopped: function () {
          return C;
        },
        stopRequested: function () {
          return M;
        },
        testFrameRendered: function () {
          return k;
        },
        viewportWidthChanged: function () {
          return z;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = n(7087),
        o = n(9468),
        {
          IX2_RAW_DATA_IMPORTED: l,
          IX2_SESSION_INITIALIZED: c,
          IX2_SESSION_STARTED: u,
          IX2_SESSION_STOPPED: s,
          IX2_PREVIEW_REQUESTED: d,
          IX2_PLAYBACK_REQUESTED: f,
          IX2_STOP_REQUESTED: p,
          IX2_CLEAR_REQUESTED: g,
          IX2_EVENT_LISTENER_ADDED: E,
          IX2_TEST_FRAME_RENDERED: m,
          IX2_EVENT_STATE_CHANGED: y,
          IX2_ANIMATION_FRAME_CHANGED: I,
          IX2_PARAMETER_CHANGED: h,
          IX2_INSTANCE_ADDED: T,
          IX2_INSTANCE_STARTED: b,
          IX2_INSTANCE_REMOVED: v,
          IX2_ELEMENT_STATE_CHANGED: _,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: O,
          IX2_VIEWPORT_WIDTH_CHANGED: A,
          IX2_MEDIA_QUERIES_DEFINED: w,
        } = r.IX2EngineActionTypes,
        { reifyState: S } = o.IX2VanillaUtils,
        L = (e) => ({ type: l, payload: { ...S(e) } }),
        R = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: c,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        }),
        N = () => ({ type: u }),
        C = () => ({ type: s }),
        P = ({ rawData: e, defer: t }) => ({
          type: d,
          payload: { defer: t, rawData: e },
        }),
        F = ({
          actionTypeId: e = r.ActionTypeConsts.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: n,
          eventId: i,
          allowEvents: a,
          immediate: o,
          testManual: l,
          verbose: c,
          rawData: u,
        }) => ({
          type: f,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: n,
            testManual: l,
            eventId: i,
            allowEvents: a,
            immediate: o,
            verbose: c,
            rawData: u,
          },
        }),
        M = (e) => ({ type: p, payload: { actionListId: e } }),
        D = () => ({ type: g }),
        G = (e, t) => ({ type: E, payload: { target: e, listenerParams: t } }),
        k = (e = 1) => ({ type: m, payload: { step: e } }),
        x = (e, t) => ({ type: y, payload: { stateKey: e, newState: t } }),
        U = (e, t) => ({ type: I, payload: { now: e, parameters: t } }),
        V = (e, t) => ({ type: h, payload: { key: e, value: t } }),
        B = (e) => ({ type: T, payload: { ...e } }),
        j = (e, t) => ({ type: b, payload: { instanceId: e, time: t } }),
        Y = (e) => ({ type: v, payload: { instanceId: e } }),
        W = (e, t, n, i) => ({
          type: _,
          payload: { elementId: e, actionTypeId: t, current: n, actionItem: i },
        }),
        X = ({ actionListId: e, isPlaying: t }) => ({
          type: O,
          payload: { actionListId: e, isPlaying: t },
        }),
        z = ({ width: e, mediaQueries: t }) => ({
          type: A,
          payload: { width: e, mediaQueries: t },
        }),
        H = () => ({ type: w });
    },
    6011: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i,
        a = {
          actions: function () {
            return u;
          },
          destroy: function () {
            return g;
          },
          init: function () {
            return p;
          },
          setEnv: function () {
            return f;
          },
          store: function () {
            return d;
          },
        };
      for (var r in a)
        Object.defineProperty(t, r, { enumerable: !0, get: a[r] });
      let o = n(9516),
        l = (i = n(7243)) && i.__esModule ? i : { default: i },
        c = n(1970),
        u = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = s(t);
          if (n && n.has(e)) return n.get(e);
          var i = { __proto__: null },
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in e)
            if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
              var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(i, r, o)
                : (i[r] = e[r]);
            }
          return ((i.default = e), n && n.set(e, i), i);
        })(n(3946));
      function s(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (s = function (e) {
          return e ? n : t;
        })(e);
      }
      let d = (0, o.createStore)(l.default);
      function f(e) {
        e() && (0, c.observeRequests)(d);
      }
      function p(e) {
        (g(), (0, c.startEngine)({ store: d, rawData: e, allowEvents: !0 }));
      }
      function g() {
        (0, c.stopEngine)(d);
      }
    },
    5012: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        elementContains: function () {
          return h;
        },
        getChildElements: function () {
          return b;
        },
        getClosestElement: function () {
          return _;
        },
        getProperty: function () {
          return g;
        },
        getQuerySelector: function () {
          return m;
        },
        getRefType: function () {
          return O;
        },
        getSiblingElements: function () {
          return v;
        },
        getStyle: function () {
          return p;
        },
        getValidDocument: function () {
          return y;
        },
        isSiblingNode: function () {
          return T;
        },
        matchSelector: function () {
          return E;
        },
        queryDocument: function () {
          return I;
        },
        setStyle: function () {
          return f;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = n(9468),
        o = n(7087),
        { ELEMENT_MATCHES: l } = r.IX2BrowserSupport,
        {
          IX2_ID_DELIMITER: c,
          HTML_ELEMENT: u,
          PLAIN_OBJECT: s,
          WF_PAGE: d,
        } = o.IX2EngineConstants;
      function f(e, t, n) {
        e.style[t] = n;
      }
      function p(e, t) {
        return t.startsWith("--")
          ? window
              .getComputedStyle(document.documentElement)
              .getPropertyValue(t)
          : e.style instanceof CSSStyleDeclaration
            ? e.style[t]
            : void 0;
      }
      function g(e, t) {
        return e[t];
      }
      function E(e) {
        return (t) => t[l](e);
      }
      function m({ id: e, selector: t }) {
        if (e) {
          let t = e;
          if (-1 !== e.indexOf(c)) {
            let n = e.split(c),
              i = n[0];
            if (((t = n[1]), i !== document.documentElement.getAttribute(d)))
              return null;
          }
          return `[data-w-id="${t}"], [data-w-id^="${t}_instance"]`;
        }
        return t;
      }
      function y(e) {
        return null == e || e === document.documentElement.getAttribute(d)
          ? document
          : null;
      }
      function I(e, t) {
        return Array.prototype.slice.call(
          document.querySelectorAll(t ? e + " " + t : e),
        );
      }
      function h(e, t) {
        return e.contains(t);
      }
      function T(e, t) {
        return e !== t && e.parentNode === t.parentNode;
      }
      function b(e) {
        let t = [];
        for (let n = 0, { length: i } = e || []; n < i; n++) {
          let { children: i } = e[n],
            { length: a } = i;
          if (a) for (let e = 0; e < a; e++) t.push(i[e]);
        }
        return t;
      }
      function v(e = []) {
        let t = [],
          n = [];
        for (let i = 0, { length: a } = e; i < a; i++) {
          let { parentNode: a } = e[i];
          if (!a || !a.children || !a.children.length || -1 !== n.indexOf(a))
            continue;
          n.push(a);
          let r = a.firstElementChild;
          for (; null != r; )
            (-1 === e.indexOf(r) && t.push(r), (r = r.nextElementSibling));
        }
        return t;
      }
      let _ = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let n = e;
            do {
              if (n[l] && n[l](t)) return n;
              n = n.parentNode;
            } while (null != n);
            return null;
          };
      function O(e) {
        return null != e && "object" == typeof e
          ? e instanceof Element
            ? u
            : s
          : null;
      }
    },
    1970: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        observeRequests: function () {
          return Z;
        },
        startActionGroup: function () {
          return eE;
        },
        startEngine: function () {
          return ea;
        },
        stopActionGroup: function () {
          return eg;
        },
        stopAllActionGroups: function () {
          return ep;
        },
        stopEngine: function () {
          return er;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = I(n(9777)),
        o = I(n(4738)),
        l = I(n(4659)),
        c = I(n(3452)),
        u = I(n(6633)),
        s = I(n(3729)),
        d = I(n(2397)),
        f = I(n(5082)),
        p = n(7087),
        g = n(9468),
        E = n(3946),
        m = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = h(t);
          if (n && n.has(e)) return n.get(e);
          var i = { __proto__: null },
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in e)
            if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
              var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(i, r, o)
                : (i[r] = e[r]);
            }
          return ((i.default = e), n && n.set(e, i), i);
        })(n(5012)),
        y = I(n(8955));
      function I(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function h(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (h = function (e) {
          return e ? n : t;
        })(e);
      }
      let T = Object.keys(p.QuickEffectIds),
        b = (e) => T.includes(e),
        {
          COLON_DELIMITER: v,
          BOUNDARY_SELECTOR: _,
          HTML_ELEMENT: O,
          RENDER_GENERAL: A,
          W_MOD_IX: w,
        } = p.IX2EngineConstants,
        {
          getAffectedElements: S,
          getElementId: L,
          getDestinationValues: R,
          observeStore: N,
          getInstanceId: C,
          renderHTMLElement: P,
          clearAllStyles: F,
          getMaxDurationItemIndex: M,
          getComputedStyle: D,
          getInstanceOrigin: G,
          reduceListToGroup: k,
          shouldNamespaceEventParameter: x,
          getNamespacedParameterId: U,
          shouldAllowMediaQuery: V,
          cleanupHTMLElement: B,
          clearObjectCache: j,
          stringifyTarget: Y,
          mediaQueriesEqual: W,
          shallowEqual: X,
        } = g.IX2VanillaUtils,
        {
          isPluginType: z,
          createPluginInstance: H,
          getPluginDuration: Q,
        } = g.IX2VanillaPlugins,
        q = navigator.userAgent,
        K = q.match(/iPad/i) || q.match(/iPhone/);
      function Z(e) {
        (N({ store: e, select: ({ ixRequest: e }) => e.preview, onChange: J }),
          N({
            store: e,
            select: ({ ixRequest: e }) => e.playback,
            onChange: et,
          }),
          N({ store: e, select: ({ ixRequest: e }) => e.stop, onChange: en }),
          N({ store: e, select: ({ ixRequest: e }) => e.clear, onChange: ei }));
      }
      function J({ rawData: e, defer: t }, n) {
        let i = () => {
          (ea({ store: n, rawData: e, allowEvents: !0 }), ee());
        };
        t ? setTimeout(i, 0) : i();
      }
      function ee() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
      }
      function et(e, t) {
        let {
            actionTypeId: n,
            actionListId: i,
            actionItemId: a,
            eventId: r,
            allowEvents: o,
            immediate: l,
            testManual: c,
            verbose: u = !0,
          } = e,
          { rawData: s } = e;
        if (i && a && s && l) {
          let e = s.actionLists[i];
          e && (s = k({ actionList: e, actionItemId: a, rawData: s }));
        }
        if (
          (ea({ store: t, rawData: s, allowEvents: o, testManual: c }),
          (i && n === p.ActionTypeConsts.GENERAL_START_ACTION) || b(n))
        ) {
          (eg({ store: t, actionListId: i }),
            ef({ store: t, actionListId: i, eventId: r }));
          let e = eE({
            store: t,
            eventId: r,
            actionListId: i,
            immediate: l,
            verbose: u,
          });
          u &&
            e &&
            t.dispatch(
              (0, E.actionListPlaybackChanged)({
                actionListId: i,
                isPlaying: !l,
              }),
            );
        }
      }
      function en({ actionListId: e }, t) {
        (e ? eg({ store: t, actionListId: e }) : ep({ store: t }), er(t));
      }
      function ei(e, t) {
        (er(t), F({ store: t, elementApi: m }));
      }
      function ea({ store: e, rawData: t, allowEvents: n, testManual: i }) {
        let { ixSession: a } = e.getState();
        if ((t && e.dispatch((0, E.rawDataImported)(t)), !a.active)) {
          (e.dispatch(
            (0, E.sessionInitialized)({
              hasBoundaryNodes: !!document.querySelector(_),
              reducedMotion:
                document.body.hasAttribute("data-wf-ix-vacation") &&
                window.matchMedia("(prefers-reduced-motion)").matches,
            }),
          ),
          n) &&
            ((function (e) {
              let { ixData: t } = e.getState(),
                { eventTypeMap: n } = t;
              (ec(e),
                (0, d.default)(n, (t, n) => {
                  let i = y.default[n];
                  if (!i)
                    return void console.warn(
                      `IX2 event type not configured: ${n}`,
                    );
                  !(function ({ logic: e, store: t, events: n }) {
                    !(function (e) {
                      if (!K) return;
                      let t = {},
                        n = "";
                      for (let i in e) {
                        let { eventTypeId: a, target: r } = e[i],
                          o = m.getQuerySelector(r);
                        t[o] ||
                          ((a === p.EventTypeConsts.MOUSE_CLICK ||
                            a === p.EventTypeConsts.MOUSE_SECOND_CLICK) &&
                            ((t[o] = !0),
                            (n +=
                              o +
                              "{cursor: pointer;touch-action: manipulation;}")));
                      }
                      if (n) {
                        let e = document.createElement("style");
                        ((e.textContent = n), document.body.appendChild(e));
                      }
                    })(n);
                    let { types: i, handler: a } = e,
                      { ixData: c } = t.getState(),
                      { actionLists: u } = c,
                      s = eu(n, ed);
                    if (!(0, l.default)(s)) return;
                    (0, d.default)(s, (e, i) => {
                      let a = n[i],
                        {
                          action: l,
                          id: s,
                          mediaQueries: d = c.mediaQueryKeys,
                        } = a,
                        { actionListId: f } = l.config;
                      (W(d, c.mediaQueryKeys) ||
                        t.dispatch((0, E.mediaQueriesDefined)()),
                        l.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
                          (Array.isArray(a.config)
                            ? a.config
                            : [a.config]
                          ).forEach((n) => {
                            let { continuousParameterGroupId: i } = n,
                              a = (0, o.default)(
                                u,
                                `${f}.continuousParameterGroups`,
                                [],
                              ),
                              l = (0, r.default)(a, ({ id: e }) => e === i),
                              c = (n.smoothing || 0) / 100,
                              d = (n.restingState || 0) / 100;
                            l &&
                              e.forEach((e, i) => {
                                !(function ({
                                  store: e,
                                  eventStateKey: t,
                                  eventTarget: n,
                                  eventId: i,
                                  eventConfig: a,
                                  actionListId: r,
                                  parameterGroup: l,
                                  smoothing: c,
                                  restingValue: u,
                                }) {
                                  let { ixData: s, ixSession: d } =
                                      e.getState(),
                                    { events: f } = s,
                                    g = f[i],
                                    { eventTypeId: E } = g,
                                    y = {},
                                    I = {},
                                    h = [],
                                    { continuousActionGroups: T } = l,
                                    { id: b } = l;
                                  x(E, a) && (b = U(t, b));
                                  let O =
                                    d.hasBoundaryNodes && n
                                      ? m.getClosestElement(n, _)
                                      : null;
                                  (T.forEach((e) => {
                                    let { keyframe: t, actionItems: i } = e;
                                    i.forEach((e) => {
                                      let { actionTypeId: i } = e,
                                        { target: a } = e.config;
                                      if (!a) return;
                                      let r = a.boundaryMode ? O : null,
                                        o = Y(a) + v + i;
                                      if (
                                        ((I[o] = (function (e = [], t, n) {
                                          let i,
                                            a = [...e];
                                          return (
                                            a.some(
                                              (e, n) =>
                                                e.keyframe === t &&
                                                ((i = n), !0),
                                            ),
                                            null == i &&
                                              ((i = a.length),
                                              a.push({
                                                keyframe: t,
                                                actionItems: [],
                                              })),
                                            a[i].actionItems.push(n),
                                            a
                                          );
                                        })(I[o], t, e)),
                                        !y[o])
                                      ) {
                                        y[o] = !0;
                                        let { config: t } = e;
                                        S({
                                          config: t,
                                          event: g,
                                          eventTarget: n,
                                          elementRoot: r,
                                          elementApi: m,
                                        }).forEach((e) => {
                                          h.push({ element: e, key: o });
                                        });
                                      }
                                    });
                                  }),
                                    h.forEach(({ element: t, key: n }) => {
                                      let a = I[n],
                                        l = (0, o.default)(
                                          a,
                                          "[0].actionItems[0]",
                                          {},
                                        ),
                                        { actionTypeId: s } = l,
                                        d = (
                                          s === p.ActionTypeConsts.PLUGIN_RIVE
                                            ? 0 ===
                                              (
                                                l.config?.target
                                                  ?.selectorGuids || []
                                              ).length
                                            : z(s)
                                        )
                                          ? H(s)?.(t, l)
                                          : null,
                                        f = R(
                                          {
                                            element: t,
                                            actionItem: l,
                                            elementApi: m,
                                          },
                                          d,
                                        );
                                      em({
                                        store: e,
                                        element: t,
                                        eventId: i,
                                        actionListId: r,
                                        actionItem: l,
                                        destination: f,
                                        continuous: !0,
                                        parameterId: b,
                                        actionGroups: a,
                                        smoothing: c,
                                        restingValue: u,
                                        pluginInstance: d,
                                      });
                                    }));
                                })({
                                  store: t,
                                  eventStateKey: s + v + i,
                                  eventTarget: e,
                                  eventId: s,
                                  eventConfig: n,
                                  actionListId: f,
                                  parameterGroup: l,
                                  smoothing: c,
                                  restingValue: d,
                                });
                              });
                          }),
                        (l.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_START_ACTION ||
                          b(l.actionTypeId)) &&
                          ef({ store: t, actionListId: f, eventId: s }));
                    });
                    let g = (e) => {
                        let { ixSession: i } = t.getState();
                        es(s, (r, o, l) => {
                          let u = n[o],
                            s = i.eventState[l],
                            { action: d, mediaQueries: f = c.mediaQueryKeys } =
                              u;
                          if (!V(f, i.mediaQueryKey)) return;
                          let g = (n = {}) => {
                            let i = a(
                              {
                                store: t,
                                element: r,
                                event: u,
                                eventConfig: n,
                                nativeEvent: e,
                                eventStateKey: l,
                              },
                              s,
                            );
                            X(i, s) ||
                              t.dispatch((0, E.eventStateChanged)(l, i));
                          };
                          d.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
                            ? (Array.isArray(u.config)
                                ? u.config
                                : [u.config]
                              ).forEach(g)
                            : g();
                        });
                      },
                      y = (0, f.default)(g, 12),
                      I = ({ target: e = document, types: n, throttle: i }) => {
                        n.split(" ")
                          .filter(Boolean)
                          .forEach((n) => {
                            let a = i ? y : g;
                            (e.addEventListener(n, a),
                              t.dispatch((0, E.eventListenerAdded)(e, [n, a])));
                          });
                      };
                    Array.isArray(i)
                      ? i.forEach(I)
                      : "string" == typeof i && I(e);
                  })({ logic: i, store: e, events: t });
                }));
              let { ixSession: i } = e.getState();
              i.eventListeners.length &&
                (function (e) {
                  let t = () => {
                    ec(e);
                  };
                  (el.forEach((n) => {
                    (window.addEventListener(n, t),
                      e.dispatch((0, E.eventListenerAdded)(window, [n, t])));
                  }),
                    t());
                })(e);
            })(e),
            (function () {
              let { documentElement: e } = document;
              -1 === e.className.indexOf(w) && (e.className += ` ${w}`);
            })(),
            e.getState().ixSession.hasDefinedMediaQueries &&
              N({
                store: e,
                select: ({ ixSession: e }) => e.mediaQueryKey,
                onChange: () => {
                  (er(e),
                    F({ store: e, elementApi: m }),
                    ea({ store: e, allowEvents: !0 }),
                    ee());
                },
              }));
          (e.dispatch((0, E.sessionStarted)()),
            (function (e, t) {
              let n = (i) => {
                let { ixSession: a, ixParameters: r } = e.getState();
                if (a.active)
                  if ((e.dispatch((0, E.animationFrameChanged)(i, r)), t)) {
                    let t = N({
                      store: e,
                      select: ({ ixSession: e }) => e.tick,
                      onChange: (e) => {
                        (n(e), t());
                      },
                    });
                  } else requestAnimationFrame(n);
              };
              n(window.performance.now());
            })(e, i));
        }
      }
      function er(e) {
        let { ixSession: t } = e.getState();
        if (t.active) {
          let { eventListeners: n } = t;
          (n.forEach(eo), j(), e.dispatch((0, E.sessionStopped)()));
        }
      }
      function eo({ target: e, listenerParams: t }) {
        e.removeEventListener.apply(e, t);
      }
      let el = ["resize", "orientationchange"];
      function ec(e) {
        let { ixSession: t, ixData: n } = e.getState(),
          i = window.innerWidth;
        if (i !== t.viewportWidth) {
          let { mediaQueries: t } = n;
          e.dispatch(
            (0, E.viewportWidthChanged)({ width: i, mediaQueries: t }),
          );
        }
      }
      let eu = (e, t) => (0, c.default)((0, s.default)(e, t), u.default),
        es = (e, t) => {
          (0, d.default)(e, (e, n) => {
            e.forEach((e, i) => {
              t(e, n, n + v + i);
            });
          });
        },
        ed = (e) =>
          S({
            config: { target: e.target, targets: e.targets },
            elementApi: m,
          });
      function ef({ store: e, actionListId: t, eventId: n }) {
        let { ixData: i, ixSession: a } = e.getState(),
          { actionLists: r, events: l } = i,
          c = l[n],
          u = r[t];
        if (u && u.useFirstGroupAsInitialState) {
          let r = (0, o.default)(u, "actionItemGroups[0].actionItems", []);
          if (
            !V(
              (0, o.default)(c, "mediaQueries", i.mediaQueryKeys),
              a.mediaQueryKey,
            )
          )
            return;
          r.forEach((i) => {
            let { config: a, actionTypeId: r } = i,
              o = S({
                config:
                  a?.target?.useEventTarget === !0 &&
                  a?.target?.objectId == null
                    ? { target: c.target, targets: c.targets }
                    : a,
                event: c,
                elementApi: m,
              }),
              l = z(r);
            o.forEach((a) => {
              let o = l ? H(r)?.(a, i) : null;
              em({
                destination: R({ element: a, actionItem: i, elementApi: m }, o),
                immediate: !0,
                store: e,
                element: a,
                eventId: n,
                actionItem: i,
                actionListId: t,
                pluginInstance: o,
              });
            });
          });
        }
      }
      function ep({ store: e }) {
        let { ixInstances: t } = e.getState();
        (0, d.default)(t, (t) => {
          if (!t.continuous) {
            let { actionListId: n, verbose: i } = t;
            (ey(t, e),
              i &&
                e.dispatch(
                  (0, E.actionListPlaybackChanged)({
                    actionListId: n,
                    isPlaying: !1,
                  }),
                ));
          }
        });
      }
      function eg({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: i,
        actionListId: a,
      }) {
        let { ixInstances: r, ixSession: l } = e.getState(),
          c = l.hasBoundaryNodes && n ? m.getClosestElement(n, _) : null;
        (0, d.default)(r, (n) => {
          let r = (0, o.default)(n, "actionItem.config.target.boundaryMode"),
            l = !i || n.eventStateKey === i;
          if (n.actionListId === a && n.eventId === t && l) {
            if (c && r && !m.elementContains(c, n.element)) return;
            (ey(n, e),
              n.verbose &&
                e.dispatch(
                  (0, E.actionListPlaybackChanged)({
                    actionListId: a,
                    isPlaying: !1,
                  }),
                ));
          }
        });
      }
      function eE({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: i,
        actionListId: a,
        groupIndex: r = 0,
        immediate: l,
        verbose: c,
      }) {
        let { ixData: u, ixSession: s } = e.getState(),
          { events: d } = u,
          f = d[t] || {},
          { mediaQueries: p = u.mediaQueryKeys } = f,
          { actionItemGroups: g, useFirstGroupAsInitialState: E } = (0,
          o.default)(u, `actionLists.${a}`, {});
        if (!g || !g.length) return !1;
        (r >= g.length && (0, o.default)(f, "config.loop") && (r = 0),
          0 === r && E && r++);
        let y =
            (0 === r || (1 === r && E)) && b(f.action?.actionTypeId)
              ? f.config.delay
              : void 0,
          I = (0, o.default)(g, [r, "actionItems"], []);
        if (!I.length || !V(p, s.mediaQueryKey)) return !1;
        let h = s.hasBoundaryNodes && n ? m.getClosestElement(n, _) : null,
          T = M(I),
          v = !1;
        return (
          I.forEach((o, u) => {
            let { config: s, actionTypeId: d } = o,
              p = z(d),
              { target: g } = s;
            g &&
              S({
                config: s,
                event: f,
                eventTarget: n,
                elementRoot: g.boundaryMode ? h : null,
                elementApi: m,
              }).forEach((s, f) => {
                let g = p ? H(d)?.(s, o) : null,
                  E = p ? Q(d)(s, o) : null;
                v = !0;
                let I = D({ element: s, actionItem: o }),
                  h = R({ element: s, actionItem: o, elementApi: m }, g);
                em({
                  store: e,
                  element: s,
                  actionItem: o,
                  eventId: t,
                  eventTarget: n,
                  eventStateKey: i,
                  actionListId: a,
                  groupIndex: r,
                  isCarrier: T === u && 0 === f,
                  computedStyle: I,
                  destination: h,
                  immediate: l,
                  verbose: c,
                  pluginInstance: g,
                  pluginDuration: E,
                  instanceDelay: y,
                });
              });
          }),
          v
        );
      }
      function em(e) {
        let t,
          { store: n, computedStyle: i, ...a } = e,
          {
            element: r,
            actionItem: o,
            immediate: l,
            pluginInstance: c,
            continuous: u,
            restingValue: s,
            eventId: d,
          } = a,
          f = C(),
          { ixElements: g, ixSession: y, ixData: I } = n.getState(),
          h = L(g, r),
          { refState: T } = g[h] || {},
          b = m.getRefType(r),
          v = y.reducedMotion && p.ReducedMotionTypes[o.actionTypeId];
        if (v && u)
          switch (I.events[d]?.eventTypeId) {
            case p.EventTypeConsts.MOUSE_MOVE:
            case p.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
              t = s;
              break;
            default:
              t = 0.5;
          }
        let _ = G(r, T, i, o, m, c);
        if (
          (n.dispatch(
            (0, E.instanceAdded)({
              instanceId: f,
              elementId: h,
              origin: _,
              refType: b,
              skipMotion: v,
              skipToValue: t,
              ...a,
            }),
          ),
          eI(document.body, "ix2-animation-started", f),
          l)
        )
          return void (function (e, t) {
            let { ixParameters: n } = e.getState();
            (e.dispatch((0, E.instanceStarted)(t, 0)),
              e.dispatch((0, E.animationFrameChanged)(performance.now(), n)));
            let { ixInstances: i } = e.getState();
            eh(i[t], e);
          })(n, f);
        (N({ store: n, select: ({ ixInstances: e }) => e[f], onChange: eh }),
          u || n.dispatch((0, E.instanceStarted)(f, y.tick)));
      }
      function ey(e, t) {
        eI(document.body, "ix2-animation-stopping", {
          instanceId: e.id,
          state: t.getState(),
        });
        let { elementId: n, actionItem: i } = e,
          { ixElements: a } = t.getState(),
          { ref: r, refType: o } = a[n] || {};
        (o === O && B(r, i, m), t.dispatch((0, E.instanceRemoved)(e.id)));
      }
      function eI(e, t, n) {
        let i = document.createEvent("CustomEvent");
        (i.initCustomEvent(t, !0, !0, n), e.dispatchEvent(i));
      }
      function eh(e, t) {
        let {
            active: n,
            continuous: i,
            complete: a,
            elementId: r,
            actionItem: o,
            actionTypeId: l,
            renderType: c,
            current: u,
            groupIndex: s,
            eventId: d,
            eventTarget: f,
            eventStateKey: p,
            actionListId: g,
            isCarrier: y,
            styleProp: I,
            verbose: h,
            pluginInstance: T,
          } = e,
          { ixData: b, ixSession: v } = t.getState(),
          { events: _ } = b,
          { mediaQueries: w = b.mediaQueryKeys } = _ && _[d] ? _[d] : {};
        if (V(w, v.mediaQueryKey) && (i || n || a)) {
          if (u || (c === A && a)) {
            t.dispatch((0, E.elementStateChanged)(r, l, u, o));
            let { ixElements: e } = t.getState(),
              { ref: n, refType: i, refState: a } = e[r] || {},
              s = a && a[l];
            (i === O || z(l)) && P(n, a, s, d, o, I, m, c, T);
          }
          if (a) {
            if (y) {
              let e = eE({
                store: t,
                eventId: d,
                eventTarget: f,
                eventStateKey: p,
                actionListId: g,
                groupIndex: s + 1,
                verbose: h,
              });
              h &&
                !e &&
                t.dispatch(
                  (0, E.actionListPlaybackChanged)({
                    actionListId: g,
                    isPlaying: !1,
                  }),
                );
            }
            ey(e, t);
          }
        }
      }
    },
    8955: function (e, t, n) {
      "use strict";
      let i;
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return eg;
          },
        }));
      let a = d(n(5801)),
        r = d(n(4738)),
        o = d(n(3789)),
        l = n(7087),
        c = n(1970),
        u = n(3946),
        s = n(9468);
      function d(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let {
          MOUSE_CLICK: f,
          MOUSE_SECOND_CLICK: p,
          MOUSE_DOWN: g,
          MOUSE_UP: E,
          MOUSE_OVER: m,
          MOUSE_OUT: y,
          DROPDOWN_CLOSE: I,
          DROPDOWN_OPEN: h,
          SLIDER_ACTIVE: T,
          SLIDER_INACTIVE: b,
          TAB_ACTIVE: v,
          TAB_INACTIVE: _,
          NAVBAR_CLOSE: O,
          NAVBAR_OPEN: A,
          MOUSE_MOVE: w,
          PAGE_SCROLL_DOWN: S,
          SCROLL_INTO_VIEW: L,
          SCROLL_OUT_OF_VIEW: R,
          PAGE_SCROLL_UP: N,
          SCROLLING_IN_VIEW: C,
          PAGE_FINISH: P,
          ECOMMERCE_CART_CLOSE: F,
          ECOMMERCE_CART_OPEN: M,
          PAGE_START: D,
          PAGE_SCROLL: G,
        } = l.EventTypeConsts,
        k = "COMPONENT_ACTIVE",
        x = "COMPONENT_INACTIVE",
        { COLON_DELIMITER: U } = l.IX2EngineConstants,
        { getNamespacedParameterId: V } = s.IX2VanillaUtils,
        B = (e) => (t) => !!("object" == typeof t && e(t)) || t,
        j = B(({ element: e, nativeEvent: t }) => e === t.target),
        Y = B(({ element: e, nativeEvent: t }) => e.contains(t.target)),
        W = (0, a.default)([j, Y]),
        X = (e, t) => {
          if (t) {
            let { ixData: n } = e.getState(),
              { events: i } = n,
              a = i[t];
            if (a && !et[a.eventTypeId]) return a;
          }
          return null;
        },
        z = ({ store: e, event: t }) => {
          let { action: n } = t,
            { autoStopEventId: i } = n.config;
          return !!X(e, i);
        },
        H = ({ store: e, event: t, element: n, eventStateKey: i }, a) => {
          let { action: o, id: l } = t,
            { actionListId: u, autoStopEventId: s } = o.config,
            d = X(e, s);
          return (
            d &&
              (0, c.stopActionGroup)({
                store: e,
                eventId: s,
                eventTarget: n,
                eventStateKey: s + U + i.split(U)[1],
                actionListId: (0, r.default)(d, "action.config.actionListId"),
              }),
            (0, c.stopActionGroup)({
              store: e,
              eventId: l,
              eventTarget: n,
              eventStateKey: i,
              actionListId: u,
            }),
            (0, c.startActionGroup)({
              store: e,
              eventId: l,
              eventTarget: n,
              eventStateKey: i,
              actionListId: u,
            }),
            a
          );
        },
        Q = (e, t) => (n, i) => (!0 === e(n, i) ? t(n, i) : i),
        q = { handler: Q(W, H) },
        K = { ...q, types: [k, x].join(" ") },
        Z = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ],
        J = "mouseover mouseout",
        ee = { types: Z },
        et = { PAGE_START: D, PAGE_FINISH: P },
        en = (() => {
          let e = void 0 !== window.pageXOffset,
            t =
              "CSS1Compat" === document.compatMode
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : t.scrollLeft,
            scrollTop: e ? window.pageYOffset : t.scrollTop,
            stiffScrollTop: (0, o.default)(
              e ? window.pageYOffset : t.scrollTop,
              0,
              t.scrollHeight - window.innerHeight,
            ),
            scrollWidth: t.scrollWidth,
            scrollHeight: t.scrollHeight,
            clientWidth: t.clientWidth,
            clientHeight: t.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })(),
        ei = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          ),
        ea = ({ element: e, nativeEvent: t }) => {
          let { type: n, target: i, relatedTarget: a } = t,
            r = e.contains(i);
          if ("mouseover" === n && r) return !0;
          let o = e.contains(a);
          return "mouseout" === n && !!r && !!o;
        },
        er = (e) => {
          let {
              element: t,
              event: { config: n },
            } = e,
            { clientWidth: i, clientHeight: a } = en(),
            r = n.scrollOffsetValue,
            o = "PX" === n.scrollOffsetUnit ? r : (a * (r || 0)) / 100;
          return ei(t.getBoundingClientRect(), {
            left: 0,
            top: o,
            right: i,
            bottom: a - o,
          });
        },
        eo = (e) => (t, n) => {
          let { type: i } = t.nativeEvent,
            a = -1 !== [k, x].indexOf(i) ? i === k : n.isActive,
            r = { ...n, isActive: a };
          return ((!n || r.isActive !== n.isActive) && e(t, r)) || r;
        },
        el = (e) => (t, n) => {
          let i = { elementHovered: ea(t) };
          return (
            ((n ? i.elementHovered !== n.elementHovered : i.elementHovered) &&
              e(t, i)) ||
            i
          );
        },
        ec =
          (e) =>
          (t, n = {}) => {
            let i,
              a,
              { stiffScrollTop: r, scrollHeight: o, innerHeight: l } = en(),
              {
                event: { config: c, eventTypeId: u },
              } = t,
              { scrollOffsetValue: s, scrollOffsetUnit: d } = c,
              f = o - l,
              p = Number((r / f).toFixed(2));
            if (n && n.percentTop === p) return n;
            let g = ("PX" === d ? s : (l * (s || 0)) / 100) / f,
              E = 0;
            n &&
              ((i = p > n.percentTop),
              (E = (a = n.scrollingDown !== i) ? p : n.anchorTop));
            let m = u === S ? p >= E + g : p <= E - g,
              y = {
                ...n,
                percentTop: p,
                inBounds: m,
                anchorTop: E,
                scrollingDown: i,
              };
            return (n && m && (a || y.inBounds !== n.inBounds) && e(t, y)) || y;
          },
        eu = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom,
        es =
          (e) =>
          (t, n = { clickCount: 0 }) => {
            let i = { clickCount: (n.clickCount % 2) + 1 };
            return (i.clickCount !== n.clickCount && e(t, i)) || i;
          },
        ed = (e = !0) => ({
          ...K,
          handler: Q(
            e ? W : j,
            eo((e, t) => (t.isActive ? q.handler(e, t) : t)),
          ),
        }),
        ef = (e = !0) => ({
          ...K,
          handler: Q(
            e ? W : j,
            eo((e, t) => (t.isActive ? t : q.handler(e, t))),
          ),
        }),
        ep = {
          ...ee,
          handler:
            ((i = (e, t) => {
              let { elementVisible: n } = t,
                { event: i, store: a } = e,
                { ixData: r } = a.getState(),
                { events: o } = r;
              return !o[i.action.config.autoStopEventId] && t.triggered
                ? t
                : (i.eventTypeId === L) === n
                  ? (H(e), { ...t, triggered: !0 })
                  : t;
            }),
            (e, t) => {
              let n = { ...t, elementVisible: er(e) };
              return (
                ((t
                  ? n.elementVisible !== t.elementVisible
                  : n.elementVisible) &&
                  i(e, n)) ||
                n
              );
            }),
        },
        eg = {
          [T]: ed(),
          [b]: ef(),
          [h]: ed(),
          [I]: ef(),
          [A]: ed(!1),
          [O]: ef(!1),
          [v]: ed(),
          [_]: ef(),
          [M]: { types: "ecommerce-cart-open", handler: Q(W, H) },
          [F]: { types: "ecommerce-cart-close", handler: Q(W, H) },
          [f]: {
            types: "click",
            handler: Q(
              W,
              es((e, { clickCount: t }) => {
                z(e) ? 1 === t && H(e) : H(e);
              }),
            ),
          },
          [p]: {
            types: "click",
            handler: Q(
              W,
              es((e, { clickCount: t }) => {
                2 === t && H(e);
              }),
            ),
          },
          [g]: { ...q, types: "mousedown" },
          [E]: { ...q, types: "mouseup" },
          [m]: {
            types: J,
            handler: Q(
              W,
              el((e, t) => {
                t.elementHovered && H(e);
              }),
            ),
          },
          [y]: {
            types: J,
            handler: Q(
              W,
              el((e, t) => {
                t.elementHovered || H(e);
              }),
            ),
          },
          [w]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: n,
                nativeEvent: i,
                eventStateKey: a,
              },
              r = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 },
            ) => {
              let {
                  basedOn: o,
                  selectedAxis: c,
                  continuousParameterGroupId: s,
                  reverse: d,
                  restingState: f = 0,
                } = n,
                {
                  clientX: p = r.clientX,
                  clientY: g = r.clientY,
                  pageX: E = r.pageX,
                  pageY: m = r.pageY,
                } = i,
                y = "X_AXIS" === c,
                I = "mouseout" === i.type,
                h = f / 100,
                T = s,
                b = !1;
              switch (o) {
                case l.EventBasedOn.VIEWPORT:
                  h = y
                    ? Math.min(p, window.innerWidth) / window.innerWidth
                    : Math.min(g, window.innerHeight) / window.innerHeight;
                  break;
                case l.EventBasedOn.PAGE: {
                  let {
                    scrollLeft: e,
                    scrollTop: t,
                    scrollWidth: n,
                    scrollHeight: i,
                  } = en();
                  h = y ? Math.min(e + E, n) / n : Math.min(t + m, i) / i;
                  break;
                }
                case l.EventBasedOn.ELEMENT:
                default: {
                  T = V(a, s);
                  let e = 0 === i.type.indexOf("mouse");
                  if (e && !0 !== W({ element: t, nativeEvent: i })) break;
                  let n = t.getBoundingClientRect(),
                    { left: r, top: o, width: l, height: c } = n;
                  if (!e && !eu({ left: p, top: g }, n)) break;
                  ((b = !0), (h = y ? (p - r) / l : (g - o) / c));
                }
              }
              return (
                I && (h > 0.95 || h < 0.05) && (h = Math.round(h)),
                (o !== l.EventBasedOn.ELEMENT || b || b !== r.elementHovered) &&
                  ((h = d ? 1 - h : h),
                  e.dispatch((0, u.parameterChanged)(T, h))),
                {
                  elementHovered: b,
                  clientX: p,
                  clientY: g,
                  pageX: E,
                  pageY: m,
                }
              );
            },
          },
          [G]: {
            types: Z,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: n, reverse: i } = t,
                { scrollTop: a, scrollHeight: r, clientHeight: o } = en(),
                l = a / (r - o);
              ((l = i ? 1 - l : l), e.dispatch((0, u.parameterChanged)(n, l)));
            },
          },
          [C]: {
            types: Z,
            handler: (
              { element: e, store: t, eventConfig: n, eventStateKey: i },
              a = { scrollPercent: 0 },
            ) => {
              let {
                  scrollLeft: r,
                  scrollTop: o,
                  scrollWidth: c,
                  scrollHeight: s,
                  clientHeight: d,
                } = en(),
                {
                  basedOn: f,
                  selectedAxis: p,
                  continuousParameterGroupId: g,
                  startsEntering: E,
                  startsExiting: m,
                  addEndOffset: y,
                  addStartOffset: I,
                  addOffsetValue: h = 0,
                  endOffsetValue: T = 0,
                } = n;
              if (f === l.EventBasedOn.VIEWPORT) {
                let e = "X_AXIS" === p ? r / c : o / s;
                return (
                  e !== a.scrollPercent &&
                    t.dispatch((0, u.parameterChanged)(g, e)),
                  { scrollPercent: e }
                );
              }
              {
                let n = V(i, g),
                  r = e.getBoundingClientRect(),
                  o = (I ? h : 0) / 100,
                  l = (y ? T : 0) / 100;
                ((o = E ? o : 1 - o), (l = m ? l : 1 - l));
                let c = r.top + Math.min(r.height * o, d),
                  f = Math.min(d + (r.top + r.height * l - c), s),
                  p = Math.min(Math.max(0, d - c), f) / f;
                return (
                  p !== a.scrollPercent &&
                    t.dispatch((0, u.parameterChanged)(n, p)),
                  { scrollPercent: p }
                );
              }
            },
          },
          [L]: ep,
          [R]: ep,
          [S]: {
            ...ee,
            handler: ec((e, t) => {
              t.scrollingDown && H(e);
            }),
          },
          [N]: {
            ...ee,
            handler: ec((e, t) => {
              t.scrollingDown || H(e);
            }),
          },
          [P]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: Q(j, (e, t) => {
              let n = { finished: "complete" === document.readyState };
              return (n.finished && !(t && t.finshed) && H(e), n);
            }),
          },
          [D]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: Q(j, (e, t) => (t || H(e), { started: !0 })),
          },
        };
    },
    4609: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixData", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }));
      let { IX2_RAW_DATA_IMPORTED: i } = n(7087).IX2EngineActionTypes,
        a = (e = Object.freeze({}), t) =>
          t.type === i ? t.payload.ixData || Object.freeze({}) : e;
    },
    7718: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixInstances", {
          enumerable: !0,
          get: function () {
            return b;
          },
        }));
      let i = n(7087),
        a = n(9468),
        r = n(1185),
        {
          IX2_RAW_DATA_IMPORTED: o,
          IX2_SESSION_STOPPED: l,
          IX2_INSTANCE_ADDED: c,
          IX2_INSTANCE_STARTED: u,
          IX2_INSTANCE_REMOVED: s,
          IX2_ANIMATION_FRAME_CHANGED: d,
        } = i.IX2EngineActionTypes,
        {
          optimizeFloat: f,
          applyEasing: p,
          createBezierEasing: g,
        } = a.IX2EasingUtils,
        { RENDER_GENERAL: E } = i.IX2EngineConstants,
        {
          getItemConfigByKey: m,
          getRenderType: y,
          getStyleProp: I,
        } = a.IX2VanillaUtils,
        h = (e, t) => {
          let n,
            i,
            a,
            o,
            {
              position: l,
              parameterId: c,
              actionGroups: u,
              destinationKeys: s,
              smoothing: d,
              restingValue: g,
              actionTypeId: E,
              customEasingFn: y,
              skipMotion: I,
              skipToValue: h,
            } = e,
            { parameters: T } = t.payload,
            b = Math.max(1 - d, 0.01),
            v = T[c];
          null == v && ((b = 1), (v = g));
          let _ = f((Math.max(v, 0) || 0) - l),
            O = I ? h : f(l + _ * b),
            A = 100 * O;
          if (O === l && e.current) return e;
          for (let e = 0, { length: t } = u; e < t; e++) {
            let { keyframe: t, actionItems: r } = u[e];
            if ((0 === e && (n = r[0]), A >= t)) {
              n = r[0];
              let l = u[e + 1],
                c = l && A !== t;
              ((i = c ? l.actionItems[0] : null),
                c && ((a = t / 100), (o = (l.keyframe - t) / 100)));
            }
          }
          let w = {};
          if (n && !i)
            for (let e = 0, { length: t } = s; e < t; e++) {
              let t = s[e];
              w[t] = m(E, t, n.config);
            }
          else if (n && i && void 0 !== a && void 0 !== o) {
            let e = (O - a) / o,
              t = p(n.config.easing, e, y);
            for (let e = 0, { length: a } = s; e < a; e++) {
              let a = s[e],
                r = m(E, a, n.config),
                o = (m(E, a, i.config) - r) * t + r;
              w[a] = o;
            }
          }
          return (0, r.merge)(e, { position: O, current: w });
        },
        T = (e, t) => {
          let {
              active: n,
              origin: i,
              start: a,
              immediate: o,
              renderType: l,
              verbose: c,
              actionItem: u,
              destination: s,
              destinationKeys: d,
              pluginDuration: g,
              instanceDelay: m,
              customEasingFn: y,
              skipMotion: I,
            } = e,
            h = u.config.easing,
            { duration: T, delay: b } = u.config;
          (null != g && (T = g),
            (b = null != m ? m : b),
            l === E ? (T = 0) : (o || I) && (T = b = 0));
          let { now: v } = t.payload;
          if (n && i) {
            let t = v - (a + b);
            if (c) {
              let t = T + b,
                n = f(Math.min(Math.max(0, (v - a) / t), 1));
              e = (0, r.set)(e, "verboseTimeElapsed", t * n);
            }
            if (t < 0) return e;
            let n = f(Math.min(Math.max(0, t / T), 1)),
              o = p(h, n, y),
              l = {},
              u = null;
            return (
              d.length &&
                (u = d.reduce((e, t) => {
                  let n = s[t],
                    a = parseFloat(i[t]) || 0,
                    r = parseFloat(n) - a;
                  return ((e[t] = r * o + a), e);
                }, {})),
              (l.current = u),
              (l.position = n),
              1 === n && ((l.active = !1), (l.complete = !0)),
              (0, r.merge)(e, l)
            );
          }
          return e;
        },
        b = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case o:
              return t.payload.ixInstances || Object.freeze({});
            case l:
              return Object.freeze({});
            case c: {
              let {
                  instanceId: n,
                  elementId: i,
                  actionItem: a,
                  eventId: o,
                  eventTarget: l,
                  eventStateKey: c,
                  actionListId: u,
                  groupIndex: s,
                  isCarrier: d,
                  origin: f,
                  destination: p,
                  immediate: E,
                  verbose: m,
                  continuous: h,
                  parameterId: T,
                  actionGroups: b,
                  smoothing: v,
                  restingValue: _,
                  pluginInstance: O,
                  pluginDuration: A,
                  instanceDelay: w,
                  skipMotion: S,
                  skipToValue: L,
                } = t.payload,
                { actionTypeId: R } = a,
                N = y(R),
                C = I(N, R),
                P = Object.keys(p).filter(
                  (e) => null != p[e] && "string" != typeof p[e],
                ),
                { easing: F } = a.config;
              return (0, r.set)(e, n, {
                id: n,
                elementId: i,
                active: !1,
                position: 0,
                start: 0,
                origin: f,
                destination: p,
                destinationKeys: P,
                immediate: E,
                verbose: m,
                current: null,
                actionItem: a,
                actionTypeId: R,
                eventId: o,
                eventTarget: l,
                eventStateKey: c,
                actionListId: u,
                groupIndex: s,
                renderType: N,
                isCarrier: d,
                styleProp: C,
                continuous: h,
                parameterId: T,
                actionGroups: b,
                smoothing: v,
                restingValue: _,
                pluginInstance: O,
                pluginDuration: A,
                instanceDelay: w,
                skipMotion: S,
                skipToValue: L,
                customEasingFn:
                  Array.isArray(F) && 4 === F.length ? g(F) : void 0,
              });
            }
            case u: {
              let { instanceId: n, time: i } = t.payload;
              return (0, r.mergeIn)(e, [n], {
                active: !0,
                complete: !1,
                start: i,
              });
            }
            case s: {
              let { instanceId: n } = t.payload;
              if (!e[n]) return e;
              let i = {},
                a = Object.keys(e),
                { length: r } = a;
              for (let t = 0; t < r; t++) {
                let r = a[t];
                r !== n && (i[r] = e[r]);
              }
              return i;
            }
            case d: {
              let n = e,
                i = Object.keys(e),
                { length: a } = i;
              for (let o = 0; o < a; o++) {
                let a = i[o],
                  l = e[a],
                  c = l.continuous ? h : T;
                n = (0, r.set)(n, a, c(l, t));
              }
              return n;
            }
            default:
              return e;
          }
        };
    },
    1540: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixParameters", {
          enumerable: !0,
          get: function () {
            return o;
          },
        }));
      let {
          IX2_RAW_DATA_IMPORTED: i,
          IX2_SESSION_STOPPED: a,
          IX2_PARAMETER_CHANGED: r,
        } = n(7087).IX2EngineActionTypes,
        o = (e = {}, t) => {
          switch (t.type) {
            case i:
              return t.payload.ixParameters || {};
            case a:
              return {};
            case r: {
              let { key: n, value: i } = t.payload;
              return ((e[n] = i), e);
            }
            default:
              return e;
          }
        };
    },
    7243: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return d;
          },
        }));
      let i = n(9516),
        a = n(4609),
        r = n(628),
        o = n(5862),
        l = n(9468),
        c = n(7718),
        u = n(1540),
        { ixElements: s } = l.IX2ElementsReducer,
        d = (0, i.combineReducers)({
          ixData: a.ixData,
          ixRequest: r.ixRequest,
          ixSession: o.ixSession,
          ixElements: s,
          ixInstances: c.ixInstances,
          ixParameters: u.ixParameters,
        });
    },
    628: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixRequest", {
          enumerable: !0,
          get: function () {
            return d;
          },
        }));
      let i = n(7087),
        a = n(1185),
        {
          IX2_PREVIEW_REQUESTED: r,
          IX2_PLAYBACK_REQUESTED: o,
          IX2_STOP_REQUESTED: l,
          IX2_CLEAR_REQUESTED: c,
        } = i.IX2EngineActionTypes,
        u = { preview: {}, playback: {}, stop: {}, clear: {} },
        s = Object.create(null, {
          [r]: { value: "preview" },
          [o]: { value: "playback" },
          [l]: { value: "stop" },
          [c]: { value: "clear" },
        }),
        d = (e = u, t) => {
          if (t.type in s) {
            let n = [s[t.type]];
            return (0, a.setIn)(e, [n], { ...t.payload });
          }
          return e;
        };
    },
    5862: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixSession", {
          enumerable: !0,
          get: function () {
            return m;
          },
        }));
      let i = n(7087),
        a = n(1185),
        {
          IX2_SESSION_INITIALIZED: r,
          IX2_SESSION_STARTED: o,
          IX2_TEST_FRAME_RENDERED: l,
          IX2_SESSION_STOPPED: c,
          IX2_EVENT_LISTENER_ADDED: u,
          IX2_EVENT_STATE_CHANGED: s,
          IX2_ANIMATION_FRAME_CHANGED: d,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: f,
          IX2_VIEWPORT_WIDTH_CHANGED: p,
          IX2_MEDIA_QUERIES_DEFINED: g,
        } = i.IX2EngineActionTypes,
        E = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        },
        m = (e = E, t) => {
          switch (t.type) {
            case r: {
              let { hasBoundaryNodes: n, reducedMotion: i } = t.payload;
              return (0, a.merge)(e, { hasBoundaryNodes: n, reducedMotion: i });
            }
            case o:
              return (0, a.set)(e, "active", !0);
            case l: {
              let {
                payload: { step: n = 20 },
              } = t;
              return (0, a.set)(e, "tick", e.tick + n);
            }
            case c:
              return E;
            case d: {
              let {
                payload: { now: n },
              } = t;
              return (0, a.set)(e, "tick", n);
            }
            case u: {
              let n = (0, a.addLast)(e.eventListeners, t.payload);
              return (0, a.set)(e, "eventListeners", n);
            }
            case s: {
              let { stateKey: n, newState: i } = t.payload;
              return (0, a.setIn)(e, ["eventState", n], i);
            }
            case f: {
              let { actionListId: n, isPlaying: i } = t.payload;
              return (0, a.setIn)(e, ["playbackState", n], i);
            }
            case p: {
              let { width: n, mediaQueries: i } = t.payload,
                r = i.length,
                o = null;
              for (let e = 0; e < r; e++) {
                let { key: t, min: a, max: r } = i[e];
                if (n >= a && n <= r) {
                  o = t;
                  break;
                }
              }
              return (0, a.merge)(e, { viewportWidth: n, mediaQueryKey: o });
            }
            case g:
              return (0, a.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        };
    },
    7377: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return s;
        },
        createPluginInstance: function () {
          return c;
        },
        getPluginConfig: function () {
          return a;
        },
        getPluginDestination: function () {
          return l;
        },
        getPluginDuration: function () {
          return r;
        },
        getPluginOrigin: function () {
          return o;
        },
        renderPlugin: function () {
          return u;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let a = (e) => e.value,
        r = (e, t) => {
          if ("auto" !== t.config.duration) return null;
          let n = parseFloat(e.getAttribute("data-duration"));
          return n > 0
            ? 1e3 * n
            : 1e3 * parseFloat(e.getAttribute("data-default-duration"));
        },
        o = (e) => e || { value: 0 },
        l = (e) => ({ value: e.value }),
        c = (e) => {
          let t = window.Webflow.require("lottie");
          if (!t) return null;
          let n = t.createInstance(e);
          return (n.stop(), n.setSubframe(!0), n);
        },
        u = (e, t, n) => {
          if (!e) return;
          let i = t[n.actionTypeId].value / 100;
          e.goToFrame(e.frames * i);
        },
        s = (e) => {
          let t = window.Webflow.require("lottie");
          t && t.createInstance(e).stop();
        };
    },
    2570: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return g;
        },
        createPluginInstance: function () {
          return f;
        },
        getPluginConfig: function () {
          return c;
        },
        getPluginDestination: function () {
          return d;
        },
        getPluginDuration: function () {
          return u;
        },
        getPluginOrigin: function () {
          return s;
        },
        renderPlugin: function () {
          return p;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let a = "--wf-rive-fit",
        r = "--wf-rive-alignment",
        o = (e) => document.querySelector(`[data-w-id="${e}"]`),
        l = () => window.Webflow.require("rive"),
        c = (e, t) => e.value.inputs[t],
        u = () => null,
        s = (e, t) => {
          if (e) return e;
          let n = {},
            { inputs: i = {} } = t.config.value;
          for (let e in i) null == i[e] && (n[e] = 0);
          return n;
        },
        d = (e) => e.value.inputs ?? {},
        f = (e, t) => {
          if ((t.config?.target?.selectorGuids || []).length > 0) return e;
          let n = t?.config?.target?.pluginElement;
          return n ? o(n) : null;
        },
        p = (e, { PLUGIN_RIVE: t }, n) => {
          let i = l();
          if (!i) return;
          let o = i.getInstance(e),
            c = i.rive.StateMachineInputType,
            { name: u, inputs: s = {} } = n.config.value || {};
          function d(e) {
            if (e.loaded) n();
            else {
              let t = () => {
                (n(), e?.off("load", t));
              };
              e?.on("load", t);
            }
            function n() {
              let n = e.stateMachineInputs(u);
              if (null != n) {
                if ((e.isPlaying || e.play(u, !1), a in s || r in s)) {
                  let t = e.layout,
                    n = s[a] ?? t.fit,
                    i = s[r] ?? t.alignment;
                  (n !== t.fit || i !== t.alignment) &&
                    (e.layout = t.copyWith({ fit: n, alignment: i }));
                }
                for (let e in s) {
                  if (e === a || e === r) continue;
                  let i = n.find((t) => t.name === e);
                  if (null != i)
                    switch (i.type) {
                      case c.Boolean:
                        null != s[e] && (i.value = !!s[e]);
                        break;
                      case c.Number: {
                        let n = t[e];
                        null != n && (i.value = n);
                        break;
                      }
                      case c.Trigger:
                        s[e] && i.fire();
                    }
                }
              }
            }
          }
          o?.rive ? d(o.rive) : i.setLoadHandler(e, d);
        },
        g = (e, t) => null;
    },
    2866: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return g;
        },
        createPluginInstance: function () {
          return f;
        },
        getPluginConfig: function () {
          return l;
        },
        getPluginDestination: function () {
          return d;
        },
        getPluginDuration: function () {
          return c;
        },
        getPluginOrigin: function () {
          return s;
        },
        renderPlugin: function () {
          return p;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let a = (e) => document.querySelector(`[data-w-id="${e}"]`),
        r = () => window.Webflow.require("spline"),
        o = (e, t) => e.filter((e) => !t.includes(e)),
        l = (e, t) => e.value[t],
        c = () => null,
        u = Object.freeze({
          positionX: 0,
          positionY: 0,
          positionZ: 0,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          scaleX: 1,
          scaleY: 1,
          scaleZ: 1,
        }),
        s = (e, t) => {
          let n = Object.keys(t.config.value);
          if (e) {
            let t = o(n, Object.keys(e));
            return t.length ? t.reduce((e, t) => ((e[t] = u[t]), e), e) : e;
          }
          return n.reduce((e, t) => ((e[t] = u[t]), e), {});
        },
        d = (e) => e.value,
        f = (e, t) => {
          let n = t?.config?.target?.pluginElement;
          return n ? a(n) : null;
        },
        p = (e, t, n) => {
          let i = r();
          if (!i) return;
          let a = i.getInstance(e),
            o = n.config.target.objectId,
            l = (e) => {
              if (!e) throw Error("Invalid spline app passed to renderSpline");
              let n = o && e.findObjectById(o);
              if (!n) return;
              let { PLUGIN_SPLINE: i } = t;
              (null != i.positionX && (n.position.x = i.positionX),
                null != i.positionY && (n.position.y = i.positionY),
                null != i.positionZ && (n.position.z = i.positionZ),
                null != i.rotationX && (n.rotation.x = i.rotationX),
                null != i.rotationY && (n.rotation.y = i.rotationY),
                null != i.rotationZ && (n.rotation.z = i.rotationZ),
                null != i.scaleX && (n.scale.x = i.scaleX),
                null != i.scaleY && (n.scale.y = i.scaleY),
                null != i.scaleZ && (n.scale.z = i.scaleZ));
            };
          a ? l(a.spline) : i.setLoadHandler(e, l);
        },
        g = () => null;
    },
    1407: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        clearPlugin: function () {
          return p;
        },
        createPluginInstance: function () {
          return s;
        },
        getPluginConfig: function () {
          return o;
        },
        getPluginDestination: function () {
          return u;
        },
        getPluginDuration: function () {
          return l;
        },
        getPluginOrigin: function () {
          return c;
        },
        renderPlugin: function () {
          return f;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = n(380),
        o = (e, t) => e.value[t],
        l = () => null,
        c = (e, t) => {
          if (e) return e;
          let n = t.config.value,
            i = t.config.target.objectId,
            a = getComputedStyle(document.documentElement).getPropertyValue(i);
          return null != n.size
            ? { size: parseInt(a, 10) }
            : "%" === n.unit || "-" === n.unit
              ? { size: parseFloat(a) }
              : null != n.red && null != n.green && null != n.blue
                ? (0, r.normalizeColor)(a)
                : void 0;
        },
        u = (e) => e.value,
        s = () => null,
        d = {
          color: {
            match: ({ red: e, green: t, blue: n, alpha: i }) =>
              [e, t, n, i].every((e) => null != e),
            getValue: ({ red: e, green: t, blue: n, alpha: i }) =>
              `rgba(${e}, ${t}, ${n}, ${i})`,
          },
          size: {
            match: ({ size: e }) => null != e,
            getValue: ({ size: e }, t) => ("-" === t ? e : `${e}${t}`),
          },
        },
        f = (e, t, n) => {
          let {
              target: { objectId: i },
              value: { unit: a },
            } = n.config,
            r = t.PLUGIN_VARIABLE,
            o = Object.values(d).find((e) => e.match(r, a));
          o && document.documentElement.style.setProperty(i, o.getValue(r, a));
        },
        p = (e, t) => {
          let n = t.config.target.objectId;
          document.documentElement.style.removeProperty(n);
        };
    },
    3690: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "pluginMethodMap", {
          enumerable: !0,
          get: function () {
            return s;
          },
        }));
      let i = n(7087),
        a = u(n(7377)),
        r = u(n(2866)),
        o = u(n(2570)),
        l = u(n(1407));
      function c(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (c = function (e) {
          return e ? n : t;
        })(e);
      }
      function u(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = c(t);
        if (n && n.has(e)) return n.get(e);
        var i = { __proto__: null },
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var r in e)
          if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
            var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
            o && (o.get || o.set)
              ? Object.defineProperty(i, r, o)
              : (i[r] = e[r]);
          }
        return ((i.default = e), n && n.set(e, i), i);
      }
      let s = new Map([
        [i.ActionTypeConsts.PLUGIN_LOTTIE, { ...a }],
        [i.ActionTypeConsts.PLUGIN_SPLINE, { ...r }],
        [i.ActionTypeConsts.PLUGIN_RIVE, { ...o }],
        [i.ActionTypeConsts.PLUGIN_VARIABLE, { ...l }],
      ]);
    },
    8023: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: function () {
          return T;
        },
        IX2_ANIMATION_FRAME_CHANGED: function () {
          return g;
        },
        IX2_CLEAR_REQUESTED: function () {
          return d;
        },
        IX2_ELEMENT_STATE_CHANGED: function () {
          return h;
        },
        IX2_EVENT_LISTENER_ADDED: function () {
          return f;
        },
        IX2_EVENT_STATE_CHANGED: function () {
          return p;
        },
        IX2_INSTANCE_ADDED: function () {
          return m;
        },
        IX2_INSTANCE_REMOVED: function () {
          return I;
        },
        IX2_INSTANCE_STARTED: function () {
          return y;
        },
        IX2_MEDIA_QUERIES_DEFINED: function () {
          return v;
        },
        IX2_PARAMETER_CHANGED: function () {
          return E;
        },
        IX2_PLAYBACK_REQUESTED: function () {
          return u;
        },
        IX2_PREVIEW_REQUESTED: function () {
          return c;
        },
        IX2_RAW_DATA_IMPORTED: function () {
          return a;
        },
        IX2_SESSION_INITIALIZED: function () {
          return r;
        },
        IX2_SESSION_STARTED: function () {
          return o;
        },
        IX2_SESSION_STOPPED: function () {
          return l;
        },
        IX2_STOP_REQUESTED: function () {
          return s;
        },
        IX2_TEST_FRAME_RENDERED: function () {
          return _;
        },
        IX2_VIEWPORT_WIDTH_CHANGED: function () {
          return b;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let a = "IX2_RAW_DATA_IMPORTED",
        r = "IX2_SESSION_INITIALIZED",
        o = "IX2_SESSION_STARTED",
        l = "IX2_SESSION_STOPPED",
        c = "IX2_PREVIEW_REQUESTED",
        u = "IX2_PLAYBACK_REQUESTED",
        s = "IX2_STOP_REQUESTED",
        d = "IX2_CLEAR_REQUESTED",
        f = "IX2_EVENT_LISTENER_ADDED",
        p = "IX2_EVENT_STATE_CHANGED",
        g = "IX2_ANIMATION_FRAME_CHANGED",
        E = "IX2_PARAMETER_CHANGED",
        m = "IX2_INSTANCE_ADDED",
        y = "IX2_INSTANCE_STARTED",
        I = "IX2_INSTANCE_REMOVED",
        h = "IX2_ELEMENT_STATE_CHANGED",
        T = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
        b = "IX2_VIEWPORT_WIDTH_CHANGED",
        v = "IX2_MEDIA_QUERIES_DEFINED",
        _ = "IX2_TEST_FRAME_RENDERED";
    },
    2686: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        ABSTRACT_NODE: function () {
          return en;
        },
        AUTO: function () {
          return W;
        },
        BACKGROUND: function () {
          return x;
        },
        BACKGROUND_COLOR: function () {
          return k;
        },
        BAR_DELIMITER: function () {
          return H;
        },
        BORDER_COLOR: function () {
          return U;
        },
        BOUNDARY_SELECTOR: function () {
          return c;
        },
        CHILDREN: function () {
          return Q;
        },
        COLON_DELIMITER: function () {
          return z;
        },
        COLOR: function () {
          return V;
        },
        COMMA_DELIMITER: function () {
          return X;
        },
        CONFIG_UNIT: function () {
          return m;
        },
        CONFIG_VALUE: function () {
          return f;
        },
        CONFIG_X_UNIT: function () {
          return p;
        },
        CONFIG_X_VALUE: function () {
          return u;
        },
        CONFIG_Y_UNIT: function () {
          return g;
        },
        CONFIG_Y_VALUE: function () {
          return s;
        },
        CONFIG_Z_UNIT: function () {
          return E;
        },
        CONFIG_Z_VALUE: function () {
          return d;
        },
        DISPLAY: function () {
          return B;
        },
        FILTER: function () {
          return F;
        },
        FLEX: function () {
          return j;
        },
        FONT_VARIATION_SETTINGS: function () {
          return M;
        },
        HEIGHT: function () {
          return G;
        },
        HTML_ELEMENT: function () {
          return ee;
        },
        IMMEDIATE_CHILDREN: function () {
          return q;
        },
        IX2_ID_DELIMITER: function () {
          return a;
        },
        OPACITY: function () {
          return P;
        },
        PARENT: function () {
          return Z;
        },
        PLAIN_OBJECT: function () {
          return et;
        },
        PRESERVE_3D: function () {
          return J;
        },
        RENDER_GENERAL: function () {
          return ea;
        },
        RENDER_PLUGIN: function () {
          return eo;
        },
        RENDER_STYLE: function () {
          return er;
        },
        RENDER_TRANSFORM: function () {
          return ei;
        },
        ROTATE_X: function () {
          return w;
        },
        ROTATE_Y: function () {
          return S;
        },
        ROTATE_Z: function () {
          return L;
        },
        SCALE_3D: function () {
          return A;
        },
        SCALE_X: function () {
          return v;
        },
        SCALE_Y: function () {
          return _;
        },
        SCALE_Z: function () {
          return O;
        },
        SIBLINGS: function () {
          return K;
        },
        SKEW: function () {
          return R;
        },
        SKEW_X: function () {
          return N;
        },
        SKEW_Y: function () {
          return C;
        },
        TRANSFORM: function () {
          return y;
        },
        TRANSLATE_3D: function () {
          return b;
        },
        TRANSLATE_X: function () {
          return I;
        },
        TRANSLATE_Y: function () {
          return h;
        },
        TRANSLATE_Z: function () {
          return T;
        },
        WF_PAGE: function () {
          return r;
        },
        WIDTH: function () {
          return D;
        },
        WILL_CHANGE: function () {
          return Y;
        },
        W_MOD_IX: function () {
          return l;
        },
        W_MOD_JS: function () {
          return o;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let a = "|",
        r = "data-wf-page",
        o = "w-mod-js",
        l = "w-mod-ix",
        c = ".w-dyn-item",
        u = "xValue",
        s = "yValue",
        d = "zValue",
        f = "value",
        p = "xUnit",
        g = "yUnit",
        E = "zUnit",
        m = "unit",
        y = "transform",
        I = "translateX",
        h = "translateY",
        T = "translateZ",
        b = "translate3d",
        v = "scaleX",
        _ = "scaleY",
        O = "scaleZ",
        A = "scale3d",
        w = "rotateX",
        S = "rotateY",
        L = "rotateZ",
        R = "skew",
        N = "skewX",
        C = "skewY",
        P = "opacity",
        F = "filter",
        M = "font-variation-settings",
        D = "width",
        G = "height",
        k = "backgroundColor",
        x = "background",
        U = "borderColor",
        V = "color",
        B = "display",
        j = "flex",
        Y = "willChange",
        W = "AUTO",
        X = ",",
        z = ":",
        H = "|",
        Q = "CHILDREN",
        q = "IMMEDIATE_CHILDREN",
        K = "SIBLINGS",
        Z = "PARENT",
        J = "preserve-3d",
        ee = "HTML_ELEMENT",
        et = "PLAIN_OBJECT",
        en = "ABSTRACT_NODE",
        ei = "RENDER_TRANSFORM",
        ea = "RENDER_GENERAL",
        er = "RENDER_STYLE",
        eo = "RENDER_PLUGIN";
    },
    262: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        ActionAppliesTo: function () {
          return r;
        },
        ActionTypeConsts: function () {
          return a;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let a = {
          TRANSFORM_MOVE: "TRANSFORM_MOVE",
          TRANSFORM_SCALE: "TRANSFORM_SCALE",
          TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
          TRANSFORM_SKEW: "TRANSFORM_SKEW",
          STYLE_OPACITY: "STYLE_OPACITY",
          STYLE_SIZE: "STYLE_SIZE",
          STYLE_FILTER: "STYLE_FILTER",
          STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
          STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
          STYLE_BORDER: "STYLE_BORDER",
          STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
          OBJECT_VALUE: "OBJECT_VALUE",
          PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
          PLUGIN_SPLINE: "PLUGIN_SPLINE",
          PLUGIN_RIVE: "PLUGIN_RIVE",
          PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
          GENERAL_DISPLAY: "GENERAL_DISPLAY",
          GENERAL_START_ACTION: "GENERAL_START_ACTION",
          GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
          GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
          GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
          GENERAL_LOOP: "GENERAL_LOOP",
          STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
        },
        r = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        };
    },
    7087: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        ActionTypeConsts: function () {
          return o.ActionTypeConsts;
        },
        IX2EngineActionTypes: function () {
          return l;
        },
        IX2EngineConstants: function () {
          return c;
        },
        QuickEffectIds: function () {
          return r.QuickEffectIds;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = u(n(1833), t),
        o = u(n(262), t);
      (u(n(8704), t), u(n(3213), t));
      let l = d(n(8023)),
        c = d(n(2686));
      function u(e, t) {
        return (
          Object.keys(e).forEach(function (n) {
            "default" === n ||
              Object.prototype.hasOwnProperty.call(t, n) ||
              Object.defineProperty(t, n, {
                enumerable: !0,
                get: function () {
                  return e[n];
                },
              });
          }),
          e
        );
      }
      function s(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (s = function (e) {
          return e ? n : t;
        })(e);
      }
      function d(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = s(t);
        if (n && n.has(e)) return n.get(e);
        var i = { __proto__: null },
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var r in e)
          if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
            var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
            o && (o.get || o.set)
              ? Object.defineProperty(i, r, o)
              : (i[r] = e[r]);
          }
        return ((i.default = e), n && n.set(e, i), i);
      }
    },
    3213: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ReducedMotionTypes", {
          enumerable: !0,
          get: function () {
            return s;
          },
        }));
      let {
          TRANSFORM_MOVE: i,
          TRANSFORM_SCALE: a,
          TRANSFORM_ROTATE: r,
          TRANSFORM_SKEW: o,
          STYLE_SIZE: l,
          STYLE_FILTER: c,
          STYLE_FONT_VARIATION: u,
        } = n(262).ActionTypeConsts,
        s = { [i]: !0, [a]: !0, [r]: !0, [o]: !0, [l]: !0, [c]: !0, [u]: !0 };
    },
    1833: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        EventAppliesTo: function () {
          return r;
        },
        EventBasedOn: function () {
          return o;
        },
        EventContinuousMouseAxes: function () {
          return l;
        },
        EventLimitAffectedElements: function () {
          return c;
        },
        EventTypeConsts: function () {
          return a;
        },
        QuickEffectDirectionConsts: function () {
          return s;
        },
        QuickEffectIds: function () {
          return u;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let a = {
          NAVBAR_OPEN: "NAVBAR_OPEN",
          NAVBAR_CLOSE: "NAVBAR_CLOSE",
          TAB_ACTIVE: "TAB_ACTIVE",
          TAB_INACTIVE: "TAB_INACTIVE",
          SLIDER_ACTIVE: "SLIDER_ACTIVE",
          SLIDER_INACTIVE: "SLIDER_INACTIVE",
          DROPDOWN_OPEN: "DROPDOWN_OPEN",
          DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
          MOUSE_CLICK: "MOUSE_CLICK",
          MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
          MOUSE_DOWN: "MOUSE_DOWN",
          MOUSE_UP: "MOUSE_UP",
          MOUSE_OVER: "MOUSE_OVER",
          MOUSE_OUT: "MOUSE_OUT",
          MOUSE_MOVE: "MOUSE_MOVE",
          MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
          SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
          SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
          SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
          ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
          ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
          PAGE_START: "PAGE_START",
          PAGE_FINISH: "PAGE_FINISH",
          PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
          PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
          PAGE_SCROLL: "PAGE_SCROLL",
        },
        r = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" },
        o = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" },
        l = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" },
        c = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        },
        u = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        },
        s = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        };
    },
    8704: function (e, t) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "InteractionTypeConsts", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }));
      let n = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    },
    380: function (e, t) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "normalizeColor", {
          enumerable: !0,
          get: function () {
            return i;
          },
        }));
      let n = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aqua: "#00FFFF",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000000",
        blanchedalmond: "#FFEBCD",
        blue: "#0000FF",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
        burlywood: "#DEB887",
        cadetblue: "#5F9EA0",
        chartreuse: "#7FFF00",
        chocolate: "#D2691E",
        coral: "#FF7F50",
        cornflowerblue: "#6495ED",
        cornsilk: "#FFF8DC",
        crimson: "#DC143C",
        cyan: "#00FFFF",
        darkblue: "#00008B",
        darkcyan: "#008B8B",
        darkgoldenrod: "#B8860B",
        darkgray: "#A9A9A9",
        darkgreen: "#006400",
        darkgrey: "#A9A9A9",
        darkkhaki: "#BDB76B",
        darkmagenta: "#8B008B",
        darkolivegreen: "#556B2F",
        darkorange: "#FF8C00",
        darkorchid: "#9932CC",
        darkred: "#8B0000",
        darksalmon: "#E9967A",
        darkseagreen: "#8FBC8F",
        darkslateblue: "#483D8B",
        darkslategray: "#2F4F4F",
        darkslategrey: "#2F4F4F",
        darkturquoise: "#00CED1",
        darkviolet: "#9400D3",
        deeppink: "#FF1493",
        deepskyblue: "#00BFFF",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1E90FF",
        firebrick: "#B22222",
        floralwhite: "#FFFAF0",
        forestgreen: "#228B22",
        fuchsia: "#FF00FF",
        gainsboro: "#DCDCDC",
        ghostwhite: "#F8F8FF",
        gold: "#FFD700",
        goldenrod: "#DAA520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#ADFF2F",
        grey: "#808080",
        honeydew: "#F0FFF0",
        hotpink: "#FF69B4",
        indianred: "#CD5C5C",
        indigo: "#4B0082",
        ivory: "#FFFFF0",
        khaki: "#F0E68C",
        lavender: "#E6E6FA",
        lavenderblush: "#FFF0F5",
        lawngreen: "#7CFC00",
        lemonchiffon: "#FFFACD",
        lightblue: "#ADD8E6",
        lightcoral: "#F08080",
        lightcyan: "#E0FFFF",
        lightgoldenrodyellow: "#FAFAD2",
        lightgray: "#D3D3D3",
        lightgreen: "#90EE90",
        lightgrey: "#D3D3D3",
        lightpink: "#FFB6C1",
        lightsalmon: "#FFA07A",
        lightseagreen: "#20B2AA",
        lightskyblue: "#87CEFA",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#B0C4DE",
        lightyellow: "#FFFFE0",
        lime: "#00FF00",
        limegreen: "#32CD32",
        linen: "#FAF0E6",
        magenta: "#FF00FF",
        maroon: "#800000",
        mediumaquamarine: "#66CDAA",
        mediumblue: "#0000CD",
        mediumorchid: "#BA55D3",
        mediumpurple: "#9370DB",
        mediumseagreen: "#3CB371",
        mediumslateblue: "#7B68EE",
        mediumspringgreen: "#00FA9A",
        mediumturquoise: "#48D1CC",
        mediumvioletred: "#C71585",
        midnightblue: "#191970",
        mintcream: "#F5FFFA",
        mistyrose: "#FFE4E1",
        moccasin: "#FFE4B5",
        navajowhite: "#FFDEAD",
        navy: "#000080",
        oldlace: "#FDF5E6",
        olive: "#808000",
        olivedrab: "#6B8E23",
        orange: "#FFA500",
        orangered: "#FF4500",
        orchid: "#DA70D6",
        palegoldenrod: "#EEE8AA",
        palegreen: "#98FB98",
        paleturquoise: "#AFEEEE",
        palevioletred: "#DB7093",
        papayawhip: "#FFEFD5",
        peachpuff: "#FFDAB9",
        peru: "#CD853F",
        pink: "#FFC0CB",
        plum: "#DDA0DD",
        powderblue: "#B0E0E6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#FF0000",
        rosybrown: "#BC8F8F",
        royalblue: "#4169E1",
        saddlebrown: "#8B4513",
        salmon: "#FA8072",
        sandybrown: "#F4A460",
        seagreen: "#2E8B57",
        seashell: "#FFF5EE",
        sienna: "#A0522D",
        silver: "#C0C0C0",
        skyblue: "#87CEEB",
        slateblue: "#6A5ACD",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#FFFAFA",
        springgreen: "#00FF7F",
        steelblue: "#4682B4",
        tan: "#D2B48C",
        teal: "#008080",
        thistle: "#D8BFD8",
        tomato: "#FF6347",
        turquoise: "#40E0D0",
        violet: "#EE82EE",
        wheat: "#F5DEB3",
        white: "#FFFFFF",
        whitesmoke: "#F5F5F5",
        yellow: "#FFFF00",
        yellowgreen: "#9ACD32",
      };
      function i(e) {
        let t,
          i,
          a,
          r = 1,
          o = e.replace(/\s/g, "").toLowerCase(),
          l = ("string" == typeof n[o] ? n[o].toLowerCase() : null) || o;
        if (l.startsWith("#")) {
          let e = l.substring(1);
          3 === e.length || 4 === e.length
            ? ((t = parseInt(e[0] + e[0], 16)),
              (i = parseInt(e[1] + e[1], 16)),
              (a = parseInt(e[2] + e[2], 16)),
              4 === e.length && (r = parseInt(e[3] + e[3], 16) / 255))
            : (6 === e.length || 8 === e.length) &&
              ((t = parseInt(e.substring(0, 2), 16)),
              (i = parseInt(e.substring(2, 4), 16)),
              (a = parseInt(e.substring(4, 6), 16)),
              8 === e.length && (r = parseInt(e.substring(6, 8), 16) / 255));
        } else if (l.startsWith("rgba")) {
          let e = l.match(/rgba\(([^)]+)\)/)[1].split(",");
          ((t = parseInt(e[0], 10)),
            (i = parseInt(e[1], 10)),
            (a = parseInt(e[2], 10)),
            (r = parseFloat(e[3])));
        } else if (l.startsWith("rgb")) {
          let e = l.match(/rgb\(([^)]+)\)/)[1].split(",");
          ((t = parseInt(e[0], 10)),
            (i = parseInt(e[1], 10)),
            (a = parseInt(e[2], 10)));
        } else if (l.startsWith("hsla")) {
          let e,
            n,
            o,
            c = l.match(/hsla\(([^)]+)\)/)[1].split(","),
            u = parseFloat(c[0]),
            s = parseFloat(c[1].replace("%", "")) / 100,
            d = parseFloat(c[2].replace("%", "")) / 100;
          r = parseFloat(c[3]);
          let f = (1 - Math.abs(2 * d - 1)) * s,
            p = f * (1 - Math.abs(((u / 60) % 2) - 1)),
            g = d - f / 2;
          (u >= 0 && u < 60
            ? ((e = f), (n = p), (o = 0))
            : u >= 60 && u < 120
              ? ((e = p), (n = f), (o = 0))
              : u >= 120 && u < 180
                ? ((e = 0), (n = f), (o = p))
                : u >= 180 && u < 240
                  ? ((e = 0), (n = p), (o = f))
                  : u >= 240 && u < 300
                    ? ((e = p), (n = 0), (o = f))
                    : ((e = f), (n = 0), (o = p)),
            (t = Math.round((e + g) * 255)),
            (i = Math.round((n + g) * 255)),
            (a = Math.round((o + g) * 255)));
        } else if (l.startsWith("hsl")) {
          let e,
            n,
            r,
            o = l.match(/hsl\(([^)]+)\)/)[1].split(","),
            c = parseFloat(o[0]),
            u = parseFloat(o[1].replace("%", "")) / 100,
            s = parseFloat(o[2].replace("%", "")) / 100,
            d = (1 - Math.abs(2 * s - 1)) * u,
            f = d * (1 - Math.abs(((c / 60) % 2) - 1)),
            p = s - d / 2;
          (c >= 0 && c < 60
            ? ((e = d), (n = f), (r = 0))
            : c >= 60 && c < 120
              ? ((e = f), (n = d), (r = 0))
              : c >= 120 && c < 180
                ? ((e = 0), (n = d), (r = f))
                : c >= 180 && c < 240
                  ? ((e = 0), (n = f), (r = d))
                  : c >= 240 && c < 300
                    ? ((e = f), (n = 0), (r = d))
                    : ((e = d), (n = 0), (r = f)),
            (t = Math.round((e + p) * 255)),
            (i = Math.round((n + p) * 255)),
            (a = Math.round((r + p) * 255)));
        }
        if (Number.isNaN(t) || Number.isNaN(i) || Number.isNaN(a))
          throw Error(
            `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`,
          );
        return { red: t, green: i, blue: a, alpha: r };
      }
    },
    9468: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        IX2BrowserSupport: function () {
          return r;
        },
        IX2EasingUtils: function () {
          return l;
        },
        IX2Easings: function () {
          return o;
        },
        IX2ElementsReducer: function () {
          return c;
        },
        IX2VanillaPlugins: function () {
          return u;
        },
        IX2VanillaUtils: function () {
          return s;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = f(n(2662)),
        o = f(n(8686)),
        l = f(n(3767)),
        c = f(n(5861)),
        u = f(n(1799)),
        s = f(n(4124));
      function d(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (d = function (e) {
          return e ? n : t;
        })(e);
      }
      function f(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = d(t);
        if (n && n.has(e)) return n.get(e);
        var i = { __proto__: null },
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var r in e)
          if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
            var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
            o && (o.get || o.set)
              ? Object.defineProperty(i, r, o)
              : (i[r] = e[r]);
          }
        return ((i.default = e), n && n.set(e, i), i);
      }
    },
    2662: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i,
        a = {
          ELEMENT_MATCHES: function () {
            return u;
          },
          FLEX_PREFIXED: function () {
            return s;
          },
          IS_BROWSER_ENV: function () {
            return l;
          },
          TRANSFORM_PREFIXED: function () {
            return d;
          },
          TRANSFORM_STYLE_PREFIXED: function () {
            return p;
          },
          withBrowser: function () {
            return c;
          },
        };
      for (var r in a)
        Object.defineProperty(t, r, { enumerable: !0, get: a[r] });
      let o = (i = n(9777)) && i.__esModule ? i : { default: i },
        l = "undefined" != typeof window,
        c = (e, t) => (l ? e() : t),
        u = c(() =>
          (0, o.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype,
          ),
        ),
        s = c(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ];
          try {
            let { length: n } = t;
            for (let i = 0; i < n; i++) {
              let n = t[i];
              if (((e.style.display = n), e.style.display === n)) return n;
            }
            return "";
          } catch (e) {
            return "";
          }
        }, "flex"),
        d = c(() => {
          let e = document.createElement("i");
          if (null == e.style.transform) {
            let t = ["Webkit", "Moz", "ms"],
              { length: n } = t;
            for (let i = 0; i < n; i++) {
              let n = t[i] + "Transform";
              if (void 0 !== e.style[n]) return n;
            }
          }
          return "transform";
        }, "transform"),
        f = d.split("transform")[0],
        p = f ? f + "TransformStyle" : "transformStyle";
    },
    3767: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i,
        a = {
          applyEasing: function () {
            return d;
          },
          createBezierEasing: function () {
            return s;
          },
          optimizeFloat: function () {
            return u;
          },
        };
      for (var r in a)
        Object.defineProperty(t, r, { enumerable: !0, get: a[r] });
      let o = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = c(t);
          if (n && n.has(e)) return n.get(e);
          var i = { __proto__: null },
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in e)
            if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
              var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(i, r, o)
                : (i[r] = e[r]);
            }
          return ((i.default = e), n && n.set(e, i), i);
        })(n(8686)),
        l = (i = n(1361)) && i.__esModule ? i : { default: i };
      function c(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (c = function (e) {
          return e ? n : t;
        })(e);
      }
      function u(e, t = 5, n = 10) {
        let i = Math.pow(n, t),
          a = Number(Math.round(e * i) / i);
        return Math.abs(a) > 1e-4 ? a : 0;
      }
      function s(e) {
        return (0, l.default)(...e);
      }
      function d(e, t, n) {
        return 0 === t
          ? 0
          : 1 === t
            ? 1
            : n
              ? u(t > 0 ? n(t) : t)
              : u(t > 0 && e && o[e] ? o[e](t) : t);
      }
    },
    8686: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i,
        a = {
          bounce: function () {
            return j;
          },
          bouncePast: function () {
            return Y;
          },
          ease: function () {
            return l;
          },
          easeIn: function () {
            return c;
          },
          easeInOut: function () {
            return s;
          },
          easeOut: function () {
            return u;
          },
          inBack: function () {
            return F;
          },
          inCirc: function () {
            return R;
          },
          inCubic: function () {
            return g;
          },
          inElastic: function () {
            return G;
          },
          inExpo: function () {
            return w;
          },
          inOutBack: function () {
            return D;
          },
          inOutCirc: function () {
            return C;
          },
          inOutCubic: function () {
            return m;
          },
          inOutElastic: function () {
            return x;
          },
          inOutExpo: function () {
            return L;
          },
          inOutQuad: function () {
            return p;
          },
          inOutQuart: function () {
            return h;
          },
          inOutQuint: function () {
            return v;
          },
          inOutSine: function () {
            return A;
          },
          inQuad: function () {
            return d;
          },
          inQuart: function () {
            return y;
          },
          inQuint: function () {
            return T;
          },
          inSine: function () {
            return _;
          },
          outBack: function () {
            return M;
          },
          outBounce: function () {
            return P;
          },
          outCirc: function () {
            return N;
          },
          outCubic: function () {
            return E;
          },
          outElastic: function () {
            return k;
          },
          outExpo: function () {
            return S;
          },
          outQuad: function () {
            return f;
          },
          outQuart: function () {
            return I;
          },
          outQuint: function () {
            return b;
          },
          outSine: function () {
            return O;
          },
          swingFrom: function () {
            return V;
          },
          swingFromTo: function () {
            return U;
          },
          swingTo: function () {
            return B;
          },
        };
      for (var r in a)
        Object.defineProperty(t, r, { enumerable: !0, get: a[r] });
      let o = (i = n(1361)) && i.__esModule ? i : { default: i },
        l = (0, o.default)(0.25, 0.1, 0.25, 1),
        c = (0, o.default)(0.42, 0, 1, 1),
        u = (0, o.default)(0, 0, 0.58, 1),
        s = (0, o.default)(0.42, 0, 0.58, 1);
      function d(e) {
        return Math.pow(e, 2);
      }
      function f(e) {
        return -(Math.pow(e - 1, 2) - 1);
      }
      function p(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 2)
          : -0.5 * ((e -= 2) * e - 2);
      }
      function g(e) {
        return Math.pow(e, 3);
      }
      function E(e) {
        return Math.pow(e - 1, 3) + 1;
      }
      function m(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 3)
          : 0.5 * (Math.pow(e - 2, 3) + 2);
      }
      function y(e) {
        return Math.pow(e, 4);
      }
      function I(e) {
        return -(Math.pow(e - 1, 4) - 1);
      }
      function h(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 4)
          : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
      }
      function T(e) {
        return Math.pow(e, 5);
      }
      function b(e) {
        return Math.pow(e - 1, 5) + 1;
      }
      function v(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 5)
          : 0.5 * (Math.pow(e - 2, 5) + 2);
      }
      function _(e) {
        return -Math.cos((Math.PI / 2) * e) + 1;
      }
      function O(e) {
        return Math.sin((Math.PI / 2) * e);
      }
      function A(e) {
        return -0.5 * (Math.cos(Math.PI * e) - 1);
      }
      function w(e) {
        return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
      }
      function S(e) {
        return 1 === e ? 1 : -Math.pow(2, -10 * e) + 1;
      }
      function L(e) {
        return 0 === e
          ? 0
          : 1 === e
            ? 1
            : (e /= 0.5) < 1
              ? 0.5 * Math.pow(2, 10 * (e - 1))
              : 0.5 * (-Math.pow(2, -10 * --e) + 2);
      }
      function R(e) {
        return -(Math.sqrt(1 - e * e) - 1);
      }
      function N(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2));
      }
      function C(e) {
        return (e /= 0.5) < 1
          ? -0.5 * (Math.sqrt(1 - e * e) - 1)
          : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
      }
      function P(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
            ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
            : e < 2.5 / 2.75
              ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
              : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function F(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function M(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function D(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function G(e) {
        let t = 1.70158,
          n = 0,
          i = 1;
        return 0 === e
          ? 0
          : 1 === e
            ? 1
            : (n || (n = 0.3),
              i < 1
                ? ((i = 1), (t = n / 4))
                : (t = (n / (2 * Math.PI)) * Math.asin(1 / i)),
              -(
                i *
                Math.pow(2, 10 * (e -= 1)) *
                Math.sin((2 * Math.PI * (e - t)) / n)
              ));
      }
      function k(e) {
        let t = 1.70158,
          n = 0,
          i = 1;
        return 0 === e
          ? 0
          : 1 === e
            ? 1
            : (n || (n = 0.3),
              i < 1
                ? ((i = 1), (t = n / 4))
                : (t = (n / (2 * Math.PI)) * Math.asin(1 / i)),
              i * Math.pow(2, -10 * e) * Math.sin((2 * Math.PI * (e - t)) / n) +
                1);
      }
      function x(e) {
        let t = 1.70158,
          n = 0,
          i = 1;
        return 0 === e
          ? 0
          : 2 == (e /= 0.5)
            ? 1
            : (n || (n = 0.3 * 1.5),
                i < 1
                  ? ((i = 1), (t = n / 4))
                  : (t = (n / (2 * Math.PI)) * Math.asin(1 / i)),
                e < 1)
              ? -0.5 *
                (i *
                  Math.pow(2, 10 * (e -= 1)) *
                  Math.sin((2 * Math.PI * (e - t)) / n))
              : i *
                  Math.pow(2, -10 * (e -= 1)) *
                  Math.sin((2 * Math.PI * (e - t)) / n) *
                  0.5 +
                1;
      }
      function U(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function V(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function B(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function j(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
            ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
            : e < 2.5 / 2.75
              ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
              : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function Y(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
            ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
            : e < 2.5 / 2.75
              ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
              : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
      }
    },
    1799: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        clearPlugin: function () {
          return E;
        },
        createPluginInstance: function () {
          return p;
        },
        getPluginConfig: function () {
          return u;
        },
        getPluginDestination: function () {
          return f;
        },
        getPluginDuration: function () {
          return d;
        },
        getPluginOrigin: function () {
          return s;
        },
        isPluginType: function () {
          return l;
        },
        renderPlugin: function () {
          return g;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = n(2662),
        o = n(3690);
      function l(e) {
        return o.pluginMethodMap.has(e);
      }
      let c = (e) => (t) => {
          if (!r.IS_BROWSER_ENV) return () => null;
          let n = o.pluginMethodMap.get(t);
          if (!n) throw Error(`IX2 no plugin configured for: ${t}`);
          let i = n[e];
          if (!i) throw Error(`IX2 invalid plugin method: ${e}`);
          return i;
        },
        u = c("getPluginConfig"),
        s = c("getPluginOrigin"),
        d = c("getPluginDuration"),
        f = c("getPluginDestination"),
        p = c("createPluginInstance"),
        g = c("renderPlugin"),
        E = c("clearPlugin");
    },
    4124: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        cleanupHTMLElement: function () {
          return e$;
        },
        clearAllStyles: function () {
          return eY;
        },
        clearObjectCache: function () {
          return ef;
        },
        getActionListProgress: function () {
          return eq;
        },
        getAffectedElements: function () {
          return eb;
        },
        getComputedStyle: function () {
          return ev;
        },
        getDestinationValues: function () {
          return eN;
        },
        getElementId: function () {
          return em;
        },
        getInstanceId: function () {
          return eg;
        },
        getInstanceOrigin: function () {
          return ew;
        },
        getItemConfigByKey: function () {
          return eR;
        },
        getMaxDurationItemIndex: function () {
          return eQ;
        },
        getNamespacedParameterId: function () {
          return eJ;
        },
        getRenderType: function () {
          return eC;
        },
        getStyleProp: function () {
          return eP;
        },
        mediaQueriesEqual: function () {
          return e1;
        },
        observeStore: function () {
          return eh;
        },
        reduceListToGroup: function () {
          return eK;
        },
        reifyState: function () {
          return ey;
        },
        renderHTMLElement: function () {
          return eF;
        },
        shallowEqual: function () {
          return s.default;
        },
        shouldAllowMediaQuery: function () {
          return e0;
        },
        shouldNamespaceEventParameter: function () {
          return eZ;
        },
        stringifyTarget: function () {
          return e2;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = E(n(4075)),
        o = E(n(1455)),
        l = E(n(5720)),
        c = n(1185),
        u = n(7087),
        s = E(n(7164)),
        d = n(3767),
        f = n(380),
        p = n(1799),
        g = n(2662);
      function E(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let {
          BACKGROUND: m,
          TRANSFORM: y,
          TRANSLATE_3D: I,
          SCALE_3D: h,
          ROTATE_X: T,
          ROTATE_Y: b,
          ROTATE_Z: v,
          SKEW: _,
          PRESERVE_3D: O,
          FLEX: A,
          OPACITY: w,
          FILTER: S,
          FONT_VARIATION_SETTINGS: L,
          WIDTH: R,
          HEIGHT: N,
          BACKGROUND_COLOR: C,
          BORDER_COLOR: P,
          COLOR: F,
          CHILDREN: M,
          IMMEDIATE_CHILDREN: D,
          SIBLINGS: G,
          PARENT: k,
          DISPLAY: x,
          WILL_CHANGE: U,
          AUTO: V,
          COMMA_DELIMITER: B,
          COLON_DELIMITER: j,
          BAR_DELIMITER: Y,
          RENDER_TRANSFORM: W,
          RENDER_GENERAL: X,
          RENDER_STYLE: z,
          RENDER_PLUGIN: H,
        } = u.IX2EngineConstants,
        {
          TRANSFORM_MOVE: Q,
          TRANSFORM_SCALE: q,
          TRANSFORM_ROTATE: K,
          TRANSFORM_SKEW: Z,
          STYLE_OPACITY: J,
          STYLE_FILTER: ee,
          STYLE_FONT_VARIATION: et,
          STYLE_SIZE: en,
          STYLE_BACKGROUND_COLOR: ei,
          STYLE_BORDER: ea,
          STYLE_TEXT_COLOR: er,
          GENERAL_DISPLAY: eo,
          OBJECT_VALUE: el,
        } = u.ActionTypeConsts,
        ec = (e) => e.trim(),
        eu = Object.freeze({ [ei]: C, [ea]: P, [er]: F }),
        es = Object.freeze({
          [g.TRANSFORM_PREFIXED]: y,
          [C]: m,
          [w]: w,
          [S]: S,
          [R]: R,
          [N]: N,
          [L]: L,
        }),
        ed = new Map();
      function ef() {
        ed.clear();
      }
      let ep = 1;
      function eg() {
        return "i" + ep++;
      }
      let eE = 1;
      function em(e, t) {
        for (let n in e) {
          let i = e[n];
          if (i && i.ref === t) return i.id;
        }
        return "e" + eE++;
      }
      function ey({ events: e, actionLists: t, site: n } = {}) {
        let i = (0, o.default)(
            e,
            (e, t) => {
              let { eventTypeId: n } = t;
              return (e[n] || (e[n] = {}), (e[n][t.id] = t), e);
            },
            {},
          ),
          a = n && n.mediaQueries,
          r = [];
        return (
          a
            ? (r = a.map((e) => e.key))
            : ((a = []), console.warn("IX2 missing mediaQueries in site data")),
          {
            ixData: {
              events: e,
              actionLists: t,
              eventTypeMap: i,
              mediaQueries: a,
              mediaQueryKeys: r,
            },
          }
        );
      }
      let eI = (e, t) => e === t;
      function eh({ store: e, select: t, onChange: n, comparator: i = eI }) {
        let { getState: a, subscribe: r } = e,
          o = r(function () {
            let r = t(a());
            if (null == r) return void o();
            i(r, l) || n((l = r), e);
          }),
          l = t(a());
        return o;
      }
      function eT(e) {
        let t = typeof e;
        if ("string" === t) return { id: e };
        if (null != e && "object" === t) {
          let {
            id: t,
            objectId: n,
            selector: i,
            selectorGuids: a,
            appliesTo: r,
            useEventTarget: o,
          } = e;
          return {
            id: t,
            objectId: n,
            selector: i,
            selectorGuids: a,
            appliesTo: r,
            useEventTarget: o,
          };
        }
        return {};
      }
      function eb({
        config: e,
        event: t,
        eventTarget: n,
        elementRoot: i,
        elementApi: a,
      }) {
        let r, o, l;
        if (!a) throw Error("IX2 missing elementApi");
        let { targets: c } = e;
        if (Array.isArray(c) && c.length > 0)
          return c.reduce(
            (e, r) =>
              e.concat(
                eb({
                  config: { target: r },
                  event: t,
                  eventTarget: n,
                  elementRoot: i,
                  elementApi: a,
                }),
              ),
            [],
          );
        let {
            getValidDocument: s,
            getQuerySelector: d,
            queryDocument: f,
            getChildElements: p,
            getSiblingElements: E,
            matchSelector: m,
            elementContains: y,
            isSiblingNode: I,
          } = a,
          { target: h } = e;
        if (!h) return [];
        let {
          id: T,
          objectId: b,
          selector: v,
          selectorGuids: _,
          appliesTo: O,
          useEventTarget: A,
        } = eT(h);
        if (b) return [ed.has(b) ? ed.get(b) : ed.set(b, {}).get(b)];
        if (O === u.EventAppliesTo.PAGE) {
          let e = s(T);
          return e ? [e] : [];
        }
        let w = (t?.action?.config?.affectedElements ?? {})[T || v] || {},
          S = !!(w.id || w.selector),
          L = t && d(eT(t.target));
        if (
          (S
            ? ((r = w.limitAffectedElements), (o = L), (l = d(w)))
            : (o = l = d({ id: T, selector: v, selectorGuids: _ })),
          t && A)
        ) {
          let e = n && (l || !0 === A) ? [n] : f(L);
          if (l) {
            if (A === k) return f(l).filter((t) => e.some((e) => y(t, e)));
            if (A === M) return f(l).filter((t) => e.some((e) => y(e, t)));
            if (A === G) return f(l).filter((t) => e.some((e) => I(e, t)));
          }
          return e;
        }
        return null == o || null == l
          ? []
          : g.IS_BROWSER_ENV && i
            ? f(l).filter((e) => i.contains(e))
            : r === M
              ? f(o, l)
              : r === D
                ? p(f(o)).filter(m(l))
                : r === G
                  ? E(f(o)).filter(m(l))
                  : f(l);
      }
      function ev({ element: e, actionItem: t }) {
        if (!g.IS_BROWSER_ENV) return {};
        let { actionTypeId: n } = t;
        switch (n) {
          case en:
          case ei:
          case ea:
          case er:
          case eo:
            return window.getComputedStyle(e);
          default:
            return {};
        }
      }
      let e_ = /px/,
        eO = (e, t) =>
          t.reduce(
            (e, t) => (null == e[t.type] && (e[t.type] = eD[t.type]), e),
            e || {},
          ),
        eA = (e, t) =>
          t.reduce(
            (e, t) => (
              null == e[t.type] &&
                (e[t.type] = eG[t.type] || t.defaultValue || 0),
              e
            ),
            e || {},
          );
      function ew(e, t = {}, n = {}, i, a) {
        let { getStyle: o } = a,
          { actionTypeId: l } = i;
        if ((0, p.isPluginType)(l)) return (0, p.getPluginOrigin)(l)(t[l], i);
        switch (i.actionTypeId) {
          case Q:
          case q:
          case K:
          case Z:
            return t[i.actionTypeId] || eM[i.actionTypeId];
          case ee:
            return eO(t[i.actionTypeId], i.config.filters);
          case et:
            return eA(t[i.actionTypeId], i.config.fontVariations);
          case J:
            return { value: (0, r.default)(parseFloat(o(e, w)), 1) };
          case en: {
            let t,
              a = o(e, R),
              l = o(e, N);
            return {
              widthValue:
                i.config.widthUnit === V
                  ? e_.test(a)
                    ? parseFloat(a)
                    : parseFloat(n.width)
                  : (0, r.default)(parseFloat(a), parseFloat(n.width)),
              heightValue:
                i.config.heightUnit === V
                  ? e_.test(l)
                    ? parseFloat(l)
                    : parseFloat(n.height)
                  : (0, r.default)(parseFloat(l), parseFloat(n.height)),
            };
          }
          case ei:
          case ea:
          case er:
            return (function ({
              element: e,
              actionTypeId: t,
              computedStyle: n,
              getStyle: i,
            }) {
              let a = eu[t],
                o = i(e, a),
                l = (function (e, t) {
                  let n = e.exec(t);
                  return n ? n[1] : "";
                })(eV, eU.test(o) ? o : n[a]).split(B);
              return {
                rValue: (0, r.default)(parseInt(l[0], 10), 255),
                gValue: (0, r.default)(parseInt(l[1], 10), 255),
                bValue: (0, r.default)(parseInt(l[2], 10), 255),
                aValue: (0, r.default)(parseFloat(l[3]), 1),
              };
            })({
              element: e,
              actionTypeId: i.actionTypeId,
              computedStyle: n,
              getStyle: o,
            });
          case eo:
            return { value: (0, r.default)(o(e, x), n.display) };
          case el:
            return t[i.actionTypeId] || { value: 0 };
          default:
            return;
        }
      }
      let eS = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eL = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eR = (e, t, n) => {
          if ((0, p.isPluginType)(e)) return (0, p.getPluginConfig)(e)(n, t);
          switch (e) {
            case ee: {
              let e = (0, l.default)(n.filters, ({ type: e }) => e === t);
              return e ? e.value : 0;
            }
            case et: {
              let e = (0, l.default)(
                n.fontVariations,
                ({ type: e }) => e === t,
              );
              return e ? e.value : 0;
            }
            default:
              return n[t];
          }
        };
      function eN({ element: e, actionItem: t, elementApi: n }) {
        if ((0, p.isPluginType)(t.actionTypeId))
          return (0, p.getPluginDestination)(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
          case Q:
          case q:
          case K:
          case Z: {
            let { xValue: e, yValue: n, zValue: i } = t.config;
            return { xValue: e, yValue: n, zValue: i };
          }
          case en: {
            let { getStyle: i, setStyle: a, getProperty: r } = n,
              { widthUnit: o, heightUnit: l } = t.config,
              { widthValue: c, heightValue: u } = t.config;
            if (!g.IS_BROWSER_ENV) return { widthValue: c, heightValue: u };
            if (o === V) {
              let t = i(e, R);
              (a(e, R, ""), (c = r(e, "offsetWidth")), a(e, R, t));
            }
            if (l === V) {
              let t = i(e, N);
              (a(e, N, ""), (u = r(e, "offsetHeight")), a(e, N, t));
            }
            return { widthValue: c, heightValue: u };
          }
          case ei:
          case ea:
          case er: {
            let {
              rValue: i,
              gValue: a,
              bValue: r,
              aValue: o,
              globalSwatchId: l,
            } = t.config;
            if (l && l.startsWith("--")) {
              let { getStyle: t } = n,
                i = t(e, l),
                a = (0, f.normalizeColor)(i);
              return {
                rValue: a.red,
                gValue: a.green,
                bValue: a.blue,
                aValue: a.alpha,
              };
            }
            return { rValue: i, gValue: a, bValue: r, aValue: o };
          }
          case ee:
            return t.config.filters.reduce(eS, {});
          case et:
            return t.config.fontVariations.reduce(eL, {});
          default: {
            let { value: e } = t.config;
            return { value: e };
          }
        }
      }
      function eC(e) {
        return /^TRANSFORM_/.test(e)
          ? W
          : /^STYLE_/.test(e)
            ? z
            : /^GENERAL_/.test(e)
              ? X
              : /^PLUGIN_/.test(e)
                ? H
                : void 0;
      }
      function eP(e, t) {
        return e === z ? t.replace("STYLE_", "").toLowerCase() : null;
      }
      function eF(e, t, n, i, a, r, l, c, u) {
        switch (c) {
          case W:
            var s = e,
              d = t,
              f = n,
              E = a,
              m = l;
            let y = ex
                .map((e) => {
                  let t = eM[e],
                    {
                      xValue: n = t.xValue,
                      yValue: i = t.yValue,
                      zValue: a = t.zValue,
                      xUnit: r = "",
                      yUnit: o = "",
                      zUnit: l = "",
                    } = d[e] || {};
                  switch (e) {
                    case Q:
                      return `${I}(${n}${r}, ${i}${o}, ${a}${l})`;
                    case q:
                      return `${h}(${n}${r}, ${i}${o}, ${a}${l})`;
                    case K:
                      return `${T}(${n}${r}) ${b}(${i}${o}) ${v}(${a}${l})`;
                    case Z:
                      return `${_}(${n}${r}, ${i}${o})`;
                    default:
                      return "";
                  }
                })
                .join(" "),
              { setStyle: w } = m;
            (eB(s, g.TRANSFORM_PREFIXED, m),
              w(s, g.TRANSFORM_PREFIXED, y),
              (function (
                { actionTypeId: e },
                { xValue: t, yValue: n, zValue: i },
              ) {
                return (
                  (e === Q && void 0 !== i) ||
                  (e === q && void 0 !== i) ||
                  (e === K && (void 0 !== t || void 0 !== n))
                );
              })(E, f) && w(s, g.TRANSFORM_STYLE_PREFIXED, O));
            return;
          case z:
            return (function (e, t, n, i, a, r) {
              let { setStyle: l } = r;
              switch (i.actionTypeId) {
                case en: {
                  let { widthUnit: t = "", heightUnit: a = "" } = i.config,
                    { widthValue: o, heightValue: c } = n;
                  (void 0 !== o &&
                    (t === V && (t = "px"), eB(e, R, r), l(e, R, o + t)),
                    void 0 !== c &&
                      (a === V && (a = "px"), eB(e, N, r), l(e, N, c + a)));
                  break;
                }
                case ee:
                  var c = i.config;
                  let u = (0, o.default)(
                      n,
                      (e, t, n) => `${e} ${n}(${t}${ek(n, c)})`,
                      "",
                    ),
                    { setStyle: s } = r;
                  (eB(e, S, r), s(e, S, u));
                  break;
                case et:
                  i.config;
                  let d = (0, o.default)(
                      n,
                      (e, t, n) => (e.push(`"${n}" ${t}`), e),
                      [],
                    ).join(", "),
                    { setStyle: f } = r;
                  (eB(e, L, r), f(e, L, d));
                  break;
                case ei:
                case ea:
                case er: {
                  let t = eu[i.actionTypeId],
                    a = Math.round(n.rValue),
                    o = Math.round(n.gValue),
                    c = Math.round(n.bValue),
                    u = n.aValue;
                  (eB(e, t, r),
                    l(
                      e,
                      t,
                      u >= 1
                        ? `rgb(${a},${o},${c})`
                        : `rgba(${a},${o},${c},${u})`,
                    ));
                  break;
                }
                default: {
                  let { unit: t = "" } = i.config;
                  (eB(e, a, r), l(e, a, n.value + t));
                }
              }
            })(e, 0, n, a, r, l);
          case X:
            var C = e,
              P = a,
              F = l;
            let { setStyle: M } = F;
            if (P.actionTypeId === eo) {
              let { value: e } = P.config;
              M(C, x, e === A && g.IS_BROWSER_ENV ? g.FLEX_PREFIXED : e);
            }
            return;
          case H: {
            let { actionTypeId: e } = a;
            if ((0, p.isPluginType)(e)) return (0, p.renderPlugin)(e)(u, t, a);
          }
        }
      }
      let eM = {
          [Q]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [q]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
          [K]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [Z]: Object.freeze({ xValue: 0, yValue: 0 }),
        },
        eD = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        }),
        eG = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
        ek = (e, t) => {
          let n = (0, l.default)(t.filters, ({ type: t }) => t === e);
          if (n && n.unit) return n.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        },
        ex = Object.keys(eM),
        eU = /^rgb/,
        eV = RegExp("rgba?\\(([^)]+)\\)");
      function eB(e, t, n) {
        if (!g.IS_BROWSER_ENV) return;
        let i = es[t];
        if (!i) return;
        let { getStyle: a, setStyle: r } = n,
          o = a(e, U);
        if (!o) return void r(e, U, i);
        let l = o.split(B).map(ec);
        -1 === l.indexOf(i) && r(e, U, l.concat(i).join(B));
      }
      function ej(e, t, n) {
        if (!g.IS_BROWSER_ENV) return;
        let i = es[t];
        if (!i) return;
        let { getStyle: a, setStyle: r } = n,
          o = a(e, U);
        o &&
          -1 !== o.indexOf(i) &&
          r(
            e,
            U,
            o
              .split(B)
              .map(ec)
              .filter((e) => e !== i)
              .join(B),
          );
      }
      function eY({ store: e, elementApi: t }) {
        let { ixData: n } = e.getState(),
          { events: i = {}, actionLists: a = {} } = n;
        (Object.keys(i).forEach((e) => {
          let n = i[e],
            { config: r } = n.action,
            { actionListId: o } = r,
            l = a[o];
          l && eW({ actionList: l, event: n, elementApi: t });
        }),
          Object.keys(a).forEach((e) => {
            eW({ actionList: a[e], elementApi: t });
          }));
      }
      function eW({ actionList: e = {}, event: t, elementApi: n }) {
        let { actionItemGroups: i, continuousParameterGroups: a } = e;
        (i &&
          i.forEach((e) => {
            eX({ actionGroup: e, event: t, elementApi: n });
          }),
          a &&
            a.forEach((e) => {
              let { continuousActionGroups: i } = e;
              i.forEach((e) => {
                eX({ actionGroup: e, event: t, elementApi: n });
              });
            }));
      }
      function eX({ actionGroup: e, event: t, elementApi: n }) {
        let { actionItems: i } = e;
        i.forEach((e) => {
          let i,
            { actionTypeId: a, config: r } = e;
          ((i = (0, p.isPluginType)(a)
            ? (t) => (0, p.clearPlugin)(a)(t, e)
            : ez({ effect: eH, actionTypeId: a, elementApi: n })),
            eb({ config: r, event: t, elementApi: n }).forEach(i));
        });
      }
      function e$(e, t, n) {
        let { setStyle: i, getStyle: a } = n,
          { actionTypeId: r } = t;
        if (r === en) {
          let { config: n } = t;
          (n.widthUnit === V && i(e, R, ""), n.heightUnit === V && i(e, N, ""));
        }
        a(e, U) && ez({ effect: ej, actionTypeId: r, elementApi: n })(e);
      }
      let ez =
        ({ effect: e, actionTypeId: t, elementApi: n }) =>
        (i) => {
          switch (t) {
            case Q:
            case q:
            case K:
            case Z:
              e(i, g.TRANSFORM_PREFIXED, n);
              break;
            case ee:
              e(i, S, n);
              break;
            case et:
              e(i, L, n);
              break;
            case J:
              e(i, w, n);
              break;
            case en:
              (e(i, R, n), e(i, N, n));
              break;
            case ei:
            case ea:
            case er:
              e(i, eu[t], n);
              break;
            case eo:
              e(i, x, n);
          }
        };
      function eH(e, t, n) {
        let { setStyle: i } = n;
        (ej(e, t, n),
          i(e, t, ""),
          t === g.TRANSFORM_PREFIXED && i(e, g.TRANSFORM_STYLE_PREFIXED, ""));
      }
      function eQ(e) {
        let t = 0,
          n = 0;
        return (
          e.forEach((e, i) => {
            let { config: a } = e,
              r = a.delay + a.duration;
            r >= t && ((t = r), (n = i));
          }),
          n
        );
      }
      function eq(e, t) {
        let { actionItemGroups: n, useFirstGroupAsInitialState: i } = e,
          { actionItem: a, verboseTimeElapsed: r = 0 } = t,
          o = 0,
          l = 0;
        return (
          n.forEach((e, t) => {
            if (i && 0 === t) return;
            let { actionItems: n } = e,
              c = n[eQ(n)],
              { config: u, actionTypeId: s } = c;
            a.id === c.id && (l = o + r);
            let d = eC(s) === X ? 0 : u.duration;
            o += u.delay + d;
          }),
          o > 0 ? (0, d.optimizeFloat)(l / o) : 0
        );
      }
      function eK({ actionList: e, actionItemId: t, rawData: n }) {
        let { actionItemGroups: i, continuousParameterGroups: a } = e,
          r = [],
          o = (e) => (
            r.push((0, c.mergeIn)(e, ["config"], { delay: 0, duration: 0 })),
            e.id === t
          );
        return (
          i && i.some(({ actionItems: e }) => e.some(o)),
          a &&
            a.some((e) => {
              let { continuousActionGroups: t } = e;
              return t.some(({ actionItems: e }) => e.some(o));
            }),
          (0, c.setIn)(n, ["actionLists"], {
            [e.id]: { id: e.id, actionItemGroups: [{ actionItems: r }] },
          })
        );
      }
      function eZ(e, { basedOn: t }) {
        return (
          (e === u.EventTypeConsts.SCROLLING_IN_VIEW &&
            (t === u.EventBasedOn.ELEMENT || null == t)) ||
          (e === u.EventTypeConsts.MOUSE_MOVE && t === u.EventBasedOn.ELEMENT)
        );
      }
      function eJ(e, t) {
        return e + j + t;
      }
      function e0(e, t) {
        return null == t || -1 !== e.indexOf(t);
      }
      function e1(e, t) {
        return (0, s.default)(e && e.sort(), t && t.sort());
      }
      function e2(e) {
        if ("string" == typeof e) return e;
        if (e.pluginElement && e.objectId)
          return e.pluginElement + Y + e.objectId;
        if (e.objectId) return e.objectId;
        let { id: t = "", selector: n = "", useEventTarget: i = "" } = e;
        return t + Y + n + Y + i;
      }
    },
    7164: function (e, t) {
      "use strict";
      function n(e, t) {
        return e === t
          ? 0 !== e || 0 !== t || 1 / e == 1 / t
          : e != e && t != t;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return i;
          },
        }));
      let i = function (e, t) {
        if (n(e, t)) return !0;
        if (
          "object" != typeof e ||
          null === e ||
          "object" != typeof t ||
          null === t
        )
          return !1;
        let i = Object.keys(e),
          a = Object.keys(t);
        if (i.length !== a.length) return !1;
        for (let a = 0; a < i.length; a++)
          if (!Object.hasOwn(t, i[a]) || !n(e[i[a]], t[i[a]])) return !1;
        return !0;
      };
    },
    5861: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        createElementState: function () {
          return _;
        },
        ixElements: function () {
          return v;
        },
        mergeActionState: function () {
          return O;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = n(1185),
        o = n(7087),
        {
          HTML_ELEMENT: l,
          PLAIN_OBJECT: c,
          ABSTRACT_NODE: u,
          CONFIG_X_VALUE: s,
          CONFIG_Y_VALUE: d,
          CONFIG_Z_VALUE: f,
          CONFIG_VALUE: p,
          CONFIG_X_UNIT: g,
          CONFIG_Y_UNIT: E,
          CONFIG_Z_UNIT: m,
          CONFIG_UNIT: y,
        } = o.IX2EngineConstants,
        {
          IX2_SESSION_STOPPED: I,
          IX2_INSTANCE_ADDED: h,
          IX2_ELEMENT_STATE_CHANGED: T,
        } = o.IX2EngineActionTypes,
        b = {},
        v = (e = b, t = {}) => {
          switch (t.type) {
            case I:
              return b;
            case h: {
              let {
                  elementId: n,
                  element: i,
                  origin: a,
                  actionItem: o,
                  refType: l,
                } = t.payload,
                { actionTypeId: c } = o,
                u = e;
              return (
                (0, r.getIn)(u, [n, i]) !== i && (u = _(u, i, l, n, o)),
                O(u, n, c, a, o)
              );
            }
            case T: {
              let {
                elementId: n,
                actionTypeId: i,
                current: a,
                actionItem: r,
              } = t.payload;
              return O(e, n, i, a, r);
            }
            default:
              return e;
          }
        };
      function _(e, t, n, i, a) {
        let o =
          n === c ? (0, r.getIn)(a, ["config", "target", "objectId"]) : null;
        return (0, r.mergeIn)(e, [i], { id: i, ref: t, refId: o, refType: n });
      }
      function O(e, t, n, i, a) {
        let o = (function (e) {
          let { config: t } = e;
          return A.reduce((e, n) => {
            let i = n[0],
              a = n[1],
              r = t[i],
              o = t[a];
            return (null != r && null != o && (e[a] = o), e);
          }, {});
        })(a);
        return (0, r.mergeIn)(e, [t, "refState", n], i, o);
      }
      let A = [
        [s, g],
        [d, E],
        [f, m],
        [p, y],
      ];
    },
    9977: function () {
      Webflow.require("ix2").init({
        events: {
          e: {
            id: "e",
            name: "",
            animationType: "preset",
            eventTypeId: "NAVBAR_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-405",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6540ac58fa7ea7efe56967ef|ee2ece63-4833-e1ba-a379-d906d496c2d2",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6540ac58fa7ea7efe56967ef|ee2ece63-4833-e1ba-a379-d906d496c2d2",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17aa36b10e2,
          },
          "e-2": {
            id: "e-2",
            name: "",
            animationType: "preset",
            eventTypeId: "NAVBAR_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-383",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6540ac58fa7ea7efe56967ef|ee2ece63-4833-e1ba-a379-d906d496c2d2",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6540ac58fa7ea7efe56967ef|ee2ece63-4833-e1ba-a379-d906d496c2d2",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17aa36b10e2,
          },
          "e-3": {
            id: "e-3",
            name: "",
            animationType: "custom",
            eventTypeId: "DROPDOWN_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-3",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-589",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6540ac58fa7ea7efe56967ef|ee2ece63-4833-e1ba-a379-d906d496c2e1",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6540ac58fa7ea7efe56967ef|ee2ece63-4833-e1ba-a379-d906d496c2e1",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17aa3a75d80,
          },
          "e-4": {
            id: "e-4",
            name: "",
            animationType: "custom",
            eventTypeId: "DROPDOWN_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-4",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2001",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6540ac58fa7ea7efe56967ef|ee2ece63-4833-e1ba-a379-d906d496c2e1",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6540ac58fa7ea7efe56967ef|ee2ece63-4833-e1ba-a379-d906d496c2e1",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17aa3a75d81,
          },
          "e-5": {
            id: "e-5",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-5",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-393",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6540ac58fa7ea7efe56967ef|ee2ece63-4833-e1ba-a379-d906d496c2e1",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6540ac58fa7ea7efe56967ef|ee2ece63-4833-e1ba-a379-d906d496c2e1",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17aa36b10e2,
          },
          "e-6": {
            id: "e-6",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2003",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6540ac58fa7ea7efe56967ef|ee2ece63-4833-e1ba-a379-d906d496c2e1",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6540ac58fa7ea7efe56967ef|ee2ece63-4833-e1ba-a379-d906d496c2e1",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17aa36b10e2,
          },
          "e-11": {
            id: "e-11",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-8",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-49",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6556bbf4-2a41-7a26-3794-ce32993a4577",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6556bbf4-2a41-7a26-3794-ce32993a4577",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18ea48ad3b6,
          },
          "e-13": {
            id: "e-13",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-41",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6556bbf4-2a41-7a26-3794-ce32993a4550",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6556bbf4-2a41-7a26-3794-ce32993a4550",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18ea4a6a0c0,
          },
          "e-15": {
            id: "e-15",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-8",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-43",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6556bbf4-2a41-7a26-3794-ce32993a4550",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6556bbf4-2a41-7a26-3794-ce32993a4550",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18ea4a6cdcd,
          },
          "e-17": {
            id: "e-17",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-51",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6556bbf4-2a41-7a26-3794-ce32993a4577",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6556bbf4-2a41-7a26-3794-ce32993a4577",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18ea4b9da5e,
          },
          "e-19": {
            id: "e-19",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-9",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-20",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".trigger",
              originalId:
                "65fa91c32ad38172e40465cd|2a02ffcd-c80d-6d7a-0e65-49dfc0914984",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".trigger",
                originalId:
                  "65fa91c32ad38172e40465cd|2a02ffcd-c80d-6d7a-0e65-49dfc0914984",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18ea5b6b5ba,
          },
          "e-21": {
            id: "e-21",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-22",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".nav_link",
              originalId: "6556bbf4-2a41-7a26-3794-ce32993a4564",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav_link",
                originalId: "6556bbf4-2a41-7a26-3794-ce32993a4564",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18ec23b13b6,
          },
          "e-27": {
            id: "e-27",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-7",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-28",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".button.is-nav-connect",
              originalId: "6556bbf4-2a41-7a26-3794-ce32993a4560",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".button.is-nav-connect",
                originalId: "6556bbf4-2a41-7a26-3794-ce32993a4560",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18ec24c5034,
          },
          "e-29": {
            id: "e-29",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-12",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-30",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "65fa91c32ad38172e40465cd|a4cdc107-e50b-797c-2361-1350395621f6",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "65fa91c32ad38172e40465cd|a4cdc107-e50b-797c-2361-1350395621f6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 50,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18ece99b8d7,
          },
          "e-30": {
            id: "e-30",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_OUT_OF_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-11",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-29",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "65fa91c32ad38172e40465cd|a4cdc107-e50b-797c-2361-1350395621f6",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "65fa91c32ad38172e40465cd|a4cdc107-e50b-797c-2361-1350395621f6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 50,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18ece99b8d8,
          },
          "e-31": {
            id: "e-31",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-10",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-32",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              selector: ".button.is-nav-connect",
              originalId: "6556bbf4-2a41-7a26-3794-ce32993a4560",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".button.is-nav-connect",
                originalId: "6556bbf4-2a41-7a26-3794-ce32993a4560",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18f0525c985,
          },
          "e-33": {
            id: "e-33",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-16",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-34",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              selector: ".nav_connect_close.hide-pc",
              originalId:
                "65fa91c32ad38172e40465cd|a1596f1a-6fdf-8a62-7507-90f68255db28",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav_connect_close.hide-pc",
                originalId:
                  "65fa91c32ad38172e40465cd|a1596f1a-6fdf-8a62-7507-90f68255db28",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18f053bf870,
          },
          "e-35": {
            id: "e-35",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-13",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "65fa91c32ad38172e40465cd|a4cdc107-e50b-797c-2361-1350395621f6",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "65fa91c32ad38172e40465cd|a4cdc107-e50b-797c-2361-1350395621f6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-13-p",
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x18f293c4254,
          },
          "e-36": {
            id: "e-36",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-45",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "0389cb46-a65c-ea66-ee26-79205ae4ad47",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "0389cb46-a65c-ea66-ee26-79205ae4ad47",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x190063d087a,
          },
          "e-38": {
            id: "e-38",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-47",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "65fa91c32ad38172e40465cd|1ad0e0a7-522b-0e40-65ff-5b410322db2e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "65fa91c32ad38172e40465cd|1ad0e0a7-522b-0e40-65ff-5b410322db2e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x190064c902e,
          },
          "e-40": {
            id: "e-40",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-41",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "e9e1f4f3-aec0-7338-128c-801f5749de91",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "e9e1f4f3-aec0-7338-128c-801f5749de91",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18ea4a6a0c0,
          },
          "e-42": {
            id: "e-42",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-8",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-43",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "e9e1f4f3-aec0-7338-128c-801f5749de91",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "e9e1f4f3-aec0-7338-128c-801f5749de91",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18ea4a6cdcd,
          },
          "e-44": {
            id: "e-44",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-21",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-45",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".faq-question",
              originalId:
                "682dd46ac29408f337ba71f3|08854640-c976-e480-8f90-bb3d126caf61",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".faq-question",
                originalId:
                  "682dd46ac29408f337ba71f3|08854640-c976-e480-8f90-bb3d126caf61",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x167771745ec,
          },
          "e-45": {
            id: "e-45",
            animationType: "custom",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-22",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-44",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".faq-question",
              originalId:
                "682dd46ac29408f337ba71f3|08854640-c976-e480-8f90-bb3d126caf61",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".faq-question",
                originalId:
                  "682dd46ac29408f337ba71f3|08854640-c976-e480-8f90-bb3d126caf61",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x167771745ee,
          },
          "e-46": {
            id: "e-46",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "FADE_EFFECT",
              instant: !1,
              config: { actionListId: "fadeIn", autoStopEventId: "e-47" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "65fa91c32ad38172e40465cd|a49e3307-2c17-a41d-0367-c533a7c01010",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "65fa91c32ad38172e40465cd|a49e3307-2c17-a41d-0367-c533a7c01010",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 419,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x19c13f3d445,
          },
          "e-51": {
            id: "e-51",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-13",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "65fa91c32ad38172e40465cd|5c454e90-2106-98e9-270c-6f47d1b97911",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "65fa91c32ad38172e40465cd|5c454e90-2106-98e9-270c-6f47d1b97911",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-13-p",
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x19c761532e9,
          },
          "e-52": {
            id: "e-52",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-13",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "65fa91c32ad38172e40465cd|767e35f2-1655-fdc8-6b1c-42e713e70866",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "65fa91c32ad38172e40465cd|767e35f2-1655-fdc8-6b1c-42e713e70866",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-13-p",
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x19c7618340d,
          },
          "e-53": {
            id: "e-53",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-54",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "69a88424bea72a1dbfc7a291|2c1a8278-c954-d3b1-132b-608e89bc942a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69a88424bea72a1dbfc7a291|2c1a8278-c954-d3b1-132b-608e89bc942a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x183f864c960,
          },
          "e-54": {
            id: "e-54",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-53",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "69a88424bea72a1dbfc7a291|2c1a8278-c954-d3b1-132b-608e89bc942a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69a88424bea72a1dbfc7a291|2c1a8278-c954-d3b1-132b-608e89bc942a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x183f864c960,
          },
          "e-55": {
            id: "e-55",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-56",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "69a88424bea72a1dbfc7a291|2c1a8278-c954-d3b1-132b-608e89bc9434",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69a88424bea72a1dbfc7a291|2c1a8278-c954-d3b1-132b-608e89bc9434",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x183f85b7eae,
          },
          "e-56": {
            id: "e-56",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-55",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "69a88424bea72a1dbfc7a291|2c1a8278-c954-d3b1-132b-608e89bc9434",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69a88424bea72a1dbfc7a291|2c1a8278-c954-d3b1-132b-608e89bc9434",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x183f85b7eae,
          },
          "e-57": {
            id: "e-57",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-58",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "69a88424bea72a1dbfc7a291|2c1a8278-c954-d3b1-132b-608e89bc943e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69a88424bea72a1dbfc7a291|2c1a8278-c954-d3b1-132b-608e89bc943e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x183f85b7a8e,
          },
          "e-58": {
            id: "e-58",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-57",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "69a88424bea72a1dbfc7a291|2c1a8278-c954-d3b1-132b-608e89bc943e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69a88424bea72a1dbfc7a291|2c1a8278-c954-d3b1-132b-608e89bc943e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x183f85b7a8e,
          },
          "e-59": {
            id: "e-59",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-30",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-60",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "69a88424bea72a1dbfc7a291|94b63f00-0e46-7bab-1aa8-b43fa8a26f98",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69a88424bea72a1dbfc7a291|94b63f00-0e46-7bab-1aa8-b43fa8a26f98",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x183f864c960,
          },
          "e-60": {
            id: "e-60",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-31",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-59",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "69a88424bea72a1dbfc7a291|94b63f00-0e46-7bab-1aa8-b43fa8a26f98",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69a88424bea72a1dbfc7a291|94b63f00-0e46-7bab-1aa8-b43fa8a26f98",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x183f864c960,
          },
          "e-61": {
            id: "e-61",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-30",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-62",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "69a88424bea72a1dbfc7a291|94b63f00-0e46-7bab-1aa8-b43fa8a26fa2",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69a88424bea72a1dbfc7a291|94b63f00-0e46-7bab-1aa8-b43fa8a26fa2",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x183f85b7eae,
          },
          "e-62": {
            id: "e-62",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-31",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-61",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "69a88424bea72a1dbfc7a291|94b63f00-0e46-7bab-1aa8-b43fa8a26fa2",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69a88424bea72a1dbfc7a291|94b63f00-0e46-7bab-1aa8-b43fa8a26fa2",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x183f85b7eae,
          },
          "e-63": {
            id: "e-63",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-30",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-64",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "69a88424bea72a1dbfc7a291|94b63f00-0e46-7bab-1aa8-b43fa8a26fac",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69a88424bea72a1dbfc7a291|94b63f00-0e46-7bab-1aa8-b43fa8a26fac",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x183f85b7a8e,
          },
          "e-64": {
            id: "e-64",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-31",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-63",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "69a88424bea72a1dbfc7a291|94b63f00-0e46-7bab-1aa8-b43fa8a26fac",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69a88424bea72a1dbfc7a291|94b63f00-0e46-7bab-1aa8-b43fa8a26fac",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x183f85b7a8e,
          },
        },
        actionLists: {
          a: {
            id: "a",
            title: "Navbar menu [Open]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-n-10",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav_menu-list",
                        selectorGuids: ["95f41561-ec09-c078-83e6-f851cb63de2f"],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-n-11",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav_menu-list",
                        selectorGuids: ["95f41561-ec09-c078-83e6-f851cb63de2f"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "inQuint",
                      duration: 200,
                      target: {
                        selector: ".menu-icon4_line-top",
                        selectorGuids: ["22877f75-016b-9873-fc7b-878ba8267c15"],
                      },
                      widthValue: 0,
                      widthUnit: "px",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "inQuint",
                      duration: 200,
                      target: {
                        selector: ".menu-icon4_line-bottom",
                        selectorGuids: ["22877f75-016b-9873-fc7b-878ba8267c11"],
                      },
                      widthValue: 0,
                      widthUnit: "px",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-n-15",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 200,
                      target: {
                        selector: ".menu-icon4",
                        selectorGuids: ["22877f75-016b-9873-fc7b-878ba8267c16"],
                      },
                      xValue: 0,
                      yValue: 0,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-n-7",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".menu-icon4",
                        selectorGuids: ["22877f75-016b-9873-fc7b-878ba8267c16"],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-n-18",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".contact_modal_overlay",
                        selectorGuids: ["a8f79b31-912b-a3c5-b344-48f6564f5864"],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-n-19",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".contact_modal_overlay",
                        selectorGuids: ["a8f79b31-912b-a3c5-b344-48f6564f5864"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-n-22",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".btn_close",
                        selectorGuids: ["d638e0c0-f025-60fb-ac9b-ab5e5f4bf9cb"],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-n-24",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".btn_open",
                        selectorGuids: ["c58384d1-91a5-6d6b-b0d8-bf2b03c3c3c7"],
                      },
                      value: "block",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-n-3",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".menu-icon_line-middle-base",
                        selectorGuids: ["22877f75-016b-9873-fc7b-878ba8267c12"],
                      },
                      value: "block",
                    },
                  },
                  {
                    id: "a-n-9",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".menu-icon4",
                        selectorGuids: ["22877f75-016b-9873-fc7b-878ba8267c16"],
                      },
                      value: "flex",
                    },
                  },
                  {
                    id: "a-n-12",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav_menu-list",
                        selectorGuids: ["95f41561-ec09-c078-83e6-f851cb63de2f"],
                      },
                      value: "flex",
                    },
                  },
                  {
                    id: "a-n-20",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".contact_modal_overlay",
                        selectorGuids: ["a8f79b31-912b-a3c5-b344-48f6564f5864"],
                      },
                      value: "block",
                    },
                  },
                  {
                    id: "a-n-25",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".btn_open",
                        selectorGuids: ["c58384d1-91a5-6d6b-b0d8-bf2b03c3c3c7"],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-n-23",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".btn_close",
                        selectorGuids: ["d638e0c0-f025-60fb-ac9b-ab5e5f4bf9cb"],
                      },
                      value: "block",
                    },
                  },
                  {
                    id: "a-n-8",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 20,
                      easing: "easeIn",
                      duration: 200,
                      target: {
                        selector: ".menu-icon4",
                        selectorGuids: ["22877f75-016b-9873-fc7b-878ba8267c16"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-n-13",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 20,
                      easing: "easeIn",
                      duration: 400,
                      target: {
                        selector: ".nav_menu-list",
                        selectorGuids: ["95f41561-ec09-c078-83e6-f851cb63de2f"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-n-21",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 20,
                      easing: "easeOut",
                      duration: 300,
                      target: {
                        selector: ".contact_modal_overlay",
                        selectorGuids: ["a8f79b31-912b-a3c5-b344-48f6564f5864"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 400,
                      target: {
                        selector: ".menu-icon_line-middle-base",
                        selectorGuids: ["22877f75-016b-9873-fc7b-878ba8267c12"],
                      },
                      zValue: 90,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-n-5",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 400,
                      target: {
                        selector: ".menu-icon4_line-middle",
                        selectorGuids: ["22877f75-016b-9873-fc7b-878ba8267c17"],
                      },
                      zValue: 45,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x17aa315f880,
          },
          "a-2": {
            id: "a-2",
            title: "Navbar menu [Close] [desktop]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-2-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 300,
                      target: {
                        selector: ".menu-icon_line-middle-base",
                        selectorGuids: ["22877f75-016b-9873-fc7b-878ba8267c12"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-2-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 300,
                      target: {
                        selector: ".menu-icon4_line-middle",
                        selectorGuids: ["22877f75-016b-9873-fc7b-878ba8267c17"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-2-n-13",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".btn_open",
                        selectorGuids: ["c58384d1-91a5-6d6b-b0d8-bf2b03c3c3c7"],
                      },
                      value: "block",
                    },
                  },
                  {
                    id: "a-2-n-12",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".btn_close",
                        selectorGuids: ["d638e0c0-f025-60fb-ac9b-ab5e5f4bf9cb"],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-2-n-5",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 200,
                      easing: "easeOut",
                      duration: 200,
                      target: {
                        selector: ".menu-icon4",
                        selectorGuids: ["22877f75-016b-9873-fc7b-878ba8267c16"],
                      },
                      xValue: 0,
                      yValue: 0,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-2-n-7",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 200,
                      easing: "",
                      duration: 200,
                      target: {
                        selector: ".nav_menu-list",
                        selectorGuids: ["95f41561-ec09-c078-83e6-f851cb63de2f"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-10",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 200,
                      easing: "easeOut",
                      duration: 200,
                      target: {
                        selector: ".contact_modal_overlay",
                        selectorGuids: ["a8f79b31-912b-a3c5-b344-48f6564f5864"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-2-n-6",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".menu-icon4",
                        selectorGuids: ["22877f75-016b-9873-fc7b-878ba8267c16"],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-2-n-8",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav_menu-list",
                        selectorGuids: ["95f41561-ec09-c078-83e6-f851cb63de2f"],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-2-n-11",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".contact_modal_overlay",
                        selectorGuids: ["a8f79b31-912b-a3c5-b344-48f6564f5864"],
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17aa32ea158,
          },
          "a-3": {
            id: "a-3",
            title: "Navbar 4 dropdown [Open]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-3-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 200,
                      target: {},
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-3-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 200,
                      target: {},
                      widthUnit: "PX",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x17aa3a775c3,
          },
          "a-4": {
            id: "a-4",
            title: "Navbar 4 dropdown [Close]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-4-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 200,
                      target: {},
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17aa3a775c3,
          },
          "a-5": {
            id: "a-5",
            title: "Dropdown [Open]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-5-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 200,
                      target: {},
                      zValue: 180,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17a9ec81501,
          },
          "a-6": {
            id: "a-6",
            title: "Dropdown [Close]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-6-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 200,
                      target: {},
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17a9ec8f4a7,
          },
          "a-8": {
            id: "a-8",
            title: "Connect Modal [close][desktop]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-8-n-8",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "easeOut",
                      duration: 200,
                      target: {
                        selector: ".contact_modal_overlay",
                        selectorGuids: ["a8f79b31-912b-a3c5-b344-48f6564f5864"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-8-n-9",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "easeOut",
                      duration: 200,
                      target: {
                        selector: ".nav_connect-modal",
                        selectorGuids: ["207720de-4343-dc15-54f5-840cf39c69ee"],
                      },
                      xValue: 0,
                      yValue: 0,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-8-n-10",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "easeOut",
                      duration: 200,
                      target: {
                        selector: ".nav_connect-modal",
                        selectorGuids: ["207720de-4343-dc15-54f5-840cf39c69ee"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-8-n-6",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".contact_modal_overlay",
                        selectorGuids: ["a8f79b31-912b-a3c5-b344-48f6564f5864"],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-8-n-7",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav_connect-modal",
                        selectorGuids: ["207720de-4343-dc15-54f5-840cf39c69ee"],
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18ea4838ac6,
          },
          "a-9": {
            id: "a-9",
            title: "Hide Loader",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-9-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inCirc",
                      duration: 500,
                      target: {
                        selector: ".loading_left-corner",
                        selectorGuids: ["331d24ea-42ed-9d14-6ea1-05314d091256"],
                      },
                      yValue: -8,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-9-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inCirc",
                      duration: 500,
                      target: {
                        selector: ".loading_right-corner",
                        selectorGuids: ["67a3a233-57d5-1c7c-e755-4cfd871de69b"],
                      },
                      yValue: 8,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-9-n-4",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".loader_component",
                        selectorGuids: ["c5a6e605-a3f3-b552-a971-4eec2b709b0e"],
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "fb90",
                          value: 5,
                          unit: "px",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-9-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 200,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".loader_component",
                        selectorGuids: ["c5a6e605-a3f3-b552-a971-4eec2b709b0e"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-9-n-6",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 400,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "PARENT",
                        selector: ".loader",
                        selectorGuids: ["f38876a7-534e-65c0-4461-12c2e331ead3"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-9-n-7",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 400,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "PARENT",
                        selector: ".loader",
                        selectorGuids: ["f38876a7-534e-65c0-4461-12c2e331ead3"],
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18ea5b6e042,
          },
          "a-7": {
            id: "a-7",
            title: "Connect Modal [open] [desktop]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-7-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".contact_modal_overlay",
                        selectorGuids: ["a8f79b31-912b-a3c5-b344-48f6564f5864"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-7-n-2",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".contact_modal_overlay",
                        selectorGuids: ["a8f79b31-912b-a3c5-b344-48f6564f5864"],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-7-n-5",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav_connect-modal",
                        selectorGuids: ["207720de-4343-dc15-54f5-840cf39c69ee"],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-7-n-6",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".nav_connect-modal",
                        selectorGuids: ["207720de-4343-dc15-54f5-840cf39c69ee"],
                      },
                      xValue: 0,
                      yValue: 0,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-7-n-9",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".nav_connect-modal",
                        selectorGuids: ["207720de-4343-dc15-54f5-840cf39c69ee"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-7-n-4",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".contact_modal_overlay",
                        selectorGuids: ["a8f79b31-912b-a3c5-b344-48f6564f5864"],
                      },
                      value: "block",
                    },
                  },
                  {
                    id: "a-7-n-8",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav_connect-modal",
                        selectorGuids: ["207720de-4343-dc15-54f5-840cf39c69ee"],
                      },
                      value: "flex",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-7-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "easeOut",
                      duration: 300,
                      target: {
                        selector: ".contact_modal_overlay",
                        selectorGuids: ["a8f79b31-912b-a3c5-b344-48f6564f5864"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-7-n-7",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "easeOut",
                      duration: 300,
                      target: {
                        selector: ".nav_connect-modal",
                        selectorGuids: ["207720de-4343-dc15-54f5-840cf39c69ee"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-7-n-10",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "easeOut",
                      duration: 300,
                      target: {
                        selector: ".nav_connect-modal",
                        selectorGuids: ["207720de-4343-dc15-54f5-840cf39c69ee"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18ea4838ac6,
          },
          "a-12": {
            id: "a-12",
            title: "Tabs menu scroll [in]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-12-n-3",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".tabs_menu_component",
                        selectorGuids: ["f8867c55-dcf3-0351-3b22-89315a9ca70b"],
                      },
                      value: "none",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-12-n-2",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".tabs_menu_component",
                        selectorGuids: ["f8867c55-dcf3-0351-3b22-89315a9ca70b"],
                      },
                      value: "flex",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-12-n",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "easeOut",
                      duration: 500,
                      target: {
                        selector: ".tabs_menu_component",
                        selectorGuids: ["f8867c55-dcf3-0351-3b22-89315a9ca70b"],
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "7294",
                          value: 0,
                          unit: "px",
                        },
                      ],
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18ece9aa35b,
          },
          "a-11": {
            id: "a-11",
            title: "Tabs menu scroll [out]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-11-n",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "easeIn",
                      duration: 500,
                      target: {
                        selector: ".tabs_menu_component",
                        selectorGuids: ["f8867c55-dcf3-0351-3b22-89315a9ca70b"],
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "7294",
                          value: 20,
                          unit: "px",
                        },
                      ],
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-11-n-2",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".tabs_menu_component",
                        selectorGuids: ["f8867c55-dcf3-0351-3b22-89315a9ca70b"],
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18ece9aa35b,
          },
          "a-10": {
            id: "a-10",
            title: "Connect Modal [open] [mobile]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-10-n-3",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav_connect-modal",
                        selectorGuids: ["207720de-4343-dc15-54f5-840cf39c69ee"],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-10-n-4",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".nav_connect-modal",
                        selectorGuids: ["207720de-4343-dc15-54f5-840cf39c69ee"],
                      },
                      xValue: 0,
                      yValue: 0,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-10-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".nav_connect-modal",
                        selectorGuids: ["207720de-4343-dc15-54f5-840cf39c69ee"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-10-n-15",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav_connect_close.hide-pc",
                        selectorGuids: [
                          "da444588-a549-de7d-2279-fe35941de347",
                          "fd04f458-ba98-1c92-2039-81d574ed254c",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-10-n-17",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".nav_connect_close.hide-pc",
                        selectorGuids: [
                          "da444588-a549-de7d-2279-fe35941de347",
                          "fd04f458-ba98-1c92-2039-81d574ed254c",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-10-n-7",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav_connect-modal",
                        selectorGuids: ["207720de-4343-dc15-54f5-840cf39c69ee"],
                      },
                      value: "block",
                    },
                  },
                  {
                    id: "a-10-n-16",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav_connect_close.hide-pc",
                        selectorGuids: [
                          "da444588-a549-de7d-2279-fe35941de347",
                          "fd04f458-ba98-1c92-2039-81d574ed254c",
                        ],
                      },
                      value: "block",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-10-n-9",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "easeOut",
                      duration: 300,
                      target: {
                        selector: ".nav_connect-modal",
                        selectorGuids: ["207720de-4343-dc15-54f5-840cf39c69ee"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-10-n-10",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "easeOut",
                      duration: 300,
                      target: {
                        selector: ".nav_connect-modal",
                        selectorGuids: ["207720de-4343-dc15-54f5-840cf39c69ee"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-10-n-14",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "easeOut",
                      duration: 250,
                      target: { id: "6556bbf4-2a41-7a26-3794-ce32993a4560" },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-10-n-13",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "easeOut",
                      duration: 250,
                      target: {
                        useEventTarget: "SIBLINGS",
                        id: "6556bbf4-2a41-7a26-3794-ce32993a4556",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-10-n-18",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "easeIn",
                      duration: 200,
                      target: {
                        selector: ".nav_connect_close.hide-pc",
                        selectorGuids: [
                          "da444588-a549-de7d-2279-fe35941de347",
                          "fd04f458-ba98-1c92-2039-81d574ed254c",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-10-n-12",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 250,
                      easing: "",
                      duration: 0,
                      target: { id: "6556bbf4-2a41-7a26-3794-ce32993a4560" },
                      zValue: 0,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-10-n-11",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 250,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "SIBLINGS",
                        id: "6556bbf4-2a41-7a26-3794-ce32993a4556",
                      },
                      zValue: 0,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18ea4838ac6,
          },
          "a-16": {
            id: "a-16",
            title: "Connect Modal [close][mobile]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-16-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "easeOut",
                      duration: 200,
                      target: {
                        selector: ".contact_modal_overlay",
                        selectorGuids: ["a8f79b31-912b-a3c5-b344-48f6564f5864"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-16-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "easeOut",
                      duration: 200,
                      target: {
                        selector: ".nav_connect-modal",
                        selectorGuids: ["207720de-4343-dc15-54f5-840cf39c69ee"],
                      },
                      xValue: 0,
                      yValue: 0,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-16-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "easeOut",
                      duration: 200,
                      target: {
                        selector: ".nav_connect-modal",
                        selectorGuids: ["207720de-4343-dc15-54f5-840cf39c69ee"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-16-n-6",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "SIBLINGS",
                        id: "6556bbf4-2a41-7a26-3794-ce32993a4556",
                      },
                      zValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-16-n-7",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "SIBLINGS",
                        id: "6556bbf4-2a41-7a26-3794-ce32993a4560",
                      },
                      zValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-16-n-9",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "easeOut",
                      duration: 200,
                      target: {
                        useEventTarget: "SIBLINGS",
                        id: "6556bbf4-2a41-7a26-3794-ce32993a4556",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-16-n-8",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "easeOut",
                      duration: 200,
                      target: {
                        useEventTarget: "SIBLINGS",
                        id: "6556bbf4-2a41-7a26-3794-ce32993a4560",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-16-n-10",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "easeIn",
                      duration: 200,
                      target: { id: "a1596f1a-6fdf-8a62-7507-90f68255db28" },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-16-n-4",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".contact_modal_overlay",
                        selectorGuids: ["a8f79b31-912b-a3c5-b344-48f6564f5864"],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-16-n-5",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav_connect-modal",
                        selectorGuids: ["207720de-4343-dc15-54f5-840cf39c69ee"],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-16-n-11",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: { id: "a1596f1a-6fdf-8a62-7507-90f68255db28" },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18ea4838ac6,
          },
          "a-13": {
            id: "a-13",
            title: "Progress bar [animation]",
            continuousParameterGroups: [
              {
                id: "a-13-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-13-n-4",
                        actionTypeId: "STYLE_SIZE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".progres_bar_marker-dot",
                            selectorGuids: [
                              "98698f55-6f6c-a80c-845a-5b4770f2d501",
                            ],
                          },
                          widthUnit: "PX",
                          heightUnit: "PX",
                          locked: !1,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 17,
                    actionItems: [
                      {
                        id: "a-13-n",
                        actionTypeId: "STYLE_SIZE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".progress_bar.is-active",
                            selectorGuids: [
                              "22573d20-ecbd-f398-0096-bb18f5fd270a",
                              "1ba200a0-d010-d308-9ae8-2def96f62b4c",
                            ],
                          },
                          widthValue: 1,
                          heightValue: 0,
                          widthUnit: "px",
                          heightUnit: "%",
                          locked: !1,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 83,
                    actionItems: [
                      {
                        id: "a-13-n-3",
                        actionTypeId: "STYLE_SIZE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".progress_bar.is-active",
                            selectorGuids: [
                              "22573d20-ecbd-f398-0096-bb18f5fd270a",
                              "1ba200a0-d010-d308-9ae8-2def96f62b4c",
                            ],
                          },
                          widthValue: 1,
                          heightValue: 100,
                          widthUnit: "px",
                          heightUnit: "%",
                          locked: !1,
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x18ef0c3dbdc,
          },
          "a-21": {
            id: "a-21",
            title: "FAQ Open",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-21-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".faq-answer",
                        selectorGuids: ["f7ef4fa0-14af-e73a-be92-53081a8471d6"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-21-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "easeInOut",
                      duration: 300,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".faq-answer",
                        selectorGuids: ["f7ef4fa0-14af-e73a-be92-53081a8471d6"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-21-n-3",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq-plus-l",
                        selectorGuids: ["f7ef4fa0-14af-e73a-be92-53081a8471db"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-21-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "inOutBack",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq-plus-wrap",
                        selectorGuids: ["f7ef4fa0-14af-e73a-be92-53081a8471d8"],
                      },
                      zValue: 180,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "DEG",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1677717512f,
          },
          "a-22": {
            id: "a-22",
            title: "FAQ Close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-22-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "easeInOut",
                      duration: 300,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".faq-answer",
                        selectorGuids: ["f7ef4fa0-14af-e73a-be92-53081a8471d6"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-22-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq-plus-l",
                        selectorGuids: ["f7ef4fa0-14af-e73a-be92-53081a8471db"],
                      },
                      heightValue: 100,
                      widthUnit: "PX",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-22-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "inOutBack",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq-plus-wrap",
                        selectorGuids: ["f7ef4fa0-14af-e73a-be92-53081a8471d8"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "DEG",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1677717512f,
          },
          "a-27": {
            id: "a-27",
            title: "FAQ Dropdown Open",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-27-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-27-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 250,
                      target: {},
                      widthUnit: "PX",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-27-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 250,
                      target: {},
                      zValue: 45,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x183f85413d9,
          },
          "a-28": {
            id: "a-28",
            title: "FAQ Dropdown Close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-28-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 250,
                      target: {},
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-28-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 250,
                      target: {},
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x183f85413d9,
          },
          "a-30": {
            id: "a-30",
            title: "FAQ Dropdown Open 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-30-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".spark-faq-dropdown-2",
                        selectorGuids: ["931240c1-6d5c-de68-9cd8-9521efc0aaca"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-30-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 250,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".spark-faq-dropdown-2",
                        selectorGuids: ["931240c1-6d5c-de68-9cd8-9521efc0aaca"],
                      },
                      widthUnit: "PX",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-30-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 250,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".spark-faq-plus-to-x-2",
                        selectorGuids: ["931240c1-6d5c-de68-9cd8-9521efc0aac7"],
                      },
                      zValue: 45,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x183f85413d9,
          },
          "a-31": {
            id: "a-31",
            title: "FAQ Dropdown Close 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-31-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 250,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".spark-faq-dropdown-2",
                        selectorGuids: ["931240c1-6d5c-de68-9cd8-9521efc0aaca"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-31-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 250,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".spark-faq-plus-to-x-2",
                        selectorGuids: ["931240c1-6d5c-de68-9cd8-9521efc0aac7"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x183f85413d9,
          },
          fadeIn: {
            id: "fadeIn",
            useFirstGroupAsInitialState: !0,
            actionItemGroups: [
              {
                actionItems: [
                  {
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      duration: 0,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      value: 0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      value: 1,
                    },
                  },
                ],
              },
            ],
          },
        },
        site: {
          mediaQueries: [
            { key: "main", min: 992, max: 1e4 },
            { key: "medium", min: 768, max: 991 },
            { key: "small", min: 480, max: 767 },
            { key: "tiny", min: 0, max: 479 },
          ],
        },
      });
    },
  },
]);
