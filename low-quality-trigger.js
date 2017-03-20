KAdefine(
    "javascript/discussion-package/low-quality-notice.js",
    function(require, module, exports) {
        require(
            "../../third_party/javascript-khansrc/jqueryui/jquery.ui.effect.js"
        )
        var $ = require("jquery")
        var i18n = require(
            "../shared-package/i18n.js")
        var Analytics = require(
            "../shared-package/analytics.js")
        var Discussion = require(
            "./discussion.js")
        var DiscussionLowQualityNotice = {
            init: function e(FeedbackType_i, DOMelement_t, BigData_o, PostType_a) {
                if (BigData_o["showLowQualityNotice"]) {
                    var returnDOM_s = DiscussionLowQualityNotice
                        .getFormContainer_(BigData_o, FeedbackType_i)
                    DiscussionLowQualityNotice.show(returnDOM_s,
                        FeedbackType_i, BigData_o["translatedFeedbackEditTip"],
                        BigData_o["lowQualityScore"])
                    DiscussionLowQualityNotice.trackShownLowQualityEvent_(
                        FeedbackType_i, PostType_a, BigData_o["lowQualityScore"], BigData_o[
                            "authorKaid"])
                    return true
                }
                if (DiscussionLowQualityNotice.exists(
                        DOMelement_t)) {
                    var beforescore_r = DiscussionLowQualityNotice
                        .getScore(DOMelement_t),
                        afterscore_c = BigData_o["lowQualityScore"]
                    DiscussionLowQualityNotice.trackResubmittedEvent(
                        DOMelement_t, beforescore_r, afterscore_c, FeedbackType_i, PostType_a, BigData_o["authorKaid"])
                        
                    DiscussionLowQualityNotice.hide(DOMelement_t)
                }
                return false
            },
            show: function i(returnDOM_e, FeedbackType_t, translatedFeedbackEditTip_o, afterscore_a) {
                if (translatedFeedbackEditTip_o) {
                    translatedFeedbackEditTip_o = i18n._(
                        "Tip: %(translatedFeedbackEditTip)s", {
                            translatedFeedbackEditTip: translatedFeedbackEditTip_o
                        })
                }
                var prependThis_s = $(require(
                    "./low-quality-notice-header.handlebars"
                )({
                    translatedFeedbackType: Discussion
                        ._translateFeedbackType(FeedbackType_t)
                }))
                var insertBefore_r = $(require(
                    "./low-quality-notice-footer.handlebars"
                )({
                    translatedFeedbackEditTip: translatedFeedbackEditTip_o
                }))
                var switchClassVar_c = 100
                returnDOM_e.switchClass("",
                    "low-quality-notice", switchClassVar_c)
                try {
                    returnDOM_e.find(".discussion-text:first").focus()
                } catch (n) {}
                setTimeout(function() {
                    var cssVars_i = {
                        opacity: 0,
                        height: 0
                    }
                    DOMelement_e.prepend(prependThis_s)
                    var AnimateHeight_t = prependThis_s.height()
                    prependThis_s.css(cssVars_i).animate({
                        opacity: 1,
                        height: AnimateHeight_t
                    }, "slow")
                    var setTimeoutDOM_a = DOMelement_e.find(
                        ".discussion-controls:first")
                    if (translatedFeedbackEditTip_o) {
                        insertBefore_r.insertBefore(setTimeoutDOM_a)
                        var AnimateHeight2_c = insertBefore_r.height()
                        insertBefore_r.css(cssVars_i).animate({
                            opacity: 1,
                            height: AnimateHeight2_c
                        }, "slow")
                    }
                    insertBefore_r.promise().done(function() {
                        Discussion.scrollDownToReveal(
                            setTimeoutDOM_a)
                    })
                }, AnimateHeight2_c)
                DiscussionLowQualityNotice.setScore(
                    returnDOM_e, afterscore_a)
            },
            getFormContainer_: function t(BigData_e, FeedbackType_i) {
                var returnDOM_t
                var feedbackKey_o = BigData_e["feedbackKey"]
                if (feedbackKey_o) {
                    returnDOM_t = Discussion.getFeedbackFromKey(
                        BigData_e["feedbackKey"])
                } else if (FeedbackType_i === "answer") {
                    var a = Discussion.getFeedbackFromKey(
                        BigData_e["questionKey"]).parents(
                        ".thread")
                    returnDOM_t = $(".answer:not([id])", a)
                } else if (FeedbackType_i ===
                    "suggested-clarification") {
                    returnDOM_t = $(".newClarification")
                } else {
                    returnDOM_t = $(".question:not([id])")
                }
                return returnDOM_t
            },
            trackShownLowQualityEvent_: function o(
                FeedbackType_e, PostType_i, afterscore_t, Authorkaid_a) {
                Analytics.trackSingleEvent(
                    "Shown Low Quality Notice", {
                        "Feedback Type": FeedbackType_e,
                        "Post Type": PostType_i ? "Edit" : "New",
                        "Low-Quality Score": afterscore_t,
                        "Author's kaid": Authorkaid_a
                    })
            },
            trackResubmittedEvent: function a(e_PossiblyAnEvent,
                beforescore_i, afterscore_t, FeedbackType_o, PostType_s, Authorkaid_r) {
                var c
                if (afterscore_t < beforescore_i) {
                    c = "better quality"
                } else if (afterscore_t > beforescore_i) {
                    c = "worse quality"
                } else {
                    c = "same quality"
                }
                Analytics.trackSingleEvent(
                    "Resubmitted After Low Quality Notice", {
                        "Change in quality": c,
                        "Feedback Type": FeedbackType_o,
                        "Post Type": PostType_s ? "Edit" : "New",
                        "Low-Quality Score: Before": beforescore_i,
                        "Low-Quality Score: After": afterscore_t,
                        "Author's kaid": Authorkaid_r
                    })
            },
            setScore: function s(returnDOM_e, afterscore_i) {
                returnDOM_e.data("low-quality-score", afterscore_i)
            },
            getScore: function r(returnDOM_e) {
                return returnDOM_e.data("low-quality-score")
            },
            clearScore: function c(DOMelement_e) {
                DiscussionLowQualityNotice.setScore(
                    DOMelement_e, "")
            },
            hide: function n(DOMelement_e) {
                DOMelement_e.removeClass("low-quality-notice")
                    .find(".low-quality-notice-header")
                    .remove().end().find(
                        ".low-quality-notice-footer").remove()
                DiscussionLowQualityNotice.clearScore(
                    DOMelement_e)
            },
            exists: function u(DOMelement_e) {
                return DOMelement_e.hasClass(
                    "low-quality-notice")
            }
        }
        module.exports =
            DiscussionLowQualityNotice
        }
    );
