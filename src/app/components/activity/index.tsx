import { CircleCheck } from 'lucide-react'

export function Activity() {
    return (
        <div className="space-y-8">
            <div className="space-y-2.5">
                <div className="flex gap-2 items-baseline">
                    <span className="text-zinc-300 text-xl font-semibold">Dia 15</span>
                    <span className="text-xl text-zinc-500">Segunda-Feira</span>
                </div>
                <p className="text-zinc-500 text-sm">Nenhuma atividade cadastrada nessa data</p>
            </div>

            <div className="space-y-2.5">
                <div className="flex gap-2 items-baseline">
                    <span className="text-zinc-300 text-xl font-semibold">Dia 20</span>
                    <span className="text-xl text-zinc-500">Terça-Feira</span>
                </div>
                <div className="space-2.5">
                    <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                        <CircleCheck className="size-5 text-lime-300" />
                        <span className="text-zinc-100">Academia em grupo</span>
                        <span className="text-zinc-400 text-sm ml-auto">08:00h</span>
                    </div>
                </div>
                <div className="space-2.5">
                    <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                        <CircleCheck className="size-5 text-lime-300" />
                        <span className="text-zinc-100">Gaming session</span>
                        <span className="text-zinc-400 text-sm ml-auto">08:00h</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
