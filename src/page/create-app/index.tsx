import {
  ArrowRight,
  AtSign,
  Calendar,
  MapPin,
  Plus,
  Settings2,
  User,
  UserRoundPlus,
  X,
} from "lucide-react";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InviteGuestDialog } from "../../app/components/Dialog/InviteGuestDialog";
import { ConfirmTripDialog } from "../../app/components/Dialog/ConfirmTripDialog";

export function CreateApp() {
  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false);
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);
  const [emailInvite, setEmailInvite] = useState([
    "amiltonxavier1999@gmail.com",
    "xavierdev23@gmail.com",
    "amilton.jose@etic.co.ao",
  ]);
  const navigate = useNavigate();
  const [isConfirmTripOpen, setIsConfirmTripOpen] = useState(false);

  function openGuestInput() {
    setIsGuestInputOpen(true);
  }
  function closeGuestInput() {
    setIsGuestInputOpen(false);
  }
  function openGuestModal() {
    setIsGuestModalOpen(true);
  }
  function closeGuestDialog() {
    setIsGuestModalOpen(false);
  }

  function createTrip() {
    navigate("/trip/134");
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newData = formData.get("email" as string);

    if (emailInvite.includes(newData as string)) return;

    setEmailInvite([...emailInvite, newData as string]);

    e.currentTarget.reset();
  }

  function removeInvite(email: string) {
    const removeEmail = emailInvite.filter((item) => item !== email);
    setEmailInvite(removeEmail);
  }

  function openConfirmTripDialog() {
    setIsConfirmTripOpen(true);
  }
  function closeConfirmTripDialog() {
    setIsConfirmTripOpen(false);
  }

  return (
    <main className="h-screen w-full flex justify-center items-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex items-center gap-3 flex-col">
          <img src="/logo.svg" alt="logo" />
          <p className="text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>
        <div className="space-y-4">
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
          {isGuestInputOpen && (
            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex  items-center shadow-shape gap-3">
              <button
                onClick={openGuestModal}
                className="flex items-center gap-2 flex-1 text-left cursor-pointer"
              >
                <UserRoundPlus className="size-5 text-zinc-400" />
                {emailInvite.length > 0 ? (
                  <span className="bg-transparent text-lg flex-1 text-zinc-100 outline-none">
                    {emailInvite.length} pessoa(s) convidada(s)
                  </span>
                ) : (
                  <span className="bg-transparent text-lg flex-1 outline-none">
                    Quem estará na viagem?
                  </span>
                )}
              </button>
              <div className="w-px h-6 text-zinc-800" />
              <button
                onClick={openConfirmTripDialog}
                className="py-2 px-5 bg-lime-300 hover:bg-lime-400 text-lime-950 rounded-lg font-medium flex items-center gap-2"
              >
                Confirmar viagem
                <ArrowRight className="size-5" />
              </button>
            </div>
          )}
        </div>
        <p className="text-zinc-500 text-sm">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{" "}
          <br />
          com nossos{" "}
          <a href="#" className="text-zinc-300 underline">
            termos de uso
          </a>{" "}
          e{" "}
          <a href="#" className="text-zinc-300 underline">
            políticas de privacidade
          </a>
          .
        </p>
      </div>
      {isGuestModalOpen && (
        <InviteGuestDialog
          closeGuestDialog={closeGuestDialog}
          emailInvite={emailInvite}
          onSubmit={onSubmit}
          removeInvite={removeInvite}
        />
      )}

      {isConfirmTripOpen && (
        <ConfirmTripDialog
          closeConfirmTripDialog={closeConfirmTripDialog}
          createTrip={createTrip}
        />
      )}
    </main>
  );
}
