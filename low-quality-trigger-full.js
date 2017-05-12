/********************************************************************************************************************
**  Code borrowed from : https://cdn.kastatic.org/genfiles/javascript/en/discussion-package-d55b73.js
**
**  This code was translated into more manageable and readable code.
** 
**  @TABLE OF CONTENTS: These line locators are subject to change and will not always be up to date.
**
**  Note: Any triple stars (***) below indicate the following code is interesting.
**
**    Line 28: *** KAdefine("javascript/discussion-package/low-quality-notice.js", function(require, module, exports) {
**    Line 156: *** KAdefine("javascript/discussion-package/duplicate-notice.js", function(require, module, exports) {
**    Line 214: *** KAdefine("javascript/discussion-package/low-quality-notice-header.handlebars", function(require, module, exports) {
**    Line 419: *** KAdefine("javascript/discussion-package/low-quality-notice-footer.handlebars", function(require, module, exports) {
**    Line 454: *** KAdefine("javascript/discussion-package/duplicate-notice.handlebars", function(require, module, exports) {
**    Line 552: KAdefine("javascript/discussion-package/mod-controls.handlebars", function(require, module, exports) {
**    Line 1540: KAdefine("javascript/discussion-package/moderation.js", function(require, module, exports) {
**    Line 1796: KAdefine("javascript/discussion-package/queue.js", function(require, module, exports) {
**    Line 1935: KAdefine("javascript/discussion-package/flags-hovercard.handlebars", function(require, module, exports) {

*********************************************************************************************************************/





/*** THIS IS THE LOW QUALITY NOTICE AND RELATED CODE. ***/

KAdefine("javascript/discussion-package/low-quality-notice.js", function(require, module, exports) {
    require("../../third_party/javascript-khansrc/jqueryui/jquery.ui.effect.js")
    var $ = require("jquery")
    var i18n = require("../shared-package/i18n.js")
    var Analytics = require("../shared-package/analytics.js")
    var Discussion = require("./discussion.js")
    var DiscussionLowQualityNotice = {
        init: function e(i, t, o, a) {
            if (o["showLowQualityNotice"]) {
                var s = DiscussionLowQualityNotice.getFormContainer_(o, i)
                DiscussionLowQualityNotice.show(s, i, o["translatedFeedbackEditTip"], o["lowQualityScore"])
                DiscussionLowQualityNotice.trackShownLowQualityEvent_(i, a, o["lowQualityScore"], o["authorKaid"])
                return true
            }
            if (DiscussionLowQualityNotice.exists(t)) {
                var r = DiscussionLowQualityNotice.getScore(t),
                    c = o["lowQualityScore"]
                DiscussionLowQualityNotice.trackResubmittedEvent(t, r, c, i, a, o["authorKaid"])
                DiscussionLowQualityNotice.hide(t)
            }
            return false
        },
        show: function i(e, t, o, a) {
            if (o) {
                o = i18n._("Tip: %(translatedFeedbackEditTip)s", {
                    translatedFeedbackEditTip: o
                })
            }
            var s = $(require("./low-quality-notice-header.handlebars")({
                translatedFeedbackType: Discussion._translateFeedbackType(t)
            }))
            var r = $(require("./low-quality-notice-footer.handlebars")({
                translatedFeedbackEditTip: o
            }))
            var c = 100
            e.switchClass("", "low-quality-notice", c)
            try {
                e.find(".discussion-text:first").focus()
            } catch (n) {}
            setTimeout(function() {
                var i = {
                    opacity: 0,
                    height: 0
                }
                e.prepend(s)
                var t = s.height()
                s.css(i).animate({
                    opacity: 1,
                    height: t
                }, "slow")
                var a = e.find(".discussion-controls:first")
                if (o) {
                    r.insertBefore(a)
                    var c = r.height()
                    r.css(i).animate({
                        opacity: 1,
                        height: c
                    }, "slow")
                }
                r.promise().done(function() {
                    Discussion.scrollDownToReveal(a)
                })
            }, c)
            DiscussionLowQualityNotice.setScore(e, a)
        },
        getFormContainer_: function t(e, i) {
            var t
            var o = e["feedbackKey"]
            if (o) {
                t = Discussion.getFeedbackFromKey(e["feedbackKey"])
            } else if (i === "answer") {
                var a = Discussion.getFeedbackFromKey(e["questionKey"]).parents(".thread")
                t = $(".answer:not([id])", a)
            } else if (i === "suggested-clarification") {
                t = $(".newClarification")
            } else {
                t = $(".question:not([id])")
            }
            return t
        },
        trackShownLowQualityEvent_: function o(e, i, t, a) {
            Analytics.trackSingleEvent("Shown Low Quality Notice", {
                "Feedback Type": e,
                "Post Type": i ? "Edit" : "New",
                "Low-Quality Score": t,
                "Author's kaid": a
            })
        },
        trackResubmittedEvent: function a(e, i, t, o, s, r) {
            var c
            if (t < i) {
                c = "better quality"
            } else if (t > i) {
                c = "worse quality"
            } else {
                c = "same quality"
            }
            Analytics.trackSingleEvent("Resubmitted After Low Quality Notice", {
                "Change in quality": c,
                "Feedback Type": o,
                "Post Type": s ? "Edit" : "New",
                "Low-Quality Score: Before": i,
                "Low-Quality Score: After": t,
                "Author's kaid": r
            })
        },
        setScore: function s(e, i) {
            e.data("low-quality-score", i)
        },
        getScore: function r(e) {
            return e.data("low-quality-score")
        },
        clearScore: function c(e) {
            DiscussionLowQualityNotice.setScore(e, "")
        },
        hide: function n(e) {
            e.removeClass("low-quality-notice").find(".low-quality-notice-header").remove().end().find(".low-quality-notice-footer").remove()
            DiscussionLowQualityNotice.clearScore(e)
        },
        exists: function u(e) {
            return e.hasClass("low-quality-notice")
        }
    }
    module.exports = DiscussionLowQualityNotice
});



