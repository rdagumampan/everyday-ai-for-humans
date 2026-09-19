/* @ds-bundle: {"format":4,"namespace":"EverydayAI_490aa5","components":[{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"ArticleHeader","sourcePath":"components/content/ArticleHeader.jsx"},{"name":"ConceptCard","sourcePath":"components/content/ConceptCard.jsx"},{"name":"ConceptNav","sourcePath":"components/content/ConceptNav.jsx"},{"name":"Prose","sourcePath":"components/content/Prose.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Callout","sourcePath":"components/core/Callout.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"AudienceToggle","sourcePath":"components/navigation/AudienceToggle.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"},{"name":"TableOfContents","sourcePath":"components/navigation/TableOfContents.jsx"}],"sourceHashes":{"components/brand/Wordmark.jsx":"c521edd0f419","components/content/ArticleHeader.jsx":"2ac9b5715199","components/content/ConceptCard.jsx":"787a5f43fa90","components/content/ConceptNav.jsx":"cf4b235a5107","components/content/Prose.jsx":"6a8d4b2440a5","components/core/Badge.jsx":"f03ef9ae5bd3","components/core/Button.jsx":"27d52f4eb613","components/core/Callout.jsx":"051905cdcced","components/core/Card.jsx":"02338e4a4383","components/core/Icon.jsx":"6d225e30c04c","components/core/IconButton.jsx":"85b2cc7de6a1","components/core/Tag.jsx":"be3d6ad9bb6a","components/forms/Checkbox.jsx":"f4f11f3abddf","components/forms/Input.jsx":"dc4aa5678610","components/forms/Select.jsx":"b1bfd87b4605","components/forms/Switch.jsx":"8850cfe27671","components/navigation/AudienceToggle.jsx":"ea8d9a629a07","components/navigation/Breadcrumb.jsx":"ff054c69d0ca","components/navigation/SiteFooter.jsx":"1c3ccc2c2785","components/navigation/SiteHeader.jsx":"6890a6d2efd6","components/navigation/TableOfContents.jsx":"fc05876c40e3"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EverydayAI_490aa5 = window.EverydayAI_490aa5 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* No logo exists in the source material — the brand mark is the name set in Anthropic Serif Display. */
function Wordmark({
  size = 20,
  tone = "ink",
  stacked,
  style,
  ...rest
}) {
  const color = tone === "inverse" ? "var(--text-inverse)" : "var(--text-heading)";
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      flexDirection: stacked ? "column" : "row",
      alignItems: stacked ? "flex-start" : "baseline",
      gap: stacked ? 0 : "0.28em",
      fontFamily: "var(--font-display)",
      color,
      lineHeight: 1.05,
      fontSize: size,
      letterSpacing: "var(--tracking-tight)",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: "var(--weight-medium)"
    }
  }, "Everyday"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: "var(--weight-regular)",
      fontStyle: "italic",
      opacity: 0.78
    }
  }, "AI"));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/content/Prose.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Article body wrapper: sets the reading measure and the vertical rhythm for h2/h3/p/ul/blockquote/code. */
