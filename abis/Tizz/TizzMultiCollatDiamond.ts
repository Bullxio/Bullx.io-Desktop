export const TizzMultiCollatDiamondAbi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "InitError",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidInputLength",
    type: "error",
  },
  {
    inputs: [],
    name: "NotAllowed",
    type: "error",
  },
  {
    inputs: [],
    name: "WrongAccess",
    type: "error",
  },
  {
    inputs: [],
    name: "WrongSlot",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "enum IAddressStoreUtils.Role",
        name: "role",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "access",
        type: "bool",
      },
    ],
    name: "AccessControlUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "tizz",
            type: "address",
          },
        ],
        indexed: false,
        internalType: "struct IAddressStoreUtils.Addresses",
        name: "addresses",
        type: "tuple",
      },
    ],
    name: "AddressesUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "ally",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "volumeUsd",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountToken",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountValueUsd",
        type: "uint256",
      },
    ],
    name: "AllyRewardDistributed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "ally",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountToken",
        type: "uint256",
      },
    ],
    name: "AllyRewardsClaimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "ally",
        type: "address",
      },
    ],
    name: "AllyUnwhitelisted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "ally",
        type: "address",
      },
    ],
    name: "AllyWhitelisted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "FeeAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256[]",
        name: "feeTiersIndices",
        type: "uint256[]",
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "feeMultiplier",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "pointsThreshold",
            type: "uint32",
          },
        ],
        indexed: false,
        internalType: "struct IFeeTiersUtils.FeeTier[]",
        name: "feeTiers",
        type: "tuple[]",
      },
    ],
    name: "FeeTiersUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "FeeUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "GroupAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "GroupUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256[]",
        name: "groupIndices",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "groupVolumeMultipliers",
        type: "uint256[]",
      },
    ],
    name: "GroupVolumeMultipliersUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint48",
        name: "windowsDuration",
        type: "uint48",
      },
      {
        indexed: true,
        internalType: "uint48",
        name: "windowsCount",
        type: "uint48",
      },
    ],
    name: "OiWindowsSettingsInitialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "pairIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "valueAboveUsd",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "valueBelowUsd",
        type: "uint128",
      },
    ],
    name: "OnePercentDepthUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "from",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "to",
        type: "string",
      },
    ],
    name: "PairAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "maxLeverage",
        type: "uint256",
      },
    ],
    name: "PairCustomMaxLeverageUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "PairUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "pairIndex",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint128",
            name: "oiLongUsd",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "oiShortUsd",
            type: "uint128",
          },
        ],
        indexed: false,
        internalType: "struct IPriceImpactUtils.PairOi",
        name: "totalPairOi",
        type: "tuple",
      },
    ],
    name: "PriceImpactOiTransferredPair",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "pairsCount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "prevCurrentWindowId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "prevEarliestWindowId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newCurrentWindowId",
        type: "uint256",
      },
    ],
    name: "PriceImpactOiTransferredPairs",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "uint48",
            name: "windowsDuration",
            type: "uint48",
          },
          {
            internalType: "uint256",
            name: "pairIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "windowId",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "long",
            type: "bool",
          },
          {
            internalType: "uint128",
            name: "openInterestUsd",
            type: "uint128",
          },
        ],
        indexed: false,
        internalType: "struct IPriceImpactUtils.OiWindowUpdate",
        name: "oiWindowUpdate",
        type: "tuple",
      },
    ],
    name: "PriceImpactOpenInterestAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "uint48",
            name: "windowsDuration",
            type: "uint48",
          },
          {
            internalType: "uint256",
            name: "pairIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "windowId",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "long",
            type: "bool",
          },
          {
            internalType: "uint128",
            name: "openInterestUsd",
            type: "uint128",
          },
        ],
        indexed: false,
        internalType: "struct IPriceImpactUtils.OiWindowUpdate",
        name: "oiWindowUpdate",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "notOutdated",
        type: "bool",
      },
    ],
    name: "PriceImpactOpenInterestRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint48",
        name: "windowsCount",
        type: "uint48",
      },
    ],
    name: "PriceImpactWindowsCountUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint48",
        name: "windowsDuration",
        type: "uint48",
      },
    ],
    name: "PriceImpactWindowsDurationUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "referrer",
        type: "address",
      },
    ],
    name: "ReferrerRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "referrer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "volumeUsd",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountToken",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountValueUsd",
        type: "uint256",
      },
    ],
    name: "ReferrerRewardDistributed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "referrer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountToken",
        type: "uint256",
      },
    ],
    name: "ReferrerRewardsClaimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "referrer",
        type: "address",
      },
    ],
    name: "ReferrerUnwhitelisted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "referrer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "ally",
        type: "address",
      },
    ],
    name: "ReferrerWhitelisted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "day",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint224",
        name: "points",
        type: "uint224",
      },
    ],
    name: "TraderDailyPointsIncreased",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "day",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "feeMultiplier",
        type: "uint32",
      },
    ],
    name: "TraderFeeMultiplierCached",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "day",
        type: "uint32",
      },
    ],
    name: "TraderInfoFirstUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "lastDayUpdated",
            type: "uint32",
          },
          {
            internalType: "uint224",
            name: "trailingPoints",
            type: "uint224",
          },
        ],
        indexed: false,
        internalType: "struct IFeeTiersUtils.TraderInfo",
        name: "traderInfo",
        type: "tuple",
      },
    ],
    name: "TraderInfoUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "fromDay",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "toDay",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint224",
        name: "amount",
        type: "uint224",
      },
    ],
    name: "TraderTrailingPointsExpired",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "UpdatedAllyFeeP",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "UpdatedOpenFeeP",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "UpdatedStartReferrerFeeP",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "UpdatedTargetVolumeUsd",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "openFeeP",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "closeFeeP",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "oracleFeeP",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "nftLimitOrderFeeP",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minLevPosUsd",
            type: "uint256",
          },
        ],
        internalType: "struct IPairsStorageUtils.Fee[]",
        name: "_fees",
        type: "tuple[]",
      },
    ],
    name: "addFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "bytes32",
            name: "job",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "minLeverage",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxLeverage",
            type: "uint256",
          },
        ],
        internalType: "struct IPairsStorageUtils.Group[]",
        name: "_groups",
        type: "tuple[]",
      },
    ],
    name: "addGroups",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "from",
            type: "string",
          },
          {
            internalType: "string",
            name: "to",
            type: "string",
          },
          {
            components: [
              {
                internalType: "address",
                name: "feed1",
                type: "address",
              },
              {
                internalType: "address",
                name: "feed2",
                type: "address",
              },
              {
                internalType: "enum IPairsStorageUtils.FeedCalculation",
                name: "feedCalculation",
                type: "uint8",
              },
              {
                internalType: "uint256",
                name: "maxDeviationP",
                type: "uint256",
              },
            ],
            internalType: "struct IPairsStorageUtils.Feed",
            name: "feed",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "spreadP",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "groupIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "feeIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "pairId",
            type: "uint256",
          },
        ],
        internalType: "struct IPairsStorageUtils.Pair[]",
        name: "_pairs",
        type: "tuple[]",
      },
    ],
    name: "addPairs",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_openInterestUsd",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_pairIndex",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_long",
        type: "bool",
      },
    ],
    name: "addPriceImpactOpenInterest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_trader",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_normalFeeAmount",
        type: "uint256",
      },
    ],
    name: "calculateFeeAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "claimAllyRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "claimReferrerRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "currentOrderId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_trader",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_volumeUsd",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_pairOpenFeeP",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_tokenPriceUsd",
        type: "uint256",
      },
    ],
    name: "distributeReferralReward",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "fees",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "openFeeP",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "closeFeeP",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "oracleFeeP",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "nftLimitOrderFeeP",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minLevPosUsd",
            type: "uint256",
          },
        ],
        internalType: "struct IPairsStorageUtils.Fee",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "feesCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAddresses",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "tizz",
            type: "address",
          },
        ],
        internalType: "struct IAddressStoreUtils.Addresses",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllPairsRestrictedMaxLeverage",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_ally",
        type: "address",
      },
    ],
    name: "getAllyDetails",
    outputs: [
      {
        components: [
          {
            internalType: "address[]",
            name: "referrersReferred",
            type: "address[]",
          },
          {
            internalType: "uint256",
            name: "volumeReferredUsd",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "pendingRewardsToken",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalRewardsToken",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalRewardsValueUsd",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool",
          },
        ],
        internalType: "struct IReferralsUtils.AllyDetails",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_feeTierIndex",
        type: "uint256",
      },
    ],
    name: "getFeeTier",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "feeMultiplier",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "pointsThreshold",
            type: "uint32",
          },
        ],
        internalType: "struct IFeeTiersUtils.FeeTier",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getFeeTiersCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_trader",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "_day",
        type: "uint32",
      },
    ],
    name: "getFeeTiersTraderDailyInfo",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "feeMultiplierCache",
            type: "uint32",
          },
          {
            internalType: "uint224",
            name: "points",
            type: "uint224",
          },
        ],
        internalType: "struct IFeeTiersUtils.TraderDailyInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_trader",
        type: "address",
      },
    ],
    name: "getFeeTiersTraderInfo",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "lastDayUpdated",
            type: "uint32",
          },
          {
            internalType: "uint224",
            name: "trailingPoints",
            type: "uint224",
          },
        ],
        internalType: "struct IFeeTiersUtils.TraderInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_groupIndex",
        type: "uint256",
      },
    ],
    name: "getGroupVolumeMultiplier",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint48",
        name: "_windowsDuration",
        type: "uint48",
      },
      {
        internalType: "uint256",
        name: "_pairIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_windowId",
        type: "uint256",
      },
    ],
    name: "getOiWindow",
    outputs: [
      {
        components: [
          {
            internalType: "uint128",
            name: "oiLongUsd",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "oiShortUsd",
            type: "uint128",
          },
        ],
        internalType: "struct IPriceImpactUtils.PairOi",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint48",
        name: "_windowsDuration",
        type: "uint48",
      },
      {
        internalType: "uint256",
        name: "_pairIndex",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "_windowIds",
        type: "uint256[]",
      },
    ],
    name: "getOiWindows",
    outputs: [
      {
        components: [
          {
            internalType: "uint128",
            name: "oiLongUsd",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "oiShortUsd",
            type: "uint128",
          },
        ],
        internalType: "struct IPriceImpactUtils.PairOi[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getOiWindowsSettings",
    outputs: [
      {
        components: [
          {
            internalType: "uint48",
            name: "startTs",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "windowsDuration",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "windowsCount",
            type: "uint48",
          },
        ],
        internalType: "struct IPriceImpactUtils.OiWindowsSettings",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pairIndex",
        type: "uint256",
      },
    ],
    name: "getPairDepth",
    outputs: [
      {
        components: [
          {
            internalType: "uint128",
            name: "onePercentDepthAboveUsd",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "onePercentDepthBelowUsd",
            type: "uint128",
          },
        ],
        internalType: "struct IPriceImpactUtils.PairDepth",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_indices",
        type: "uint256[]",
      },
    ],
    name: "getPairDepths",
    outputs: [
      {
        components: [
          {
            internalType: "uint128",
            name: "onePercentDepthAboveUsd",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "onePercentDepthBelowUsd",
            type: "uint128",
          },
        ],
        internalType: "struct IPriceImpactUtils.PairDepth[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pairIndex",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_long",
        type: "bool",
      },
    ],
    name: "getPriceImpactOi",
    outputs: [
      {
        internalType: "uint256",
        name: "activeOi",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getReferralsAllyFeeP",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getReferralsOpenFeeP",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_trader",
        type: "address",
      },
    ],
    name: "getReferralsPercentOfOpenFeeP",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_volumeReferredUsd",
        type: "uint256",
      },
    ],
    name: "getReferralsPercentOfOpenFeeP_calc",
    outputs: [
      {
        internalType: "uint256",
        name: "resultP",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getReferralsStartReferrerFeeP",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getReferralsTargetVolumeUsd",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_trader",
        type: "address",
      },
    ],
    name: "getReferrerByTrader",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_referrer",
        type: "address",
      },
    ],
    name: "getReferrerDetails",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "ally",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "tradersReferred",
            type: "address[]",
          },
          {
            internalType: "uint256",
            name: "volumeReferredUsd",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "pendingRewardsToken",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalRewardsToken",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalRewardsValueUsd",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool",
          },
        ],
        internalType: "struct IReferralsUtils.ReferrerDetails",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pairOpenFeeP",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_volumeReferredUsd",
        type: "uint256",
      },
    ],
    name: "getReferrerFeeP",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_ally",
        type: "address",
      },
    ],
    name: "getReferrersReferred",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_openPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_pairIndex",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_long",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_tradeOpenInterestUsd",
        type: "uint256",
      },
    ],
    name: "getTradePriceImpact",
    outputs: [
      {
        internalType: "uint256",
        name: "priceImpactP",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "priceAfterImpact",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_trader",
        type: "address",
      },
    ],
    name: "getTraderReferrer",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_referred",
        type: "address",
      },
    ],
    name: "getTradersReferred",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "groups",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "bytes32",
            name: "job",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "minLeverage",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxLeverage",
            type: "uint256",
          },
        ],
        internalType: "struct IPairsStorageUtils.Group",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "groupsCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "enum IAddressStoreUtils.Role",
        name: "_role",
        type: "uint8",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_rolesManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_tizz",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_groupIndices",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_groupVolumeMultipliers",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_feeTiersIndices",
        type: "uint256[]",
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "feeMultiplier",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "pointsThreshold",
            type: "uint32",
          },
        ],
        internalType: "struct IFeeTiersUtils.FeeTier[]",
        name: "_feeTiers",
        type: "tuple[]",
      },
    ],
    name: "initializeFeeTiers",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_currentOrderId",
        type: "uint256",
      },
    ],
    name: "initializePairsStorage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint48",
        name: "_windowsDuration",
        type: "uint48",
      },
      {
        internalType: "uint48",
        name: "_windowsCount",
        type: "uint48",
      },
    ],
    name: "initializePriceImpact",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_allyFeeP",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_startReferrerFeeP",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_openFeeP",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_targetVolumeUsd",
        type: "uint256",
      },
    ],
    name: "initializeReferrals",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_from",
        type: "string",
      },
      {
        internalType: "string",
        name: "_to",
        type: "string",
      },
    ],
    name: "isPairListed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pairIndex",
        type: "uint256",
      },
    ],
    name: "pairCloseFeeP",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pairIndex",
        type: "uint256",
      },
    ],
    name: "pairCustomMaxLeverage",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pairIndex",
        type: "uint256",
      },
    ],
    name: "pairFeed",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "feed1",
            type: "address",
          },
          {
            internalType: "address",
            name: "feed2",
            type: "address",
          },
          {
            internalType: "enum IPairsStorageUtils.FeedCalculation",
            name: "feedCalculation",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "maxDeviationP",
            type: "uint256",
          },
        ],
        internalType: "struct IPairsStorageUtils.Feed",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pairIndex",
        type: "uint256",
      },
    ],
    name: "pairIdByJob",
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
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pairIndex",
        type: "uint256",
      },
    ],
    name: "pairJob",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pairIndex",
        type: "uint256",
      },
    ],
    name: "pairMaxLeverage",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pairIndex",
        type: "uint256",
      },
    ],
    name: "pairMinLevPosUsd",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pairIndex",
        type: "uint256",
      },
    ],
    name: "pairMinLeverage",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pairIndex",
        type: "uint256",
      },
    ],
    name: "pairNftLimitOrderFeeP",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pairIndex",
        type: "uint256",
      },
    ],
    name: "pairOpenFeeP",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pairIndex",
        type: "uint256",
      },
    ],
    name: "pairOracleFeeP",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pairIndex",
        type: "uint256",
      },
    ],
    name: "pairSpreadP",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "pairs",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "from",
            type: "string",
          },
          {
            internalType: "string",
            name: "to",
            type: "string",
          },
          {
            components: [
              {
                internalType: "address",
                name: "feed1",
                type: "address",
              },
              {
                internalType: "address",
                name: "feed2",
                type: "address",
              },
              {
                internalType: "enum IPairsStorageUtils.FeedCalculation",
                name: "feedCalculation",
                type: "uint8",
              },
              {
                internalType: "uint256",
                name: "maxDeviationP",
                type: "uint256",
              },
            ],
            internalType: "struct IPairsStorageUtils.Feed",
            name: "feed",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "spreadP",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "groupIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "feeIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "pairId",
            type: "uint256",
          },
        ],
        internalType: "struct IPairsStorageUtils.Pair",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "pairsBackend",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "from",
            type: "string",
          },
          {
            internalType: "string",
            name: "to",
            type: "string",
          },
          {
            components: [
              {
                internalType: "address",
                name: "feed1",
                type: "address",
              },
              {
                internalType: "address",
                name: "feed2",
                type: "address",
              },
              {
                internalType: "enum IPairsStorageUtils.FeedCalculation",
                name: "feedCalculation",
                type: "uint8",
              },
              {
                internalType: "uint256",
                name: "maxDeviationP",
                type: "uint256",
              },
            ],
            internalType: "struct IPairsStorageUtils.Feed",
            name: "feed",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "spreadP",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "groupIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "feeIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "pairId",
            type: "uint256",
          },
        ],
        internalType: "struct IPairsStorageUtils.Pair",
        name: "",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "bytes32",
            name: "job",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "minLeverage",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxLeverage",
            type: "uint256",
          },
        ],
        internalType: "struct IPairsStorageUtils.Group",
        name: "",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "openFeeP",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "closeFeeP",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "oracleFeeP",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "nftLimitOrderFeeP",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minLevPosUsd",
            type: "uint256",
          },
        ],
        internalType: "struct IPairsStorageUtils.Fee",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pairsCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_trader",
        type: "address",
      },
      {
        internalType: "address",
        name: "_referrer",
        type: "address",
      },
    ],
    name: "registerPotentialReferrer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_openInterestUsd",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_pairIndex",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_long",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_addTs",
        type: "uint256",
      },
    ],
    name: "removePriceImpactOpenInterest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_feeTiersIndices",
        type: "uint256[]",
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "feeMultiplier",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "pointsThreshold",
            type: "uint32",
          },
        ],
        internalType: "struct IFeeTiersUtils.FeeTier[]",
        name: "_feeTiers",
        type: "tuple[]",
      },
    ],
    name: "setFeeTiers",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_groupIndices",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_groupVolumeMultipliers",
        type: "uint256[]",
      },
    ],
    name: "setGroupVolumeMultipliers",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_indices",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_values",
        type: "uint256[]",
      },
    ],
    name: "setPairCustomMaxLeverages",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_indices",
        type: "uint256[]",
      },
      {
        internalType: "uint128[]",
        name: "_depthsAboveUsd",
        type: "uint128[]",
      },
      {
        internalType: "uint128[]",
        name: "_depthsBelowUsd",
        type: "uint128[]",
      },
    ],
    name: "setPairDepths",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint48",
        name: "_newWindowsCount",
        type: "uint48",
      },
    ],
    name: "setPriceImpactWindowsCount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint48",
        name: "_newWindowsDuration",
        type: "uint48",
      },
    ],
    name: "setPriceImpactWindowsDuration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_accounts",
        type: "address[]",
      },
      {
        internalType: "enum IAddressStoreUtils.Role[]",
        name: "_roles",
        type: "uint8[]",
      },
      {
        internalType: "bool[]",
        name: "_values",
        type: "bool[]",
      },
    ],
    name: "setRoles",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_allies",
        type: "address[]",
      },
    ],
    name: "unwhitelistAllies",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_referrers",
        type: "address[]",
      },
    ],
    name: "unwhitelistReferrers",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "updateAllyFeeP",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "openFeeP",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "closeFeeP",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "oracleFeeP",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "nftLimitOrderFeeP",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minLevPosUsd",
            type: "uint256",
          },
        ],
        internalType: "struct IPairsStorageUtils.Fee[]",
        name: "_fees",
        type: "tuple[]",
      },
    ],
    name: "updateFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "bytes32",
            name: "job",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "minLeverage",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxLeverage",
            type: "uint256",
          },
        ],
        internalType: "struct IPairsStorageUtils.Group[]",
        name: "_groups",
        type: "tuple[]",
      },
    ],
    name: "updateGroups",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "updateOpenFeeP",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_pairIndices",
        type: "uint256[]",
      },
      {
        components: [
          {
            internalType: "string",
            name: "from",
            type: "string",
          },
          {
            internalType: "string",
            name: "to",
            type: "string",
          },
          {
            components: [
              {
                internalType: "address",
                name: "feed1",
                type: "address",
              },
              {
                internalType: "address",
                name: "feed2",
                type: "address",
              },
              {
                internalType: "enum IPairsStorageUtils.FeedCalculation",
                name: "feedCalculation",
                type: "uint8",
              },
              {
                internalType: "uint256",
                name: "maxDeviationP",
                type: "uint256",
              },
            ],
            internalType: "struct IPairsStorageUtils.Feed",
            name: "feed",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "spreadP",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "groupIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "feeIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "pairId",
            type: "uint256",
          },
        ],
        internalType: "struct IPairsStorageUtils.Pair[]",
        name: "_pairs",
        type: "tuple[]",
      },
    ],
    name: "updatePairs",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "updateStartReferrerFeeP",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "updateTargetVolumeUsd",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_trader",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_volumeUsd",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_pairIndex",
        type: "uint256",
      },
    ],
    name: "updateTraderPoints",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_allies",
        type: "address[]",
      },
    ],
    name: "whitelistAllies",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_referrers",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "_allies",
        type: "address[]",
      },
    ],
    name: "whitelistReferrers",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;