KAdefine("javascript/discussion-package/duplicate-notice.js", function(require, module, exports) {
    require("../../third_party/javascript-khansrc/bootstrap-khansrc/js/bootstrap-alert.js")
    var $ = require("jquery")
    var _ = require("underscore")
    var i18n = require("../shared-package/i18n.js")
    var Analytics = require("../shared-package/analytics.js")
    var Discussion = require("./discussion.js")
    var DiscussionDuplicateNotice = {
        init: function e(i, a) {
            if (a) {
                return
            }
            i.on("click", ".duplicate-notice .close", DiscussionDuplicateNotice.close)
        },
        removeAll: function i(e) {
            var i = $(".duplicate-notice .close", e.parents(".thread"))
            DiscussionDuplicateNotice.close.call(i)
            i.alert("close")
        },
        close: function a() {
            var e = $(this).parents(".duplicate-notice"),
                i = e.data("duplicate-key"),
                a = Discussion.getFeedbackFromKey(i)
            Discussion.unhighlight(a, "warning")
        },
        findDuplicate_: function s(e, i) {
            var i = i.toLowerCase(),
                a = $(".answers", e.parents(".thread")).find(".answer")
            var s = null
            _.each(a, function(e) {
                var a = $(".discussion-content", e).text().toLowerCase()
                if (a === i || a.indexOf(i) > -1) {
                    s = e
                }
            })
            return $(s)
        },
        show: function t(e, i) {
            var a = DiscussionDuplicateNotice.findDuplicate_(i, e)
            if (a.length) {
                var s = require("./duplicate-notice.handlebars")({
                        translatedFeedbackType: i18n._("answer")
                    }),
                    t = $(s)
                i.before(t)
                Discussion.highlight(a, "warning")
                t.data("duplicate-key", Discussion.getKey(a))
                Analytics.trackSingleEvent("Duplicated Feedback")
                return true
            }
            return false
        }
    }
    module.exports = DiscussionDuplicateNotice
});



KAdefine("javascript/discussion-package/low-quality-notice-header.handlebars", function(require, module, exports) {
    require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
    var absoluteLinks = require("../shared-package/absolute-links.js")
    var template = Handlebars.template(function(e, a, n, t, r) {
        n = n || e.helpers
        var l = "",
            s, i, o, p, c = this,
            h = "function",
            f = n.helperMissing,
            d = void 0,
            u = this.escapeExpression,
            y = n.blockHelperMissing

        function b(e, a) {
            var t = "",
                r
            t += "\n        <h4>"
            o = n["_"]
            r = o || e["_"]
            p = c.program(2, v, a)
            p.hash = {}
            p.fn = p
            p.inverse = c.noop
            if (o && typeof r === h) {
                r = r.call(e, p)
            } else {
                r = y.call(e, r, p)
            }
            if (r || r === 0) {
                t += r
            }
            t += "</h4>\n        "
            t += "\n        "
            o = n["_"]
            r = o || e["_"]
            p = c.program(4, k, a)
            p.hash = {}
            p.fn = p
            p.inverse = c.noop
            if (o && typeof r === h) {
                r = r.call(e, p)
            } else {
                r = y.call(e, r, p)
            }
            if (r || r === 0) {
                t += r
            }
            t += "\n        <br><br>\n        "
            o = n["_"]
            r = o || e["_"]
            p = c.program(6, m, a)
            p.hash = {}
            p.fn = p
            p.inverse = c.noop
            if (o && typeof r === h) {
                r = r.call(e, p)
            } else {
                r = y.call(e, r, p)
            }
            if (r || r === 0) {
                t += r
            }
            t += "\n    "
            return t
        }

        function v(e, a) {
            return "Reduce, Reuse, Recycle."
        }

        function k(e, a) {
            var t = "",
                r
            t += "Thank you for your "
            o = n.translatedFeedbackType
            r = o || e.translatedFeedbackType
            if (typeof r === h) {
                r = r.call(e, {
                    hash: {}
                })
            } else if (r === d) {
                r = f.call(e, "translatedFeedbackType", {
                    hash: {}
                })
            }
            t += u(r) + ". Our scrub-bots have integrated it\n        into the earlier "
            o = n.translatedFeedbackType
            r = o || e.translatedFeedbackType
            if (typeof r === h) {
                r = r.call(e, {
                    hash: {}
                })
            } else if (r === d) {
                r = f.call(e, "translatedFeedbackType", {
                    hash: {}
                })
            }
            t += u(r) + " highlighted above and voted that up."
            return t
        }

        function m(e, a) {
            return "Yours in cleanliness, the Khan Academy Guardians."
        }

        function g(e, a) {
            var t = "",
                r
            t += "\n        "
            t += "\n        <h4>"
            o = n["_"]
            r = o || e["_"]
            p = c.program(9, T, a)
            p.hash = {}
            p.fn = p
            p.inverse = c.noop
            if (o && typeof r === h) {
                r = r.call(e, p)
            } else {
                r = y.call(e, r, p)
            }
            if (r || r === 0) {
                t += r
            }
            t += "</h4>\n\n        "
            t += "\n        "
            o = n["_"]
            r = o || e["_"]
            p = c.program(11, F, a)
            p.hash = {}
            p.fn = p
            p.inverse = c.noop
            if (o && typeof r === h) {
                r = r.call(e, p)
            } else {
                r = y.call(e, r, p)
            }
            if (r || r === 0) {
                t += r
            }
            t += "\n    "
            return t
        }

        function T(e, a) {
            var t = "",
                r
            t += "Please clarify your "
            o = n.translatedFeedbackType
            r = o || e.translatedFeedbackType
            if (typeof r === h) {
                r = r.call(e, {
                    hash: {}
                })
            } else if (r === d) {
                r = f.call(e, "translatedFeedbackType", {
                    hash: {}
                })
            }
            t += u(r) + "."
            return t
        }

        function F(e, a) {
            var t = "",
                r
            t += 'Our robot army has targeted your post as "low quality". To appear on the\n        site as originally written, the Khan Academy Guardians must manually\n        approve your '
            o = n.translatedFeedbackType
            r = o || e.translatedFeedbackType
            if (typeof r === h) {
                r = r.call(e, {
                    hash: {}
                })
            } else if (r === d) {
                r = f.call(e, "translatedFeedbackType", {
                    hash: {}
                })
            }
            t += u(r) + "."
            return t
        }
        l += '<div class="low-quality-notice-header">\n    '
        o = n.duplicate
        s = o || a.duplicate
        i = n["if"]
        p = c.program(1, b, r)
        p.hash = {}
        p.fn = p
        p.inverse = c.program(8, g, r)
        s = i.call(a, s, p)
        if (s || s === 0) {
            l += s
        }
        l += "\n</div>\n"
        return l
    })

    function wrapped_template(e, a) {
        return absoluteLinks.makeHtmlLinksSafe(template(e, a))
    }
    module.exports = wrapped_template
});



KAdefine("javascript/discussion-package/low-quality-notice-footer.handlebars", function(require, module, exports) {
    require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
    var absoluteLinks = require("../shared-package/absolute-links.js")
    var template = Handlebars.template(function(e, a, t, s, i) {
        t = t || e.helpers
        var l = "",
            n, r, p = this,
            d = "function",
            o = t.helperMissing,
            c = void 0,
            u = this.escapeExpression
        l += '<div class="low-quality-notice-footer">\n    <em>'
        r = t.translatedFeedbackEditTip
        n = r || a.translatedFeedbackEditTip
        if (typeof n === d) {
            n = n.call(a, {
                hash: {}
            })
        } else if (n === c) {
            n = o.call(a, "translatedFeedbackEditTip", {
                hash: {}
            })
        }
        l += u(n) + "</em>\n</div>\n"
        return l
    })

    function wrapped_template(e, a) {
        return absoluteLinks.makeHtmlLinksSafe(template(e, a))
    }
    module.exports = wrapped_template
});



