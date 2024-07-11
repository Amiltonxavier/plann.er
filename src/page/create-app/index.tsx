import { ArrowRight, AtSign, Calendar, MapPin, Plus, Settings2, User, UserRoundPlus, X } from "lucide-react"
import { FormEvent, useState } from "react"

export function CreateApp() {

  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false)
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false)
  const [emailInvite, setEmailInvite] = useState([
    'amiltonxavier1999@gmail.com',
    'xavierdev23@gmail.com',
    'amilton.jose@etic.co.ao'
  ])
  const [isConfirmTripOpen, setIsConfirmTripOpen] = useState(false)

  function openGuestInput() {
    setIsGuestInputOpen(true)
  }
  function closeGuestInput() {
    setIsGuestInputOpen(false)
  }
  function openGuestModal() {
    setIsGuestModalOpen(true)
  }
  function closeGuestModal() {
    setIsGuestModalOpen(false)
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    const newData = formData.get('email' as string);

    if (emailInvite.includes(newData as string)) return

    setEmailInvite([...emailInvite, newData as string])

    e.currentTarget.reset()
  }

  function removeInvite(email: string) {
    const removeEmail = emailInvite.filter((item) => item !== email);
    setEmailInvite(removeEmail);
  }

  function openConfirmTrip (){
    setIsConfirmTripOpen(true)
  }
  function closeConfirmTrip (){
    setIsConfirmTripOpen(false)
  }

  return (
    <main className="h-screen w-full flex justify-center items-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex items-center gap-3 flex-col">
          <img src="/logo.svg" alt="logo" />
          <p className="text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
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
            {
              isGuestInputOpen ? (
                <button
                  onClick={closeGuestInput}
                  className="py-2 px-5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg font-medium flex items-center gap-2">
                  Alterar local/data
                  <Settings2 className="size-5" />
                </button>
              ) : (
                <button
                  onClick={openGuestInput}
                  className="py-2 px-5 bg-lime-300 hover:bg-lime-400 text-lime-950 rounded-lg font-medium flex items-center gap-2">
                  Continuar
                  <ArrowRight className="size-5" />
                </button>
              )
            }
          </div>
          {
            isGuestInputOpen && (
              <div className="h-16 bg-zinc-900 px-4 rounded-xl flex  items-center shadow-shape gap-3">
                <button onClick={openGuestModal} className="flex items-center gap-2 flex-1 text-left cursor-pointer">
                  <UserRoundPlus className="size-5 text-zinc-400" />
                  {
                    emailInvite.length > 0 ? (
                      <span className="bg-transparent text-lg flex-1 text-zinc-100 outline-none">{emailInvite.length} pessoa(s) convidada(s)</span>
                    ) : (
                      <span
                        className="bg-transparent text-lg flex-1 outline-none"
                      >Quem estará na viagem?</span>
                    )
                  }
                </button>
                <div className="w-px h-6 text-zinc-800" />
                <button
                onClick={openConfirmTrip}
                  className="py-2 px-5 bg-lime-300 hover:bg-lime-400 text-lime-950 rounded-lg font-medium flex items-center gap-2">
                  Confirmar viagem
                  <ArrowRight className="size-5" />
                </button>
              </div>
            )
          }
        </div>
        <p className="text-zinc-500 text-sm">
          Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
          com nossos <a href="#" className="text-zinc-300 underline">termos de uso</a>  e <a href="#" className="text-zinc-300 underline">políticas de privacidade</a>.
        </p>
      </div>
      {
        isGuestModalOpen && (
          <div className="fixed inset-0 backdrop-blur-sm bg-black/60 flex justify-center items-center">
            <div className=" w-[640px] bg-zinc-900 py-5 px-6 rounded-xl shadow-shape space-y-5 ">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">Selecionar convidados</h2>
                  <button onClick={closeGuestModal} className="">
                    <X className="size-5" />
                  </button>
                </div>
                <p className="text-sm text-zinc-400">Os convidados irão receber e-mails para confirmar a participação na viagem.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {
                  emailInvite.map((email) => (
                    <div key={email} className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2">
                      <span className="text-zinc-300">{email}</span>
                      <button onClick={() => removeInvite(email)}><X className="size-4 tet-zinc-400" /></button>
                    </div>
                  ))}
              </div>
              <div className="h-px w-full bg-zinc-800" />
              <form onSubmit={onSubmit} className="flex items-center gap-2 p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg">
                <div className="px-2 flex items-center flex-1 gap-2">
                  <AtSign className="size-5 text-zinc-400" />
                  <input
                    name="email"
                    type="email"
                    className="bg-transparent text-lg placeholder-zinc-400 outline-none w-full"
                    placeholder="Digite o e-mail do convidado"
                  />
                </div>
                <button
                  className="py-2 px-5 bg-lime-300 hover:bg-lime-400 text-lime-950 rounded-lg font-medium flex items-center gap-2">
                  Convidar
                  <Plus className="size-5" />
                </button>
              </form>
            </div>
          </div>
        )
      }

{
        isConfirmTripOpen && (
          <div className="fixed inset-0 backdrop-blur-sm bg-black/60 flex justify-center items-center">
            <div className=" w-[640px] bg-zinc-900 py-5 px-6 rounded-xl shadow-shape space-y-5 ">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">Confirmar criação da viagem</h2>
                  <button onClick={closeConfirmTrip} className="">
                    <X className="size-5" />
                  </button>
                </div>
                <p className="text-sm text-zinc-400">
                  Para concluir a criação da viagem para <strong className="font-semibold text-zinc-100">Florianópolis, Brasil</strong> nas datas de <strong className="font-semibold text-zinc-100">16 a 27 de Agosto de 2024</strong> preencha seus dados abaixo:</p>
              </div>
              <div className="flex flex-wrap gap-2">

              </div>
              <form onSubmit={onSubmit} className="space-y-3">
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
                  className="h-11 px-5 w-full justify-center bg-lime-300 hover:bg-lime-400 text-lime-950 rounded-lg font-medium flex items-center gap-2">
                  Confirmar criação da viagem

                </button>
              </form>
            </div>
          </div>
        )
      }

    </main>
  )
}


