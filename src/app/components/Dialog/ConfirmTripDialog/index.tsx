import { FormEvent } from "react";
import { Dialog } from "..";
import { AtSign, User, X } from "lucide-react";

type ConfirmTripDialogProps = {
  closeConfirmTripDialog: () => void;
  createTrip: (event: FormEvent<HTMLFormElement>) => void;
};

export function ConfirmTripDialog({
  closeConfirmTripDialog,
  createTrip,
}: ConfirmTripDialogProps) {
  return (
    <Dialog>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Confirmar criação da viagem</h2>
          <button onClick={closeConfirmTripDialog}>
            <X className="size-5" />
          </button>
        </div>
        <p className="text-sm text-zinc-400">
          Para concluir a criação da viagem para{" "}
          <strong className="font-semibold text-zinc-100">
            Florianópolis, Brasil
          </strong>{" "}
          nas datas de{" "}
          <strong className="font-semibold text-zinc-100">
            16 a 27 de Agosto de 2024
          </strong>{" "}
          preencha seus dados abaixo:
        </p>
      </div>
      <div className="flex flex-wrap gap-2"></div>
      <form onSubmit={createTrip} className="space-y-3">
        <div className="px-2 flex items-center flex-1 gap-2 h-14 bg-zinc-950 border border-zinc-800 rounded-lg">
          <User className="size-5 text-zinc-400" />
          <input
            name="name"
            className="bg-transparent text-lg placeholder-zinc-400 outline-none w-full"
            placeholder="Digite o e-mail do convidado"
          />
        </div>
        <div className="px-2 flex items-center flex-1 gap-2 h-14 bg-zinc-950 border border-zinc-800 rounded-lg">
          <AtSign className="size-5 text-zinc-400" />
          <input
            name="email"
            type="email"
            className="bg-transparent text-lg placeholder-zinc-400 outline-none w-full"
            placeholder="Digite o e-mail do convidado"
          />
        </div>
        <button
          className="h-11 px-5 w-full justify-center bg-lime-300 hover:bg-lime-400 text-lime-950 rounded-lg font-medium flex items-center gap-2"
        >
          Confirmar criação da viagem
        </button>
      </form>
    </Dialog>
  );
}
