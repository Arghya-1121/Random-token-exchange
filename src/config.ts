import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "aconst",
    name: "Random",
    chainId: "constantine-3", // <-- Archway testnet chain ID
    createdDate: "2025-07-15T19:01:01.148Z",
    modifiedDate: "2025-07-15T19:01:01.148Z",
    id: "archway-testnet",
    collections: [
        {
            exchange:
                "archway1280swzx5xdme4hvw2r056yj79dm9k3f24s086m6qf75nu0s5ksuq7w08xz",
            cw20: "archway1nd6d0md72drkd54tqavqaqyl4mcnsrfc3euk9a2e9azkfmaduq4qdxvx4a",
            name: "Random",
            type: ICollectionType.EXCHANGE,
            id: "Random-Exchange",
        },
    ],
};

export default CONFIG;
