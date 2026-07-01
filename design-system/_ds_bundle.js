/* @ds-bundle: {"format":3,"namespace":"HolisticSoundHealing888DesignSystem_2358a2","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"3f1764b07774","components/core/Badge.jsx":"b35560f09d7d","components/core/Button.jsx":"f4e9402da006","components/core/Card.jsx":"fc25340a36a8","components/core/Input.jsx":"77fbf2b288f3","components/core/Tag.jsx":"1de0f77afb50","ui_kits/website/Homepage.jsx":"dc000c4a982e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HolisticSoundHealing888DesignSystem_2358a2 = window.HolisticSoundHealing888DesignSystem_2358a2 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function Avatar({
  src,
  alt = '',
  size = 96
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      overflow: 'hidden',
      background: 'var(--border-soft)',
      flexShrink: 0
    }
  }, src && /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function Badge({
  children,
  tone = 'warm'
}) {
  const tones = {
    warm: {
      background: 'rgba(240,138,46,0.14)',
      color: '#E0741A'
    },
    cool: {
      background: 'rgba(31,182,166,0.14)',
      color: '#0F9485'
    },
    navy: {
      background: 'rgba(26,37,71,0.08)',
      color: 'var(--surface-navy)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '4px 14px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontSize: '13px',
      fontWeight: 600,
      letterSpacing: 'var(--ls-wide)',
      ...tones[tone]
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick
}) {
  const base = {
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    borderRadius: 'var(--radius-pill)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    transition: 'transform 0.15s ease, box-shadow 0.2s ease, opacity 0.2s ease',
    opacity: disabled ? 0.5 : 1,
    letterSpacing: 'var(--ls-wide)'
  };
  const sizes = {
    sm: {
      padding: '8px 18px',
      fontSize: '14px'
    },
    md: {
      padding: '12px 28px',
      fontSize: '16px'
    },
    lg: {
      padding: '16px 36px',
      fontSize: '18px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--brand-gradient-warm)',
      color: 'var(--on-warm)',
      boxShadow: '0 6px 18px rgba(240,138,46,0.35)'
    },
    secondary: {
      background: 'var(--brand-gradient-cool)',
      color: 'var(--on-cool)',
      boxShadow: '0 6px 18px rgba(31,182,166,0.3)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--surface-navy)',
      border: '1.5px solid var(--border-soft)',
      boxShadow: 'none'
    },
    dark: {
      background: 'var(--surface-navy)',
      color: 'var(--text-on-dark)',
      boxShadow: '0 6px 18px rgba(17,24,46,0.3)'
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    disabled: disabled,
    onClick: onClick,
    style: {
      ...base,
      ...sizes[size],
      ...variants[variant]
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.transform = 'translateY(-1px)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  children,
  padding = '32px'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-card)',
      padding
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  type = 'text'
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '14px',
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    style: {
      padding: '14px 18px',
      borderRadius: 'var(--radius-md)',
      border: '1.5px solid var(--border-soft)',
      background: '#FFFFFF',
      fontSize: '16px',
      fontFamily: 'var(--font-body)',
      color: 'var(--text-primary)',
      outline: 'none'
    }
  }));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '10px 18px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-card)',
      boxShadow: 'var(--shadow-card)',
      fontFamily: 'var(--font-body)',
      fontSize: '15px',
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--brand-gradient-warm)',
      flexShrink: 0
    }
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Homepage.jsx
try { (() => {
const {
  Button,
  Badge,
  Tag,
  Card,
  Input,
  Avatar
} = window.HolisticSoundHealing888DesignSystem_2358a2;
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--brand-gradient-hero)',
      padding: '80px 60px',
      display: 'flex',
      alignItems: 'center',
      gap: 48,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-transparent.png",
    style: {
      width: 200,
      height: 200,
      objectFit: 'contain'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: 64,
      color: '#FFD166',
      margin: '0 0 8px'
    }
  }, "Holistic Sound Healing 888"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 24,
      color: 'var(--text-on-dark)',
      margin: '0 0 24px'
    }
  }, "Helen Chan \u2014 Music Teacher & Sound Healer"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "Book a Consultation"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    style: {}
  }, "Watch My Story"))));
}
function About() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '72px 60px',
      display: 'flex',
      gap: 48,
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '0.08em',
      color: 'var(--accent-secondary)',
      textTransform: 'uppercase',
      margin: '0 0 8px'
    }
  }, "Why I Do This"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 36,
      margin: '0 0 16px',
      color: 'var(--text-primary)'
    }
  }, "My path to self-healing \u2014 and yours"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--text-muted)'
    }
  }, "Music has carried me through my own transformation, and I've spent years sharing it with children and adults alike. Sound healing isn't separate from who I am \u2014 it's how I show up, every day, for the people I work with.")));
}
function WhatIs() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-navy)',
      padding: '64px 60px',
      color: 'var(--text-on-dark)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 32,
      margin: '0 0 16px'
    }
  }, "What is Sound Healing?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 18,
      lineHeight: 1.7,
      maxWidth: 680,
      margin: '0 auto',
      color: 'var(--text-on-dark-muted)'
    }
  }, "Sound healing uses vibration, tone, and intention to help restore balance to body, mind, and spirit \u2014 a gentle, ancient practice made simple for modern life."));
}
function Services() {
  const items = [{
    title: 'Holistic Learning',
    desc: 'Whole-child approach to growth and self-discovery.'
  }, {
    title: 'Music & Emotional Regulation',
    desc: 'Piano & singing lessons paired with emotional tools.'
  }, {
    title: 'Mindfulness',
    desc: 'Calming practices for adults and children alike.'
  }, {
    title: 'Parent Support',
    desc: 'Guidance for parents navigating their child\'s wellbeing.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '72px 60px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 32,
      textAlign: 'center',
      margin: '0 0 8px',
      color: 'var(--text-primary)'
    }
  }, "Services"), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      fontFamily: 'var(--font-body)',
      color: 'var(--text-muted)',
      margin: '0 0 40px'
    }
  }, "Individual & group sessions available \u2014 bundles save you more."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 20
    }
  }, items.map(it => /*#__PURE__*/React.createElement(Card, {
    key: it.title,
    padding: "28px 22px"
  }, /*#__PURE__*/React.createElement(Tag, null, it.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-muted)',
      marginTop: 14,
      lineHeight: 1.5
    }
  }, it.desc)))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "warm"
  }, "Bundles save up to 20% \u2014 ask Helen for details")));
}
function Testimonials() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      padding: '72px 60px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 32,
      textAlign: 'center',
      margin: '0 0 40px',
      color: 'var(--text-primary)'
    }
  }, "What People Say"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 24
    }
  }, [1, 2].map(i => /*#__PURE__*/React.createElement(Card, {
    key: i
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 19,
      color: 'var(--text-primary)',
      lineHeight: 1.6,
      margin: '0 0 16px'
    }
  }, "\"Helen's sessions brought a sense of calm to our whole family I didn't think was possible.\""), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    size: 40
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      color: 'var(--text-muted)',
      fontSize: 14
    }
  }, "Client, Toronto")), "          "))));
}
function Freebie() {
  const [email, setEmail] = React.useState('');
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--brand-gradient-warm)',
      padding: '64px 60px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      margin: '0 0 8px',
      color: '#FFFFFF'
    }
  }, "A Free 7-Day Guidance Series"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      color: 'rgba(255,255,255,0.92)',
      margin: '0 0 24px'
    }
  }, "One gentle reflection a day, delivered straight to your inbox."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      justifyContent: 'center',
      maxWidth: 420,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "you@example.com",
    type: "email"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    onClick: () => setSent(true)
  }, sent ? 'Sent!' : 'Get It Free')));
}
function Contact() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-navy)',
      padding: '56px 60px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'var(--text-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      margin: '0 0 8px'
    }
  }, "Ready to begin?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      color: 'var(--text-on-dark-muted)',
      margin: 0
    }
  }, "+1 (416) 688-8168 \xB7 hshealing888@gmail.com \xB7 @holisticsoundhealing888")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "Book a Consultation"));
}
function Homepage() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(About, null), /*#__PURE__*/React.createElement(WhatIs, null), /*#__PURE__*/React.createElement(Services, null), /*#__PURE__*/React.createElement(Testimonials, null), /*#__PURE__*/React.createElement(Freebie, null), /*#__PURE__*/React.createElement(Contact, null));
}
window.Homepage = Homepage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Homepage.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Tag = __ds_scope.Tag;

})();