KAdefine("javascript/discussion-package/duplicate-notice.handlebars", function(require, module, exports) {
    require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
    var absoluteLinks = require("../shared-package/absolute-links.js")
    var template = Handlebars.template(function(e, a, t, n, s) {
        t = t || e.helpers
        var l = "",
            r, i, o, c = this,
            p = "function",
            d = t.helperMissing,
            h = void 0,
            u = this.escapeExpression,
            f = t.blockHelperMissing

        function b(e, a) {
            return "Reduce, Reuse, Recycle."
        }

        function y(e, a) {
            var n = "",
                s
            n += "Thank you for your "
            i = t.translatedFeedbackType
            s = i || e.translatedFeedbackType
            if (typeof s === p) {
                s = s.call(e, {
                    hash: {}
                })
            } else if (s === h) {
                s = d.call(e, "translatedFeedbackType", {
                    hash: {}
                })
            }
            n += u(s) + ". Our scrub-bots have integrated it\n    into the earlier "
            i = t.translatedFeedbackType
            s = i || e.translatedFeedbackType
            if (typeof s === p) {
                s = s.call(e, {
                    hash: {}
                })
            } else if (s === h) {
                s = d.call(e, "translatedFeedbackType", {
                    hash: {}
                })
            }
            n += u(s) + " highlighted above and voted that up.\n    <br>\n    Yours in cleanliness, the Khan Academy Guardians."
            return n
        }
        l += '<div class="low-quality-notice duplicate-notice">\n    <span class="close" data-dismiss="alert">&#215;</span>\n    <h4>'
        i = t["_"]
        r = i || a["_"]
        o = c.program(1, b, s)
        o.hash = {}
        o.fn = o
        o.inverse = c.noop
        if (i && typeof r === p) {
            r = r.call(a, o)
        } else {
            r = f.call(a, r, o)
        }
        if (r || r === 0) {
            l += r
        }
        l += "</h4>\n    "
        l += "\n    "
        i = t["_"]
        r = i || a["_"]
        o = c.program(3, y, s)
        o.hash = {}
        o.fn = o
        o.inverse = c.noop
        if (i && typeof r === p) {
            r = r.call(a, o)
        } else {
            r = f.call(a, r, o)
        }
        if (r || r === 0) {
            l += r
        }
        l += "\n</div>\n"
        return l
    })

    function wrapped_template(e, a) {
        return absoluteLinks.makeHtmlLinksSafe(template(e, a))
    }
    module.exports = wrapped_template
});



/************************************************************************************************************************************/
/***
 *** MODERATOR CONTROLS, FOR REFERENCE.
 ***
/************************************************************************************************************************************/



