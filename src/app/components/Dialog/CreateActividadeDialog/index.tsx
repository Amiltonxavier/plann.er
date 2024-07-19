import { Calendar, Tag, X } from 'lucide-react'
import { Dialog } from '..'
import { Button } from '../../../../components/button'

type CreateActivityDialogProps = {
    closeCreateActivityModalOpen: () => void,
}


export function CreateActivityDialog({ closeCreateActivityModalOpen }: CreateActivityDialogProps) {
    return (
        <Dialog>
            <div className="space-y-2">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
                    <button onClick={closeCreateActivityModalOpen}>
                        <X className="size-5" />
                    </button>
                </div>
                <p className="text-sm text-zinc-400">
                    Todos convidados podem visualizar as atividades
                </p>
            </div>
            <div className="flex flex-wrap gap-2"></div>
            <form className="space-y-3">
                <div className="px-2 flex items-center flex-1 gap-2 h-14 bg-zinc-950 border border-zinc-800 rounded-lg">
                    <Tag className="size-5 text-zinc-400" />
                    <input
                        name="title"
                        className="bg-transparent text-lg placeholder-zinc-400 outline-none w-full"
                        placeholder="Qual a atividade?"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <div className="px-2 flex items-center flex-1 gap-2 h-14 bg-zinc-950 border border-zinc-800 rounded-lg">
                        <Calendar className="size-5 text-zinc-400" />
                        <input
                            name="accour_at"
                            type="datetime-local"
                            className="bg-transparent text-lg placeholder-zinc-400 outline-none w-full [color-scheme:dark]"
                            placeholder="Data e Horário da atividade"
                        />
                    </div>
                </div>
                <Button size='full'>
                    Salvar atividade
                </Button>
            </form>
        </Dialog>
    )
}
