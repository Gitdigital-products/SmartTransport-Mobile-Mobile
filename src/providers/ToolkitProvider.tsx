import React, { createContext, useContext } from 'react';
import { useSolanaConnection } from '@gitdigital/futureproof-mobile-toolkit';

// Define transport-specific network settings
const TRANSPORT_NETWORK_CONFIG = {
  rpcEndpoint: "https://api.mainnet-beta.solana.com", // Or your dedicated Helius/Triton endpoint
  commitment: 'confirmed' as const,
};

const ToolkitContext = createContext(null);

export const ToolkitProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Use the hook we just built in the other repo
  const connection = useSolanaConnection(TRANSPORT_NETWORK_CONFIG.rpcEndpoint);

  return (
    <ToolkitContext.Provider value={connection}>
      {children}
    </ToolkitContext.Provider>
  );
};