KAdefine("javascript/discussion-package/mod-controls.handlebars", function(require, module, exports) {
    require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
    var absoluteLinks = require("../shared-package/absolute-links.js")
    var template = Handlebars.template(function(n, e, a, r, i) {
        a = a || n.helpers
        r = r || n.partials
        var t = "",
            o, s, l, f, u = this,
            c = "function",
            h = a.helperMissing,
            p = void 0,
            g = this.escapeExpression,
            v = a.blockHelperMissing

        function m(n, e) {
            var r = "",
                i, t
            r += "\n        "
            l = a.flags
            i = l || n.flags
            t = a["if"]
            f = u.program(2, d, e)
            f.hash = {}
            f.fn = f
            f.inverse = u.program(18, w, e)
            i = t.call(n, i, f)
            if (i || i === 0) {
                r += i
            }
            r += "\n    "
            return r
        }

        function d(n, e) {
            var i = "",
                t, o
            i += "\n            "
            t = n
            t = u.invokePartial(r["discussion_meta-separator"], "discussion_meta-separator", t, a, r)
            if (t || t === 0) {
                i += t
            }
            i += "\n            "
            i += "\n            "
            i += "\n            "
            i += '\n            <a\n                href="javascript:void(0);"\n                data-flags="'
            l = a.flags
            t = l || n.flags
            o = a.each
            f = u.program(3, _, e)
            f.hash = {}
            f.fn = f
            f.inverse = u.noop
            t = o.call(n, t, f)
            if (t || t === 0) {
                i += t
            }
            i += '"\n                '
            l = a.flaggedBy
            t = l || n.flaggedBy
            o = a["if"]
            f = u.program(5, y, e)
            f.hash = {}
            f.fn = f
            f.inverse = u.noop
            t = o.call(n, t, f)
            if (t || t === 0) {
                i += t
            }
            i += '\n                class="clear-flags call-to-action">\n                    '
            l = a.inQueue
            t = l || n.inQueue
            o = a["if"]
            f = u.program(8, Q, e)
            f.hash = {}
            f.fn = f
            f.inverse = u.program(13, F, e)
            t = o.call(n, t, f)
            if (t || t === 0) {
                i += t
            }
            i += "\n            </a>\n        "
            return i
        }

        function _(n, e) {
            var a = "",
                r
            r = n
            if (typeof r === c) {
                r = r.call(n, {
                    hash: {}
                })
            } else if (r === p) {
                r = h.call(n, "this", {
                    hash: {}
                })
            }
            a += g(r) + ","
            return a
        }

        function y(n, e) {
            var r = "",
                i, t
            r += '\n                    data-flagged-by="'
            l = a.flaggedBy
            i = l || n.flaggedBy
            t = a.each
            f = u.program(6, k, e)
            f.hash = {}
            f.fn = f
            f.inverse = u.noop
            i = t.call(n, i, f)
            if (i || i === 0) {
                r += i
            }
            r += '"\n                '
            return r
        }

        function k(n, e) {
            var a = "",
                r
            r = n
            if (typeof r === c) {
                r = r.call(n, {
                    hash: {}
                })
            } else if (r === p) {
                r = h.call(n, "this", {
                    hash: {}
                })
            }
            a += g(r) + ","
            return a
        }

        function Q(n, e) {
            var r = "",
                i, t
            r += "\n                        "
            l = a.numberOfFlags
            i = l || n.numberOfFlags
            l = a.ngettext
            t = l || n.ngettext
            f = u.program(9, b, e)
            f.hash = {}
            f.fn = f
            f.inverse = u.program(11, C, e)
            if (l && typeof t === c) {
                i = t.call(n, i, f)
            } else {
                i = v.call(n, t, i, f)
            }
            if (i || i === 0) {
                r += i
            }
            r += "\n                    "
            return r
        }

        function b(n, e) {
            return "\n                            (C)lear  Flag\n                        "
        }

        function C(n, e) {
            var r = "",
                i
            r += "\n                            (C)lear "
            l = a.numberOfFlags
            i = l || n.numberOfFlags
            if (typeof i === c) {
                i = i.call(n, {
                    hash: {}
                })
            } else if (i === p) {
                i = h.call(n, "numberOfFlags", {
                    hash: {}
                })
            }
            r += g(i) + " Flags\n                        "
            return r
        }

        function F(n, e) {
            var r = "",
                i, t
            r += "\n                        "
            l = a.numberOfFlags
            i = l || n.numberOfFlags
            l = a.ngettext
            t = l || n.ngettext
            f = u.program(14, j, e)
            f.hash = {}
            f.fn = f
            f.inverse = u.program(16, P, e)
            if (l && typeof t === c) {
                i = t.call(n, i, f)
            } else {
                i = v.call(n, t, i, f)
            }
            if (i || i === 0) {
                r += i
            }
            r += "\n                    "
            return r
        }

        function j(n, e) {
            return "\n                            Clear  Flag\n                        "
        }

        function P(n, e) {
            var r = "",
                i
            r += "\n                            Clear "
            l = a.numberOfFlags
            i = l || n.numberOfFlags
            if (typeof i === c) {
                i = i.call(n, {
                    hash: {}
                })
            } else if (i === p) {
                i = h.call(n, "numberOfFlags", {
                    hash: {}
                })
            }
            r += g(i) + " Flags\n                        "
            return r
        }

        function w(n, e) {
            var r = "",
                i, t
            r += "\n            "
            l = a.inQueue
            i = l || n.inQueue
            t = a["if"]
            f = u.program(19, B, e)
            f.hash = {}
            f.fn = f
            f.inverse = u.noop
            i = t.call(n, i, f)
            if (i || i === 0) {
                r += i
            }
            r += "\n        "
            return r
        }

        function B(n, e) {
            var i = "",
                t
            i += "\n                "
            t = n
            t = u.invokePartial(r["discussion_meta-separator"], "discussion_meta-separator", t, a, r)
            if (t || t === 0) {
                i += t
            }
            i += '\n                <a href="javascript:void(0);" class="approve">'
            l = a["_"]
            t = l || n["_"]
            f = u.program(20, O, e)
            f.hash = {}
            f.fn = f
            f.inverse = u.noop
            if (l && typeof t === c) {
                t = t.call(n, f)
            } else {
                t = v.call(n, t, f)
            }
            if (t || t === 0) {
                i += t
            }
            i += "</a>\n            "
            return i
        }

        function O(n, e) {
            return "(A)pprove"
        }

        function S(n, e) {
            var i = "",
                t
            i += "\n        "
            t = n
            t = u.invokePartial(r["discussion_meta-separator"], "discussion_meta-separator", t, a, r)
            if (t || t === 0) {
                i += t
            }
            i += '\n        <a href="javascript:void(0);" title="'
            l = a["_"]
            t = l || n["_"]
            f = u.program(23, x, e)
            f.hash = {}
            f.fn = f
            f.inverse = u.noop
            if (l && typeof t === c) {
                t = t.call(n, f)
            } else {
                t = v.call(n, t, f)
            }
            if (t || t === 0) {
                i += t
            }
            i += '" class="skip">'
            l = a["_"]
            t = l || n["_"]
            f = u.program(25, A, e)
            f.hash = {}
            f.fn = f
            f.inverse = u.noop
            if (l && typeof t === c) {
                t = t.call(n, f)
            } else {
                t = v.call(n, t, f)
            }
            if (t || t === 0) {
                i += t
            }
            i += "</a>\n    "
            return i
        }

        function x(n, e) {
            return "Skip taking an action on this post right now."
        }

        function A(n, e) {
            return "(S)kip"
        }

        function D(n, e) {
            var r = "",
                i, t
            r += "\n    "
            l = a.isScratchpad
            i = l || n.isScratchpad
            t = a.unless
            f = u.program(28, H, e)
            f.hash = {}
            f.fn = f
            f.inverse = u.noop
            i = t.call(n, i, f)
            if (i || i === 0) {
                r += i
            }
            r += "\n    "
            return r
        }

        function H(n, e) {
            var i = "",
                t, o
            i += "\n        "
            t = n
            t = u.invokePartial(r["discussion_meta-separator"], "discussion_meta-separator", t, a, r)
            if (t || t === 0) {
                i += t
            }
            i += "\n        "
            l = a.isComment
            t = l || n.isComment
            o = a["if"]
            f = u.program(29, E, e)
            f.hash = {}
            f.fn = f
            f.inverse = u.program(38, z, e)
            t = o.call(n, t, f)
            if (t || t === 0) {
                i += t
            }
            i += "\n\n        "
            t = n
            t = u.invokePartial(r["discussion_meta-separator"], "discussion_meta-separator", t, a, r)
            if (t || t === 0) {
                i += t
            }
            i += "\n\n        "
            l = a.isQuestion
            t = l || n.isQuestion
            o = a["if"]
            f = u.program(47, T, e)
            f.hash = {}
            f.fn = f
            f.inverse = u.noop
            t = o.call(n, t, f)
            if (t || t === 0) {
                i += t
            }
            i += '\n\n        <a href="javascript:void(0);" class="edit">'
            l = a.inQueue
            t = l || n.inQueue
            o = a["if"]
            f = u.program(49, V, e)
            f.hash = {}
            f.fn = f
            f.inverse = u.program(52, X, e)
            t = o.call(n, t, f)
            if (t || t === 0) {
                i += t
            }
            i += "</a>\n    "
            return i
        }

        function E(n, e) {
            var r = "",
                i, t
            r += '\n            <a href="javascript:void(0);" class="change-type '
            l = a.highlightChangeButton
            i = l || n.highlightChangeButton
            t = a["if"]
            f = u.program(30, q, e)
            f.hash = {}
            f.fn = f
            f.inverse = u.noop
            i = t.call(n, i, f)
            if (i || i === 0) {
                r += i
            }
            r += '" data-target-type="question">'
            l = a.inQueue
            i = l || n.inQueue
            t = a["if"]
            f = u.program(32, M, e)
            f.hash = {}
            f.fn = f
            f.inverse = u.program(35, N, e)
            i = t.call(n, i, f)
            if (i || i === 0) {
                r += i
            }
            r += "</a>\n        "
            return r
        }

        function q(n, e) {
            return "call-to-action"
        }

        function M(n, e) {
            var r
            l = a["_"]
            r = l || n["_"]
            f = u.program(33, L, e)
            f.hash = {}
            f.fn = f
            f.inverse = u.noop
            if (l && typeof r === c) {
                r = r.call(n, f)
            } else {
                r = v.call(n, r, f)
            }
            if (r || r === 0) {
                return r
            } else {
                return ""
            }
        }

        function L(n, e) {
            return "Change to (Q)uestion"
        }

        function N(n, e) {
            var r
            l = a["_"]
            r = l || n["_"]
            f = u.program(36, U, e)
            f.hash = {}
            f.fn = f
            f.inverse = u.noop
            if (l && typeof r === c) {
                r = r.call(n, f)
            } else {
                r = v.call(n, r, f)
            }
            if (r || r === 0) {
                return r
            } else {
                return ""
            }
        }

        function U(n, e) {
            return "Change to question"
        }

        function z(n, e) {
            var r = "",
                i, t
            r += '\n            <a href="javascript:void(0);" class="change-type '
            l = a.highlightChangeButton
            i = l || n.highlightChangeButton
            t = a["if"]
            f = u.program(39, G, e)
            f.hash = {}
            f.fn = f
            f.inverse = u.noop
            i = t.call(n, i, f)
            if (i || i === 0) {
                r += i
            }
            r += '" data-target-type="comment">'
            l = a.inQueue
            i = l || n.inQueue
            t = a["if"]
            f = u.program(41, I, e)
            f.hash = {}
            f.fn = f
            f.inverse = u.program(44, K, e)
            i = t.call(n, i, f)
            if (i || i === 0) {
                r += i
            }
            r += "</a>\n        "
            return r
        }

        function G(n, e) {
            return "call-to-action"
        }

        function I(n, e) {
            var r
            l = a["_"]
            r = l || n["_"]
            f = u.program(42, J, e)
            f.hash = {}
            f.fn = f
            f.inverse = u.noop
            if (l && typeof r === c) {
                r = r.call(n, f)
            } else {
                r = v.call(n, r, f)
            }
            if (r || r === 0) {
                return r
            } else {
                return ""
            }
        }

        function J(n, e) {
            return "Change to (F)eedback"
        }

        function K(n, e) {
            var r
            l = a["_"]
            r = l || n["_"]
            f = u.program(45, R, e)
            f.hash = {}
            f.fn = f
            f.inverse = u.noop
            if (l && typeof r === c) {
                r = r.call(n, f)
            } else {
                r = v.call(n, r, f)
            }
            if (r || r === 0) {
                return r
            } else {
                return ""
            }
        }

        function R(n, e) {
            return "Change to feedback"
        }

        function T(n, e) {
            var i = "",
                t
            i += "\n            "
            t = n
            t = u.invokePartial(r["discussion_answer-notification-link"], "discussion_answer-notification-link", t, a, r)
            if (t || t === 0) {
                i += t
            }
            i += "\n            "
            t = n
            t = u.invokePartial(r["discussion_meta-separator"], "discussion_meta-separator", t, a, r)
            if (t || t === 0) {
                i += t
            }
            i += "\n        "
            return i
        }

        function V(n, e) {
            var r
            l = a["_"]
            r = l || n["_"]
            f = u.program(50, W, e)
            f.hash = {}
            f.fn = f
            f.inverse = u.noop
            if (l && typeof r === c) {
                r = r.call(n, f)
            } else {
                r = v.call(n, r, f)
            }
            if (r || r === 0) {
                return r
            } else {
                return ""
            }
        }

        function W(n, e) {
            return "(E)dit"
        }

        function X(n, e) {
            var r
            l = a["_"]
            r = l || n["_"]
            f = u.program(53, Y, e)
            f.hash = {}
            f.fn = f
            f.inverse = u.noop
            if (l && typeof r === c) {
                r = r.call(n, f)
            } else {
                r = v.call(n, r, f)
            }
            if (r || r === 0) {
                return r
            } else {
                return ""
            }
        }

        function Y(n, e) {
            return "Edit"
        }

        function Z(n, e) {
            var i = "",
                t, o
            i += "\n        "
            t = n
            t = u.invokePartial(r["discussion_meta-separator"], "discussion_meta-separator", t, a, r)
            if (t || t === 0) {
                i += t
            }
            i += "\n        "
            l = a.deleted
            t = l || n.deleted
            o = a["if"]
            f = u.program(56, ne, e)
            f.hash = {}
            f.fn = f
            f.inverse = u.program(59, ae, e)
            t = o.call(n, t, f)
            if (t || t === 0) {
                i += t
            }
            i += "\n    "
            return i
        }

        function ne(n, e) {
            var r = "",
                i
            r += '\n            <a href="javascript:void(0);" class="undelete">'
            l = a["_"]
            i = l || n["_"]
            f = u.program(57, ee, e)
            f.hash = {}
            f.fn = f
            f.inverse = u.noop
            if (l && typeof i === c) {
                i = i.call(n, f)
            } else {
                i = v.call(n, i, f)
            }
            if (i || i === 0) {
                r += i
            }
            r += "</a>\n        "
            return r
        }

        function ee(n, e) {
            return "Undelete"
        }

        function ae(n, e) {
            var r = "",
                i, t
            r += '\n            <a href="javascript:void(0);" class="delete '
            l = a.highlightDeleteButton
            i = l || n.highlightDeleteButton
            t = a["if"]
            f = u.program(60, re, e)
            f.hash = {}
            f.fn = f
            f.inverse = u.noop
            i = t.call(n, i, f)
            if (i || i === 0) {
                r += i
            }
            r += '">'
            l = a.inQueue
            i = l || n.inQueue
            t = a["if"]
            f = u.program(62, ie, e)
            f.hash = {}
            f.fn = f
            f.inverse = u.program(65, oe, e)
            i = t.call(n, i, f)
            if (i || i === 0) {
                r += i
            }
            r += "</a>\n        "
            return r
        }

        function re(n, e) {
            return "call-to-action"
        }

        function ie(n, e) {
            var r
            l = a["_"]
            r = l || n["_"]
            f = u.program(63, te, e)
            f.hash = {}
            f.fn = f
            f.inverse = u.noop
            if (l && typeof r === c) {
                r = r.call(n, f)
            } else {
                r = v.call(n, r, f)
            }
            if (r || r === 0) {
                return r
            } else {
                return ""
            }
        }

        function te(n, e) {
            return "(D)elete"
        }

        function oe(n, e) {
            var r
            l = a["_"]
            r = l || n["_"]
            f = u.program(66, se, e)
            f.hash = {}
            f.fn = f
            f.inverse = u.noop
            if (l && typeof r === c) {
                r = r.call(n, f)
            } else {
                r = v.call(n, r, f)
            }
            if (r || r === 0) {
                return r
            } else {
                return ""
            }
        }

        function se(n, e) {
            return "Delete"
        }

        function le(n, e) {
            var r = "",
                i, t
            r += "\n        "
            l = a.isScratchpad
            i = l || n.isScratchpad
            t = a["if"]
            f = u.program(69, fe, e)
            f.hash = {}
            f.fn = f
            f.inverse = u.noop
            i = t.call(n, i, f)
            if (i || i === 0) {
                r += i
            }
            r += "\n    "
            return r
        }

        function fe(n, e) {
            var i = "",
                t, o
            i += "\n            "
            t = n
            t = u.invokePartial(r["discussion_meta-separator"], "discussion_meta-separator", t, a, r)
            if (t || t === 0) {
                i += t
            }
            i += "\n            "
            l = a.hideFromHotlist
            t = l || n.hideFromHotlist
            o = a["if"]
            f = u.program(70, ue, e)
            f.hash = {}
            f.fn = f
            f.inverse = u.program(73, he, e)
            t = o.call(n, t, f)
            if (t || t === 0) {
                i += t
            }
            i += "\n        "
            return i
        }

        function ue(n, e) {
            var r = "",
                i
            r += '\n            <a href="javascript:void(0);" class="unhide-hotlist">'
            l = a["_"]
            i = l || n["_"]
            f = u.program(71, ce, e)
            f.hash = {}
            f.fn = f
            f.inverse = u.noop
            if (l && typeof i === c) {
                i = i.call(n, f)
            } else {
                i = v.call(n, i, f)
            }
            if (i || i === 0) {
                r += i
            }
            r += "</a>\n            "
            return r
        }

        function ce(n, e) {
            return "Undo hide from hotlist"
        }

        function he(n, e) {
            var r = "",
                i
            r += '\n            <a href="javascript:void(0);" class="hide-hotlist">'
            l = a["_"]
            i = l || n["_"]
            f = u.program(74, pe, e)
            f.hash = {}
            f.fn = f
            f.inverse = u.noop
            if (l && typeof i === c) {
                i = i.call(n, f)
            } else {
                i = v.call(n, i, f)
            }
            if (i || i === 0) {
                r += i
            }
            r += "</a>\n            "
            return r
        }
        
        function pe(n, e) {
            return "Hide from hotlist"
        }
        t += '\n<span class="mod-tools" data-key="'
        l = a.key
        o = l || e.key
        if (typeof o === c) {
            o = o.call(e, {
                hash: {}
            })
        } else if (o === p) {
            o = h.call(e, "key", {
                hash: {}
            })
        }
        t += g(o) + '" data-is-author="'
        l = a.showAuthorControls
        o = l || e.showAuthorControls
        if (typeof o === c) {
            o = o.call(e, {
                hash: {}
            })
        } else if (o === p) {
            o = h.call(e, "showAuthorControls", {
                hash: {}
            })
        }
        t += g(o) + '" data-in-queue="'
        l = a.inQueue
        o = l || e.inQueue
        if (typeof o === c) {
            o = o.call(e, {
                hash: {}
            })
        } else if (o === p) {
            o = h.call(e, "inQueue", {
                hash: {}
            })
        }
        t += g(o) + '">\n\n    '
        l = a.definitelyNotSpam
        o = l || e.definitelyNotSpam
        s = a.unless
        f = u.program(1, m, i)
        f.hash = {}
        f.fn = f
        f.inverse = u.noop
        o = s.call(e, o, f)
        if (o || o === 0) {
            t += o
        }
        t += "\n\n    "
        l = a.inQueue
        o = l || e.inQueue
        s = a["if"]
        f = u.program(22, S, i)
        f.hash = {}
        f.fn = f
        f.inverse = u.noop
        o = s.call(e, o, f)
        if (o || o === 0) {
            t += o
        }
        t += "\n\n    "
        l = a.isProjectEvalAnswer
        o = l || e.isProjectEvalAnswer
        s = a.unless
        f = u.program(27, D, i)
        f.hash = {}
        f.fn = f
        f.inverse = u.noop
        o = s.call(e, o, f)
        if (o || o === 0) {
            t += o
        }
        t += "\n\n    "
        l = a.hideModDelete
        o = l || e.hideModDelete
        s = a.unless
        f = u.program(55, Z, i)
        f.hash = {}
        f.fn = f
        f.inverse = u.noop
        o = s.call(e, o, f)
        if (o || o === 0) {
            t += o
        }
        t += "\n\n    "
        l = a.inQueue
        o = l || e.inQueue
        s = a["if"]
        f = u.program(68, le, i)
        f.hash = {}
        f.fn = f
        f.inverse = u.noop
        o = s.call(e, o, f)
        if (o || o === 0) {
            t += o
        }
        t += "\n\n</span>\n"
        return t
    })

    function wrapped_template(n, e) {
        return absoluteLinks.makeHtmlLinksSafe(template(n, e))
    }
    module.exports = wrapped_template
});



