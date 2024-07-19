import { DayPicker } from "react-day-picker";
import { Dialog } from '..'
import { X } from 'lucide-react'
import "react-day-picker/dist/style.css";

type DayPickerDialogProps = {
    close: () => void
}

export function DayPickerDialog({ close }: DayPickerDialogProps) {
    return (
        <Dialog>
            <div className="space-y-2">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold">Confirmar criação da viagem</h2>
                    <button onClick={close}>
                        <X className="size-5" />
                    </button>
                </div>
            </div>
            <DayPicker mode="range" />
        </Dialog>
    )
}