function Prose({
  children,
  width = "var(--measure-prose)",
  style,
  ...rest
}) {
  const id = React.useId().replace(/[^a-zA-Z0-9]/g, "");
  const cls = "prose" + id;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    style: {
      maxWidth: width,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("style", null, `
.${cls}{font-family:var(--font-text);font-size:var(--size-body);line-height:var(--leading-body);color:var(--text-body)}
.${cls} > * + *{margin-top:var(--space-5)}
.${cls} h2{font-family:var(--font-display);font-size:var(--size-h2);font-weight:var(--weight-medium);letter-spacing:var(--tracking-tight);margin-top:var(--space-8);padding-top:var(--space-5);border-top:1px solid var(--rule-page)}
.${cls} h3{font-family:var(--font-display);font-size:var(--size-h3);font-weight:var(--weight-medium);margin-top:var(--space-6)}
.${cls} p:first-of-type{font-size:var(--size-lead);line-height:var(--leading-loose);color:var(--ink-700)}
.${cls} strong{font-weight:var(--weight-semibold);color:var(--text-heading)}
.${cls} em{font-style:italic}
.${cls} ul,.${cls} ol{padding-left:var(--space-5);margin-top:var(--space-4)}
.${cls} li + li{margin-top:var(--space-2)}
.${cls} li::marker{color:var(--text-faint)}
.${cls} blockquote{margin:var(--space-6) 0;padding:var(--space-2) 0 var(--space-2) var(--space-5);border-left:2px solid var(--accent-soft);font-style:italic;color:var(--text-muted)}
.${cls} code{background:var(--surface-subtle);border:1px solid var(--border-hairline);border-radius:var(--radius-xs);padding:1px 5px}
.${cls} pre{background:var(--surface-cool);border:1px solid var(--blue-200);border-radius:var(--radius-md);padding:var(--space-4);overflow:auto;line-height:1.6}
.${cls} pre code{background:none;border:0;padding:0}
      `), children);
}
Object.assign(__ds_scope, { Prose });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Prose.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  tone = "neutral",
  children,
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      background: "var(--surface-subtle)",
      color: "var(--text-muted)",
      borderColor: "var(--border-hairline)"
    },
    citizen: {
      background: "var(--track-citizen)",
      color: "var(--track-citizen-ink)",
      borderColor: "var(--aqua-300)"
    },
    technical: {
      background: "var(--track-technical)",
      color: "var(--track-technical-ink)",
      borderColor: "var(--lilac-300)"
    },
    info: {
      background: "var(--status-info-wash)",
      color: "var(--slate-700)",
      borderColor: "var(--blue-200)"
    },
    good: {
      background: "var(--status-good-wash)",
      color: "var(--status-good)",
      borderColor: "var(--status-good)"
    },
    warn: {
      background: "var(--status-warn-wash)",
      color: "var(--ochre-400)",
      borderColor: "var(--ochre-400)"
    },
    alert: {
      background: "var(--status-alert-wash)",
      color: "var(--rust-400)",
      borderColor: "var(--rust-400)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-1)",
      padding: "3px 10px",
      fontFamily: "var(--font-text)",
      fontSize: "var(--size-micro)",
      fontWeight: "var(--weight-medium)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      lineHeight: 1.5,
      borderRadius: "var(--radius-pill)",
      border: "1px solid",
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const pad = {
  sm: "6px 14px",
  md: "9px 20px",
  lg: "13px 28px"
};
const fs = {
  sm: "var(--size-small)",
  md: "var(--size-ui)",
  lg: "var(--size-body)"
};
function Button({
  variant = "primary",
  size = "md",
  href,
  iconLeft,
  iconRight,
  disabled,
  fullWidth,
  children,
  style,
  ...rest
}) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--space-2)",
    fontFamily: "var(--font-text)",
    fontSize: fs[size],
    fontWeight: "var(--weight-medium)",
    lineHeight: 1.2,
    letterSpacing: "0.01em",
    padding: pad[size],
    borderRadius: "var(--radius-pill)",
    border: "1px solid transparent",
    textDecoration: "none",
    cursor: disabled ? "default" : "pointer",
    transition: "var(--transition-ui)",
    width: fullWidth ? "100%" : undefined,
    opacity: disabled ? 0.45 : 1,
    whiteSpace: "nowrap"
  };
  const variants = {
    primary: {
      background: "var(--slate-600)",
      color: "var(--sand-100)",
      borderColor: "var(--slate-600)"
    },
    secondary: {
      background: "var(--surface-card)",
      color: "var(--text-heading)",
      borderColor: "var(--border-default)",
      boxShadow: "var(--shadow-raised)"
    },
    soft: {
      background: "var(--accent-wash)",
      color: "var(--slate-700)",
      borderColor: "var(--blue-200)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-link)",
      borderColor: "transparent"
    }
  };
  const Tag = href && !disabled ? "a" : "button";
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const hoverStyle = disabled ? null : {
    primary: {
      background: "var(--ink-900)",
      borderColor: "var(--ink-900)"
    },
    secondary: {
      borderColor: "var(--border-strong)",
      boxShadow: "var(--shadow-lifted)"
    },
    soft: {
      background: "var(--blue-200)"
    },
    ghost: {
      background: "var(--surface-subtle)",
      color: "var(--text-heading)"
    }
  }[variant];
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: Tag === "button" ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      ...base,
      ...variants[variant],
      ...(hover ? hoverStyle : null),
      ...(press ? {
        transform: "translateY(1px)"
      } : null),
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  as = "div",
  variant = "paper",
  padding = "var(--space-6)",
  interactive,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = as;
  const variants = {
    paper: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-hairline)",
      boxShadow: "var(--shadow-raised)"
    },
    sand: {
      background: "var(--surface-sunken)",
      border: "1px solid transparent",
      boxShadow: "none"
    },
    outline: {
      background: "transparent",
      border: "1px solid var(--border-default)",
      boxShadow: "none"
    },
    cool: {
      background: "var(--surface-cool)",
      border: "1px solid var(--blue-200)",
      boxShadow: "none"
    }
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: "var(--radius-lg)",
      padding,
      transition: "var(--transition-ui)",
      textDecoration: "none",
      display: "block",
      ...variants[variant],
      ...(interactive && hover ? {
        boxShadow: "var(--shadow-lifted)",
        borderColor: "var(--border-strong)",
        transform: "translateY(-2px)"
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Lucide, loaded from CDN as SVG sprites-by-URL. Stroke 1.5 to sit with the serif type. */
function Icon({
  name,
  size = 18,
  strokeWidth = 1.5,
  color = "currentColor",
  style,
  ...rest
}) {
  const [svg, setSvg] = React.useState("");
  React.useEffect(() => {
    let live = true;
    fetch(`https://cdn.jsdelivr.net/npm/lucide-static@0.436.0/icons/${name}.svg`).then(r => r.ok ? r.text() : "").then(t => live && setSvg(t.replace(/stroke-width="[^"]*"/, `stroke-width="${strokeWidth}"`))).catch(() => {});
    return () => {
      live = false;
    };
  }, [name, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      width: size,
      height: size,
      color,
      flex: "0 0 auto",
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: svg.replace("<svg", `<svg width="${size}" height="${size}"`)
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/content/ConceptCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ConceptCard({
  title,
  blurb,
  topic,
  minutes,
  tracks = ["citizen", "technical"],
  href,
  onClick,
  image,
  style,
  ...rest
}) {
  const body = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)"
    }
  }, topic && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--size-micro)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "var(--text-faint)"
    }
  }, topic), minutes && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      fontSize: "var(--size-small)",
      color: "var(--text-faint)"
    }
  }, minutes, " min")), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--size-h3)",
      fontWeight: "var(--weight-medium)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--size-ui)",
      color: "var(--text-muted)",
      lineHeight: "var(--leading-body)"
    }
  }, blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      marginTop: "var(--space-2)"
    }
  }, tracks.map(t => /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    key: t,
    tone: t
  }, t)), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 16,
    color: "var(--text-faint)",
    style: {
      marginLeft: "auto"
    }
  })));
  if (!image) {
    return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
      as: onClick ? "div" : "a",
      href: href,
      onClick: onClick,
      interactive: true,
      padding: "var(--space-5)",
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-3)",
        cursor: "pointer",
        ...style
      }
    }, rest), body);
  }
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    as: onClick ? "div" : "a",
    href: href,
    onClick: onClick,
    interactive: true,
    padding: "0",
    style: {
      display: "flex",
      flexDirection: "column",
      cursor: "pointer",
      overflow: "hidden",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "112px",
      flex: "0 0 auto",
      backgroundImage: "url(" + image + ")",
      backgroundSize: "cover",
      backgroundPosition: "center",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      padding: "var(--space-5)",
      flex: "1 1 auto"
    }
  }, body));
}
Object.assign(__ds_scope, { ConceptCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ConceptCard.jsx", error: String((e && e.message) || e) }); }

// components/content/ConceptNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ConceptNav({
  prev,
  next,
  style,
  ...rest
}) {
  const Side = ({
    item,
    dir
  }) => {
    const [hover, setHover] = React.useState(false);
    if (!item) return /*#__PURE__*/React.createElement("span", null);
    return /*#__PURE__*/React.createElement("a", {
      href: item.href || "#",
      onClick: item.onClick,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-1)",
        textDecoration: "none",
        alignItems: dir === "next" ? "flex-end" : "flex-start",
        padding: "var(--space-4) var(--space-5)",
        borderRadius: "var(--radius-lg)",
        background: hover ? "var(--surface-subtle)" : "transparent",
        transition: "var(--transition-ui)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-2)",
        fontSize: "var(--size-micro)",
        letterSpacing: "var(--tracking-caps)",
        textTransform: "uppercase",
        color: "var(--text-faint)"
      }
    }, dir === "prev" && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "arrow-left",
      size: 13
    }), dir === "prev" ? "Previous" : "Next", dir === "next" && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "arrow-right",
      size: 13
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: "var(--size-h4)",
        color: "var(--text-heading)"
      }
    }, item.title));
  };
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-4)",
      borderTop: "1px solid var(--rule-page)",
      paddingTop: "var(--space-5)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(Side, {
    item: prev,
    dir: "prev"
  }), /*#__PURE__*/React.createElement(Side, {
    item: next,
    dir: "next"
  }));
}
Object.assign(__ds_scope, { ConceptNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ConceptNav.jsx", error: String((e && e.message) || e) }); }

// components/core/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const kinds = {
  note: {
    bg: "var(--surface-cool)",
    bd: "var(--blue-200)",
    ink: "var(--slate-700)",
    icon: "info",
    label: "Note"
  },
  smalltalk: {
    bg: "var(--surface-sunken)",
    bd: "var(--sand-400)",
    ink: "var(--ink-700)",
    icon: "message-circle",
    label: "Small-talk version"
  },
  caution: {
    bg: "var(--status-warn-wash)",
    bd: "var(--ochre-400)",
    ink: "var(--ink-700)",
    icon: "triangle-alert",
    label: "Watch out"
  },
  analogy: {
    bg: "var(--status-good-wash)",
    bd: "var(--status-good)",
    ink: "var(--ink-700)",
    icon: "lightbulb",
    label: "The analogy"
  }
};
function Callout({
  kind = "note",
  title,
  children,
  style,
  ...rest
}) {
  const k = kinds[kind];
  return /*#__PURE__*/React.createElement("aside", _extends({
    style: {
      display: "flex",
      gap: "var(--space-4)",
      background: k.bg,
      border: `1px solid ${k.bd}`,
      borderRadius: "var(--radius-lg)",
      padding: "var(--space-5)",
      color: k.ink,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: k.icon,
    size: 19,
    style: {
      marginTop: 3,
      opacity: 0.75
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--size-h4)",
      fontWeight: "var(--weight-medium)",
      marginBottom: "var(--space-2)",
      color: "var(--text-heading)"
    }
  }, title || k.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--size-ui)",
      lineHeight: "var(--leading-body)"
    }
  }, children)));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Callout.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const dim = {
  sm: 30,
  md: 38,
  lg: 44
};
function IconButton({
  name,
  label,
  size = "md",
  variant = "ghost",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const variants = {
    ghost: {
      background: hover ? "var(--surface-subtle)" : "transparent",
      color: hover ? "var(--text-heading)" : "var(--text-muted)",
      borderColor: "transparent"
    },
    outline: {
      background: "var(--surface-card)",
      color: "var(--text-heading)",
      borderColor: hover ? "var(--border-strong)" : "var(--border-default)"
    },
    solid: {
      background: hover ? "var(--ink-900)" : "var(--slate-600)",
      color: "var(--sand-100)",
      borderColor: "transparent"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: dim[size],
      height: dim[size],
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid",
      borderRadius: "var(--radius-pill)",
      cursor: "pointer",
      padding: 0,
      transition: "var(--transition-ui)",
      ...variants[variant],
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    size: size === "sm" ? 15 : 17
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  active,
  href,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag_ = href ? "a" : onClick ? "button" : "span";
  const interactive = Boolean(href || onClick);
  return /*#__PURE__*/React.createElement(Tag_, _extends({
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      padding: "4px 12px",
      fontFamily: "var(--font-text)",
      fontSize: "var(--size-small)",
      lineHeight: 1.4,
      color: active ? "var(--sand-100)" : hover && interactive ? "var(--text-heading)" : "var(--text-muted)",
      background: active ? "var(--slate-600)" : hover && interactive ? "var(--surface-subtle)" : "transparent",
      border: "1px solid",
      borderColor: active ? "var(--slate-600)" : "var(--border-default)",
      borderRadius: "var(--radius-pill)",
      textDecoration: "none",
      cursor: interactive ? "pointer" : "default",
      transition: "var(--transition-ui)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  onChange,
  disabled,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      cursor: disabled ? "default" : "pointer",
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 19,
      height: 19,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-sm)",
      border: "1px solid",
      flex: "0 0 auto",
      borderColor: checked ? "var(--slate-600)" : "var(--border-default)",
      background: checked ? "var(--slate-600)" : "var(--surface-card)",
      transition: "var(--transition-ui)"
    }
  }, checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 13,
    color: "var(--sand-100)",
    strokeWidth: 2.4
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--size-ui)",
      color: "var(--text-body)"
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  iconLeft,
  invalid,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: "block",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--size-small)",
      fontWeight: "var(--weight-medium)",
      color: "var(--text-muted)",
      marginBottom: "var(--space-2)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      background: "var(--surface-card)",
      border: "1px solid",
      borderColor: invalid ? "var(--rust-400)" : focus ? "var(--slate-400)" : "var(--border-default)",
      borderRadius: "var(--radius-pill)",
      padding: "9px 16px",
      boxShadow: focus ? "var(--ring-focus)" : "none",
      transition: "var(--transition-ui)"
    }
  }, iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: 16,
    color: "var(--text-faint)"
  }), /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: "none",
      background: "transparent",
      font: "inherit",
      fontSize: "var(--size-ui)",
      color: "var(--text-heading)"
    }
  }, rest))), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--size-small)",
      color: invalid ? "var(--rust-400)" : "var(--text-faint)",
      marginTop: "var(--space-2)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  options = [],
  id,
  style,
  ...rest
}) {
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: "block",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--size-small)",
      fontWeight: "var(--weight-medium)",
      color: "var(--text-muted)",
      marginBottom: "var(--space-2)"
    }
  }, label), /*#__PURE__*/React.createElement("select", _extends({
    id: uid,
    style: {
      appearance: "none",
      width: "100%",
      font: "inherit",
      fontSize: "var(--size-ui)",
      color: "var(--text-heading)",
      background: "var(--surface-card)",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-pill)",
      padding: "9px 38px 9px 16px",
      cursor: "pointer",
      backgroundImage: "linear-gradient(45deg,transparent 50%,var(--text-faint) 50%),linear-gradient(135deg,var(--text-faint) 50%,transparent 50%)",
      backgroundPosition: "calc(100% - 20px) 50%,calc(100% - 15px) 50%",
      backgroundSize: "5px 5px,5px 5px",
      backgroundRepeat: "no-repeat"
    }
  }, rest), options.map(o => typeof o === "string" ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  checked,
  onChange,
  label,
  disabled,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      cursor: disabled ? "default" : "pointer",
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 23,
      borderRadius: "var(--radius-pill)",
      padding: 2,
      flex: "0 0 auto",
      background: checked ? "var(--slate-500)" : "var(--sand-400)",
      transition: "background-color var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      width: 19,
      height: 19,
      borderRadius: "var(--radius-pill)",
      background: "var(--paper)",
      boxShadow: "var(--shadow-raised)",
      transform: checked ? "translateX(17px)" : "translateX(0)",
      transition: "transform var(--dur-base) var(--ease-out)"
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--size-ui)",
      color: "var(--text-body)"
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/AudienceToggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tracks = [{
  id: "citizen",
  label: "Everyday",
  bg: "var(--track-citizen)",
  ink: "var(--track-citizen-ink)"
}, {
  id: "technical",
  label: "Technical",
  bg: "var(--track-technical)",
  ink: "var(--track-technical-ink)"
}];
function AudienceToggle({
  value = "citizen",
  onChange,
  size = "md",
  style,
  ...rest
}) {
  const pad = size === "sm" ? "5px 14px" : "8px 20px";
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "inline-flex",
      gap: 3,
      padding: 3,
      background: "var(--surface-subtle)",
      border: "1px solid var(--border-hairline)",
      borderRadius: "var(--radius-pill)",
      ...style
    }
  }, rest), tracks.map(t => {
    const on = value === t.id;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(t.id),
      style: {
        padding: pad,
        border: 0,
        cursor: "pointer",
        borderRadius: "var(--radius-pill)",
        fontFamily: "var(--font-text)",
        fontSize: size === "sm" ? "var(--size-small)" : "var(--size-ui)",
        fontWeight: on ? "var(--weight-semibold)" : "var(--weight-regular)",
        background: on ? t.bg : "transparent",
        color: on ? t.ink : "var(--text-muted)",
        boxShadow: on ? "var(--shadow-raised)" : "none",
        transition: "var(--transition-ui)"
      }
    }, t.label);
  }));
}
Object.assign(__ds_scope, { AudienceToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/AudienceToggle.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Breadcrumb({
  items = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      flexWrap: "wrap",
      fontSize: "var(--size-small)",
      color: "var(--text-faint)",
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 13,
    color: "var(--text-faint)"
  }), it.href && i < items.length - 1 ? /*#__PURE__*/React.createElement("a", {
    href: it.href,
    style: {
      color: "var(--text-muted)",
      textDecoration: "none"
    }
  }, it.label) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-body)"
    }
  }, it.label))));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/content/ArticleHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ArticleHeader({
  title,
  standfirst,
  track = "citizen",
  onTrackChange,
  breadcrumb,
  minutes,
  updated,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      ...style
    }
  }, rest), breadcrumb && /*#__PURE__*/React.createElement(__ds_scope.Breadcrumb, {
    items: breadcrumb
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--size-title)",
      fontWeight: "var(--weight-medium)",
      lineHeight: "var(--leading-tight)"
    }
  }, title), standfirst && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--size-lead)",
      lineHeight: "var(--leading-loose)",
      color: "var(--text-muted)",
      maxWidth: "var(--measure-lead)"
    }
  }, standfirst), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      flexWrap: "wrap",
      marginTop: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.AudienceToggle, {
    value: track,
    onChange: onTrackChange,
    size: "sm"
  }), /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: track
  }, track, " read"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--size-small)",
      color: "var(--text-faint)",
      marginLeft: "auto"
    }
  }, minutes ? `${minutes} min read` : null, minutes && updated ? " · " : null, updated ? `Updated ${updated}` : null)));
}
Object.assign(__ds_scope, { ArticleHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ArticleHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SiteFooter({
  columns = [],
  note,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      borderTop: "1px solid var(--rule-page)",
      background: "var(--surface-subtle)",
      padding: "var(--space-8) var(--space-6)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 220
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: 18
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--size-small)",
      color: "var(--text-faint)",
      marginTop: "var(--space-3)",
      maxWidth: "28ch"
    }
  }, note)), columns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--size-micro)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "var(--text-faint)",
      marginBottom: "var(--space-3)"
    }
  }, c.title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, c.items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: "var(--size-ui)",
      color: "var(--text-muted)",
      textDecoration: "none"
    }
  }, i))))))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SiteHeader({
  links = [],
  active,
  onNavigate,
  onSearch,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      background: "rgba(250,247,245,.86)",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
      borderBottom: "1px solid var(--rule-page)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "0 var(--space-6)",
      height: 66,
      display: "flex",
      alignItems: "center",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#/",
    onClick: e => {
      if (onNavigate) {
        e.preventDefault();
        onNavigate("home");
      }
    },
    style: {
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: 19
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: "var(--space-5)",
      marginLeft: "auto",
      alignItems: "center"
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    href: l.href || "#",
    onClick: e => {
      if (onNavigate) {
        e.preventDefault();
        onNavigate(l.id);
      }
    },
    style: {
      fontSize: "var(--size-ui)",
      textDecoration: "none",
      color: active === l.id ? "var(--text-heading)" : "var(--text-muted)",
      fontWeight: active === l.id ? "var(--weight-medium)" : "var(--weight-regular)"
    }
  }, l.label)), /*#__PURE__*/React.createElement("button", {
    onClick: onSearch,
    "aria-label": "Search concepts",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      padding: "6px 14px 6px 12px",
      background: "var(--surface-card)",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-pill)",
      color: "var(--text-faint)",
      font: "inherit",
      fontSize: "var(--size-small)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 14
  }), " Search"))));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TableOfContents.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TableOfContents({
  items = [],
  activeId,
  onSelect,
  title = "On this page",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      fontSize: "var(--size-small)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--size-micro)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "var(--text-faint)",
      marginBottom: "var(--space-4)"
    }
  }, title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-1)"
    }
  }, items.map(it => {
    const on = it.id === activeId;
    return /*#__PURE__*/React.createElement("li", {
      key: it.id
    }, /*#__PURE__*/React.createElement("a", {
      href: `#${it.id}`,
      onClick: e => {
        if (onSelect) {
          e.preventDefault();
          onSelect(it.id);
        }
      },
      style: {
        display: "block",
        padding: "5px 0 5px 14px",
        textDecoration: "none",
        lineHeight: "var(--leading-ui)",
        borderLeft: "2px solid",
        borderColor: on ? "var(--slate-400)" : "var(--border-hairline)",
        color: on ? "var(--text-heading)" : "var(--text-muted)",
        fontWeight: on ? "var(--weight-medium)" : "var(--weight-regular)",
        transition: "var(--transition-ui)"
      }
    }, it.label));
  })));
}
Object.assign(__ds_scope, { TableOfContents });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TableOfContents.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.ArticleHeader = __ds_scope.ArticleHeader;

__ds_ns.ConceptCard = __ds_scope.ConceptCard;

__ds_ns.ConceptNav = __ds_scope.ConceptNav;

__ds_ns.Prose = __ds_scope.Prose;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.AudienceToggle = __ds_scope.AudienceToggle;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.TableOfContents = __ds_scope.TableOfContents;

})();
