import { Link2, Plus } from 'lucide-react'
import { Button } from '../../../components/button'

export function ImportantLinks() {
    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Links importantes</h2>
            <div>
                <div className="space-y-5">
                    <div className="flex items-center justify-between gap-4">
                        <div className="space-y-1.5">
                            <span className="font-medium block text-zinc-100">Reserva do AirBnB</span>
                            <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">
                                https://www.airbnb.com.br/rooms/104700011382382938923892893289389
                            </a>
                        </div>
                        <Link2 className="text-zinc-400 size-5 shrink-0" />
                    </div>
                    <div className="flex items-center justify-between gap-4">
                        <div className="space-y-1.5">
                            <span className="font-medium block text-zinc-100">Reserva do AirBnB</span>
                            <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">
                                https://www.airbnb.com.br/rooms/104700011382382938923892893289389
                            </a>
                        </div>
                        <Link2 className="text-zinc-400 size-5 shrink-0" />
                    </div>
                </div>
            </div>

            <Button variant='secondary' size='full'>
                <Plus className="size-5" />
                Cadastrar novo
            </Button>
        </div>
    )
}
