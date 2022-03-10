import { createContext, useContext, useEffect, useState } from "react";
import contractInfo from "../../contract/test.json";

const tronWebContext = createContext();

export const useTronWeb = () => useContext(tronWebContext);

export default function TronWebProvider({ children }) {
  const [tronweb, setTronWeb] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [chainId, setChainId] = useState(null);
  const [contract, setContract] = useState(null);

  // initialize contract
  useEffect(() => {
    (async () => {
      const contract = await tronweb?.contract().at(contractInfo.address);
      setContract(contract);
    })();
  }, [tronweb]);

  useEffect(() => {
    window.addEventListener('message', (e) => {
      
    })
  })

  // initialize tronWeb
  useEffect(() => {
    const TronWeb = require("tronweb");
    const HttpProvider = TronWeb.providers.HttpProvider;
    const fullNode = new HttpProvider("https://api.trongrid.io");
    const solidityNode = new HttpProvider("https://api.trongrid.io");
    const eventServer = new HttpProvider("https://api.trongrid.io");
    const privateKey = "";
    const tw = new TronWeb(fullNode, solidityNode, eventServer, privateKey);
    tw.setHeader({
      "TRON-PRO-API-KEY": "4d11b173-011a-4dea-9b0a-8bd2ad57cb2e",
    });
    setTronWeb(tw);
  }, []);

  return (
    <tronWebContext.Provider value={{ tw: tronweb, contract }}>
      {children}
    </tronWebContext.Provider>
  );
}
