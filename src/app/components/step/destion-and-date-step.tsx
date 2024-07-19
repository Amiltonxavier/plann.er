import { ArrowRight, Calendar, MapPin, Settings2, X } from 'lucide-react'
import { Button } from '../../../components/button'
import { useState } from 'react'
import { Dialog } from '../Dialog'
import { DateRange, DayPicker } from 'react-day-picker'
import "react-day-picker/dist/style.css";
import { format } from 'date-fns'

type DestionAndDateStepProps = {
  isGuestInputOpen: boolean,
  closeGuestInput: () => void
  openGuestInput: () => void
  setDestination: (destination: string) => void
  setEventStartAndEndDates: (dates: DateRange | undefined) => void
  eventStartAndEndDates: DateRange | undefined
}

export function DestionAndDateStep({ isGuestInputOpen, eventStartAndEndDates, setEventStartAndEndDates, closeGuestInput, openGuestInput, setDestination }: DestionAndDateStepProps) {

  const [isDayPickerOpen, setIsDayPickerOpen] = useState(false)
  //const [eventStartAndEndDates, setEventStartAndEndDates] = useState<DateRange | undefined>()
  function openDayPicker() {
    setIsDayPickerOpen(true)
  }
  function closeDayPicker() {
    setIsDayPickerOpen(false)
  }

  const displayDate = eventStartAndEndDates && eventStartAndEndDates.from && eventStartAndEndDates.to ? format(eventStartAndEndDates.from, "d' de 'LLL").concat(' até ').concat(format(eventStartAndEndDates.to, "d' de 'LLL")) : null

  return (
    <div className={`h-16 bg-zinc-900 px-4 rounded-xl flex  items-center shadow-shape gap-3 ${isGuestInputOpen && ''}`}>
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input
          type="text"
          className="bg-transparent text-lg flex-1 placeholder-zinc-400 outline-none"
          placeholder="Para aonde você vai?"
          disabled={isGuestInputOpen}
          name='destination'
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>
      <button onClick={openDayPicker} disabled={isGuestInputOpen} className="flex items-center gap-2 text-left">
        <Calendar className="size-5 text-zinc-400" />
        <span className="flex-1 bg-transparent text-lg text-zinc-400 outline-none w-[240]">
          {displayDate ?? 'Quando'}
        </span>
      </button>
      {isDayPickerOpen &&
        <Dialog>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Confirmar criação da viagem</h2>
              <button onClick={closeDayPicker}>
                <X className="size-5" />
              </button>
            </div>
          </div>
          <DayPicker mode="range" selected={eventStartAndEndDates} onSelect={setEventStartAndEndDates} />
        </Dialog>
      }
      <div className="w-px h-6 text-zinc-800" />
      {isGuestInputOpen ? (
        <Button variant='secondary' onClick={closeGuestInput}>
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button onClick={openGuestInput}>
          Continuar
          <ArrowRight className="size-5" />
        </Button>
      )}
    </div>
  )
}
