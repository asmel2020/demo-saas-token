import templateTokenAbi from "@/common/abi/templateToken.abi";
import addressContract from "@/common/addressContract";
import chainId from "@/common/chainId";
import { useEthersProvider } from "@/common/utils/useEthersProvider";
import { config } from "@/wagmi";
import { ethers } from "ethers";
import toast from "react-hot-toast";
import { waitForTransactionReceipt } from "@wagmi/core";
import { useAccount, useWriteContract } from "wagmi";
import { useState } from "react";

export const useApprove = () => {
  const { writeContractAsync } = useWriteContract();

  const account = useAccount();
  const provider = useEthersProvider();
  const [isSuccessApprover, setIsSuccessApprover] = useState(false);
  const [isPendingApprover, setIsPendingApprover] = useState(false);
  const approverSend = async ({ address }: { address: string }) => {
    setIsPendingApprover(true);
    setIsSuccessApprover(false);
    try {
      const transactionCount = await provider?.getTransactionCount(
        account.address as `0x${string}`,
        "latest"
      );
      const hash = await writeContractAsync({
        abi: templateTokenAbi,
        address: addressContract.tokenAddress as `0x${string}`,
        functionName: "approve",
        args: [address, ethers.parseEther("10000")],
        nonce: transactionCount,
        chainId,
      });

      await waitForTransactionReceipt(config, {
        hash,
        confirmations: 6,
        chainId,
      });
      setIsSuccessApprover(true);
      setIsPendingApprover(false);
    } catch (error) {
      setIsSuccessApprover(false);
      setIsPendingApprover(false);
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
