import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

import { ArrowRight, Building2, House, LogIn, ShieldCheck, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground min-w-0 overflow-x-hidden">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-8 sm:px-6 lg:px-8 lg:py-12 min-w-0">
          <section className="relative overflow-hidden rounded-xl border border-border bg-gradient-to-br from-accent via-background to-card p-6 shadow-sm md:p-12"><div className="max-w-3xl"><Badge className="mb-5 border-0 bg-primary/10 text-primary"><ShieldCheck className="mr-1 size-3.5" />Secure maintenance workspace</Badge><h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl">Maintenance resolved with clarity.</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">A secure, mobile-first workspace for residents, property teams, and technicians.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button asChild size="lg"><Link to="/login">Resident sign in <ArrowRight className="size-4" /></Link></Button><Button asChild size="lg" variant="outline"><Link to="/staff">Staff portal <Wrench className="size-4" /></Link></Button></div></div></section>
  <section><div className="mb-5"><p className="text-sm font-semibold text-primary">Made for every role</p><h2 className="mt-1 text-2xl font-bold tracking-tight text-foreground">Every maintenance workflow in one place</h2></div><div className="grid gap-4 md:grid-cols-3"><Card><CardHeader><div className="grid size-10 place-items-center rounded-lg bg-blue-100 text-blue-700"><House className="size-5" /></div><CardTitle className="mt-4">Residents</CardTitle></CardHeader><CardContent className="text-sm leading-6 text-muted-foreground">Report issues, follow progress, and message your property team.</CardContent></Card><Card><CardHeader><div className="grid size-10 place-items-center rounded-lg bg-violet-100 text-violet-700"><Building2 className="size-5" /></div><CardTitle className="mt-4">Property staff</CardTitle></CardHeader><CardContent className="text-sm leading-6 text-muted-foreground">Organize requests, people, properties, and categories.</CardContent></Card><Card><CardHeader><div className="grid size-10 place-items-center rounded-lg bg-amber-100 text-amber-700"><Wrench className="size-5" /></div><CardTitle className="mt-4">Technicians</CardTitle></CardHeader><CardContent className="text-sm leading-6 text-muted-foreground">Get precise unit context and post updates from the field.</CardContent></Card></div></section>
  <section className="rounded-xl bg-primary p-8 text-center text-primary-foreground md:p-12"><h2 className="text-3xl font-bold tracking-tight">Ready to get started?</h2><p className="mx-auto mt-3 max-w-xl text-primary-foreground/85">Bring a calmer, more transparent maintenance experience to your community.</p><Button asChild variant="secondary" size="lg" className="mt-6"><Link to="/login">Sign in securely <LogIn className="size-4" /></Link></Button></section>
  <footer className="flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><p>ResiSolve · Reliable property maintenance communication</p><div className="flex gap-4"><Link className="hover:text-foreground" to="/login">Sign in</Link><Link className="hover:text-foreground" to="/reset-password">Reset password</Link></div></footer>
      </div>
    </div>
  );
}