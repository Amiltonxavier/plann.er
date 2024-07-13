import { FormEvent } from "react";
import { Dialog } from "..";
import { AtSign, Plus, X } from "lucide-react";

type InviteGuestProps = {
  closeGuestDialog: () => void;
  emailInvite: string[];
  removeInvite: (email: string) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

export function InviteGuestDialog({
  closeGuestDialog,
  emailInvite,
  removeInvite,
  onSubmit,
}: InviteGuestProps) {
  return (
    <Dialog closeDialog={closeGuestDialog}>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Selecionar convidados</h2>
          <button onClick={closeGuestDialog} className="">
            <X className="size-5" />
          </button>
        </div>
        <p className="text-sm text-zinc-400">
          Os convidados irão receber e-mails para confirmar a participação na
          viagem.
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {emailInvite.map((email) => (
          <div
            key={email}
            className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2"
          >
            <span className="text-zinc-300">{email}</span>
            <button onClick={() => removeInvite(email)}>
              <X className="size-4 tet-zinc-400" />
            </button>
          </div>
        ))}
      </div>
      <div className="h-px w-full bg-zinc-800" />
      <form
        onSubmit={onSubmit}
        className="flex items-center gap-2 p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg"
      >
        <div className="px-2 flex items-center flex-1 gap-2">
          <AtSign className="size-5 text-zinc-400" />
          <input
            name="email"
            type="email"
            className="bg-transparent text-lg placeholder-zinc-400 outline-none w-full"
            placeholder="Digite o e-mail do convidado"
          />
        </div>
        <button className="py-2 px-5 bg-lime-300 hover:bg-lime-400 text-lime-950 rounded-lg font-medium flex items-center gap-2">
          Convidar
          <Plus className="size-5" />
        </button>
      </form>
    </Dialog>
  );
}
