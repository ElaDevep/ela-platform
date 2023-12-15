import { ArrowBigUpDashIcon, CheckCheckIcon, GlassWaterIcon, RocketIcon, WalletCardsIcon } from "lucide-react";



const Education = () => {
  const cards = [
    {
      name: 'Personal capacitado',
      description: '245',
      icon: ArrowBigUpDashIcon,
    },
    { 
      name: 'Lista capacitaciones pendientes',
      description: 
      ' IDK',
      icon: CheckCheckIcon,
    },
  ];
  const cards1 = [
    {
      name: 'Capacitaciones realizadas',
      description: '245',
      icon: GlassWaterIcon,
    },
    { 
      name: 'Por definirse',
      description: 
      '',
      icon: WalletCardsIcon,
    },
  ];
  return (
    <div className="h-screen w-full bg-gradient-to-r from-white from-10% via-orange-50 via-30% to-orange-100 to-60%">
    <div className="relative isolate overflow-hidden px-6  md:py-10 sm:px-10">
        <div className="mx-auto text-justify grid max-w-2xl grid-cols-1 gap-6  lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-8">
          {cards.map((card) => (
            <div key={card.name} className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-black/20 font-size-2xl text-xl">
              <card.icon className="h-9 w-6 flex-none text-orange-500" aria-hidden="true" />
              <div className="leading-7">
                <h1 className="font-semibold text-4xl mb-10  text-black">{card.name}</h1>
                <p className="mt-2 text-4xl text-gray-600">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto text-justify grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-8">
          {cards1.map((card) => (
            <div key={card.name} className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-black/20 font-size-2xl text-xl">
              <card.icon className="h-9 w-6 flex-none text-orange-500" aria-hidden="true" />
              <div className="leading-7">
                <h3 className="font-semibold text-4xl mb-10   text-black">{card.name}</h3>
                <p className="mt-2 text-4xl text-gray-600">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
     </div>
     </div>
  );
};

export default Education;