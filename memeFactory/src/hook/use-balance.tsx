import templateTokenAbi from "@/common/abi/templateToken.abi";
import addressContract from "@/common/addressContract";
import chainId from "@/common/chainId";
import { useAccount, useReadContract } from "wagmi";

export const useBalanceOf = () => {
  const account = useAccount();

  const {
    data: balance,
    refetch: refetchBalance,
    isSuccess: isSuccessBalance,
  } = useReadContract({
    abi: templateTokenAbi,
    address: addressContract.tokenAddress as `0x${string}`,
    functionName: "balanceOf",
    args: [account?.address as `0x${string}`],
    chainId,
  });

  return {
    balance: balance as bigint | undefined,
    refetchBalance,
    isSuccessBalance,
  };
};
