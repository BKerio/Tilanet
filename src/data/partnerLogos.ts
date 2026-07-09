import ictAuthorityLogo from '@/assets/Partner/ict-authority.png';
import microsoftLogo from '@/assets/Partner/Microsoft.png';
import fortinetLogo from '@/assets/Partner/Fortinet.png';
import veeamLogo from '@/assets/Partner/Veeam.png';
import ciscoLogo from '@/assets/Partner/Cisco.png';
import odooLogo from '@/assets/Partner/Odoo.png';
import checkpointLogo from '@/assets/Partner/Checkpoint.png';
import seamlesshrLogo from '@/assets/Partner/Seamlesshr.png';
import forcepointLogo from '@/assets/Partner/forcepoint.png';
import zecurionLogo from '@/assets/Partner/Zecurion.png';
import xeroLogo from '@/assets/Partner/Xero.png';
import hpeLogo from '@/assets/Partner/HPE.png';
import awsLogo from '@/assets/Partner/AWS.png';
import sageLogo from '@/assets/Partner/Sage.png';
import huaweiLogo from '@/assets/Partner/Huawei.png';
import zohoLogo from '@/assets/Partner/Zoho.png';

export type PartnerLogo = {
  name: string;
  logo: string;
};

/** Display order matches Dynatrix business profile partners slide */
export const partnerLogos: PartnerLogo[] = [
  { name: 'ICT Authority', logo: ictAuthorityLogo },
  { name: 'Microsoft', logo: microsoftLogo },
  { name: 'Fortinet', logo: fortinetLogo },
  { name: 'Veeam', logo: veeamLogo },
  { name: 'Cisco', logo: ciscoLogo },
  { name: 'Odoo', logo: odooLogo },
  { name: 'Check Point', logo: checkpointLogo },
  { name: 'SeamlessHR', logo: seamlesshrLogo },
  { name: 'Forcepoint', logo: forcepointLogo },
  { name: 'Zecurion', logo: zecurionLogo },
  { name: 'Xero', logo: xeroLogo },
  { name: 'Hewlett Packard Enterprise', logo: hpeLogo },
  { name: 'AWS', logo: awsLogo },
  { name: 'Sage', logo: sageLogo },
  { name: 'Huawei', logo: huaweiLogo },
  { name: 'Zoho', logo: zohoLogo },
];
