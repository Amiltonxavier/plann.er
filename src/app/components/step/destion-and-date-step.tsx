import { ArrowRight, Calendar, MapPin, Settings2 } from 'lucide-react'
import React from 'react'

type DestionAndDateStepProps = {
    isGuestInputOpen: boolean,
    closeGuestInput: () => void
    openGuestInput: () => void
}

export function DestionAndDateStep({isGuestInputOpen, closeGuestInput, openGuestInput}: DestionAndDateStepProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex  items-center shadow-shape gap-3">
            <div className="flex items-center gap-2 flex-1">
              <MapPin className="size-5 text-zinc-400" />
              <input
                type="text"
                className="bg-transparent text-lg flex-1 placeholder-zinc-400 outline-none"
                placeholder="Para aonde você vai?"
                disabled={isGuestInputOpen}
              />
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400" />
              <input
                type="text"
                className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none"
                placeholder="Quando"
                disabled={isGuestInputOpen}
              />
            </div>
            <div className="w-px h-6 text-zinc-800" />
            {isGuestInputOpen ? (
              <button
                onClick={closeGuestInput}
                className="py-2 px-5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg font-medium flex items-center gap-2"
              >
                Alterar local/data
                <Settings2 className="size-5" />
              </button>
            ) : (
              <button
                onClick={openGuestInput}
                className="py-2 px-5 bg-lime-300 hover:bg-lime-400 text-lime-950 rounded-lg font-medium flex items-center gap-2"
              >
                Continuar
                <ArrowRight className="size-5" />
              </button>
            )}
        </div>
  )
}
