import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { CreateActivityDialog } from "../../app/components/Dialog/CreateActividadeDialog";
import { ImportantLinks } from "../../app/components/ImportantLinks";
import { Guess } from "../../app/components/Guess";
import { Activity } from "../../app/components/activity";
import { DestinationAndDateHeader } from "../../app/components/DestinationAndDateHeader";
import { Button } from "../../components/button";
import { useParams } from "react-router-dom";
import { api } from "../../lib";
import { format } from "date-fns";

type TripProps = {
  id: string,
  destination: string,
  starts_at: string,
  ends_at: string,
  is_confirmed: boolean
}


export function TripDetailPage() {
  const { tripId } = useParams()
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false)
  const [trip, setTrip] = useState<TripProps | undefined>()

  async function getTrip() {
    const response = await api.get(`/trips/${tripId}`)
    setTrip(response.data.trip);
  }
  
  function openCreateActivityModalOpen() {
    setIsCreateActivityModalOpen(true)
  }

  function closeCreateActivityModalOpen() {
    setIsCreateActivityModalOpen(false)
  }

  useEffect(() => {
    getTrip();
  }, [])

  const displayDate = trip ? format(trip.starts_at, "d' de 'LLL").concat(' até ').concat(format(trip.ends_at, "d' de 'LLL")) : null


  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <DestinationAndDateHeader destination={trip?.destination} date={displayDate} />
      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-semibold">Atividades</h2>

            <Button onClick={openCreateActivityModalOpen}>
              <Plus className="size-5" />
              Cadastrar atividade
            </Button>
          </div>
          <Activity />
        </div>
        <div className="w-80 space-y-6">
          <ImportantLinks />
          <div className="w-full h-px bg-zinc-800" />
          <Guess />
        </div>
      </main>
      {
        isCreateActivityModalOpen && (
          <CreateActivityDialog closeCreateActivityModalOpen={closeCreateActivityModalOpen} />
        )
      }
    </div>
  )
}
