import Sonic from "sonic-channel";
import sonicConfigs from "../config/sonic";

const sonicChannelIngest = new Sonic.Ingest(sonicConfigs.credentials);

const sonicChannelSearch = new Sonic.Search(sonicConfigs.credentials);

sonicChannelIngest.connect({
  connected: () => console.log("Sonic Server Ingest Running..."),
});

sonicChannelSearch.connect({
  connected: () => console.log("Sonic Server Search Running..."),
});

export { sonicChannelIngest, sonicChannelSearch };
