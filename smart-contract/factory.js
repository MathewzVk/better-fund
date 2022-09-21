import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x71e15bFe51a2A8BD33eeF2c4ecbbc7195E358DC6"
);

export default instance;
