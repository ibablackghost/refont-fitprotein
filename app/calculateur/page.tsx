'use client'

import { useMemo, useState } from 'react'
import { SiteShell } from '@/components/site/site-shell'

export default function CalculatorPage() {
  const [weight, setWeight] = useState(75)
  const [goal, setGoal] = useState<'maintain' | 'gain' | 'cut'>('gain')
  const [activity, setActivity] = useState<'low' | 'mid' | 'high'>('mid')

  const protein = useMemo(() => {
    const base =
      goal === 'gain' ? 2.0 : goal === 'cut' ? 2.2 : 1.6
    const boost = activity === 'high' ? 0.2 : activity === 'mid' ? 0.1 : 0
    return Math.round(weight * (base + boost))
  }, [weight, goal, activity])

  return (
    <SiteShell>
      <section className="mx-auto max-w-3xl px-4 py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Outil
        </p>
        <h1 className="mt-2 font-heading text-4xl font-extrabold text-primary text-balance">
          Calculateur de protéines
        </h1>
        <p className="mt-3 text-muted-foreground text-pretty">
          Estimez votre besoin quotidien selon votre poids, objectif et niveau d&apos;activité.
        </p>

        <div className="mt-10 space-y-8 border border-border bg-card p-6 sm:p-8">
          <label className="block">
            <span className="text-sm font-semibold text-primary">Poids (kg)</span>
            <input
              type="range"
              min={45}
              max={140}
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
              className="mt-3 w-full accent-primary"
            />
            <span className="mt-1 block font-heading text-2xl font-bold">{weight} kg</span>
          </label>

          <fieldset>
            <legend className="text-sm font-semibold text-primary">Objectif</legend>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {(
                [
                  ['maintain', 'Maintien'],
                  ['gain', 'Prise de masse'],
                  ['cut', 'Sèche'],
                ] as const
              ).map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setGoal(value)}
                  className={`px-3 py-3 text-sm font-semibold ${
                    goal === value
                      ? 'bg-primary text-primary-foreground'
                      : 'border border-border hover:border-primary'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-sm font-semibold text-primary">Activité</legend>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {(
                [
                  ['low', 'Faible'],
                  ['mid', 'Modérée'],
                  ['high', 'Intense'],
                ] as const
              ).map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setActivity(value)}
                  className={`px-3 py-3 text-sm font-semibold ${
                    activity === value
                      ? 'bg-primary text-white'
                      : 'border border-border hover:border-primary'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="bg-ink p-6 text-center text-white">
            <p className="text-sm uppercase tracking-[0.25em] text-white/60">Besoin estimé</p>
            <p className="mt-2 font-heading text-5xl font-extrabold text-primary">{protein} g</p>
            <p className="mt-2 text-sm text-white/65">de protéines par jour</p>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
