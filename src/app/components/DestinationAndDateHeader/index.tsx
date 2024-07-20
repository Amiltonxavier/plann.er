import { Calendar, MapPin, Settings2 } from 'lucide-react'
import { Button } from '../../../components/button'

type DestinationAndDateHeaderProps = {
    destination: string | undefined,
    date: string | undefined | null
}

export function DestinationAndDateHeader({destination, date}: DestinationAndDateHeaderProps) {

    return (
        <div className="px-4 h-16 rounded-xl shadow-shape flex items-center justify-between bg-zinc-900">
            <div className="flex items-center justify-between gap-2">
                <MapPin className="size-5 text-zinc-400" />
                <span className=" text-zinc-100">{destination}</span>
            </div>
            <div className="flex gap-5 items-center">
                <div className="flex items-center justify-between gap-2">
                    <Calendar className="size-5 text-zinc-400" />
                    <span className="text-zinc-100">{date}</span>
                </div>
                <span className="w-px h-6 text-zinc-800" />
                <Button variant='secondary' >
                    Alterar local/data
                    <Settings2 className="size-5" />
                </Button>
            </div>
        </div>
    )
}
