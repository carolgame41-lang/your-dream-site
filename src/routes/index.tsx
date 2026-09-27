import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState, type FormEvent } from "react";
import {
  ArrowRight, Award, Baby, BadgeCheck, CalendarDays, Check, ChevronLeft,
  ChevronRight, Clock3, Facebook, GraduationCap, HeartHandshake, Instagram,
  MapPin, Menu, MessageCircle, ShieldCheck, Smile, Sparkles, Star,
  Stethoscope, UsersRound, X,
} from "lucide-react";

const WHATSAPP_NUMBER = "5511999999999";
const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
const DEFAULT_WHATSAPP = whatsappLink("Olá, Dr. Daniel! Gostaria de agendar uma consulta.");
import heroImage from "@/assets/dentist-hero.jpg";
import profileImage from "@/assets/dentist-profile.jpg";
import childImage from "@/assets/pediatric-care.jpg";
import patientImage from "@/assets/patient-smile.jpg";
import presentingImage from "@/assets/dentist-presenting.jpg";
import avatarJuliana from "@/assets/avatar-juliana.jpg";
import avatarMarcos from "@/assets/avatar-marcos.jpg";
import avatarCarla from "@/assets/avatar-carla.jpg";
import avatarRoberto from "@/assets/avatar-roberto.jpg";
import avatarFernanda from "@/assets/avatar-fernanda.jpg";
import avatarPaulo from "@/assets/avatar-paulo.jpg";

function ToothIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M14 5c-6.2 2.4-8.4 8.8-6.5 15.2 1 3.3 3.3 5.6 4 9.2.8 4.3.5 11.6 4.9 12.9 4.7 1.4 4.6-12.6 8.1-12.6s3.4 14 8.1 12.6c4.4-1.3 4.1-8.6 4.9-12.9.7-3.6 3-5.9 4-9.2C43.4 13.8 41.2 7.4 35 5c-4.2-1.6-7.1 1.4-10.5 1.4S18.2 3.4 14 5Z" />
      <path d="M19 11.5c2.3 1.2 4.5 1.5 7 .9" />
    </svg>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Daniel Cesar | Dentista em São Paulo" },
      { name: "description", content: "Odontopediatria e odontologia geral com atendimento completo, humano e acolhedor para todas as idades." },
      { property: "og:title", content: "Dr. Daniel Cesar | Sorrisos saudáveis para todas as idades" },
      { property: "og:description", content: "Cuidado odontológico completo para crianças e adultos em São Paulo." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z" />
      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z" />
      <path fill="#FBBC05" d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z" />
      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75z" />
    </svg>
  );
}

const services = [
  { icon: Baby, title: "Odontopediatria", text: "Cuidado especial para os pequenos, com foco em prevenção e sorrisos saudáveis." },
  { icon: Stethoscope, title: "Clínica Geral", text: "Prevenção, limpeza, restaurações e muito mais para manter seu sorriso sempre saudável." },
  { icon: Sparkles, title: "Estética Dental", text: "Deixe seu sorriso ainda mais bonito e confiante." },
  { icon: Smile, title: "Próteses Dentárias", text: "Recupere a função e a estética do seu sorriso com conforto e segurança." },
  { icon: ShieldCheck, title: "Tratamento de Canal", text: "Salve seu dente com tecnologia e todo o cuidado necessário." },
  { icon: BadgeCheck, title: "Ortodontia", text: "Corrija o alinhamento dos dentes e melhore sua mordida." },
];

const heroBenefits = [
  { icon: HeartHandshake, label: "Atendimento humanizado" },
  { icon: Sparkles, label: "Tecnologia moderna" },
  { icon: ShieldCheck, label: "Ambiente seguro e acolhedor" },
  { icon: UsersRound, label: "Equipe especializada" },
];

