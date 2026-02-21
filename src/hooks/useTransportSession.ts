import { formatSOL } from '@gitdigital/futureproof-mobile-toolkit';
import { useSolanaConnection } from '../providers/ToolkitProvider';

export const useTransportSession = () => {
  const { rpc } = useSolanaConnection();

  const calculateRideCost = (distanceKm: number) => {
    const rate = 0.05; // 0.05 SOL per KM
    const total = distanceKm * rate;
    return {
      raw: total,
      display: formatSOL(total) // Using the formatter from our toolkit!
    };
  };

  const verifyPassengerKYC = (status: string) => {
    // Logic to prevent ride start if toolkit KYC status isn't 'verified'
    return status === 'verified';
  };

  return { calculateRideCost, verifyPassengerKYC };
};
