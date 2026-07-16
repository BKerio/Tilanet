import bolibasavings from '@/assets/Client/bolibasavings.png';
import mwalimuNational from '@/assets/Client/mwalimu-national.png';
import boreshaSacco from '@/assets/Client/boresha-sacco.png';
import goodSamaritan from '@/assets/Client/GoodSamaritan.png';
import aar from '@/assets/Client/AAR.png';
import afosi from '@/assets/Client/Afosi.png';
import eldowas from '@/assets/Client/eldowas.png';
import soleLuna from '@/assets/Client/sole_luna.png';
import varsNSonn from '@/assets/Client/vns_logo.png';
import kaa from '@/assets/Client/kaa.png';
import cooperativeBank from '@/assets/Client/cooperative bank.png';
import kenyaPorts from '@/assets/Client/kpa.png';
import elegance from '@/assets/Client/elegance.png';
import millenium from '@/assets/Client/millenium.png';
import nairobiwater from '@/assets/Client/nairobiwater.png';

export type ClientLogo = {
  name: string;
  logo: string;
};

/** Display order matches the clientage logo sheet */
export const clientageLogos: ClientLogo[] = [
  { name: 'Boliba Savings and Credit', logo: bolibasavings },
  { name: 'Mwalimu National', logo: mwalimuNational },
  { name: 'Boresha Sacco Society Limited', logo: boreshaSacco },
  { name: 'The Good Samaritan Foundation', logo: goodSamaritan },
  { name: 'AAR Insurance', logo: aar },
  { name: 'afosi', logo: afosi },
  { name: 'Nairobi Water & Sewerage Company', logo: nairobiwater },
  { name: 'ELDOWAS', logo: eldowas },
  { name: 'Sole Luna', logo: soleLuna },
  { name: "Vars 'n' Sonn CAFE", logo: varsNSonn },
  { name: 'Kenya Airport Authority', logo: kaa },
  { name: 'Co-operative Bank of Kenya', logo: cooperativeBank },
  { name: 'Kenya Ports Authority', logo: kenyaPorts },
  { name: 'Elegance Designer & Printers', logo: elegance },
  { name: 'Millenium Solutions E. A. Limited', logo: millenium },
];
