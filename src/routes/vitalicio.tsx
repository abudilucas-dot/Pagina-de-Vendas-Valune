import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Banknote,
  CalendarClock,
  ChevronDown,
  CreditCard,
  Download,
  Eye,
  FileBarChart,
  Landmark,
  LineChart,
  Menu,
  PiggyBank,
  Repeat,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingDown,
  Wallet,
  X,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

const SIGNUP_HREF = "/cadastro";
const LOGIN_HREF = "/login";

export const Route = createFileRoute("/vitalicio")({
  head: () => ({
    meta: [
      { title: "Valune — Organize sua vida financeira com clareza" },
      {
        name: "description",
        content:
          "Controle contas, cartões, parcelas, metas e despesas em um só lugar. Teste o Valune grátis por 7 dias, sem cartão.",
      },
      { property: "og:title", content: "Valune — Organize sua vida financeira com clareza" },
      {
        property: "og:description",
        content:
          "Controle contas, cartões, parcelas, metas e despesas em um só lugar. Teste o Valune grátis por 7 dias, sem cartão.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VitalicioPage,
});

function Logo() {
  return (
    <span className="flex items-center gap-2">
      <span
        className="flex size-9 items-center justify-center rounded-xl"
        style={{ backgroundImage: "var(--gradient-teal)" }}
        aria-hidden="true"
      >
        <LineChart className="size-5 text-primary-foreground" strokeWidth={2.4} />
      </span>
      <span className="font-display text-lg font-semibold tracking-tight">Valune</span>
    </span>
  );
}

function TopBar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Recursos", href: "#recursos" },
    { label: "Dúvidas", href: "#duvidas" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="rounded-lg" aria-label="Valune, ir para o início">
          <Logo />
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={LOGIN_HREF}
            className="btn-ghost hidden rounded-xl px-4 py-2 text-sm font-medium sm:inline-flex"
          >
            Entrar
          </a>
          <a href={SIGNUP_HREF} className="btn-primary rounded-xl px-4 py-2 text-sm">
            Testar grátis
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="btn-ghost inline-flex size-10 items-center justify-center rounded-xl md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border/70 bg-background/95 px-4 py-4 md:hidden">
          <nav aria-label="Navegação mobile" className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href={LOGIN_HREF}
              className="mt-2 rounded-lg px-2 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
            >
              Entrar
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function AppMockup() {
  const bars = [38, 62, 48, 80, 56, 72, 44];
  return (
    <div className="relative">
      <div
        className="absolute -inset-6 -z-10 rounded-[2.5rem] aurora blur-2xl opacity-70"
        aria-hidden="true"
      />
      <div className="glass rounded-3xl p-4 sm:p-5" aria-hidden="true">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground">Saldo disponível</p>
            <p className="font-display text-2xl font-semibold">R$ 4.286,40</p>
          </div>
          <span className="rounded-full border border-border px-3 py-1 text-[11px] text-muted-foreground">
            Setembro
          </span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-border bg-surface-2/60 p-3">
            <p className="text-[11px] text-muted-foreground">Receitas</p>
            <p className="mt-1 font-semibold text-teal">R$ 6.900,00</p>
          </div>
          <div className="rounded-2xl border border-border bg-surface-2/60 p-3">
            <p className="text-[11px] text-muted-foreground">Despesas</p>
            <p className="mt-1 font-semibold text-pink">R$ 2.613,60</p>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-border bg-surface-2/50 p-4">
          <div className="flex items-end justify-between gap-2">
            {bars.map((h, i) => (
              <span
                key={i}
                className="bar-rise w-full rounded-t-md"
                style={{
                  height: `${h}px`,
                  animationDelay: `${i * 90}ms`,
                  backgroundImage:
                    i % 3 === 0
                      ? "linear-gradient(180deg, var(--teal), transparent)"
                      : i % 3 === 1
                        ? "linear-gradient(180deg, var(--blue), transparent)"
                        : "linear-gradient(180deg, var(--purple), transparent)",
                }}
              />
            ))}
          </div>
          <p className="mt-3 text-[11px] text-muted-foreground">Gastos por semana</p>
        </div>

        <div className="mt-4 space-y-2">
          {[
            { icon: CreditCard, label: "Fatura do cartão", value: "R$ 1.240,00", tone: "text-gold" },
            { icon: Target, label: "Meta: reserva", value: "68%", tone: "text-teal" },
            { icon: CalendarClock, label: "Parcela 3/10", value: "R$ 189,90", tone: "text-blue" },
          ].map((row) => (
            <div
              key={row.label}
              className="flex items-center justify-between rounded-xl border border-border bg-surface/70 px-3 py-2.5"
            >
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <row.icon className={`size-4 ${row.tone}`} />
                {row.label}
              </span>
              <span className="text-sm font-medium">{row.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden hero-glow pt-28 pb-16 sm:pt-32 sm:pb-24">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
            Organize sua vida financeira sem complicação
          </p>
          <h1 className="mt-4 text-4xl leading-[1.08] font-semibold sm:text-5xl lg:text-6xl">
            Seu dinheiro não precisa{" "}
            <span className="text-gradient-teal">desaparecer todo mês.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            Veja para onde seu dinheiro vai, acompanhe cartões, parcelas, contas e metas em um só
            lugar. Teste o Valune por 7 dias, sem cartão.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={SIGNUP_HREF}
              className="btn-primary inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-base"
            >
              Começar teste grátis <ArrowRight className="size-4" />
            </a>
            <a
              href="#como-funciona"
              className="btn-ghost inline-flex items-center justify-center rounded-2xl px-6 py-3.5 text-base font-medium"
            >
              Ver como funciona
            </a>
          </div>

          <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
            {[
              { icon: CalendarClock, label: "7 dias grátis" },
              { icon: ShieldCheck, label: "Sem cartão" },
              { icon: BadgeCheck, label: "Pagamento único depois do teste" },
            ].map((b) => (
              <li key={b.label} className="flex items-center gap-2">
                <b.icon className="size-4 text-teal" />
                {b.label}
              </li>
            ))}
          </ul>

          <p className="glass mt-8 inline-flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 rounded-full px-4 py-2 text-sm">
            <Sparkles className="size-4 text-gold" />
            Acesso completo por <strong className="font-semibold">R$ 49,90</strong> — pagamento único
          </p>
        </Reveal>

        <Reveal delay={120}>
          <AppMockup />
        </Reveal>
      </div>
    </section>
  );
}

function PainSection() {
  const pains = [
    {
      icon: CreditCard,
      title: "Cartão sem controle",
      text: "Compras e parcelas se acumulam e a fatura surpreende.",
      tone: "var(--pink)",
    },
    {
      icon: Wallet,
      title: "Contas espalhadas",
      text: "Dinheiro em bancos, carteiras e cartões, mas nenhuma visão completa.",
      tone: "var(--blue)",
    },
    {
      icon: Target,
      title: "Metas que ficam para depois",
      text: "Você quer se organizar, mas não sabe por onde começar.",
      tone: "var(--purple)",
    },
  ];

  return (
    <section className="border-y border-border/70 bg-surface/40 py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="max-w-3xl text-3xl font-semibold sm:text-4xl">
            Você trabalha, recebe… e no fim do mês não entende para onde foi o dinheiro?
          </h2>
        </Reveal>

        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {pains.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 90}>
              <div className="glass lift h-full rounded-3xl p-6">
                <span
                  className="flex size-11 items-center justify-center rounded-2xl"
                  style={{ background: `color-mix(in oklab, ${p.tone} 18%, transparent)` }}
                >
                  <p.icon className="size-5" style={{ color: p.tone }} />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120}>
          <p className="mt-10 text-center font-display text-xl font-medium sm:text-2xl">
            O problema não é falta de esforço. É <span className="text-teal">falta de clareza</span>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function SolutionSection() {
  const cols = [
    {
      icon: Eye,
      title: "Veja o todo",
      text: "Saldo, receitas e despesas.",
      tone: "var(--teal)",
    },
    {
      icon: CreditCard,
      title: "Controle o cartão",
      text: "Limite, fatura e parcelas.",
      tone: "var(--blue)",
    },
    {
      icon: PiggyBank,
      title: "Acompanhe seus objetivos",
      text: "Metas, aportes e progresso.",
      tone: "var(--gold)",
    },
  ];

  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-3xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            O Valune transforma números soltos em decisões mais claras.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Em poucos minutos, você passa a enxergar sua vida financeira de forma simples, visual e
            organizada.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {cols.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <div
                className="lift h-full rounded-3xl border border-border p-6"
                style={{
                  backgroundImage: `linear-gradient(160deg, color-mix(in oklab, ${c.tone} 14%, transparent), transparent 70%)`,
                }}
              >
                <c.icon className="size-6" style={{ color: c.tone }} />
                <h3 className="mt-4 text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
                <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                  <span
                    className="block h-full rounded-full"
                    style={{
                      width: `${60 + i * 14}%`,
                      background: `linear-gradient(90deg, ${c.tone}, transparent)`,
                    }}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      title: "Crie sua conta",
      text: "Leva menos de um minuto e não pede cartão.",
    },
    {
      title: "Organize sua realidade",
      text: "Cadastre contas, cartões e movimentações.",
    },
    {
      title: "Ganhe clareza todos os dias",
      text: "Use o teste grátis por 7 dias e decida se quer liberar o acesso completo.",
    },
  ];

  return (
    <section id="como-funciona" className="border-y border-border/70 bg-surface/40 py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-center text-3xl font-semibold sm:text-4xl">Começar é simples</h2>
        </Reveal>

        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 90}>
              <div className="glass lift h-full rounded-3xl p-6">
                <span
                  className="flex size-10 items-center justify-center rounded-full font-display font-semibold"
                  style={{
                    backgroundImage: "var(--gradient-teal)",
                    color: "var(--primary-foreground)",
                  }}
                >
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={120}>
          <div className="mt-10 flex justify-center">
            <a
              href={SIGNUP_HREF}
              className="btn-primary inline-flex items-center gap-2 rounded-2xl px-7 py-3.5 text-base"
            >
              Quero testar o Valune grátis <ArrowRight className="size-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    { icon: Landmark, title: "Contas", text: "Acompanhe bancos e carteiras.", tone: "var(--teal)" },
    {
      icon: CreditCard,
      title: "Cartões",
      text: "Controle crédito, débito, limite e faturas.",
      tone: "var(--blue)",
    },
    {
      icon: CalendarClock,
      title: "Parcelas",
      text: "Visualize compras parceladas sem confusão.",
      tone: "var(--purple)",
    },
    { icon: Target, title: "Metas", text: "Acompanhe objetivos e aportes.", tone: "var(--gold)" },
    { icon: TrendingDown, title: "Dívidas", text: "Saiba o que falta quitar.", tone: "var(--pink)" },
    { icon: Repeat, title: "Assinaturas", text: "Enxergue gastos recorrentes.", tone: "var(--blue)" },
    {
      icon: BarChart3,
      title: "Orçamentos",
      text: "Acompanhe limites por categoria.",
      tone: "var(--teal)",
    },
    {
      icon: FileBarChart,
      title: "Relatórios",
      text: "Transforme movimentações em visão clara.",
      tone: "var(--purple)",
    },
    {
      icon: Download,
      title: "Exportação de dados",
      text: "Mantenha uma cópia organizada das suas informações.",
      tone: "var(--gold)",
    },
  ];

  return (
    <section id="recursos" className="py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="max-w-3xl text-3xl font-semibold sm:text-4xl">
            Tudo o que você precisa para organizar suas finanças em um só lugar
          </h2>
        </Reveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal as="li" key={f.title} delay={(i % 3) * 80}>
              <div className="glass lift h-full rounded-3xl p-5">
                <span
                  className="flex size-10 items-center justify-center rounded-xl"
                  style={{ background: `color-mix(in oklab, ${f.tone} 18%, transparent)` }}
                >
                  <f.icon className="size-5" style={{ color: f.tone }} />
                </span>
                <h3 className="mt-4 font-semibold">{f.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Comparison() {
  return (
    <section className="border-y border-border/70 bg-surface/40 py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-5 px-4 sm:px-6 md:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-3xl border border-border bg-background/70 p-6">
            <h3 className="text-sm font-semibold tracking-[0.14em] text-muted-foreground uppercase">
              Antes do Valune
            </h3>
            <ul className="mt-5 space-y-3">
              {[
                "“Acho que gastei pouco”",
                "“Não sei quanto falta da fatura”",
                "“Vou ver isso no fim do mês”",
              ].map((t, i) => (
                <li
                  key={t}
                  className="flex items-start gap-3 rounded-2xl border border-border/60 bg-surface/40 px-4 py-3 text-sm text-muted-foreground"
                  style={{ transform: `rotate(${i % 2 ? -0.4 : 0.5}deg)` }}
                >
                  <X className="mt-0.5 size-4 shrink-0 text-destructive" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={110}>
          <div
            className="h-full rounded-3xl border border-border p-6"
            style={{
              backgroundImage:
                "linear-gradient(160deg, color-mix(in oklab, var(--teal) 16%, transparent), color-mix(in oklab, var(--purple) 12%, transparent))",
            }}
          >
            <h3 className="text-sm font-semibold tracking-[0.14em] text-teal uppercase">
              Com o Valune
            </h3>
            <ul className="mt-5 space-y-3">
              {[
                "“Sei o que entrou e o que saiu”",
                "“Acompanho parcelas e contas”",
                "“Consigo planejar o próximo passo”",
              ].map((t) => (
                <li
                  key={t}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-background/40 px-4 py-3 text-sm"
                >
                  <BadgeCheck className="mt-0.5 size-4 shrink-0 text-teal" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Offer() {
  const items = [
    "Pagamento único",
    "Sem mensalidade",
    "Sem renovação automática",
    "Acesso vitalício enquanto o Valune estiver disponível e em operação",
    "Todos os recursos liberados após a confirmação do pagamento",
  ];

  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 -z-10 aurora opacity-60" aria-hidden="true" />
      <div className="mx-auto w-full max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
            Comece sem risco
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Teste o Valune por 7 dias. Depois, escolha continuar com acesso completo.
          </h2>
        </Reveal>

        <Reveal delay={110}>
          <div className="glass mt-10 rounded-[2rem] p-7 text-left sm:p-9">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Valune Vitalício</p>
                <p className="mt-1 font-display text-4xl font-semibold sm:text-5xl">R$ 49,90</p>
              </div>
              <span className="rounded-full border border-border px-3 py-1 text-xs text-teal">
                Pagamento único
              </span>
            </div>

            <ul className="mt-7 space-y-3">
              {items.map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <BadgeCheck className="mt-0.5 size-4 shrink-0 text-teal" />
                  <span className="text-muted-foreground">{i}</span>
                </li>
              ))}
            </ul>

            <a
              href={SIGNUP_HREF}
              className="btn-primary mt-8 flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 text-base"
            >
              Começar meu teste grátis <ArrowRight className="size-4" />
            </a>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Você não precisa informar cartão para testar.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Faq() {
  const faq = [
    {
      q: "Preciso informar cartão para testar?",
      a: "Não. Você pode usar o Valune por 7 dias sem cadastrar cartão.",
    },
    {
      q: "O que acontece depois dos 7 dias?",
      a: "Ao fim do teste, você pode desbloquear o acesso completo ao Valune por R$ 49,90 em pagamento único.",
    },
    {
      q: "Existe mensalidade?",
      a: "Não. O acesso completo é adquirido em compra única, sem cobrança mensal ou renovação automática.",
    },
    {
      q: "O Valune conecta à minha conta bancária?",
      a: "Nesta versão, você cadastra suas informações manualmente para manter controle sobre seus dados.",
    },
    {
      q: "O Valune faz investimentos por mim?",
      a: "Não. O Valune é uma ferramenta de organização financeira pessoal e não oferece recomendação de investimentos.",
    },
    {
      q: "Meus dados ficam protegidos?",
      a: "O app possui autenticação, controles de privacidade e opções para exportar ou excluir dados da conta.",
    },
  ];

  return (
    <section id="duvidas" className="border-y border-border/70 bg-surface/40 py-20">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-3xl font-semibold sm:text-4xl">Perguntas frequentes</h2>
        </Reveal>
        <div className="mt-8 space-y-3">
          {faq.map((item, i) => (
            <Reveal key={item.q} delay={(i % 3) * 70}>
              <details className="glass group rounded-2xl px-5 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-medium">
                  {item.q}
                  <ChevronDown className="size-4 shrink-0 text-teal transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="cta-gradient relative overflow-hidden py-20">
      <div className="absolute inset-0 aurora opacity-40" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-3xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Chega de terminar o mês se perguntando para onde foi seu dinheiro.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Comece grátis, organize sua realidade e tenha mais clareza para decidir seus próximos
            passos.
          </p>
          <a
            href={SIGNUP_HREF}
            className="btn-primary mt-8 inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-base"
          >
            Criar minha conta grátis <ArrowRight className="size-4" />
          </a>
          <p className="mt-3 text-xs text-muted-foreground">
            7 dias grátis · sem cartão · configuração rápida
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-background py-14">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <Logo />
            <p className="mt-3 text-sm text-muted-foreground">
              Suas finanças, organizadas com clareza.
            </p>
          </div>
          <nav aria-label="Links do rodapé" className="flex flex-col gap-2 text-sm">
            <a href="/termos" className="text-muted-foreground hover:text-foreground">
              Termos de Uso
            </a>
            <a href="/privacidade" className="text-muted-foreground hover:text-foreground">
              Política de Privacidade
            </a>
            <a href="/suporte" className="text-muted-foreground hover:text-foreground">
              Suporte
            </a>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-start gap-2">
            <Banknote className="mt-0.5 size-4 shrink-0" />O Valune é uma ferramenta de organização
            financeira e não oferece recomendação de investimentos.
          </p>
          <p>© {new Date().getFullYear()} Valune</p>
        </div>
      </div>
    </footer>
  );
}

function VitalicioPage() {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <main>
        <Hero />
        <PainSection />
        <SolutionSection />
        <HowItWorks />
        <Features />
        <Comparison />
        <Offer />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