const testimonials = [
  { name: "Juliana Souza", avatar: avatarJuliana, reviews: "12 avaliações", date: "há 2 semanas", quote: "Meu filho adora ir ao consultório! O Dr. Daniel é super atencioso e faz toda a diferença no atendimento. O cuidado com as crianças é impressionante." },
  { name: "Marcos Teixeira", avatar: avatarMarcos, reviews: "5 avaliações", date: "há 1 mês", quote: "Profissional excelente, explica tudo com muita calma e segurança. Fiz um tratamento de canal e não senti nada. Recomendo de olhos fechados!" },
  { name: "Carla Mendes", avatar: avatarCarla, reviews: "8 avaliações", date: "há 3 meses", quote: "Sempre fui muito bem atendida. Ambiente acolhedor e equipe incrível. Meu sorriso está nas melhores mãos!" },
  { name: "Roberto Alves", avatar: avatarRoberto, reviews: "3 avaliações", date: "há 3 meses", quote: "Atendimento pontual e muito profissional. O Dr. Daniel tirou todas as minhas dúvidas sobre o clareamento. Resultado ficou perfeito." },
  { name: "Fernanda Lima", avatar: avatarFernanda, reviews: "21 avaliações", date: "há 4 meses", quote: "Levei minha filha de 4 anos pela primeira vez e foi uma experiência maravilhosa. Ela saiu de lá pedindo para voltar!" },
  { name: "Paulo Henrique", avatar: avatarPaulo, reviews: "7 avaliações", date: "há 5 meses", quote: "Coloquei aparelho ortodôntico com o Dr. Daniel e o acompanhamento é impecável. Preço justo e atendimento nota dez." },
];

const ratingBars = [
  { stars: 5, percent: 92 },
  { stars: 4, percent: 6 },
  { stars: 3, percent: 2 },
  { stars: 2, percent: 0 },
  { stars: 1, percent: 0 },
];

const whyReasons = [
  { icon: HeartHandshake, title: "Atendimento humanizado", text: "Cada paciente é recebido com atenção, paciência e carinho, sem pressa e sem julgamentos." },
  { icon: Baby, title: "Especialista em crianças", text: "Atendimento lúdico e acolhedor para os pequenos criarem uma relação positiva com o dentista." },
  { icon: Sparkles, title: "Tecnologia moderna", text: "Equipamentos atualizados para tratamentos mais precisos, rápidos e confortáveis." },
  { icon: CalendarDays, title: "Agendamento fácil", text: "Você agenda direto pelo WhatsApp, sem burocracia, e recebe a confirmação rapidinho." },
];

