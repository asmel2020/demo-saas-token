import templateTokenAbi from "@/common/abi/templateToken.abi";
import addressContract from "@/common/addressContract";
import chainId from "@/common/chainId";
import { useAccount, useReadContract } from "wagmi";
interface Props {
  address: string;
}
export const useAllowance = ({ address }: Props) => {
  const account = useAccount();

  const {
    data: allowance,
    refetch: refetchAllowance,
    isSuccess: isSuccessAllowance,
  } = useReadContract({
    abi: templateTokenAbi,
    address: addressContract.tokenAddress as `0x${string}`,
    functionName: "allowance",
    args: [account?.address as `0x${string}`, address],
    chainId,
  });

  return {
    allowance,
    refetchAllowance,
    isSuccessAllowance,
  };
};