/************************************************************************************************************************************/
/***
 ***
 *** MODERATOR FUNCTIONS.
 ***
 ***
/************************************************************************************************************************************/



KAdefine("javascript/discussion-package/moderation.js", function(require, module, exports) {
    require("../../third_party/javascript-khansrc/qTip2/jquery.qtip.js")
    var $ = require("jquery")
    var _ = require("underscore")
    var i18n = require("../shared-package/i18n.js")
    var Discussion = require("./discussion.js")
    var DiscussionReplies = require("./discussion-replies.js")
    var KA = require("../shared-package/ka.js")
    var Moderation = {
        ModAction: {
            CLEAR_FLAGS: "clearflags",
            CHANGE_TYPE: "changetype",
            UNDELETE: "undelete"
        },
        LOW_QUALITY_FIRST: 1,
        LOWEST_VOTES_FIRST: 2,
        init: function e(t) {
            var i = require("./flag.js")
            i.init(t)
            if (t) {
                return
            }
            $(document).on("click", ".mod-tools .mute", Moderation.muteEntity).on("click", ".mod-tools .edit", Moderation.editEntity).on("click", ".mod-tools .delete", Moderation.deleteEntity).on("click", ".mod-tools .change-type", Moderation.changeEntityType).on("click", ".mod-tools .clear-flags", Moderation.clearFlags).on("mouseenter", ".mod-tools .clear-flags", this.showFlagsHovercard).on("click", ".mod-tools .approve", Moderation.clearFlags).on("click", ".mod-tools .undelete", Moderation.undelete).on("click", ".mod-tools .skip", Moderation.skip).on("click", ".mod-tools .hide-hotlist", {
                hide_from_hotlist: true
            }, Moderation.hideHotlist).on("click", ".mod-tools .unhide-hotlist", {
                hide_from_hotlist: false
            }, Moderation.hideHotlist)
        },
        getEntityKey_: function t(e) {
            return e.closest(".mod-tools").data("key")
        },
        muteEntity: function i() {
            var e = $(this),
                t = Moderation.getEntityKey_(e)
            if (!t) {
                return
            }
            var i = e.data("notify")
            var a = ""
            var o
            if (i) {
                a = i18n._("Turn on answer notifications")
                o = false
            } else {
                a = i18n._("Turn off answer notifications")
                o = true
            }
            $.ajax({
                type: o ? "PUT" : "DELETE",
                url: "/api/internal/feedback/" + t + "/notifications"
            })
            e.text(a).data("notify", !i)
            Discussion.showNotificationTogglePopup(t, o)
            return false
        },
        deleteEntity: function a() {
            var e = $(this),
                t = e.closest(".mod-tools"),
                i = Moderation.getEntityKey_(e),
                a = t.data("isAuthor"),
                o = t.data("inQueue"),
                s = KA.getUserProfile().get("isModerator")
            if (!i) {
                return
            }
            var n
            if (a) {
                n = confirm(i18n._("Are you sure you want to delete this?"))
            } else {
                n = s
            }
            if (n) {
                if (a || o) {
                    Discussion.remove(e)
                    var r = Discussion.getParentType(e)
                    if (r === "reply") {
                        var d = Discussion.getParent(Discussion.getParent(t)),
                            l = Discussion.getKey(d)
                        DiscussionReplies.decrementReplyCount(l)
                    } else if (a && r === "answer") {
                        Discussion.setHasAnswered(e, false)
                    }
                } else {
                    e.text(i18n._("Undelete")).removeClass("delete").addClass("undelete").closest(".discussion-item").addClass("deleted")
                }
                $.ajax({
                    type: "DELETE",
                    url: "/api/internal/feedback/" + i + "?casing=camel",
                    dataType: "json"
                })
            }
            return false
        },
        editEntity: function o() {
            Discussion.edit(this)
            return false
        },
        changeEntityType: function s(e) {
            var t = $(this),
                i = Moderation.getEntityKey_(t),
                a = e && e["targetType"] || t.data("targetType"),
                o = {
                    type: a
                }
            if (!i || !a) {
                return
            }
            var s = a
            if (a === "comment") {
                s = "feedback"
            }
            Moderation.showMessage(t, i18n._("Changed to %(targetTypeName)s", {
                targetTypeName: s
            }))
            Discussion.remove(t)
            $.ajax({
                type: "PUT",
                url: "/api/internal/feedback/" + i + "/" + Moderation.ModAction.CHANGE_TYPE + "?casing=camel",
                contentType: "application/json",
                data: JSON.stringify(o),
                dataType: "json"
            })
        },
        clearFlags: function n() {
            var e = $(this),
                t = e.closest(".mod-tools").data("inQueue"),
                i = Moderation.getEntityKey_(e),
                a = "/api/internal/feedback/" + i + "/" + Moderation.ModAction.CLEAR_FLAGS + "?casing=camel"
            if (!i) {
                return false
            }
            Moderation.showMessage(e, i18n._("Cleared flags"))
            if (t) {
                Discussion.remove(e)
            }
            $.ajax({
                type: "PUT",
                url: a,
                dataType: "json"
            })
        },
        undelete: function r() {
            var e = $(this),
                t = Moderation.getEntityKey_(e),
                i = "/api/internal/feedback/" + t + "/" + Moderation.ModAction.UNDELETE + "?casing=camel"
            if (!t) {
                return false
            }
            e.text(i18n._("Delete")).removeClass("undelete").addClass("delete").parents(".discussion-item").removeClass("deleted")
            $.ajax({
                type: "PUT",
                url: i,
                dataType: "json"
            })
        },
        hideHotlist: function d(e) {
            var t = $(this),
                i = t.closest(".mod-tools"),
                a = Moderation.getEntityKey_(t),
                o = i.closest("#" + a).attr("data-id"),
                s = "/api/internal/scratchpads/" + o
            if (!a || !o) {
                return false
            }
            if (e.data.hide_from_hotlist) {
                t.text(i18n._("Undo hide from hotlist")).removeClass("hide-hotlist").addClass("unhide-hotlist")
            } else {
                t.text(i18n._("Hide from hotlist")).removeClass("unhide-hotlist").addClass("hide-hotlist")
            }
            $.ajax({
                type: "PATCH",
                url: s,
                dataType: "json",
                contentType: "application/json",
                data: JSON.stringify(e.data),
                success: function(e) {
                    Moderation.clearFlags.apply(this)
                }.bind(this)
            })
        },
        showMessage: function l(e, t) {
            e.text(t).addClass("action-complete").parent().addClass("mod-action-complete")
        },
        skip: function c() {
            Discussion.remove($(this))
        },
        showFlagsHovercard: function u(e) {
            var t = require("./queue.js")
            var i = $(e.target)
            if (!i.data("has-tip")) {
                var a = require("./flags-hovercard.handlebars")
                var o = i.data("flaggedBy").split(",")
                var s = i.data("flags").split(",")
                var n = []
                var r = i.parent() && i.parent().data("key"),
                    d = t.discussionList_ && t.discussionList_.data
                if (r && d) {
                    var l = _(d).find(function(e) {
                        return e.key === r
                    })
                    if (l) {
                        o = l.flaggedBy
                        s = l.flags
                    }
                }
                _.each(o, function(e, t) {
                    n.push({
                        user: e,
                        type: s[t]
                    })
                })
                var c
                var u
                var f = 450
                var p = i.offset().left
                if (p + f > $(window).width() && p > f) {
                    c = a({
                        arrowOnRight: true,
                        flags: n
                    })
                    u = {
                        my: "top right",
                        at: "bottom right"
                    }
                } else {
                    c = a({
                        flags: n
                    })
                    u = {
                        my: "top left",
                        at: "bottom left"
                    }
                }
                i.qtip({
                    content: {
                        text: c
                    },
                    style: {
                        classes: "custom-override flags-hovercard"
                    },
                    hide: {
                        delay: 100,
                        fixed: true
                    },
                    position: u
                })
                i.data("has-tip", true)
            }
            i.qtip("show")
        }
    }
    module.exports = Moderation
});



