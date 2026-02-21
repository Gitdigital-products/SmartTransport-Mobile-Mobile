import { SolanaBalanceCard, KYCStatusCard } from '@gitdigital/futureproof-mobile-toolkit';
import { useTransportSession } from '../hooks/useTransportSession';

export const Dashboard = ({ userAddress, kycStatus }) => {
  const { calculateRideCost } = useTransportSession();
  const ridePrice = calculateRideCost(12); // Example 12km ride

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: '#000' }}>
      {/* Toolkit Components */}
      <SolanaBalanceCard address={userAddress} />
      <Spacer height={10} />
      <KYCStatusCard status={kycStatus} />
      
      {/* Transport Specific UI */}
      <View style={styles.rideBox}>
        <Text>Estimated Ride Cost: {ridePrice.display}</Text>
        <Button title="Book Transport" disabled={kycStatus !== 'verified'} />
      </View>
    </View>
  );
};
