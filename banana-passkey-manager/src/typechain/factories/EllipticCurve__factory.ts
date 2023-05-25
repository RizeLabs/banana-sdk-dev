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
] as const;

const _bytecode =
  "0x608080604052346100165761272a908161001c8239f35b600080fdfe6040608081526004908136101561001557600080fd5b6000803560e01c806304e960d7146103f557806309d3ef31146103d95780630afb4ddc1461039c5780630b0dbcfa1461038057806314c670601461033b578063322b24aa14610297578063675ca04314610284578063713eca281461026457806372fb4a141461023f5780637ec8da8d1461021757806384dfba46146101db578063c30cfa2d146101b6578063c80edca414610195578063e022d77c146101395763f214aba0146100c557600080fd5b346101365760c07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261013657506101166101329260a4359060843590606435906044359060243590356118e0565b9251918252602082015260408101919091529081906060820190565b0390f35b80fd5b5034610136575061016161015861014f36610598565b92919091610f96565b92909192610734565b80918451937fffffffff00000001000000000000000000000000ffffffffffffffffffffffff938491098452096020820152f35b5090346101b257610132906101166101ac36610560565b91610a5c565b5080fd5b5090346101b2576020906101d26101cc36610527565b90610892565b90519015158152f35b503461013657807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610136578151908082526020820152f35b5090346101b2576101329061023461022e36610527565b90610602565b9051918291826105d4565b5034610136575061025861025236610560565b91612520565b82519182526020820152f35b5090346101b2576101329061023461027b36610598565b9291909161064c565b5034610136575061016161015836610560565b5082346101b257906102a836610560565b90939193926001928382935b8085106102c75788888861016189610734565b92956102d69295919497610a5c565b959195949095967fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461030f578401939091926102b4565b6024836011847f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b5090346101b257817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101b25760609181519181835260016020840152820152f35b5090346101b2576020906101d261039636610527565b906108b2565b508290346101365760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261013657506102589035612234565b503461013657506101616101586103ef36610527565b906109a9565b509190346104b45760a07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126104b45736604312156104b4576104386104b8565b91826064933685116104b0576024905b8582106104a0575050366083121561049c576104626104b8565b918260a4953687116104985760209750905b8682106104895750506101d2939450356125df565b81358152908701908701610474565b8780fd5b8480fd5b8135815260209182019101610448565b8580fd5b8280fd5b604051906040820182811067ffffffffffffffff8211176104d857604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051906060820182811067ffffffffffffffff8211176104d857604052565b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc604091011261055b576004359060243590565b600080fd5b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc606091011261055b57600435906024359060443590565b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc608091011261055b5760043590602435906044359060643590565b6060810192916000915b600383106105eb57505050565b6001908251815260208091019201920191906105de565b91906020600180610611610507565b93606036863784968260408701527fffffffff00000001000000000000000000000000ffffffffffffffffffffffff93849109855209910152565b9261066b9261015892610699956060610663610507565b369037610f96565b80917fffffffff00000001000000000000000000000000ffffffffffffffffffffffff928391099209610602565b90565b600160007fffffffff00000001000000000000000000000000ffffffffffffffffffffffff7f8d761fd160e5bb67afe5854016bb02b6f80baf8d4b7fce3c852842092b408ce3805b61071c5750509050600081126106f75790565b7fffffffff00000001000000000000000000000000ffffffffffffffffffffffff0190565b808204848102909303939290919082029003806106e4565b801580156107bf575b80156107b7575b6107b1577fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8082116107a8575b600091600182825b610790575050506000821261078c575090565b0190565b90938282048084029092039291850290039082610779565b80910690610771565b50600090565b506000610744565b507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff811461073d565b80158015610869575b8015610861575b6107b1577fffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551808211610858575b600091600182825b610840575050506000821261078c575090565b9093828204808402909203929185029003908261082d565b80910690610825565b5060006107f8565b507fffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc63255181146107f1565b1590816108a9575b506108a457600090565b600190565b9050153861089a565b80158015610980575b8015610978575b801561094f575b610948577f5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff91828281807fffffffff00000001000000000000000000000000fffffffffffffffffffffffc81960991818180090908089180091490565b5050600090565b507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff82146108c9565b5081156108c2565b507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff81146108bb565b916109b48284610892565b610a50577fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8080858180808080808b81808060018409600290099e8f090960029009948009600390097fffffffff00000001000000000000000000000000fffffffffffffffffffffffc9008818080808c818089600209810381888009089c098009600209810393898203900890090893850993818180090990565b60009250600191508290565b919290610a698184610892565b610f895780837fffffffff00000001000000000000000000000000ffffffffffffffffffffffff86830960027fffffffff00000001000000000000000000000000ffffffffffffffffffffffff9109907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff9109907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff910960027fffffffff00000001000000000000000000000000ffffffffffffffffffffffff9109927fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8580097fffffffff00000001000000000000000000000000fffffffffffffffffffffffc7fffffffff00000001000000000000000000000000ffffffffffffffffffffffff910990807fffffffff00000001000000000000000000000000ffffffffffffffffffffffff910960037fffffffff00000001000000000000000000000000ffffffffffffffffffffffff9109907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff9108927fffffffff00000001000000000000000000000000ffffffffffffffffffffffff816002097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff037fffffffff00000001000000000000000000000000ffffffffffffffffffffffff858009907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff9108937fffffffff00000001000000000000000000000000ffffffffffffffffffffffff86840960027fffffffff00000001000000000000000000000000ffffffffffffffffffffffff91097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff908409807fffffffff00000001000000000000000000000000ffffffffffffffffffffffff91097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff906002097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff0391857fffffffff00000001000000000000000000000000ffffffffffffffffffffffff037fffffffff00000001000000000000000000000000ffffffffffffffffffffffff91087fffffffff00000001000000000000000000000000ffffffffffffffffffffffff9109907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff9108927fffffffff00000001000000000000000000000000ffffffffffffffffffffffff85830960027fffffffff00000001000000000000000000000000ffffffffffffffffffffffff9109907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff9109937fffffffff00000001000000000000000000000000ffffffffffffffffffffffff81830960027fffffffff00000001000000000000000000000000ffffffffffffffffffffffff9109917fffffffff00000001000000000000000000000000ffffffffffffffffffffffff82820960027fffffffff00000001000000000000000000000000ffffffffffffffffffffffff9109917fffffffff00000001000000000000000000000000ffffffffffffffffffffffff910960027fffffffff00000001000000000000000000000000ffffffffffffffffffffffff9109907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff9109907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff910990565b5060009250600191508290565b939293610fa38282610892565b15610fb15750509190600190565b90919293610fbf8185610892565b6118d6577fffffffff00000001000000000000000000000000ffffffffffffffffffffffff600185097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff60018409146118675760017fffffffff00000001000000000000000000000000ffffffffffffffffffffffff91097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff037fffffffff00000001000000000000000000000000ffffffffffffffffffffffff60018409907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff9108907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff600185097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff037fffffffff00000001000000000000000000000000ffffffffffffffffffffffff60018309907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff91087fffffffff00000001000000000000000000000000ffffffffffffffffffffffff600186097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff037fffffffff00000001000000000000000000000000ffffffffffffffffffffffff60018409907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff9108907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff91097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff600183097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff60018709907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff9108907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff91097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff037fffffffff00000001000000000000000000000000ffffffffffffffffffffffff83800960017fffffffff00000001000000000000000000000000ffffffffffffffffffffffff9109907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff9108917fffffffff00000001000000000000000000000000ffffffffffffffffffffffff600186097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff037fffffffff00000001000000000000000000000000ffffffffffffffffffffffff60018409907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff91087fffffffff00000001000000000000000000000000ffffffffffffffffffffffff600187097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff037fffffffff00000001000000000000000000000000ffffffffffffffffffffffff60018509907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff91087fffffffff00000001000000000000000000000000ffffffffffffffffffffffff600188097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff037fffffffff00000001000000000000000000000000ffffffffffffffffffffffff60018609907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff9108907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff9109907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff91097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff600182099460017fffffffff00000001000000000000000000000000ffffffffffffffffffffffff9109907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff91097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff0390837fffffffff00000001000000000000000000000000ffffffffffffffffffffffff037fffffffff00000001000000000000000000000000ffffffffffffffffffffffff600188097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff037fffffffff00000001000000000000000000000000ffffffffffffffffffffffff60018609907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff91087fffffffff00000001000000000000000000000000ffffffffffffffffffffffff600189097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff037fffffffff00000001000000000000000000000000ffffffffffffffffffffffff60018709907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff9108907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff91097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff60018609907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff9109907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff91087fffffffff00000001000000000000000000000000ffffffffffffffffffffffff9109907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff91089360017fffffffff00000001000000000000000000000000ffffffffffffffffffffffff91097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff039060017fffffffff00000001000000000000000000000000ffffffffffffffffffffffff9109907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff9108907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff910992565b7fffffffff00000001000000000000000000000000ffffffffffffffffffffffff919350600190097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff60018309036118c9576118c2916109a9565b9192909190565b5050600090600190600090565b5092909150600190565b9593956118ed8282610892565b156118fa57505050929190565b9194939561190a81859395610892565b61222a577fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8683097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff868509146121e057907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff86869493097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff037fffffffff00000001000000000000000000000000ffffffffffffffffffffffff848609907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff91087fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8783097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff037fffffffff00000001000000000000000000000000ffffffffffffffffffffffff858509907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff91087fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8884097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff037fffffffff00000001000000000000000000000000ffffffffffffffffffffffff868609907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff9108907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff91097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8585097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff898509907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff9108907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff91097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff037fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8589097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff838009907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff9109907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff9108947fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8884097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff037fffffffff00000001000000000000000000000000ffffffffffffffffffffffff868609907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff91087fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8985097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff037fffffffff00000001000000000000000000000000ffffffffffffffffffffffff878709907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff91087fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8a86097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff037fffffffff00000001000000000000000000000000ffffffffffffffffffffffff888809907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff9108907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff9109907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff9109907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff868a097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff908309977fffffffff00000001000000000000000000000000ffffffffffffffffffffffff9109907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff91097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff0390857fffffffff00000001000000000000000000000000ffffffffffffffffffffffff037fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8985097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff037fffffffff00000001000000000000000000000000ffffffffffffffffffffffff878709907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff91087fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8a86097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff037fffffffff00000001000000000000000000000000ffffffffffffffffffffffff888809907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff9108907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff91097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff878709907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff9109907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff91087fffffffff00000001000000000000000000000000ffffffffffffffffffffffff9109907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff9108957fffffffff00000001000000000000000000000000ffffffffffffffffffffffff91097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff03917fffffffff00000001000000000000000000000000ffffffffffffffffffffffff9109907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff9108907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff910992565b7fffffffff00000001000000000000000000000000ffffffffffffffffffffffff915085829196959396099183090361221c576118c292610a5c565b505050600090600190600090565b5090949193925050565b806122425750600090600090565b6001810361229157507f6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296907f4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f590565b9060028214612385577f6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c2967f4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f590600190818193809682811615612379575b821c92835b612330575050505061230490610734565b80917fffffffff00000001000000000000000000000000ffffffffffffffffffffffff92839109930990565b9061233b9291610a5c565b9192828285600180851614612358575b50505060011c92836122f3565b9061236a959a939892919794976118e0565b9691969390969438808061234b565b600097508795506122ee565b905061238f61069c565b907fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80837f88b13398542d5c8e69a0be9fe51bba8fffab23c970e684814e4b1cf45751336f09927f4126885e7f786af905338238e5346d5fe77fc46388668bd0fd59be3190d2f5d10990565b806124095750600090600090565b6001810361245857507f6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296907f4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f590565b9060028214612385577f6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c2967f4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f590600190818193809682811615612514575b821c92835b6124cb575050505061230490610734565b906124d69291610a5c565b91928282856001808516146124f3575b50505060011c92836124ba565b90612505959a939892919794976118e0565b969196939096943880806124e6565b600097508795506124b5565b909291806125345750509050600090600090565b6001810361254157509190565b9290600284146125c857808260019081939496828116156125bc575b821c92835b612573575050505061230490610734565b9061257e9291610a5c565b919282828560018085161461259b575b50505060011c9283612562565b906125ad959a939892919794976118e0565b9691969390969438808061258e565b6000975087955061255d565b6123049350906125d7916109a9565b939093610734565b9091825191821580156126ca575b80156126be575b6126ab57602082519201519261260a84846108b2565b156126b45761265e6126669361262360208801516107e8565b9586946126547fffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc63255180998193096123fb565b9690950991612520565b92909161064c565b604081015180156126ab5761267a90610734565b90519251927fffffffff00000001000000000000000000000000ffffffffffffffffffffffff828193099009061490565b50505050600090565b5050505050600090565b506020840151156125f4565b507fffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc6325518310156125ed56fea26469706673582212207684ea6103df53a57e6cebdec082b7a140891d3650fde6c5ecdeb4e778cc08f564736f6c634300080f0033";

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