KAdefine("javascript/discussion-package/queue.js", function(require, module, exports) {
    var $ = require("jquery")
    var _ = require("underscore")
    var Discussion = require("./discussion.js")
    var DiscussionList = require("./discussion-list.js")
    var Moderation = require("./moderation.js")
    var ModerationQueue = {}
    ModerationQueue.init = function() {
        _.bindAll(this, "show_", "autoLoad_", "reset_", "bindEvents_", "fetchSort_", "fetchType_", "transformDataBeforeRender")
        Discussion.init({
            page: 0,
            which: "moderation-queue",
            container: $(".mod-queue")
        })
        this.bindEvents_()
        this.reset_()
        this.show_()
    }
    ModerationQueue.reset_ = function(e, t) {
        $(".mod-queue").html("")
        this.type_ = e || "question"
        this.sort_ = t || Moderation.LOW_QUALITY_FIRST
    }
    ModerationQueue.bindEvents_ = function() {
        $(".mod-queue-header").on("click", ".mod-queue-type", this.fetchType_).on("click", ".mod-queue-sort", this.fetchSort_)
        $(document).on("click", ".mod-tools a", this.autoLoad_)
        $(document).keypress(this.onHotkey_)
    }
    ModerationQueue.onHotkey_ = function(e) {
        if (!$(document.activeElement).is("body")) {
            return
        }
        var t
        var s = {}
        switch (e.which) {
            case 97:
                t = Moderation.clearFlags
                break
            case 99:
                t = Moderation.clearFlags
                break
            case 100:
                t = Moderation.deleteEntity
                break
            case 101:
                Discussion.edit($(".discussion-list .mod-tools").first())
                return
            case 102:
                t = Moderation.changeEntityType
                s["targetType"] = "comment"
                break
            case 113:
                t = Moderation.changeEntityType
                s["targetType"] = "question"
                break
            case 115:
                t = Moderation.skip
                break
        }
        if (t) {
            ModerationQueue.autoLoad_()
            t.call($(".discussion-list .mod-tools").first(), s)
        }
    }
    ModerationQueue.fetchSort_ = function(e) {
        var t = $(e.target)
        var s = t.parent()
        s.addClass("selected").siblings().removeClass("selected")
        this.reset_(this.type_, t.data("value"))
        this.show_()
    }
    ModerationQueue.fetchType_ = function(e) {
        var t = $(e.target),
            s = t.parent(),
            i = t.data("value")
        s.addClass("selected").siblings().removeClass("selected")
        this.reset_(i, this.sort_)
        this.show_()
        $("#modpanel .mod-queue").toggleClass("wide", i === "project")
    }
    ModerationQueue.show_ = function() {
        var e
        if (this.type_ === "question" || this.type_ === "projecthelp") {
            e = require("./thread.handlebars")
        } else if (this.type_ === "answer" || this.type_ === "projectevalanswer") {
            e = require("./answer.handlebars")
        } else if (this.type_ === "comment" || this.type_ === "reply") {
            e = require("./comment.handlebars")
        } else if (this.type_ === "project") {
            e = require("./project.handlebars")
        } else {
            throw new Error("No item template find for type: " + this.type_)
        }
        this.discussionList_ = new DiscussionList({
            hideHeader: true,
            requestURL: "/api/internal/moderation/feedback",
            itemKey: "feedback",
            itemTemplate: e,
            containerSelector: ".mod-queue",
            page: 0,
            sortValue: this.sort_,
            params: {
                casing: "camel",
                type: this.type_,
                offset: this.offset_
            },
            onInitialFetch: this.onInitialFetch_,
            preRenderTransformData: this.transformDataBeforeRender
        })
    }
    ModerationQueue.onInitialFetch_ = function(e) {
        var t = $(".mod-happy-message")
        if (e.length === 0) {
            t.show()
        } else {
            t.hide()
        }
    }
    ModerationQueue.transformDataBeforeRender = function(e) {
        _.each(e, function(e) {
            e = Discussion.transformFeedback(e)
            e.inQueue = true
            e.showModControls = true
        })
        return e
    }
    ModerationQueue.autoLoad_ = function() {
        var e = 5
        if (this.discussionList_) {
            if ($(".mod-queue .discussion-item").length <= e) {
                this.discussionList_.fetchMore()
            }
        }
    }
    module.exports = ModerationQueue
});



