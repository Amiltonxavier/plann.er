import { CircleCheck, CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../../components/button";
import { api } from "../../../lib";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

type ParticipantsProps = {
  id: string;
  name: string;
  email: string;
  is_confirmed: boolean;
};

export function Guess() {
  const { tripId } = useParams();

  const [participants, setParticipants] = useState<ParticipantsProps[]>([]);

  async function getParticipants() {
    const response = await api.get(`/trips/${tripId}/participants`);
    setParticipants(response.data.participants);
  }

  useEffect(() => {
    getParticipants();
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>
      <div>
        <div className="space-y-5">
          {participants.map((participant, index) => (
            <div key={participant.id} className="flex items-center justify-between gap-4">
              <div className="space-y-1.5">
                <span className="font-medium block text-zinc-100">
                  {participant.name ?? `Convidado ${index}`}
                </span>
                <span className="block text-sm text-zinc-400 truncate">
                  {participant.email}
                </span>
              </div>
              {
                participant.is_confirmed ? <CircleCheck className="text-green-700 size-5 shrink-0" /> : <CircleDashed className="text-zinc-400 size-5 shrink-0" />
              }
              
            </div>
          ))}
        </div>
      </div>

      <Button variant="secondary" size="full">
        <UserCog className="size-5" />
        Gerenciar convidados
      </Button>
    </div>
  );
}
