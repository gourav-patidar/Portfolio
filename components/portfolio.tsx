"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  aboutFacts,
  experiences,
  marquee,
  navItems,
  principles,
  profile,
  projects,
  serviceCards,
  skillGroups,
  stats,
} from "@/data/portfolio";
import { cn } from "@/lib/utils";

const fade = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={fade}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-8 grid gap-3 md:grid-cols-[0.65fr_1fr] md:items-end">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">{eyebrow}</p>
        <h2 className="mt-3 font-display text-4xl leading-none tracking-normal text-foreground sm:text-5xl">
          {title}
        </h2>
      </div>
      <p className="max-w-xl text-sm leading-7 text-muted-foreground md:justify-self-end md:text-right">
        {description}
      </p>
    </div>
  );
}

function DeviceShowcase() {
  return (
    <div className="relative mx-auto w-full max-w-[390px]">
      <div className="absolute -left-4 top-8 hidden h-52 w-28 rounded-[2rem] border border-border bg-card shadow-soft sm:block" />
      <div className="relative rounded-[2.2rem] border border-border bg-foreground p-2 shadow-soft dark:bg-black">
        <div className="overflow-hidden rounded-[1.75rem] bg-background">
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <span className="h-2 w-16 rounded-full bg-muted" />
            <span className="h-2 w-2 rounded-full bg-primary" />
          </div>
          <div className="space-y-5 p-5">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Release health
              </p>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {["99.9", "42ms", "0"].map((item, index) => (
                  <div key={item} className="rounded-md border border-border bg-card p-3">
                    <p className="text-lg font-semibold">{item}</p>
                    <p className="mt-1 text-[10px] text-muted-foreground">
                      {["uptime", "frame", "crashes"][index]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Flutter SDK bridge</p>
                  <p className="mt-1 text-xs text-muted-foreground">Android + iOS parity</p>
                </div>
                <Badge variant="outline" className="rounded-full">
                  Live
                </Badge>
              </div>
              <div className="mt-4 space-y-2">
                <span className="block h-2 w-full rounded-full bg-muted" />
                <span className="block h-2 w-4/5 rounded-full bg-muted" />
                <span className="block h-2 w-2/3 rounded-full bg-muted" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {serviceCards.slice(0, 4).map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="rounded-md border border-border bg-card p-3">
                    <Icon className="h-4 w-4 text-accent" />
                    <p className="mt-3 text-xs leading-5 text-muted-foreground">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-4 right-4 rounded-full border border-border bg-background px-3 py-2 text-xs text-muted-foreground shadow-soft">
        Mobile-first systems
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/82 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-3" aria-label="Gourav Patidar home">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-foreground text-sm font-semibold text-background">
            {profile.initials}
          </span>
          <span className="hidden text-sm font-medium sm:inline">{profile.name}</span>
        </a>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Button key={item.href} variant="ghost" size="sm" asChild>
              <a href={item.href}>{item.label}</a>
            </Button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild className="rounded-full">
            <a href={`mailto:${profile.email}`}>
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">Hire me</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="container grid gap-12 pb-16 pt-10 md:grid-cols-[1.08fr_0.92fr] md:pb-24 md:pt-20">
      <Reveal>
        <Badge variant="outline" className="rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em]">
          <span className="mr-2 h-2 w-2 rounded-full bg-accent" />
          {profile.availability}
        </Badge>
        <h1 className="mt-7 max-w-4xl font-display text-6xl leading-[0.95] tracking-normal text-balance sm:text-7xl lg:text-8xl">
          Mobile apps with native depth.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
          {profile.summary}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="default" className="rounded-full">
            <a href="#work">
              View selected work
              <ArrowDown className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="outline" size="default" className="rounded-full">
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </Button>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="rounded-lg border border-border bg-card p-4">
              <p className="font-display text-3xl leading-none">{item.value}</p>
              <p className="mt-2 text-xs leading-5 text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal delay={0.1} className="md:self-end">
        <DeviceShowcase />
      </Reveal>
    </section>
  );
}

function About() {
  return (
    <section className="border-y border-border bg-card/50">
      <div className="container grid gap-8 py-14 md:grid-cols-[0.95fr_1.05fr] md:py-20">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">01 / Profile</p>
          <h2 className="mt-4 font-display text-4xl leading-none sm:text-5xl">
            I work where Flutter meets the platform.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="space-y-5 text-sm leading-7 text-muted-foreground">
            <p>
              I am a Flutter developer at Zehntech Technologies with 2+ years of professional
              experience shipping apps that real users depend on, from enterprise web dashboards
              to native iOS SDK work.
            </p>
            <p>
              My strongest differentiator is native platform integration. I build Flutter SDKs
              that wrap Android and iOS capabilities using MethodChannel and PlatformView, while
              keeping the Dart API simple for product teams.
            </p>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {aboutFacts.map((fact) => {
              const Icon = fact.icon;
              return (
                <div key={fact.label} className="flex items-center gap-3 rounded-lg border border-border bg-background p-4">
                  <Icon className="h-4 w-4 flex-none text-accent" />
                  <span className="text-sm text-muted-foreground">{fact.label}</span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="container py-16 md:py-24">
      <Reveal>
        <SectionHeader
          eyebrow="02 / Selected Work"
          title="Production projects."
          description="A focused set of Flutter, mobile, web, and SDK work with practical engineering constraints."
        />
      </Reveal>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.04}>
            <a
              href={project.url ?? "#contact"}
              target={project.url ? "_blank" : undefined}
              rel={project.url ? "noreferrer" : undefined}
              className="group block h-full"
            >
              <Card className="h-full transition duration-200 hover:-translate-y-1 hover:border-foreground/30">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription className="mt-2">{project.subtitle}</CardDescription>
                    </div>
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition group-hover:text-foreground">
                      <ExternalLink className="h-4 w-4" />
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-7 text-muted-foreground">{project.description}</p>
                  <div className="mt-5 space-y-2">
                    {project.highlights.map((highlight) => (
                      <div key={highlight} className="flex gap-2 text-sm leading-6 text-muted-foreground">
                        <ArrowRight className="mt-1 h-3.5 w-3.5 flex-none text-primary" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="rounded-full">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="border-y border-border bg-card/50">
      <div className="container py-16 md:py-24">
        <Reveal>
          <SectionHeader
            eyebrow="03 / Experience"
            title="Current chapter."
            description="A compact timeline of professional work, with emphasis on shipped product impact."
          />
        </Reveal>
        <div className="space-y-4">
          {experiences.map((item) => (
            <Reveal key={item.company}>
              <Card>
                <CardContent className="p-5 md:p-7">
                  <div className="grid gap-6 md:grid-cols-[0.32fr_1fr]">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                        {item.period}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Badge variant="outline" className="rounded-full">
                          <Sparkles className="mr-1.5 h-3 w-3" />
                          {item.badge}
                        </Badge>
                        <Badge variant="outline" className="rounded-full">
                          <MapPin className="mr-1.5 h-3 w-3" />
                          {item.location}
                        </Badge>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{item.role}</h3>
                      <p className="mt-1 text-sm text-primary">{item.company}</p>
                      <div className="mt-5 grid gap-3">
                        {item.points.map((point) => (
                          <div key={point} className="flex gap-3 text-sm leading-7 text-muted-foreground">
                            <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section className="container py-16 md:py-24">
      <Reveal>
        <SectionHeader
          eyebrow="04 / Approach"
          title="Built to last."
          description="Practical engineering habits for mobile products that need to survive version changes, stores, SDK upgrades, and real users."
        />
      </Reveal>
      <div className="grid gap-4 md:grid-cols-3">
        {principles.map((item, index) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.title} delay={index * 0.05}>
              <Card className="h-full">
                <CardHeader>
                  <Icon className="h-5 w-5 text-primary" />
                  <CardTitle className="pt-4 text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section id="stack" className="border-y border-border bg-card/50">
      <div className="container py-16 md:py-24">
        <Reveal>
          <SectionHeader
            eyebrow="05 / Stack"
            title="Tools I ship with."
            description="A mobile-first toolkit across Flutter, native bridges, cloud services, testing, and release automation."
          />
        </Reveal>
        <Reveal>
          <div className="marquee-mask mb-8 overflow-hidden border-y border-border py-4">
            <div className="flex w-max animate-[marquee_36s_linear_infinite] gap-8">
              {[...marquee, ...marquee].map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="font-display text-2xl text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.035}>
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="text-base">{group.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="rounded-full">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="container py-16 md:py-24">
      <Reveal>
        <div className="rounded-lg border border-border bg-card p-6 md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">
                06 / Contact
              </p>
              <h2 className="mt-4 max-w-2xl font-display text-4xl leading-none sm:text-5xl">
                Let&apos;s build a mobile product people can trust.
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground">
                I am actively looking for remote Flutter developer roles and mobile-focused
                product teams where I can own features end to end.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <Button asChild className="rounded-full">
                <a href={`mailto:${profile.email}`}>
                  <Mail className="h-4 w-4" />
                  Email me
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container flex flex-col gap-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>Built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and shadcn/ui.</p>
        <div className="flex gap-3">
          {[
            { href: profile.github, label: "GitHub", icon: Github },
            { href: profile.linkedin, label: "LinkedIn", icon: Linkedin },
            { href: `mailto:${profile.email}`, label: "Email", icon: Mail },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="grid h-9 w-9 place-items-center rounded-full border border-border transition hover:bg-muted hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export function Portfolio() {
  return (
    <main className={cn("min-h-screen overflow-hidden bg-background")}>
      <div className="pointer-events-none fixed inset-0 -z-10 noise opacity-30" />
      <Header />
      <Hero />
      <About />
      <Work />
      <Experience />
      <Approach />
      <Stack />
      <Contact />
      <Footer />
    </main>
  );
}
