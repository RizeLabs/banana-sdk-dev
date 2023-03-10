/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { EllipticCurve, EllipticCurveInterface } from "../EllipticCurve";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "y0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "x1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "y1",
        type: "uint256",
      },
    ],
    name: "add",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "y1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "x2",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "y2",
        type: "uint256",
      },
    ],
    name: "addAndReturnProjectivePoint",
    outputs: [
      {
        internalType: "uint256[3]",
        name: "P",
        type: "uint256[3]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "y0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "z0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "x1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "y1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "z1",
        type: "uint256",
      },
    ],
    name: "addProj",
    outputs: [
      {
        internalType: "uint256",
        name: "x2",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "y2",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "z2",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "y",
        type: "uint256",
      },
    ],
    name: "isOnCurve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "y0",
        type: "uint256",
      },
    ],
    name: "isZeroCurve",
    outputs: [
      {
        internalType: "bool",
        name: "isZero",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "scalar",
        type: "uint256",
      },
    ],
    name: "multipleGeneratorByScalar",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "y0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "exp",
        type: "uint256",
      },
    ],
    name: "multiplyPowerBase2",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "y0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "scalar",
        type: "uint256",
      },
    ],
    name: "multiplyScalar",
    outputs: [
      {
        internalType: "uint256",
        name: "x1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "y1",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "y0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "z0",
        type: "uint256",
      },
    ],
    name: "toAffinePoint",
    outputs: [
      {
        internalType: "uint256",
        name: "x1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "y1",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "y0",
        type: "uint256",
      },
    ],
    name: "toProjectivePoint",
    outputs: [
      {
        internalType: "uint256[3]",
        name: "P",
        type: "uint256[3]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "y0",
        type: "uint256",
      },
    ],
    name: "twice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "y0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "z0",
        type: "uint256",
      },
    ],
    name: "twiceProj",
    outputs: [
      {
        internalType: "uint256",
        name: "x1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "y1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "z1",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "message",
        type: "bytes32",
      },
      {
        internalType: "uint256[2]",
        name: "rs",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2]",
        name: "Q",
        type: "uint256[2]",
      },
    ],
    name: "validateSignature",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "zeroAffine",
    outputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "y",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "zeroProj",
    outputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "y",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "z",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612050806100206000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c8063713eca2811610097578063c30cfa2d11610066578063c30cfa2d146102ee578063c80edca41461031e578063e022d77c14610350578063f214aba014610381576100f5565b8063713eca281461023e57806372fb4a141461026e5780637ec8da8d1461029f57806384dfba46146102cf576100f5565b80630b0dbcfa116100d35780630b0dbcfa1461018c57806314c67060146101bc578063322b24aa146101dc578063675ca0431461020d576100f5565b806304e960d7146100fa57806309d3ef311461012a5780630afb4ddc1461015b575b600080fd5b610114600480360381019061010f9190611ba2565b6103b3565b6040516101219190611c10565b60405180910390f35b610144600480360381019061013f9190611c2b565b610743565b604051610152929190611c7a565b60405180910390f35b61017560048036038101906101709190611ca3565b610777565b604051610183929190611c7a565b60405180910390f35b6101a660048036038101906101a19190611c2b565b6107ce565b6040516101b39190611c10565b60405180910390f35b6101c4610a17565b6040516101d393929190611cd0565b60405180910390f35b6101f660048036038101906101f19190611d07565b610a2c565b604051610204929190611c7a565b60405180910390f35b61022760048036038101906102229190611d07565b610a8f565b604051610235929190611c7a565b60405180910390f35b61025860048036038101906102539190611d5a565b610b31565b6040516102659190611e6c565b60405180910390f35b61028860048036038101906102839190611d07565b610b66565b604051610296929190611c7a565b60405180910390f35b6102b960048036038101906102b49190611c2b565b610c67565b6040516102c69190611e6c565b60405180910390f35b6102d7610d94565b6040516102e5929190611c7a565b60405180910390f35b61030860048036038101906103039190611c2b565b610da2565b6040516103159190611c10565b60405180910390f35b61033860048036038101906103339190611d07565b610dcc565b60405161034793929190611cd0565b60405180910390f35b61036a60048036038101906103659190611d5a565b61130e565b604051610378929190611c7a565b60405180910390f35b61039b60048036038101906103969190611e87565b611348565b6040516103aa93929190611cd0565b60405180910390f35b600080836000600281106103ca576103c9611f14565b5b6020020151148061041357507fffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc6325518360006002811061040b5761040a611f14565b5b602002015110155b80610436575060008360016002811061042f5761042e611f14565b5b6020020151145b15610444576000905061073c565b61047e8260006002811061045b5761045a611f14565b5b60200201518360016002811061047457610473611f14565b5b60200201516107ce565b61048b576000905061073c565b60008060008060006104d5886001600281106104aa576104a9611f14565b5b60200201517fffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc6325516114ff565b90506105567f6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c2967f4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f57fffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc6325518061054b5761054a611f43565b5b848d60001c09610b66565b80945081965050506105e28760006002811061057557610574611f14565b5b60200201518860016002811061058e5761058d611f14565b5b60200201517fffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551806105c2576105c1611f43565b5b848c6000600281106105d7576105d6611f14565b5b602002015109610b66565b809350819550505060006105f886858786610b31565b90506000816002600381106106105761060f611f14565b5b602002015103610629576000965050505050505061073c565b600061066d8260026003811061064257610641611f14565b5b60200201517fffffffff00000001000000000000000000000000ffffffffffffffffffffffff6114ff565b90507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8061069e5761069d611f43565b5b7fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806106cd576106cc611f43565b5b828309836000600381106106e4576106e3611f14565b5b602002015109905089600060028110610700576106ff611f14565b5b60200201517fffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551826107319190611f72565b149750505050505050505b9392505050565b600080600061075485856001610dcc565b80935081965082975050505061076b858583610a8f565b92509250509250929050565b6000806107c57f6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c2967f4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f585610b66565b91509150915091565b600082600014806107fe57507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff83145b806108095750816000145b8061083357507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff82145b156108415760009050610a11565b60007fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8061087257610871611f43565b5b838409905060007fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806108a8576108a7611f43565b5b857fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806108d8576108d7611f43565b5b87880909905060007fffffffff00000001000000000000000000000000fffffffffffffffffffffffc1461098c577fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8061093557610934611f43565b5b7fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8061096457610963611f43565b5b7fffffffff00000001000000000000000000000000fffffffffffffffffffffffc8709820890505b60007f5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b14610a09577fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806109e3576109e2611f43565b5b7f5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b820890505b808214925050505b92915050565b60008060008060016000925092509250909192565b6000806000859050600085905060006001905060005b86811015610a7457610a55848484610dcc565b8094508195508296505050508080610a6c90611fd2565b915050610a42565b50610a80838383610a8f565b94509450505050935093915050565b6000806000610abe847fffffffff00000001000000000000000000000000ffffffffffffffffffffffff6114ff565b90507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80610aef57610aee611f43565b5b81870992507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80610b2357610b22611f43565b5b818609915050935093915050565b610b396119be565b600080610b488787878761130e565b8092508193505050610b5a8282610c67565b92505050949350505050565b60008060008303610b8257610b79610d94565b91509150610c5f565b60018303610b9557848491509150610c5f565b60028303610bb057610ba78585610743565b91509150610c5f565b600085905060008590506000600190506000600190508895508794506000600288610bdb9190611f72565b03610be857600094508495505b600187901c96505b6000871115610c4b57610c04848484610dcc565b8094508195508296505050506001600288610c1f9190611f72565b03610c3f57610c32848484898986611348565b8093508197508298505050505b600187901c9650610bf0565b610c56868683610a8f565b95509550505050505b935093915050565b610c6f6119be565b7fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80610c9e57610c9d611f43565b5b600160000881600260038110610cb757610cb6611f14565b5b6020020181815250507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80610cef57610cee611f43565b5b81600260038110610d0357610d02611f14565b5b6020020151840981600060038110610d1e57610d1d611f14565b5b6020020181815250507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80610d5657610d55611f43565b5b81600260038110610d6a57610d69611f14565b5b6020020151830981600160038110610d8557610d84611f14565b5b60200201818152505092915050565b600080600080915091509091565b60008083148015610db35750600082145b15610dc15760019050610dc6565b600090505b92915050565b6000806000806000806000610de18a8a610da2565b15610dfd57610dee610a17565b96509650965050505050611305565b7fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80610e2c57610e2b611f43565b5b888a0992507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80610e6057610e5f611f43565b5b6002840992507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80610e9557610e94611f43565b5b8a840991507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80610ec957610ec8611f43565b5b89830991507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80610efd57610efc611f43565b5b6002830991507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80610f3257610f31611f43565b5b8a8b0999507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80610f6657610f65611f43565b5b60038b0993507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80610f9b57610f9a611f43565b5b88890997507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80610fcf57610fce611f43565b5b7fffffffff00000001000000000000000000000000fffffffffffffffffffffffc890997507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8061102357611022611f43565b5b88850893507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8061105757611056611f43565b5b84850990507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8061108b5761108a611f43565b5b8260020999507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806110c0576110bf611f43565b5b8a7fffffffff00000001000000000000000000000000ffffffffffffffffffffffff03820890507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8061111657611115611f43565b5b817fffffffff00000001000000000000000000000000ffffffffffffffffffffffff03830899507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8061116c5761116b611f43565b5b8a850999507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806111a05761119f611f43565b5b838a0998507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806111d4576111d3611f43565b5b898a0998507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8061120857611207611f43565b5b8960020998507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8061123d5761123c611f43565b5b897fffffffff00000001000000000000000000000000ffffffffffffffffffffffff038b0895507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8061129357611292611f43565b5b81840996507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806112c7576112c6611f43565b5b83840994507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806112fb576112fa611f43565b5b8386099450505050505b93509350939050565b60008060006113238787600188886001611348565b80935081985082995050505061133a878783610a8f565b925092505094509492505050565b600080600080600080600061135d8d8d610da2565b1561137457898989965096509650505050506114f3565b61137e8a8a610da2565b15611395578c8c8c965096509650505050506114f3565b7fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806113c4576113c3611f43565b5b888d0993507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806113f8576113f7611f43565b5b8b8a0992507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8061142c5761142b611f43565b5b888e0991507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806114605761145f611f43565b5b8b8b0990508082036114a45782840361148d5761147e8d8d8d610dcc565b965096509650505050506114f3565b611495610a17565b965096509650505050506114f3565b6114e27fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806114d6576114d5611f43565b5b898d09838386886115b8565b809750819850829950505050505050505b96509650969350505050565b60008083148061150e57508183145b806115195750600082145b1561152757600090506115b2565b8183111561153e57818361153b9190611f72565b92505b600080600190506000849050600086905060005b6000821461158e5781838161156a57611569611f43565b5b04905083848202860383848402860380955081965082975083985050505050611552565b60008512156115a957846000038703955050505050506115b2565b84955050505050505b92915050565b6000806000806000806000807fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806115f3576115f2611f43565b5b8a7fffffffff00000001000000000000000000000000ffffffffffffffffffffffff038a0890507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8061164957611648611f43565b5b8b7fffffffff00000001000000000000000000000000ffffffffffffffffffffffff038d0894507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8061169f5761169e611f43565b5b85860993507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806116d3576116d2611f43565b5b81820991507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8061170757611706611f43565b5b8d830991507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8061173b5761173a611f43565b5b8c8c089a507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8061176f5761176e611f43565b5b848c099a507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806117a3576117a2611f43565b5b8b7fffffffff00000001000000000000000000000000ffffffffffffffffffffffff03830891507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806117f9576117f8611f43565b5b82860997507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8061182d5761182c611f43565b5b85850992507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8061186157611860611f43565b5b848d099b507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8061189557611894611f43565b5b827fffffffff00000001000000000000000000000000ffffffffffffffffffffffff038d089b507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806118eb576118ea611f43565b5b8c820990507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8061191f5761191e611f43565b5b838a0998507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8061195357611952611f43565b5b897fffffffff00000001000000000000000000000000ffffffffffffffffffffffff03820896507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806119a9576119a8611f43565b5b8d840995505050505050955095509592505050565b6040518060600160405280600390602082028036833780820191505090505090565b6000604051905090565b600080fd5b6000819050919050565b611a02816119ef565b8114611a0d57600080fd5b50565b600081359050611a1f816119f9565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611a7382611a2a565b810181811067ffffffffffffffff82111715611a9257611a91611a3b565b5b80604052505050565b6000611aa56119e0565b9050611ab18282611a6a565b919050565b600067ffffffffffffffff821115611ad157611ad0611a3b565b5b602082029050919050565b600080fd5b6000819050919050565b611af481611ae1565b8114611aff57600080fd5b50565b600081359050611b1181611aeb565b92915050565b6000611b2a611b2584611ab6565b611a9b565b90508060208402830185811115611b4457611b43611adc565b5b835b81811015611b6d5780611b598882611b02565b845260208401935050602081019050611b46565b5050509392505050565b600082601f830112611b8c57611b8b611a25565b5b6002611b99848285611b17565b91505092915050565b600080600060a08486031215611bbb57611bba6119ea565b5b6000611bc986828701611a10565b9350506020611bda86828701611b77565b9250506060611beb86828701611b77565b9150509250925092565b60008115159050919050565b611c0a81611bf5565b82525050565b6000602082019050611c256000830184611c01565b92915050565b60008060408385031215611c4257611c416119ea565b5b6000611c5085828601611b02565b9250506020611c6185828601611b02565b9150509250929050565b611c7481611ae1565b82525050565b6000604082019050611c8f6000830185611c6b565b611c9c6020830184611c6b565b9392505050565b600060208284031215611cb957611cb86119ea565b5b6000611cc784828501611b02565b91505092915050565b6000606082019050611ce56000830186611c6b565b611cf26020830185611c6b565b611cff6040830184611c6b565b949350505050565b600080600060608486031215611d2057611d1f6119ea565b5b6000611d2e86828701611b02565b9350506020611d3f86828701611b02565b9250506040611d5086828701611b02565b9150509250925092565b60008060008060808587031215611d7457611d736119ea565b5b6000611d8287828801611b02565b9450506020611d9387828801611b02565b9350506040611da487828801611b02565b9250506060611db587828801611b02565b91505092959194509250565b600060039050919050565b600081905092915050565b6000819050919050565b611dea81611ae1565b82525050565b6000611dfc8383611de1565b60208301905092915050565b6000602082019050919050565b611e1e81611dc1565b611e288184611dcc565b9250611e3382611dd7565b8060005b83811015611e64578151611e4b8782611df0565b9650611e5683611e08565b925050600181019050611e37565b505050505050565b6000606082019050611e816000830184611e15565b92915050565b60008060008060008060c08789031215611ea457611ea36119ea565b5b6000611eb289828a01611b02565b9650506020611ec389828a01611b02565b9550506040611ed489828a01611b02565b9450506060611ee589828a01611b02565b9350506080611ef689828a01611b02565b92505060a0611f0789828a01611b02565b9150509295509295509295565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000611f7d82611ae1565b9150611f8883611ae1565b925082611f9857611f97611f43565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611fdd82611ae1565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361200f5761200e611fa3565b5b60018201905091905056fea2646970667358221220aa877323da203fdb1b2652a416172e0793802ddb291a02ada60128b12e38875f64736f6c63430008110033";

type EllipticCurveConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EllipticCurveConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EllipticCurve__factory extends ContractFactory {
  constructor(...args: EllipticCurveConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<EllipticCurve> {
    return super.deploy(overrides || {}) as Promise<EllipticCurve>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): EllipticCurve {
    return super.attach(address) as EllipticCurve;
  }
  override connect(signer: Signer): EllipticCurve__factory {
    return super.connect(signer) as EllipticCurve__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EllipticCurveInterface {
    return new utils.Interface(_abi) as EllipticCurveInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EllipticCurve {
    return new Contract(address, _abi, signerOrProvider) as EllipticCurve;
  }
}
