import templateTokenAbi from "@/common/abi/templateToken.abi";
import addressContract from "@/common/addressContract";
import chainId from "@/common/chainId";
import { useEthersProvider } from "@/common/utils/useEthersProvider";
import { ethers } from "ethers";
import toast from "react-hot-toast";

import { useAccount, useWriteContract } from "wagmi";

export const useApprove = () => {
  const {
    writeContractAsync,
    isSuccess: isSuccessApprover,
    isPending: isPendingApprover,
  } = useWriteContract();

  const account = useAccount();

  const provider = useEthersProvider();

  const approverSend = async ({ address }: { address: string }) => {
    try {
      const transactionCount = await provider?.getTransactionCount(
        account.address as `0x${string}`,
        "latest"
      );
      await writeContractAsync({
        abi: templateTokenAbi,
        address: addressContract.tokenAddress as `0x${string}`,
        functionName: "approve",
        args: [address, ethers.parseEther("10000")],
        nonce: transactionCount,
        chainId,
      });
    } catch (error) {
      console.error(error);
      toast.error("Erro ao aprovar");
    }
  };

  return {
    approverSend,
    isSuccessApprover,
    isPendingApprover,
  };
};
