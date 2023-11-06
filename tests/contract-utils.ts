import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { Approval, Burn, Mint, Transfer } from "../generated/Contract/Contract"

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}

export function createBurnEvent(_account: Address, _amount: BigInt): Burn {
  let burnEvent = changetype<Burn>(newMockEvent())

  burnEvent.parameters = new Array()

  burnEvent.parameters.push(
    new ethereum.EventParam("_account", ethereum.Value.fromAddress(_account))
  )
  burnEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return burnEvent
}

export function createMintEvent(_account: Address, _amount: BigInt): Mint {
  let mintEvent = changetype<Mint>(newMockEvent())

  mintEvent.parameters = new Array()

  mintEvent.parameters.push(
    new ethereum.EventParam("_account", ethereum.Value.fromAddress(_account))
  )
  mintEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return mintEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}
