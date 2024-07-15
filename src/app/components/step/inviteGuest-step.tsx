import { ArrowRight, UserRoundPlus } from "lucide-react"


type InviteGueststepProps = {
    openGuestModal: () => void
    emailInvite: string[]
    openConfirmTripDialog: () => void
}

export function InviteGueststep({ openGuestModal, emailInvite, openConfirmTripDialog }: InviteGueststepProps) {
    return (
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
    )
}