KAdefine("javascript/discussion-package/flags-hovercard.handlebars", function(require, module, exports) {
    require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
    var absoluteLinks = require("../shared-package/absolute-links.js")
    var template = Handlebars.template(function(e, n, a, r, s) {
        a = a || e.helpers
        var l = "",
            i, t, o, c, f = this,
            h = "function",
            p = a.helperMissing,
            u = void 0,
            v = this.escapeExpression,
            d = a.blockHelperMissing

        function g(e, n) {
            return "right"
        }

        function m(e, n) {
            return "Flags:"
        }

        function y(e, n) {
            var r = "",
                s, l
            r += '\n                <li class="sample-content-link">\n                    '
            o = a.user
            s = o || e.user
            l = a["if"]
            c = f.program(6, k, n)
            c.hash = {}
            c.fn = c
            c.inverse = f.program(8, b, n)
            s = l.call(e, s, c)
            if (s || s === 0) {
                r += s
            }
            r += '\n                    - <span class="flag-type">'
            o = a.type
            s = o || e.type
            if (typeof s === h) {
                s = s.call(e, {
                    hash: {}
                })
            } else if (s === u) {
                s = p.call(e, "type", {
                    hash: {}
                })
            }
            r += v(s) + "</span>\n                </li>\n            "
            return r
        }

        function k(e, n) {
            var r = "",
                s
            r += '\n                        <a href="/devadmin/users?userId='
            o = a.user
            s = o || e.user
            if (typeof s === h) {
                s = s.call(e, {
                    hash: {}
                })
            } else if (s === u) {
                s = p.call(e, "user", {
                    hash: {}
                })
            }
            r += v(s) + '">'
            o = a.user
            s = o || e.user
            if (typeof s === h) {
                s = s.call(e, {
                    hash: {}
                })
            } else if (s === u) {
                s = p.call(e, "user", {
                    hash: {}
                })
            }
            r += v(s) + "</a>\n                    "
            return r
        }

        function b(e, n) {
            var r = "",
                s
            r += "\n                        "
            o = a["_"]
            s = o || e["_"]
            c = f.program(9, w, n)
            c.hash = {}
            c.fn = c
            c.inverse = f.noop
            if (o && typeof s === h) {
                s = s.call(e, c)
            } else {
                s = d.call(e, s, c)
            }
            if (s || s === 0) {
                r += s
            }
            r += "\n                    "
            return r
        }

        function w(e, n) {
            return "Unknown or deleted user"
        }
        l += '<div class="hover-card-container">\n    <div class="hover-card-triangle '
        o = a.arrowOnRight
        i = o || n.arrowOnRight
        t = a["if"]
        c = f.program(1, g, s)
        c.hash = {}
        c.fn = c
        c.inverse = f.noop
        i = t.call(n, i, c)
        if (i || i === 0) {
            l += i
        }
        l += '"></div>\n    <div class="hover-card-content-container vertical-shadow">\n        <div class="hover-card-content clearfix">\n            <h4 class="pulls">\n                '
        o = a["_"]
        i = o || n["_"]
        c = f.program(3, m, s)
        c.hash = {}
        c.fn = c
        c.inverse = f.noop
        if (o && typeof i === h) {
            i = i.call(n, c)
        } else {
            i = d.call(n, i, c)
        }
        if (i || i === 0) {
            l += i
        }
        l += '\n            </h4>\n            <ul class="flagged-by-users">\n            '
        o = a.flags
        i = o || n.flags
        t = a.each
        c = f.program(5, y, s)
        c.hash = {}
        c.fn = c
        c.inverse = f.noop
        i = t.call(n, i, c)
        if (i || i === 0) {
            l += i
        }
        l += "\n            </ul>\n        </div>\n    </div>\n</div>\n"
        return l
    })

    function wrapped_template(e, n) {
        return absoluteLinks.makeHtmlLinksSafe(template(e, n))
    }
    module.exports = wrapped_template
});;
KAdefine.updatePathToPackageMap({
    "javascript/clarifications-package/models.jsx": "clarifications.js",
    "javascript/clarifications-package/official.jsx": "clarifications.js",
    "javascript/projectfeedback-package/projectfeedback-form.jsx": "projectfeedback.js",
    "javascript/scratchpads-package/scratchpad-ui.js": "scratchpads.js",
    "javascript/video-legacy-package/modalvideo.js": "video-legacy.js"
});
