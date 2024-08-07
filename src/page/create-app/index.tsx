import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InviteGuestDialog } from "../../app/components/Dialog/InviteGuestDialog";
import { ConfirmTripDialog } from "../../app/components/Dialog/ConfirmTripDialog";
import { DestionAndDateStep } from "../../app/components/step/destion-and-date-step";
import { InviteGueststep } from "../../app/components/step/inviteGuest-step";
import { DateRange } from "react-day-picker";
import { api } from "../../lib";

export function CreateApp() {
  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false);
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);
  const [emailInvite, setEmailInvite] = useState([
    "amiltonxavier1999@gmail.com",
    "xavierdev23@gmail.com",
    "amilton.jose@etic.co.ao",
  ]);

  const [ownEmail, setOwnEmail] = useState("");
  const [ownName, setOwnName] = useState("");
  const [destination, setDestination] = useState("");
  const [eventStartAndEndDates, setEventStartAndEndDates] = useState<
    DateRange | undefined
  >();
  

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

  async function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!destination || !ownEmail || !ownName || emailInvite.length <= 0)
      return;

    if (!eventStartAndEndDates?.from || !eventStartAndEndDates.to) return;

    const response = await api.post("trips", {
      destination,
      starts_at: eventStartAndEndDates.from,
      ends_at: eventStartAndEndDates.to,
      emails_to_invite: emailInvite,
      owner_name: ownName,
      owner_email: ownEmail,
    });

    const { tripId } = response.data;

    navigate(`/trip/${tripId}`);
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
          <DestionAndDateStep
            closeGuestInput={closeGuestInput}
            openGuestInput={openGuestInput}
            isGuestInputOpen={isGuestInputOpen}
            setDestination={setDestination}
            setEventStartAndEndDates={setEventStartAndEndDates}
            eventStartAndEndDates={eventStartAndEndDates}
          />

          {isGuestInputOpen && (
            <InviteGueststep
              emailInvite={emailInvite}
              openConfirmTripDialog={openConfirmTripDialog}
              openGuestModal={openGuestModal}
            />
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
          setOwnName={setOwnName}
          setOwnEmail={setOwnEmail}
        />
      )}
    </main>
  );
}
