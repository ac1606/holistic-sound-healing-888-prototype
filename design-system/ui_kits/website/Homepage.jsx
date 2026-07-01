const { Button, Badge, Tag, Card, Input, Avatar } = window.HolisticSoundHealing888DesignSystem_2358a2;

function Hero() {
  return (
    <section style={{ background: 'var(--brand-gradient-hero)', padding: '80px 60px', display: 'flex', alignItems: 'center', gap: 48, position: 'relative', overflow: 'hidden' }}>
      <img src="../../assets/logo-transparent.png" style={{ width: 200, height: 200, objectFit: 'contain' }} />
      <div>
        <h1 style={{ fontFamily: 'var(--font-script)', fontSize: 64, color: '#FFD166', margin: '0 0 8px' }}>Holistic Sound Healing 888</h1>
        <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 24, color: 'var(--text-on-dark)', margin: '0 0 24px' }}>Helen Chan — Music Teacher &amp; Sound Healer</p>
        <div style={{ display: 'flex', gap: 14 }}>
          <Button variant="primary" size="lg">Book a Consultation</Button>
          <Button variant="ghost" size="lg" style={{}}>Watch My Story</Button>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section style={{ padding: '72px 60px', display: 'flex', gap: 48, alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ maxWidth: 560, textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', color: 'var(--accent-secondary)', textTransform: 'uppercase', margin: '0 0 8px' }}>Why I Do This</p>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 36, margin: '0 0 16px', color: 'var(--text-primary)' }}>My path to self-healing — and yours</h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, color: 'var(--text-muted)' }}>
          Music has carried me through my own transformation, and I've spent years sharing it with children and adults alike. Sound healing isn't separate from who I am — it's how I show up, every day, for the people I work with.
        </p>
      </div>
    </section>
  );
}

function WhatIs() {
  return (
    <section style={{ background: 'var(--surface-navy)', padding: '64px 60px', color: 'var(--text-on-dark)', textAlign: 'center' }}>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 32, margin: '0 0 16px' }}>What is Sound Healing?</h2>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.7, maxWidth: 680, margin: '0 auto', color: 'var(--text-on-dark-muted)' }}>
        Sound healing uses vibration, tone, and intention to help restore balance to body, mind, and spirit — a gentle, ancient practice made simple for modern life.
      </p>
    </section>
  );
}

function Services() {
  const items = [
    { title: 'Holistic Learning', desc: 'Whole-child approach to growth and self-discovery.' },
    { title: 'Music & Emotional Regulation', desc: 'Piano & singing lessons paired with emotional tools.' },
    { title: 'Mindfulness', desc: 'Calming practices for adults and children alike.' },
    { title: 'Parent Support', desc: 'Guidance for parents navigating their child\'s wellbeing.' },
  ];
  return (
    <section style={{ padding: '72px 60px' }}>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 32, textAlign: 'center', margin: '0 0 8px', color: 'var(--text-primary)' }}>Services</h2>
      <p style={{ textAlign: 'center', fontFamily: 'var(--font-body)', color: 'var(--text-muted)', margin: '0 0 40px' }}>Individual &amp; group sessions available — bundles save you more.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
        {items.map((it) => (
          <Card key={it.title} padding="28px 22px">
            <Tag>{it.title}</Tag>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-muted)', marginTop: 14, lineHeight: 1.5 }}>{it.desc}</p>
          </Card>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: 32 }}>
        <Badge tone="warm">Bundles save up to 20% — ask Helen for details</Badge>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section style={{ background: 'var(--surface-page)', padding: '72px 60px' }}>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 32, textAlign: 'center', margin: '0 0 40px', color: 'var(--text-primary)' }}>What People Say</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
        {[1,2].map((i) => (
          <Card key={i}>
            <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 19, color: 'var(--text-primary)', lineHeight: 1.6, margin: '0 0 16px' }}>
              "Helen's sessions brought a sense of calm to our whole family I didn't think was possible."
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <Avatar size={40} />
              <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--text-muted)', fontSize: 14 }}>Client, Toronto</span>
            </div>          </Card>
        ))}
      </div>
    </section>
  );
}

function Freebie() {
  const [email, setEmail] = React.useState('');
  const [sent, setSent] = React.useState(false);
  return (
    <section style={{ background: 'var(--brand-gradient-warm)', padding: '64px 60px', textAlign: 'center' }}>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 30, margin: '0 0 8px', color: '#FFFFFF' }}>A Free 7-Day Guidance Series</h2>
      <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.92)', margin: '0 0 24px' }}>One gentle reflection a day, delivered straight to your inbox.</p>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', maxWidth: 420, margin: '0 auto' }}>
        <div style={{ flex: 1 }}>
          <Input placeholder="you@example.com" type="email" />
        </div>
        <Button variant="dark" onClick={() => setSent(true)}>{sent ? 'Sent!' : 'Get It Free'}</Button>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section style={{ background: 'var(--surface-navy)', padding: '56px 60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--text-on-dark)' }}>
      <div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 24, margin: '0 0 8px' }}>Ready to begin?</h3>
        <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-on-dark-muted)', margin: 0 }}>+1 (416) 688-8168 · hshealing888@gmail.com · @holisticsoundhealing888</p>
      </div>
      <Button variant="primary" size="lg">Book a Consultation</Button>
    </section>
  );
}

function Homepage() {
  return (
    <div style={{ fontFamily: 'var(--font-body)' }}>
      <Hero />
      <About />
      <WhatIs />
      <Services />
      <Testimonials />
      <Freebie />
      <Contact />
    </div>
  );
}
window.Homepage = Homepage;
