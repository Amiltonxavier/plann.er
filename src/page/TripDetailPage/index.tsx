import { Calendar, CircleCheck, CircleDashed, Link2, MapPin, Plus, Settings2, UserCog } from "lucide-react";

export function TripDetailPage() {
  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <div className="px-4 h-16 rounded-xl shadow-shape flex items-center justify-between bg-zinc-900">
        <div className="flex items-center justify-between gap-2">
          <MapPin className="size-5 text-zinc-400" />
          <span className=" text-zinc-100">Florianópolis, Brasil</span>
        </div>
        <div className="flex gap-5 items-center">
          <div className="flex items-center justify-between gap-2">
            <Calendar className="size-5 text-zinc-400" />
            <span className="text-zinc-100">17 a 23 de Agosto</span>
          </div>
          <span className="w-px h-6 text-zinc-800" />
          <button

            className="py-2 px-5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg font-medium flex items-center gap-2"
          >
            Alterar local/data
            <Settings2 className="size-5" />
          </button>
        </div>
      </div>
      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-semibold">Atividades</h2>
            <button
              className="py-2 px-5 bg-lime-300 hover:bg-lime-400 text-lime-950 rounded-lg font-medium flex items-center gap-2"
            >
              <Plus className="size-5" />
              Cadastrar atividade
            </button>
          </div>
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
        </div>
        <div className="w-80 space-y-6">
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
            <button

              className="h-11 px-5 w-full justify-center bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg font-medium flex items-center gap-2"
            >
              <Plus className="size-5" />
              Cadastrar novo
            </button>
          </div>
          <div className="w-full h-px bg-zinc-800" />
          <div className="space-y-6">
            <h2 className="font-semibold text-xl">Convidados</h2>
            <div>
              <div className="space-y-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    <span className="font-medium block text-zinc-100">Jessica White</span>
                    <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">
                      jessica.white44@yahoo.com
                    </a>
                  </div>
                  <CircleDashed className="text-zinc-400 size-5 shrink-0" />
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    <span className="font-medium block text-zinc-100">Dr. Rita Pacocha</span>
                    <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">
                      acy.stiedemann@gmail.com
                    </a>
                  </div>
                  <CircleCheck className="text-lime-300 size-5 shrink-0" />
                </div>
              </div>
            </div>
            <button

              className="h-11 px-5 w-full justify-center bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg font-medium flex items-center gap-2"
            >
              <UserCog className="size-5" />
              Gerenciar convidados
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