const faqs = [
  ["Com que idade a criança deve ir ao dentista pela primeira vez?", "A primeira consulta é recomendada assim que surgirem os primeiros dentinhos, ou até o primeiro ano de vida."],
  ["É normal a criança sentir medo do dentista?", "Sim. O atendimento lúdico, gradual e acolhedor ajuda a criança a criar uma relação positiva com o consultório."],
  ["Quais são os principais tratamentos da odontologia geral?", "Limpezas, prevenção, restaurações, clareamento, próteses, tratamento de canal e ortodontia."],
  ["Como funciona o clareamento dental?", "Após uma avaliação, indicamos a técnica mais segura para remover pigmentos e clarear os dentes sem comprometer a saúde."],
  ["O que é e para que serve o aparelho ortodôntico?", "O aparelho corrige o alinhamento dos dentes e a mordida, melhorando função, higiene e estética."],
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollTrack = (dir: number) => {
    const el = trackRef.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
  };

  function submitAppointment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("nome") ?? "").trim().slice(0, 100);
    const message = String(data.get("mensagem") ?? "").trim().slice(0, 500);
    const text = `Olá, Dr. Daniel! Meu nome é ${name}. ${message || "Gostaria de agendar uma consulta."}`;
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  }

  return (
    <main className="bg-background text-foreground">
      <section id="inicio" className="relative min-h-[680px] overflow-hidden bg-brand-deep text-brand-light">
        <img src={heroImage} width={1280} height={900} alt="Dr. Daniel Cesar em seu consultório" className="absolute inset-0 h-full w-full object-cover object-[68%_center]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--brand-deep)_0%,color-mix(in_oklab,var(--brand-deep)_92%,transparent)_38%,color-mix(in_oklab,var(--brand-deep)_28%,transparent)_70%,color-mix(in_oklab,var(--brand-deep)_48%,transparent)_100%)]" />
        <header className="page-shell relative z-20 flex h-24 items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Início">
            <ToothIcon className="size-11 text-brand-cyan" />
            <span><strong className="block text-lg font-black">Dr. Daniel Cesar</strong><small className="block text-xs text-brand-pale">Odontopediatria e Odontologia Geral</small></span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-bold lg:flex" aria-label="Navegação principal">
            <a href="#inicio" className="text-brand-cyan">Início</a><a href="#sobre">Sobre</a><a href="#servicos">Serviços</a><a href="#depoimentos">Depoimentos</a><a href="#contato">Contato</a>
          </nav>
          <a href={DEFAULT_WHATSAPP} target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-full bg-brand-cyan px-5 py-3 text-sm font-extrabold text-brand-deep shadow-lg lg:flex"><MessageCircle className="size-4" /> Agende sua consulta</a>
          <button type="button" aria-label="Abrir menu" onClick={() => setMenuOpen(!menuOpen)} className="grid size-11 place-items-center rounded-full border border-brand-light/30 lg:hidden">{menuOpen ? <X /> : <Menu />}</button>
        </header>
        {menuOpen && <nav className="page-shell relative z-30 grid gap-4 rounded-lg bg-background p-5 font-bold text-foreground shadow-xl lg:hidden"><a href="#inicio" onClick={() => setMenuOpen(false)}>Início</a><a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a><a href="#servicos" onClick={() => setMenuOpen(false)}>Serviços</a><a href="#depoimentos" onClick={() => setMenuOpen(false)}>Depoimentos</a><a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a></nav>}
        <div className="page-shell relative z-10 flex min-h-[570px] items-center pb-16 pt-8">
          <div className="max-w-xl">
            <span className="inline-flex rounded-full border border-brand-cyan/60 px-4 py-2 text-xs font-extrabold uppercase text-brand-pale">Saúde bucal em todas as fases da vida</span>
            <h1 className="mt-6 text-5xl font-black leading-[1.02] md:text-7xl">Sorrisos saudáveis<br />para todas as idades</h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-brand-pale">O Dr. Daniel Cesar é especialista em Odontopediatria e oferece um atendimento completo, unindo cuidado, prevenção e estética para o seu sorriso, do primeiro dentinho à vida adulta.</p>
            <a href={DEFAULT_WHATSAPP} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-3 rounded-full bg-brand-cyan px-6 py-4 font-black text-brand-deep shadow-xl"><MessageCircle className="size-5" /> Agendar Consulta <span className="grid size-7 place-items-center rounded-full bg-background"><ArrowRight className="size-4" /></span></a>
            <div className="mt-9 grid max-w-2xl grid-cols-2 gap-4 text-xs font-bold md:grid-cols-4">
              {heroBenefits.map(({ icon: Icon, label }) => <div key={label} className="flex items-center gap-2"><span className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-cyan/20 text-brand-cyan"><Icon className="size-5" /></span>{label}</div>)}
            </div>
          </div>
        </div>
        <p className="float-mark absolute right-[8%] top-36 hidden rotate-[-5deg] font-hand text-4xl leading-none text-brand-light xl:block">Sorrir<br />também é<br />saúde! ♡</p>
      </section>

      <section id="servicos" className="py-24">
        <div className="page-shell grid gap-12 lg:grid-cols-[0.8fr_1.6fr] lg:items-center">
          <div><span className="section-label">Nossos serviços</span><h2 className="mt-4 text-4xl font-black leading-tight text-brand-deep">Cuidado completo<br />para o seu sorriso</h2><p className="mt-4 leading-relaxed text-muted-foreground">Do atendimento preventivo aos tratamentos mais avançados, oferecemos soluções personalizadas para cada fase da sua vida.</p><a href={DEFAULT_WHATSAPP} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-3 rounded-full bg-brand-cyan px-6 py-3.5 font-extrabold text-brand-deep"><MessageCircle className="size-5" /> Agende sua consulta</a></div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{services.map(({icon: Icon,title,text}) => <article key={title} className="rounded-lg bg-brand-pale p-6 transition-transform hover:-translate-y-1"><Icon className="size-8 text-brand-blue" /><h3 className="mt-4 font-black text-brand-deep">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p></article>)}</div>
        </div>
      </section>

      <section id="sobre" className="bg-brand-deep py-24 text-brand-light">
        <div className="page-shell grid items-center gap-14 lg:grid-cols-2">
          <div><span className="section-label">Sobre o Dr. Daniel Cesar</span><h2 className="mt-5 text-4xl font-black leading-tight">Dedicação, experiência<br />e um cuidado que vai além<br />do consultório</h2><p className="mt-5 max-w-lg leading-relaxed text-brand-pale">Sou o Dr. Daniel Cesar, cirurgião-dentista com especialização em Odontopediatria. Acredito que cada sorriso tem uma história e merece um cuidado único, com atenção, respeito e muito carinho.</p><a href={DEFAULT_WHATSAPP} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-3 rounded-full bg-brand-cyan px-6 py-3.5 font-extrabold text-brand-deep"><MessageCircle className="size-5" /> Agende sua consulta</a><div className="mt-9 flex flex-wrap gap-8 text-xs font-bold"><span className="flex items-center gap-2"><Award className="size-8 text-brand-cyan" /> Especialista em<br />Odontopediatria</span><span className="flex items-center gap-2"><BadgeCheck className="size-8 text-brand-cyan" /> CRO/SP<br />000000</span><span className="flex items-center gap-2"><GraduationCap className="size-8 text-brand-cyan" /> Formação em<br />Odontologia</span></div></div>
          <div className="relative mx-auto w-full max-w-md"><div className="aspect-square overflow-hidden rounded-full border-8 border-brand-cyan"><img src={profileImage} loading="lazy" width={816} height={816} alt="Retrato do Dr. Daniel Cesar" className="h-full w-full object-cover" /></div><ToothIcon className="absolute -bottom-3 -right-3 size-20 rotate-12 text-brand-cyan" /></div>
        </div>
      </section>

      <section className="py-20">
        <div className="page-shell grid items-center gap-14 lg:grid-cols-2">
          <div className="relative mx-auto max-w-lg"><img src={childImage} loading="lazy" width={912} height={800} alt="Atendimento odontopediátrico acolhedor" className="aspect-[1.08] w-full rounded-[50%] border-8 border-brand-cyan object-cover" /><ToothIcon className="absolute -left-4 top-4 size-16 -rotate-12 text-brand-cyan" /></div>
          <div><span className="section-label">Odontopediatria</span><h2 className="mt-4 text-4xl font-black leading-tight text-brand-deep">Porque o sorriso do seu filho merece um cuidado especial</h2><p className="mt-4 leading-relaxed text-muted-foreground">A odontopediatria é a base para um futuro com mais saúde e confiança. Aqui, o atendimento é lúdico, acolhedor e seguro, para que a criança tenha uma experiência positiva e sem traumas.</p><ul className="mt-6 space-y-3 font-bold text-brand-blue">{["Prevenção de cáries","Acompanhamento do crescimento bucal","Orientação para hábitos saudáveis"].map(item => <li key={item} className="flex items-center gap-3"><span className="grid size-5 place-items-center rounded-full bg-brand-soft"><Check className="size-3" /></span>{item}</li>)}</ul><a href={DEFAULT_WHATSAPP} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-cyan px-6 py-3.5 font-black text-brand-deep"><MessageCircle className="size-5" /> Agende sua consulta</a></div>
        </div>
      </section>

      <section className="bg-brand-deep py-20 text-brand-light">
        <div className="page-shell grid items-center gap-12 lg:grid-cols-[1fr_0.8fr_0.8fr]">
          <div><span className="section-label">Odontologia geral</span><h2 className="mt-4 text-4xl font-black leading-tight">Mais saúde, estética<br />e bem-estar para o seu sorriso</h2><p className="mt-4 leading-relaxed text-brand-pale">Cuidar da sua saúde bucal é investir na sua qualidade de vida. Oferecemos tratamentos completos para adultos, com tecnologia, segurança e atendimento personalizado.</p><a href={DEFAULT_WHATSAPP} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-cyan px-6 py-3.5 font-black text-brand-deep"><MessageCircle className="size-5" /> Agende sua consulta</a></div>
          <img src={patientImage} loading="lazy" width={816} height={816} alt="Paciente sorrindo após atendimento" className="aspect-square w-full rounded-full border-8 border-brand-cyan object-cover" />
          <ul className="space-y-4 text-sm font-bold text-brand-pale">{["Limpeza e prevenção","Restaurações","Clareamento dental","Próteses dentárias","Tratamento de canal","Ortodontia (aparelhos)"].map(item => <li key={item} className="flex items-center gap-3"><span className="grid size-6 place-items-center rounded-full bg-brand-cyan text-brand-deep"><Check className="size-4" /></span>{item}</li>)}</ul>
        </div>
      </section>

      <section id="depoimentos" className="py-20">
        <div className="page-shell">
          <div className="text-center"><span className="section-label">Depoimentos</span><h2 className="mt-3 text-3xl font-black text-brand-deep">Veja o que meus <span className="text-brand-cyan">pacientes dizem sobre mim...</span></h2></div>
          <div className="mx-auto mt-9 max-w-5xl overflow-hidden rounded-2xl border border-brand-soft bg-card shadow-xl">
            <div className="flex flex-col items-center gap-6 border-b border-brand-soft p-7 md:flex-row md:items-center md:gap-10">
              <div className="flex items-center gap-4">
                <span className="grid size-14 place-items-center rounded-full bg-brand-soft text-2xl font-black text-brand-blue">G</span>
                <div><strong className="block text-lg text-brand-deep">Dr. Daniel Cesar — Odontologia</strong><span className="text-sm text-muted-foreground">Av. Exemplo, 123 · Centro, São Paulo - SP</span></div>
              </div>
              <div className="flex items-center gap-6 md:ml-auto">
                <div className="text-center"><span className="block text-5xl font-black text-brand-deep">4,9</span><div className="mt-1 flex justify-center gap-0.5 text-brand-yellow">{[1,2,3,4,5].map(i => <Star key={i} className="size-4 fill-current" />)}</div><span className="mt-1 block text-xs text-muted-foreground">127 avaliações</span></div>
                <div className="w-44 space-y-1.5">{ratingBars.map(({ stars, percent }) => <div key={stars} className="flex items-center gap-2 text-xs text-muted-foreground"><span className="w-3 text-right font-bold">{stars}</span><div className="h-2 flex-1 overflow-hidden rounded-full bg-brand-soft"><div className="h-full rounded-full bg-brand-yellow" style={{ width: `${percent}%` }} /></div></div>)}</div>
              </div>
            </div>
            <div className="relative p-7 pb-9">
              <button type="button" onClick={() => scrollTrack(-1)} aria-label="Avaliações anteriores" className="absolute left-0 top-1/2 z-10 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-brand-soft bg-background text-brand-deep shadow-md transition hover:bg-brand-pale"><ChevronLeft className="size-5" /></button>
              <button type="button" onClick={() => scrollTrack(1)} aria-label="Próximas avaliações" className="absolute right-0 top-1/2 z-10 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-brand-soft bg-background text-brand-deep shadow-md transition hover:bg-brand-pale"><ChevronRight className="size-5" /></button>
              <div ref={trackRef} className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 md:px-8">
                {testimonials.map(({ name, avatar, reviews, date, quote }) => (
                  <article key={name} className="w-full shrink-0 snap-start rounded-lg border border-brand-soft bg-background p-5 shadow-sm md:w-[calc(50%-10px)] lg:w-[calc((100%-2.5rem)/3)]">
                    <div className="flex items-center gap-3">
                      <img src={avatar} alt={`Foto de ${name}`} loading="lazy" className="size-10 shrink-0 rounded-full object-cover" />
                      <div className="min-w-0">
                        <strong className="block truncate text-sm text-brand-deep">{name}</strong>
                        <span className="block text-xs text-muted-foreground">{date}</span>
                      </div>
                      <GoogleLogo className="ml-auto size-5 shrink-0" />
                    </div>
                    <div className="mt-3 flex gap-0.5 text-brand-yellow" aria-label="5 de 5 estrelas">{[1,2,3,4,5].map(i => <Star key={i} className="size-4 fill-current" />)}</div>
                    <blockquote className="mt-2 text-sm leading-relaxed text-muted-foreground">{quote}</blockquote>
                    <span className="mt-3 block text-xs font-semibold text-muted-foreground">{reviews}</span>
                  </article>
                ))}
              </div>
            </div>
            <div className="border-t border-brand-soft bg-brand-pale p-5 text-center"><a href="https://www.google.com/maps/search/?api=1&query=Centro%2C%20S%C3%A3o%20Paulo%2C%20SP" target="_blank" rel="noreferrer" className="text-sm font-black text-brand-blue underline-offset-4 hover:underline">Ver todas as avaliações no Google</a></div>
          </div>
        </div>
      </section>

      <section id="porque-agendar" className="bg-brand-deep py-20 text-brand-light">
        <div className="page-shell grid items-center gap-12 lg:grid-cols-[0.9fr_1.4fr]">
          <div className="relative mx-auto w-full max-w-sm">
            <img src={presentingImage} loading="lazy" width={912} height={1008} alt="Dr. Daniel Cesar apresentando seus diferenciais" className="w-full rounded-2xl border-8 border-brand-cyan object-cover" />
            <ToothIcon className="absolute -right-4 -top-4 size-16 rotate-12 text-brand-cyan" />
            <p className="float-mark absolute -left-6 bottom-8 rotate-[-6deg] font-hand text-3xl leading-none text-brand-light">Cuidado que<br />faz sorrir! ♡</p>
          </div>
          <div>
            <span className="section-label">Por que agendar?</span>
            <h2 className="mt-4 text-4xl font-black leading-tight">Por que agendar com o Dr. Daniel?</h2>
            <p className="mt-4 max-w-xl leading-relaxed text-brand-pale">Mais do que tratar dentes, o Dr. Daniel cuida de pessoas. Veja o que torna o atendimento dele diferente.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">{whyReasons.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-lg bg-brand-light/10 p-5"><span className="grid size-11 place-items-center rounded-full bg-brand-cyan/20 text-brand-cyan"><Icon className="size-5" /></span><h3 className="mt-3 font-black">{title}</h3><p className="mt-1.5 text-sm leading-relaxed text-brand-pale">{text}</p></article>)}</div>
            <a href={DEFAULT_WHATSAPP} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 rounded-full bg-brand-cyan px-7 py-4 font-black text-brand-deep shadow-xl"><MessageCircle className="size-5" /> Agende sua consulta pelo WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="bg-brand-deep py-12 text-center text-brand-light"><h2 className="text-2xl font-black">Ainda tem alguma dúvida?</h2><p className="mt-2 text-sm text-brand-pale">Confira as perguntas mais frequentes sobre nossos tratamentos e atendimento.</p><a href="#duvidas" className="mt-5 inline-flex rounded-full bg-brand-cyan px-6 py-3 text-sm font-black text-brand-deep">Ver todas as perguntas</a></section>

      <section id="duvidas" className="py-16"><div className="mx-auto w-[min(760px,calc(100%-40px))]"><h2 className="text-center text-2xl font-black text-brand-deep">Perguntas Frequentes</h2><div className="mt-6 divide-y divide-brand-soft">{faqs.map(([q,a]) => <details key={q} className="group py-4"><summary className="flex cursor-pointer list-none items-center justify-between font-bold text-brand-blue">{q}<span className="ml-4 text-brand-cyan group-open:rotate-45">＋</span></summary><p className="pt-3 leading-relaxed text-muted-foreground">{a}</p></details>)}</div></div></section>

      <section id="agendamento" className="bg-brand-pale py-20"><div className="page-shell grid gap-12 lg:grid-cols-2"><div><span className="section-label">Agende sua consulta</span><h2 className="mt-4 text-4xl font-black text-brand-deep">Vamos cuidar do seu sorriso?</h2><p className="mt-4 max-w-md leading-relaxed text-muted-foreground">Preencha seu nome e sua mensagem — ao enviar, o WhatsApp abre com tudo pronto para você confirmar o agendamento.</p><div className="mt-8 space-y-4 text-sm font-bold text-brand-blue"><p className="flex items-center gap-3"><MapPin className="size-5 text-brand-cyan" /> Av. Exemplo, 123 · Centro · São Paulo - SP</p><p className="flex items-center gap-3"><Clock3 className="size-5 text-brand-cyan" /> Segunda a Sexta: 08h às 18h · Sábado: 08h às 12h</p><p className="flex items-center gap-3"><CalendarDays className="size-5 text-brand-cyan" /> Atendimento com hora marcada</p></div></div><form onSubmit={submitAppointment} className="grid gap-4 rounded-lg bg-card p-7 shadow-lg"><label className="grid gap-2 text-sm font-bold">Nome<input required name="nome" maxLength={100} className="rounded-md border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring" placeholder="Seu nome completo" /></label><label className="grid gap-2 text-sm font-bold">Mensagem<textarea name="mensagem" rows={4} maxLength={500} className="resize-none rounded-md border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring" placeholder="Conte como podemos ajudar" /></label><button type="submit" className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-brand-cyan px-6 py-4 font-black text-brand-deep"><MessageCircle className="size-5" /> Solicitar agendamento pelo WhatsApp</button><p className="text-center text-xs text-muted-foreground">Você será redirecionado para o WhatsApp com a mensagem pronta.</p></form></div></section>

      <section id="contato" className="grid min-h-72 md:grid-cols-[1.4fr_1fr]"><iframe title="Mapa do consultório" src="https://www.google.com/maps?q=Centro,+S%C3%A3o+Paulo,+SP&output=embed" loading="lazy" className="h-80 w-full border-0 md:h-full" /><div className="flex items-center bg-background p-10"><div><ToothIcon className="size-12 text-brand-cyan" /><h2 className="mt-4 text-2xl font-black text-brand-deep">Nosso consultório</h2><p className="mt-3 font-bold text-brand-blue">Av. Exemplo, 123 · Centro<br />São Paulo - SP</p><a href="https://www.google.com/maps/search/?api=1&query=Centro%2C%20S%C3%A3o%20Paulo%2C%20SP" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-cyan px-5 py-3 text-sm font-black text-brand-deep"><MapPin className="size-4" /> Ver no Google Maps</a><p className="mt-7 font-hand text-3xl text-brand-cyan">Estamos aqui para cuidar do seu sorriso! ♡</p></div></div></section>

      <footer className="bg-brand-deep py-12 text-brand-light"><div className="page-shell flex flex-col items-center justify-between gap-7 md:flex-row"><a href="#inicio" className="flex items-center gap-3"><ToothIcon className="size-10 text-brand-cyan" /><span><strong className="block">Dr. Daniel Cesar</strong><small className="text-brand-pale">Odontopediatria e Odontologia Geral</small></span></a><nav className="flex flex-wrap justify-center gap-5 text-xs font-bold"><a href="#inicio">Início</a><a href="#sobre">Sobre</a><a href="#servicos">Serviços</a><a href="#depoimentos">Depoimentos</a><a href="#contato">Contato</a></nav><div className="flex items-center gap-3"><a href={DEFAULT_WHATSAPP} target="_blank" rel="noreferrer" className="rounded-full bg-brand-cyan px-4 py-2 text-xs font-black text-brand-deep">Agendar Consulta</a><a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram className="size-5" /></a><a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook className="size-5" /></a></div></div><p className="page-shell mt-9 text-center text-xs text-brand-pale">© 2026 Dr. Daniel Cesar · Odontopediatria e Odontologia Geral. Todos os direitos reservados.</p></footer>
    </main>
  );
}
