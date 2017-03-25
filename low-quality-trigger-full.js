/********************************************************************************************************************
**    Code borrowed from : https://cdn.kastatic.org/genfiles/javascript/en/discussion-package-d55b73.js
**
**    This code was translated into more manageable and readable code.
** 
**    @TABLE OF CONTENTS: These line locators are subject to change and will not always be up to date.
**
**    Note: Any triple stars (***) below indicate the following code is interesting.
**
**  Line 73: KAdefine("third_party/javascript-khansrc/bootstrap-khansrc/js/bootstrap-alert.js", function(__KA_require, __KA_module, __KA_exports) {
**  Line 118: KAdefine("third_party/javascript-khansrc/jquery-expander/jquery.expander.js", function(__KA_require, __KA_module, __KA_exports) {
**  Line 354: KAdefine("javascript/old-throbber-package/throbber.js", function(require, module, exports) {
**  Line 379: KAdefine("javascript/discussion-package/discussion-list.js", function(require, module, exports) {
**  Line 683: KAdefine("javascript/discussion-package/discussion-list.handlebars", function(require, module, exports) {
**  Line 930: KAdefine("javascript/discussion-package/discussion-list-profile-widget.handlebars", function(require, module, exports) {
**  Line 1153: KAdefine("javascript/discussion-package/discussion.js", function(require, module, exports) {
**  Line 1969: KAdefine("javascript/discussion-package/discussion-questions.js", function(require, module, exports) {
**  Line 2139: KAdefine("javascript/discussion-package/discussion-answers.js", function(require, module, exports) {
**  Line 2212: KAdefine("javascript/discussion-package/discussion-comments.js", function(require, module, exports) {
**  Line 2331: KAdefine("javascript/discussion-package/discussion-replies.js", function(require, module, exports) {
**  Line 2607: KAdefine("javascript/discussion-package/discussion-voting.js", function(require, module, exports) {
**  Line 2686: KAdefine("javascript/discussion-package/clarifications.js", function(require, module, exports) {
**  Line 2803: KAdefine("javascript/discussion-package/discussion-projectfeedback.js", function(require, module, exports) {
**  Line 2898: KAdefine("javascript/discussion-package/note.handlebars", function(require, module, exports) {
**  Line 2992: KAdefine("javascript/discussion-package/discussion-note.js", function(require, module, exports) {
**  Line 3056: KAdefine("javascript/discussion-package/discussion-profilepromo.js", function(require, module, exports) {
**  Line 3094: KAdefine("javascript/discussion-package/low-quality-notice.js", function(require, module, exports) {
**  Line 3219: KAdefine("javascript/discussion-package/duplicate-notice.js", function(require, module, exports) {
**  Line 3274: KAdefine("javascript/discussion-package/thread.handlebars", function(require, module, exports) {
**  Line 3743: KAdefine("javascript/discussion-package/question.handlebars", function(require, module, exports) {
**  Line 3955: KAdefine("javascript/discussion-package/answer.handlebars", function(require, module, exports) {
**  Line 4397: KAdefine("javascript/discussion-package/comment.handlebars", function(require, module, exports) {
**  Line 4666: KAdefine("javascript/discussion-package/replies-container.handlebars", function(require, module, exports) {
**  Line 4722: KAdefine("javascript/discussion-package/question-form.handlebars", function(require, module, exports) {
**  Line 4913: KAdefine("javascript/discussion-package/question-guidelines.handlebars", function(require, module, exports) {
**  Line 5287: KAdefine("javascript/discussion-package/answer-form.handlebars", function(require, module, exports) {
**  Line 5441: KAdefine("javascript/discussion-package/feedback-guidelines.handlebars", function(require, module, exports) {
**  Line 5770: KAdefine("javascript/discussion-package/comment-form.handlebars", function(require, module, exports) {
**  Line 5897: KAdefine("javascript/discussion-package/reply.handlebars", function(require, module, exports) {
**  Line 6542: KAdefine("javascript/discussion-package/reply-form.handlebars", function(require, module, exports) {
**  Line 6624: KAdefine("javascript/discussion-package/discussion-meta.handlebars", function(require, module, exports) {
**  Line 7914: KAdefine("javascript/discussion-package/vote-controls.handlebars", function(require, module, exports) {
**  Line 8105: KAdefine("javascript/discussion-package/flag-controls.handlebars", function(require, module, exports) {
**  Line 8377: KAdefine("javascript/discussion-package/author-controls.handlebars", function(require, module, exports) {
**  Line 8517: KAdefine("javascript/discussion-package/answer-notification-link.handlebars", function(require, module, exports) {
**  Line 8663: KAdefine("javascript/discussion-package/meta-separator.handlebars", function(require, module, exports) {
**  Line 8690:  ***  KAdefine("javascript/discussion-package/low-quality-notice-header.handlebars", function(require, module, exports) {
**  Line 8901:  ***  KAdefine("javascript/discussion-package/low-quality-notice-footer.handlebars", function(require, module, exports) {
**  Line 9020:  *** KAdefine("javascript/discussion-package/duplicate-notice.handlebars", function(require, module, exports) {
**  Line 9685: KAdefine("javascript/discussion-package/flag-modal.handlebars", function(require, module, exports) {
**  Line 9893: KAdefine("javascript/discussion-package/scratchpad-flag-modal.handlebars", function(require, module, exports) {
**  Line 9973: KAdefine("javascript/discussion-package/discussion.handlebars", function(require, module, exports) {
**  Line 10533: KAdefine("javascript/discussion-package/video-discussion.handlebars", function(require, module, exports) {
**  Line 11682: KAdefine("javascript/discussion-package/discussion-guidelines.handlebars", function(require, module, exports) {
**  Line 12338: KAdefine("javascript/discussion-package/meta-panel-guidelines.handlebars", function(require, module, exports) {
**  Line 12906: KAdefine("javascript/discussion-package/meta-panel-report-a-mistake.handlebars", function(require, module, exports) {
**  Line 12966: KAdefine("javascript/discussion-package/scratchpad-thumbnail.handlebars", function(require, module, exports) {
**  Line 12988: KAdefine("javascript/discussion-package/guidelines.js", function(require, module, exports) {
**  Line 13010: KAdefine("javascript/discussion-package/report-a-mistake.js", function(require, module, exports) {
**  Line 13175: KAdefine("javascript/discussion-package/project.handlebars", function(require, module, exports) {
**  Line 13423: KAdefine("javascript/discussion-package/sorts.handlebars", function(require, module, exports) {
**  Line 13555: KAdefine("javascript/discussion-package/formatting-tips.handlebars", function(require, module, exports) {
**  Line 13654: KAdefine("javascript/discussion-package/form-controls.handlebars", function(require, module, exports) {
**  Line 14642: KAdefine("javascript/discussion-package/mod-controls.handlebars", function(require, module, exports) {
**  Line 14895:  *** KAdefine("javascript/discussion-package/moderation.js", function(require, module, exports) {
**  Line 15031: KAdefine("javascript/discussion-package/queue.js", function(require, module, exports) {
**  Line 15122: KAdefine("javascript/discussion-package/flag.js", function(require, module, exports) {
**  Line 15278: KAdefine("javascript/discussion-package/flags-hovercard.handlebars", function(require, module, exports) {
**
**
*********************************************************************************************************************/

KAdefine("third_party/javascript-khansrc/bootstrap-khansrc/js/bootstrap-alert.js", function(__KA_require, __KA_module, __KA_exports) {
    __KA_require("../../../../javascript/node_modules/jquery/index.js");
    ! function($) {
        "use strict"
        var t = '[data-dismiss="alert"]',
            e = function(e) {
                $(e).on("click", t, this.close)
            }
        e.prototype.close = function(t) {
            var e = $(this),
                r = e.attr("data-target"),
                n
            if (!r) {
                r = e.attr("href")
                r = r && r.replace(/.*(?=#[^\s]*$)/, "")
            }
            n = $(r)
            t && t.preventDefault()
            n.length || (n = e.hasClass("alert") ? e : e.parent())
            n.trigger(t = $.Event("close"))
            if (t.isDefaultPrevented()) return
            n.removeClass("in")

            function a() {
                n.trigger("closed").remove()
            }
            $.support.transition && n.hasClass("fade") ? n.on($.support.transition.end, a) : a()
        }
        var r = $.fn.alert
        $.fn.alert = function(t) {
            return this.each(function() {
                var r = $(this),
                    n = r.data("alert")
                if (!n) r.data("alert", n = new e(this))
                if (typeof t == "string") n[t].call(r)
            })
        }
        $.fn.alert.Constructor = e
        $.fn.alert.noConflict = function() {
            $.fn.alert = r
            return this
        }
        $(document).on("click.alert.data-api", t, e.prototype.close)
    }(window.jQuery)
});
KAdefine("third_party/javascript-khansrc/jquery-expander/jquery.expander.js", function(__KA_require, __KA_module, __KA_exports) {
    __KA_require("../../../javascript/node_modules/jquery/index.js");
    (function($) {
        $.expander = {
            version: "1.4.2",
            defaults: {
                slicePoint: 100,
                preserveWords: true,
                widow: 4,
                expandText: "read more",
                expandPrefix: "&hellip; ",
                expandAfterSummary: false,
                summaryClass: "summary",
                detailClass: "details",
                moreClass: "read-more",
                collapseTimer: 0,
                expandEffect: "slideDown",
                expandSpeed: 250,
                collapseEffect: "slideUp",
                collapseSpeed: 200,
                userCollapse: true,
                onSlice: null,
                beforeExpand: null,
                afterExpand: null,
                onCollapse: null
            }
        }
        $.fn.expander = function(e) {
            var a = "init"
            if (typeof e == "string") {
                a = e
                e = {}
            }
            var n = $.extend({}, $.expander.defaults, e),
                s = /^<(?:area|br|col|embed|hr|img|input|link|meta|param).*>$/i,
                t = n.wordEnd || /(&(?:[^;]+;)?|[a-zA-Z\u00C0-\u0100]+)$/,
                i = /<\/?(\w+)[^>]*>/g,
                l = /<(\w+)[^>]*>/g,
                r = /<\/(\w+)>/g,
                d = /(<\/[^>]+>)\s*$/,
                o = /^<[^>]+>.?/,
                f
            var p = {
                init: function() {
                    this.each(function() {
                        var e, a, t, d, f, p, h, v, C, g, y, b, w = [],
                            E = [],
                            S = {},
                            T = this,
                            A = $(this),
                            P = $([]),
                            j = $.meta ? $.extend({}, n, A.data()) : n,
                            k = !!A.find("." + j.detailClass).length,
                            L = !!A.find("*").filter(function() {
                                var e = $(this).css("display")
                                return /^block|table|list/.test(e)
                            }).length,
                            D = L ? "div" : "span",
                            I = D + "." + j.detailClass,
                            O = "span." + j.moreClass,
                            z = j.expandSpeed || 0,
                            F = $.trim(A.html()),
                            W = $.trim(A.text()),
                            Q = F.slice(0, j.slicePoint)
                        if ($.data(this, "expander")) {
                            return
                        }
                        $.data(this, "expander", true)
                        $.each(["onSlice", "beforeExpand", "afterExpand", "onCollapse"], function(e, a) {
                            S[a] = $.isFunction(j[a])
                        })
                        Q = m(Q)
                        f = Q.replace(i, "").length
                        while (f < j.slicePoint) {
                            d = F.charAt(Q.length)
                            if (d == "<") {
                                d = F.slice(Q.length).match(o)[0]
                            }
                            Q += d
                            f++
                        }
                        Q = m(Q, j.preserveWords)
                        p = Q.match(l) || []
                        h = Q.match(r) || []
                        t = []
                        $.each(p, function(e, a) {
                            if (!s.test(a)) {
                                t.push(a)
                            }
                        })
                        p = t
                        a = h.length
                        for (e = 0; e < a; e++) {
                            h[e] = h[e].replace(r, "$1")
                        }
                        $.each(p, function(e, a) {
                            var n = a.replace(l, "$1")
                            var s = $.inArray(n, h)
                            if (s === -1) {
                                w.push(a)
                                E.push("</" + n + ">")
                            } else {
                                h.splice(s, 1)
                            }
                        })
                        E.reverse()
                        if (!k) {
                            C = F.slice(Q.length)
                            g = $.trim(C.replace(i, ""))
                            if (g === "" || g.split(/\s+/).length < j.widow) {
                                return
                            }
                            v = E.pop() || ""
                            Q += E.join("")
                            C = w.join("") + C
                        } else {
                            C = A.find(I).remove().html()
                            Q = A.html()
                            F = Q + C
                            v = ""
                        }
                        j.moreLabel = A.find(O).length ? "" : u(j)
                        if (L) {
                            C = F
                        }
                        Q += v
                        j.summary = Q
                        j.details = C
                        j.lastCloseTag = v
                        if (S.onSlice) {
                            t = j.onSlice.call(T, j)
                            j = t && t.details ? t : j
                        }
                        var U = c(j, L)
                        A.html(U)
                        y = A.find(I)
                        b = A.find(O)
                        y.hide()
                        b.find("a").unbind("click.expander").bind("click.expander", Z)
                        P = A.find("div." + j.summaryClass)

                        function Z(e) {
                            e.preventDefault()
                            b.hide()
                            P.hide()
                            if (S.beforeExpand) {
                                j.beforeExpand.call(T)
                            }
                            y.stop(false, true)[j.expandEffect](z, function() {
                                y.css({
                                    zoom: ""
                                })
                                if (S.afterExpand) {
                                    j.afterExpand.call(T)
                                }
                                x(j, y, T)
                            })
                        }
                    })
                },
                destroy: function() {
                    if (!this.data("expander")) {
                        return
                    }
                    this.removeData("expander")
                    this.each(function() {
                        var e = $(this),
                            a = $.meta ? $.extend({}, n, e.data()) : n,
                            s = e.find("." + a.detailClass).contents()
                        e.find("." + a.moreClass).remove()
                        e.find("." + a.summaryClass).remove()
                        e.find("." + a.detailClass).after(s).remove()
                    })
                }
            }
            if (p[a]) {
                p[a].call(this)
            }

            function c(e, a) {
                var n = "span",
                    s = e.summary
                if (a) {
                    n = "div"
                    if (d.test(s) && !e.expandAfterSummary) {
                        s = s.replace(d, e.moreLabel + "$1")
                    } else {
                        s += e.moreLabel
                    }
                    s = '<div class="' + e.summaryClass + '">' + s + "</div>"
                } else {
                    s += e.moreLabel
                }
                return [s, "<", n + ' class="' + e.detailClass + '"', ">", e.details, "</" + n + ">"].join("")
            }

            function u(e) {
                var a = '<span class="' + e.moreClass + '">' + e.expandPrefix
                a += '<a href="#">' + e.expandText + "</a></span>"
                return a
            }

            function m(e, a) {
                if (e.lastIndexOf("<") > e.lastIndexOf(">")) {
                    e = e.slice(0, e.lastIndexOf("<"))
                }
                if (a) {
                    e = e.replace(t, "")
                }
                return $.trim(e)
            }

            function h(e, a) {
                a.stop(true, true)[e.collapseEffect](e.collapseSpeed, function() {
                    var n = a.prev("span." + e.moreClass).show()
                    if (!n.length) {
                        a.parent().children("div." + e.summaryClass).show().find("span." + e.moreClass).show()
                    }
                })
            }

            function x(e, a, n) {
                if (e.collapseTimer) {
                    f = setTimeout(function() {
                        h(e, a)
                        if ($.isFunction(e.onCollapse)) {
                            e.onCollapse.call(n, false)
                        }
                    }, e.collapseTimer)
                }
            }
            return this
        }
        $.fn.expander.defaults = $.expander.defaults
    })(jQuery)
});
KAdefine("javascript/old-throbber-package/throbber.js", function(require, module, exports) {
    var KA = require("../shared-package/ka.js")
    var Throbber = {
        jElement: null,
        show: function e(r, t) {
            if (!Throbber.jElement) {
                Throbber.jElement = $("<img style='display:none;' " + "src='" + KA.staticUrl("/images/throbber.gif") + "' " + "class='throbber'/>")
                $(document.body).append(Throbber.jElement)
            }
            if (!r.length) {
                return
            }
            var s = r.offset()
            var o = s.top + r.height() / 2 - 8
            var b = t ? s.left - 16 - 4 : s.left + r.width() + 4
            Throbber.jElement.css("top", o).css("left", b).css("z-index", 2e3).css("display", "")
        },
        hide: function r() {
            if (Throbber.jElement) {
                Throbber.jElement.css("display", "none")
            }
        }
    }
    module.exports = Throbber
});
KAdefine("javascript/discussion-package/discussion-list.js", function(require, module, exports) {
    require("../../third_party/javascript-khansrc/jquery-expander/jquery.expander.js")
    require("../../third_party/javascript-khansrc/jquery-timeago/jquery.timeago.js")
    var $ = require("jquery")
    var _ = require("underscore")
    var ReactDOM = require("react-dom")
    var HoverCard = require("../hover-card-package/hover-card.js")
    var i18n = require("../shared-package/i18n.js")
    var KA = require("../shared-package/ka.js")
    var DiscussionList = function t(e) {
        this._init(e)
        _.bindAll(this)
    }
    DiscussionList.prototype._init = function(t) {
        this.complete = false
        this.page = 0
        this.count = 0
        this.expanderSettings = {
            slicePoint: 500,
            expandText: i18n._('(<span class="sr-only">read</span>more' + '<span class="sr-only">of this comment</span>)'),
            expandEffect: "fadeIn",
            userCollapseText: ""
        }
        this.hideCount = t.hideCount
        var e = t.listTemplate
        if (!e) {
            e = require("./discussion-list.handlebars")
        }
        this.templates = {
            list: e,
            item: t.itemTemplate,
            itemsReact: t.itemsReactTemplate
        }
        this.itemKey = t.itemKey || "feedback"
        this.$container = $(t.containerSelector)
        this.requestURL = t.requestURL
        this.params = t.params
        this.data = t.data || []
        this.hideHeader = t.hideHeader
        this.title = t.title || ""
        this.titleUrl = t.titleUrl || ""
        this.limit = t.limit || 10
        if (t.sorts !== undefined) {
            this.sorts = t.sorts
        } else {
            this.sorts = [{
                name: i18n._("Top"),
                title: i18n._("Most Voted"),
                value: 1,
                isDefault: true
            }, {
                name: i18n._("Recent"),
                title: i18n._("Most Recent"),
                value: 2,
                isDefault: false
            }]
            if (/\/questions$/.test(this.requestURL) && KA.featureFlag("SHOW_UNANSWERED_TAB")) {
                this.sorts.push({
                    name: i18n._("Unanswered"),
                    title: i18n._("Unanswered"),
                    value: 3,
                    isDefault: false
                })
            }
        }
        _.each(this.sorts, _.bind(function(t) {
            if (t.isDefault) {
                this.sortValue = t.value
            }
        }, this))
        if (t.subjects) {
            this.subjects = t.subjects
            var s = [{
                name: i18n._("All subjects"),
                title: i18n._("All subjects"),
                value: -1,
                isDefault: true
            }]
            _.each(this.subjects, function(t, e) {
                s.push({
                    name: t["translatedTitle"],
                    title: t["translatedTitle"],
                    value: e,
                    isDefault: false
                })
            })
            this.subjectSorts = s
        }
        this.subjectIndex = -1
        if (t.sortValue) {
            this.sortValue = t.sortValue
        }
        this.onSort = t.onSort || $.noop
        this.onInitialFetch = t.onInitialFetch || $.noop
        this.preRenderTransformData = t.preRenderTransformData || _.identity
        this.onFetchComplete = t.onFetchComplete || $.noop
        if (!t.preloaded) {
            this._buildHtml()
            if (this.data.length) {
                this._append(this.data)
            }
            if (this.requestURL) {
                if (t.prefetched) {
                    this._fetchSuccess(t.prefetched, this.onInitialFetch)
                } else {
                    this._fetch(this.onInitialFetch)
                }
            }
        } else {
            this._attachEvents()
        }
    }
    DiscussionList.prototype._buildHtml = function() {
        var t = this.itemKey === "scratchpads" ? "creations" : "comments"
        this.$container.append(this.templates.list({
            hideHeader: this.hideHeader,
            title: this.title,
            titleUrl: this.titleUrl,
            count: this.count,
            sorts: this.sorts,
            subjectSorts: this.subjectSorts,
            showMore: i18n._("Show more %(label)s", {
                label: t
            }),
            questions: {
                isComplete: true
            }
        }))
        this._attachEvents()
    }
    DiscussionList.prototype._attachEvents = function() {
        if (this.sorts) {
            this.$container.find(".top-sort.discussion-list-sort a").on("click", _.bind(function(t) {
                var e = $(t.target)
                e.addClass("selected")
                e.siblings().removeClass("selected")
                this.sort(e.data("value"))
            }, this))
        }
        if (this.subjectSorts) {
            this.$container.find(".filterbar-dropdown").on("change", _.bind(function(t) {
                var e = $("option:selected", t.target).text()
                this.$container.find(".filterbar-mock-selected").html(e)
                this.sortBySubject(t.target.value)
            }, this))
        }
        this.$moreButton = this.$container.find(".discussion-list-more").on("click", _.bind(function() {
            this.fetchMore()
            $(".questions-fader").hide()
        }, this))
        this.$container.on("mouseenter", ".author-nickname", function() {
            HoverCard.createHoverCardQtip($(this))
        })
        this.$content = this.$container.find(".discussion-list-content")
    }
    DiscussionList.prototype._reset = function() {
        this.data = []
        if (this.templates.itemsReact) {
            ReactDOM.unmountComponentAtNode(this.$content[0])
        }
        this.$content.html("")
        this.complete = false
        this.page = 0
        this.hideMore_()
        delete this.cursor
        delete this.params.cursor
    }
    DiscussionList.prototype._fetch = function(t) {
        var e = this.params
        var s = this.subjectIndex < 0 ? "all" : this.subjects[this.subjectIndex].id
        _.extend(e, {
            sort: this.sortValue,
            subject: s,
            limit: this.limit
        })
        if ("cursor" in this) {
            e.cursor = this.cursor
        } else {
            e.page = this.page
        }
        return $.ajax({
            type: "GET",
            url: this.requestURL,
            data: e,
            dataType: "json",
            success: _.bind(function(e) {
                this._fetchSuccess(e, t)
            }, this)
        })
    }
    DiscussionList.prototype._fetchSuccess = function(t, e) {
        if (!t) {
            return
        }
        var s = this.preRenderTransformData(this.getItemsFromData(t))
        this.setItemsInData(t, s)
        this.data = this.data.concat(s)
        if ("cursor" in t) {
            this.cursor = t.cursor
        }
        this._append(t)
        this.setMoreAsLoading_(false)
        var i = s.length
        if (!this.hideCount) {
            this.setCount(this.count + i)
        }
        this.onFetchComplete(t)
        if (e) {
            e(t)
        }
        if ("isComplete" in t) {
            this.setComplete(t.isComplete)
        } else if ("complete" in t) {
            this.setComplete(t.complete)
        } else {
            this.setComplete(!i)
        }
    }
    DiscussionList.prototype.fetchMore = function() {
        if (!this.complete) {
            this.page++
                this.setMoreAsLoading_(true)
            this._fetch()
        }
    }
    DiscussionList.prototype.getItemsFromData = function(t) {
        var e
        if (_.isArray(t)) {
            e = t
        } else {
            e = t[this.itemKey]
        }
        return _.compact(e)
    }
    DiscussionList.prototype.setItemsInData = function(t, e) {
        if (_.isArray(t)) {
            t = e
        } else {
            t[this.itemKey] = e
        }
    }
    DiscussionList.prototype._append = function(t) {
        var e = this.getItemsFromData(t)
        if (this.templates.item) {
            _.each(e, function(t) {
                this.$content.append(this.templates.item(t))
            }, this)
        } else if (this.templates.itemsReact) {
            ReactDOM.render(this.templates.itemsReact({
                domain: "default",
                projects: e
            }), this.$content[0])
        }
        this.prettify_()
    }
    DiscussionList.prototype.sort = function(t) {
        this.sortValue = t
        this._reset()
        this._fetch()
        this.onSort()
    }
    DiscussionList.prototype.sortBySubject = function(t) {
        this.subjectIndex = t
        this._reset()
        this._fetch()
        this.onSort()
    }
    DiscussionList.prototype.showMore_ = function() {
        this.$moreButton.css("display", "block")
    }
    DiscussionList.prototype.hideMore_ = function() {
        this.$moreButton.css("display", "none")
    }
    DiscussionList.prototype.setMoreAsLoading_ = function(t) {
        if (t) {
            this.$moreButton.addClass("disabled").prop("disabled", true).val(i18n._("Loading..."))
        } else {
            this.$moreButton.removeClass("disabled").prop("disabled", false).val(this.$moreButton.data("showMore"))
        }
    }
    DiscussionList.prototype.setCount = function(t) {
        this.count = t
        this.$container.find(".discussion-list-count").show().find(".discussion-list-count-value").html(t)
    }
    DiscussionList.prototype.setComplete = function(t) {
        this.complete = t
        if (this.complete) {
            this.hideMore_()
        } else {
            this.showMore_()
        }
    }
    DiscussionList.prototype.isEmpty = function() {
        return this.complete && this.data.length === 0
    }
    DiscussionList.prototype.isComplete = function() {
        return this.complete
    }
    DiscussionList.prototype.prettify_ = function() {
        $(".timeago", this.$content).timeago()
        $(".discussion-content", this.$content).expander(this.expanderSettings)
    }
    module.exports = DiscussionList
});
KAdefine("javascript/discussion-package/discussion-list.handlebars", function(require, module, exports) {
    require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
    var absoluteLinks = require("../shared-package/absolute-links.js")
    var template = Handlebars.template(function(s, n, e, i, l) {
        e = e || s.helpers
        i = i || s.partials
        var a = "",
            t, o, r, u, c = this,
            h = "function",
            f = e.helperMissing,
            p = void 0,
            d = this.escapeExpression,
            v = e.blockHelperMissing

        function m(s, n) {
            var l = "",
                a, t
            l += '\n    <h2 class="discussion-list-header">\n        '
            l += "\n        "
            r = e.titleUrl
            a = r || s.titleUrl
            t = e["if"]
            u = c.program(2, y, n)
            u.hash = {}
            u.fn = u
            u.inverse = c.program(4, g, n)
            a = t.call(s, a, u)
            if (a || a === 0) {
                l += a
            }
            l += '\n\n        <span class="discussion-list-count" style="display:none;">\n            '
            r = e["_"]
            a = r || s["_"]
            u = c.program(6, k, n)
            u.hash = {}
            u.fn = u
            u.inverse = c.noop
            if (r && typeof a === h) {
                a = a.call(s, u)
            } else {
                a = v.call(s, a, u)
            }
            if (a || a === 0) {
                l += a
            }
            l += "\n        </span>\n\n        "
            a = s
            a = c.invokePartial(i.discussion_sorts, "discussion_sorts", a, e, i)
            if (a || a === 0) {
                l += a
            }
            l += "\n\n    </h2>\n"
            return l
        }

        function y(s, n) {
            var i = "",
                l
            i += '\n          <a class="no-underline" href="'
            r = e.titleUrl
            l = r || s.titleUrl
            if (typeof l === h) {
                l = l.call(s, {
                    hash: {}
                })
            } else if (l === p) {
                l = f.call(s, "titleUrl", {
                    hash: {}
                })
            }
            i += d(l) + '">'
            r = e.title
            l = r || s.title
            if (typeof l === h) {
                l = l.call(s, {
                    hash: {}
                })
            } else if (l === p) {
                l = f.call(s, "title", {
                    hash: {}
                })
            }
            i += d(l) + "</a>\n        "
            return i
        }

        function g(s, n) {
            var i = "",
                l
            i += "\n          "
            r = e.title
            l = r || s.title
            if (typeof l === h) {
                l = l.call(s, {
                    hash: {}
                })
            } else if (l === p) {
                l = f.call(s, "title", {
                    hash: {}
                })
            }
            i += d(l) + "\n        "
            return i
        }

        function k(s, n) {
            var i = "",
                l
            i += '(<span class="discussion-list-count-value">'
            r = e.count
            l = r || s.count
            if (typeof l === h) {
                l = l.call(s, {
                    hash: {}
                })
            } else if (l === p) {
                l = f.call(s, "count", {
                    hash: {}
                })
            }
            i += d(l) + "</span> total)"
            return i
        }

        function q(s, n) {
            var i = "",
                l, a
            i += "\n                "
            r = e.questions
            l = r || s.questions
            l = l === null || l === undefined || l === false ? l : l.feedback
            a = e.each
            u = c.program(9, w, n)
            u.hash = {}
            u.fn = u
            u.inverse = c.noop
            l = a.call(s, l, u)
            if (l || l === 0) {
                i += l
            }
            i += "\n        "
            return i
        }

        function w(s, n) {
            var l = "",
                a
            l += "\n                    "
            a = s
            a = c.invokePartial(i.discussion_thread, "discussion_thread", a, e, i)
            if (a || a === 0) {
                l += a
            }
            l += "\n                "
            return l
        }

        function b(s, n) {
            return 'style="display:none"'
        }

        function M(s, n) {
            return 'style="display:none"'
        }
        a += '<div class="discussion-list">\n    '
        r = e.hideHeader
        t = r || n.hideHeader
        o = e.unless
        u = c.program(1, m, l)
        u.hash = {}
        u.fn = u
        u.inverse = c.noop
        t = o.call(n, t, u)
        if (t || t === 0) {
            a += t
        }
        a += '\n    <div class="discussion-list-content">\n        '
        r = e.questions
        t = r || n.questions
        o = e["if"]
        u = c.program(8, q, l)
        u.hash = {}
        u.fn = u
        u.inverse = c.noop
        t = o.call(n, t, u)
        if (t || t === 0) {
            a += t
        }
        a += "\n    </div>\n\n    "
        a += '\n    <input type="button"\n           class="simple-button discussion-list-more"\n           '
        r = e.questions
        t = r || n.questions
        o = e.unless
        u = c.program(11, b, l)
        u.hash = {}
        u.fn = u
        u.inverse = c.noop
        t = o.call(n, t, u)
        if (t || t === 0) {
            a += t
        }
        a += "\n           "
        r = e.questions
        t = r || n.questions
        t = t === null || t === undefined || t === false ? t : t.isComplete
        o = e["if"]
        u = c.program(13, M, l)
        u.hash = {}
        u.fn = u
        u.inverse = c.noop
        t = o.call(n, t, u)
        if (t || t === 0) {
            a += t
        }
        a += '\n           value="'
        r = e.showMore
        t = r || n.showMore
        if (typeof t === h) {
            t = t.call(n, {
                hash: {}
            })
        } else if (t === p) {
            t = f.call(n, "showMore", {
                hash: {}
            })
        }
        a += d(t) + '"\n           data-show-more="'
        r = e.showMore
        t = r || n.showMore
        if (typeof t === h) {
            t = t.call(n, {
                hash: {}
            })
        } else if (t === p) {
            t = f.call(n, "showMore", {
                hash: {}
            })
        }
        a += d(t) + '">\n</div>\n'
        return a
    })

    function wrapped_template(s, n) {
        return absoluteLinks.makeHtmlLinksSafe(template(s, n))
    }
    module.exports = wrapped_template
});
KAdefine("javascript/discussion-package/discussion-list-profile-widget.handlebars", function(require, module, exports) {
    require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
    var absoluteLinks = require("../shared-package/absolute-links.js")
    var template = Handlebars.template(function(n, s, e, i, t) {
        e = e || n.helpers
        i = i || n.partials
        var a = "",
            l, o, r, u, c = this,
            f = "function",
            p = e.helperMissing,
            h = void 0,
            d = this.escapeExpression,
            v = e.blockHelperMissing

        function m(n, s) {
            var i = "",
                t, a
            i += '\n    <h4 class="profile-widget-section-header">\n        '
            i += '\n        <a href="'
            r = e.titleUrl
            t = r || n.titleUrl
            if (typeof t === f) {
                t = t.call(n, {
                    hash: {}
                })
            } else if (t === h) {
                t = p.call(n, "titleUrl", {
                    hash: {}
                })
            }
            i += d(t) + '">'
            r = e.title
            t = r || n.title
            if (typeof t === f) {
                t = t.call(n, {
                    hash: {}
                })
            } else if (t === h) {
                t = p.call(n, "title", {
                    hash: {}
                })
            }
            i += d(t) + '</a>\n\n        <span class="discussion-list-count" style="display:none;">\n            '
            r = e["_"]
            t = r || n["_"]
            u = c.program(2, g, s)
            u.hash = {}
            u.fn = u
            u.inverse = c.noop
            if (r && typeof t === f) {
                t = t.call(n, u)
            } else {
                t = v.call(n, t, u)
            }
            if (t || t === 0) {
                i += t
            }
            i += "\n        </span>\n\n        "
            r = e.sorts
            t = r || n.sorts
            a = e["if"]
            u = c.program(4, y, s)
            u.hash = {}
            u.fn = u
            u.inverse = c.noop
            t = a.call(n, t, u)
            if (t || t === 0) {
                i += t
            }
            i += "\n    </h4>\n    "
            return i
        }

        function g(n, s) {
            var i = "",
                t
            i += '(<span class="discussion-list-count-value">'
            r = e.count
            t = r || n.count
            if (typeof t === f) {
                t = t.call(n, {
                    hash: {}
                })
            } else if (t === h) {
                t = p.call(n, "count", {
                    hash: {}
                })
            }
            i += d(t) + "</span> total)"
            return i
        }

        function y(n, s) {
            var t = "",
                a
            t += '\n            <span class="discussion-list-sort">\n                '
            a = n
            a = c.invokePartial(i.discussion_sorts, "discussion_sorts", a, e, i)
            if (a || a === 0) {
                t += a
            }
            t += "\n            </span>\n        "
            return t
        }

        function q(n, s) {
            var i = "",
                t, a
            i += "\n                "
            r = e.questions
            t = r || n.questions
            t = t === null || t === undefined || t === false ? t : t.questions
            a = e.each
            u = c.program(7, _, s)
            u.hash = {}
            u.fn = u
            u.inverse = c.noop
            t = a.call(n, t, u)
            if (t || t === 0) {
                i += t
            }
            i += "\n        "
            return i
        }

        function _(n, s) {
            var t = "",
                a
            t += "\n                    "
            a = n
            a = c.invokePartial(i.discussion_thread, "discussion_thread", a, e, i)
            if (a || a === 0) {
                t += a
            }
            t += "\n                "
            return t
        }

        function k(n, s) {
            return 'style="display:none"'
        }

        function b(n, s) {
            return 'style="display:none"'
        }

        function H(n, s) {
            return "Show more comments"
        }
        a += '\n<div class="discussion-list">\n    '
        r = e.hideHeader
        l = r || s.hideHeader
        o = e.unless
        u = c.program(1, m, t)
        u.hash = {}
        u.fn = u
        u.inverse = c.noop
        l = o.call(s, l, u)
        if (l || l === 0) {
            a += l
        }
        a += '\n    <div class="discussion-list-content">\n        '
        r = e.questions
        l = r || s.questions
        o = e["if"]
        u = c.program(6, q, t)
        u.hash = {}
        u.fn = u
        u.inverse = c.noop
        l = o.call(s, l, u)
        if (l || l === 0) {
            a += l
        }
        a += "\n    </div>\n\n    "
        a += '\n    <input type="button"\n           class="simple-button discussion-list-more"\n           '
        r = e.questions
        l = r || s.questions
        o = e.unless
        u = c.program(9, k, t)
        u.hash = {}
        u.fn = u
        u.inverse = c.noop
        l = o.call(s, l, u)
        if (l || l === 0) {
            a += l
        }
        a += "\n           "
        r = e.questions
        l = r || s.questions
        l = l === null || l === undefined || l === false ? l : l.isComplete
        o = e["if"]
        u = c.program(11, b, t)
        u.hash = {}
        u.fn = u
        u.inverse = c.noop
        l = o.call(s, l, u)
        if (l || l === 0) {
            a += l
        }
        a += '\n           value="'
        r = e["_"]
        l = r || s["_"]
        u = c.program(13, H, t)
        u.hash = {}
        u.fn = u
        u.inverse = c.noop
        if (r && typeof l === f) {
            l = l.call(s, u)
        } else {
            l = v.call(s, l, u)
        }
        if (l || l === 0) {
            a += l
        }
        a += '">\n</div>\n'
        return a
    })

    function wrapped_template(n, s) {
        return absoluteLinks.makeHtmlLinksSafe(template(n, s))
    }
    module.exports = wrapped_template
});
KAdefine("javascript/discussion-package/discussion.js", function(require, module, exports) {
    var guiders = require("../../third_party/javascript-khansrc/Guiders-JS/guiders.js")
    require("../../third_party/javascript-khansrc/jquery-expander/jquery.expander.js")
    require("../../third_party/javascript-khansrc/jquery-placeholder/jquery.placeholder.js")
    require("../../third_party/javascript-khansrc/jquery-timeago/jquery.timeago.js")
    require("../../third_party/javascript-khansrc/jqueryui/jquery.ui.effect.js")
    var $ = require("jquery")
    var _ = require("underscore")
    var absoluteLinks = require("../shared-package/absolute-links.js")
    var i18n = require("../shared-package/i18n.js")
    var Analytics = require("../shared-package/analytics.js")
    var DiscussionNote = require("./discussion-note.js")
    var DiscussionProfilePromo = require("./discussion-profilepromo.js")
    var DiscussionVoting = require("./discussion-voting.js")
    var KA = require("../shared-package/ka.js")
    var parseQueryString = require("../shared-package/parse-query-string.js")
    var Throbber = require("../old-throbber-package/throbber.js")
    var Discussion = {
        _registered: false,
        _minHeight: 200,
        init: function i(e, s, t) {
            this.data = e
            this._currentTab = null
            if (this.data.container == null) {
                this.data.container = ".video-discussion"
            }
            this.data.$container = $(this.data.container)
            this.data.$container.find(".login-link").attr("href", "/login?continue=" + encodeURIComponent(this.data.url))
            if (KA.language !== "en") {
                var n = absoluteLinks.safeLinkTo("http://en.khanacademy.org" + window.location.pathname)
                this.data.$container.find(".discussion-i18n-message").attr("href", n).show()
            }
            if (!e.preloaded) {
                this.data.$container.find(".discussion-progress-bar").show()
            }
            this.initObjects()
            var a = require("./clarifications.js")
            a._fetch(s)
            if (this.data.which === "video-questions" || this.data.which === "article-questions" || this.data.which === "scratchpad-questions") {
                _(this.tabOb).chain().keys().each(function(i) {
                    if (!e.preloaded || i !== "questions") {
                        Discussion.tabOb[i].reset()
                    }
                })
                var o = "questions"
                if (this.data.which === "scratchpad-questions") {
                    o = "comments"
                }
                if (this.data.expandFeedbackType) {
                    o = this.data.expandFeedbackType
                } else if (this._getTabForHash()) {
                    o = this._getTabForHash()
                }
                Discussion._switchType(o)
            }
            if (this._registered && !this.data.reset) {
                return
            }
            this._registered = true
            var r = require("./moderation.js")
            r.init(t)
            DiscussionVoting.init(this.data.$container, t)
            DiscussionNote.init(t)
            _(this.feedbackOb).each(_.bind(function(i) {
                if (i.init) {
                    i.init(this.data.$container, t)
                }
            }, this))
            if (!t) {
                this.data.$container.on("click", ".tabitem a", function(i) {
                    Discussion.switchTab(this)
                })
                this.data.$container.on("click", "[data-tab-target]", function(i) {
                    Discussion._switchType($(this).data("tab-target"))
                })
                this.data.$container.on("click", ".discussion-list-sort a", function(i) {
                    Discussion.sort(this)
                })
                this.data.$container.on("click", ".show-formatting-tips", function(i) {
                    Discussion.toggleFormattingTips(Discussion.getParent(this))
                    i.preventDefault()
                })
                this.data.$container.on("click", ".discussion-submit", this.submit).on("click", ".discussion-cancel", this.cancel).on("focus", ".discussion-text:not(.eval-text)", this.focus)
                this.data.$container.on("click", ".post-feedback-instead", this.addFeedback).on("click", ".ask-question-instead", this.askQuestion)
                this.data.$container.add(".discussion-guidelines").on("click", ".suggest-clarification", this._switchType.bind(this, "clarifications"))
                if (this.data.$container.is(".all-questions, .mod-queue")) {
                    this.data.$container.on("click", ".youTube, .modal-video", function(i) {
                        if (i.metaKey) {
                            return
                        }
                        var e = $(this),
                            s, t
                        if (e.is(".youTube")) {
                            s = Math.max(0, e.data("seconds") - 2)
                            t = e.parents(".thread").find(".modal-video")
                        } else {
                            s = null
                            t = e
                        }
                        require.async(["../video-legacy-package/modalvideo.js", "package!video.css"], function(i) {
                            i.show({
                                translatedTitle: t.data("translatedTitle"),
                                translatedDescription: t.data("translatedDescription"),
                                relative_url: t.attr("href"),
                                youtubeId: t.data("youtubeId"),
                                translatedYoutubeId: t.data("translatedYoutubeId"),
                                timestamp: s,
                                topicSlug: Discussion.data.topicSlug
                            })
                        })
                        return false
                    })
                }
                $(window).on("hashchange", this._handleHashUpdate.bind(this))
                this.data.$container.on("click", ".expand-discussions-button", this.toggleDiscussions.bind(this))
            }
            delete e["preloaded"]
        },
        initObjects: function e() {
            var i = require("./discussion-answers.js")
            var e = require("./clarifications.js")
            var s = require("./discussion-comments.js")
            var t = require("./guidelines.js")
            var n = require("./discussion-projectfeedback.js")
            var a = require("./discussion-questions.js")
            var o = require("./discussion-replies.js")
            var r = require("./report-a-mistake.js")
            if (this.tabOb && this.feedbackOb) {
                return
            }
            this.tabOb = {
                questions: a,
                comments: s,
                clarifications: e,
                projectfeedback: n,
                guidelines: t,
                reportamistake: r
            }
            this.feedbackOb = {
                question: a,
                answer: i,
                comment: s,
                reply: o,
                scratchpad: {},
                clarification: {},
                projecthelp: {},
                projectcritique: {}
            }
        },
        checkCollectionStatus: function s(i, e, t, n) {
            if (!i._loadComplete) {
                return
            }
            if (i._component) {
                var a = i._component.state.collection
                if (a.length > 0 || n) {
                    t()
                } else {
                    a.on("sync", function() {
                        if (a.length > 0 || n) {
                            t()
                        }
                    })
                }
            } else if (i.list && !i.list.isEmpty() || n) {
                t()
            }
            clearInterval(e)
        },
        maybeShowTab: function t(i, e, s) {
            if (i === this._currentTab) {
                return
            }
            var t = this.tabOb[i]
            var n = setInterval(function() {
                this.checkCollectionStatus(t, n, function() {
                    if (!t.shouldShowTab || t.shouldShowTab()) {
                        $(t._tabHeaderSelector).show()
                    }
                    if (e) {
                        e()
                    }
                }, s)
            }.bind(this), 100)
            $(t._tabHeaderSelector).hide()
            this.checkCollectionStatus(t, n, undefined, s)
            if (!t._loadComplete) {
                t.load()
            }
        },
        _getTabForHash: function n() {
            if (window.location.hash === "#projectcritique" || window.location.hash === "#projecthelp") {
                return "projectfeedback"
            }
            return null
        },
        _handleHashUpdate: function a() {
            var i = this._getTabForHash()
            if (i) {
                this._switchType(i)
            }
        },
        _finishLoad: function o(i, e) {
            if (i) {
                var s = Discussion.getFeedbackFromKey(i)
                if (s.length !== 0) {
                    var t = require("./discussion-replies.js")
                    if (s.hasClass("comment")) {
                        Discussion._switchType("comments")
                        Discussion.highlight(s, "success")
                    } else {
                        var n = s.parents(".thread")
                        Discussion.highlight(n, "success")
                        n.find(".show-answer-links").hide().end().find(".hidden-answers").show()
                        if (!Discussion.hasAnswered(s)) {
                            n.find(".add-answer").show()
                        }
                    }
                    if ((t.getReplyCount(i) || s.hasClass("answer")) && !this.data.isSeoLandingPage) {
                        t.toggle(i, true)
                    }
                    $("html, body").animate({
                        scrollTop: s.offset().top - 10
                    })
                }
                Discussion.data.qaExpandKey = null
            }
            var a = parseQueryString()
            if (i && a.mute === "1") {
                Discussion.showNotificationTogglePopup(i, false)
            }
            if (e && e.type === "question") {
                var o = e.feedback.length
                if (o === 0) {
                    this.data.$container.addClass("discussions-expanded")
                } else {
                    this.data.$container.find(".expand-discussions-button .questions-count").text("(" + o + ")")
                }
            }
            Discussion._refreshHeight()
            Discussion._enablePlaceholders()
            Discussion.hideProgressBar()
            $(KA).trigger("contentLoaded")
        },
        _refreshHeight: function r() {
            var i = this.data.$container.height()
            if (i > Discussion._minHeight) {
                Discussion._minHeight = i
                this.data.$container.css("min-height", i)
            }
        },
        _translateFeedbackType: function c(i) {
            if (i === "question") {
                return i18n._("question")
            } else if (i === "answer") {
                return i18n._("answer")
            } else if (i === "comment") {
                return i18n._("post")
            } else if (i === "reply") {
                return i18n._("comments")
            } else if (i === "scratchpad") {
                return i18n._("scratchpad")
            } else {
                return i18n._("post")
            }
        },
        sort: function d(i) {
            var e = $(i)
            if (e.hasClass("selected")) {
                return
            }
            Discussion.showProgressBar()
            e.addClass("selected").siblings().removeClass("selected")
            this.tabOb[this._currentTab].sort(e.data("value"))
            Analytics.trackSingleEvent("Changed Video Discussion's Tab Sort")
        },
        switchTab: function u(i) {
            var e = $(i).parents(".tabitem"),
                s = e.data("type")
            return this._switchType(s)
        },
        _switchType: function l(i) {
            if (i === this._currentTab) {
                return $.Deferred().resolve().promise()
            }
            return function() {
                var e = $.Deferred()
                if (i === "clarifications") {
                    $(".video-discussion-header [data-type=clarifications]").fadeIn("fast", e.resolve)
                } else {
                    e.resolve()
                }
                return e
            }().done(function() {
                Discussion.showProgressBar()
                this._currentTab = i
                Discussion._showTabBody(i)
                Discussion._showTabSorts(i)
                Analytics.trackSingleEvent("Changed Video Discussion's Tab")
            }.bind(this))
        },
        _showTabBody: function h(i) {
            var e
            _(this.tabOb).chain().keys().each(function(t) {
                s = Discussion.tabOb[t]
                if (t === i) {
                    e = s.sortValue
                    s.show()
                } else {
                    s.hide()
                }
            })
            this.data.$container.parent().toggleClass("nosidebar", i === "guidelines" || i === "reportamistake")
            var s = ".tabitem[data-type=" + i + "]"
            this.data.$container.find(s).addClass("selected").siblings().removeClass("selected")
        },
        _showTabSorts: function f(i) {
            var e = this.tabOb[i],
                s = this.data.$container.find(".discussion-list-sort")
            if (e.list) {
                var t = require("./sorts.handlebars")
                s.html(t({
                    sorts: e.list.sorts
                }))
            } else {
                s.empty()
            }
        },
        getKey: function p(i) {
            return i.attr("id")
        },
        getFeedbackFromKey: function g(i) {
            return $("#" + i)
        },
        getParent: function b(i) {
            return $(i).parent().closest([".reply", ".answer", ".question", ".comment", ".scratchpad-vote", ".clarification"].join(","))
        },
        getParentType: function m(i) {
            return Discussion._getFeedbackType(Discussion.getParent(i))
        },
        _getFeedbackType: function v(i) {
            var e = _(Discussion.feedbackOb).chain().keys().find(_(i.hasClass).bind(i)).value()
            return e || null
        },
        focus: function w() {
            var i = require("./duplicate-notice.js")
            var e = Discussion.getParent(this)
            i.removeAll(e)
            var s = Discussion._getFeedbackType(e)
            if (DiscussionNote.checkAndPromptLogin(this, s, true)) {
                return false
            }
            var t = e.parent()
            if (t.hasClass("ask-question") || t.hasClass("post-feedback") || t.hasClass("officialClarificationView")) {
                Discussion._revealGuidelines(t)
                Discussion._startEditing(e, true)
            } else {
                Discussion._startEditing(e)
            }
            DiscussionProfilePromo.check()
        },
        focusWithoutScrolling: function y(i) {
            var e = window.scrollX,
                s = window.scrollY
            i.focus()
            window.scrollTo(e, s)
        },
        _revealGuidelines: function k(i) {
            if (i.parents(".scratchpad-wrap-outer").length) {
                i.find("[href*=reportissue]").attr("href", "/r/computer-programming-report")
            }
            if (window.location.pathname.indexOf("computer-programming") > -1 || window.location.pathname.indexOf("hour-of-code") > -1) {
                i.find(".no-homework").hide()
                i.find(".check-the-faq").show()
            } else {
                i.find(".no-homework").show()
                i.find(".check-the-faq").hide()
            }
            i.find(".post-guidelines").slideDown(function() {
                Discussion.scrollDownToReveal(i)
            })
        },
        scrollDownToReveal: function D(i) {
            var e = 10
            var s = i.offset().top + i.height() + e
            var t = $(window)
            if (t.scrollTop() < i.offset().top && t.scrollTop() + t.height() < s) {
                var n = s - t.height()
                if (t.height() < i.height()) {
                    n = i.offset().top
                }
                $("body, html").animate({
                    scrollTop: n + "px"
                })
            }
        },
        edit: function q(i) {
            var e = Discussion.getParent(i)
            if (!e.length) {
                return
            }
            e.addClass("discussion-edit")
            var s = $(".discussion-content:first", e)
            s.expander("destroy")
            var t = s.html()
            
            /***************************************************************************************
             *
             * Haha, here's the formatting tools!
             *
            ****************************************************************************************/
            
            t = t.replace(/<em>(.*?)<\/em>/g, function(i, e) {
                return "_" + e + "_"
            })
            t = t.replace(/<b>(.*?)<\/b>/g, function(i, e) {
                return "*" + e + "*"
            })
            t = t.replace(/<pre><code>(.*?)<\/code><\/pre>/g, function(i, e) {
                return "```\n" + e + "\n```"
            })
            t = t.replace(/<code>(.*?)<\/code>/g, function(i, e) {
                return "`" + e + "`"
            })
            var n = /<br>/gi
            t = t.replace(n, "\n")
            var a = $("<div>").html(t)
            var o = a.text()
            var r = $("<textarea>", {
                "class": "discussion-text open"
            })
            r.css("height", s.height() + 8)
            r.val($.trim(o))
            s.hide().after(r)
            $(".from-video-author", e).hide()
            $(".discussion-scratchpad-thumbnail", e).hide()
            $(".discussion-embed-video", e).hide()
            _.defer(function() {
                r.focus()
            })
            Discussion._showControls(e)
            $(".discussion-meta:first", e).hide()
        },
        showNotificationTogglePopup: function T(i, e) {
            var s = Discussion.getFeedbackFromKey(i)
            var t = s.find(".mute")
            var n = t.length > 0 ? t : s
            var a = "notificationPopup-" + i
            $("#" + a).remove()
            var o = e ? i18n._("Notifications for this question are ON") : i18n._("Notifications for this question are OFF")
            var r = '<span class="guider-title-smaller">\n            ' + o + "</span>"
            var c = {
                buttons: [],
                attachTo: n,
                highlight: n,
                position: 6,
                offset: {
                    left: 0,
                    top: -15
                },
                title: r,
                description: "",
                overlay: false,
                width: 400,
                id: a,
                xButton: true
            }
            guiders.createGuider(c).show()
            $("#" + a).find(".close-button").on("click", function() {
                guiders.hideAll()
            })

            function d() {
                return $("#" + a).find(".guider_description")
            }
            var u = "/settings/email"
            $.getJSON("/api/internal/user/subscription/answer_notifications").done(function(i) {
                if (i.subscribed) {
                    if (e) {
                        d().html(i18n._("<a href='%(emailSettingsUrl)s'>Email\n                                   notifications</a> are currently enabled.", {
                            emailSettingsUrl: u
                        }))
                    } else {
                        d().html(i18n._("<a href='javascript:void(0);'>\n                                Disable email notifications for all your\n                                questions.</a>")).on("click", "a", function() {
                            Discussion._toggleAnswerNotificationEmails(i.token, false)
                            d().html(i18n._("<a href='%(emailSettingsUrl)s'>Email\n                                           notifications</a> are now disabled.", {
                                emailSettingsUrl: u
                            }))
                        })
                    }
                } else {
                    if (e) {
                        d().html(i18n._("<strong>\n                                <a href='javascript:void(0);'>Enable email\n                                notifications for your questions.</a>\n                                </strong>")).on("click", "a", function() {
                            Discussion._toggleAnswerNotificationEmails(i.token, true)
                            d().html(i18n._("<a href='%(emailSettingsUrl)s'>Email\n                                           notifications</a> are now enabled.", {
                                emailSettingsUrl: u
                            }))
                        })
                    } else {
                        d().html(i18n._("<a href='%(emailSettingsUrl)s'>Email\n                                   notifications</a> are already disabled.", {
                            emailSettingsUrl: u
                        }))
                    }
                }
            }).fail(function(i) {
                if (i.status === 401) {
                    d().html(i18n._("<a href='%(emailSettingsUrl)s'>Log in to\n                               manage your email notification settings.</a>", {
                        emailSettingsUrl: u
                    }))
                }
            })
        },
        _toggleAnswerNotificationEmails: function j(i, e) {
            $.ajax({
                type: e ? "PUT" : "DELETE",
                url: "/api/internal/user/subscription/" + i
            })
        },
        submit: function C() {
            var i = Discussion.getParentType(this)
            Discussion.feedbackOb[i]._onSubmit(this)
        },
        _onSubmit: function S(i, e) {
            Discussion._showThrobber(e)
            Discussion._disableControls(e)
        },
        _onSubmitSuccess: function P(i, e, s, t) {
            if (i === "question" || i === "answer") {
                var n = require("./low-quality-notice.js")
                if (n.init(i, e, s, t)) {
                    Discussion._hideThrobber(e)
                    Discussion._enableControls(e)
                    return false
                }
            }
            Discussion._stopEditing(e, i === "answer" && !t)
            Discussion._trackAddFeedbackEvent(i, t, s["lowQualityScore"], s["appearsAsDeleted"], s["authorKaid"])
            return true
        },
        setHasAnswered: function x(i, e) {
            i.parents(".thread").toggleClass("has-answered", e)
        },
        hasAnswered: function A(i) {
            return i.parents(".thread").hasClass("has-answered")
        },
        toggleFormattingTips: function F(i) {
            if (!i.find(".formatting-tips-container").length) {
                var e = require("./formatting-tips.handlebars")
                i.find(".discussion-controls").append(e({}))
            }
            i.find(".formatting-tips-container").slideToggle(300)
        },
        cancel: function E() {
            return Discussion._cancel(Discussion.getParent(this))
        },
        _cancel: function O(i) {
            var e = require("./low-quality-notice.js")
            i.removeClass("discussion-edit")
            if (!Discussion.getKey(i)) {
                Discussion._stopEditing(i)
            } else {
                $(".from-video-author", i).show()
                $(".discussion-scratchpad-thumbnail", i).show()
                $(".discussion-embed-video", i).show()
                $(".discussion-content", i).show()
                $(".discussion-meta", i).show()
                $(".discussion-text:first", i).remove()
                Discussion._enableControls(i)
                Discussion._hideControls(i)
            }
            e.hide(i)
            return false
        },
        addFeedback: function U(i) {
            Discussion._cancel($(".ask-question .question"))
            $(".ask-question .question-guidelines").promise().done(function() {
                Discussion._switchType("comments")
                $(".post-feedback .discussion-text").focus()
            })
            return false
        },
        askQuestion: function K(i) {
            Discussion._cancel($(".post-feedback .comment"))
            $(".post-feedback .feedback-guidelines").promise().done(function() {
                Discussion._switchType("questions")
                $(".ask-question .discussion-text").focus()
            })
            return false
        },
        remove: function H(i) {
            var e = Discussion.getParent(i)
            if (e.hasClass("question")) {
                var s = e.parent(".thread")
                if (s.length > 0) {
                    e = s
                }
            }
            e.delay(100).animate({
                height: 0,
                opacity: 0,
                marginTop: 0,
                marginBottom: 0,
                paddingTop: 0,
                paddingBottom: 0
            }, 300, function() {
                e.remove()
            })
        },
        prependFeedback: function N(i, e) {
            return i.find(".timeago").timeago().end().prependTo(e)
        },
        appendFeedback: function B(i, e) {
            return i.find(".timeago").timeago().end().appendTo(e)
        },
        replaceFeedback: function I(i, e) {
            e.find(".timeago").timeago()
            i.replaceWith(e)
        },
        sendRequest: function L(i, e, s, t, n) {
            i += "?casing=camel"
            $.ajax({
                type: e,
                url: i,
                contentType: "application/json",
                data: s,
                dataType: "json",
                success: t,
                error: n
            })
        },
        getSanitizedText: function V(i) {
            var e = $(".discussion-text", i)
            if (e.length === 0) {
                return false
            }
            var s = $.trim(e.val())
            if (s === "" || s === e.data("placeholder")) {
                return false
            }
            return s
        },
        _enablePlaceholders: function R() {
            this.data.$container.find(".discussion-text").placeholder()
        },
        _hidePlaceholder: function Q(i) {
            var e = i.attr("placeholder")
            if (e) {
                i.data("placeholder", e)
            }
            i.attr("placeholder", "")
        },
        _showPlaceholder: function Y(i) {
            i.attr("placeholder", i.data("placeholder"))
        },
        _showControls: function G(i, e) {
            var s = $(".discussion-controls:first", i)
            s.slideDown(100).promise().done(function() {
                if (!e) {
                    Discussion.scrollDownToReveal(s)
                }
            })
        },
        _hideControls: function J(i) {
            $(".discussion-controls:first", i).hide()
        },
        _enableControls: function M(i) {
            $(".discussion-text", i).removeAttr("disabled")
            $(".discussion-submit", i).removeAttr("disabled")
        },
        _disableControls: function z(i) {
            $(".discussion-text", i).attr("disabled", "disabled")
            $(".discussion-submit", i).attr("disabled", "disabled")
        },
        _showThrobber: function W(i) {
            Throbber.show(i.find(".discussion-cancel"), true)
        },
        _hideThrobber: function Z(i) {
            Throbber.hide(i.find(".discussion-cancel"), true)
        },
        _startEditing: function X(i, e) {
            var s = $(".discussion-text:first", i)
            Discussion._hidePlaceholder(s)
            s.addClass("open")
            Discussion._showControls(i, e)
            $(".questions-fader").hide()
        },
        _stopEditing: function ie(i, e) {
            Discussion._hideThrobber(i)
            Discussion._hideControls(i)
            if (e) {
                Discussion.setHasAnswered(i, true)
            }
            Discussion._enableControls(i)
            var s = $(".discussion-text:first", i)
            Discussion._showPlaceholder(s)
            s.val("").removeClass("open").css("height", "").blur()
            var t = i.parent()
            if (t.hasClass("ask-question") || t.hasClass("post-feedback") || t.hasClass("officialClarificationView")) {
                t.find(".post-guidelines").slideUp()
            } else if (i.hasClass("reply")) {
                var n = require("./discussion-replies.js")
                n.normalBlur(i)
            }
        },
        highlight: function ee(i, e) {
            i.addClass("highlight")
            i.switchClass("", e + "-highlight", 400)
        },
        unhighlight: function se(i, e) {
            i.switchClass(e + "-highlight", "", 400)
        },
        
        /******************************************************************************************
         *
         * The low-qulaity-score seems to be set here as argument 's'.
         *
        *******************************************************************************************/
        
        _trackAddFeedbackEvent: function te(i, e, s, t, n) {
            Analytics.trackSingleEvent("Added Feedback", {
                "Feedback Type": i,
                "Post Type": e ? "Edit" : "New",
                "Low-Quality Score": s,
                "Appears as deleted": t,
                "Author's kaid": n
            })
        },
        showProgressBar: function ne() {
            if (this.data) {
                this.data.$container.find(".discussion-progress-bar").show()
            }
        },
        hideProgressBar: function ae() {
            if (this.data) {
                this.data.$container.find(".discussion-progress-bar").hide()
            }
        },
        transformFeedback: function oe(i) {
            _.extend(i, {
                isQuestion: i.type === "question",
                isAnswer: i.type === "answer",
                isComment: i.type === "comment",
                isReply: i.type === "reply",
                isScratchpad: i.type === "scratchpad",
                isClarification: i.type === "clarification",
                isProjectEval: i.type === "projecteval",
                isProjectEvalAnswer: i.type === "projectevalanswer"
            })
            if (!i.isReply && !i.isScratchpad) {
                i.expandKey = i.key
            }
            if (i.isScratchpad) {
                i.focus = {
                    relativeUrl: i.relativeUrl,
                    title: i.title
                }
                i.type = "program"
                i.key = i.strKey
            } else if (i.isClarification || i.isProjectEval || i.isProjectEvalAnswer) {} else {
                if (Discussion.feedbackOb[i.type].transform) {
                    i = Discussion.feedbackOb[i.type].transform(i)
                }
                Discussion._embedScratchpadImage(i)
            }
            var e = KA.getUserProfile()
            i.showModControls = e && e.get("isModerator")
            i.isDeveloper = Discussion.data.isDeveloper
            i.restrictPosting = Discussion.data.restrictPosting
            return i
        },
        _embedYoutubeVideo: function re(i) {
            if (!i.fromVideoAuthor || KA.isZeroRated) {
                return
            }
            var e = /\bhttps?:\/\/(?:www\.youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)\b/g,
                s = e.exec(i.content),
                t = s && s[1]
            if (t) {
                i.embedVideoUrl = "https://www.youtube.com/embed/" + t + "?hl=" + KA.languageYoutube + "&cc_lang_pref=" + KA.languageYoutube
            }
        },
        _embedScratchpadImage: function ce(i) {
            var e = /\/(?:cs|computer-programming)\/[^\/]+\/(\d+)\b/g
            var s = e.exec(i.content)
            var t = s && s[1]
            if (t) {
                $.ajax({
                    url: "/api/internal/scratchpads/" + t,
                    data: {
                        projection: JSON.stringify({
                            url: 1,
                            imageUrl: 1,
                            translatedTitle: 1
                        })
                    }
                }).then(function(e) {
                    var s = i.key
                    var t = $("#" + s + " .discussion-content")
                    $("#" + s + " .discussion-scratchpad-thumbnail").remove()
                    var n = require("./scratchpad-thumbnail.handlebars")
                    var a = $(n({
                        showPath: e.url,
                        imagePath: e.imageUrl,
                        translatedTitle: e.translatedTitle
                    }))
                    a.insertBefore(t)
                })
            }
        },
        toggleDiscussions: function de(i) {
            i.preventDefault()
            this.data.$container.toggleClass("discussions-expanded")
        }
    }
    module.exports = Discussion
});
KAdefine("javascript/discussion-package/discussion-questions.js", function(require, module, exports) {
    require("../../third_party/javascript-khansrc/jquery-migrate/jquery-migrate-1.1.1.js")
    require("../../third_party/javascript-khansrc/jquery-placeholder/jquery.placeholder.js")
    var $ = require("jquery")
    var _ = require("underscore")
    var Analytics = require("../shared-package/analytics.js")
    var Discussion = require("./discussion.js")
    var DiscussionList = require("./discussion-list.js")
    var DiscussionLowQualityNotice = require("./low-quality-notice.js")
    var DiscussionProfilePromo = require("./discussion-profilepromo.js")
    var DiscussionQuestions = {
        _loadComplete: false,
        _containerSelector: ".questions",
        _tabSelector: ".questions-tab",
        _tabHeaderSelector: "#questions-tab-header",
        _askQuestionSelector: ".discussion-container.new-ask-question-ui " + ".ask-question-container",
        init: function s(e, i) {
            if (i) {
                return
            }
            e.on("click", ".show-hidden-answers", function() {
                DiscussionQuestions.showHiddenAnswers($(this).parents(".thread"))
            }).on("click", ".show-answer-form", function() {
                DiscussionQuestions.showHiddenAnswers($(this).parents(".thread"), true)
            })
        },
        _onSubmit: function e(s) {
            var e = $(s),
                i = Discussion.getParent(e)
            var n = Discussion.getKey(i)
            var t = Discussion.getSanitizedText(i)
            if (!t) {
                return false
            }
            
            // Low quality notice...
            
            var o = JSON.stringify({
                text: t,
                shownLowQualityNotice: DiscussionLowQualityNotice.exists(i),
                topic_slug: Discussion.data.topicSlug
            })
            var a = i.parents(".thread").data("focusId") || Discussion.data.focusId
            var r = i.parents(".thread").data("focusKind") || Discussion.data.focusKind
            var u = "/api/internal/discussions/" + r + "/" + a + "/questions",
                c = "POST"
            if (n) {
                u += "/" + n
                c = "PUT"
            }
            Discussion.sendRequest(u, c, o, function(s) {
                DiscussionQuestions._onSubmitSuccess(s, i)
            })
            Discussion._onSubmit("question", i)
            if (window.ga) {
                window.ga("send", "event", "Learning-Action", "Question-Added")
            }
        },
        _onSubmitSuccess: function i(s, e) {
            var i = s["key"],
                n = Discussion.getFeedbackFromKey(i),
                t = n.length > 0
            if (!Discussion._onSubmitSuccess("question", e, s, t)) {
                return
            }
            s = Discussion.transformFeedback(s)
            if (!t) {
                var o = require("./thread.handlebars")
                DiscussionProfilePromo.show(s, true)
                var a = $(o(s))
                Discussion.prependFeedback(a, $(this._containerSelector + " .discussion-list-content"))
                $(".discussion-text", a).placeholder()
            } else {
                var o = require("./question.handlebars")
                Discussion.replaceFeedback(n, $(o(s)))
            }
        },
        show: function n() {
            this.load()
            $(this._tabSelector).show()
            $(this._askQuestionSelector).show()
        },
        hide: function t() {
            $(this._tabSelector).hide()
            $(this._askQuestionSelector).hide()
        },
        load: function o() {
            if (this._loadComplete) {
                Discussion.hideProgressBar()
                return
            }
            var s
            if (Discussion.data.expandFeedbackType === "questions") {
                s = Discussion.data.qaExpandKey
            }
            var e = "/api/internal/discussions/" + Discussion.data.focusKind + "/" + Discussion.data.focusId + "/questions",
                i = {
                    casing: "camel",
                    qa_expand_key: s
                }
            this.list = new DiscussionList({
                hideHeader: true,
                requestURL: e,
                itemTemplate: require("./thread.handlebars"),
                containerSelector: this._containerSelector,
                params: i,
                sortValue: this.sortValue,
                onInitialFetch: _.bind(function(s) {
                    this._finishLoad(s)
                }, this),
                onFetchComplete: _.bind(function(s) {
                    Discussion._enablePlaceholders()
                    if (s.isComplete) {
                        this.list.setComplete(true)
                    }
                }, this),
                preRenderTransformData: this.transformDataBeforeRender,
                preloaded: Discussion.data.preloaded
            })
            if (Discussion.data.preloaded) {
                this._finishLoad(Discussion.data)
            }
        },
        _finishLoad: function a(s) {
            DiscussionQuestions._loadComplete = true
            Discussion._finishLoad(s.qaExpandKey, s)
        },
        transformDataBeforeRender: function r(s) {
            _.each(s, Discussion.transformFeedback)
            return s
        },
        transform: function u(s) {
            s.expandKey = s.key
            var e = s.answers.length
            s.answerCount = e
            if (e > 0) {
                s.expandedAnswers = [s.answers[0]]
                s.answers.shift()
                if (e > 1) {
                    s.hasHiddenAnswers = true
                }
            }
            _.each(s.expandedAnswers, Discussion.transformFeedback)
            _.each(s.answers, Discussion.transformFeedback)
            return s
        },
        sort: function c(s) {
            this.sortValue = s
            this.reset()
            this.load()
        },
        reset: function d() {
            this._loadComplete = false
            $(this._containerSelector).html("")
        },
        showHiddenAnswers: function l(s, e) {
            s.find(".show-answer-links").hide().end().find(".hidden-answers").show()
            var i = s.find(".add-answer")
            i.show()
            if (e) {
                var n = $(".discussion-text", i)
                Discussion.focusWithoutScrolling(n)
            } else {
                Discussion.scrollDownToReveal(s)
            }
            Analytics.trackSingleEvent("Expanded Hidden Answers in Video Discussion")
        }
    }
    module.exports = DiscussionQuestions
});
KAdefine("javascript/discussion-package/discussion-answers.js", function(require, module, exports) {
    var $ = require("jquery")
    var Discussion = require("./discussion.js")
    var DiscussionDuplicateNotice = require("./duplicate-notice.js")
    var DiscussionLowQualityNotice = require("./low-quality-notice.js")
    var DiscussionProfilePromo = require("./discussion-profilepromo.js")
    var DiscussionAnswers = {
        init: function s(i, e) {
            DiscussionDuplicateNotice.init(i, e)
        },
        _onSubmit: function i(s) {
            var i = $(s),
                e = Discussion.getParent(i),
                n = $(".question", e.parents(".thread"))
            var o = Discussion.getKey(n) || e.data("questionKey"),
                r = Discussion.getKey(e)
            var u = Discussion.getSanitizedText(e)
            if (!u) {
                return false
            }
            var t = JSON.stringify({
                text: u,
                shownLowQualityNotice: DiscussionLowQualityNotice.exists(e),
                fromVideoAuthor: e.find(".from-video-author").is(":checked"),
                topic_slug: Discussion.data.topicSlug
            })
            DiscussionDuplicateNotice.removeAll(n)
            if (!r && DiscussionDuplicateNotice.show(u, e)) {
                Discussion.cancel.call(i)
                return
            }
            var c = "/api/internal/questions/" + o + "/answers",
                a = "POST"
            if (r) {
                c += "/" + r
                a = "PUT"
            }
            Discussion.sendRequest(c, a, t, function(s) {
                DiscussionAnswers._onSubmitSuccess(s, e)
            })
            Discussion._onSubmit("answer", e)
            if (window.ga) {
                window.ga("send", "event", "Learning-Action", "Answer-Added")
            }
        },
        _onSubmitSuccess: function e(s, i) {
            var e = s["key"],
                n = Discussion.getFeedbackFromKey(e),
                o = n.length > 0
            if (!Discussion._onSubmitSuccess("answer", i, s, o)) {
                return
            }
            Discussion.setHasAnswered(i, true)
            s = Discussion.transformFeedback(s)
            var r = require("./answer.handlebars"),
                u = $(r(s))
            DiscussionProfilePromo.show(s, false)
            if (!o) {
                var t = Discussion.getFeedbackFromKey(s["questionKey"]).parents(".thread").find(".answers")
                t.removeClass("with-no-answers")
                Discussion.appendFeedback(u, t)
            } else {
                Discussion.replaceFeedback(n, u)
            }
        },
        transform: function n(s) {
            Discussion._embedYoutubeVideo(s)
            return s
        }
    }
    module.exports = DiscussionAnswers
});
KAdefine("javascript/discussion-package/discussion-comments.js", function(require, module, exports) {
    var $ = require("jquery")
    var _ = require("underscore")
    var Discussion = require("./discussion.js")
    var DiscussionList = require("./discussion-list.js")
    var DiscussionComments = {
        _loadComplete: false,
        sortValue: 1,
        _containerSelector: ".comments",
        _tabSelector: ".comments-tab",
        _tabHeaderSelector: "#comments-tab-header",
        _onSubmit: function s(e) {
            var i = $(e),
                t = Discussion.getParent(i)
            var n = Discussion.getKey(t)
            var o = Discussion.getSanitizedText(t)
            if (!o) {
                return false
            }
            var a = JSON.stringify({
                text: o,
                topic_slug: Discussion.data.topicSlug
            })
            var r = t.data("focusId") || Discussion.data.focusId
            var c = t.data("focusKind") || Discussion.data.focusKind
            var u = "/api/internal/discussions/" + c + "/" + r + "/comments",
                d = "POST"
            if (n) {
                u += "/" + n
                d = "PUT"
            }
            Discussion.sendRequest(u, d, a, function(s) {
                DiscussionComments._onSubmitSuccess(s, t)
            })
            Discussion._onSubmit("comment", t)
        },
        _onSubmitSuccess: function e(s, i) {
            var t = s["key"],
                n = Discussion.getFeedbackFromKey(t),
                o = n.length > 0
            if (!Discussion._onSubmitSuccess("comment", i, s, o)) {
                return
            }
            s = Discussion.transformFeedback(s)
            var a = require("./comment.handlebars"),
                r = $(a(s))
            if (!o) {
                Discussion.prependFeedback(r, $(this._containerSelector + " .discussion-list-content"))
            } else {
                Discussion.replaceFeedback(n, r)
            }
        },
        show: function i() {
            this.load()
            $(this._tabSelector).show()
        },
        hide: function t() {
            $(this._tabSelector).hide()
        },
        load: function n() {
            if (this._loadComplete) {
                Discussion.hideProgressBar()
                return
            }
            var s
            if (Discussion.data.expandFeedbackType === "comments") {
                s = Discussion.data.qaExpandKey
            }
            var e = "/api/internal/discussions/" + Discussion.data.focusKind + "/" + Discussion.data.focusId + "/comments",
                i = {
                    casing: "camel",
                    qa_expand_key: s
                }
            this.list = new DiscussionList({
                hideHeader: true,
                requestURL: e,
                itemTemplate: require("./comment.handlebars"),
                containerSelector: this._containerSelector,
                params: i,
                sortValue: this.sortValue,
                onInitialFetch: _.bind(function(s) {
                    this._finishLoad(s)
                }, this),
                onFetchComplete: _.bind(function(s) {
                    Discussion._enablePlaceholders()
                    if (s.isComplete) {
                        this.list.setComplete(true)
                    }
                }, this),
                preRenderTransformData: _.bind(function(s) {
                    return this.transformDataBeforeRender(s)
                }, this)
            })
        },
        _finishLoad: function o(s) {
            DiscussionComments._loadComplete = true
            Discussion._finishLoad(s.qaExpandKey)
        },
        transformDataBeforeRender: function a(s) {
            _.each(s, Discussion.transformFeedback)
            return s
        },
        transform: function r(s) {
            Discussion._embedYoutubeVideo(s)
            Discussion._embedScratchpadImage(s)
            return s
        },
        sort: function c(s) {
            this.sortValue = s
            this.reset()
            this.load()
        },
        reset: function u() {
            this._loadComplete = false
            $(this._containerSelector).html("")
        }
    }
    module.exports = DiscussionComments
});
KAdefine("javascript/discussion-package/discussion-replies.js", function(require, module, exports) {
    require("../../third_party/javascript-khansrc/jquery-placeholder/jquery.placeholder.js")
    require("../../third_party/javascript-khansrc/jquery-timeago/jquery.timeago.js")
    var $ = require("jquery")
    var Backbone = require("backbone")
    var _ = require("underscore")
    var i18n = require("../shared-package/i18n.js")
    var Discussion = require("./discussion.js")
    var DiscussionNote = require("./discussion-note.js")
    var DiscussionQuestions = require("./discussion-questions.js")
    var DiscussionReplies = {
        _slideRate: 200,
        Model: Backbone.Model.extend({
            defaults: {
                content: ""
            }
        }),
        View: Backbone.View.extend({
            initialize: function e() {
                this.template = require("./reply.handlebars")
            },
            render: function s() {
                this.el = this.template(this.model.toJSON())
                return this
            }
        }),
        init: function i(e, s) {
            if (s) {
                return
            }
            e.on("click", ".toggle-replies", function() {
                var e = Discussion.getParent(this),
                    s = Discussion.getKey(e)
                DiscussionReplies.toggle(s)
            })
        },
        _onSubmit: function n(e) {
            var s = $(e),
                i = Discussion.getParent(s),
                n = Discussion.getSanitizedText(i),
                t = Discussion.getParent(i),
                o = Discussion.getKey(t)
            if (!n) {
                return false
            }
            var r = "/api/internal/discussions/" + o + "/replies",
                l = "POST",
                a = JSON.stringify({
                    text: n,
                    topic_slug: Discussion.data.topicSlug
                })
            Discussion._onSubmit("reply", i)
            Discussion.sendRequest(r, l, a, function(e) {
                var s = DiscussionReplies._getRepliesContainer(o).find(".replies")
                DiscussionReplies._render(e).css("opacity", 0).appendTo(s).animate({
                    opacity: 1
                })
                DiscussionReplies.incrementReplyCount(o)
                Discussion._onSubmitSuccess("reply", i, e)
            }, function(e) {
                if (e.status === 404) {
                    alert(i18n._("The question you are replying to has been deleted. " + "Please refresh the page."))
                }
            })
        },
        decrementReplyCount: function t(e) {
            DiscussionReplies._updateReplyCount(e, -1)
        },
        incrementReplyCount: function o(e) {
            DiscussionReplies._updateReplyCount(e, 1)
        },
        _updateReplyCount: function r(e, s) {
            var i = DiscussionReplies._getToggleButton(e),
                n = DiscussionReplies.getReplyCount(e)
            n += s
            i.data("replyCount", n)
            if (n === 0) {
                i.text(i18n._("Comment"))
            } else {
                i.text(i18n.ngettext("%(num)s Comment", "%(num)s Comments", n))
            }
        },
        transform: _.identity,
        toggle: function l(e, s) {
            var i = DiscussionReplies._getToggleButton(e)
            if (i.hasClass("show-replies")) {
                if (!i.data("hasFetched")) {
                    i.data("hasFetched", true)
                    DiscussionReplies._renderContainer(e, s)
                    DiscussionReplies._fetch(e)
                } else {
                    DiscussionReplies._getRepliesContainer(e).slideDown(DiscussionReplies._slideRate, function() {
                        DiscussionReplies._revealReplies(e)
                    })
                }
            } else {
                DiscussionReplies._getRepliesContainer(e).slideUp(DiscussionReplies._slideRate)
            }
            i.toggleClass("show-replies").toggleClass("hide-replies")
        },
        _fetch: function a(e) {
            var s = "/api/internal/discussions/" + e + "/replies" + "?casing=camel"
            $.ajax({
                type: "GET",
                url: s,
                contentType: "application/json",
                dataType: "json",
                success: _.bind(DiscussionReplies._renderReplies, this, e)
            })
        },
        _replyFormTemplate: null,
        getReplyFormTemplate: function u() {
            if (this._replyFormTemplate === null) {
                this._replyFormTemplate = require("./reply-form.handlebars")
            }
            return this._replyFormTemplate
        },
        _repliesContainerTemplate: null,
        getRepliesContainerTemplate: function c() {
            if (this._repliesContainerTemplate === null) {
                this._repliesContainerTemplate = require("./replies-container.handlebars")
            }
            return this._repliesContainerTemplate
        },
        _renderContainer: function p(e, s) {
            var i = this.getReplyCount(e),
                n = this.getRepliesContainerTemplate(),
                t = n({
                    replyCount: i
                }),
                o = $(t),
                r = o.find(".add-reply")
            Discussion.getFeedbackFromKey(e).append(o)
            o.find(".loading").slideDown(DiscussionReplies._slideRate).find(".discussion-item").delay(200).animate({
                opacity: 1
            })
            if (!Discussion.data.restrictPosting) {
                if (i > 20 && Discussion.data.which !== "scratchpad-questions") {
                    r.hide()
                    r.append("<div class='replies-closed'>" + i18n._("Comments on this post are closed.") + "</div>")
                    return
                }
                var l = this.getReplyFormTemplate()
                r.hide()
                var a = r.append(l({})).find(".discussion-text")
                var u = Discussion.getParentType(o)
                if (DiscussionReplies._usesReplyAltInterface(r)) {
                    var c = DiscussionReplies._isOriginalAuthor(Discussion.getParent(r))
                    var p = r.find(".discussion-text-dummy")
                    $.each([a, p], function() {
                        DiscussionReplies._setPlaceholder($(this), u, c)
                    })
                    a.hide()
                    var d = r.find(".choose-reply-alt")
                    if (c) {
                        d.val(i18n._("Edit your %(parentType)s", {
                            parentType: i18n._(u)
                        }))
                        d.on("click", this.editParentPost)
                    } else {
                        d.val(i18n._("Answer this question"))
                        d.on("click", this.answerQuestion)
                    }
                    p.on("focus", this.normalFocus)
                    r.find(".reply-alt-controls").show()
                    if (i === 0) {
                        r.slideDown(DiscussionReplies._slideRate)
                    }
                } else {
                    DiscussionReplies._setPlaceholder(a, u, false)
                    if (i === 0) {
                        r.show()
                        if (!s) {
                            Discussion.focusWithoutScrolling(a)
                            Discussion.scrollDownToReveal(o)
                        }
                    }
                }
            }
        },
        _renderReplies: function d(e, s) {
            var i = this._getRepliesContainer(e),
                n = i.find(".replies"),
                t = i.find(".add-reply")
            n.find(".loading").remove()
            _.each(s, function(e) {
                DiscussionReplies._render(e).appendTo(n).slideDown(DiscussionReplies._slideRate)
            })
            t.slideDown(DiscussionReplies._slideRate, function() {
                DiscussionReplies._revealReplies(e)
            })
        },
        _render: function f(e) {
            var s = new DiscussionReplies.Model(Discussion.transformFeedback(e)),
                i = new DiscussionReplies.View({
                    model: s
                })
            return $(i.render().el).find(".timeago").timeago().end()
        },
        _revealReplies: function h(e) {
            var s = DiscussionReplies._getRepliesContainer(e)
            Discussion.scrollDownToReveal(s)
        },
        editParentPost: function g() {
            var e = Discussion.getParent(Discussion.getParent(this))
            if (!e.hasClass("discussion-edit")) {
                Discussion.edit(e.find(".discussion-content")[0])
            }
        },
        answerQuestion: function D() {
            if (DiscussionNote.checkAndPromptLogin(this, "answer")) {
                return
            }
            var e = Discussion.getParent(Discussion.getParent(this))
            DiscussionReplies.toggle(Discussion.getKey(e))
            DiscussionQuestions.showHiddenAnswers(e.parents(".thread"), true)
        },
        normalFocus: function m() {
            if (DiscussionNote.checkAndPromptLogin(this, "reply", true)) {
                return
            }
            var e = Discussion.getParent(this)
            e.find(".reply-alt-controls").hide()
            e.find(".discussion-text").show().focus()
        },
        normalBlur: function R(e) {
            if (DiscussionReplies._usesReplyAltInterface(e)) {
                e.find(".reply-alt-controls").show()
                e.find(".discussion-text").hide()
            }
        },
        _setPlaceholder: function y(e, s, i) {
            var n = ""
            if (s === "question") {
                if (i) {
                    n = i18n._("Comment on your question...")
                } else {
                    n = i18n._("Suggest a way to improve this question...")
                }
            } else if (s === "comment") {
                if (i) {
                    n = i18n._("Comment on your tip/feedback...")
                } else {
                    n = i18n._("Comment on this tip/feedback...")
                }
            } else if (s === "answer") {
                if (i) {
                    n = i18n._("Comment on your answer...")
                } else {
                    n = i18n._("Comment on this answer...")
                }
            }
            e.attr("placeholder", n).placeholder()
        },
        _usesReplyAltInterface: function v(e) {
            var s = Discussion.getParent(e)
            var i = Discussion.hasAnswered(s)
            var n = Discussion.getParentType(e)
            var t = DiscussionReplies._isOriginalAuthor(s)
            return !!(t && (n === "answer" || n === "question") || n === "question" && !i)
        },
        _getRepliesContainer: function C(e) {
            return Discussion.getFeedbackFromKey(e).find(".replies-container")
        },
        _getToggleButton: function w(e) {
            return Discussion.getFeedbackFromKey(e).find(".toggle-replies")
        },
        getReplyCount: function T(e) {
            return DiscussionReplies._getToggleButton(e).data("replyCount")
        },
        _isOriginalAuthor: function q(e) {
            return e.hasClass("is-author")
        }
    }
    module.exports = DiscussionReplies
});
KAdefine("javascript/discussion-package/discussion-voting.js", function(require, module, exports) {
    var $ = require("jquery")
    var i18n = require("../shared-package/i18n.js")
    var DiscussionNote = require("./discussion-note.js")
    var DiscussionVoting = {
        init: function t(e, o) {
            if (o) {
                return
            }
            e.on("click keyup", ".vote-for-js", DiscussionVoting.voteEntity).on("mouseover focus", ".vote-for-js", DiscussionVoting._activateHover).on("mouseout blur", ".vote-for-js", DiscussionVoting._deactivateHover)
        },
        voteEntity: function e(t) {
            if (t.keyCode) {
                if (t.keyCode !== 13 && t.keyCode !== 32) {
                    return false
                }
            }
            if (DiscussionNote.checkAndPromptLogin(this, "vote")) {
                return false
            }
            var e = $(this)
            var o = e.data("voteType")
            if (!o) {
                return false
            }
            var s = e.data("key")
            if (!s) {
                return false
            }
            var i = e.is(".voted")
            var n = e.parents(".comment, .answer, .question, .scratchpad-vote").first()
            var r = n.find(".sum-votes")
            $.post("/api/internal/discussions/voteentity", {
                entity_key: s,
                vote_type: i ? 0 : o
            }, function(t) {
                DiscussionVoting.finishVoteEntity(t, e, n, r)
            })
            var a = DiscussionVoting.clearVote(e, n, r)
            a += i ? 0 : o
            DiscussionVoting.setVoteCount(n, r, a)
            r.addClass("sum-votes-changed")
            if (!i) {
                e.addClass("voted")
                e.find(".kui-button .label1").text(i18n._("Voted Up!"))
            }
            e.removeClass("vote-hover")
            return false
        },
        _activateHover: function o(t) {
            $(this).addClass("vote-hover")
        },
        _deactivateHover: function s(t) {
            $(this).removeClass("vote-hover")
        },
        setVoteCount: function i(t, e, o) {
            e.html(i18n.ngettext("1 <span class='vote-word'>Vote</span>", "%(num)s <span class='vote-word'>Votes</span>", o))
        },
        clearVote: function n(t, e, o) {
            var s = parseInt(o.text(), 10)
            e.find(".vote-for.voted").each(function() {
                var e = $(this)
                e.removeClass("voted")
                s -= e.data("voteType")
                t.find(".kui-button .label1").text(i18n._("Vote Up"))
            })
            o.removeClass("sum-votes-changed")
            DiscussionVoting.setVoteCount(e, o, s)
            return s
        },
        finishVoteEntity: function r(t, e, o, s) {
            if (t && t.error) {
                DiscussionVoting.clearVote(e, o, s)
                DiscussionNote.showInfo(e.get(0), t.error)
            }
        }
    }
    module.exports = DiscussionVoting
});
KAdefine("javascript/discussion-package/clarifications.js", function(require, module, exports) {
    var $ = require("jquery")
    var React = require("react")
    var ReactDOM = require("react-dom")
    var Discussion = require("./discussion.js")
    var DiscussionClarifications = {
        _tabSelector: ".clarifications-tab",
        _areaMount: null,
        _popupMount: null,
        _renderDeferred: $.Deferred(),
        _official: null,
        _suggested: null,
        _videoModel: null,
        reset: function i() {
            if (!this._loadComplete) {
                return
            }
            if (this._areaMount) {
                ReactDOM.unmountComponentAtNode(this._areaMount)
            }
            if (this._popupMount) {
                ReactDOM.unmountComponentAtNode(this._popupMount)
            }
            this._loadComplete = false
            this._renderDeferred = $.Deferred()
            $(this._containerSelector).html("")
        },
        show: function s() {
            this.load()
            $(this._tabSelector).show()
        },
        hide: function e() {
            $(this._tabSelector).hide()
        },
        load: function a() {
            if (this._loadComplete) {
                Discussion.hideProgressBar()
                return
            }
            this._areaMount = $("<div>").appendTo(".clarifications-tab .clarifications")[0]
            DiscussionClarifications._fetchSuggested()
            $.when(DiscussionClarifications._renderDeferred).done(function() {
                ReactDOM.render(DiscussionClarifications._area, this._areaMount)
                Discussion.hideProgressBar()
                this._loadComplete = true
                var i = DiscussionClarifications._suggested.get(Discussion.data.qaExpandKey)
                if (i) {
                    i.set({
                        highlight: "success",
                        replyCountOpen: true
                    })
                }
            }.bind(this))
        },
        _fetchSuggested: function o() {
            if (!DiscussionClarifications._suggested) {
                this._fetchWhenReady = true
                return
            }

            function i() {
                DiscussionClarifications._renderDeferred.resolve(true)
            }
            DiscussionClarifications._suggested.fetch({
                success: i,
                error: i
            })
        },
        _fetch: function t(i) {
            var s = this
            var e = Discussion.data.focusKind === "article"
            if (i && Discussion.data.focusKind === "video") {
                require.async(["../clarifications-package/models.jsx", "../clarifications-package/official.jsx"], function(e, a) {
                    DiscussionClarifications._videoModel = i
                    DiscussionClarifications._official = new e.OfficialClarificationCollection([], {
                        videoModel: i
                    })
                    DiscussionClarifications._official.fetch()
                    DiscussionClarifications._suggested = new e.SuggestedClarificationCollection([], {
                        videoModel: i
                    })
                    if (Discussion.data.qaExpandKey || s._fetchWhenReady) {
                        DiscussionClarifications._fetchSuggested()
                    }
                    DiscussionClarifications._popupMount = $(".clarifications-container")[0]
                    var o = React.createFactory(a.ClarificationNotifications)
                    var t = o({
                        collection: DiscussionClarifications._official,
                        videoModel: i
                    })
                    ReactDOM.render(t, DiscussionClarifications._popupMount)
                    var c = React.createFactory(a.ClarificationArea)
                    DiscussionClarifications._area = c({
                        videoModel: i,
                        official: DiscussionClarifications._official,
                        suggested: DiscussionClarifications._suggested
                    })
                })
            } else if (e) {
                require.async(["../clarifications-package/models.jsx", "../clarifications-package/official.jsx"], function(i, s) {
                    DiscussionClarifications._suggested = new i.SuggestedClarificationCollection([], {
                        articleId: Discussion.data.focusId
                    })
                    if (Discussion.data.qaExpandKey || this._fetchWhenReady) {
                        DiscussionClarifications._fetchSuggested()
                    }
                    var e = React.createFactory(s.ClarificationArea)
                    DiscussionClarifications._area = e({
                        articleId: Discussion.data.focusId,
                        suggested: DiscussionClarifications._suggested
                    })
                })
            }
        }
    }
    module.exports = DiscussionClarifications
});
KAdefine("javascript/discussion-package/discussion-projectfeedback.js", function(require, module, exports) {
    var $ = require("jquery")
    var React = require("react")
    var ReactDOM = require("react-dom")
    var Discussion = require("./discussion.js")
    var DiscussionProjectFeedback = {
        _loadComplete: false,
        _tabSelector: ".projectfeedback-tab",
        subTab: "projectfeedback",
        _tabHeaderSelector: "#projectfeedback-tab-header",
        _componentMount: null,
        show: function e() {
            this.load()
            $(this._tabSelector).show()
        },
        hide: function t() {
            $(this._tabSelector).hide()
        },
        sort: function a(e) {
            this.sortValue = e
            this.reset()
            this.load(0, this.sortValue)
        },
        shouldShowTab: function c() {
            return this.hasHelpRequests()
        },
        hasEvalRequests: function o() {
            return this._projectFeedback.hasEvalRequests()
        },
        hasPendingEvalRequests: function s() {
            return this._projectFeedback.hasPendingEvalRequests()
        },
        hasHelpRequests: function r() {
            return this._projectFeedback.hasHelpRequests()
        },
        isLoaded: function i() {
            return !!this._projectFeedback.fetchedInitial
        },
        load: function n() {
            if (this._loadComplete) {
                Discussion.hideProgressBar()
                return
            }
            this._projectFeedbackMount = $("<div>").appendTo(".projectfeedback-tab .projectfeedback")[0]
            this._projectEvaluationMount = $("<div>").appendTo(".scratchpad-project-eval-mount")[0]
            if (!this._projectFeedbackMount && !this._projectEvaluationMount) {
                return
            }
            var e = this
            require.async(["../scratchpads-package/scratchpad-ui.js", "../clarifications-package/models.jsx", "../projectfeedback-package/projectfeedback-form.jsx"], function(t, a, c) {
                var o = t.ScratchpadUI
                var s
                if (Discussion.data.expandFeedbackType === "projectfeedback") {
                    s = Discussion.data.qaExpandKey
                }
                e._projectFeedback = new a.DiscussionItemCollection([], {
                    focusKind: "scratchpad",
                    focusId: Discussion.data.focusId,
                    type: "projectfeedback",
                    sortOrder: 2,
                    fetchCount: 100
                })
                if (e._projectEvaluationMount) {
                    var r = React.createFactory(c.ProjectEvaluationArea)
                    e._component = ReactDOM.render(r({
                        scratchpadId: Discussion.data.focusId,
                        isProgramOwner: Discussion.data.isOwner,
                        sendToPeers: o.originScratchpad.get("sendToPeers"),
                        rubric: o.originScratchpad.get("translatedProjectEval"),
                        tips: o.originScratchpad.get("translatedProjectEvalTips"),
                        originTitle: o.originScratchpad.get("translatedTitle"),
                        projectFinished: o.userScratchpad.get("challengeStatus") === 5,
                        collection: e._projectFeedback
                    }), e._projectEvaluationMount)
                }
                if (e._projectFeedbackMount) {
                    var i = React.createFactory(c.ProjectFeedbackArea)
                    e._component = ReactDOM.render(i({
                        scratchpadId: Discussion.data.focusId,
                        expandKey: s,
                        canRequestFeedback: Discussion.data.canRequestFeedback,
                        collection: e._projectFeedback
                    }), e._projectFeedbackMount)
                }
                Discussion.hideProgressBar()
                e._loadComplete = true
            })
        },
        reset: function d() {
            this._loadComplete = false
            $(this._containerSelector).html("")
        }
    }
    module.exports = DiscussionProjectFeedback
});
KAdefine("javascript/discussion-package/note.handlebars", function(require, module, exports) {
    require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
    var absoluteLinks = require("../shared-package/absolute-links.js")
    var template = Handlebars.template(function(e, n, i, l, a) {
        i = i || e.helpers
        var o = "",
            r, s, t, p, f = this,
            c = "function",
            u = i.helperMissing,
            h = void 0,
            g = this.escapeExpression,
            d = i.blockHelperMissing

        function v(e, n) {
            var l = "",
                a, o
            l += '\n        <a class="login-link" href="'
            t = i.loginContinueUrl
            a = t || e.loginContinueUrl
            t = i.toLoginRedirectHref
            o = t || e.toLoginRedirectHref
            if (typeof o === c) {
                a = o.call(e, a, {
                    hash: {}
                })
            } else if (o === h) {
                a = u.call(e, "toLoginRedirectHref", a, {
                    hash: {}
                })
            } else {
                a = o
            }
            l += g(a) + '">'
            t = i["_"]
            a = t || e["_"]
            p = f.program(2, m, n)
            p.hash = {}
            p.fn = p
            p.inverse = f.noop
            if (t && typeof a === c) {
                a = a.call(e, p)
            } else {
                a = d.call(e, a, p)
            }
            if (a || a === 0) {
                l += a
            }
            l += "</a>\n    "
            return l
        }

        function m(e, n) {
            return "Log in first"
        }

        function k(e, n) {
            return "Close"
        }
        o += '<div class="note">\n    '
        t = i.loginContinueUrl
        r = t || n.loginContinueUrl
        s = i["if"]
        p = f.program(1, v, a)
        p.hash = {}
        p.fn = p
        p.inverse = f.noop
        r = s.call(n, r, p)
        if (r || r === 0) {
            o += r
        }
        o += '\n\n    <span class="note-description"></span>\n    <a href="javascript:void(0);" class="close-note">'
        t = i["_"]
        r = t || n["_"]
        p = f.program(4, k, a)
        p.hash = {}
        p.fn = p
        p.inverse = f.noop
        if (t && typeof r === c) {
            r = r.call(n, p)
        } else {
            r = d.call(n, r, p)
        }
        if (r || r === 0) {
            o += r
        }
        o += "</a>\n</div>\n"
        return o
    })

    function wrapped_template(e, n) {
        return absoluteLinks.makeHtmlLinksSafe(template(e, n))
    }
    module.exports = wrapped_template
});
KAdefine("javascript/discussion-package/discussion-note.js", function(require, module, exports) {
    var $ = require("jquery")
    var _ = require("underscore")
    require("../shared-package/i18n.js")
    var KA = require("../shared-package/ka.js")
    var launchSignupInModal = require("../signup-link-package/launch-signup-in-modal.js")
    var DiscussionNote = {
        template_: require("./note.handlebars"),
        $notes_: $([]),
        init: function e() {},
        checkAndPromptLogin: function t(e, n, o) {
            var i = KA.getUserProfile(),
                r = i && !i.isPhantom()
            if (r) {
                return false
            } else {
                setTimeout(function() {
                    if (o) {
                        document.activeElement.blur()
                    }
                    launchSignupInModal()
                }, 0)
                return true
            }
        },
        showInfo: function n(e, t) {
            this.show_(e, t, false)
        },
        closeAll: function o() {
            this.$notes_.remove()
            this.$notes_ = $([])
        },
        close_: function i(e) {
            var t = $(e.target).parents(".note")
            t.remove()
            this.$notes_ = this.$notes_.not(t)
            return false
        },
        show_: function r(e, t, n, o) {
            if (!e) {
                return
            }
            var i = $(e),
                r = i.offset()
            var s = null
            if (n) {
                s = window.location.pathname + window.location.search
            }
            var u = $(this.template_({
                loginContinueUrl: s
            })).find(".note-description").text(t).end().on("click", ".close-note", this.close_).appendTo("body")
            u.css({
                left: r.left + i.outerWidth(true) / 2 - u.outerWidth(true) / 2,
                top: r.top + i.outerHeight(true) / 2 - u.outerHeight(true) / 2
            })
            this.$notes_ = this.$notes_.add(u)
            if (o) {
                o()
            }
        }
    }
    _.bindAll(DiscussionNote)
    module.exports = DiscussionNote
});
KAdefine("javascript/discussion-package/discussion-profilepromo.js", function(require, module, exports) {
    var _ = require("underscore")
    var KA = require("../shared-package/ka.js")
    var Promos = require("../promos-package/promos.js")
    var DiscussionProfilePromo = {
        name_: "visit_profile_after_post",
        shouldShow_: false,
        check: function o() {
            Promos.hasUserSeen(this.name_, function(o) {
                this.shouldShow_ = !o
            }, this)
        },
        show: function e(o, s) {
            if (this.shouldShow_) {
                _.extend(o, {
                    showProfilePromo: true,
                    profileRoot: KA.getUserProfile().get("profileRoot"),
                    askedQuestion: s
                })
                Promos.markAsSeen(this.name_)
            }
        }
    }
    module.exports = DiscussionProfilePromo
});



/***********************************************************************************************
 *
 *
 * This is what we're after, the low-quality-notice.js.
 *
 *
************************************************************************************************/



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
KAdefine("javascript/discussion-package/thread.handlebars", function(require, module, exports) {
    require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
    var absoluteLinks = require("../shared-package/absolute-links.js")
    var template = Handlebars.template(function(n, s, a, e, r) {
        a = a || n.helpers
        e = e || n.partials
        var i = "",
            o, t, l, h, u = this,
            f = "function",
            c = a.helperMissing,
            p = void 0,
            d = this.escapeExpression,
            w = a.blockHelperMissing

        function v(n, s) {
            return " has-answered"
        }

        function m(n, s) {
            return "highlight success-highlight"
        }

        function g(n, s) {
            var e = "",
                r
            e += '\n     data-focus-kind="'
            l = a.focus
            r = l || n.focus
            r = r === null || r === undefined || r === false ? r : r.kind
            if (typeof r === f) {
                r = r.call(n, {
                    hash: {}
                })
            } else if (r === p) {
                r = c.call(n, "focus.kind", {
                    hash: {}
                })
            }
            e += d(r) + '"\n     data-focus-id="'
            l = a.focus
            r = l || n.focus
            r = r === null || r === undefined || r === false ? r : r.id
            if (typeof r === f) {
                r = r.call(n, {
                    hash: {}
                })
            } else if (r === p) {
                r = c.call(n, "focus.id", {
                    hash: {}
                })
            }
            e += d(r) + '"\n     '
            return e
        }

        function k(n, s) {
            var e = "",
                r, i
            e += '\n        <div class="answers '
            l = a.expandedAnswers
            r = l || n.expandedAnswers
            i = a.unless
            h = u.program(8, y, s)
            h.hash = {}
            h.fn = h
            h.inverse = u.noop
            r = i.call(n, r, h)
            if (r || r === 0) {
                e += r
            }
            e += '">\n            '
            l = a.expandedAnswers
            r = l || n.expandedAnswers
            i = a.each
            h = u.program(10, A, s)
            h.hash = {}
            h.fn = h
            h.inverse = u.noop
            r = i.call(n, r, h)
            if (r || r === 0) {
                e += r
            }
            e += "\n\n            "
            l = a.hasHiddenAnswers
            r = l || n.hasHiddenAnswers
            i = a["if"]
            h = u.program(12, C, s)
            h.hash = {}
            h.fn = h
            h.inverse = u.noop
            r = i.call(n, r, h)
            if (r || r === 0) {
                e += r
            }
            e += "\n        </div>\n\n        "
            l = a.showAuthorControls
            r = l || n.showAuthorControls
            i = a.unless
            h = u.program(29, M, s)
            h.hash = {}
            h.fn = h
            h.inverse = u.noop
            r = i.call(n, r, h)
            if (r || r === 0) {
                e += r
            }
            e += "\n    "
            return e
        }

        function y(n, s) {
            return " with-no-answers"
        }

        function A(n, s) {
            var r = "",
                i
            r += "\n                "
            i = n
            i = u.invokePartial(e.discussion_answer, "discussion_answer", i, a, e)
            if (i || i === 0) {
                r += i
            }
            r += "\n            "
            return r
        }

        function C(n, s) {
            var e = "",
                r, i
            e += '\n                <div class="show-answer-links">\n                    <a href="javascript:void(0);" class="show-hidden-answers">\n                        '
            l = a.authorNickname
            r = l || n.authorNickname
            i = a["if"]
            h = u.program(13, _, s)
            h.hash = {}
            h.fn = h
            h.inverse = u.program(18, H, s)
            r = i.call(n, r, h)
            if (r || r === 0) {
                e += r
            }
            e += "\n                    </a>\n                    "
            l = a.showAuthorControls
            r = l || n.showAuthorControls
            i = a.unless
            h = u.program(23, S, s)
            h.hash = {}
            h.fn = h
            h.inverse = u.noop
            r = i.call(n, r, h)
            if (r || r === 0) {
                e += r
            }
            e += '\n                </a>\n                </div>\n                <div class="hidden-answers" style="display: none">\n                    '
            l = a.answers
            r = l || n.answers
            i = a.each
            h = u.program(27, L, s)
            h.hash = {}
            h.fn = h
            h.inverse = u.noop
            r = i.call(n, r, h)
            if (r || r === 0) {
                e += r
            }
            e += "\n                </div>\n            "
            return e
        }

        function _(n, s) {
            var e = "",
                r, i
            e += "\n                            "
            l = a.answerCount
            r = l || n.answerCount
            l = a.ngettext
            i = l || n.ngettext
            h = u.program(14, P, s)
            h.hash = {}
            h.fn = h
            h.inverse = u.program(16, x, s)
            if (l && typeof i === f) {
                r = i.call(n, r, h)
            } else {
                r = w.call(n, i, r, h)
            }
            if (r || r === 0) {
                e += r
            }
            e += "\n                        "
            return e
        }

        function P(n, s) {
            var e = "",
                r
            e += '\n                                <span aria-hidden="true">Show answer</span>\n                                <span class="sr-only">Show the answer to '
            l = a.authorNickname
            r = l || n.authorNickname
            if (typeof r === f) {
                r = r.call(n, {
                    hash: {}
                })
            } else if (r === p) {
                r = c.call(n, "authorNickname", {
                    hash: {}
                })
            }
            e += d(r) + "'s question</span>\n                            "
            return e
        }

        function x(n, s) {
            var e = "",
                r
            e += "\n                                Show all "
            l = a.answerCount
            r = l || n.answerCount
            if (typeof r === f) {
                r = r.call(n, {
                    hash: {}
                })
            } else if (r === p) {
                r = c.call(n, "answerCount", {
                    hash: {}
                })
            }
            e += d(r) + ' answers <span class="sr-only">to '
            l = a.authorNickname
            r = l || n.authorNickname
            if (typeof r === f) {
                r = r.call(n, {
                    hash: {}
                })
            } else if (r === p) {
                r = c.call(n, "authorNickname", {
                    hash: {}
                })
            }
            e += d(r) + "'s question</span>\n                            "
            return e
        }

        function H(n, s) {
            var e = "",
                r, i
            e += "\n                            "
            l = a.answerCount
            r = l || n.answerCount
            l = a.ngettext
            i = l || n.ngettext
            h = u.program(19, q, s)
            h.hash = {}
            h.fn = h
            h.inverse = u.program(21, N, s)
            if (l && typeof i === f) {
                r = i.call(n, r, h)
            } else {
                r = w.call(n, i, r, h)
            }
            if (r || r === 0) {
                e += r
            }
            e += "\n                        "
            return e
        }

        function q(n, s) {
            return '\n                                <span aria-hidden="true">Show answer</span>\n                                <span class="sr-only">Show the answer to this question</span>\n                            '
        }

        function N(n, s) {
            var e = "",
                r
            e += "\n                                Show all "
            l = a.answerCount
            r = l || n.answerCount
            if (typeof r === f) {
                r = r.call(n, {
                    hash: {}
                })
            } else if (r === p) {
                r = c.call(n, "answerCount", {
                    hash: {}
                })
            }
            e += d(r) + ' answers <span class="sr-only">to this question</span>\n                            '
            return e
        }

        function S(n, s) {
            var e = "",
                r, i
            e += "\n                        "
            l = a.restrictPosting
            r = l || n.restrictPosting
            i = a.unless
            h = u.program(24, b, s)
            h.hash = {}
            h.fn = h
            h.inverse = u.noop
            r = i.call(n, r, h)
            if (r || r === 0) {
                e += r
            }
            e += "\n                    "
            return e
        }

        function b(n, s) {
            var r = "",
                i
            r += "\n                            "
            i = n
            i = u.invokePartial(e["discussion_meta-separator"], "discussion_meta-separator", i, a, e)
            if (i || i === 0) {
                r += i
            }
            r += '\n                            <a href="javascript:void(0);" class="show-answer-form">\n                                '
            l = a["_"]
            i = l || n["_"]
            h = u.program(25, j, s)
            h.hash = {}
            h.fn = h
            h.inverse = u.noop
            if (l && typeof i === f) {
                i = i.call(n, h)
            } else {
                i = w.call(n, i, h)
            }
            if (i || i === 0) {
                r += i
            }
            r += "\n                            </a>\n                        "
            return r
        }

        function j(n, s) {
            return "Answer this question"
        }

        function L(n, s) {
            var r = "",
                i
            r += "\n                        "
            i = n
            i = u.invokePartial(e.discussion_answer, "discussion_answer", i, a, e)
            if (i || i === 0) {
                r += i
            }
            r += "\n                    "
            return r
        }

        function M(n, s) {
            var e = "",
                r, i
            e += "\n            "
            l = a.restrictPosting
            r = l || n.restrictPosting
            i = a.unless
            h = u.program(30, U, s)
            h.hash = {}
            h.fn = h
            h.inverse = u.noop
            r = i.call(n, r, h)
            if (r || r === 0) {
                e += r
            }
            e += "\n        "
            return e
        }

        function U(n, s) {
            var r = "",
                i, o
            r += "\n                "
            l = a.hasHiddenAnswers
            i = l || n.hasHiddenAnswers
            o = a["if"]
            h = u.program(31, E, s)
            h.hash = {}
            h.fn = h
            h.inverse = u.program(33, z, s)
            i = o.call(n, i, h)
            if (i || i === 0) {
                r += i
            }
            r += "\n                "
            i = n
            i = u.invokePartial(e["discussion_answer-form"], "discussion_answer-form", i, a, e)
            if (i || i === 0) {
                r += i
            }
            r += "\n                </div>\n            "
            return r
        }

        function E(n, s) {
            return '\n                    <div class="add-answer" style="display: none">\n                '
        }

        function z(n, s) {
            return '\n                    <div class="add-answer">\n                '
        }
        i += '<div class="thread'
        l = a.hasAnswered
        o = l || s.hasAnswered
        t = a["if"]
        h = u.program(1, v, r)
        h.hash = {}
        h.fn = h
        h.inverse = u.noop
        o = t.call(s, o, h)
        if (o || o === 0) {
            i += o
        }
        i += " "
        l = a.shouldHighlight
        o = l || s.shouldHighlight
        t = a["if"]
        h = u.program(3, m, r)
        h.hash = {}
        h.fn = h
        h.inverse = u.noop
        o = t.call(s, o, h)
        if (o || o === 0) {
            i += o
        }
        i += '"\n     '
        l = a.focus
        o = l || s.focus
        t = a["if"]
        h = u.program(5, g, r)
        h.hash = {}
        h.fn = h
        h.inverse = u.noop
        o = t.call(s, o, h)
        if (o || o === 0) {
            i += o
        }
        i += ">\n    "
        o = s
        o = u.invokePartial(e.discussion_question, "discussion_question", o, a, e)
        if (o || o === 0) {
            i += o
        }
        i += "\n\n    "
        l = a.inUserProfile
        o = l || s.inUserProfile
        t = a.unless
        h = u.program(7, k, r)
        h.hash = {}
        h.fn = h
        h.inverse = u.noop
        o = t.call(s, o, h)
        if (o || o === 0) {
            i += o
        }
        i += "\n</div>\n\n"
        return i
    })

    function wrapped_template(n, s) {
        return absoluteLinks.makeHtmlLinksSafe(template(n, s))
    }
    module.exports = wrapped_template
});
KAdefine("javascript/discussion-package/question.handlebars", function(require, module, exports) {
    require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
    var absoluteLinks = require("../shared-package/absolute-links.js")
    var template = Handlebars.template(function(e, n, s, i, a) {
        s = s || e.helpers
        i = i || e.partials
        var l = "",
            o, r, t, f, c, p = this,
            u = "function",
            h = s.helperMissing,
            d = void 0,
            v = this.escapeExpression,
            m = s.blockHelperMissing

        function k(e, n) {
            return "deleted"
        }

        function y(e, n) {
            return " context-link"
        }

        function g(e, n) {
            return " is-author"
        }

        function _(e, n) {
            var i = "",
                a
            i += '\n        <a href="'
            f = s.focus
            a = f || e.focus
            a = a === null || a === undefined || a === false ? a : a.relativeUrl
            if (typeof a === u) {
                a = a.call(e, {
                    hash: {}
                })
            } else if (a === d) {
                a = h.call(e, "focus.relativeUrl", {
                    hash: {}
                })
            }
            i += v(a) + "?qa_expand_key="
            f = s.key
            a = f || e.key
            if (typeof a === u) {
                a = a.call(e, {
                    hash: {}
                })
            } else if (a === d) {
                a = h.call(e, "key", {
                    hash: {}
                })
            }
            i += v(a) + '" class="covering-link">\n            <span class="sr-only">'
            f = s["_"]
            a = f || e["_"]
            c = p.program(8, P, n)
            c.hash = {}
            c.fn = c
            c.inverse = p.noop
            if (f && typeof a === u) {
                a = a.call(e, c)
            } else {
                a = m.call(e, a, c)
            }
            if (a || a === 0) {
                i += a
            }
            i += "</span>\n        </a>\n    "
            return i
        }

        function P(e, n) {
            return "View this question"
        }

        function b(e, n) {
            var i, a, l, o
            i = "form-controls"
            a = "discussion"
            l = {}
            o = "Edit this question"
            l["label"] = o
            f = s.invokePartial
            o = f || e.invokePartial
            c = p.program(11, w, n)
            c.hash = l
            c.fn = c
            c.inverse = p.noop
            if (f && typeof o === u) {
                i = o.call(e, a, i, c)
            } else {
                i = m.call(e, o, a, i, c)
            }
            if (i || i === 0) {
                return i
            } else {
                return ""
            }
        }

        function w(e, n) {
            var s = ""
            return s
        }
        l += '<div class="question '
        f = s.appearsAsDeleted
        o = f || n.appearsAsDeleted
        r = s["if"]
        c = p.program(1, k, a)
        c.hash = {}
        c.fn = c
        c.inverse = p.noop
        o = r.call(n, o, c)
        if (o || o === 0) {
            l += o
        }
        l += " discussion-item"
        f = s.inUserProfile
        o = f || n.inUserProfile
        r = s["if"]
        c = p.program(3, y, a)
        c.hash = {}
        c.fn = c
        c.inverse = p.noop
        o = r.call(n, o, c)
        if (o || o === 0) {
            l += o
        }
        f = s.showAuthorControls
        o = f || n.showAuthorControls
        r = s["if"]
        c = p.program(5, g, a)
        c.hash = {}
        c.fn = c
        c.inverse = p.noop
        o = r.call(n, o, c)
        if (o || o === 0) {
            l += o
        }
        l += '"\n     id="'
        f = s.key
        o = f || n.key
        if (typeof o === u) {
            o = o.call(n, {
                hash: {}
            })
        } else if (o === d) {
            o = h.call(n, "key", {
                hash: {}
            })
        }
        l += v(o) + '">\n\n    '
        f = s.inUserProfile
        o = f || n.inUserProfile
        r = s["if"]
        c = p.program(7, _, a)
        c.hash = {}
        c.fn = c
        c.inverse = p.noop
        o = r.call(n, o, c)
        if (o || o === 0) {
            l += o
        }
        l += '\n\n    <div class="discussion-content">\n        '
        f = s.content
        o = f || n.content
        r = {}
        t = 1
        r["nofollow"] = t
        f = s.formatContent
        t = f || n.formatContent
        c = {}
        c.hash = r
        if (typeof t === u) {
            o = t.call(n, o, c)
        } else if (t === d) {
            o = h.call(n, "formatContent", o, c)
        } else {
            o = t
        }
        l += v(o) + "\n    </div>\n\n    "
        o = n
        o = p.invokePartial(i["discussion_discussion-meta"], "discussion_discussion-meta", o, s, i)
        if (o || o === 0) {
            l += o
        }
        l += "\n\n    "
        f = s["_"]
        o = f || n["_"]
        c = p.program(10, b, a)
        c.hash = {}
        c.fn = c
        c.inverse = p.noop
        if (f && typeof o === u) {
            o = o.call(n, c)
        } else {
            o = m.call(n, o, c)
        }
        if (o || o === 0) {
            l += o
        }
        l += "\n</div>\n"
        return l
    })

    function wrapped_template(e, n) {
        return absoluteLinks.makeHtmlLinksSafe(template(e, n))
    }
    module.exports = wrapped_template
});
KAdefine("javascript/discussion-package/answer.handlebars", function(require, module, exports) {
    require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
    var absoluteLinks = require("../shared-package/absolute-links.js")
    var template = Handlebars.template(function(e, n, s, i, a) {
        s = s || e.helpers
        i = i || e.partials
        var o = "",
            r, l, t, f, u = this,
            c = "function",
            h = s.helperMissing,
            d = void 0,
            p = this.escapeExpression,
            m = s.blockHelperMissing

        function v(e, n) {
            return "deleted"
        }

        function y(e, n) {
            return " context-link"
        }

        function q(e, n) {
            return " is-author"
        }

        function g(e, n) {
            var i = "",
                a
            i += 'data-question-key="'
            t = s.questionKey
            a = t || e.questionKey
            if (typeof a === c) {
                a = a.call(e, {
                    hash: {}
                })
            } else if (a === d) {
                a = h.call(e, "questionKey", {
                    hash: {}
                })
            }
            i += p(a) + '"'
            return i
        }

        function k(e, n) {
            var i = "",
                a, o
            i += "\n        "
            t = s.question
            a = t || e.question
            a = a === null || a === undefined || a === false ? a : a.focus
            a = a === null || a === undefined || a === false ? a : a.relativeUrl
            o = s["if"]
            f = u.program(10, b, n)
            f.hash = {}
            f.fn = f
            f.inverse = u.noop
            a = o.call(e, a, f)
            if (a || a === 0) {
                i += a
            }
            i += '\n\n        <div class="discussion-question-title discussion-light">\n            '
            t = s.question
            a = t || e.question
            a = a === null || a === undefined || a === false ? a : a.content
            t = s.formatContent
            o = t || e.formatContent
            if (typeof o === c) {
                a = o.call(e, a, {
                    hash: {}
                })
            } else if (o === d) {
                a = h.call(e, "formatContent", a, {
                    hash: {}
                })
            } else {
                a = o
            }
            i += p(a) + '\n        </div>\n        <div class="discussion-indent">\n    '
            return i
        }

        function b(e, n) {
            var i = "",
                a
            i += '\n            <a href="'
            t = s.question
            a = t || e.question
            a = a === null || a === undefined || a === false ? a : a.focus
            a = a === null || a === undefined || a === false ? a : a.relativeUrl
            if (typeof a === c) {
                a = a.call(e, {
                    hash: {}
                })
            } else if (a === d) {
                a = h.call(e, "question.focus.relativeUrl", {
                    hash: {}
                })
            }
            i += p(a) + "?qa_expand_key="
            t = s.question
            a = t || e.question
            a = a === null || a === undefined || a === false ? a : a.key
            if (typeof a === c) {
                a = a.call(e, {
                    hash: {}
                })
            } else if (a === d) {
                a = h.call(e, "question.key", {
                    hash: {}
                })
            }
            i += p(a) + '"\n                class="covering-link"\n                data-feedback-type="answer"\n                data-votes="'
            t = s.sumVotesIncremented
            a = t || e.sumVotesIncremented
            if (typeof a === c) {
                a = a.call(e, {
                    hash: {}
                })
            } else if (a === d) {
                a = h.call(e, "sumVotesIncremented", {
                    hash: {}
                })
            }
            i += p(a) + '">\n                <span class="sr-only">\n                    '
            t = s["_"]
            a = t || e["_"]
            f = u.program(11, w, n)
            f.hash = {}
            f.fn = f
            f.inverse = u.noop
            if (t && typeof a === c) {
                a = a.call(e, f)
            } else {
                a = m.call(e, a, f)
            }
            if (a || a === 0) {
                i += a
            }
            i += "\n                </span>\n            </a>\n        "
            return i
        }

        function w(e, n) {
            var i = "",
                a
            i += "View this question by "
            t = s.question
            a = t || e.question
            a = a === null || a === undefined || a === false ? a : a.authorNickname
            if (typeof a === c) {
                a = a.call(e, {
                    hash: {}
                })
            } else if (a === d) {
                a = h.call(e, "question.authorNickname", {
                    hash: {}
                })
            }
            i += p(a)
            return i
        }

        function _(e, n) {
            return '\n        <div class="item-separator"></div>\n    '
        }

        function A(e, n) {
            var i = "",
                a
            i += '\n        <strong class="from-video-author">'
            t = s["_"]
            a = t || e["_"]
            f = u.program(16, V, n)
            f.hash = {}
            f.fn = f
            f.inverse = u.noop
            if (t && typeof a === c) {
                a = a.call(e, f)
            } else {
                a = m.call(e, a, f)
            }
            if (a || a === 0) {
                i += a
            }
            i += "</strong>\n        <br>\n    "
            return i
        }

        function V(e, n) {
            return "From the author:"
        }

        function U(e, n) {
            var i = "",
                a, o
            i += "\n            "
            t = s.content
            a = t || e.content
            t = s.formatEvalAnswer
            o = t || e.formatEvalAnswer
            if (typeof o === c) {
                a = o.call(e, a, {
                    hash: {}
                })
            } else if (o === d) {
                a = h.call(e, "formatEvalAnswer", a, {
                    hash: {}
                })
            } else {
                a = o
            }
            i += p(a) + "\n        "
            return i
        }

        function C(e, n) {
            var i = "",
                a, o, r
            i += "\n            "
            t = s.content
            a = t || e.content
            o = {}
            r = 1
            o["nofollow"] = r
            t = s.formatContent
            r = t || e.formatContent
            f = {}
            f.hash = o
            if (typeof r === c) {
                a = r.call(e, a, f)
            } else if (r === d) {
                a = h.call(e, "formatContent", a, f)
            } else {
                a = r
            }
            i += p(a) + "\n        "
            return i
        }

        function E(e, n) {
            var i = "",
                a
            i += '\n    <div class="discussion-embed-video">\n        <iframe width="488" height="275" src="'
            t = s.embedVideoUrl
            a = t || e.embedVideoUrl
            if (typeof a === c) {
                a = a.call(e, {
                    hash: {}
                })
            } else if (a === d) {
                a = h.call(e, "embedVideoUrl", {
                    hash: {}
                })
            }
            i += p(a) + '?modestbranding=1;rel=0;fs=1" frameborder="0" allowfullscreen></iframe>\n    </div>\n    '
            return i
        }

        function P(e, n) {
            var i, a, o, r
            i = "form-controls"
            a = "discussion"
            o = {}
            r = "Edit this answer"
            o["label"] = r
            t = s.invokePartial
            r = t || e.invokePartial
            f = u.program(25, K, n)
            f.hash = o
            f.fn = f
            f.inverse = u.noop
            if (t && typeof r === c) {
                i = r.call(e, a, i, f)
            } else {
                i = m.call(e, r, a, i, f)
            }
            if (i || i === 0) {
                return i
            } else {
                return ""
            }
        }

        function K(e, n) {
            var s = ""
            return s
        }

        function x(e, n) {
            return "\n        </div>\n    "
        }
        o += '<div class="answer '
        t = s.appearsAsDeleted
        r = t || n.appearsAsDeleted
        l = s["if"]
        f = u.program(1, v, a)
        f.hash = {}
        f.fn = f
        f.inverse = u.noop
        r = l.call(n, r, f)
        if (r || r === 0) {
            o += r
        }
        o += " discussion-item"
        t = s.inUserProfile
        r = t || n.inUserProfile
        l = s["if"]
        f = u.program(3, y, a)
        f.hash = {}
        f.fn = f
        f.inverse = u.noop
        r = l.call(n, r, f)
        if (r || r === 0) {
            o += r
        }
        t = s.showAuthorControls
        r = t || n.showAuthorControls
        l = s["if"]
        f = u.program(5, q, a)
        f.hash = {}
        f.fn = f
        f.inverse = u.noop
        r = l.call(n, r, f)
        if (r || r === 0) {
            o += r
        }
        o += '"\n     '
        t = s.questionKey
        r = t || n.questionKey
        l = s["if"]
        f = u.program(7, g, a)
        f.hash = {}
        f.fn = f
        f.inverse = u.noop
        r = l.call(n, r, f)
        if (r || r === 0) {
            o += r
        }
        o += '\n     id="'
        t = s.key
        r = t || n.key
        if (typeof r === c) {
            r = r.call(n, {
                hash: {}
            })
        } else if (r === d) {
            r = h.call(n, "key", {
                hash: {}
            })
        }
        o += p(r) + '">\n\n    '
        t = s.question
        r = t || n.question
        l = s["if"]
        f = u.program(9, k, a)
        f.hash = {}
        f.fn = f
        f.inverse = u.program(13, _, a)
        r = l.call(n, r, f)
        if (r || r === 0) {
            o += r
        }
        o += "\n\n    "
        t = s.fromVideoAuthor
        r = t || n.fromVideoAuthor
        l = s["if"]
        f = u.program(15, A, a)
        f.hash = {}
        f.fn = f
        f.inverse = u.noop
        r = l.call(n, r, f)
        if (r || r === 0) {
            o += r
        }
        o += '\n\n    <div class="discussion-content">\n        '
        t = s.isProjectEvalAnswer
        r = t || n.isProjectEvalAnswer
        l = s["if"]
        f = u.program(18, U, a)
        f.hash = {}
        f.fn = f
        f.inverse = u.program(20, C, a)
        r = l.call(n, r, f)
        if (r || r === 0) {
            o += r
        }
        o += "\n    </div>\n\n    "
        t = s.embedVideoUrl
        r = t || n.embedVideoUrl
        l = s["if"]
        f = u.program(22, E, a)
        f.hash = {}
        f.fn = f
        f.inverse = u.noop
        r = l.call(n, r, f)
        if (r || r === 0) {
            o += r
        }
        o += "\n\n    "
        r = n
        r = u.invokePartial(i["discussion_discussion-meta"], "discussion_discussion-meta", r, s, i)
        if (r || r === 0) {
            o += r
        }
        o += "\n\n    "
        t = s["_"]
        r = t || n["_"]
        f = u.program(24, P, a)
        f.hash = {}
        f.fn = f
        f.inverse = u.noop
        if (t && typeof r === c) {
            r = r.call(n, f)
        } else {
            r = m.call(n, r, f)
        }
        if (r || r === 0) {
            o += r
        }
        o += "\n\n    "
        t = s.question
        r = t || n.question
        l = s["if"]
        f = u.program(27, x, a)
        f.hash = {}
        f.fn = f
        f.inverse = u.noop
        r = l.call(n, r, f)
        if (r || r === 0) {
            o += r
        }
        o += "\n</div>\n"
        return o
    })

    function wrapped_template(e, n) {
        return absoluteLinks.makeHtmlLinksSafe(template(e, n))
    }
    module.exports = wrapped_template
});
KAdefine("javascript/discussion-package/comment.handlebars", function(require, module, exports) {
    require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
    var absoluteLinks = require("../shared-package/absolute-links.js")
    var template = Handlebars.template(function(e, n, s, a, i) {
        s = s || e.helpers
        a = a || e.partials
        var l = "",
            o, r, t, f, c, u = this,
            h = "function",
            p = s.helperMissing,
            d = void 0,
            m = this.escapeExpression,
            v = s.blockHelperMissing

        function k(e, n) {
            return "deleted"
        }

        function y(e, n) {
            return " context-link"
        }

        function g(e, n) {
            return " is-author"
        }

        function _(e, n) {
            var a = "",
                i
            a += 'data-focus-kind="'
            f = s.focus
            i = f || e.focus
            i = i === null || i === undefined || i === false ? i : i.kind
            if (typeof i === h) {
                i = i.call(e, {
                    hash: {}
                })
            } else if (i === d) {
                i = p.call(e, "focus.kind", {
                    hash: {}
                })
            }
            a += m(i) + '" data-focus-id="'
            f = s.focus
            i = f || e.focus
            i = i === null || i === undefined || i === false ? i : i.id
            if (typeof i === h) {
                i = i.call(e, {
                    hash: {}
                })
            } else if (i === d) {
                i = p.call(e, "focus.id", {
                    hash: {}
                })
            }
            a += m(i) + '"'
            return a
        }

        function b(e, n) {
            var a = "",
                i
            a += '\n        <a href="'
            f = s.focus
            i = f || e.focus
            i = i === null || i === undefined || i === false ? i : i.relativeUrl
            if (typeof i === h) {
                i = i.call(e, {
                    hash: {}
                })
            } else if (i === d) {
                i = p.call(e, "focus.relativeUrl", {
                    hash: {}
                })
            }
            a += m(i) + "?qa_expand_key="
            f = s.key
            i = f || e.key
            if (typeof i === h) {
                i = i.call(e, {
                    hash: {}
                })
            } else if (i === d) {
                i = p.call(e, "key", {
                    hash: {}
                })
            }
            a += m(i) + '" class="covering-link">\n            <span class="sr-only">'
            f = s["_"]
            i = f || e["_"]
            c = u.program(10, P, n)
            c.hash = {}
            c.fn = c
            c.inverse = u.noop
            if (f && typeof i === h) {
                i = i.call(e, c)
            } else {
                i = v.call(e, i, c)
            }
            if (i || i === 0) {
                a += i
            }
            a += "</span>\n        </a>\n    "
            return a
        }

        function P(e, n) {
            return "View this comment"
        }

        function w(e, n) {
            var a, i, l, o
            a = "form-controls"
            i = "discussion"
            l = {}
            o = "Edit this feedback"
            l["label"] = o
            f = s.invokePartial
            o = f || e.invokePartial
            c = u.program(13, U, n)
            c.hash = l
            c.fn = c
            c.inverse = u.noop
            if (f && typeof o === h) {
                a = o.call(e, i, a, c)
            } else {
                a = v.call(e, o, i, a, c)
            }
            if (a || a === 0) {
                return a
            } else {
                return ""
            }
        }

        function U(e, n) {
            var s = ""
            return s
        }
        l += '<div class="comment '
        f = s.appearsAsDeleted
        o = f || n.appearsAsDeleted
        r = s["if"]
        c = u.program(1, k, i)
        c.hash = {}
        c.fn = c
        c.inverse = u.noop
        o = r.call(n, o, c)
        if (o || o === 0) {
            l += o
        }
        l += " discussion-item"
        f = s.inUserProfile
        o = f || n.inUserProfile
        r = s["if"]
        c = u.program(3, y, i)
        c.hash = {}
        c.fn = c
        c.inverse = u.noop
        o = r.call(n, o, c)
        if (o || o === 0) {
            l += o
        }
        f = s.showAuthorControls
        o = f || n.showAuthorControls
        r = s["if"]
        c = u.program(5, g, i)
        c.hash = {}
        c.fn = c
        c.inverse = u.noop
        o = r.call(n, o, c)
        if (o || o === 0) {
            l += o
        }
        l += '" id="'
        f = s.key
        o = f || n.key
        if (typeof o === h) {
            o = o.call(n, {
                hash: {}
            })
        } else if (o === d) {
            o = p.call(n, "key", {
                hash: {}
            })
        }
        l += m(o) + '"\n     data-key="'
        f = s.key
        o = f || n.key
        if (typeof o === h) {
            o = o.call(n, {
                hash: {}
            })
        } else if (o === d) {
            o = p.call(n, "key", {
                hash: {}
            })
        }
        l += m(o) + '"\n     '
        f = s.focus
        o = f || n.focus
        r = s["if"]
        c = u.program(7, _, i)
        c.hash = {}
        c.fn = c
        c.inverse = u.noop
        o = r.call(n, o, c)
        if (o || o === 0) {
            l += o
        }
        l += '>\n\n    <div class="item-separator"></div>\n    '
        f = s.inUserProfile
        o = f || n.inUserProfile
        r = s["if"]
        c = u.program(9, b, i)
        c.hash = {}
        c.fn = c
        c.inverse = u.noop
        o = r.call(n, o, c)
        if (o || o === 0) {
            l += o
        }
        l += '\n\n    <div class="discussion-content">\n        '
        f = s.content
        o = f || n.content
        r = {}
        t = 1
        r["nofollow"] = t
        f = s.formatContent
        t = f || n.formatContent
        c = {}
        c.hash = r
        if (typeof t === h) {
            o = t.call(n, o, c)
        } else if (t === d) {
            o = p.call(n, "formatContent", o, c)
        } else {
            o = t
        }
        l += m(o) + "\n    </div>\n\n    "
        o = n
        o = u.invokePartial(a["discussion_discussion-meta"], "discussion_discussion-meta", o, s, a)
        if (o || o === 0) {
            l += o
        }
        l += "\n\n    "
        f = s["_"]
        o = f || n["_"]
        c = u.program(12, w, i)
        c.hash = {}
        c.fn = c
        c.inverse = u.noop
        if (f && typeof o === h) {
            o = o.call(n, c)
        } else {
            o = v.call(n, o, c)
        }
        if (o || o === 0) {
            l += o
        }
        l += "\n</div>\n"
        return l
    })

    function wrapped_template(e, n) {
        return absoluteLinks.makeHtmlLinksSafe(template(e, n))
    }
    module.exports = wrapped_template
});
KAdefine("javascript/discussion-package/replies-container.handlebars", function(require, module, exports) {
    require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
    var absoluteLinks = require("../shared-package/absolute-links.js")
    var template = Handlebars.template(function(e, n, i, s, a) {
        i = i || e.helpers
        var l = "",
            r, t, d, o, p = this,
            c = "function",
            v = i.blockHelperMissing

        function u(e, n) {
            var s = "",
                a
            s += '\n            <div class="loading" style="display:none;">\n                <div class="discussion-item reply" style="opacity:0;">\n                    <div class="throbber"></div>\n                    <div class="discussion-content">'
            d = i["_"]
            a = d || e["_"]
            o = p.program(2, f, n)
            o.hash = {}
            o.fn = o
            o.inverse = p.noop
            if (d && typeof a === c) {
                a = a.call(e, o)
            } else {
                a = v.call(e, a, o)
            }
            if (a || a === 0) {
                s += a
            }
            s += "</div>\n                </div>\n            </div>\n            "
            return s
        }

        function f(e, n) {
            return "Loading..."
        }
        l += '<div class="replies-container">\n    <div class="replies-triangle"></div>\n    <div class="replies-panel">\n        <div class="replies">\n            '
        d = i.replyCount
        r = d || n.replyCount
        t = i["if"]
        o = p.program(1, u, a)
        o.hash = {}
        o.fn = o
        o.inverse = p.noop
        r = t.call(n, r, o)
        if (r || r === 0) {
            l += r
        }
        l += '\n        </div>\n\n        <div class="add-reply"></div>\n    </div>\n</div>\n'
        return l
    })

    function wrapped_template(e, n) {
        return absoluteLinks.makeHtmlLinksSafe(template(e, n))
    }
    module.exports = wrapped_template
});
KAdefine("javascript/discussion-package/question-form.handlebars", function(require, module, exports) {
    require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
    var absoluteLinks = require("../shared-package/absolute-links.js")
    var template = Handlebars.template(function(n, e, s, a, i) {
        s = s || n.helpers
        a = a || n.partials
        var r = "",
            t, l, o, c, u = this,
            p = "function",
            f = s.helperMissing,
            v = void 0,
            d = this.escapeExpression,
            h = s.blockHelperMissing

        function k(n, e) {
            var i = "",
                r
            i += "\n        "
            r = n
            r = u.invokePartial(a["discussion_question-guidelines"], "discussion_question-guidelines", r, s, a)
            if (r || r === 0) {
                i += r
            }
            i += "\n    "
            return i
        }

        function m(n, e) {
            return "Ask a question"
        }

        function g(n, e) {
            var a = "",
                i, r
            a += '\n                <div class="discussion-question-container">\n                    <div class="discussion-avatar-container">\n                        <div class="discussion-avatar-sprite" style="background-image: url(\''
            o = s.avatarSrc
            i = o || n.avatarSrc
            o = s.staticUrl
            r = o || n.staticUrl
            if (typeof r === p) {
                i = r.call(n, i, {
                    hash: {}
                })
            } else if (r === v) {
                i = f.call(n, "staticUrl", i, {
                    hash: {}
                })
            } else {
                i = r
            }
            a += d(i) + '\')"></div>\n                    </div>\n                    <div class="discussion-question-text-container">\n                        <textarea class="discussion-text" placeholder="'
            o = s["_"]
            i = o || n["_"]
            c = u.program(6, _, e)
            c.hash = {}
            c.fn = c
            c.inverse = u.noop
            if (o && typeof i === p) {
                i = i.call(n, c)
            } else {
                i = h.call(n, i, c)
            }
            if (i || i === 0) {
                a += i
            }
            a += '"></textarea>\n                    </div>\n                </div>\n            '
            return a
        }

        function _(n, e) {
            return "Ask a question..."
        }

        function q(n, e) {
            var a = "",
                i
            a += '\n                <textarea class="discussion-text" placeholder="'
            o = s["_"]
            i = o || n["_"]
            c = u.program(9, b, e)
            c.hash = {}
            c.fn = c
            c.inverse = u.noop
            if (o && typeof i === p) {
                i = i.call(n, c)
            } else {
                i = h.call(n, i, c)
            }
            if (i || i === 0) {
                a += i
            }
            a += '"></textarea>\n            '
            return a
        }

        function b(n, e) {
            return "Ask a question..."
        }

        function x(n, e) {
            var a, i, r, t
            a = "form-controls"
            i = "discussion"
            r = {}
            t = "Ask your question"
            r["label"] = t
            o = s.invokePartial
            t = o || n.invokePartial
            c = u.program(12, y, e)
            c.hash = r
            c.fn = c
            c.inverse = u.noop
            if (o && typeof t === p) {
                a = t.call(n, i, a, c)
            } else {
                a = h.call(n, t, i, a, c)
            }
            if (a || a === 0) {
                return a
            } else {
                return ""
            }
        }

        function y(n, e) {
            var s = ""
            return s
        }
        r += '<div class="ask-question">\n    '
        o = s.isScratchpad
        t = o || e.isScratchpad
        l = s.unless
        c = u.program(1, k, i)
        c.hash = {}
        c.fn = c
        c.inverse = u.noop
        t = l.call(e, t, c)
        if (t || t === 0) {
            r += t
        }
        r += '\n    <div class="question">\n        <label>\n            <span class="sr-only">\n                '
        o = s["_"]
        t = o || e["_"]
        c = u.program(3, m, i)
        c.hash = {}
        c.fn = c
        c.inverse = u.noop
        if (o && typeof t === p) {
            t = t.call(e, c)
        } else {
            t = h.call(e, t, c)
        }
        if (t || t === 0) {
            r += t
        }
        r += "\n            </span>\n            "
        o = s.newAskQuestionUi
        t = o || e.newAskQuestionUi
        l = s["if"]
        c = u.program(5, g, i)
        c.hash = {}
        c.fn = c
        c.inverse = u.program(8, q, i)
        t = l.call(e, t, c)
        if (t || t === 0) {
            r += t
        }
        r += "\n        </label>\n\n        "
        o = s["_"]
        t = o || e["_"]
        c = u.program(11, x, i)
        c.hash = {}
        c.fn = c
        c.inverse = u.noop
        if (o && typeof t === p) {
            t = t.call(e, c)
        } else {
            t = h.call(e, t, c)
        }
        if (t || t === 0) {
            r += t
        }
        r += "\n    </div>\n</div>\n"
        return r
    })

    function wrapped_template(n, e) {
        return absoluteLinks.makeHtmlLinksSafe(template(n, e))
    }
    module.exports = wrapped_template
});
KAdefine("javascript/discussion-package/question-guidelines.handlebars", function(require, module, exports) {
    require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
    var absoluteLinks = require("../shared-package/absolute-links.js")
    var template = Handlebars.template(function(e, n, a, i, s) {
        a = a || e.helpers
        var r = "",
            l, t, o, c, f = this,
            h = "function",
            p = a.blockHelperMissing

        function u(e, n) {
            var i = "",
                s
            i += '\n                <h4 class="guideline-header">\n                    '
            o = a["_"]
            s = o || e["_"]
            c = f.program(2, d, n)
            c.hash = {}
            c.fn = c
            c.inverse = f.noop
            if (o && typeof s === h) {
                s = s.call(e, c)
            } else {
                s = p.call(e, s, c)
            }
            if (s || s === 0) {
                i += s
            }
            i += '\n                </h4>\n                <div class="guideline-paragraph">\n                    <em class="guideline-example">\n                        '
            o = a["_"]
            s = o || e["_"]
            c = f.program(4, m, n)
            c.hash = {}
            c.fn = c
            c.inverse = f.noop
            if (o && typeof s === h) {
                s = s.call(e, c)
            } else {
                s = p.call(e, s, c)
            }
            if (s || s === 0) {
                i += s
            }
            i += "\n                    </em>\n                </div>\n                "
            return i
        }

        function d(e, n) {
            return "Be specific, and indicate a location in the text:"
        }

        function m(e, n) {
            return "In the second paragraph, how is the moon large enough to block the sun? Isn't the sun way larger?"
        }

        function g(e, n) {
            var i = "",
                s
            i += '\n                <h4 class="guideline-header">\n                    '
            o = a["_"]
            s = o || e["_"]
            c = f.program(7, v, n)
            c.hash = {}
            c.fn = c
            c.inverse = f.noop
            if (o && typeof s === h) {
                s = s.call(e, c)
            } else {
                s = p.call(e, s, c)
            }
            if (s || s === 0) {
                i += s
            }
            i += '\n                </h4>\n                <div class="guideline-paragraph">\n                    <em class="guideline-example">\n                        '
            o = a["_"]
            s = o || e["_"]
            c = f.program(9, k, n)
            c.hash = {}
            c.fn = c
            c.inverse = f.noop
            if (o && typeof s === h) {
                s = s.call(e, c)
            } else {
                s = p.call(e, s, c)
            }
            if (s || s === 0) {
                i += s
            }
            i += "\n                    </em>\n                </div>\n                "
            return i
        }

        function v(e, n) {
            return "Be specific, and indicate a time in the video:"
        }

        function k(e, n) {
            return "At 5:31, how is the moon large enough to block the sun? Isn't the sun way larger?"
        }

        function _(e, n) {
            return "Have something that's not a question about this content?"
        }

        function y(e, n) {
            return "Post a tip or thanks"
        }

        function b(e, n) {
            return "Join our help discussions"
        }

        function w(e, n) {
            return "Report a technical problem with the site"
        }

        function q(e, n) {
            return '<a class="alert-link" href="https://khanacademy.zendesk.com/hc/communities/public/topics/200136634-Feature-Requests">Request a feature</a>'
        }

        function A(e, n) {
            var i = "",
                s, r
            i += "\n                    "
            o = a.isVideo
            s = o || e.isVideo
            r = a["if"]
            c = f.program(22, x, n)
            c.hash = {}
            c.fn = c
            c.inverse = f.program(26, H, n)
            s = r.call(e, s, c)
            if (s || s === 0) {
                i += s
            }
            i += "\n                    "
            return i
        }

        function x(e, n) {
            var i = "",
                s, r
            i += "\n                        "
            o = a.clarificationsEnabled
            s = o || e.clarificationsEnabled
            r = a["if"]
            c = f.program(23, R, n)
            c.hash = {}
            c.fn = c
            c.inverse = f.noop
            s = r.call(e, s, c)
            if (s || s === 0) {
                i += s
            }
            i += "\n                    "
            return i
        }

        function R(e, n) {
            var i = "",
                s
            i += '\n                        <li>\n                            <a href="javascript:void 0;" class="simple-button suggest-clarification">'
            o = a["_"]
            s = o || e["_"]
            c = f.program(24, j, n)
            c.hash = {}
            c.fn = c
            c.inverse = f.noop
            if (o && typeof s === h) {
                s = s.call(e, c)
            } else {
                s = p.call(e, s, c)
            }
            if (s || s === 0) {
                i += s
            }
            i += "</a>\n                        </li>\n                        "
            return i
        }

        function j(e, n) {
            return "Report a mistake in the video"
        }

        function H(e, n) {
            var i = "",
                s, r
            i += "\n                        "
            o = a.isArticle
            s = o || e.isArticle
            r = a["if"]
            c = f.program(27, I, n)
            c.hash = {}
            c.fn = c
            c.inverse = f.noop
            s = r.call(e, s, c)
            if (s || s === 0) {
                i += s
            }
            i += "\n                    "
            return i
        }

        function I(e, n) {
            var i = "",
                s
            i += '\n                        <li>\n                            <a href="javascript:void 0;" class="simple-button suggest-clarification">'
            o = a["_"]
            s = o || e["_"]
            c = f.program(28, z, n)
            c.hash = {}
            c.fn = c
            c.inverse = f.noop
            if (o && typeof s === h) {
                s = s.call(e, c)
            } else {
                s = p.call(e, s, c)
            }
            if (s || s === 0) {
                i += s
            }
            i += "</a>\n                        </li>\n                        "
            return i
        }

        function z(e, n) {
            return "Report a mistake in the article"
        }

        function B(e, n) {
            return "This discussion area is not meant for answering homework questions."
        }

        function L(e, n) {
            return 'Before asking, please make sure you\'ve checked the top questions below and\n            <a href="https://khanacademy.org/r/computer-programming-faq">our FAQ</a>. Thanks!'
        }
        r += '<div class="question-guidelines post-guidelines alert pure-hidden-xs" style="display: none;">\n    <table>\n        <tr>\n            <td class="guideline-cell">\n                '
        o = a.isArticle
        l = o || n.isArticle
        t = a["if"]
        c = f.program(1, u, s)
        c.hash = {}
        c.fn = c
        c.inverse = f.program(6, g, s)
        l = t.call(n, l, c)
        if (l || l === 0) {
            r += l
        }
        r += '\n            </td>\n            <td class="guideline-cell">\n                <h4 class="guideline-header">\n                    '
        o = a["_"]
        l = o || n["_"]
        c = f.program(11, _, s)
        c.hash = {}
        c.fn = c
        c.inverse = f.noop
        if (o && typeof l === h) {
            l = l.call(n, c)
        } else {
            l = p.call(n, l, c)
        }
        if (l || l === 0) {
            r += l
        }
        r += '\n                </h4>\n                <ul class="guideline-items">\n                    <li>\n                        <a class="alert-link post-feedback-instead" href="javascript:void(0);">'
        o = a["_"]
        l = o || n["_"]
        c = f.program(13, y, s)
        c.hash = {}
        c.fn = c
        c.inverse = f.noop
        if (o && typeof l === h) {
            l = l.call(n, c)
        } else {
            l = p.call(n, l, c)
        }
        if (l || l === 0) {
            r += l
        }
        r += '</a>\n                    </li>\n                    <li>\n                        <a class="alert-link" href="https://khanacademy.zendesk.com/hc/communities/public/topics">'
        o = a["_"]
        l = o || n["_"]
        c = f.program(15, b, s)
        c.hash = {}
        c.fn = c
        c.inverse = f.noop
        if (o && typeof l === h) {
            l = l.call(n, c)
        } else {
            l = p.call(n, l, c)
        }
        if (l || l === 0) {
            r += l
        }
        r += '</a>\n                    </li>\n                    <li>\n                        <a class="alert-link" href="https://khanacademy.zendesk.com/hc/en-us/community/topics/200838407-Technical-Issues-Workarounds">'
        o = a["_"]
        l = o || n["_"]
        c = f.program(17, w, s)
        c.hash = {}
        c.fn = c
        c.inverse = f.noop
        if (o && typeof l === h) {
            l = l.call(n, c)
        } else {
            l = p.call(n, l, c)
        }
        if (l || l === 0) {
            r += l
        }
        r += "</a>\n                    </li>\n                    <li>\n                        "
        o = a["_"]
        l = o || n["_"]
        c = f.program(19, q, s)
        c.hash = {}
        c.fn = c
        c.inverse = f.noop
        if (o && typeof l === h) {
            l = l.call(n, c)
        } else {
            l = p.call(n, l, c)
        }
        if (l || l === 0) {
            r += l
        }
        r += "\n                    </li>\n                    "
        o = a.scratchpad
        l = o || n.scratchpad
        t = a.unless
        c = f.program(21, A, s)
        c.hash = {}
        c.fn = c
        c.inverse = f.noop
        l = t.call(n, l, c)
        if (l || l === 0) {
            r += l
        }
        r += '\n                </ul>\n            </td>\n        </tr>\n    </table>\n    <div class="guideline-message">\n        <h5 class="no-homework">\n            '
        o = a["_"]
        l = o || n["_"]
        c = f.program(30, B, s)
        c.hash = {}
        c.fn = c
        c.inverse = f.noop
        if (o && typeof l === h) {
            l = l.call(n, c)
        } else {
            l = p.call(n, l, c)
        }
        if (l || l === 0) {
            r += l
        }
        r += '\n        </h5>\n        <h5 class="check-the-faq">\n            '
        o = a["_"]
        l = o || n["_"]
        c = f.program(32, L, s)
        c.hash = {}
        c.fn = c
        c.inverse = f.noop
        if (o && typeof l === h) {
            l = l.call(n, c)
        } else {
            l = p.call(n, l, c)
        }
        if (l || l === 0) {
            r += l
        }
        r += "\n        </h5>\n    </div>\n</div>\n"
        return r
    })

    function wrapped_template(e, n) {
        return absoluteLinks.makeHtmlLinksSafe(template(e, n))
    }
    module.exports = wrapped_template
});
KAdefine("javascript/discussion-package/answer-form.handlebars", function(require, module, exports) {
    require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
    var absoluteLinks = require("../shared-package/absolute-links.js")
    var template = Handlebars.template(function(e, n, a, r, s) {
        a = a || e.helpers
        var l = "",
            t, i, o, p, f = this,
            c = "function",
            u = a.blockHelperMissing,
            h = a.helperMissing,
            v = void 0,
            m = this.escapeExpression

        function d(e, n) {
            var r = "",
                s
            r += '\n    <label><input type="checkbox" class="from-video-author"> <strong>'
            o = a["_"]
            s = o || e["_"]
            p = f.program(2, k, n)
            p.hash = {}
            p.fn = p
            p.inverse = f.noop
            if (o && typeof s === c) {
                s = s.call(e, p)
            } else {
                s = u.call(e, s, p)
            }
            if (s || s === 0) {
                r += s
            }
            r += "</strong></label><br>\n    "
            return r
        }

        function k(e, n) {
            return "From the author:"
        }

        function y(e, n) {
            return "Answer this question"
        }

        function b(e, n) {
            return "Answer this question..."
        }

        function g(e, n) {
            var r, s, l, t
            r = "form-controls"
            s = "discussion"
            l = {}
            t = "Answer"
            l["label"] = t
            o = a.invokePartial
            t = o || e.invokePartial
            p = f.program(9, _, n)
            p.hash = l
            p.fn = p
            p.inverse = f.noop
            if (o && typeof t === c) {
                r = t.call(e, s, r, p)
            } else {
                r = u.call(e, t, s, r, p)
            }
            if (r || r === 0) {
                return r
            } else {
                return ""
            }
        }

        function _(e, n) {
            var a = ""
            return a
        }
        l += '<div class="answer">\n    <input type="hidden" name="question-key" value="'
        o = a.key
        t = o || n.key
        if (typeof t === c) {
            t = t.call(n, {
                hash: {}
            })
        } else if (t === v) {
            t = h.call(n, "key", {
                hash: {}
            })
        }
        l += m(t) + '">\n\n    '
        o = a.isDeveloper
        t = o || n.isDeveloper
        i = a["if"]
        p = f.program(1, d, s)
        p.hash = {}
        p.fn = p
        p.inverse = f.noop
        t = i.call(n, t, p)
        if (t || t === 0) {
            l += t
        }
        l += '\n\n    <label>\n        <span class="sr-only">\n            '
        o = a["_"]
        t = o || n["_"]
        p = f.program(4, y, s)
        p.hash = {}
        p.fn = p
        p.inverse = f.noop
        if (o && typeof t === c) {
            t = t.call(n, p)
        } else {
            t = u.call(n, t, p)
        }
        if (t || t === 0) {
            l += t
        }
        l += '\n        </span>\n        <textarea\n            class="discussion-text"\n            placeholder="'
        o = a["_"]
        t = o || n["_"]
        p = f.program(6, b, s)
        p.hash = {}
        p.fn = p
        p.inverse = f.noop
        if (o && typeof t === c) {
            t = t.call(n, p)
        } else {
            t = u.call(n, t, p)
        }
        if (t || t === 0) {
            l += t
        }
        l += '">\n        </textarea>\n    </label>\n\n    '
        o = a["_"]
        t = o || n["_"]
        p = f.program(8, g, s)
        p.hash = {}
        p.fn = p
        p.inverse = f.noop
        if (o && typeof t === c) {
            t = t.call(n, p)
        } else {
            t = u.call(n, t, p)
        }
        if (t || t === 0) {
            l += t
        }
        l += "\n</div>\n"
        return l
    })

    function wrapped_template(e, n) {
        return absoluteLinks.makeHtmlLinksSafe(template(e, n))
    }
    module.exports = wrapped_template
});
KAdefine("javascript/discussion-package/feedback-guidelines.handlebars", function(require, module, exports) {
    require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
    var absoluteLinks = require("../shared-package/absolute-links.js")
    var template = Handlebars.template(function(e, n, a, i, s) {
        a = a || e.helpers
        var l = "",
            r, t, o, c, f = this,
            u = "function",
            h = a.blockHelperMissing

        function p(e, n) {
            return "Share a tip"
        }

        function d(e, n) {
            return "When naming a variable, it is okay to use most letters, but some are reserved, like 'e', which represents the value 2.7183..."
        }

        function m(e, n) {
            return "Thank the author"
        }

        function g(e, n) {
            return "This is great, I finally understand quadratic functions!"
        }

        function v(e, n) {
            return "Have something that's not a tip or thanks about this content?"
        }

        function k(e, n) {
            return "Ask a question"
        }

        function _(e, n) {
            return "Join our help discussions"
        }

        function y(e, n) {
            return "Report a technical problem with the site"
        }

        function b(e, n) {
            return "Request a feature"
        }

        function q(e, n) {
            var i = "",
                s, l
            i += "\n                    "
            o = a.isVideo
            s = o || e.isVideo
            l = a["if"]
            c = f.program(20, w, n)
            c.hash = {}
            c.fn = c
            c.inverse = f.program(24, H, n)
            s = l.call(e, s, c)
            if (s || s === 0) {
                i += s
            }
            i += "\n                    "
            return i
        }

        function w(e, n) {
            var i = "",
                s, l
            i += "\n                        "
            o = a.clarificationsEnabled
            s = o || e.clarificationsEnabled
            l = a["if"]
            c = f.program(21, R, n)
            c.hash = {}
            c.fn = c
            c.inverse = f.noop
            s = l.call(e, s, c)
            if (s || s === 0) {
                i += s
            }
            i += "\n                    "
            return i
        }

        function R(e, n) {
            var i = "",
                s
            i += '\n                        <li>\n                            <a href="javascript:void 0;" class="simple-button suggest-clarification">'
            o = a["_"]
            s = o || e["_"]
            c = f.program(22, j, n)
            c.hash = {}
            c.fn = c
            c.inverse = f.noop
            if (o && typeof s === u) {
                s = s.call(e, c)
            } else {
                s = h.call(e, s, c)
            }
            if (s || s === 0) {
                i += s
            }
            i += "</a>\n                        </li>\n                        "
            return i
        }

        function j(e, n) {
            return "Report a mistake in the video"
        }

        function H(e, n) {
            var i = "",
                s, l
            i += "\n                        "
            o = a.isArticle
            s = o || e.isArticle
            l = a["if"]
            c = f.program(25, T, n)
            c.hash = {}
            c.fn = c
            c.inverse = f.noop
            s = l.call(e, s, c)
            if (s || s === 0) {
                i += s
            }
            i += "\n                    "
            return i
        }

        function T(e, n) {
            var i = "",
                s
            i += '\n                        <li>\n                            <a href="javascript:void 0;" class="simple-button suggest-clarification">'
            o = a["_"]
            s = o || e["_"]
            c = f.program(26, x, n)
            c.hash = {}
            c.fn = c
            c.inverse = f.noop
            if (o && typeof s === u) {
                s = s.call(e, c)
            } else {
                s = h.call(e, s, c)
            }
            if (s || s === 0) {
                i += s
            }
            i += "</a>\n                        </li>\n                        "
            return i
        }

        function x(e, n) {
            return "Report a mistake in the article"
        }

        function z(e, n) {
            return "This discussion area is not meant for answering homework questions."
        }
        l += '<div class="feedback-guidelines post-guidelines alert" style="display: none;">\n    <table>\n        <tr>\n            <td class="guideline-cell">\n                <h4 class="guideline-header">\n                    '
        o = a["_"]
        r = o || n["_"]
        c = f.program(1, p, s)
        c.hash = {}
        c.fn = c
        c.inverse = f.noop
        if (o && typeof r === u) {
            r = r.call(n, c)
        } else {
            r = h.call(n, r, c)
        }
        if (r || r === 0) {
            l += r
        }
        l += '\n                </h4>\n                <div class="guideline-paragraph">\n                    <em class="guideline-example">\n                        '
        o = a["_"]
        r = o || n["_"]
        c = f.program(3, d, s)
        c.hash = {}
        c.fn = c
        c.inverse = f.noop
        if (o && typeof r === u) {
            r = r.call(n, c)
        } else {
            r = h.call(n, r, c)
        }
        if (r || r === 0) {
            l += r
        }
        l += '\n                    </em>\n                </div>\n                <br>\n                <h4 class="guideline-header">\n                    '
        o = a["_"]
        r = o || n["_"]
        c = f.program(5, m, s)
        c.hash = {}
        c.fn = c
        c.inverse = f.noop
        if (o && typeof r === u) {
            r = r.call(n, c)
        } else {
            r = h.call(n, r, c)
        }
        if (r || r === 0) {
            l += r
        }
        l += '\n                </h4>\n                <div class="guideline-paragraph">\n                    <em class="guideline-example">\n                        '
        o = a["_"]
        r = o || n["_"]
        c = f.program(7, g, s)
        c.hash = {}
        c.fn = c
        c.inverse = f.noop
        if (o && typeof r === u) {
            r = r.call(n, c)
        } else {
            r = h.call(n, r, c)
        }
        if (r || r === 0) {
            l += r
        }
        l += '\n                    </em>\n                </div>\n            </td>\n            <td class="guideline-cell">\n                <h4 class="guideline-header">\n                    '
        o = a["_"]
        r = o || n["_"]
        c = f.program(9, v, s)
        c.hash = {}
        c.fn = c
        c.inverse = f.noop
        if (o && typeof r === u) {
            r = r.call(n, c)
        } else {
            r = h.call(n, r, c)
        }
        if (r || r === 0) {
            l += r
        }
        l += '\n                </h4>\n                <ul class="guideline-items">\n                    <li>\n                        <a class="alert-link ask-question-instead" href="javascript:void(0);">'
        o = a["_"]
        r = o || n["_"]
        c = f.program(11, k, s)
        c.hash = {}
        c.fn = c
        c.inverse = f.noop
        if (o && typeof r === u) {
            r = r.call(n, c)
        } else {
            r = h.call(n, r, c)
        }
        if (r || r === 0) {
            l += r
        }
        l += '</a>\n                    </li>\n                    <li>\n                        <a class="alert-link" href="https://khanacademy.zendesk.com/hc/communities/public/topics">'
        o = a["_"]
        r = o || n["_"]
        c = f.program(13, _, s)
        c.hash = {}
        c.fn = c
        c.inverse = f.noop
        if (o && typeof r === u) {
            r = r.call(n, c)
        } else {
            r = h.call(n, r, c)
        }
        if (r || r === 0) {
            l += r
        }
        l += '</a>\n                    </li>\n                    <li>\n                        <a class="alert-link" href="https://khanacademy.zendesk.com/hc/en-us/community/topics/200838407-Technical-Issues-Workarounds">'
        o = a["_"]
        r = o || n["_"]
        c = f.program(15, y, s)
        c.hash = {}
        c.fn = c
        c.inverse = f.noop
        if (o && typeof r === u) {
            r = r.call(n, c)
        } else {
            r = h.call(n, r, c)
        }
        if (r || r === 0) {
            l += r
        }
        l += '</a>\n                    </li>\n                    <li>\n                        <a class="alert-link" href="https://khanacademy.zendesk.com/hc/communities/public/topics/200136634-Feature-Requests">'
        o = a["_"]
        r = o || n["_"]
        c = f.program(17, b, s)
        c.hash = {}
        c.fn = c
        c.inverse = f.noop
        if (o && typeof r === u) {
            r = r.call(n, c)
        } else {
            r = h.call(n, r, c)
        }
        if (r || r === 0) {
            l += r
        }
        l += "</a>\n                    </li>\n                    "
        o = a.scratchpad
        r = o || n.scratchpad
        t = a.unless
        c = f.program(19, q, s)
        c.hash = {}
        c.fn = c
        c.inverse = f.noop
        r = t.call(n, r, c)
        if (r || r === 0) {
            l += r
        }
        l += '\n                </ul>\n            </td>\n        </tr>\n    </table>\n    <div class="guideline-message">\n        <h5 class="no-homework">\n            '
        o = a["_"]
        r = o || n["_"]
        c = f.program(28, z, s)
        c.hash = {}
        c.fn = c
        c.inverse = f.noop
        if (o && typeof r === u) {
            r = r.call(n, c)
        } else {
            r = h.call(n, r, c)
        }
        if (r || r === 0) {
            l += r
        }
        l += "\n        </h5>\n    </div>\n</div>\n"
        return l
    })

    function wrapped_template(e, n) {
        return absoluteLinks.makeHtmlLinksSafe(template(e, n))
    }
    module.exports = wrapped_template
});
KAdefine("javascript/discussion-package/comment-form.handlebars", function(require, module, exports) {
    require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
    var absoluteLinks = require("../shared-package/absolute-links.js")
    var template = Handlebars.template(function(e, n, a, s, r) {
        a = a || e.helpers
        s = s || e.partials
        var t = "",
            i, l, o, c, p = this,
            f = "function",
            u = a.blockHelperMissing

        function d(e, n) {
            var r = "",
                t
            r += "\n        "
            t = e
            t = p.invokePartial(s["discussion_feedback-guidelines"], "discussion_feedback-guidelines", t, a, s)
            if (t || t === 0) {
                r += t
            }
            r += "\n    "
            return r
        }

        function h(e, n) {
            return "Post a tip or thanks."
        }

        function v(e, n) {
            return "Post a tip or thanks..."
        }

        function k(e, n) {
            var s, r, t, i
            s = "form-controls"
            r = "discussion"
            t = {}
            i = "Post your tip or thanks"
            t["label"] = i
            o = a.invokePartial
            i = o || e.invokePartial
            c = p.program(8, m, n)
            c.hash = t
            c.fn = c
            c.inverse = p.noop
            if (o && typeof i === f) {
                s = i.call(e, r, s, c)
            } else {
                s = u.call(e, i, r, s, c)
            }
            if (s || s === 0) {
                return s
            } else {
                return ""
            }
        }

        function m(e, n) {
            var a = ""
            return a
        }
        t += '<div class="post-feedback">\n    '
        o = a.isScratchpad
        i = o || n.isScratchpad
        l = a.unless
        c = p.program(1, d, r)
        c.hash = {}
        c.fn = c
        c.inverse = p.noop
        i = l.call(n, i, c)
        if (i || i === 0) {
            t += i
        }
        t += '\n    <div class="comment">\n        <label>\n            <span class="sr-only">\n                '
        o = a["_"]
        i = o || n["_"]
        c = p.program(3, h, r)
        c.hash = {}
        c.fn = c
        c.inverse = p.noop
        if (o && typeof i === f) {
            i = i.call(n, c)
        } else {
            i = u.call(n, i, c)
        }
        if (i || i === 0) {
            t += i
        }
        t += '\n            </span>\n            <textarea class="discussion-text" placeholder="'
        o = a["_"]
        i = o || n["_"]
        c = p.program(5, v, r)
        c.hash = {}
        c.fn = c
        c.inverse = p.noop
        if (o && typeof i === f) {
            i = i.call(n, c)
        } else {
            i = u.call(n, i, c)
        }
        if (i || i === 0) {
            t += i
        }
        t += '"></textarea>\n        </label>\n\n        '
        o = a["_"]
        i = o || n["_"]
        c = p.program(7, k, r)
        c.hash = {}
        c.fn = c
        c.inverse = p.noop
        if (o && typeof i === f) {
            i = i.call(n, c)
        } else {
            i = u.call(n, i, c)
        }
        if (i || i === 0) {
            t += i
        }
        t += "\n    </div>\n</div>\n"
        return t
    })

    function wrapped_template(e, n) {
        return absoluteLinks.makeHtmlLinksSafe(template(e, n))
    }
    module.exports = wrapped_template
});
KAdefine("javascript/discussion-package/reply.handlebars", function(require, module, exports) {
    require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
    var absoluteLinks = require("../shared-package/absolute-links.js")
    var template = Handlebars.template(function(a, e, n, s, l) {
        n = n || a.helpers
        s = s || a.partials
        var r = "",
            o, t, i, f, h, c = this,
            u = "function",
            p = n.blockHelperMissing,
            d = n.helperMissing,
            v = void 0,
            m = this.escapeExpression

        function y(a, e) {
            return " deleted"
        }

        function g(a, e) {
            var s = "",
                l, r
            s += '\n            <span class="mod-tools" data-key="'
            f = n.key
            l = f || a.key
            if (typeof l === u) {
                l = l.call(a, {
                    hash: {}
                })
            } else if (l === v) {
                l = d.call(a, "key", {
                    hash: {}
                })
            }
            s += m(l) + '" data-is-author="'
            f = n.showAuthorControls
            l = f || a.showAuthorControls
            if (typeof l === u) {
                l = l.call(a, {
                    hash: {}
                })
            } else if (l === v) {
                l = d.call(a, "showAuthorControls", {
                    hash: {}
                })
            }
            s += m(l) + '" data-in-queue="'
            f = n.inQueue
            l = f || a.inQueue
            if (typeof l === u) {
                l = l.call(a, {
                    hash: {}
                })
            } else if (l === v) {
                l = d.call(a, "inQueue", {
                    hash: {}
                })
            }
            s += m(l) + '">\n                '
            f = n.deleted
            l = f || a.deleted
            r = n["if"]
            h = c.program(4, k, e)
            h.hash = {}
            h.fn = h
            h.inverse = c.program(7, C, e)
            l = r.call(a, l, h)
            if (l || l === 0) {
                s += l
            }
            s += "\n            </span>\n            "
            return s
        }

        function k(a, e) {
            var s = "",
                l
            s += '\n                    <a href="javascript:void(0);" class="undelete">'
            f = n["_"]
            l = f || a["_"]
            h = c.program(5, _, e)
            h.hash = {}
            h.fn = h
            h.inverse = c.noop
            if (f && typeof l === u) {
                l = l.call(a, h)
            } else {
                l = p.call(a, l, h)
            }
            if (l || l === 0) {
                s += l
            }
            s += "</a>\n                "
            return s
        }

        function _(a, e) {
            return "Undelete"
        }

        function C(a, e) {
            var s = "",
                l
            s += '\n                    <a href="javascript:void(0);" class="delete">'
            f = n["_"]
            l = f || a["_"]
            h = c.program(8, w, e)
            h.hash = {}
            h.fn = h
            h.inverse = c.noop
            if (f && typeof l === u) {
                l = l.call(a, h)
            } else {
                l = p.call(a, l, h)
            }
            if (l || l === 0) {
                s += l
            }
            s += "</a>\n                "
            return s
        }

        function w(a, e) {
            return "Delete"
        }

        function A(a, e) {
            var s = "",
                l, r
            s += "\n                "
            f = n.showAuthorControls
            l = f || a.showAuthorControls
            r = n["if"]
            h = c.program(11, U, e)
            h.hash = {}
            h.fn = h
            h.inverse = c.noop
            l = r.call(a, l, h)
            if (l || l === 0) {
                s += l
            }
            s += "\n            "
            return s
        }

        function U(a, e) {
            var s = "",
                l
            s += '\n                <span class="mod-tools" data-key="'
            f = n.key
            l = f || a.key
            if (typeof l === u) {
                l = l.call(a, {
                    hash: {}
                })
            } else if (l === v) {
                l = d.call(a, "key", {
                    hash: {}
                })
            }
            s += m(l) + '" data-is-author="'
            f = n.showAuthorControls
            l = f || a.showAuthorControls
            if (typeof l === u) {
                l = l.call(a, {
                    hash: {}
                })
            } else if (l === v) {
                l = d.call(a, "showAuthorControls", {
                    hash: {}
                })
            }
            s += m(l) + '" data-in-queue="'
            f = n.inQueue
            l = f || a.inQueue
            if (typeof l === u) {
                l = l.call(a, {
                    hash: {}
                })
            } else if (l === v) {
                l = d.call(a, "inQueue", {
                    hash: {}
                })
            }
            s += m(l) + '">\n                    <a href="javascript:void(0);" class="delete">'
            f = n["_"]
            l = f || a["_"]
            h = c.program(12, S, e)
            h.hash = {}
            h.fn = h
            h.inverse = c.noop
            if (f && typeof l === u) {
                l = l.call(a, h)
            } else {
                l = p.call(a, l, h)
            }
            if (l || l === 0) {
                s += l
            }
            s += "</a>\n                </span>\n                "
            return s
        }

        function S(a, e) {
            return "Delete"
        }

        function x(a, e) {
            var l = "",
                r
            l += "\n                "
            r = a
            r = c.invokePartial(s["discussion_meta-separator"], "discussion_meta-separator", r, n, s)
            if (r || r === 0) {
                l += r
            }
            l += "\n                "
            r = a
            r = c.invokePartial(s["discussion_flag-controls"], "discussion_flag-controls", r, n, s)
            if (r || r === 0) {
                l += r
            }
            l += "\n            "
            return l
        }

        function K(a, e) {
            var s = "",
                l, r
            s += "\n                "
            f = n.showModControls
            l = f || a.showModControls
            r = n["if"]
            h = c.program(17, b, e)
            h.hash = {}
            h.fn = h
            h.inverse = c.program(21, Q, e)
            l = r.call(a, l, h)
            if (l || l === 0) {
                s += l
            }
            s += "\n            "
            return s
        }

        function b(a, e) {
            var s = "",
                l, r
            s += '\n                    <a href="'
            f = n.permalink
            l = f || a.permalink
            if (typeof l === u) {
                l = l.call(a, {
                    hash: {}
                })
            } else if (l === v) {
                l = d.call(a, "permalink", {
                    hash: {}
                })
            }
            s += m(l)
            f = n.expandKey
            l = f || a.expandKey
            r = n["if"]
            h = c.program(18, M, e)
            h.hash = {}
            h.fn = h
            h.inverse = c.noop
            l = r.call(a, l, h)
            if (l || l === 0) {
                s += l
            }
            s += '"\n                       class="timeago" title="'
            f = n.date
            l = f || a.date
            if (typeof l === u) {
                l = l.call(a, {
                    hash: {}
                })
            } else if (l === v) {
                l = d.call(a, "date", {
                    hash: {}
                })
            }
            s += m(l) + '">\n                        '
            f = n.date
            l = f || a.date
            if (typeof l === u) {
                l = l.call(a, {
                    hash: {}
                })
            } else if (l === v) {
                l = d.call(a, "date", {
                    hash: {}
                })
            }
            s += m(l) + "\n                    </a>\n                "
            return s
        }

        function M(a, e) {
            var s, l
            f = n.usesSeoUrlSchema
            s = f || a.usesSeoUrlSchema
            l = n.unless
            h = c.program(19, P, e)
            h.hash = {}
            h.fn = h
            h.inverse = c.noop
            s = l.call(a, s, h)
            if (s || s === 0) {
                return s
            } else {
                return ""
            }
        }

        function P(a, e) {
            var s = "",
                l
            s += "?qa_expand_key="
            f = n.expandKey
            l = f || a.expandKey
            if (typeof l === u) {
                l = l.call(a, {
                    hash: {}
                })
            } else if (l === v) {
                l = d.call(a, "expandKey", {
                    hash: {}
                })
            }
            s += m(l)
            return s
        }

        function Q(a, e) {
            var s = "",
                l
            s += '\n                    <span class="timeago" title="'
            f = n.date
            l = f || a.date
            if (typeof l === u) {
                l = l.call(a, {
                    hash: {}
                })
            } else if (l === v) {
                l = d.call(a, "date", {
                    hash: {}
                })
            }
            s += m(l) + '">\n                        '
            f = n.date
            l = f || a.date
            if (typeof l === u) {
                l = l.call(a, {
                    hash: {}
                })
            } else if (l === v) {
                l = d.call(a, "date", {
                    hash: {}
                })
            }
            s += m(l) + "\n                    </span>\n                "
            return s
        }

        function N(a, e) {
            var s = "",
                l
            s += '\n                <span class="timeago" title="'
            f = n.date
            l = f || a.date
            if (typeof l === u) {
                l = l.call(a, {
                    hash: {}
                })
            } else if (l === v) {
                l = d.call(a, "date", {
                    hash: {}
                })
            }
            s += m(l) + '">\n                    '
            f = n.date
            l = f || a.date
            if (typeof l === u) {
                l = l.call(a, {
                    hash: {}
                })
            } else if (l === v) {
                l = d.call(a, "date", {
                    hash: {}
                })
            }
            s += m(l) + "\n                </span>\n            "
            return s
        }

        function j(a, e) {
            var s = "",
                l, r
            s += "\n                "
            s += '\n                <span class="discussion-meta-faded">'
            f = n["_"]
            l = f || a["_"]
            h = c.program(26, q, e)
            h.hash = {}
            h.fn = h
            h.inverse = c.noop
            if (f && typeof l === u) {
                l = l.call(a, h)
            } else {
                l = p.call(a, l, h)
            }
            if (l || l === 0) {
                s += l
            }
            s += "</span>\n                "
            f = n.authorNickname
            l = f || a.authorNickname
            r = n["if"]
            h = c.program(28, D, e)
            h.hash = {}
            h.fn = h
            h.inverse = c.program(33, F, e)
            l = r.call(a, l, h)
            if (l || l === 0) {
                s += l
            }
            s += "\n            "
            return s
        }

        function q(a, e) {
            return "by"
        }

        function D(a, e) {
            var s = "",
                l, r
            s += '\n                <a class="author-nickname discussion-author" data-user-kaid="'
            f = n.authorKaid
            l = f || a.authorKaid
            if (typeof l === u) {
                l = l.call(a, {
                    hash: {}
                })
            } else if (l === v) {
                l = d.call(a, "authorKaid", {
                    hash: {}
                })
            }
            s += m(l) + '">\n                    '
            f = n.authorAvatarSrc
            l = f || a.authorAvatarSrc
            r = n["if"]
            h = c.program(29, H, e)
            h.hash = {}
            h.fn = h
            h.inverse = c.noop
            l = r.call(a, l, h)
            if (l || l === 0) {
                s += l
            }
            s += '\n                    <span class="sr-only">'
            f = n["_"]
            l = f || a["_"]
            h = c.program(31, L, e)
            h.hash = {}
            h.fn = h
            h.inverse = c.noop
            if (f && typeof l === u) {
                l = l.call(a, h)
            } else {
                l = p.call(a, l, h)
            }
            if (l || l === 0) {
                s += l
            }
            s += " </span>\n                    "
            f = n.authorNickname
            l = f || a.authorNickname
            if (typeof l === u) {
                l = l.call(a, {
                    hash: {}
                })
            } else if (l === v) {
                l = d.call(a, "authorNickname", {
                    hash: {}
                })
            }
            s += m(l) + "\n                </a>\n                "
            return s
        }

        function H(a, e) {
            var s = "",
                l, r
            s += '\n                        <img class="discussion-author-avatar"\n                             src="'
            f = n.authorAvatarSrc
            l = f || a.authorAvatarSrc
            f = n.staticUrl
            r = f || a.staticUrl
            if (typeof r === u) {
                l = r.call(a, l, {
                    hash: {}
                })
            } else if (r === v) {
                l = d.call(a, "staticUrl", l, {
                    hash: {}
                })
            } else {
                l = r
            }
            s += m(l) + '"\n                             alt="">\n                    '
            return s
        }

        function L(a, e) {
            return "View profile for:"
        }

        function F(a, e) {
            var s = "",
                l
            s += "\n                "
            f = n["_"]
            l = f || a["_"]
            h = c.program(34, E, e)
            h.hash = {}
            h.fn = h
            h.inverse = c.noop
            if (f && typeof l === u) {
                l = l.call(a, h)
            } else {
                l = p.call(a, l, h)
            }
            if (l || l === 0) {
                s += l
            }
            s += "\n                "
            return s
        }

        function E(a, e) {
            return "Anonymous"
        }
        r += '<div class="discussion-item reply'
        f = n.appearsAsDeleted
        o = f || e.appearsAsDeleted
        t = n["if"]
        h = c.program(1, y, l)
        h.hash = {}
        h.fn = h
        h.inverse = c.noop
        o = t.call(e, o, h)
        if (o || o === 0) {
            r += o
        }
        r += '" id="'
        f = n.key
        o = f || e.key
        if (typeof o === u) {
            o = o.call(e, {
                hash: {}
            })
        } else if (o === v) {
            o = d.call(e, "key", {
                hash: {}
            })
        }
        r += m(o) + '">\n    <div class="discussion-content">\n        '
        f = n.content
        o = f || e.content
        t = {}
        i = 1
        t["nofollow"] = i
        f = n.formatContent
        i = f || e.formatContent
        h = {}
        h.hash = t
        if (typeof i === u) {
            o = i.call(e, o, h)
        } else if (i === v) {
            o = d.call(e, "formatContent", o, h)
        } else {
            o = i
        }
        r += m(o) + "\n    </div>\n\n    "
        r += '\n    <div class="discussion-meta">\n        <div class="discussion-meta-controls">\n            '
        f = n.showModControls
        o = f || e.showModControls
        t = n["if"]
        h = c.program(3, g, l)
        h.hash = {}
        h.fn = h
        h.inverse = c.program(10, A, l)
        o = t.call(e, o, h)
        if (o || o === 0) {
            r += o
        }
        r += "\n            "
        f = n.hideFlagControls
        o = f || e.hideFlagControls
        t = n.unless
        h = c.program(14, x, l)
        h.hash = {}
        h.fn = h
        h.inverse = c.noop
        o = t.call(e, o, h)
        if (o || o === 0) {
            r += o
        }
        r += '\n        </div>\n        <div class="discussion-meta-info">\n            '
        f = n.inUserProfile
        o = f || e.inUserProfile
        t = n["if"]
        h = c.program(16, K, l)
        h.hash = {}
        h.fn = h
        h.inverse = c.program(23, N, l)
        o = t.call(e, o, h)
        if (o || o === 0) {
            r += o
        }
        r += "\n\n            "
        f = n.inUserProfile
        o = f || e.inUserProfile
        t = n.unless
        h = c.program(25, j, l)
        h.hash = {}
        h.fn = h
        h.inverse = c.noop
        o = t.call(e, o, h)
        if (o || o === 0) {
            r += o
        }
        r += '\n        </div>\n    </div>\n    <div class="item-separator"></div>\n</div>\n'
        return r
    })

    function wrapped_template(a, e) {
        return absoluteLinks.makeHtmlLinksSafe(template(a, e))
    }
    module.exports = wrapped_template
});
KAdefine("javascript/discussion-package/reply-form.handlebars", function(require, module, exports) {
    require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
    var absoluteLinks = require("../shared-package/absolute-links.js")
    var template = Handlebars.template(function(e, n, t, a, s) {
        t = t || e.helpers
        var l = "",
            i, r, o, p = this,
            c = "function",
            u = t.blockHelperMissing

        function d(e, n) {
            return "or"
        }

        function v(e, n) {
            var a, s, l, i
            a = "form-controls"
            s = "discussion"
            l = {}
            i = "Comment"
            l["label"] = i
            r = t.invokePartial
            i = r || e.invokePartial
            o = p.program(4, f, n)
            o.hash = l
            o.fn = o
            o.inverse = p.noop
            if (r && typeof i === c) {
                a = i.call(e, s, a, o)
            } else {
                a = u.call(e, i, s, a, o)
            }
            if (a || a === 0) {
                return a
            } else {
                return ""
            }
        }

        function f(e, n) {
            var t = ""
            return t
        }
        l += '<div class="discussion-item reply">\n    <div class="reply-alt-controls" style="display:none">\n        <div>\n            <input class="simple-button choose-reply-alt"\n                   type="button"\n                   value="">\n        </div>\n        <div class="or">\n        '
        r = t["_"]
        i = r || n["_"]
        o = p.program(1, d, s)
        o.hash = {}
        o.fn = o
        o.inverse = p.noop
        if (r && typeof i === c) {
            i = i.call(n, o)
        } else {
            i = u.call(n, i, o)
        }
        if (i || i === 0) {
            l += i
        }
        l += '\n        </div>\n        <div class="div-text-dummy">\n            <textarea class="discussion-text-dummy"></textarea>\n        </div>\n    </div>\n    <textarea class="discussion-text"></textarea>\n\n    '
        r = t["_"]
        i = r || n["_"]
        o = p.program(3, v, s)
        o.hash = {}
        o.fn = o
        o.inverse = p.noop
        if (r && typeof i === c) {
            i = i.call(n, o)
        } else {
            i = u.call(n, i, o)
        }
        if (i || i === 0) {
            l += i
        }
        l += "\n</div>\n"
        return l
    })

    function wrapped_template(e, n) {
        return absoluteLinks.makeHtmlLinksSafe(template(e, n))
    }
    module.exports = wrapped_template
});
KAdefine("javascript/discussion-package/discussion-meta.handlebars", function(require, module, exports) {
    require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
    var absoluteLinks = require("../shared-package/absolute-links.js")
    var template = Handlebars.template(function(n, e, a, s, r) {
        a = a || n.helpers
        s = s || n.partials
        var o = "",
            l, t, i, f, c = this,
            u = "function",
            h = a.helperMissing,
            p = void 0,
            d = this.escapeExpression,
            m = a.blockHelperMissing

        function v(n, e) {
            var r = "",
                o, l
            r += "\n            "
            i = a.badges
            o = i || n.badges
            l = a.each
            f = c.program(2, y, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            o = l.call(n, o, f)
            if (o || o === 0) {
                r += o
            }
            r += "\n            "
            o = n
            o = c.invokePartial(s["discussion_meta-separator"], "discussion_meta-separator", o, a, s)
            if (o || o === 0) {
                r += o
            }
            r += "\n        "
            return r
        }

        function y(n, e) {
            var s = "",
                r, o
            s += '\n                <img class="discussion-badge-icon" title="'
            i = a.translatedDescription
            r = i || n.translatedDescription
            if (typeof r === u) {
                r = r.call(n, {
                    hash: {}
                })
            } else if (r === p) {
                r = h.call(n, "translatedDescription", {
                    hash: {}
                })
            }
            s += d(r) + '"\n                     src="'
            i = a.iconSrc
            r = i || n.iconSrc
            i = a.stripProtocol
            o = i || n.stripProtocol
            if (typeof o === u) {
                r = o.call(n, r, {
                    hash: {}
                })
            } else if (o === p) {
                r = h.call(n, "stripProtocol", r, {
                    hash: {}
                })
            } else {
                r = o
            }
            s += d(r) + '" alt="'
            i = a.translatedDescription
            r = i || n.translatedDescription
            if (typeof r === u) {
                r = r.call(n, {
                    hash: {}
                })
            } else if (r === p) {
                r = h.call(n, "translatedDescription", {
                    hash: {}
                })
            }
            s += d(r) + '" />\n            '
            return s
        }
        
        
        /***********************************************
         *
         *
         * These functions have to do with voting.
         *
         *
        ***********************************************/
        
        function g(n, e) {
            var s = "",
                r, o
            s += "\n        "
            i = a.hideVotes
            r = i || n.hideVotes
            o = a.unless
            f = c.program(5, C, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            r = o.call(n, r, f)
            if (r || r === 0) {
                s += r
            }
            s += "\n        "
            return s
        }

        function C(n, e) {
            var s = "",
                r, o
            s += '\n        <span class="sum-votes">\n            '
            i = a.sumVotesIncremented
            r = i || n.sumVotesIncremented
            i = a.ngettext
            o = i || n.ngettext
            f = c.program(6, _, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.program(8, k, e)
            if (i && typeof o === u) {
                r = o.call(n, r, f)
            } else {
                r = m.call(n, o, r, f)
            }
            if (r || r === 0) {
                s += r
            }
            s += "\n        </span>\n        "
            return s
        }

        function _(n, e) {
            var s = "",
                r
            i = a.sumVotesIncremented
            r = i || n.sumVotesIncremented
            if (typeof r === u) {
                r = r.call(n, {
                    hash: {}
                })
            } else if (r === p) {
                r = h.call(n, "sumVotesIncremented", {
                    hash: {}
                })
            }
            s += d(r) + ' <span class="vote-word">Vote</span>'
            return s
        }

        function k(n, e) {
            var s = "",
                r
            i = a.sumVotesIncremented
            r = i || n.sumVotesIncremented
            if (typeof r === u) {
                r = r.call(n, {
                    hash: {}
                })
            } else if (r === p) {
                r = h.call(n, "sumVotesIncremented", {
                    hash: {}
                })
            }
            s += d(r) + ' <span class="vote-word">Votes</span>'
            return s
        }

        function x(n, e) {
            var r = "",
                o, l
            r += "\n            "
            o = n
            o = c.invokePartial(s["discussion_meta-separator"], "discussion_meta-separator", o, a, s)
            if (o || o === 0) {
                r += o
            }
            r += "\n            <span>"
            i = a.spinoffCount
            o = i || n.spinoffCount
            i = a.ngettext
            l = i || n.ngettext
            f = c.program(11, P, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.program(13, S, e)
            if (i && typeof l === u) {
                o = l.call(n, o, f)
            } else {
                o = m.call(n, l, o, f)
            }
            if (o || o === 0) {
                r += o
            }
            r += "</span>\n        "
            return r
        }

        function P(n, e) {
            var s = "",
                r
            i = a.spinoffCount
            r = i || n.spinoffCount
            if (typeof r === u) {
                r = r.call(n, {
                    hash: {}
                })
            } else if (r === p) {
                r = h.call(n, "spinoffCount", {
                    hash: {}
                })
            }
            s += d(r) + " Spin-off"
            return s
        }

        function S(n, e) {
            var s = "",
                r
            i = a.spinoffCount
            r = i || n.spinoffCount
            if (typeof r === u) {
                r = r.call(n, {
                    hash: {}
                })
            } else if (r === p) {
                r = h.call(n, "spinoffCount", {
                    hash: {}
                })
            }
            s += d(r) + " Spin-offs"
            return s
        }

        function b(n, e) {
            var s = "",
                r, o
            s += "\n        "
            i = a.inUserProfile
            r = i || n.inUserProfile
            o = a.unless
            f = c.program(16, V, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            r = o.call(n, r, f)
            if (r || r === 0) {
                s += r
            }
            s += "\n        "
            return s
        }

        function V(n, e) {
            var s = "",
                r, o
            s += "\n"
            s += "\n            "
            i = a.hideVoteControls
            r = i || n.hideVoteControls
            o = a.unless
            f = c.program(17, w, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            r = o.call(n, r, f)
            if (r || r === 0) {
                s += r
            }
            s += "\n\n            "
            s += "\n            "
            i = a.isScratchpad
            r = i || n.isScratchpad
            o = a.unless
            f = c.program(20, K, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            r = o.call(n, r, f)
            if (r || r === 0) {
                s += r
            }
            s += "\n        "
            return s
        }

        function w(n, e) {
            var s = "",
                r, o
            s += "\n            "
            i = a.isScratchpadCard
            r = i || n.isScratchpadCard
            o = a.unless
            f = c.program(18, I, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            r = o.call(n, r, f)
            if (r || r === 0) {
                s += r
            }
            s += "\n            "
            return s
        }

        function I(n, e) {
            var r = "",
                o
            r += "\n                "
            o = n
            o = c.invokePartial(s["discussion_vote-controls"], "discussion_vote-controls", o, a, s)
            if (o || o === 0) {
                r += o
            }
            r += "\n            "
            return r
        }

        function K(n, e) {
            var s = "",
                r, o
            s += "\n\n"
            s += "\n                "
            i = a.restrictPosting
            r = i || n.restrictPosting
            o = a["if"]
            f = c.program(21, U, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.program(27, j, e)
            r = o.call(n, r, f)
            if (r || r === 0) {
                s += r
            }
            s += "\n            "
            return s
        }

        function U(n, e) {
            var s = "",
                r, o
            s += "\n                    "
            i = a.replyCount
            r = i || n.replyCount
            o = a["if"]
            f = c.program(22, A, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            r = o.call(n, r, f)
            if (r || r === 0) {
                s += r
            }
            s += "\n                "
            return s
        }

        function A(n, e) {
            var r = "",
                o, l
            r += "\n                        "
            o = n
            o = c.invokePartial(s["discussion_meta-separator"], "discussion_meta-separator", o, a, s)
            if (o || o === 0) {
                r += o
            }
            r += "\n\n                        "
            r += '\n                        <a href="javascript:void(0);" class="toggle-replies show-replies"\n                           data-reply-count="'
            i = a.replyCount
            o = i || n.replyCount
            if (typeof o === u) {
                o = o.call(n, {
                    hash: {}
                })
            } else if (o === p) {
                o = h.call(n, "replyCount", {
                    hash: {}
                })
            }
            r += d(o) + '">'
            i = a.replyCount
            o = i || n.replyCount
            i = a.ngettext
            l = i || n.ngettext
            f = c.program(23, N, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.program(25, D, e)
            if (i && typeof l === u) {
                o = l.call(n, o, f)
            } else {
                o = m.call(n, l, o, f)
            }
            if (o || o === 0) {
                r += o
            }
            r += "</a>\n                    "
            return r
        }

        function N(n, e) {
            var s = "",
                r
            i = a.replyCount
            r = i || n.replyCount
            if (typeof r === u) {
                r = r.call(n, {
                    hash: {}
                })
            } else if (r === p) {
                r = h.call(n, "replyCount", {
                    hash: {}
                })
            }
            s += d(r) + " Comment"
            return s
        }

        function D(n, e) {
            var s = "",
                r
            i = a.replyCount
            r = i || n.replyCount
            if (typeof r === u) {
                r = r.call(n, {
                    hash: {}
                })
            } else if (r === p) {
                r = h.call(n, "replyCount", {
                    hash: {}
                })
            }
            s += d(r) + " Comments"
            return s
        }

        function j(n, e) {
            var r = "",
                o, l
            r += "\n                    "
            o = n
            o = c.invokePartial(s["discussion_meta-separator"], "discussion_meta-separator", o, a, s)
            if (o || o === 0) {
                r += o
            }
            r += "\n\n                    "
            r += '\n                    <a href="javascript:void(0);" class="toggle-replies show-replies"\n                       data-reply-count="'
            i = a.replyCount
            o = i || n.replyCount
            if (typeof o === u) {
                o = o.call(n, {
                    hash: {}
                })
            } else if (o === p) {
                o = h.call(n, "replyCount", {
                    hash: {}
                })
            }
            r += d(o) + '">\n                        '
            i = a.replyCount
            o = i || n.replyCount
            l = a["if"]
            f = c.program(28, q, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.program(33, F, e)
            o = l.call(n, o, f)
            if (o || o === 0) {
                r += o
            }
            r += "\n                    </a>\n                "
            return r
        }

        function q(n, e) {
            var s = "",
                r, o
            s += "\n                            "
            i = a.replyCount
            r = i || n.replyCount
            i = a.ngettext
            o = i || n.ngettext
            f = c.program(29, T, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.program(31, E, e)
            if (i && typeof o === u) {
                r = o.call(n, r, f)
            } else {
                r = m.call(n, o, r, f)
            }
            if (r || r === 0) {
                s += r
            }
            s += "\n                        "
            return s
        }

        function T(n, e) {
            var s = "",
                r
            s += "\n                                "
            i = a.replyCount
            r = i || n.replyCount
            if (typeof r === u) {
                r = r.call(n, {
                    hash: {}
                })
            } else if (r === p) {
                r = h.call(n, "replyCount", {
                    hash: {}
                })
            }
            s += d(r) + " Comment\n                            "
            return s
        }

        function E(n, e) {
            var s = "",
                r
            s += "\n                                "
            i = a.replyCount
            r = i || n.replyCount
            if (typeof r === u) {
                r = r.call(n, {
                    hash: {}
                })
            } else if (r === p) {
                r = h.call(n, "replyCount", {
                    hash: {}
                })
            }
            s += d(r) + " Comments\n                            "
            return s
        }

        function F(n, e) {
            var s = "",
                r, o
            s += "\n                            "
            i = a.authorNickname
            r = i || n.authorNickname
            o = a["if"]
            f = c.program(34, M, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.program(37, L, e)
            r = o.call(n, r, f)
            if (r || r === 0) {
                s += r
            }
            s += "\n                        "
            return s
        }

        function M(n, e) {
            var s = "",
                r
            s += "\n                                "
            i = a["_"]
            r = i || n["_"]
            f = c.program(35, H, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            if (i && typeof r === u) {
                r = r.call(n, f)
            } else {
                r = m.call(n, r, f)
            }
            if (r || r === 0) {
                s += r
            }
            s += "\n                            "
            return s
        }

        function H(n, e) {
            var s = "",
                r
            s += 'Comment <span class="sr-only">on '
            i = a.authorNickname
            r = i || n.authorNickname
            if (typeof r === u) {
                r = r.call(n, {
                    hash: {}
                })
            } else if (r === p) {
                r = h.call(n, "authorNickname", {
                    hash: {}
                })
            }
            s += d(r) + "'s question</span>"
            return s
        }

        function L(n, e) {
            var s = "",
                r
            s += "\n                                "
            i = a["_"]
            r = i || n["_"]
            f = c.program(38, Y, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            if (i && typeof r === u) {
                r = r.call(n, f)
            } else {
                r = m.call(n, r, f)
            }
            if (r || r === 0) {
                s += r
            }
            s += "\n                            "
            return s
        }

        function Y(n, e) {
            return 'Comment <span class="sr-only">on this question</span>'
        }

        function z(n, e) {
            var s = "",
                r, o
            s += "\n"
            s += "\n            "
            i = a.hideFlagControls
            r = i || n.hideFlagControls
            o = a.unless
            f = c.program(41, B, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            r = o.call(n, r, f)
            if (r || r === 0) {
                s += r
            }
            s += "\n        "
            return s
        }

        function B(n, e) {
            var r = "",
                o
            r += "\n                "
            o = n
            o = c.invokePartial(s["discussion_mod-controls"], "discussion_mod-controls", o, a, s)
            if (o || o === 0) {
                r += o
            }
            r += "\n            "
            return r
        }

        function G(n, e) {
            var s = "",
                r, o
            s += "\n            "
            i = a.showAuthorControls
            r = i || n.showAuthorControls
            o = a["if"]
            f = c.program(44, J, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.program(47, Q, e)
            r = o.call(n, r, f)
            if (r || r === 0) {
                s += r
            }
            s += "\n        "
            return s
        }

        function J(n, e) {
            var s = "",
                r, o
            s += "\n"
            s += "\n                "
            i = a.isScratchpad
            r = i || n.isScratchpad
            o = a.unless
            f = c.program(45, O, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            r = o.call(n, r, f)
            if (r || r === 0) {
                s += r
            }
            s += "\n            "
            return s
        }

        function O(n, e) {
            var r = "",
                o
            r += "\n                    "
            o = n
            o = c.invokePartial(s["discussion_meta-separator"], "discussion_meta-separator", o, a, s)
            if (o || o === 0) {
                r += o
            }
            r += "\n                    "
            o = n
            o = c.invokePartial(s["discussion_author-controls"], "discussion_author-controls", o, a, s)
            if (o || o === 0) {
                r += o
            }
            r += "\n                "
            return r
        }

        function Q(n, e) {
            var s = "",
                r, o
            s += "\n"
            s += "\n                "
            i = a.hideFlagControls
            r = i || n.hideFlagControls
            o = a.unless
            f = c.program(48, R, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            r = o.call(n, r, f)
            if (r || r === 0) {
                s += r
            }
            s += "\n            "
            return s
        }

        function R(n, e) {
            var r = "",
                o
            r += "\n                    "
            o = n
            o = c.invokePartial(s["discussion_meta-separator"], "discussion_meta-separator", o, a, s)
            if (o || o === 0) {
                r += o
            }
            r += "\n                    "
            o = n
            o = c.invokePartial(s["discussion_flag-controls"], "discussion_flag-controls", o, a, s)
            if (o || o === 0) {
                r += o
            }
            r += "\n                "
            return r
        }

        function W(n, e) {
            var s = "",
                r, o
            s += '\n    <div class="discussion-meta-info">\n'
            s += '\n        <a href="'
            i = a.permalink
            r = i || n.permalink
            if (typeof r === u) {
                r = r.call(n, {
                    hash: {}
                })
            } else if (r === p) {
                r = h.call(n, "permalink", {
                    hash: {}
                })
            }
            s += d(r)
            i = a.expandKey
            r = i || n.expandKey
            o = a["if"]
            f = c.program(51, X, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            r = o.call(n, r, f)
            if (r || r === 0) {
                s += r
            }
            s += '"\n           class="timeago" title="'
            i = a.date
            r = i || n.date
            if (typeof r === u) {
                r = r.call(n, {
                    hash: {}
                })
            } else if (r === p) {
                r = h.call(n, "date", {
                    hash: {}
                })
            }
            s += d(r) + '">\n            '
            i = a.date
            r = i || n.date
            if (typeof r === u) {
                r = r.call(n, {
                    hash: {}
                })
            } else if (r === p) {
                r = h.call(n, "date", {
                    hash: {}
                })
            }
            s += d(r) + "\n        </a>\n\n        "
            i = a.focus
            r = i || n.focus
            o = a["if"]
            f = c.program(54, ne, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            r = o.call(n, r, f)
            if (r || r === 0) {
                s += r
            }
            s += "\n\n        "
            i = a.inUserProfile
            r = i || n.inUserProfile
            o = a.unless
            f = c.program(61, re, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            r = o.call(n, r, f)
            if (r || r === 0) {
                s += r
            }
            s += "\n    </div>\n    "
            return s
        }

        function X(n, e) {
            var s, r
            i = a.usesSeoUrlSchema
            s = i || n.usesSeoUrlSchema
            r = a.unless
            f = c.program(52, Z, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            s = r.call(n, s, f)
            if (s || s === 0) {
                return s
            } else {
                return ""
            }
        }

        function Z(n, e) {
            var s = "",
                r
            s += "?qa_expand_key="
            i = a.expandKey
            r = i || n.expandKey
            if (typeof r === u) {
                r = r.call(n, {
                    hash: {}
                })
            } else if (r === p) {
                r = h.call(n, "expandKey", {
                    hash: {}
                })
            }
            s += d(r)
            return s
        }

        function ne(n, e) {
            var s = "",
                r, o
            s += "\n"
            s += "\n            "
            s += '\n            <span class="discussion-meta-faded">'
            i = a["_"]
            r = i || n["_"]
            f = c.program(55, ee, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            if (i && typeof r === u) {
                r = r.call(n, f)
            } else {
                r = m.call(n, r, f)
            }
            if (r || r === 0) {
                s += r
            }
            s += "</span>\n            "
            i = a.focusIsVideo
            r = i || n.focusIsVideo
            o = a["if"]
            f = c.program(57, ae, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.program(59, se, e)
            r = o.call(n, r, f)
            if (r || r === 0) {
                s += r
            }
            s += "\n        "
            return s
        }

        function ee(n, e) {
            return "on"
        }

        function ae(n, e) {
            var s = "",
                r
            s += '\n                <a class="modal-video"\n                   href="'
            i = a.focus
            r = i || n.focus
            r = r === null || r === undefined || r === false ? r : r.relativeUrl
            if (typeof r === u) {
                r = r.call(n, {
                    hash: {}
                })
            } else if (r === p) {
                r = h.call(n, "focus.relativeUrl", {
                    hash: {}
                })
            }
            s += d(r) + "?qa_expand_key="
            i = a.expandKey
            r = i || n.expandKey
            if (typeof r === u) {
                r = r.call(n, {
                    hash: {}
                })
            } else if (r === p) {
                r = h.call(n, "expandKey", {
                    hash: {}
                })
            }
            s += d(r) + '"\n                   data-translated-title="'
            i = a.focus
            r = i || n.focus
            r = r === null || r === undefined || r === false ? r : r.translatedTitle
            if (typeof r === u) {
                r = r.call(n, {
                    hash: {}
                })
            } else if (r === p) {
                r = h.call(n, "focus.translatedTitle", {
                    hash: {}
                })
            }
            s += d(r) + '"\n                   data-translated-description="'
            i = a.focus
            r = i || n.focus
            r = r === null || r === undefined || r === false ? r : r.translatedDescription
            if (typeof r === u) {
                r = r.call(n, {
                    hash: {}
                })
            } else if (r === p) {
                r = h.call(n, "focus.translatedDescription", {
                    hash: {}
                })
            }
            s += d(r) + '"\n                   data-youtube-id="'
            i = a.focus
            r = i || n.focus
            r = r === null || r === undefined || r === false ? r : r.youtubeId
            if (typeof r === u) {
                r = r.call(n, {
                    hash: {}
                })
            } else if (r === p) {
                r = h.call(n, "focus.youtubeId", {
                    hash: {}
                })
            }
            s += d(r) + '"\n                   data-translated-youtube-id="'
            i = a.focus
            r = i || n.focus
            r = r === null || r === undefined || r === false ? r : r.translatedYoutubeId
            if (typeof r === u) {
                r = r.call(n, {
                    hash: {}
                })
            } else if (r === p) {
                r = h.call(n, "focus.translatedYoutubeId", {
                    hash: {}
                })
            }
            s += d(r) + '">\n                    '
            i = a.focus
            r = i || n.focus
            r = r === null || r === undefined || r === false ? r : r.translatedTitle
            if (typeof r === u) {
                r = r.call(n, {
                    hash: {}
                })
            } else if (r === p) {
                r = h.call(n, "focus.translatedTitle", {
                    hash: {}
                })
            }
            s += d(r) + "\n                </a>\n            "
            return s
        }

        function se(n, e) {
            var s = "",
                r
            s += '\n                <a href="'
            i = a.focus
            r = i || n.focus
            r = r === null || r === undefined || r === false ? r : r.relativeUrl
            if (typeof r === u) {
                r = r.call(n, {
                    hash: {}
                })
            } else if (r === p) {
                r = h.call(n, "focus.relativeUrl", {
                    hash: {}
                })
            }
            s += d(r) + "?qa_expand_key="
            i = a.expandKey
            r = i || n.expandKey
            if (typeof r === u) {
                r = r.call(n, {
                    hash: {}
                })
            } else if (r === p) {
                r = h.call(n, "expandKey", {
                    hash: {}
                })
            }
            s += d(r) + '">\n                    '
            i = a.focus
            r = i || n.focus
            r = r === null || r === undefined || r === false ? r : r.translatedTitle
            if (typeof r === u) {
                r = r.call(n, {
                    hash: {}
                })
            } else if (r === p) {
                r = h.call(n, "focus.translatedTitle", {
                    hash: {}
                })
            }
            s += d(r) + "\n                </a>\n            "
            return s
        }

        function re(n, e) {
            var s = "",
                r, o
            s += "\n"
            s += "\n            "
            s += '\n            <span class="discussion-meta-faded">'
            i = a["_"]
            r = i || n["_"]
            f = c.program(62, oe, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            if (i && typeof r === u) {
                r = r.call(n, f)
            } else {
                r = m.call(n, r, f)
            }
            if (r || r === 0) {
                s += r
            }
            s += "</span>\n            "
            i = a.authorNickname
            r = i || n.authorNickname
            o = a["if"]
            f = c.program(64, le, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.program(69, fe, e)
            r = o.call(n, r, f)
            if (r || r === 0) {
                s += r
            }
            s += "\n        "
            return s
        }

        function oe(n, e) {
            return "by"
        }

        function le(n, e) {
            var s = "",
                r, o
            s += '\n            <a class="author-nickname discussion-author" data-user-kaid="'
            i = a.authorKaid
            r = i || n.authorKaid
            if (typeof r === u) {
                r = r.call(n, {
                    hash: {}
                })
            } else if (r === p) {
                r = h.call(n, "authorKaid", {
                    hash: {}
                })
            }
            s += d(r) + '">\n                '
            i = a.authorAvatarSrc
            r = i || n.authorAvatarSrc
            o = a["if"]
            f = c.program(65, te, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            r = o.call(n, r, f)
            if (r || r === 0) {
                s += r
            }
            s += '\n                <span class="sr-only">'
            i = a["_"]
            r = i || n["_"]
            f = c.program(67, ie, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            if (i && typeof r === u) {
                r = r.call(n, f)
            } else {
                r = m.call(n, r, f)
            }
            if (r || r === 0) {
                s += r
            }
            s += " </span>\n                "
            i = a.authorNickname
            r = i || n.authorNickname
            if (typeof r === u) {
                r = r.call(n, {
                    hash: {}
                })
            } else if (r === p) {
                r = h.call(n, "authorNickname", {
                    hash: {}
                })
            }
            s += d(r) + "\n            </a>\n            "
            return s
        }

        function te(n, e) {
            var s = "",
                r, o
            s += '\n                    <img class="discussion-author-avatar" src="'
            i = a.authorAvatarSrc
            r = i || n.authorAvatarSrc
            i = a.staticUrl
            o = i || n.staticUrl
            if (typeof o === u) {
                r = o.call(n, r, {
                    hash: {}
                })
            } else if (o === p) {
                r = h.call(n, "staticUrl", r, {
                    hash: {}
                })
            } else {
                r = o
            }
            s += d(r) + '" alt="">\n                '
            return s
        }

        function ie(n, e) {
            return "View profile for:"
        }

        function fe(n, e) {
            var s = "",
                r
            s += "\n            "
            i = a["_"]
            r = i || n["_"]
            f = c.program(70, ce, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            if (i && typeof r === u) {
                r = r.call(n, f)
            } else {
                r = m.call(n, r, f)
            }
            if (r || r === 0) {
                s += r
            }
            s += "\n            "
            return s
        }

        function ce(n, e) {
            return "Anonymous"
        }
        o += '\n<div class="discussion-meta">\n    <div class="discussion-meta-controls">\n'
        o += "\n        "
        i = a.badges
        l = i || e.badges
        t = a["if"]
        f = c.program(1, v, r)
        f.hash = {}
        f.fn = f
        f.inverse = c.noop
        l = t.call(e, l, f)
        if (l || l === 0) {
            o += l
        }
        o += "\n\n"
        o += "\n        "
        i = a.isProjectEvalAnswer
        l = i || e.isProjectEvalAnswer
        t = a.unless
        f = c.program(4, g, r)
        f.hash = {}
        f.fn = f
        f.inverse = c.noop
        l = t.call(e, l, f)
        if (l || l === 0) {
            o += l
        }
        o += "\n\n        "
        i = a.spinoffCount
        l = i || e.spinoffCount
        t = a["if"]
        f = c.program(10, x, r)
        f.hash = {}
        f.fn = f
        f.inverse = c.noop
        l = t.call(e, l, f)
        if (l || l === 0) {
            o += l
        }
        o += "\n\n        "
        i = a.isProjectEvalAnswer
        l = i || e.isProjectEvalAnswer
        t = a.unless
        f = c.program(15, b, r)
        f.hash = {}
        f.fn = f
        f.inverse = c.noop
        l = t.call(e, l, f)
        if (l || l === 0) {
            o += l
        }
        o += "\n\n        "
        i = a.showModControls
        l = i || e.showModControls
        t = a["if"]
        f = c.program(40, z, r)
        f.hash = {}
        f.fn = f
        f.inverse = c.program(43, G, r)
        l = t.call(e, l, f)
        if (l || l === 0) {
            o += l
        }
        o += "\n    </div>\n\n"
        o += "\n    "
        i = a.isScratchpad
        l = i || e.isScratchpad
        t = a.unless
        f = c.program(50, W, r)
        f.hash = {}
        f.fn = f
        f.inverse = c.noop
        l = t.call(e, l, f)
        if (l || l === 0) {
            o += l
        }
        o += "\n</div>\n"
        return o
    })

    function wrapped_template(n, e) {
        return absoluteLinks.makeHtmlLinksSafe(template(n, e))
    }
    module.exports = wrapped_template
});
KAdefine("javascript/discussion-package/vote-controls.handlebars", function(require, module, exports) {
    require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
    var absoluteLinks = require("../shared-package/absolute-links.js")
    var template = Handlebars.template(function(e, n, o, t, a) {
        o = o || e.helpers
        var i = "",
            r, s, l, f, p = this,
            c = "function",
            d = o.blockHelperMissing,
            u = o.helperMissing,
            v = void 0,
            h = this.escapeExpression

        function m(e, n) {
            return " voted"
        }

        function y(e, n) {
            return "Vote up, this is encouraging or helpful (click again to undo)"
        }

        function g(e, n) {
            var t = "",
                a
            t += "\n                "
            l = o["_"]
            a = l || e["_"]
            f = p.program(6, k, n)
            f.hash = {}
            f.fn = f
            f.inverse = p.noop
            if (l && typeof a === c) {
                a = a.call(e, f)
            } else {
                a = d.call(e, a, f)
            }
            if (a || a === 0) {
                t += a
            }
            t += "\n            "
            return t
        }

        function k(e, n) {
            return "You have upvoted this comment"
        }

        function V(e, n) {
            return " voted"
        }

        function _(e, n) {
            return "Vote down, this is not encouraging or helpful (click again to undo)"
        }

        function w(e, n) {
            var t = "",
                a
            t += "\n                "
            l = o["_"]
            a = l || e["_"]
            f = p.program(13, b, n)
            f.hash = {}
            f.fn = f
            f.inverse = p.noop
            if (l && typeof a === c) {
                a = a.call(e, f)
            } else {
                a = d.call(e, a, f)
            }
            if (a || a === 0) {
                t += a
            }
            t += "\n            "
            return t
        }

        function b(e, n) {
            return "You have downvoted this comment"
        }
        i += '<div class="discussion-vote">\n    <div class="vote-for vote-for-js vote-up'
        l = o.upVoted
        r = l || n.upVoted
        s = o["if"]
        f = p.program(1, m, a)
        f.hash = {}
        f.fn = f
        f.inverse = p.noop
        r = s.call(n, r, f)
        if (r || r === 0) {
            i += r
        }
        i += '"\n                title="'
        l = o["_"]
        r = l || n["_"]
        f = p.program(3, y, a)
        f.hash = {}
        f.fn = f
        f.inverse = p.noop
        if (l && typeof r === c) {
            r = r.call(n, f)
        } else {
            r = d.call(n, r, f)
        }
        if (r || r === 0) {
            i += r
        }
        i += '"\n                data-key="'
        l = o.key
        r = l || n.key
        if (typeof r === c) {
            r = r.call(n, {
                hash: {}
            })
        } else if (r === v) {
            r = u.call(n, "key", {
                hash: {}
            })
        }
        i += h(r) + '"\n                data-vote-type="1"\n                tabindex="0">\n        <div class="sr-only">\n            '
        l = o.upVoted
        r = l || n.upVoted
        s = o["if"]
        f = p.program(5, g, a)
        f.hash = {}
        f.fn = f
        f.inverse = p.noop
        r = s.call(n, r, f)
        if (r || r === 0) {
            i += r
        }
        i += '\n        </div>\n    </div>\n    <div class="vote-for vote-for-js vote-down'
        l = o.downVoted
        r = l || n.downVoted
        s = o["if"]
        f = p.program(8, V, a)
        f.hash = {}
        f.fn = f
        f.inverse = p.noop
        r = s.call(n, r, f)
        if (r || r === 0) {
            i += r
        }
        i += '"\n                title="'
        l = o["_"]
        r = l || n["_"]
        f = p.program(10, _, a)
        f.hash = {}
        f.fn = f
        f.inverse = p.noop
        if (l && typeof r === c) {
            r = r.call(n, f)
        } else {
            r = d.call(n, r, f)
        }
        if (r || r === 0) {
            i += r
        }
        i += '"\n                data-key="'
        l = o.key
        r = l || n.key
        if (typeof r === c) {
            r = r.call(n, {
                hash: {}
            })
        } else if (r === v) {
            r = u.call(n, "key", {
                hash: {}
            })
        }
        i += h(r) + '"\n                data-vote-type="-1"\n                tabindex="0">\n        <div class="sr-only">\n            '
        l = o.downVoted
        r = l || n.downVoted
        s = o["if"]
        f = p.program(12, w, a)
        f.hash = {}
        f.fn = f
        f.inverse = p.noop
        r = s.call(n, r, f)
        if (r || r === 0) {
            i += r
        }
        i += "\n        </div>\n    </div>\n</div>\n"
        return i
    })

    function wrapped_template(e, n) {
        return absoluteLinks.makeHtmlLinksSafe(template(e, n))
    }
    module.exports = wrapped_template
});
KAdefine("javascript/discussion-package/flag-controls.handlebars", function(require, module, exports) {
    require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
    var absoluteLinks = require("../shared-package/absolute-links.js")
    var template = Handlebars.template(function(a, e, n, r, t) {
        n = n || a.helpers
        var l = "",
            o, s, i, f, c = this,
            p = "function",
            h = n.helperMissing,
            u = void 0,
            g = this.escapeExpression,
            m = n.blockHelperMissing

        function v(a, e) {
            var r = "",
                t
            r += '\n    <span class="flag-tools mod-action-complete" data-key="'
            i = n.key
            t = i || a.key
            if (typeof t === p) {
                t = t.call(a, {
                    hash: {}
                })
            } else if (t === u) {
                t = h.call(a, "key", {
                    hash: {}
                })
            }
            r += g(t) + '">\n            '
            r += '\n            <a href="javascript:void(0);" class="flag-show action-complete" title="'
            i = n["_"]
            t = i || a["_"]
            f = c.program(2, d, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            if (i && typeof t === p) {
                t = t.call(a, f)
            } else {
                t = m.call(a, t, f)
            }
            if (t || t === 0) {
                r += t
            }
            r += '">'
            i = n["_"]
            t = i || a["_"]
            f = c.program(4, y, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            if (i && typeof t === p) {
                t = t.call(a, f)
            } else {
                t = m.call(a, t, f)
            }
            if (t || t === 0) {
                r += t
            }
            r += "</a>\n    </span>\n"
            return r
        }

        function d(a, e) {
            return "Flagged"
        }

        function y(a, e) {
            return "Flagged"
        }

        function k(a, e) {
            var r = "",
                t, l
            r += '\n    <span class="flag-tools" data-key="'
            i = n.key
            t = i || a.key
            if (typeof t === p) {
                t = t.call(a, {
                    hash: {}
                })
            } else if (t === u) {
                t = h.call(a, "key", {
                    hash: {}
                })
            }
            r += g(t) + '">\n        '
            i = n.isScratchpad
            t = i || a.isScratchpad
            l = n["if"]
            f = c.program(7, _, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.program(12, j, e)
            t = l.call(a, t, f)
            if (t || t === 0) {
                r += t
            }
            r += "\n    </span>\n"
            return r
        }

        function _(a, e) {
            var r = "",
                t
            r += '\n        <a href="javascript:void(0);" class="flag-show scratchpad-flagging" data-react-component="button" data-react-button-type="submit" title="'
            i = n["_"]
            t = i || a["_"]
            f = c.program(8, b, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            if (i && typeof t === p) {
                t = t.call(a, f)
            } else {
                t = m.call(a, t, f)
            }
            if (t || t === 0) {
                r += t
            }
            r += '">\n            '
            i = n["_"]
            t = i || a["_"]
            f = c.program(10, F, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            if (i && typeof t === p) {
                t = t.call(a, f)
            } else {
                t = m.call(a, t, f)
            }
            if (t || t === 0) {
                r += t
            }
            r += "\n        "
            return r
        }

        function b(a, e) {
            return "Flag for moderator attention"
        }

        function F(a, e) {
            return "Flag project</a>"
        }

        function j(a, e) {
            var r = "",
                t, l
            r += '\n        <a href="javascript:void(0);" class="flag-show" title="'
            i = n["_"]
            t = i || a["_"]
            f = c.program(13, w, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            if (i && typeof t === p) {
                t = t.call(a, f)
            } else {
                t = m.call(a, t, f)
            }
            if (t || t === 0) {
                r += t
            }
            r += '">\n            '
            i = n.authorNickname
            t = i || a.authorNickname
            l = n["if"]
            f = c.program(15, N, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.program(18, L, e)
            t = l.call(a, t, f)
            if (t || t === 0) {
                r += t
            }
            r += "\n        "
            return r
        }

        function w(a, e) {
            return "Flag for moderator attention"
        }

        function N(a, e) {
            var r = "",
                t
            r += "\n                "
            i = n["_"]
            t = i || a["_"]
            f = c.program(16, H, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            if (i && typeof t === p) {
                t = t.call(a, f)
            } else {
                t = m.call(a, t, f)
            }
            if (t || t === 0) {
                r += t
            }
            r += "\n            "
            return r
        }

        function H(a, e) {
            var r = "",
                t
            r += 'Flag <span class="sr-only">'
            i = n.authorNickname
            t = i || a.authorNickname
            if (typeof t === p) {
                t = t.call(a, {
                    hash: {}
                })
            } else if (t === u) {
                t = h.call(a, "authorNickname", {
                    hash: {}
                })
            }
            r += g(t) + "'s comment</span></a>"
            return r
        }

        function L(a, e) {
            var r = "",
                t
            r += "\n                "
            i = n["_"]
            t = i || a["_"]
            f = c.program(19, S, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            if (i && typeof t === p) {
                t = t.call(a, f)
            } else {
                t = m.call(a, t, f)
            }
            if (t || t === 0) {
                r += t
            }
            r += "\n            "
            return r
        }

        function S(a, e) {
            return 'Flag <span class="sr-only">this comment</span></a>'
        }
        l += "\n"
        i = n.flaggedByUser
        o = i || e.flaggedByUser
        s = n["if"]
        f = c.program(1, v, t)
        f.hash = {}
        f.fn = f
        f.inverse = c.program(6, k, t)
        o = s.call(e, o, f)
        if (o || o === 0) {
            l += o
        }
        l += "\n"
        return l
    })

    function wrapped_template(a, e) {
        return absoluteLinks.makeHtmlLinksSafe(template(a, e))
    }
    module.exports = wrapped_template
});
KAdefine("javascript/discussion-package/author-controls.handlebars", function(require, module, exports) {
    require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
    var absoluteLinks = require("../shared-package/absolute-links.js")
    var template = Handlebars.template(function(e, s, a, n, i) {
        a = a || e.helpers
        n = n || e.partials
        var o = "",
            t, r, l, p, c = this,
            f = "function",
            u = a.blockHelperMissing,
            h = a.helperMissing,
            d = void 0,
            v = this.escapeExpression

        function m(e, s) {
            var i = "",
                o
            i += "\n		"
            o = e
            o = c.invokePartial(n["discussion_answer-notification-link"], "discussion_answer-notification-link", o, a, n)
            if (o || o === 0) {
                i += o
            }
            i += "\n		"
            o = e
            o = c.invokePartial(n["discussion_meta-separator"], "discussion_meta-separator", o, a, n)
            if (o || o === 0) {
                i += o
            }
            i += "\n	"
            return i
        }

        function k(e, s) {
            var i = "",
                o
            i += '\n        <a href="javascript:void(0);" class="edit">'
            l = a["_"]
            o = l || e["_"]
            p = c.program(4, _, s)
            p.hash = {}
            p.fn = p
            p.inverse = c.noop
            if (l && typeof o === f) {
                o = o.call(e, p)
            } else {
                o = u.call(e, o, p)
            }
            if (o || o === 0) {
                i += o
            }
            i += "</a>\n        "
            o = e
            o = c.invokePartial(n["discussion_meta-separator"], "discussion_meta-separator", o, a, n)
            if (o || o === 0) {
                i += o
            }
            i += "\n    "
            return i
        }

        function _(e, s) {
            return "Edit"
        }

        function w(e, s) {
            return "Delete"
        }
        o += '<span class="mod-tools" data-key="'
        l = a.key
        t = l || s.key
        if (typeof t === f) {
            t = t.call(s, {
                hash: {}
            })
        } else if (t === d) {
            t = h.call(s, "key", {
                hash: {}
            })
        }
        o += v(t) + '" data-is-author="'
        l = a.showAuthorControls
        t = l || s.showAuthorControls
        if (typeof t === f) {
            t = t.call(s, {
                hash: {}
            })
        } else if (t === d) {
            t = h.call(s, "showAuthorControls", {
                hash: {}
            })
        }
        o += v(t) + '">\n\n	'
        l = a.isQuestion
        t = l || s.isQuestion
        r = a["if"]
        p = c.program(1, m, i)
        p.hash = {}
        p.fn = p
        p.inverse = c.noop
        t = r.call(s, t, p)
        if (t || t === 0) {
            o += t
        }
        o += "\n\n    "
        l = a.isProjectEvalAnswer
        t = l || s.isProjectEvalAnswer
        r = a.unless
        p = c.program(3, k, i)
        p.hash = {}
        p.fn = p
        p.inverse = c.noop
        t = r.call(s, t, p)
        if (t || t === 0) {
            o += t
        }
        o += '\n\n    <a href="javascript:void(0);" class="delete">'
        l = a["_"]
        t = l || s["_"]
        p = c.program(6, w, i)
        p.hash = {}
        p.fn = p
        p.inverse = c.noop
        if (l && typeof t === f) {
            t = t.call(s, p)
        } else {
            t = u.call(s, t, p)
        }
        if (t || t === 0) {
            o += t
        }
        o += "</a>\n</span>\n"
        return o
    })

    function wrapped_template(e, s) {
        return absoluteLinks.makeHtmlLinksSafe(template(e, s))
    }
    module.exports = wrapped_template
});
KAdefine("javascript/discussion-package/answer-notification-link.handlebars", function(require, module, exports) {
    require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
    var absoluteLinks = require("../shared-package/absolute-links.js")
    var template = Handlebars.template(function(n, e, a, r, i) {
        a = a || n.helpers
        var t = "",
            o, s, f, l, p = this,
            u = "function",
            c = a.blockHelperMissing

        function m(n, e) {
            var r = "",
                i
            r += "\n    "
            r += '\n    <span title="'
            f = a["_"]
            i = f || n["_"]
            l = p.program(2, h, e)
            l.hash = {}
            l.fn = l
            l.inverse = p.noop
            if (f && typeof i === u) {
                i = i.call(n, l)
            } else {
                i = c.call(n, i, l)
            }
            if (i || i === 0) {
                r += i
            }
            r += '">\n        '
            f = a["_"]
            i = f || n["_"]
            l = p.program(4, v, e)
            l.hash = {}
            l.fn = l
            l.inverse = p.noop
            if (f && typeof i === u) {
                i = i.call(n, l)
            } else {
                i = c.call(n, i, l)
            }
            if (i || i === 0) {
                r += i
            }
            r += "\n    </span>\n"
            return r
        }

        function h(n, e) {
            return "This question is very old, so you won't receive notifications when someone answers it."
        }

        function v(n, e) {
            return "Answer email notifications are off"
        }

        function d(n, e) {
            var r = "",
                i, t
            r += "\n    "
            f = a.notifyOnAnswer
            i = f || n.notifyOnAnswer
            t = a["if"]
            l = p.program(7, g, e)
            l.hash = {}
            l.fn = l
            l.inverse = p.program(10, y, e)
            i = t.call(n, i, l)
            if (i || i === 0) {
                r += i
            }
            r += "\n"
            return r
        }

        function g(n, e) {
            var r = "",
                i
            r += '\n        <a href="javascript:void(0);" class="mute" data-notify="true">\n            '
            f = a["_"]
            i = f || n["_"]
            l = p.program(8, w, e)
            l.hash = {}
            l.fn = l
            l.inverse = p.noop
            if (f && typeof i === u) {
                i = i.call(n, l)
            } else {
                i = c.call(n, i, l)
            }
            if (i || i === 0) {
                r += i
            }
            r += "\n        </a>\n    "
            return r
        }

        function w(n, e) {
            return "Turn off answer notifications"
        }

        function y(n, e) {
            var r = "",
                i
            r += '\n        <a href="javascript:void(0);" class="mute" data-notify="false">\n            '
            f = a["_"]
            i = f || n["_"]
            l = p.program(11, _, e)
            l.hash = {}
            l.fn = l
            l.inverse = p.noop
            if (f && typeof i === u) {
                i = i.call(n, l)
            } else {
                i = c.call(n, i, l)
            }
            if (i || i === 0) {
                r += i
            }
            r += "\n        </a>\n    "
            return r
        }

        function _(n, e) {
            return "Turn on answer notifications"
        }
        f = a.isOld
        o = f || e.isOld
        s = a["if"]
        l = p.program(1, m, i)
        l.hash = {}
        l.fn = l
        l.inverse = p.program(6, d, i)
        o = s.call(e, o, l)
        if (o || o === 0) {
            t += o
        }
        t += "\n"
        return t
    })

    function wrapped_template(n, e) {
        return absoluteLinks.makeHtmlLinksSafe(template(n, e))
    }
    module.exports = wrapped_template
});
KAdefine("javascript/discussion-package/meta-separator.handlebars", function(require, module, exports) {
    require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
    var absoluteLinks = require("../shared-package/absolute-links.js")
    var template = Handlebars.template(function(e, a, t, s, r) {
        t = t || e.helpers
        var n, p = this
        return '<span class="discussion-meta-separator">&#8226;</span>\n'
    })

    function wrapped_template(e, a) {
        return absoluteLinks.makeHtmlLinksSafe(template(e, a))
    }
    module.exports = wrapped_template
});



/************************************************************************************************************************************/
/***
 ***   THIS IS THE LOW QUALITY NOTICE HEADER.
 ***
 ***   THIS COULD BE USEFUL.
***/
/************************************************************************************************************************************/



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


/************************************************************************************************************************************/

/** Anything having to do with Low Quality, we need to mark. **/

/************************************************************************************************************************************/


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
KAdefine("javascript/discussion-package/flag-modal.handlebars", function(require, module, exports) {
    require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
    var absoluteLinks = require("../shared-package/absolute-links.js")
    var template = Handlebars.template(function(n, e, a, i, l) {
        a = a || n.helpers
        var r = "",
            o, s, t, f, p = this,
            c = "function",
            u = a.helperMissing,
            h = void 0,
            v = this.escapeExpression,
            d = a.blockHelperMissing

        function m(n, e) {
            return "Flag for Guardian attention"
        }

        function g(n, e) {
            var i = "",
                l
            i += "This "
            t = a.translatedFeedbackType
            l = t || n.translatedFeedbackType
            if (typeof l === c) {
                l = l.call(n, {
                    hash: {}
                })
            } else if (l === h) {
                l = u.call(n, "translatedFeedbackType", {
                    hash: {}
                })
            }
            i += v(l) + " is:"
            return i
        }

        function _(n, e) {
            return "abuse"
        }

        function y(n, e) {
            return "disrespectful or offensive"
        }

        function b(n, e) {
            return "an advertisement"
        }

        function k(n, e) {
            var i = "",
                l, r
            i += '<div class="simple-button flag-as" data-flag="'
            t = a.isQuestion
            l = t || n.isQuestion
            r = a["if"]
            f = p.program(12, w, e)
            f.hash = {}
            f.fn = f
            f.inverse = p.program(14, Q, e)
            l = r.call(n, l, f)
            if (l || l === 0) {
                i += l
            }
            i += '">\n                    <h4>\n                        '
            t = a.isQuestion
            l = t || n.isQuestion
            r = a["if"]
            f = p.program(16, q, e)
            f.hash = {}
            f.fn = f
            f.inverse = p.noop
            l = r.call(n, l, f)
            if (l || l === 0) {
                i += l
            }
            i += "\n                        "
            t = a.isComment
            l = t || n.isComment
            r = a["if"]
            f = p.program(19, A, e)
            f.hash = {}
            f.fn = f
            f.inverse = p.noop
            l = r.call(n, l, f)
            if (l || l === 0) {
                i += l
            }
            i += "\n                        "
            t = a.isAnswer
            l = t || n.isAnswer
            r = a["if"]
            f = p.program(22, F, e)
            f.hash = {}
            f.fn = f
            f.inverse = p.noop
            l = r.call(n, l, f)
            if (l || l === 0) {
                i += l
            }
            i += "\n                    </h4>\n                    <ul>\n                        <li>\n                            "
            t = a.isQuestion
            l = t || n.isQuestion
            r = a["if"]
            f = p.program(25, L, e)
            f.hash = {}
            f.fn = f
            f.inverse = p.noop
            l = r.call(n, l, f)
            if (l || l === 0) {
                i += l
            }
            i += "\n                            "
            t = a.isComment
            l = t || n.isComment
            r = a["if"]
            f = p.program(28, B, e)
            f.hash = {}
            f.fn = f
            f.inverse = p.noop
            l = r.call(n, l, f)
            if (l || l === 0) {
                i += l
            }
            i += "\n                            "
            t = a.isAnswer
            l = t || n.isAnswer
            r = a["if"]
            f = p.program(31, S, e)
            f.hash = {}
            f.fn = f
            f.inverse = p.noop
            l = r.call(n, l, f)
            if (l || l === 0) {
                i += l
            }
            i += "\n                        </li>\n                    </ul>\n                </div>"
            return i
        }

        function w(n, e) {
            return "changetocomment"
        }

        function Q(n, e) {
            return "changetoquestion"
        }

        function q(n, e) {
            var i
            t = a["_"]
            i = t || n["_"]
            f = p.program(17, T, e)
            f.hash = {}
            f.fn = f
            f.inverse = p.noop
            if (t && typeof i === c) {
                i = i.call(n, f)
            } else {
                i = d.call(n, i, f)
            }
            if (i || i === 0) {
                return i
            } else {
                return ""
            }
        }

        function T(n, e) {
            return "a tip or thanks"
        }

        function A(n, e) {
            var i
            t = a["_"]
            i = t || n["_"]
            f = p.program(20, C, e)
            f.hash = {}
            f.fn = f
            f.inverse = p.noop
            if (t && typeof i === c) {
                i = i.call(n, f)
            } else {
                i = d.call(n, i, f)
            }
            if (i || i === 0) {
                return i
            } else {
                return ""
            }
        }

        function C(n, e) {
            return "a question"
        }

        function F(n, e) {
            var i
            t = a["_"]
            i = t || n["_"]
            f = p.program(23, H, e)
            f.hash = {}
            f.fn = f
            f.inverse = p.noop
            if (t && typeof i === c) {
                i = i.call(n, f)
            } else {
                i = d.call(n, i, f)
            }
            if (i || i === 0) {
                return i
            } else {
                return ""
            }
        }

        function H(n, e) {
            return "a tip or thanks"
        }

        function L(n, e) {
            var i
            t = a["_"]
            i = t || n["_"]
            f = p.program(26, x, e)
            f.hash = {}
            f.fn = f
            f.inverse = p.noop
            if (t && typeof i === c) {
                i = i.call(n, f)
            } else {
                i = d.call(n, i, f)
            }
            if (i || i === 0) {
                return i
            } else {
                return ""
            }
        }

        function x(n, e) {
            return "should be in Tips & Thanks"
        }

        function B(n, e) {
            var i
            t = a["_"]
            i = t || n["_"]
            f = p.program(29, M, e)
            f.hash = {}
            f.fn = f
            f.inverse = p.noop
            if (t && typeof i === c) {
                i = i.call(n, f)
            } else {
                i = d.call(n, i, f)
            }
            if (i || i === 0) {
                return i
            } else {
                return ""
            }
        }

        function M(n, e) {
            return "should be in Questions"
        }

        function S(n, e) {
            var i
            t = a["_"]
            i = t || n["_"]
            f = p.program(32, j, e)
            f.hash = {}
            f.fn = f
            f.inverse = p.noop
            if (t && typeof i === c) {
                i = i.call(n, f)
            } else {
                i = d.call(n, i, f)
            }
            if (i || i === 0) {
                return i
            } else {
                return ""
            }
        }

        function j(n, e) {
            return "should be in Tips & Thanks"
        }

        function E(n, e) {
            return "not helpful"
        }

        function G(n, e) {
            return "low quality"
        }

        function K(n, e) {
            return "not about the video topic"
        }

        function W(n, e) {
            return "soliciting votes or seeking badges"
        }

        function z(n, e) {
            var i = "",
                l
            i += "\n                            <li>"
            t = a["_"]
            l = t || n["_"]
            f = p.program(43, D, e)
            f.hash = {}
            f.fn = f
            f.inverse = p.noop
            if (t && typeof l === c) {
                l = l.call(n, f)
            } else {
                l = d.call(n, l, f)
            }
            if (l || l === 0) {
                i += l
            }
            i += "</li>\n                        "
            return i
        }

        function D(n, e) {
            return "a homework question"
        }

        function I(n, e) {
            var i = "",
                l
            i += "\n                            <li>"
            t = a["_"]
            l = t || n["_"]
            f = p.program(46, J, e)
            f.hash = {}
            f.fn = f
            f.inverse = p.noop
            if (t && typeof l === c) {
                l = l.call(n, f)
            } else {
                l = d.call(n, l, f)
            }
            if (l || l === 0) {
                i += l
            }
            i += "</li>\n                        "
            return i
        }

        function J(n, e) {
            return "a duplicate answer"
        }

        function N(n, e) {
            return "repeatedly making the same post"
        }

        function O(n, e) {
            return "about the site"
        }

        function P(n, e) {
            return 'a question about Khan Academy (e.g. "What software does Sal use?")'
        }

        function R(n, e) {
            return "a post about badges"
        }

        function U(n, e) {
            return "a technical problem with the site"
        }

        function V(n, e) {
            return "a request for videos or features"
        }
        r += '<div class="modal hide" id="flag-modal">\n    <div class="modal-header">\n        <span class="close" data-dismiss="modal">&#215;</span>\n        <h2>'
        t = a["_"]
        o = t || e["_"]
        f = p.program(1, m, l)
        f.hash = {}
        f.fn = f
        f.inverse = p.noop
        if (t && typeof o === c) {
            o = o.call(e, f)
        } else {
            o = d.call(e, o, f)
        }
        if (o || o === 0) {
            r += o
        }
        r += '</h2>\n    </div>\n    <div class="modal-body">\n        <em>'
        t = a.feedback
        o = t || e.feedback
        if (typeof o === c) {
            o = o.call(e, {
                hash: {}
            })
        } else if (o === h) {
            o = u.call(e, "feedback", {
                hash: {}
            })
        }
        r += v(o) + '</em>\n\n        <div class="flag-options">\n            '
        r += "\n            <h4>"
        t = a["_"]
        o = t || e["_"]
        f = p.program(3, g, l)
        f.hash = {}
        f.fn = f
        f.inverse = p.noop
        if (t && typeof o === c) {
            o = o.call(e, f)
        } else {
            o = d.call(e, o, f)
        }
        if (o || o === 0) {
            r += o
        }
        r += '</h4>\n            <div class="flag-row">\n                <div class="simple-button flag-as" data-flag="inappropriate">\n                    <h4>'
        t = a["_"]
        o = t || e["_"]
        f = p.program(5, _, l)
        f.hash = {}
        f.fn = f
        f.inverse = p.noop
        if (t && typeof o === c) {
            o = o.call(e, f)
        } else {
            o = d.call(e, o, f)
        }
        if (o || o === 0) {
            r += o
        }
        r += "</h4>\n                    <ul>\n                        <li>"
        t = a["_"]
        o = t || e["_"]
        f = p.program(7, y, l)
        f.hash = {}
        f.fn = f
        f.inverse = p.noop
        if (t && typeof o === c) {
            o = o.call(e, f)
        } else {
            o = d.call(e, o, f)
        }
        if (o || o === 0) {
            r += o
        }
        r += "</li>\n                        <li>"
        t = a["_"]
        o = t || e["_"]
        f = p.program(9, b, l)
        f.hash = {}
        f.fn = f
        f.inverse = p.noop
        if (t && typeof o === c) {
            o = o.call(e, f)
        } else {
            o = d.call(e, o, f)
        }
        if (o || o === 0) {
            r += o
        }
        r += '</li>\n                    </ul>\n                </div>\n                <div class="flag-separator"></div>\n                '
        t = a.canBeChanged
        o = t || e.canBeChanged
        s = a["if"]
        f = p.program(11, k, l)
        f.hash = {}
        f.fn = f
        f.inverse = p.noop
        o = s.call(e, o, f)
        if (o || o === 0) {
            r += o
        }
        r += '\n            </div>\n            <div class="flag-row">\n                <div class="simple-button flag-as" data-flag="lowquality">\n                    <h4>'
        t = a["_"]
        o = t || e["_"]
        f = p.program(34, E, l)
        f.hash = {}
        f.fn = f
        f.inverse = p.noop
        if (t && typeof o === c) {
            o = o.call(e, f)
        } else {
            o = d.call(e, o, f)
        }
        if (o || o === 0) {
            r += o
        }
        r += "</h4>\n                    <ul>\n                        <li>"
        t = a["_"]
        o = t || e["_"]
        f = p.program(36, G, l)
        f.hash = {}
        f.fn = f
        f.inverse = p.noop
        if (t && typeof o === c) {
            o = o.call(e, f)
        } else {
            o = d.call(e, o, f)
        }
        if (o || o === 0) {
            r += o
        }
        r += "</li>\n                        <li>"
        t = a["_"]
        o = t || e["_"]
        f = p.program(38, K, l)
        f.hash = {}
        f.fn = f
        f.inverse = p.noop
        if (t && typeof o === c) {
            o = o.call(e, f)
        } else {
            o = d.call(e, o, f)
        }
        if (o || o === 0) {
            r += o
        }
        r += "</li>\n                        <li>"
        t = a["_"]
        o = t || e["_"]
        f = p.program(40, W, l)
        f.hash = {}
        f.fn = f
        f.inverse = p.noop
        if (t && typeof o === c) {
            o = o.call(e, f)
        } else {
            o = d.call(e, o, f)
        }
        if (o || o === 0) {
            r += o
        }
        r += "</li>\n                        "
        t = a.isQuestion
        o = t || e.isQuestion
        s = a["if"]
        f = p.program(42, z, l)
        f.hash = {}
        f.fn = f
        f.inverse = p.noop
        o = s.call(e, o, f)
        if (o || o === 0) {
            r += o
        }
        r += "\n                        "
        t = a.isAnswer
        o = t || e.isAnswer
        s = a["if"]
        f = p.program(45, I, l)
        f.hash = {}
        f.fn = f
        f.inverse = p.noop
        o = s.call(e, o, f)
        if (o || o === 0) {
            r += o
        }
        r += "\n                        <li>"
        t = a["_"]
        o = t || e["_"]
        f = p.program(48, N, l)
        f.hash = {}
        f.fn = f
        f.inverse = p.noop
        if (t && typeof o === c) {
            o = o.call(e, f)
        } else {
            o = d.call(e, o, f)
        }
        if (o || o === 0) {
            r += o
        }
        r += '</li>\n                    </ul>\n                </div>\n                <div class="flag-separator"></div>\n                <div class="simple-button flag-as" data-flag="doesnotbelong">\n                    <h4>'
        t = a["_"]
        o = t || e["_"]
        f = p.program(50, O, l)
        f.hash = {}
        f.fn = f
        f.inverse = p.noop
        if (t && typeof o === c) {
            o = o.call(e, f)
        } else {
            o = d.call(e, o, f)
        }
        if (o || o === 0) {
            r += o
        }
        r += "</h4>\n                    <ul>\n                        <li>"
        t = a["_"]
        o = t || e["_"]
        f = p.program(52, P, l)
        f.hash = {}
        f.fn = f
        f.inverse = p.noop
        if (t && typeof o === c) {
            o = o.call(e, f)
        } else {
            o = d.call(e, o, f)
        }
        if (o || o === 0) {
            r += o
        }
        r += "</li>\n                        <li>"
        t = a["_"]
        o = t || e["_"]
        f = p.program(54, R, l)
        f.hash = {}
        f.fn = f
        f.inverse = p.noop
        if (t && typeof o === c) {
            o = o.call(e, f)
        } else {
            o = d.call(e, o, f)
        }
        if (o || o === 0) {
            r += o
        }
        r += "</li>\n                        <li>"
        t = a["_"]
        o = t || e["_"]
        f = p.program(56, U, l)
        f.hash = {}
        f.fn = f
        f.inverse = p.noop
        if (t && typeof o === c) {
            o = o.call(e, f)
        } else {
            o = d.call(e, o, f)
        }
        if (o || o === 0) {
            r += o
        }
        r += "</li>\n                        <li>"
        t = a["_"]
        o = t || e["_"]
        f = p.program(58, V, l)
        f.hash = {}
        f.fn = f
        f.inverse = p.noop
        if (t && typeof o === c) {
            o = o.call(e, f)
        } else {
            o = d.call(e, o, f)
        }
        if (o || o === 0) {
            r += o
        }
        r += "</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"
        return r
    })

    function wrapped_template(n, e) {
        return absoluteLinks.makeHtmlLinksSafe(template(n, e))
    }
    module.exports = wrapped_template
});
KAdefine("javascript/discussion-package/scratchpad-flag-modal.handlebars", function(require, module, exports) {
    require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
    var absoluteLinks = require("../shared-package/absolute-links.js")
    var template = Handlebars.template(function(n, i, e, a, l) {
        e = e || n.helpers
        var o = "",
            t, s, r, f, p = this,
            c = "function",
            u = e.blockHelperMissing

        function d(n, i) {
            return "Flag project for Guardian attention"
        }

        function g(n, i) {
            return "Please consult our project guidelines for what we consider to be appropriate project."
        }

        function v(n, i) {
            return "How does this project violate the guidelines?"
        }

        function h(n, i) {
            return "This project is:"
        }

        function m(n, i) {
            return "<h4>abuse</h4>\n                    <ul>\n                        <li>disrespectful or offensive</li>\n                        <li>advertisement for off-site company/service</li>\n                    </ul>"
        }

        function b(n, i) {
            return "<h4>plagiarism</h4>\n                    <ul>\n                        <li>not a spin-off and not giving credit to original author</li>\n                    </ul>"
        }

        function y(n, i) {
            return "<h4>soliciting votes</h4>\n                    <ul>\n                        <li>requesting votes</li>\n                        <li>making promises for votes</li>\n                        <li>receiving votes from a voting ring</li>\n                    </ul>"
        }

        function _(n, i) {
            var a = "",
                l
            a += '\n                <div class="simple-button flag-as" type="button" data-flag="using-disallowed">\n                    '
            r = e["_"]
            l = r || n["_"]
            f = p.program(16, w, i)
            f.hash = {}
            f.fn = f
            f.inverse = p.noop
            if (r && typeof l === c) {
                l = l.call(n, f)
            } else {
                l = u.call(n, l, f)
            }
            if (l || l === 0) {
                a += l
            }
            a += '\n                </div>\n                <div class="flag-separator"></div>\n                '
            return a
        }

        function w(n, i) {
            return "<h4>using disallowed functionality</h4>\n                    <ul>\n                        <li>accessing externals or the DOM to go beyond allowed functionality</li>\n                        <li>examples: playing sounds inappropriately, using localStorage</li>\n                    </ul>"
        }

        function j(n, i) {
            return "<h4>off-topic</h4>\n                    <ul>\n                        <li>petitions to change the site</li>\n                        <li>contentious projects about politics, religion/atheism, or personal issues</li>\n                    </ul>"
        }
        o += '<div class="modal hide scratchpad-flag-modal" id="flag-modal">\n    <div class="modal-header">\n        <span class="close" data-dismiss="modal">&#215;</span>\n        <h2>'
        r = e["_"]
        t = r || i["_"]
        f = p.program(1, d, l)
        f.hash = {}
        f.fn = f
        f.inverse = p.noop
        if (r && typeof t === c) {
            t = t.call(i, f)
        } else {
            t = u.call(i, t, f)
        }
        if (t || t === 0) {
            o += t
        }
        o += '</h2>\n    </div>\n    <div class="modal-body">\n        '
        r = e["_"]
        t = r || i["_"]
        f = p.program(3, g, l)
        f.hash = {}
        f.fn = f
        f.inverse = p.noop
        if (r && typeof t === c) {
            t = t.call(i, f)
        } else {
            t = u.call(i, t, f)
        }
        if (t || t === 0) {
            o += t
        }
        o += "<br>\n        <label>"
        r = e["_"]
        t = r || i["_"]
        f = p.program(5, v, l)
        f.hash = {}
        f.fn = f
        f.inverse = p.noop
        if (r && typeof t === c) {
            t = t.call(i, f)
        } else {
            t = u.call(i, t, f)
        }
        if (t || t === 0) {
            o += t
        }
        o += '</label>\n        <br>\n        <textarea name="justification" rows="3"></textarea>\n        <div class="flag-options">\n            <label>'
        r = e["_"]
        t = r || i["_"]
        f = p.program(7, h, l)
        f.hash = {}
        f.fn = f
        f.inverse = p.noop
        if (r && typeof t === c) {
            t = t.call(i, f)
        } else {
            t = u.call(i, t, f)
        }
        if (t || t === 0) {
            o += t
        }
        o += '</label><br>\n            <div class="flag-row">\n                <div class="simple-button flag-as" type="button" data-flag="inappropriate">\n                    '
        r = e["_"]
        t = r || i["_"]
        f = p.program(9, m, l)
        f.hash = {}
        f.fn = f
        f.inverse = p.noop
        if (r && typeof t === c) {
            t = t.call(i, f)
        } else {
            t = u.call(i, t, f)
        }
        if (t || t === 0) {
            o += t
        }
        o += '\n                </div>\n                <div class="flag-separator"></div>\n                <div class="simple-button flag-as" type="button" data-flag="plagiarism">\n                    '
        r = e["_"]
        t = r || i["_"]
        f = p.program(11, b, l)
        f.hash = {}
        f.fn = f
        f.inverse = p.noop
        if (r && typeof t === c) {
            t = t.call(i, f)
        } else {
            t = u.call(i, t, f)
        }
        if (t || t === 0) {
            o += t
        }
        o += '\n                </div>\n                <div class="flag-separator"></div>\n                <div class="simple-button flag-as" type="button" data-flag="vote-soliciting">\n                    '
        r = e["_"]
        t = r || i["_"]
        f = p.program(13, y, l)
        f.hash = {}
        f.fn = f
        f.inverse = p.noop
        if (r && typeof t === c) {
            t = t.call(i, f)
        } else {
            t = u.call(i, t, f)
        }
        if (t || t === 0) {
            o += t
        }
        o += '\n                </div>\n            </div>\n            <div class="flag-row">\n                '
        r = e.isComputerProgramming
        t = r || i.isComputerProgramming
        s = e["if"]
        f = p.program(15, _, l)
        f.hash = {}
        f.fn = f
        f.inverse = p.noop
        t = s.call(i, t, f)
        if (t || t === 0) {
            o += t
        }
        o += '\n                <div class="simple-button flag-as" type="button" data-flag="doesnotbelong">\n                    '
        r = e["_"]
        t = r || i["_"]
        f = p.program(18, j, l)
        f.hash = {}
        f.fn = f
        f.inverse = p.noop
        if (r && typeof t === c) {
            t = t.call(i, f)
        } else {
            t = u.call(i, t, f)
        }
        if (t || t === 0) {
            o += t
        }
        o += "\n                </div>\n            </div>\n        </div>\n\n        </div>\n    </div>\n</div>\n"
        return o
    })

    function wrapped_template(n, i) {
        return absoluteLinks.makeHtmlLinksSafe(template(n, i))
    }
    module.exports = wrapped_template
});
KAdefine("javascript/discussion-package/discussion.handlebars", function(require, module, exports) {
    require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
    var absoluteLinks = require("../shared-package/absolute-links.js")
    var template = Handlebars.template(function(e, i, s, n, a) {
        s = s || e.helpers
        n = n || e.partials
        var t = "",
            r, o, l, u, d = this

        function c(e, i) {
            return "hide-meta-panels"
        }

        function p(e, i) {
            return "new-ask-question-ui"
        }

        function v(e, i) {
            var a = "",
                t
            a += "\n    "
            t = e
            t = d.invokePartial(n["discussion_discussion-guidelines"], "discussion_discussion-guidelines", t, s, n)
            if (t || t === 0) {
                a += t
            }
            a += "\n    "
            return a
        }
        t += '<div class="discussion-container '
        l = s.hideMetaPanels
        r = l || i.hideMetaPanels
        o = s["if"]
        u = d.program(1, c, a)
        u.hash = {}
        u.fn = u
        u.inverse = d.noop
        r = o.call(i, r, u)
        if (r || r === 0) {
            t += r
        }
        t += " "
        l = s.newAskQuestionUi
        r = l || i.newAskQuestionUi
        o = s["if"]
        u = d.program(3, p, a)
        u.hash = {}
        u.fn = u
        u.inverse = d.noop
        r = o.call(i, r, u)
        if (r || r === 0) {
            t += r
        }
        t += '">\n    <div class="clear"></div>\n    '
        r = i
        r = d.invokePartial(n["discussion_video-discussion"], "discussion_video-discussion", r, s, n)
        if (r || r === 0) {
            t += r
        }
        t += "\n\n    "
        l = s.hideMetaPanels
        r = l || i.hideMetaPanels
        o = s.unless
        u = d.program(5, v, a)
        u.hash = {}
        u.fn = u
        u.inverse = d.noop
        r = o.call(i, r, u)
        if (r || r === 0) {
            t += r
        }
        t += '\n\n    <div class="clear"></div>\n</div>\n'
        return t
    })

    function wrapped_template(e, i) {
        return absoluteLinks.makeHtmlLinksSafe(template(e, i))
    }
    module.exports = wrapped_template
});
KAdefine("javascript/discussion-package/video-discussion.handlebars", function(require, module, exports) {
    require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
    var absoluteLinks = require("../shared-package/absolute-links.js")
    var template = Handlebars.template(function(n, e, i, s, a) {
        i = i || n.helpers
        s = s || n.partials
        var t = "",
            o, r, l, c, d = this,
            f = "function",
            p = i.blockHelperMissing,
            u = i.helperMissing,
            h = void 0,
            v = this.escapeExpression

        function m(n, e) {
            return "Show all questions"
        }

        function b(n, e) {
            var s = "",
                a, t
            s += "\n    "
            l = i.canRequestFeedback
            a = l || n.canRequestFeedback
            t = i.unless
            c = d.program(4, g, e)
            c.hash = {}
            c.fn = c
            c.inverse = d.noop
            a = t.call(n, a, c)
            if (a || a === 0) {
                s += a
            }
            s += "\n    "
            return s
        }

        function g(n, e) {
            var s = "",
                a, t
            s += "\n    "
            l = i.restrictPosting
            a = l || n.restrictPosting
            t = i.unless
            c = d.program(5, y, e)
            c.hash = {}
            c.fn = c
            c.inverse = d.noop
            a = t.call(n, a, c)
            if (a || a === 0) {
                s += a
            }
            s += "\n    "
            return s
        }

        function y(n, e) {
            var a = "",
                t
            a += '\n        <div class="ask-question-container">\n           '
            t = n
            t = d.invokePartial(s["discussion_question-form"], "discussion_question-form", t, i, s)
            if (t || t === 0) {
                a += t
            }
            a += "\n        </div>\n    "
            return a
        }

        function k(n, e) {
            return 'style="display:none;"'
        }

        function _(n, e) {
            return "Questions"
        }

        function P(n, e) {
            return 'style="display:none;"'
        }

        function q(n, e) {
            return "Tips &amp; Thanks"
        }

        function j(n, e) {
            var s = "",
                a
            s += '\n            <li id="projectfeedback-tab-header" data-type="projectfeedback" class="tabitem" role="tab">\n                <a href="javascript:void(0);">'
            l = i["_"]
            a = l || n["_"]
            c = d.program(16, w, e)
            c.hash = {}
            c.fn = c
            c.inverse = d.noop
            if (l && typeof a === f) {
                a = a.call(n, c)
            } else {
                a = p.call(n, a, c)
            }
            if (a || a === 0) {
                s += a
            }
            s += "</a>\n            </li>\n            "
            return s
        }

        function w(n, e) {
            return "Help Requests"
        }

        function M(n, e) {
            var s = "",
                a, t
            s += '\n            <li data-type="clarifications" class="tabitem" style="display: none;">\n                <a href="javascript:void(0);">'
            l = i["_"]
            a = l || n["_"]
            c = d.program(19, x, e)
            c.hash = {}
            c.fn = c
            c.inverse = d.noop
            if (l && typeof a === f) {
                a = a.call(n, c)
            } else {
                a = p.call(n, a, c)
            }
            if (a || a === 0) {
                s += a
            }
            s += "</a>\n            </li>\n            "
            l = i.hideMetaPanels
            a = l || n.hideMetaPanels
            t = i["if"]
            c = d.program(21, F, e)
            c.hash = {}
            c.fn = c
            c.inverse = d.noop
            a = t.call(n, a, c)
            if (a || a === 0) {
                s += a
            }
            s += "\n            "
            return s
        }

        function x(n, e) {
            return "Clarifications"
        }

        function F(n, e) {
            var s = "",
                a
            s += '\n            <li id="report-a-mistake-tab-header" data-type="reportamistake" class="tabitem" role="tab" aria-controls="report-a-mistake-tab">\n                <a href="javascript:void(0);">\n                    '
            l = i["_"]
            a = l || n["_"]
            c = d.program(22, Q, e)
            c.hash = {}
            c.fn = c
            c.inverse = d.noop
            if (l && typeof a === f) {
                a = a.call(n, c)
            } else {
                a = p.call(n, a, c)
            }
            if (a || a === 0) {
                s += a
            }
            s += '\n                </a>\n            </li>\n            <li id="guidelines-tab-header" data-type="guidelines" class="tabitem" role="tab" aria-controls="guidelines-tab">\n                <a href="javascript:void(0);">\n                    '
            l = i["_"]
            a = l || n["_"]
            c = d.program(24, U, e)
            c.hash = {}
            c.fn = c
            c.inverse = d.noop
            if (l && typeof a === f) {
                a = a.call(n, c)
            } else {
                a = p.call(n, a, c)
            }
            if (a || a === 0) {
                s += a
            }
            s += "\n                </a>\n            </li>\n            "
            return s
        }

        function Q(n, e) {
            return "Report a mistake"
        }

        function U(n, e) {
            return "Guidelines"
        }

        function R(n, e) {
            return '\n        <span class="discussion-list-sort pure-hidden-xs"></span>\n        '
        }

        function A(n, e) {
            return '\n    <div class="discussion-list-sort pure-hidden-xs"></div>\n    '
        }

        function E(n, e) {
            var s = "",
                a
            s += '\n            <div class="post-guidelines alert">\n                '
            l = i["_"]
            a = l || n["_"]
            c = d.program(31, H, e)
            c.hash = {}
            c.fn = c
            c.inverse = d.noop
            if (l && typeof a === f) {
                a = a.call(n, c)
            } else {
                a = p.call(n, a, c)
            }
            if (a || a === 0) {
                s += a
            }
            s += "\n            </div>\n        "
            return s
        }

        function H(n, e) {
            return '\n                Want to ask a question to the community about improving your project?\n                <br>\n                Head over to the <a href="javascript:void(0);" data-tab-target="projectfeedback">help requests tab</a>!\n                <br>\n                We\'ll keep this area for questions that the community has for you about your project.'
        }

        function C(n, e) {
            var s = "",
                a, t
            s += "\n            "
            l = i.newAskQuestionUi
            a = l || n.newAskQuestionUi
            t = i.unless
            c = d.program(34, L, e)
            c.hash = {}
            c.fn = c
            c.inverse = d.noop
            a = t.call(n, a, c)
            if (a || a === 0) {
                s += a
            }
            s += "\n        "
            return s
        }

        function L(n, e) {
            var s = "",
                a, t
            s += "\n            "
            l = i.restrictPosting
            a = l || n.restrictPosting
            t = i.unless
            c = d.program(35, S, e)
            c.hash = {}
            c.fn = c
            c.inverse = d.noop
            a = t.call(n, a, c)
            if (a || a === 0) {
                s += a
            }
            s += "\n            "
            return s
        }

        function S(n, e) {
            var a = "",
                t
            a += "\n                "
            t = n
            t = d.invokePartial(s["discussion_question-form"], "discussion_question-form", t, i, s)
            if (t || t === 0) {
                a += t
            }
            a += "\n            "
            return a
        }

        function T(n, e) {
            var a = "",
                t
            a += "\n            "
            t = n
            t = d.invokePartial(s["discussion_comment-form"], "discussion_comment-form", t, i, s)
            if (t || t === 0) {
                a += t
            }
            a += "\n        "
            return a
        }

        function W(n, e) {
            var a = "",
                t
            a += '\n    <div id="guidelines-tab" class="tab guidelines-tab" style="display: none;" role="tabpanel" aria-labelledby="guidelines-tab-header">\n        <div class="guidelines">\n            '
            t = n
            t = d.invokePartial(s["discussion_meta-panel-guidelines"], "discussion_meta-panel-guidelines", t, i, s)
            if (t || t === 0) {
                a += t
            }
            a += '\n        </div>\n    </div>\n    <div id="report-a-mistake-tab" class="tab report-a-mistake-tab" style="display: none;" aria-labelledby="report-a-mistake-tab-header">\n        <div class="report-a-mistake">\n            '
            t = n
            t = d.invokePartial(s["discussion_meta-panel-report-a-mistake"], "discussion_meta-panel-report-a-mistake", t, i, s)
            if (t || t === 0) {
                a += t
            }
            a += "\n        </div>\n    </div>\n    "
            return a
        }

        function D(n, e) {
            return '\n    <div class="tab projectfeedback-tab" style="display:none;">\n        <div class="projectfeedback"></div>\n    </div>\n    '
        }

        function G(n, e) {
            return "Loading..."
        }

        function K(n, e) {
            return "Do you understand English? Click here to see more discussion happening on Khan Academy's English site."
        }
        t += '\n\n<div class="video-discussion">\n    <div class="expand-discussions-button-container">\n        <a class="expand-discussions-button" href="#">\n            '
        l = i["_"]
        o = l || e["_"]
        c = d.program(1, m, a)
        c.hash = {}
        c.fn = c
        c.inverse = d.noop
        if (l && typeof o === f) {
            o = o.call(e, c)
        } else {
            o = p.call(e, o, c)
        }
        if (o || o === 0) {
            t += o
        }
        t += '\n            <span class="questions-count"></span>\n            <i class="icon-caret-down expanded-icon pull-right"></i>\n        </a>\n    </div>\n\n    '
        t += '\n    <div class="video-feedback-container upper pure-hidden-xs" style="display: none;"></div>\n    '
        l = i.newAskQuestionUi
        o = l || e.newAskQuestionUi
        r = i["if"]
        c = d.program(3, b, a)
        c.hash = {}
        c.fn = c
        c.inverse = d.noop
        o = r.call(e, o, c)
        if (o || o === 0) {
            t += o
        }
        t += '\n    <div class="video-discussion-header">\n        <ul class="tabrow" role="tablist">\n            <li id="questions-tab-header" data-type="questions" class="tabitem selected" '
        l = i.hideQuestions
        o = l || e.hideQuestions
        r = i["if"]
        c = d.program(7, k, a)
        c.hash = {}
        c.fn = c
        c.inverse = d.noop
        o = r.call(e, o, c)
        if (o || o === 0) {
            t += o
        }
        t += ' role="tab">\n                <a href="javascript:void(0);">\n                    '
        l = i["_"]
        o = l || e["_"]
        c = d.program(9, _, a)
        c.hash = {}
        c.fn = c
        c.inverse = d.noop
        if (l && typeof o === f) {
            o = o.call(e, c)
        } else {
            o = p.call(e, o, c)
        }
        if (o || o === 0) {
            t += o
        }
        t += '\n                </a>\n            </li>\n            <li id="comments-tab-header" data-type="comments" class="tabitem" '
        l = i.hideComments
        o = l || e.hideComments
        r = i["if"]
        c = d.program(11, P, a)
        c.hash = {}
        c.fn = c
        c.inverse = d.noop
        o = r.call(e, o, c)
        if (o || o === 0) {
            t += o
        }
        t += ' role="tab">\n                <a href="javascript:void(0);">\n                    '
        l = i["_"]
        o = l || e["_"]
        c = d.program(13, q, a)
        c.hash = {}
        c.fn = c
        c.inverse = d.noop
        if (l && typeof o === f) {
            o = o.call(e, c)
        } else {
            o = p.call(e, o, c)
        }
        if (o || o === 0) {
            t += o
        }
        t += "\n                </a>\n            </li>\n            "
        l = i.showProjectFeedback
        o = l || e.showProjectFeedback
        r = i["if"]
        c = d.program(15, j, a)
        c.hash = {}
        c.fn = c
        c.inverse = d.noop
        o = r.call(e, o, c)
        if (o || o === 0) {
            t += o
        }
        t += "\n            "
        l = i.clarificationsEnabled
        o = l || e.clarificationsEnabled
        r = i["if"]
        c = d.program(18, M, a)
        c.hash = {}
        c.fn = c
        c.inverse = d.noop
        o = r.call(e, o, c)
        if (o || o === 0) {
            t += o
        }
        t += "\n        </ul>\n        "
        l = i.hideMetaPanels
        o = l || e.hideMetaPanels
        r = i.unless
        c = d.program(26, R, a)
        c.hash = {}
        c.fn = c
        c.inverse = d.noop
        o = r.call(e, o, c)
        if (o || o === 0) {
            t += o
        }
        t += "\n    </div>\n    "
        l = i.hideMetaPanels
        o = l || e.hideMetaPanels
        r = i["if"]
        c = d.program(28, A, a)
        c.hash = {}
        c.fn = c
        c.inverse = d.noop
        o = r.call(e, o, c)
        if (o || o === 0) {
            t += o
        }
        t += '\n\n\n    <div class="tab questions-tab">\n        '
        l = i.canRequestFeedback
        o = l || e.canRequestFeedback
        r = i["if"]
        c = d.program(30, E, a)
        c.hash = {}
        c.fn = c
        c.inverse = d.program(33, C, a)
        o = r.call(e, o, c)
        if (o || o === 0) {
            t += o
        }
        t += '\n        <div class="questions">\n            '
        o = e
        o = d.invokePartial(s["discussion_discussion-list"], "discussion_discussion-list", o, i, s)
        if (o || o === 0) {
            t += o
        }
        t += '\n        </div>\n    </div>\n\n    <div class="tab comments-tab" style="display: none;">\n        '
        l = i.restrictPosting
        o = l || e.restrictPosting
        r = i.unless
        c = d.program(37, T, a)
        c.hash = {}
        c.fn = c
        c.inverse = d.noop
        o = r.call(e, o, c)
        if (o || o === 0) {
            t += o
        }
        t += '\n        <div class="comments"></div>\n    </div>\n\n    <div class="tab spin-offs-tab" style="display: none;">\n        <div class="spin-offs"></div>\n    </div>\n\n    '
        l = i.hideMetaPanels
        o = l || e.hideMetaPanels
        r = i["if"]
        c = d.program(39, W, a)
        c.hash = {}
        c.fn = c
        c.inverse = d.noop
        o = r.call(e, o, c)
        if (o || o === 0) {
            t += o
        }
        t += "\n\n    "
        l = i.showProjectFeedback
        o = l || e.showProjectFeedback
        r = i["if"]
        c = d.program(41, D, a)
        c.hash = {}
        c.fn = c
        c.inverse = d.noop
        o = r.call(e, o, c)
        if (o || o === 0) {
            t += o
        }
        t += '\n\n    <div class="tab clarifications-tab" style="display: none;">\n        <div class="clarifications"></div>\n    </div>\n\n    <div class="discussion-progress-bar" style="display:none"><img src="'
        o = "/images/throbber.gif"
        l = i.staticUrl
        r = l || e.staticUrl
        if (typeof r === f) {
            o = r.call(e, o, {
                hash: {}
            })
        } else if (r === h) {
            o = u.call(e, "staticUrl", o, {
                hash: {}
            })
        } else {
            o = r
        }
        t += v(o) + '" alt="'
        l = i["_"]
        o = l || e["_"]
        c = d.program(43, G, a)
        c.hash = {}
        c.fn = c
        c.inverse = d.noop
        if (l && typeof o === f) {
            o = o.call(e, c)
        } else {
            o = p.call(e, o, c)
        }
        if (o || o === 0) {
            t += o
        }
        t += '"></div>\n    <a class="discussion-i18n-message" style="display: none">'
        l = i["_"]
        o = l || e["_"]
        c = d.program(45, K, a)
        c.hash = {}
        c.fn = c
        c.inverse = d.noop
        if (l && typeof o === f) {
            o = o.call(e, c)
        } else {
            o = p.call(e, o, c)
        }
        if (o || o === 0) {
            t += o
        }
        t += "</a>\n</div>\n"
        return t
    })

    function wrapped_template(n, e) {
        return absoluteLinks.makeHtmlLinksSafe(template(n, e))
    }
    module.exports = wrapped_template
});
KAdefine("javascript/discussion-package/discussion-guidelines.handlebars", function(require, module, exports) {
    require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
    var absoluteLinks = require("../shared-package/absolute-links.js")
    var template = Handlebars.template(function(n, e, i, a, s) {
        i = i || n.helpers
        var r = "",
            o, l, t, f, c = this,
            p = "function",
            u = i.helperMissing,
            h = void 0,
            m = this.escapeExpression,
            d = i.blockHelperMissing

        function v(n, e) {
            var a = "",
                s, r
            a += "\n    "
            t = i.communityQuestionsUrl
            s = t || n.communityQuestionsUrl
            r = i["if"]
            f = c.program(2, g, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            s = r.call(n, s, f)
            if (s || s === 0) {
                a += s
            }
            a += "\n\n    "
            t = i.isVideo
            s = t || n.isVideo
            r = i["if"]
            f = c.program(7, b, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            s = r.call(n, s, f)
            if (s || s === 0) {
                a += s
            }
            a += "\n\n    "
            t = i.isArticle
            s = t || n.isArticle
            r = i["if"]
            f = c.program(25, C, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            s = r.call(n, s, f)
            if (s || s === 0) {
                a += s
            }
            a += '\n\n    <div class="discussion-guidelines-header">'
            t = i["_"]
            s = t || n["_"]
            f = c.program(43, S, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            if (t && typeof s === p) {
                s = s.call(n, f)
            } else {
                s = d.call(n, s, f)
            }
            if (s || s === 0) {
                a += s
            }
            a += "</div>\n        <p>\n            "
            t = i["_"]
            s = t || n["_"]
            f = c.program(45, G, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            if (t && typeof s === p) {
                s = s.call(n, f)
            } else {
                s = d.call(n, s, f)
            }
            if (s || s === 0) {
                a += s
            }
            a += "\n        </p>\n    <br>\n    "
            return a
        }

        function g(n, e) {
            var a = "",
                s
            a += '\n    <div class="discussion-guidelines-header">'
            t = i["_"]
            s = t || n["_"]
            f = c.program(3, _, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            if (t && typeof s === p) {
                s = s.call(n, f)
            } else {
                s = d.call(n, s, f)
            }
            if (s || s === 0) {
                a += s
            }
            a += "</div>\n    <p>\n        "
            t = i["_"]
            s = t || n["_"]
            f = c.program(5, y, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            if (t && typeof s === p) {
                s = s.call(n, f)
            } else {
                s = d.call(n, s, f)
            }
            if (s || s === 0) {
                a += s
            }
            a += "\n    </p>\n    <br>\n    "
            return a
        }

        function _(n, e) {
            return "Answer more questions"
        }

        function y(n, e) {
            var a = "",
                s
            a += 'Visit <a href="'
            t = i.communityQuestionsUrl
            s = t || n.communityQuestionsUrl
            if (typeof s === p) {
                s = s.call(n, {
                    hash: {}
                })
            } else if (s === h) {
                s = u.call(n, "communityQuestionsUrl", {
                    hash: {}
                })
            }
            a += m(s) + '">Community Questions</a>\n        to answer new questions in\n        <a href="'
            t = i.communityQuestionsUrl
            s = t || n.communityQuestionsUrl
            if (typeof s === p) {
                s = s.call(n, {
                    hash: {}
                })
            } else if (s === h) {
                s = u.call(n, "communityQuestionsUrl", {
                    hash: {}
                })
            }
            a += m(s) + '">'
            t = i.translatedCommunityQuestionsTitle
            s = t || n.translatedCommunityQuestionsTitle
            if (typeof s === p) {
                s = s.call(n, {
                    hash: {}
                })
            } else if (s === h) {
                s = u.call(n, "translatedCommunityQuestionsTitle", {
                    hash: {}
                })
            }
            a += m(s) + "</a>."
            return a
        }

        function b(n, e) {
            var a = "",
                s, r
            a += "\n    "
            t = i.clarificationsEnabled
            s = t || n.clarificationsEnabled
            r = i["if"]
            f = c.program(8, k, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.program(17, x, e)
            s = r.call(n, s, f)
            if (s || s === 0) {
                a += s
            }
            a += "\n    "
            return a
        }

        function k(n, e) {
            var a = "",
                s
            a += '\n    <div class="discussion-guidelines-header">\n        '
            t = i["_"]
            s = t || n["_"]
            f = c.program(9, w, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            if (t && typeof s === p) {
                s = s.call(n, f)
            } else {
                s = d.call(n, s, f)
            }
            if (s || s === 0) {
                a += s
            }
            a += "\n    </div>\n    "
            t = i["_"]
            s = t || n["_"]
            f = c.program(11, Q, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            if (t && typeof s === p) {
                s = s.call(n, f)
            } else {
                s = d.call(n, s, f)
            }
            if (s || s === 0) {
                a += s
            }
            a += '\n    <p class="guideline-example">\n        '
            t = i["_"]
            s = t || n["_"]
            f = c.program(13, q, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            if (t && typeof s === p) {
                s = s.call(n, f)
            } else {
                s = d.call(n, s, f)
            }
            if (s || s === 0) {
                a += s
            }
            a += '\n    </p>\n    <p>\n    <a href="javascript:void 0;" class="simple-button suggest-clarification">'
            t = i["_"]
            s = t || n["_"]
            f = c.program(15, E, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            if (t && typeof s === p) {
                s = s.call(n, f)
            } else {
                s = d.call(n, s, f)
            }
            if (s || s === 0) {
                a += s
            }
            a += "</a>\n    </p>\n    <br>\n    "
            return a
        }

        function w(n, e) {
            return "Report a mistake in the video"
        }

        function Q(n, e) {
            return "Example:"
        }

        function q(n, e) {
            return 'At 2:33, Sal said "single bonds" but meant "covalent bonds."'
        }

        function E(n, e) {
            return "Report a mistake in the video"
        }

        function x(n, e) {
            var a = "",
                s, r
            a += "\n    "
            t = i.canEdit
            s = t || n.canEdit
            r = i["if"]
            f = c.program(18, A, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            s = r.call(n, s, f)
            if (s || s === 0) {
                a += s
            }
            a += "\n    "
            return a
        }

        function A(n, e) {
            var a = "",
                s
            a += '\n    <div class="discussion-guidelines-header">\n        '
            t = i["_"]
            s = t || n["_"]
            f = c.program(19, R, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            if (t && typeof s === p) {
                s = s.call(n, f)
            } else {
                s = d.call(n, s, f)
            }
            if (s || s === 0) {
                a += s
            }
            a += "\n    </div>\n    <p>\n    "
            t = i["_"]
            s = t || n["_"]
            f = c.program(21, U, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            if (t && typeof s === p) {
                s = s.call(n, f)
            } else {
                s = d.call(n, s, f)
            }
            if (s || s === 0) {
                a += s
            }
            a += '\n    </p>\n    <p>\n    <a href="javascript:void 0;" class="simple-button suggest-clarification">'
            t = i["_"]
            s = t || n["_"]
            f = c.program(23, V, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            if (t && typeof s === p) {
                s = s.call(n, f)
            } else {
                s = d.call(n, s, f)
            }
            if (s || s === 0) {
                a += s
            }
            a += "</a>\n    </p>\n    <br>\n    "
            return a
        }

        function R(n, e) {
            return "Report a mistake in the video"
        }

        function U(n, e) {
            return "Clarifications are disabled for this video."
        }

        function V(n, e) {
            return "View existing clarifications"
        }

        function C(n, e) {
            var a = "",
                s, r
            a += "\n    "
            t = i.clarificationsEnabled
            s = t || n.clarificationsEnabled
            r = i["if"]
            f = c.program(26, P, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.program(35, F, e)
            s = r.call(n, s, f)
            if (s || s === 0) {
                a += s
            }
            a += "\n    "
            return a
        }

        function P(n, e) {
            var a = "",
                s
            a += '\n    <div class="discussion-guidelines-header">\n        '
            t = i["_"]
            s = t || n["_"]
            f = c.program(27, T, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            if (t && typeof s === p) {
                s = s.call(n, f)
            } else {
                s = d.call(n, s, f)
            }
            if (s || s === 0) {
                a += s
            }
            a += "\n    </div>\n    "
            t = i["_"]
            s = t || n["_"]
            f = c.program(29, j, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            if (t && typeof s === p) {
                s = s.call(n, f)
            } else {
                s = d.call(n, s, f)
            }
            if (s || s === 0) {
                a += s
            }
            a += '\n    <p class="guideline-example">\n        '
            t = i["_"]
            s = t || n["_"]
            f = c.program(31, H, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            if (t && typeof s === p) {
                s = s.call(n, f)
            } else {
                s = d.call(n, s, f)
            }
            if (s || s === 0) {
                a += s
            }
            a += '\n    </p>\n    <p>\n    <a href="javascript:void 0;" class="simple-button suggest-clarification">'
            t = i["_"]
            s = t || n["_"]
            f = c.program(33, z, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            if (t && typeof s === p) {
                s = s.call(n, f)
            } else {
                s = d.call(n, s, f)
            }
            if (s || s === 0) {
                a += s
            }
            a += "</a>\n    </p>\n    <br>\n    "
            return a
        }

        function T(n, e) {
            return "Report a mistake in the article"
        }

        function j(n, e) {
            return "Example:"
        }

        function H(n, e) {
            return "The link in the third paragraph is broken."
        }

        function z(n, e) {
            return "Report a mistake in the article"
        }

        function F(n, e) {
            var a = "",
                s, r
            a += "\n    "
            t = i.canEdit
            s = t || n.canEdit
            r = i["if"]
            f = c.program(36, K, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            s = r.call(n, s, f)
            if (s || s === 0) {
                a += s
            }
            a += "\n    "
            return a
        }

        function K(n, e) {
            var a = "",
                s
            a += '\n    <div class="discussion-guidelines-header">\n        '
            t = i["_"]
            s = t || n["_"]
            f = c.program(37, L, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            if (t && typeof s === p) {
                s = s.call(n, f)
            } else {
                s = d.call(n, s, f)
            }
            if (s || s === 0) {
                a += s
            }
            a += "\n    </div>\n    <p>\n    "
            t = i["_"]
            s = t || n["_"]
            f = c.program(39, D, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            if (t && typeof s === p) {
                s = s.call(n, f)
            } else {
                s = d.call(n, s, f)
            }
            if (s || s === 0) {
                a += s
            }
            a += '\n    </p>\n    <p>\n    <a href="javascript:void 0;" class="simple-button suggest-clarification">'
            t = i["_"]
            s = t || n["_"]
            f = c.program(41, M, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            if (t && typeof s === p) {
                s = s.call(n, f)
            } else {
                s = d.call(n, s, f)
            }
            if (s || s === 0) {
                a += s
            }
            a += "</a>\n    </p>\n    <br>\n    "
            return a
        }

        function L(n, e) {
            return "Report a mistake in the article"
        }

        function D(n, e) {
            return "Clarifications are disabled for this article."
        }

        function M(n, e) {
            return "View existing clarifications"
        }

        function S(n, e) {
            return "Discuss the site"
        }

        function G(n, e) {
            return 'View <a href="https://khanacademy.zendesk.com/hc/communities/public/topics">general discussions about Khan Academy</a>.'
        }

        function I(n, e) {
            return "Flag inappropriate posts"
        }

        function B(n, e) {
            return "Here are posts to avoid making. If you do encounter them, flag them for attention from our Guardians."
        }

        function J(n, e) {
            return "abuse"
        }

        function N(n, e) {
            return "disrespectful or offensive"
        }

        function O(n, e) {
            return "an advertisement"
        }

        function W(n, e) {
            return "not helpful"
        }

        function X(n, e) {
            return "low quality"
        }

        function Y(n, e) {
            return "not about the video topic"
        }

        function Z(n, e) {
            return "contentious posts about politics, religion/atheism, or personal issues"
        }

        function ne(n, e) {
            return "soliciting votes or seeking badges"
        }

        function ee(n, e) {
            return "a homework question"
        }

        function ie(n, e) {
            return "a duplicate answer"
        }

        function ae(n, e) {
            return "repeatedly making the same post"
        }

        function se(n, e) {
            return "wrong category"
        }

        function re(n, e) {
            return "a tip or thanks in Questions"
        }

        function oe(n, e) {
            return "a question in Tips & Thanks"
        }

        function le(n, e) {
            return "an answer that should be its own question"
        }

        function te(n, e) {
            return "about the site"
        }

        function fe(n, e) {
            var a = "",
                s
            a += "\n            <li>\n                "
            t = i["_"]
            s = t || n["_"]
            f = c.program(84, ce, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            if (t && typeof s === p) {
                s = s.call(n, f)
            } else {
                s = d.call(n, s, f)
            }
            if (s || s === 0) {
                a += s
            }
            a += "\n            </li>\n        "
            return a
        }

        function ce(n, e) {
            return "a question about Khan Academy"
        }

        function pe(n, e) {
            var a = "",
                s
            a += "\n            <li>\n                "
            t = i["_"]
            s = t || n["_"]
            f = c.program(87, ue, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            if (t && typeof s === p) {
                s = s.call(n, f)
            } else {
                s = d.call(n, s, f)
            }
            if (s || s === 0) {
                a += s
            }
            a += '\n                <div class="discussion-guidelines-link">(<a href="https://khanacademy.zendesk.com/">'
            t = i["_"]
            s = t || n["_"]
            f = c.program(89, he, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            if (t && typeof s === p) {
                s = s.call(n, f)
            } else {
                s = d.call(n, s, f)
            }
            if (s || s === 0) {
                a += s
            }
            a += "</a>)</div>\n            </li>\n        "
            return a
        }

        function ue(n, e) {
            return "a question about Khan Academy"
        }

        function he(n, e) {
            return "Visit our FAQ"
        }

        function me(n, e) {
            return "a post about badges"
        }

        function de(n, e) {
            var a = "",
                s
            a += "\n            <li>\n                "
            t = i["_"]
            s = t || n["_"]
            f = c.program(94, ve, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            if (t && typeof s === p) {
                s = s.call(n, f)
            } else {
                s = d.call(n, s, f)
            }
            if (s || s === 0) {
                a += s
            }
            a += "\n            </li>\n            <li>\n                "
            t = i["_"]
            s = t || n["_"]
            f = c.program(96, ge, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            if (t && typeof s === p) {
                s = s.call(n, f)
            } else {
                s = d.call(n, s, f)
            }
            if (s || s === 0) {
                a += s
            }
            a += "\n            </li>\n        "
            return a
        }

        function ve(n, e) {
            return "a technical problem with the site"
        }

        function ge(n, e) {
            return "a request for videos or features"
        }

        function _e(n, e) {
            var a = "",
                s
            a += "\n            <li>\n                "
            t = i["_"]
            s = t || n["_"]
            f = c.program(99, ye, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            if (t && typeof s === p) {
                s = s.call(n, f)
            } else {
                s = d.call(n, s, f)
            }
            if (s || s === 0) {
                a += s
            }
            a += '\n                <div class="discussion-guidelines-link">(<a href="http://khanacademy.org/reportissue?type=Defect">'
            t = i["_"]
            s = t || n["_"]
            f = c.program(101, be, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            if (t && typeof s === p) {
                s = s.call(n, f)
            } else {
                s = d.call(n, s, f)
            }
            if (s || s === 0) {
                a += s
            }
            a += "</a>)</div>\n            </li>\n            <li>\n                "
            t = i["_"]
            s = t || n["_"]
            f = c.program(103, ke, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            if (t && typeof s === p) {
                s = s.call(n, f)
            } else {
                s = d.call(n, s, f)
            }
            if (s || s === 0) {
                a += s
            }
            a += "\n            </li>\n        "
            return a
        }

        function ye(n, e) {
            return "a technical problem with the site"
        }

        function be(n, e) {
            return "Report a problem"
        }

        function ke(n, e) {
            return 'a request for <a href="https://khanacademy.zendesk.com/hc/communities/public/topics/200136634-Feature-Requests">features</a>'
        }
        r += '<div class="main-discussion-guidelines discussion-guidelines">\n    '
        t = i.restrictPosting
        o = t || e.restrictPosting
        l = i.unless
        f = c.program(1, v, s)
        f.hash = {}
        f.fn = f
        f.inverse = c.noop
        o = l.call(e, o, f)
        if (o || o === 0) {
            r += o
        }
        r += '\n\n    <div class="discussion-guidelines-header">'
        t = i["_"]
        o = t || e["_"]
        f = c.program(47, I, s)
        f.hash = {}
        f.fn = f
        f.inverse = c.noop
        if (t && typeof o === p) {
            o = o.call(e, f)
        } else {
            o = d.call(e, o, f)
        }
        if (o || o === 0) {
            r += o
        }
        r += "</div>\n\n    <p>\n        "
        t = i["_"]
        o = t || e["_"]
        f = c.program(49, B, s)
        f.hash = {}
        f.fn = f
        f.inverse = c.noop
        if (t && typeof o === p) {
            o = o.call(e, f)
        } else {
            o = d.call(e, o, f)
        }
        if (o || o === 0) {
            r += o
        }
        r += "\n    </p>\n\n    "
        r += '\n    <div class="discussion-guidelines-subheader">'
        t = i["_"]
        o = t || e["_"]
        f = c.program(51, J, s)
        f.hash = {}
        f.fn = f
        f.inverse = c.noop
        if (t && typeof o === p) {
            o = o.call(e, f)
        } else {
            o = d.call(e, o, f)
        }
        if (o || o === 0) {
            r += o
        }
        r += "</div>\n    <ul>\n        "
        r += "\n        <li>"
        t = i["_"]
        o = t || e["_"]
        f = c.program(53, N, s)
        f.hash = {}
        f.fn = f
        f.inverse = c.noop
        if (t && typeof o === p) {
            o = o.call(e, f)
        } else {
            o = d.call(e, o, f)
        }
        if (o || o === 0) {
            r += o
        }
        r += "</li>\n        "
        r += "\n        <li>"
        t = i["_"]
        o = t || e["_"]
        f = c.program(55, O, s)
        f.hash = {}
        f.fn = f
        f.inverse = c.noop
        if (t && typeof o === p) {
            o = o.call(e, f)
        } else {
            o = d.call(e, o, f)
        }
        if (o || o === 0) {
            r += o
        }
        r += "</li>\n    </ul>\n\n    "
        r += '\n    <div class="discussion-guidelines-subheader">'
        t = i["_"]
        o = t || e["_"]
        f = c.program(57, W, s)
        f.hash = {}
        f.fn = f
        f.inverse = c.noop
        if (t && typeof o === p) {
            o = o.call(e, f)
        } else {
            o = d.call(e, o, f)
        }
        if (o || o === 0) {
            r += o
        }
        r += "</div>\n    <ul>\n        "
        r += "\n        <li>"
        t = i["_"]
        o = t || e["_"]
        f = c.program(59, X, s)
        f.hash = {}
        f.fn = f
        f.inverse = c.noop
        if (t && typeof o === p) {
            o = o.call(e, f)
        } else {
            o = d.call(e, o, f)
        }
        if (o || o === 0) {
            r += o
        }
        r += "</li>\n        "
        r += "\n        <li>"
        t = i["_"]
        o = t || e["_"]
        f = c.program(61, Y, s)
        f.hash = {}
        f.fn = f
        f.inverse = c.noop
        if (t && typeof o === p) {
            o = o.call(e, f)
        } else {
            o = d.call(e, o, f)
        }
        if (o || o === 0) {
            r += o
        }
        r += "</li>\n        "
        r += "\n        <li>"
        t = i["_"]
        o = t || e["_"]
        f = c.program(63, Z, s)
        f.hash = {}
        f.fn = f
        f.inverse = c.noop
        if (t && typeof o === p) {
            o = o.call(e, f)
        } else {
            o = d.call(e, o, f)
        }
        if (o || o === 0) {
            r += o
        }
        r += "</li>\n        "
        r += "\n        <li>"
        t = i["_"]
        o = t || e["_"]
        f = c.program(65, ne, s)
        f.hash = {}
        f.fn = f
        f.inverse = c.noop
        if (t && typeof o === p) {
            o = o.call(e, f)
        } else {
            o = d.call(e, o, f)
        }
        if (o || o === 0) {
            r += o
        }
        r += "</li>\n        "
        r += "\n        <li>"
        t = i["_"]
        o = t || e["_"]
        f = c.program(67, ee, s)
        f.hash = {}
        f.fn = f
        f.inverse = c.noop
        if (t && typeof o === p) {
            o = o.call(e, f)
        } else {
            o = d.call(e, o, f)
        }
        if (o || o === 0) {
            r += o
        }
        r += "</li>\n        "
        r += "\n        <li>"
        t = i["_"]
        o = t || e["_"]
        f = c.program(69, ie, s)
        f.hash = {}
        f.fn = f
        f.inverse = c.noop
        if (t && typeof o === p) {
            o = o.call(e, f)
        } else {
            o = d.call(e, o, f)
        }
        if (o || o === 0) {
            r += o
        }
        r += "</li>\n        "
        r += "\n        <li>"
        t = i["_"]
        o = t || e["_"]
        f = c.program(71, ae, s)
        f.hash = {}
        f.fn = f
        f.inverse = c.noop
        if (t && typeof o === p) {
            o = o.call(e, f)
        } else {
            o = d.call(e, o, f)
        }
        if (o || o === 0) {
            r += o
        }
        r += "</li>\n    </ul>\n\n    "
        r += '\n    <div class="discussion-guidelines-subheader">'
        t = i["_"]
        o = t || e["_"]
        f = c.program(73, se, s)
        f.hash = {}
        f.fn = f
        f.inverse = c.noop
        if (t && typeof o === p) {
            o = o.call(e, f)
        } else {
            o = d.call(e, o, f)
        }
        if (o || o === 0) {
            r += o
        }
        r += "</div>\n    <ul>\n        "
        r += "\n        <li>"
        t = i["_"]
        o = t || e["_"]
        f = c.program(75, re, s)
        f.hash = {}
        f.fn = f
        f.inverse = c.noop
        if (t && typeof o === p) {
            o = o.call(e, f)
        } else {
            o = d.call(e, o, f)
        }
        if (o || o === 0) {
            r += o
        }
        r += "</li>\n        "
        r += "\n        <li>"
        t = i["_"]
        o = t || e["_"]
        f = c.program(77, oe, s)
        f.hash = {}
        f.fn = f
        f.inverse = c.noop
        if (t && typeof o === p) {
            o = o.call(e, f)
        } else {
            o = d.call(e, o, f)
        }
        if (o || o === 0) {
            r += o
        }
        r += "</li>\n        "
        r += "\n        <li>"
        t = i["_"]
        o = t || e["_"]
        f = c.program(79, le, s)
        f.hash = {}
        f.fn = f
        f.inverse = c.noop
        if (t && typeof o === p) {
            o = o.call(e, f)
        } else {
            o = d.call(e, o, f)
        }
        if (o || o === 0) {
            r += o
        }
        r += "</li>\n    </ul>\n\n    "
        r += '\n    <div class="discussion-guidelines-subheader">'
        t = i["_"]
        o = t || e["_"]
        f = c.program(81, te, s)
        f.hash = {}
        f.fn = f
        f.inverse = c.noop
        if (t && typeof o === p) {
            o = o.call(e, f)
        } else {
            o = d.call(e, o, f)
        }
        if (o || o === 0) {
            r += o
        }
        r += "</div>\n    <ul>\n        "
        t = i.restrictPosting
        o = t || e.restrictPosting
        l = i["if"]
        f = c.program(83, fe, s)
        f.hash = {}
        f.fn = f
        f.inverse = c.program(86, pe, s)
        o = l.call(e, o, f)
        if (o || o === 0) {
            r += o
        }
        r += "\n        <li>"
        t = i["_"]
        o = t || e["_"]
        f = c.program(91, me, s)
        f.hash = {}
        f.fn = f
        f.inverse = c.noop
        if (t && typeof o === p) {
            o = o.call(e, f)
        } else {
            o = d.call(e, o, f)
        }
        if (o || o === 0) {
            r += o
        }
        r += "</li>\n        "
        t = i.restrictPosting
        o = t || e.restrictPosting
        l = i["if"]
        f = c.program(93, de, s)
        f.hash = {}
        f.fn = f
        f.inverse = c.program(98, _e, s)
        o = l.call(e, o, f)
        if (o || o === 0) {
            r += o
        }
        r += "\n    </ul>\n</div>\n"
        return r
    })

    function wrapped_template(n, e) {
        return absoluteLinks.makeHtmlLinksSafe(template(n, e))
    }
    module.exports = wrapped_template
});
KAdefine("javascript/discussion-package/meta-panel-guidelines.handlebars", function(require, module, exports) {
    require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
    var absoluteLinks = require("../shared-package/absolute-links.js")
    var template = Handlebars.template(function(n, e, i, l, s) {
        i = i || n.helpers
        var o = "",
            r, a, t, f, c = this,
            u = "function",
            p = i.blockHelperMissing

        function h(n, e) {
            var l = "",
                s
            l += '\n    <div class="discussion-guidelines-header">'
            t = i["_"]
            s = t || n["_"]
            f = c.program(2, d, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            if (t && typeof s === u) {
                s = s.call(n, f)
            } else {
                s = p.call(n, s, f)
            }
            if (s || s === 0) {
                l += s
            }
            l += "</div>\n        <p>\n            "
            t = i["_"]
            s = t || n["_"]
            f = c.program(4, m, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            if (t && typeof s === u) {
                s = s.call(n, f)
            } else {
                s = p.call(n, s, f)
            }
            if (s || s === 0) {
                l += s
            }
            l += "\n        </p>\n    <br>\n    "
            return l
        }

        function d(n, e) {
            return "Discuss the site"
        }

        function m(n, e) {
            return 'View <a href="https://khanacademy.zendesk.com/hc/communities/public/topics">general discussions about Khan Academy</a>.'
        }

        function g(n, e) {
            return "Flag inappropriate posts"
        }

        function v(n, e) {
            return "Here are posts to avoid making. If you do encounter them, flag them for attention from our Guardians."
        }

        function _(n, e) {
            return "abuse"
        }

        function y(n, e) {
            return "disrespectful or offensive"
        }

        function b(n, e) {
            return "an advertisement"
        }

        function k(n, e) {
            return "not helpful"
        }

        function w(n, e) {
            return "low quality"
        }

        function q(n, e) {
            return "not about the video topic"
        }

        function P(n, e) {
            return "contentious posts about politics, religion/atheism, or personal issues"
        }

        function A(n, e) {
            return "soliciting votes or seeking badges"
        }

        function H(n, e) {
            return "a homework question"
        }

        function z(n, e) {
            return "a duplicate answer"
        }

        function F(n, e) {
            return "repeatedly making the same post"
        }

        function K(n, e) {
            return "wrong category"
        }

        function L(n, e) {
            return "a tip or thanks in Questions"
        }

        function D(n, e) {
            return "a question in Tips & Thanks"
        }

        function Q(n, e) {
            return "an answer that should be its own question"
        }

        function R(n, e) {
            return "about the site"
        }

        function T(n, e) {
            var l = "",
                s
            l += "\n            <li>\n                "
            t = i["_"]
            s = t || n["_"]
            f = c.program(43, V, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            if (t && typeof s === u) {
                s = s.call(n, f)
            } else {
                s = p.call(n, s, f)
            }
            if (s || s === 0) {
                l += s
            }
            l += "\n            </li>\n        "
            return l
        }

        function V(n, e) {
            return "a question about Khan Academy"
        }

        function j(n, e) {
            var l = "",
                s
            l += "\n            <li>\n                "
            t = i["_"]
            s = t || n["_"]
            f = c.program(46, x, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            if (t && typeof s === u) {
                s = s.call(n, f)
            } else {
                s = p.call(n, s, f)
            }
            if (s || s === 0) {
                l += s
            }
            l += '\n                <div class="discussion-guidelines-link">(<a href="https://khanacademy.zendesk.com/">'
            t = i["_"]
            s = t || n["_"]
            f = c.program(48, G, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            if (t && typeof s === u) {
                s = s.call(n, f)
            } else {
                s = p.call(n, s, f)
            }
            if (s || s === 0) {
                l += s
            }
            l += "</a>)</div>\n            </li>\n        "
            return l
        }

        function x(n, e) {
            return "a question about Khan Academy"
        }

        function G(n, e) {
            return "Visit our FAQ"
        }

        function I(n, e) {
            return "a post about badges"
        }

        function M(n, e) {
            var l = "",
                s
            l += "\n            <li>\n                "
            t = i["_"]
            s = t || n["_"]
            f = c.program(53, S, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            if (t && typeof s === u) {
                s = s.call(n, f)
            } else {
                s = p.call(n, s, f)
            }
            if (s || s === 0) {
                l += s
            }
            l += "\n            </li>\n            <li>\n                "
            t = i["_"]
            s = t || n["_"]
            f = c.program(55, B, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            if (t && typeof s === u) {
                s = s.call(n, f)
            } else {
                s = p.call(n, s, f)
            }
            if (s || s === 0) {
                l += s
            }
            l += "\n            </li>\n        "
            return l
        }

        function S(n, e) {
            return "a technical problem with the site"
        }

        function B(n, e) {
            return "a request for videos or features"
        }

        function C(n, e) {
            var l = "",
                s
            l += "\n            <li>\n                "
            t = i["_"]
            s = t || n["_"]
            f = c.program(58, E, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            if (t && typeof s === u) {
                s = s.call(n, f)
            } else {
                s = p.call(n, s, f)
            }
            if (s || s === 0) {
                l += s
            }
            l += '\n                <div class="discussion-guidelines-link">(<a href="http://khanacademy.org/reportissue?type=Defect">'
            t = i["_"]
            s = t || n["_"]
            f = c.program(60, J, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            if (t && typeof s === u) {
                s = s.call(n, f)
            } else {
                s = p.call(n, s, f)
            }
            if (s || s === 0) {
                l += s
            }
            l += "</a>)</div>\n            </li>\n            <li>\n                "
            t = i["_"]
            s = t || n["_"]
            f = c.program(62, N, e)
            f.hash = {}
            f.fn = f
            f.inverse = c.noop
            if (t && typeof s === u) {
                s = s.call(n, f)
            } else {
                s = p.call(n, s, f)
            }
            if (s || s === 0) {
                l += s
            }
            l += "\n            </li>\n        "
            return l
        }

        function E(n, e) {
            return "a technical problem with the site"
        }

        function J(n, e) {
            return "Report a problem"
        }

        function N(n, e) {
            return 'a request for <a href="https://khanacademy.zendesk.com/hc/communities/public/topics/200136634-Feature-Requests">features</a>'
        }
        o += '<div class="main-discussion-guidelines discussion-guidelines">\n    '
        t = i.restrictPosting
        r = t || e.restrictPosting
        a = i.unless
        f = c.program(1, h, s)
        f.hash = {}
        f.fn = f
        f.inverse = c.noop
        r = a.call(e, r, f)
        if (r || r === 0) {
            o += r
        }
        o += '\n\n    <div class="discussion-guidelines-header">'
        t = i["_"]
        r = t || e["_"]
        f = c.program(6, g, s)
        f.hash = {}
        f.fn = f
        f.inverse = c.noop
        if (t && typeof r === u) {
            r = r.call(e, f)
        } else {
            r = p.call(e, r, f)
        }
        if (r || r === 0) {
            o += r
        }
        o += "</div>\n\n    <p>\n        "
        t = i["_"]
        r = t || e["_"]
        f = c.program(8, v, s)
        f.hash = {}
        f.fn = f
        f.inverse = c.noop
        if (t && typeof r === u) {
            r = r.call(e, f)
        } else {
            r = p.call(e, r, f)
        }
        if (r || r === 0) {
            o += r
        }
        o += "\n    </p>\n\n    "
        o += '\n    <div class="discussion-guidelines-subheader">'
        t = i["_"]
        r = t || e["_"]
        f = c.program(10, _, s)
        f.hash = {}
        f.fn = f
        f.inverse = c.noop
        if (t && typeof r === u) {
            r = r.call(e, f)
        } else {
            r = p.call(e, r, f)
        }
        if (r || r === 0) {
            o += r
        }
        o += "</div>\n    <ul>\n        "
        o += "\n        <li>"
        t = i["_"]
        r = t || e["_"]
        f = c.program(12, y, s)
        f.hash = {}
        f.fn = f
        f.inverse = c.noop
        if (t && typeof r === u) {
            r = r.call(e, f)
        } else {
            r = p.call(e, r, f)
        }
        if (r || r === 0) {
            o += r
        }
        o += "</li>\n        "
        o += "\n        <li>"
        t = i["_"]
        r = t || e["_"]
        f = c.program(14, b, s)
        f.hash = {}
        f.fn = f
        f.inverse = c.noop
        if (t && typeof r === u) {
            r = r.call(e, f)
        } else {
            r = p.call(e, r, f)
        }
        if (r || r === 0) {
            o += r
        }
        o += "</li>\n    </ul>\n\n    "
        o += '\n    <div class="discussion-guidelines-subheader">'
        t = i["_"]
        r = t || e["_"]
        f = c.program(16, k, s)
        f.hash = {}
        f.fn = f
        f.inverse = c.noop
        if (t && typeof r === u) {
            r = r.call(e, f)
        } else {
            r = p.call(e, r, f)
        }
        if (r || r === 0) {
            o += r
        }
        o += "</div>\n    <ul>\n        "
        o += "\n        <li>"
        t = i["_"]
        r = t || e["_"]
        f = c.program(18, w, s)
        f.hash = {}
        f.fn = f
        f.inverse = c.noop
        if (t && typeof r === u) {
            r = r.call(e, f)
        } else {
            r = p.call(e, r, f)
        }
        if (r || r === 0) {
            o += r
        }
        o += "</li>\n        "
        o += "\n        <li>"
        t = i["_"]
        r = t || e["_"]
        f = c.program(20, q, s)
        f.hash = {}
        f.fn = f
        f.inverse = c.noop
        if (t && typeof r === u) {
            r = r.call(e, f)
        } else {
            r = p.call(e, r, f)
        }
        if (r || r === 0) {
            o += r
        }
        o += "</li>\n        "
        o += "\n        <li>"
        t = i["_"]
        r = t || e["_"]
        f = c.program(22, P, s)
        f.hash = {}
        f.fn = f
        f.inverse = c.noop
        if (t && typeof r === u) {
            r = r.call(e, f)
        } else {
            r = p.call(e, r, f)
        }
        if (r || r === 0) {
            o += r
        }
        o += "</li>\n        "
        o += "\n        <li>"
        t = i["_"]
        r = t || e["_"]
        f = c.program(24, A, s)
        f.hash = {}
        f.fn = f
        f.inverse = c.noop
        if (t && typeof r === u) {
            r = r.call(e, f)
        } else {
            r = p.call(e, r, f)
        }
        if (r || r === 0) {
            o += r
        }
        o += "</li>\n        "
        o += "\n        <li>"
        t = i["_"]
        r = t || e["_"]
        f = c.program(26, H, s)
        f.hash = {}
        f.fn = f
        f.inverse = c.noop
        if (t && typeof r === u) {
            r = r.call(e, f)
        } else {
            r = p.call(e, r, f)
        }
        if (r || r === 0) {
            o += r
        }
        o += "</li>\n        "
        o += "\n        <li>"
        t = i["_"]
        r = t || e["_"]
        f = c.program(28, z, s)
        f.hash = {}
        f.fn = f
        f.inverse = c.noop
        if (t && typeof r === u) {
            r = r.call(e, f)
        } else {
            r = p.call(e, r, f)
        }
        if (r || r === 0) {
            o += r
        }
        o += "</li>\n        "
        o += "\n        <li>"
        t = i["_"]
        r = t || e["_"]
        f = c.program(30, F, s)
        f.hash = {}
        f.fn = f
        f.inverse = c.noop
        if (t && typeof r === u) {
            r = r.call(e, f)
        } else {
            r = p.call(e, r, f)
        }
        if (r || r === 0) {
            o += r
        }
        o += "</li>\n    </ul>\n\n    "
        o += '\n    <div class="discussion-guidelines-subheader">'
        t = i["_"]
        r = t || e["_"]
        f = c.program(32, K, s)
        f.hash = {}
        f.fn = f
        f.inverse = c.noop
        if (t && typeof r === u) {
            r = r.call(e, f)
        } else {
            r = p.call(e, r, f)
        }
        if (r || r === 0) {
            o += r
        }
        o += "</div>\n    <ul>\n        "
        o += "\n        <li>"
        t = i["_"]
        r = t || e["_"]
        f = c.program(34, L, s)
        f.hash = {}
        f.fn = f
        f.inverse = c.noop
        if (t && typeof r === u) {
            r = r.call(e, f)
        } else {
            r = p.call(e, r, f)
        }
        if (r || r === 0) {
            o += r
        }
        o += "</li>\n        "
        o += "\n        <li>"
        t = i["_"]
        r = t || e["_"]
        f = c.program(36, D, s)
        f.hash = {}
        f.fn = f
        f.inverse = c.noop
        if (t && typeof r === u) {
            r = r.call(e, f)
        } else {
            r = p.call(e, r, f)
        }
        if (r || r === 0) {
            o += r
        }
        o += "</li>\n        "
        o += "\n        <li>"
        t = i["_"]
        r = t || e["_"]
        f = c.program(38, Q, s)
        f.hash = {}
        f.fn = f
        f.inverse = c.noop
        if (t && typeof r === u) {
            r = r.call(e, f)
        } else {
            r = p.call(e, r, f)
        }
        if (r || r === 0) {
            o += r
        }
        o += "</li>\n    </ul>\n\n    "
        o += '\n    <div class="discussion-guidelines-subheader">'
        t = i["_"]
        r = t || e["_"]
        f = c.program(40, R, s)
        f.hash = {}
        f.fn = f
        f.inverse = c.noop
        if (t && typeof r === u) {
            r = r.call(e, f)
        } else {
            r = p.call(e, r, f)
        }
        if (r || r === 0) {
            o += r
        }
        o += "</div>\n    <ul>\n        "
        t = i.restrictPosting
        r = t || e.restrictPosting
        a = i["if"]
        f = c.program(42, T, s)
        f.hash = {}
        f.fn = f
        f.inverse = c.program(45, j, s)
        r = a.call(e, r, f)
        if (r || r === 0) {
            o += r
        }
        o += "\n        <li>"
        t = i["_"]
        r = t || e["_"]
        f = c.program(50, I, s)
        f.hash = {}
        f.fn = f
        f.inverse = c.noop
        if (t && typeof r === u) {
            r = r.call(e, f)
        } else {
            r = p.call(e, r, f)
        }
        if (r || r === 0) {
            o += r
        }
        o += "</li>\n        "
        t = i.restrictPosting
        r = t || e.restrictPosting
        a = i["if"]
        f = c.program(52, M, s)
        f.hash = {}
        f.fn = f
        f.inverse = c.program(57, C, s)
        r = a.call(e, r, f)
        if (r || r === 0) {
            o += r
        }
        o += "\n    </ul>\n</div>\n"
        return o
    })

    function wrapped_template(n, e) {
        return absoluteLinks.makeHtmlLinksSafe(template(n, e))
    }
    module.exports = wrapped_template
});
KAdefine("javascript/discussion-package/meta-panel-report-a-mistake.handlebars", function(require, module, exports) {
    require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
    var absoluteLinks = require("../shared-package/absolute-links.js")
    var template = Handlebars.template(function(n, i, e, a, s) {
        e = e || n.helpers
        var r = "",
            o, t, l, c, f = this,
            p = "function",
            u = e.helperMissing,
            h = void 0,
            m = this.escapeExpression,
            d = e.blockHelperMissing

        function v(n, i) {
            var a = "",
                s, r
            a += "\n    "
            l = e.communityQuestionsUrl
            s = l || n.communityQuestionsUrl
            r = e["if"]
            c = f.program(2, g, i)
            c.hash = {}
            c.fn = c
            c.inverse = f.noop
            s = r.call(n, s, c)
            if (s || s === 0) {
                a += s
            }
            a += "\n\n    "
            l = e.isVideo
            s = l || n.isVideo
            r = e["if"]
            c = f.program(7, b, i)
            c.hash = {}
            c.fn = c
            c.inverse = f.noop
            s = r.call(n, s, c)
            if (s || s === 0) {
                a += s
            }
            a += "\n\n    "
            l = e.isArticle
            s = l || n.isArticle
            r = e["if"]
            c = f.program(25, A, i)
            c.hash = {}
            c.fn = c
            c.inverse = f.noop
            s = r.call(n, s, c)
            if (s || s === 0) {
                a += s
            }
            a += '\n\n    <div class="discussion-guidelines-header">'
            l = e["_"]
            s = l || n["_"]
            c = f.program(43, B, i)
            c.hash = {}
            c.fn = c
            c.inverse = f.noop
            if (l && typeof s === p) {
                s = s.call(n, c)
            } else {
                s = d.call(n, s, c)
            }
            if (s || s === 0) {
                a += s
            }
            a += "</div>\n        <p>\n            "
            l = e["_"]
            s = l || n["_"]
            c = f.program(45, F, i)
            c.hash = {}
            c.fn = c
            c.inverse = f.noop
            if (l && typeof s === p) {
                s = s.call(n, c)
            } else {
                s = d.call(n, s, c)
            }
            if (s || s === 0) {
                a += s
            }
            a += "\n        </p>\n    <br>\n    "
            return a
        }

        function g(n, i) {
            var a = "",
                s
            a += '\n    <div class="discussion-guidelines-header">'
            l = e["_"]
            s = l || n["_"]
            c = f.program(3, _, i)
            c.hash = {}
            c.fn = c
            c.inverse = f.noop
            if (l && typeof s === p) {
                s = s.call(n, c)
            } else {
                s = d.call(n, s, c)
            }
            if (s || s === 0) {
                a += s
            }
            a += "</div>\n    <p>\n        "
            l = e["_"]
            s = l || n["_"]
            c = f.program(5, y, i)
            c.hash = {}
            c.fn = c
            c.inverse = f.noop
            if (l && typeof s === p) {
                s = s.call(n, c)
            } else {
                s = d.call(n, s, c)
            }
            if (s || s === 0) {
                a += s
            }
            a += "\n    </p>\n    <br>\n    "
            return a
        }

        function _(n, i) {
            return "Answer more questions"
        }

        function y(n, i) {
            var a = "",
                s
            a += 'Visit <a href="'
            l = e.communityQuestionsUrl
            s = l || n.communityQuestionsUrl
            if (typeof s === p) {
                s = s.call(n, {
                    hash: {}
                })
            } else if (s === h) {
                s = u.call(n, "communityQuestionsUrl", {
                    hash: {}
                })
            }
            a += m(s) + '">Community Questions</a>\n        to answer new questions in\n        <a href="'
            l = e.communityQuestionsUrl
            s = l || n.communityQuestionsUrl
            if (typeof s === p) {
                s = s.call(n, {
                    hash: {}
                })
            } else if (s === h) {
                s = u.call(n, "communityQuestionsUrl", {
                    hash: {}
                })
            }
            a += m(s) + '">'
            l = e.translatedCommunityQuestionsTitle
            s = l || n.translatedCommunityQuestionsTitle
            if (typeof s === p) {
                s = s.call(n, {
                    hash: {}
                })
            } else if (s === h) {
                s = u.call(n, "translatedCommunityQuestionsTitle", {
                    hash: {}
                })
            }
            a += m(s) + "</a>."
            return a
        }

        function b(n, i) {
            var a = "",
                s, r
            a += "\n    "
            l = e.clarificationsEnabled
            s = l || n.clarificationsEnabled
            r = e["if"]
            c = f.program(8, k, i)
            c.hash = {}
            c.fn = c
            c.inverse = f.program(17, U, i)
            s = r.call(n, s, c)
            if (s || s === 0) {
                a += s
            }
            a += "\n    "
            return a
        }

        function k(n, i) {
            var a = "",
                s
            a += '\n    <div class="discussion-guidelines-header">\n        '
            l = e["_"]
            s = l || n["_"]
            c = f.program(9, Q, i)
            c.hash = {}
            c.fn = c
            c.inverse = f.noop
            if (l && typeof s === p) {
                s = s.call(n, c)
            } else {
                s = d.call(n, s, c)
            }
            if (s || s === 0) {
                a += s
            }
            a += "\n    </div>\n    "
            l = e["_"]
            s = l || n["_"]
            c = f.program(11, E, i)
            c.hash = {}
            c.fn = c
            c.inverse = f.noop
            if (l && typeof s === p) {
                s = s.call(n, c)
            } else {
                s = d.call(n, s, c)
            }
            if (s || s === 0) {
                a += s
            }
            a += '\n    <p class="guideline-example">\n        '
            l = e["_"]
            s = l || n["_"]
            c = f.program(13, w, i)
            c.hash = {}
            c.fn = c
            c.inverse = f.noop
            if (l && typeof s === p) {
                s = s.call(n, c)
            } else {
                s = d.call(n, s, c)
            }
            if (s || s === 0) {
                a += s
            }
            a += '\n    </p>\n    <p>\n    <a href="javascript:void 0;" class="simple-button suggest-clarification">'
            l = e["_"]
            s = l || n["_"]
            c = f.program(15, x, i)
            c.hash = {}
            c.fn = c
            c.inverse = f.noop
            if (l && typeof s === p) {
                s = s.call(n, c)
            } else {
                s = d.call(n, s, c)
            }
            if (s || s === 0) {
                a += s
            }
            a += "</a>\n    </p>\n    <br>\n    "
            return a
        }

        function Q(n, i) {
            return "Report a mistake in the video"
        }

        function E(n, i) {
            return "Example:"
        }

        function w(n, i) {
            return 'At 2:33, Sal said "single bonds" but meant "covalent bonds."'
        }

        function x(n, i) {
            return "Report a mistake in the video"
        }

        function U(n, i) {
            var a = "",
                s, r
            a += "\n    "
            l = e.canEdit
            s = l || n.canEdit
            r = e["if"]
            c = f.program(18, C, i)
            c.hash = {}
            c.fn = c
            c.inverse = f.noop
            s = r.call(n, s, c)
            if (s || s === 0) {
                a += s
            }
            a += "\n    "
            return a
        }

        function C(n, i) {
            var a = "",
                s
            a += '\n    <div class="discussion-guidelines-header">\n        '
            l = e["_"]
            s = l || n["_"]
            c = f.program(19, R, i)
            c.hash = {}
            c.fn = c
            c.inverse = f.noop
            if (l && typeof s === p) {
                s = s.call(n, c)
            } else {
                s = d.call(n, s, c)
            }
            if (s || s === 0) {
                a += s
            }
            a += "\n    </div>\n    <p>\n    "
            l = e["_"]
            s = l || n["_"]
            c = f.program(21, V, i)
            c.hash = {}
            c.fn = c
            c.inverse = f.noop
            if (l && typeof s === p) {
                s = s.call(n, c)
            } else {
                s = d.call(n, s, c)
            }
            if (s || s === 0) {
                a += s
            }
            a += '\n    </p>\n    <p>\n    <a href="javascript:void 0;" class="simple-button suggest-clarification">'
            l = e["_"]
            s = l || n["_"]
            c = f.program(23, j, i)
            c.hash = {}
            c.fn = c
            c.inverse = f.noop
            if (l && typeof s === p) {
                s = s.call(n, c)
            } else {
                s = d.call(n, s, c)
            }
            if (s || s === 0) {
                a += s
            }
            a += "</a>\n    </p>\n    <br>\n    "
            return a
        }

        function R(n, i) {
            return "Report a mistake in the video"
        }

        function V(n, i) {
            return "Clarifications are disabled for this video."
        }

        function j(n, i) {
            return "View existing clarifications"
        }

        function A(n, i) {
            var a = "",
                s, r
            a += "\n    "
            l = e.clarificationsEnabled
            s = l || n.clarificationsEnabled
            r = e["if"]
            c = f.program(26, T, i)
            c.hash = {}
            c.fn = c
            c.inverse = f.program(35, P, i)
            s = r.call(n, s, c)
            if (s || s === 0) {
                a += s
            }
            a += "\n    "
            return a
        }

        function T(n, i) {
            var a = "",
                s
            a += '\n    <div class="discussion-guidelines-header">\n        '
            l = e["_"]
            s = l || n["_"]
            c = f.program(27, q, i)
            c.hash = {}
            c.fn = c
            c.inverse = f.noop
            if (l && typeof s === p) {
                s = s.call(n, c)
            } else {
                s = d.call(n, s, c)
            }
            if (s || s === 0) {
                a += s
            }
            a += "\n    </div>\n    "
            l = e["_"]
            s = l || n["_"]
            c = f.program(29, H, i)
            c.hash = {}
            c.fn = c
            c.inverse = f.noop
            if (l && typeof s === p) {
                s = s.call(n, c)
            } else {
                s = d.call(n, s, c)
            }
            if (s || s === 0) {
                a += s
            }
            a += '\n    <p class="guideline-example">\n        '
            l = e["_"]
            s = l || n["_"]
            c = f.program(31, L, i)
            c.hash = {}
            c.fn = c
            c.inverse = f.noop
            if (l && typeof s === p) {
                s = s.call(n, c)
            } else {
                s = d.call(n, s, c)
            }
            if (s || s === 0) {
                a += s
            }
            a += '\n    </p>\n    <p>\n    <a href="javascript:void 0;" class="simple-button suggest-clarification">'
            l = e["_"]
            s = l || n["_"]
            c = f.program(33, M, i)
            c.hash = {}
            c.fn = c
            c.inverse = f.noop
            if (l && typeof s === p) {
                s = s.call(n, c)
            } else {
                s = d.call(n, s, c)
            }
            if (s || s === 0) {
                a += s
            }
            a += "</a>\n    </p>\n    <br>\n    "
            return a
        }

        function q(n, i) {
            return "Report a mistake in the article"
        }

        function H(n, i) {
            return "Example:"
        }

        function L(n, i) {
            return "The link in the third paragraph is broken."
        }

        function M(n, i) {
            return "Report a mistake in the article"
        }

        function P(n, i) {
            var a = "",
                s, r
            a += "\n    "
            l = e.canEdit
            s = l || n.canEdit
            r = e["if"]
            c = f.program(36, S, i)
            c.hash = {}
            c.fn = c
            c.inverse = f.noop
            s = r.call(n, s, c)
            if (s || s === 0) {
                a += s
            }
            a += "\n    "
            return a
        }

        function S(n, i) {
            var a = "",
                s
            a += '\n    <div class="discussion-guidelines-header">\n        '
            l = e["_"]
            s = l || n["_"]
            c = f.program(37, z, i)
            c.hash = {}
            c.fn = c
            c.inverse = f.noop
            if (l && typeof s === p) {
                s = s.call(n, c)
            } else {
                s = d.call(n, s, c)
            }
            if (s || s === 0) {
                a += s
            }
            a += "\n    </div>\n    <p>\n    "
            l = e["_"]
            s = l || n["_"]
            c = f.program(39, D, i)
            c.hash = {}
            c.fn = c
            c.inverse = f.noop
            if (l && typeof s === p) {
                s = s.call(n, c)
            } else {
                s = d.call(n, s, c)
            }
            if (s || s === 0) {
                a += s
            }
            a += '\n    </p>\n    <p>\n    <a href="javascript:void 0;" class="simple-button suggest-clarification">'
            l = e["_"]
            s = l || n["_"]
            c = f.program(41, K, i)
            c.hash = {}
            c.fn = c
            c.inverse = f.noop
            if (l && typeof s === p) {
                s = s.call(n, c)
            } else {
                s = d.call(n, s, c)
            }
            if (s || s === 0) {
                a += s
            }
            a += "</a>\n    </p>\n    <br>\n    "
            return a
        }

        function z(n, i) {
            return "Report a mistake in the article"
        }

        function D(n, i) {
            return "Clarifications are disabled for this article."
        }

        function K(n, i) {
            return "View existing clarifications"
        }

        function B(n, i) {
            return "Discuss the site"
        }

        function F(n, i) {
            return 'View <a href="https://khanacademy.zendesk.com/hc/communities/public/topics">general discussions about Khan Academy</a>.'
        }
        r += '<div class="main-discussion-guidelines discussion-guidelines">\n    '
        l = e.restrictPosting
        o = l || i.restrictPosting
        t = e.unless
        c = f.program(1, v, s)
        c.hash = {}
        c.fn = c
        c.inverse = f.noop
        o = t.call(i, o, c)
        if (o || o === 0) {
            r += o
        }
        r += "\n</div>\n"
        return r
    })

    function wrapped_template(n, i) {
        return absoluteLinks.makeHtmlLinksSafe(template(n, i))
    }
    module.exports = wrapped_template
});
KAdefine("javascript/discussion-package/scratchpad-thumbnail.handlebars", function(require, module, exports) {
    require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
    var absoluteLinks = require("../shared-package/absolute-links.js")
    var template = Handlebars.template(function(a, e, s, t, l) {
        s = s || a.helpers
        var i = "",
            h, r, c, n = this,
            p = "function",
            o = s.helperMissing,
            d = void 0,
            f = this.escapeExpression
        i += '<a href="'
        c = s.showPath
        h = c || e.showPath
        if (typeof h === p) {
            h = h.call(e, {
                hash: {}
            })
        } else if (h === d) {
            h = o.call(e, "showPath", {
                hash: {}
            })
        }
        i += f(h) + '" class="discussion-scratchpad-thumbnail">\n    <img src="'
        c = s.imagePath
        h = c || e.imagePath
        c = s.staticUrl
        r = c || e.staticUrl
        if (typeof r === p) {
            h = r.call(e, h, {
                hash: {}
            })
        } else if (r === d) {
            h = o.call(e, "staticUrl", h, {
                hash: {}
            })
        } else {
            h = r
        }
        i += f(h) + '" class="scratchpad-thumbnail">\n    <div class="discussion-scratchpad-title">'
        c = s.translatedTitle
        h = c || e.translatedTitle
        if (typeof h === p) {
            h = h.call(e, {
                hash: {}
            })
        } else if (h === d) {
            h = o.call(e, "translatedTitle", {
                hash: {}
            })
        }
        i += f(h) + "</div>\n</a>\n"
        return i
    })

    function wrapped_template(a, e) {
        return absoluteLinks.makeHtmlLinksSafe(template(a, e))
    }
    module.exports = wrapped_template
});
KAdefine("javascript/discussion-package/guidelines.js", function(require, module, exports) {
    var $ = require("jquery")
    var Discussion = require("./discussion.js")
    var DiscussionGuidelines = {
        _containerSelector: ".guidelines",
        _tabSelector: ".guidelines-tab",
        subTab: "guidelines",
        show: function i() {
            this.load()
            $(this._tabSelector).show()
        },
        hide: function e() {
            $(this._tabSelector).hide()
        },
        load: function s() {
            this._loadComplete = true
            Discussion._finishLoad()
        },
        reset: $.noop
    }
    module.exports = DiscussionGuidelines
});
KAdefine("javascript/discussion-package/report-a-mistake.js", function(require, module, exports) {
    var $ = require("jquery")
    var Discussion = require("./discussion.js")
    var DiscussionReportAMistake = {
        _containerSelector: ".report-a-mistake",
        _tabSelector: ".report-a-mistake-tab",
        subTab: "report-a-mistake",
        show: function e() {
            this.load()
            $(this._tabSelector).show()
        },
        hide: function s() {
            $(this._tabSelector).hide()
        },
        load: function t() {
            this._loadComplete = true
            Discussion._finishLoad()
        },
        reset: $.noop
    }
    module.exports = DiscussionReportAMistake
});
KAdefine("javascript/discussion-package/project.handlebars", function(require, module, exports) {
    require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
    var absoluteLinks = require("../shared-package/absolute-links.js")
    var template = Handlebars.template(function(e, a, i, l, s) {
        i = i || e.helpers
        l = l || e.partials
        var r = "",
            t, n, o, h, f = this,
            c = "function",
            p = i.helperMissing,
            d = void 0,
            u = this.escapeExpression

        function m(e, a) {
            return "deleted"
        }

        function v(e, a) {
            return " context-link"
        }

        function k(e, a) {
            return " is-author"
        }

        function y(e, a) {
            var l = "",
                s
            l += 'data-kind="project" data-id="'
            o = i.id
            s = o || e.id
            if (typeof s === c) {
                s = s.call(e, {
                    hash: {}
                })
            } else if (s === d) {
                s = p.call(e, "id", {
                    hash: {}
                })
            }
            l += u(s) + '"'
            return l
        }
        r += '<div class="scratchpad-vote '
        o = i.appearsAsDeleted
        t = o || a.appearsAsDeleted
        n = i["if"]
        h = f.program(1, m, s)
        h.hash = {}
        h.fn = h
        h.inverse = f.noop
        t = n.call(a, t, h)
        if (t || t === 0) {
            r += t
        }
        r += " discussion-item"
        o = i.inUserProfile
        t = o || a.inUserProfile
        n = i["if"]
        h = f.program(3, v, s)
        h.hash = {}
        h.fn = h
        h.inverse = f.noop
        t = n.call(a, t, h)
        if (t || t === 0) {
            r += t
        }
        o = i.showAuthorControls
        t = o || a.showAuthorControls
        n = i["if"]
        h = f.program(5, k, s)
        h.hash = {}
        h.fn = h
        h.inverse = f.noop
        t = n.call(a, t, h)
        if (t || t === 0) {
            r += t
        }
        r += '" id="'
        o = i.key
        t = o || a.key
        if (typeof t === c) {
            t = t.call(a, {
                hash: {}
            })
        } else if (t === d) {
            t = p.call(a, "key", {
                hash: {}
            })
        }
        r += u(t) + '"\n     data-key="'
        o = i.key
        t = o || a.key
        if (typeof t === c) {
            t = t.call(a, {
                hash: {}
            })
        } else if (t === d) {
            t = p.call(a, "key", {
                hash: {}
            })
        }
        r += u(t) + '"\n     '
        o = i.focus
        t = o || a.focus
        n = i["if"]
        h = f.program(7, y, s)
        h.hash = {}
        h.fn = h
        h.inverse = f.noop
        t = n.call(a, t, h)
        if (t || t === 0) {
            r += t
        }
        r += '>\n\n    <h2><a href="'
        o = i.relativeUrl
        t = o || a.relativeUrl
        if (typeof t === c) {
            t = t.call(a, {
                hash: {}
            })
        } else if (t === d) {
            t = p.call(a, "relativeUrl", {
                hash: {}
            })
        }
        r += u(t) + '">'
        o = i.title
        t = o || a.title
        if (typeof t === c) {
            t = t.call(a, {
                hash: {}
            })
        } else if (t === d) {
            t = p.call(a, "title", {
                hash: {}
            })
        }
        r += u(t) + '</a></h2>\n    <iframe src="'
        o = i.relativeUrl
        t = o || a.relativeUrl
        if (typeof t === c) {
            t = t.call(a, {
                hash: {}
            })
        } else if (t === d) {
            t = p.call(a, "relativeUrl", {
                hash: {}
            })
        }
        r += u(t) + '/embedded?editor=yes"\n            style="width: 940px; height: 440px; border: 0px;"\n            frameborder="0"\n            scrolling="no">\n    </iframe>\n\n    '
        t = a
        t = f.invokePartial(l["discussion_discussion-meta"], "discussion_discussion-meta", t, i, l)
        if (t || t === 0) {
            r += t
        }
        r += "\n</div>\n"
        return r
    })

    function wrapped_template(e, a) {
        return absoluteLinks.makeHtmlLinksSafe(template(e, a))
    }
    module.exports = wrapped_template
});
KAdefine("javascript/discussion-package/sorts.handlebars", function(require, module, exports) {
    require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
    var absoluteLinks = require("../shared-package/absolute-links.js")
    var template = Handlebars.template(function(e, s, a, l, n) {
        a = a || e.helpers
        var t = "",
            i, r, o, h, c = this,
            f = "function",
            p = a.helperMissing,
            u = void 0,
            v = this.escapeExpression,
            d = a.blockHelperMissing

        function m(e, s) {
            var l = "",
                n, t
            l += '\n    <span class="top-sort discussion-list-sort pure-hidden-xs">\n    '
            o = a.sorts
            n = o || e.sorts
            t = a.each
            h = c.program(2, b, s)
            h.hash = {}
            h.fn = h
            h.inverse = c.noop
            n = t.call(e, n, h)
            if (n || n === 0) {
                l += n
            }
            l += "\n    </span>\n"
            return l
        }

        function b(e, s) {
            var l = "",
                n, t
            l += '\n        <a data-value="'
            n = e.value
            if (typeof n === f) {
                n = n.call(e, {
                    hash: {}
                })
            } else if (n === u) {
                n = p.call(e, "this.value", {
                    hash: {}
                })
            }
            l += v(n) + '"\n            '
            n = e.isDefault
            t = a["if"]
            h = c.program(3, y, s)
            h.hash = {}
            h.fn = h
            h.inverse = c.noop
            n = t.call(e, n, h)
            if (n || n === 0) {
                l += n
            }
            l += '\n            title="'
            n = e.title
            if (typeof n === f) {
                n = n.call(e, {
                    hash: {}
                })
            } else if (n === u) {
                n = p.call(e, "this.title", {
                    hash: {}
                })
            }
            l += v(n) + '"\n            aria-label="'
            n = e.title
            if (typeof n === f) {
                n = n.call(e, {
                    hash: {}
                })
            } else if (n === u) {
                n = p.call(e, "this.title", {
                    hash: {}
                })
            }
            l += v(n) + '"\n            href="javascript:void(0);">'
            n = e.name
            if (typeof n === f) {
                n = n.call(e, {
                    hash: {}
                })
            } else if (n === u) {
                n = p.call(e, "this.name", {
                    hash: {}
                })
            }
            l += v(n) + "</a>\n    "
            return l
        }

        function y(e, s) {
            return 'class="selected"'
        }

        function g(e, s) {
            var l = "",
                n, t
            l += '\n    <span class="filterbar-dropdown-inner-container subject-sort discussion-list-sort pure-hidden-xs">\n        <span>'
            o = a["_"]
            n = o || e["_"]
            h = c.program(6, j, s)
            h.hash = {}
            h.fn = h
            h.inverse = c.noop
            if (o && typeof n === f) {
                n = n.call(e, h)
            } else {
                n = d.call(e, n, h)
            }
            if (n || n === 0) {
                l += n
            }
            l += '</span>\n        <span class="filterbar-mock-dropdown">\n            <span class="filterbar-mock-selected">'
            o = a["_"]
            n = o || e["_"]
            h = c.program(8, k, s)
            h.hash = {}
            h.fn = h
            h.inverse = c.noop
            if (o && typeof n === f) {
                n = n.call(e, h)
            } else {
                n = d.call(e, n, h)
            }
            if (n || n === 0) {
                l += n
            }
            l += '</span>\n            <i class="icon-chevron-down" />\n        </span>\n\n        <select name="subjects" class="filterbar-dropdown">\n        '
            o = a.subjectSorts
            n = o || e.subjectSorts
            t = a.each
            h = c.program(10, w, s)
            h.hash = {}
            h.fn = h
            h.inverse = c.noop
            n = t.call(e, n, h)
            if (n || n === 0) {
                l += n
            }
            l += "\n        </select>\n    </span>\n"
            return l
        }

        function j(e, s) {
            return "Show projects from: "
        }

        function k(e, s) {
            return "All subjects"
        }

        function w(e, s) {
            var a = "",
                l
            a += '\n            <option value="'
            l = e.value
            if (typeof l === f) {
                l = l.call(e, {
                    hash: {}
                })
            } else if (l === u) {
                l = p.call(e, "this.value", {
                    hash: {}
                })
            }
            a += v(l) + '"\n                key="'
            l = e.title
            if (typeof l === f) {
                l = l.call(e, {
                    hash: {}
                })
            } else if (l === u) {
                l = p.call(e, "this.title", {
                    hash: {}
                })
            }
            a += v(l) + '"\n                title="'
            l = e.title
            if (typeof l === f) {
                l = l.call(e, {
                    hash: {}
                })
            } else if (l === u) {
                l = p.call(e, "this.title", {
                    hash: {}
                })
            }
            a += v(l) + '"\n                aria-label="'
            l = e.title
            if (typeof l === f) {
                l = l.call(e, {
                    hash: {}
                })
            } else if (l === u) {
                l = p.call(e, "this.title", {
                    hash: {}
                })
            }
            a += v(l) + '">'
            l = e.name
            if (typeof l === f) {
                l = l.call(e, {
                    hash: {}
                })
            } else if (l === u) {
                l = p.call(e, "this.name", {
                    hash: {}
                })
            }
            a += v(l) + "</option>\n        "
            return a
        }
        o = a.sorts
        i = o || s.sorts
        r = a["if"]
        h = c.program(1, m, n)
        h.hash = {}
        h.fn = h
        h.inverse = c.noop
        i = r.call(s, i, h)
        if (i || i === 0) {
            t += i
        }
        t += "\n\n"
        o = a.subjectSorts
        i = o || s.subjectSorts
        r = a["if"]
        h = c.program(5, g, n)
        h.hash = {}
        h.fn = h
        h.inverse = c.noop
        i = r.call(s, i, h)
        if (i || i === 0) {
            t += i
        }
        t += "\n"
        return t
    })

    function wrapped_template(e, s) {
        return absoluteLinks.makeHtmlLinksSafe(template(e, s))
    }
    module.exports = wrapped_template
});
KAdefine("javascript/discussion-package/formatting-tips.handlebars", function(require, module, exports) {
    require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
    var absoluteLinks = require("../shared-package/absolute-links.js")
    var template = Handlebars.template(function(n, e, t, r, a) {
        t = t || n.helpers
        var i = "",
            o, s, l, p = this,
            c = "function",
            f = t.blockHelperMissing

        function d(n, e) {
            return "Typing this:"
        }

        function u(n, e) {
            return "Displays this:"
        }

        function m(n, e) {
            return "Accent your posts with *bold* or _italics_ and format `code`"
        }

        function h(n, e) {
            return "```if (x < 0) {<br>    return;<br>}```"
        }

        function g(n, e) {
            return "Accent your posts with <strong>bold</strong> or <i>italics</i> and format <code>code</code>"
        }

        function b(n, e) {
            return "<code>if (x < 0) {<br>    return;<br>}</code>"
        }
        i += '<div class="formatting-tips-container" style="display:none;">\n    <div class="formatting-tips-triangle"></div>\n    <div class="formatting-tips-panel">\n        <table>\n            <tr class="discussion-guidelines-format-table-header">\n            <td>\n                '
        s = t["_"]
        o = s || e["_"]
        l = p.program(1, d, a)
        l.hash = {}
        l.fn = l
        l.inverse = p.noop
        if (s && typeof o === c) {
            o = o.call(e, l)
        } else {
            o = f.call(e, o, l)
        }
        if (o || o === 0) {
            i += o
        }
        i += "\n            </td>\n            <td>\n                "
        s = t["_"]
        o = s || e["_"]
        l = p.program(3, u, a)
        l.hash = {}
        l.fn = l
        l.inverse = p.noop
        if (s && typeof o === c) {
            o = o.call(e, l)
        } else {
            o = f.call(e, o, l)
        }
        if (o || o === 0) {
            i += o
        }
        i += '\n            </td>\n            </tr>\n            <tr class="discussion-guidelines-format-table">\n            <td>\n                '
        s = t["_"]
        o = s || e["_"]
        l = p.program(5, m, a)
        l.hash = {}
        l.fn = l
        l.inverse = p.noop
        if (s && typeof o === c) {
            o = o.call(e, l)
        } else {
            o = f.call(e, o, l)
        }
        if (o || o === 0) {
            i += o
        }
        i += "\n                <pre>"
        s = t.i18nDoNotTranslate
        o = s || e.i18nDoNotTranslate
        l = p.program(7, h, a)
        l.hash = {}
        l.fn = l
        l.inverse = p.noop
        if (s && typeof o === c) {
            o = o.call(e, l)
        } else {
            o = f.call(e, o, l)
        }
        if (o || o === 0) {
            i += o
        }
        i += "</pre>\n            </td>\n            <td>\n                "
        s = t["_"]
        o = s || e["_"]
        l = p.program(9, g, a)
        l.hash = {}
        l.fn = l
        l.inverse = p.noop
        if (s && typeof o === c) {
            o = o.call(e, l)
        } else {
            o = f.call(e, o, l)
        }
        if (o || o === 0) {
            i += o
        }
        i += "\n                <pre>"
        s = t.i18nDoNotTranslate
        o = s || e.i18nDoNotTranslate
        l = p.program(11, b, a)
        l.hash = {}
        l.fn = l
        l.inverse = p.noop
        if (s && typeof o === c) {
            o = o.call(e, l)
        } else {
            o = f.call(e, o, l)
        }
        if (o || o === 0) {
            i += o
        }
        i += "</pre>\n            </td>\n            </tr>\n        </table>\n    </div>\n</div>\n"
        return i
    })

    function wrapped_template(n, e) {
        return absoluteLinks.makeHtmlLinksSafe(template(n, e))
    }
    module.exports = wrapped_template
});
KAdefine("javascript/discussion-package/form-controls.handlebars", function(require, module, exports) {
    require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
    var absoluteLinks = require("../shared-package/absolute-links.js")
    var template = Handlebars.template(function(s, n, a, e, l) {
        a = a || s.helpers
        var i = "",
            t, o, r, c = this,
            p = "function",
            f = a.helperMissing,
            u = void 0,
            h = this.escapeExpression,
            d = a.blockHelperMissing

        function m(s, n) {
            return "or"
        }

        function b(s, n) {
            return "Cancel"
        }

        function g(s, n) {
            return "Formatting tips"
        }
        i += '<div class="discussion-controls" style="display: none">\n	<span class="discussion-control float-right">\n        <input class="simple-button primary discussion-submit"\n	           type="button"\n	           value="'
        o = a.label
        t = o || n.label
        if (typeof t === p) {
            t = t.call(n, {
                hash: {}
            })
        } else if (t === u) {
            t = f.call(n, "label", {
                hash: {}
            })
        }
        i += h(t) + '" />\n    </span>\n    <span class="discussion-control float-right">\n        '
        o = a["_"]
        t = o || n["_"]
        r = c.program(1, m, l)
        r.hash = {}
        r.fn = r
        r.inverse = c.noop
        if (o && typeof t === p) {
            t = t.call(n, r)
        } else {
            t = d.call(n, t, r)
        }
        if (t || t === 0) {
            i += t
        }
        i += '\n    </span>\n    <span class="discussion-control float-right">\n        <a href="#" class="discussion-cancel">'
        o = a["_"]
        t = o || n["_"]
        r = c.program(3, b, l)
        r.hash = {}
        r.fn = r
        r.inverse = c.noop
        if (o && typeof t === p) {
            t = t.call(n, r)
        } else {
            t = d.call(n, t, r)
        }
        if (t || t === 0) {
            i += t
        }
        i += '</a>\n    </span>\n\n    <span class="discussion-control float-left">\n        <div class="formatting-tips">\n            <a href="#" class="show-formatting-tips">\n                '
        o = a["_"]
        t = o || n["_"]
        r = c.program(5, g, l)
        r.hash = {}
        r.fn = r
        r.inverse = c.noop
        if (o && typeof t === p) {
            t = t.call(n, r)
        } else {
            t = d.call(n, t, r)
        }
        if (t || t === 0) {
            i += t
        }
        i += '\n            </a>\n        </div>\n    </span>\n\n    <br class="clear" />\n</div>\n'
        return i
    })

    function wrapped_template(s, n) {
        return absoluteLinks.makeHtmlLinksSafe(template(s, n))
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
KAdefine("javascript/discussion-package/flag.js", function(require, module, exports) {
    require("../../third_party/javascript-khansrc/bootstrap-khansrc/js/bootstrap-modal.js")
    var $ = require("jquery")
    var i18n = require("../shared-package/i18n.js")
    var Discussion = require("./discussion.js")
    var DiscussionNote = require("./discussion-note.js")
    var Moderation = require("./moderation.js")
    var ModerationFlag = {
        init: function a(e) {
            if (e) {
                return
            }
            $(document).on("click", ".flag-show", ModerationFlag.showControls_).on("click", "#flag-modal .flag-as:not(.disabled)", ModerationFlag.flag_).on("input propertychange", "#flag-modal textarea[name=justification]", ModerationFlag.enableSubmit_)
        },
        showControls_: function e() {
            var a = $(this),
                e = a.parents(".flag-tools").data("key"),
                s = Discussion.getParent(this),
                t = Discussion.getParentType(this)
            if (DiscussionNote.checkAndPromptLogin(this, "flag")) {
                return false
            }
            var i = 275
            var r = $(".discussion-content", s).text()
            if (r.length > i) {
                r = r.substring(0, i) + "..."
            }
            var o = a.hasClass("scratchpad-flagging") ? require("./scratchpad-flag-modal.handlebars") : require("./flag-modal.handlebars")
            var n = false
            if (a.hasClass("scratchpad-flagging")) {
                var l = require.ifLoadedLegacy("../scratchpads-package/scratchpad-ui.js")
                if (l) {
                    n = l.ScratchpadUI.topic.slug === "computer-programming"
                }
            }
            var d = o({
                feedback: r,
                isQuestion: t === "question",
                isAnswer: t === "answer",
                isComment: t === "comment",
                canBeChanged: t === "question" || t === "comment",
                translatedFeedbackType: Discussion._translateFeedbackType(t),
                isComputerProgramming: n
            })
            if ($("#flag-modal").length) {
                $("#flag-modal").replaceWith(d)
            } else {
                $("body").append(d)
            }
            var g = $("#flag-modal")
            g.data("key", e).modal({
                backdrop: true,
                show: true,
                keyboard: true
            })
            return false
        },
        flag_: function s() {
            var a = $(this),
                e = a.parents("#flag-modal"),
                s = a.data("flag") || e.find("[name=flag]").val(),
                t = e.data("key"),
                i = e.find("textarea[name=justification]")
            if (!s || !t) {
                return false
            }
            var r = {
                flag: s,
                entity_key: t
            }
            if (i.length) {
                r["justification"] = i.val()
            }
            ModerationFlag.postAndNotify_(e, r)
        },
        enableSubmit_: function t() {
            var a = $(this),
                e = a.siblings(".flag-row").find(".simple-button").removeClass("disabled")
            e.toggleClass("disabled", !a.val())
        },
        postAndNotify_: function i(a, e) {
            $.post("/api/internal/discussions/flagentity", e)
            var s = $(".flag-tools[data-key=" + e["entity_key"] + "]"),
                t = $(".flag-show", s)
            Moderation.showMessage(t, i18n._("Flagged"))
            a.modal("hide")
            return false
        }
    }
    module.exports = ModerationFlag
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
