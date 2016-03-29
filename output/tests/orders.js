if(tests["Response Code " + responseCode.code ] = responseCode.code === 200){
  try{
    var data = JSON.parse(responseBody);
    var compiledSchema = {
  "type": "array",
  "items": {
    "type": "object",
    "description": "An order of beer and or merchandise.",
    "properties": {
      "orderID": {
        "type": "string",
        "description": "A unique identifier for differentiating order objects."
      },
      "placementDate": {
        "type": "string",
        "description": "The date the order was placed.",
        "format": "date-time"
      },
      "isFavorite": {
        "type": "boolean",
        "description": "Indicates if the user has favorited this order or not."
      },
      "isPayableOnline": {
        "type": "boolean",
        "description": "Indicates whether the order may interact with a backend payment resolution system or not."
      },
      "name": {
        "type": "string",
        "description": "A name the user has assigned to this order."
      },
      "note": {
        "type": "string",
        "description": "A note the user has added to this order."
      },
      "requestedKegReturn": {
        "type": "boolean",
        "description": "An indicator that the user would like to return kegs."
      },
      "settleState": {
        "enum": [
          "SETTLED",
          "IN_PROGRESS",
          "UNSETTLED"
        ],
        "description": "A status used to indicate the overall state of an order."
      },
      "orderState": {
        "type": "string",
        "description": "A status used to indicate the current step at which an order is at."
      },
      "orderProgress": {
        "type": "integer",
        "minimum": 0,
        "maximum": 100,
        "description": "A percentage based number ranging from 0 to 100 indicating the progress of the order and how close to completion it is."
      },
      "invoiceID": {
        "type": "string",
        "description": "An internal invoice id."
      },
      "pricing": {
        "description": "An encapsulation of the pricing details associated with this order.",
        "type": "object",
        "properties": {
          "pricingID": {
            "type": "string",
            "description": "A unique identifier for differentiating pricing objects."
          },
          "cost": {
            "type": "number",
            "description": "The final cost of the order after taxes, charges, and discounts have been applied."
          },
          "taxAmount": {
            "type": "number",
            "description": "The total tax charged to the order."
          },
          "chargeAmount": {
            "type": "number",
            "description": "The total cost of charges to the order, excluding tax."
          },
          "discountAmount": {
            "type": "number",
            "description": "The total value of the discounts applied to the order."
          },
          "grossSalesAmount": {
            "type": "number",
            "description": "The total cost of the order, excluding deposits, taxes, and other charges."
          },
          "depositAmount": {
            "type": "number",
            "description": "The cost of deposits paid when purchasing cans, bottles, and kegs."
          },
          "deliveryCost": {
            "type": "number",
            "description": "The fee associated with delivery."
          },
          "salesQuantity": {
            "type": "integer",
            "description": "The number of items purchased."
          },
          "discounts": {
            "type": "array",
            "items": {
              "type": "object",
              "oneOf": [
                {
                  "properties": {
                    "earnLevelType": {
                      "enum": [
                        "D"
                      ],
                      "type": "string",
                      "description": "Specifies this discount is earned by truck dollar value"
                    },
                    "earnLevelAmount": {
                      "type": "number",
                      "description": "The amount that must be spent to earn a discount"
                    },
                    "discountType": {
                      "enum": [
                        "AO"
                      ],
                      "type": "string",
                      "description": "Specifies this is an Amount Off discount"
                    },
                    "amountOff": {
                      "type": "number",
                      "minimum": 0,
                      "description": "Amount taken off the price of a single item. Test: value should not exceed price of item."
                    },
                    "discountID": {
                      "type": "string",
                      "description": "A unique identifier used to differentiate between discount objects."
                    },
                    "itemIDs": {
                      "type": "array",
                      "description": "An array of itemIDs that describe which items this discount is associated with."
                    },
                    "startDate": {
                      "type": "string",
                      "format": "date-time"
                    },
                    "endDate": {
                      "type": "string",
                      "format": "date-time"
                    },
                    "discountAmount": {
                      "type": "number",
                      "description": "The total value of the discount."
                    },
                    "discountDescription": {
                      "type": "string",
                      "description": "The description of the discount which may be displayed to the user."
                    }
                  }
                },
                {
                  "properties": {
                    "earnLevelType": {
                      "description": "Specifies this discount is earned by truck item quantity",
                      "enum": [
                        "Q"
                      ]
                    },
                    "earnLevelQuantity": {
                      "type": "integer",
                      "description": "The number of items that must be purchased to earn a discount"
                    },
                    "discountType": {
                      "enum": [
                        "AO"
                      ],
                      "type": "string",
                      "description": "Specifies this is an Amount Off discount"
                    },
                    "amountOff": {
                      "type": "number",
                      "minimum": 0,
                      "description": "Amount taken off the price of a single item. Test: value should not exceed price of item."
                    },
                    "discountID": {
                      "type": "string",
                      "description": "A unique identifier used to differentiate between discount objects."
                    },
                    "itemIDs": {
                      "type": "array",
                      "description": "An array of itemIDs that describe which items this discount is associated with."
                    },
                    "startDate": {
                      "type": "string",
                      "format": "date-time"
                    },
                    "endDate": {
                      "type": "string",
                      "format": "date-time"
                    },
                    "discountAmount": {
                      "type": "number",
                      "description": "The total value of the discount."
                    },
                    "discountDescription": {
                      "type": "string",
                      "description": "The description of the discount which may be displayed to the user."
                    }
                  }
                },
                {
                  "properties": {
                    "earnLevelType": {
                      "enum": [
                        "NA"
                      ],
                      "type": "string",
                      "description": "Specifies this discount has no qualifications the user must meet in order to apply the discount"
                    },
                    "discountType": {
                      "enum": [
                        "AO"
                      ],
                      "type": "string",
                      "description": "Specifies this is an Amount Off discount"
                    },
                    "amountOff": {
                      "type": "number",
                      "minimum": 0,
                      "description": "Amount taken off the price of a single item. Test: value should not exceed price of item."
                    },
                    "discountID": {
                      "type": "string",
                      "description": "A unique identifier used to differentiate between discount objects."
                    },
                    "itemIDs": {
                      "type": "array",
                      "description": "An array of itemIDs that describe which items this discount is associated with."
                    },
                    "startDate": {
                      "type": "string",
                      "format": "date-time"
                    },
                    "endDate": {
                      "type": "string",
                      "format": "date-time"
                    },
                    "discountAmount": {
                      "type": "number",
                      "description": "The total value of the discount."
                    },
                    "discountDescription": {
                      "type": "string",
                      "description": "The description of the discount which may be displayed to the user."
                    }
                  }
                },
                {
                  "properties": {
                    "earnLevelType": {
                      "enum": [
                        "D"
                      ],
                      "type": "string",
                      "description": "Specifies this discount is earned by truck dollar value"
                    },
                    "earnLevelAmount": {
                      "type": "number",
                      "description": "The amount that must be spent to earn a discount"
                    },
                    "discountType": {
                      "enum": [
                        "PF"
                      ],
                      "type": "string",
                      "description": "Specifies this is an Percent Off discount"
                    },
                    "percentOff": {
                      "type": "integer",
                      "minimum": 0,
                      "maximum": 100,
                      "description": "Percentage taken off the price of a single item"
                    },
                    "discountID": {
                      "type": "string",
                      "description": "A unique identifier used to differentiate between discount objects."
                    },
                    "itemIDs": {
                      "type": "array",
                      "description": "An array of itemIDs that describe which items this discount is associated with."
                    },
                    "startDate": {
                      "type": "string",
                      "format": "date-time"
                    },
                    "endDate": {
                      "type": "string",
                      "format": "date-time"
                    },
                    "discountAmount": {
                      "type": "number",
                      "description": "The total value of the discount."
                    },
                    "discountDescription": {
                      "type": "string",
                      "description": "The description of the discount which may be displayed to the user."
                    }
                  }
                },
                {
                  "properties": {
                    "earnLevelType": {
                      "description": "Specifies this discount is earned by truck item quantity",
                      "enum": [
                        "Q"
                      ]
                    },
                    "earnLevelQuantity": {
                      "type": "integer",
                      "description": "The number of items that must be purchased to earn a discount"
                    },
                    "discountType": {
                      "enum": [
                        "PF"
                      ],
                      "type": "string",
                      "description": "Specifies this is an Percent Off discount"
                    },
                    "percentOff": {
                      "type": "integer",
                      "minimum": 0,
                      "maximum": 100,
                      "description": "Percentage taken off the price of a single item"
                    },
                    "discountID": {
                      "type": "string",
                      "description": "A unique identifier used to differentiate between discount objects."
                    },
                    "itemIDs": {
                      "type": "array",
                      "description": "An array of itemIDs that describe which items this discount is associated with."
                    },
                    "startDate": {
                      "type": "string",
                      "format": "date-time"
                    },
                    "endDate": {
                      "type": "string",
                      "format": "date-time"
                    },
                    "discountAmount": {
                      "type": "number",
                      "description": "The total value of the discount."
                    },
                    "discountDescription": {
                      "type": "string",
                      "description": "The description of the discount which may be displayed to the user."
                    }
                  }
                },
                {
                  "properties": {
                    "earnLevelType": {
                      "enum": [
                        "NA"
                      ],
                      "type": "string",
                      "description": "Specifies this discount has no qualifications the user must meet in order to apply the discount"
                    },
                    "discountType": {
                      "enum": [
                        "PF"
                      ],
                      "type": "string",
                      "description": "Specifies this is an Percent Off discount"
                    },
                    "percentOff": {
                      "type": "integer",
                      "minimum": 0,
                      "maximum": 100,
                      "description": "Percentage taken off the price of a single item"
                    },
                    "discountID": {
                      "type": "string",
                      "description": "A unique identifier used to differentiate between discount objects."
                    },
                    "itemIDs": {
                      "type": "array",
                      "description": "An array of itemIDs that describe which items this discount is associated with."
                    },
                    "startDate": {
                      "type": "string",
                      "format": "date-time"
                    },
                    "endDate": {
                      "type": "string",
                      "format": "date-time"
                    },
                    "discountAmount": {
                      "type": "number",
                      "description": "The total value of the discount."
                    },
                    "discountDescription": {
                      "type": "string",
                      "description": "The description of the discount which may be displayed to the user."
                    }
                  }
                },
                {
                  "properties": {
                    "earnLevelType": {
                      "enum": [
                        "D"
                      ],
                      "type": "string",
                      "description": "Specifies this discount is earned by truck dollar value"
                    },
                    "earnLevelAmount": {
                      "type": "number",
                      "description": "The amount that must be spent to earn a discount"
                    },
                    "discountType": {
                      "enum": [
                        "CF"
                      ],
                      "type": "string",
                      "description": "Specifies this is a Credit Free discount"
                    },
                    "earnedItem": {
                      "description": "The item earned by a CF type discount",
                      "type": "object",
                      "properties": {
                        "itemID": {
                          "type": "string",
                          "description": "A unique identifier for differentiating item objects."
                        },
                        "brandID": {
                          "type": "string",
                          "description": "The item's parent brand."
                        },
                        "brandName": {
                          "type": "string",
                          "description": "The name of the item's parent brand."
                        },
                        "inventoryCount": {
                          "type": "integer",
                          "description": "The number of items currently in stock. Specify 0 for out of stock or unavailable items and -1 for unknown."
                        },
                        "name": {
                          "type": "string",
                          "description": "A name for the item displayable to the user."
                        },
                        "popularityRating": {
                          "type": "number",
                          "description": "An arbitrary float representing how popular this item is. Items with greater popularityRatings will sort to the top by default."
                        }
                      },
                      "required": [
                        "itemID",
                        "brandID",
                        "name",
                        "brandName",
                        "inventoryCount"
                      ]
                    },
                    "discountID": {
                      "type": "string",
                      "description": "A unique identifier used to differentiate between discount objects."
                    },
                    "itemIDs": {
                      "type": "array",
                      "description": "An array of itemIDs that describe which items this discount is associated with."
                    },
                    "startDate": {
                      "type": "string",
                      "format": "date-time"
                    },
                    "endDate": {
                      "type": "string",
                      "format": "date-time"
                    },
                    "discountAmount": {
                      "type": "number",
                      "description": "The total value of the discount."
                    },
                    "discountDescription": {
                      "type": "string",
                      "description": "The description of the discount which may be displayed to the user."
                    }
                  }
                },
                {
                  "properties": {
                    "earnLevelType": {
                      "description": "Specifies this discount is earned by truck item quantity",
                      "enum": [
                        "Q"
                      ]
                    },
                    "earnLevelQuantity": {
                      "type": "integer",
                      "description": "The number of items that must be purchased to earn a discount"
                    },
                    "discountType": {
                      "enum": [
                        "CF"
                      ],
                      "type": "string",
                      "description": "Specifies this is a Credit Free discount"
                    },
                    "earnedItem": {
                      "description": "The item earned by a CF type discount",
                      "type": "object",
                      "properties": {
                        "itemID": {
                          "type": "string",
                          "description": "A unique identifier for differentiating item objects."
                        },
                        "brandID": {
                          "type": "string",
                          "description": "The item's parent brand."
                        },
                        "brandName": {
                          "type": "string",
                          "description": "The name of the item's parent brand."
                        },
                        "inventoryCount": {
                          "type": "integer",
                          "description": "The number of items currently in stock. Specify 0 for out of stock or unavailable items and -1 for unknown."
                        },
                        "name": {
                          "type": "string",
                          "description": "A name for the item displayable to the user."
                        },
                        "popularityRating": {
                          "type": "number",
                          "description": "An arbitrary float representing how popular this item is. Items with greater popularityRatings will sort to the top by default."
                        }
                      },
                      "required": [
                        "itemID",
                        "brandID",
                        "name",
                        "brandName",
                        "inventoryCount"
                      ]
                    },
                    "discountID": {
                      "type": "string",
                      "description": "A unique identifier used to differentiate between discount objects."
                    },
                    "itemIDs": {
                      "type": "array",
                      "description": "An array of itemIDs that describe which items this discount is associated with."
                    },
                    "startDate": {
                      "type": "string",
                      "format": "date-time"
                    },
                    "endDate": {
                      "type": "string",
                      "format": "date-time"
                    },
                    "discountAmount": {
                      "type": "number",
                      "description": "The total value of the discount."
                    },
                    "discountDescription": {
                      "type": "string",
                      "description": "The description of the discount which may be displayed to the user."
                    }
                  }
                },
                {
                  "properties": {
                    "earnLevelType": {
                      "enum": [
                        "NA"
                      ],
                      "type": "string",
                      "description": "Specifies this discount has no qualifications the user must meet in order to apply the discount"
                    },
                    "discountType": {
                      "enum": [
                        "CF"
                      ],
                      "type": "string",
                      "description": "Specifies this is a Credit Free discount"
                    },
                    "earnedItem": {
                      "description": "The item earned by a CF type discount",
                      "type": "object",
                      "properties": {
                        "itemID": {
                          "type": "string",
                          "description": "A unique identifier for differentiating item objects."
                        },
                        "brandID": {
                          "type": "string",
                          "description": "The item's parent brand."
                        },
                        "brandName": {
                          "type": "string",
                          "description": "The name of the item's parent brand."
                        },
                        "inventoryCount": {
                          "type": "integer",
                          "description": "The number of items currently in stock. Specify 0 for out of stock or unavailable items and -1 for unknown."
                        },
                        "name": {
                          "type": "string",
                          "description": "A name for the item displayable to the user."
                        },
                        "popularityRating": {
                          "type": "number",
                          "description": "An arbitrary float representing how popular this item is. Items with greater popularityRatings will sort to the top by default."
                        }
                      },
                      "required": [
                        "itemID",
                        "brandID",
                        "name",
                        "brandName",
                        "inventoryCount"
                      ]
                    },
                    "discountID": {
                      "type": "string",
                      "description": "A unique identifier used to differentiate between discount objects."
                    },
                    "itemIDs": {
                      "type": "array",
                      "description": "An array of itemIDs that describe which items this discount is associated with."
                    },
                    "startDate": {
                      "type": "string",
                      "format": "date-time"
                    },
                    "endDate": {
                      "type": "string",
                      "format": "date-time"
                    },
                    "discountAmount": {
                      "type": "number",
                      "description": "The total value of the discount."
                    },
                    "discountDescription": {
                      "type": "string",
                      "description": "The description of the discount which may be displayed to the user."
                    }
                  }
                }
              ]
            }
          },
          "orderItems": {
            "type": "array",
            "items": {
              "type": "object",
              "description": "An encapsulation of a product and a quantity ordered",
              "properties": {
                "itemID": {
                  "type": "string",
                  "description": "The ID of the associated item. Note, either item or itemID is required."
                },
                "item": {
                  "description": "The associated item. Note, either item or itemID is required.",
                  "type": "object",
                  "properties": {
                    "price": {
                      "type": "object",
                      "description": "Details of an item's price",
                      "properties": {
                        "discounts": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "oneOf": [
                              {
                                "properties": {
                                  "earnLevelType": {
                                    "enum": [
                                      "D"
                                    ],
                                    "type": "string",
                                    "description": "Specifies this discount is earned by truck dollar value"
                                  },
                                  "earnLevelAmount": {
                                    "type": "number",
                                    "description": "The amount that must be spent to earn a discount"
                                  },
                                  "discountType": {
                                    "enum": [
                                      "AO"
                                    ],
                                    "type": "string",
                                    "description": "Specifies this is an Amount Off discount"
                                  },
                                  "amountOff": {
                                    "type": "number",
                                    "minimum": 0,
                                    "description": "Amount taken off the price of a single item. Test: value should not exceed price of item."
                                  },
                                  "discountID": {
                                    "type": "string",
                                    "description": "A unique identifier used to differentiate between discount objects."
                                  },
                                  "itemIDs": {
                                    "type": "array",
                                    "description": "An array of itemIDs that describe which items this discount is associated with."
                                  },
                                  "startDate": {
                                    "type": "string",
                                    "format": "date-time"
                                  },
                                  "endDate": {
                                    "type": "string",
                                    "format": "date-time"
                                  },
                                  "discountAmount": {
                                    "type": "number",
                                    "description": "The total value of the discount."
                                  },
                                  "discountDescription": {
                                    "type": "string",
                                    "description": "The description of the discount which may be displayed to the user."
                                  }
                                }
                              },
                              {
                                "properties": {
                                  "earnLevelType": {
                                    "description": "Specifies this discount is earned by truck item quantity",
                                    "enum": [
                                      "Q"
                                    ]
                                  },
                                  "earnLevelQuantity": {
                                    "type": "integer",
                                    "description": "The number of items that must be purchased to earn a discount"
                                  },
                                  "discountType": {
                                    "enum": [
                                      "AO"
                                    ],
                                    "type": "string",
                                    "description": "Specifies this is an Amount Off discount"
                                  },
                                  "amountOff": {
                                    "type": "number",
                                    "minimum": 0,
                                    "description": "Amount taken off the price of a single item. Test: value should not exceed price of item."
                                  },
                                  "discountID": {
                                    "type": "string",
                                    "description": "A unique identifier used to differentiate between discount objects."
                                  },
                                  "itemIDs": {
                                    "type": "array",
                                    "description": "An array of itemIDs that describe which items this discount is associated with."
                                  },
                                  "startDate": {
                                    "type": "string",
                                    "format": "date-time"
                                  },
                                  "endDate": {
                                    "type": "string",
                                    "format": "date-time"
                                  },
                                  "discountAmount": {
                                    "type": "number",
                                    "description": "The total value of the discount."
                                  },
                                  "discountDescription": {
                                    "type": "string",
                                    "description": "The description of the discount which may be displayed to the user."
                                  }
                                }
                              },
                              {
                                "properties": {
                                  "earnLevelType": {
                                    "enum": [
                                      "NA"
                                    ],
                                    "type": "string",
                                    "description": "Specifies this discount has no qualifications the user must meet in order to apply the discount"
                                  },
                                  "discountType": {
                                    "enum": [
                                      "AO"
                                    ],
                                    "type": "string",
                                    "description": "Specifies this is an Amount Off discount"
                                  },
                                  "amountOff": {
                                    "type": "number",
                                    "minimum": 0,
                                    "description": "Amount taken off the price of a single item. Test: value should not exceed price of item."
                                  },
                                  "discountID": {
                                    "type": "string",
                                    "description": "A unique identifier used to differentiate between discount objects."
                                  },
                                  "itemIDs": {
                                    "type": "array",
                                    "description": "An array of itemIDs that describe which items this discount is associated with."
                                  },
                                  "startDate": {
                                    "type": "string",
                                    "format": "date-time"
                                  },
                                  "endDate": {
                                    "type": "string",
                                    "format": "date-time"
                                  },
                                  "discountAmount": {
                                    "type": "number",
                                    "description": "The total value of the discount."
                                  },
                                  "discountDescription": {
                                    "type": "string",
                                    "description": "The description of the discount which may be displayed to the user."
                                  }
                                }
                              },
                              {
                                "properties": {
                                  "earnLevelType": {
                                    "enum": [
                                      "D"
                                    ],
                                    "type": "string",
                                    "description": "Specifies this discount is earned by truck dollar value"
                                  },
                                  "earnLevelAmount": {
                                    "type": "number",
                                    "description": "The amount that must be spent to earn a discount"
                                  },
                                  "discountType": {
                                    "enum": [
                                      "PF"
                                    ],
                                    "type": "string",
                                    "description": "Specifies this is an Percent Off discount"
                                  },
                                  "percentOff": {
                                    "type": "integer",
                                    "minimum": 0,
                                    "maximum": 100,
                                    "description": "Percentage taken off the price of a single item"
                                  },
                                  "discountID": {
                                    "type": "string",
                                    "description": "A unique identifier used to differentiate between discount objects."
                                  },
                                  "itemIDs": {
                                    "type": "array",
                                    "description": "An array of itemIDs that describe which items this discount is associated with."
                                  },
                                  "startDate": {
                                    "type": "string",
                                    "format": "date-time"
                                  },
                                  "endDate": {
                                    "type": "string",
                                    "format": "date-time"
                                  },
                                  "discountAmount": {
                                    "type": "number",
                                    "description": "The total value of the discount."
                                  },
                                  "discountDescription": {
                                    "type": "string",
                                    "description": "The description of the discount which may be displayed to the user."
                                  }
                                }
                              },
                              {
                                "properties": {
                                  "earnLevelType": {
                                    "description": "Specifies this discount is earned by truck item quantity",
                                    "enum": [
                                      "Q"
                                    ]
                                  },
                                  "earnLevelQuantity": {
                                    "type": "integer",
                                    "description": "The number of items that must be purchased to earn a discount"
                                  },
                                  "discountType": {
                                    "enum": [
                                      "PF"
                                    ],
                                    "type": "string",
                                    "description": "Specifies this is an Percent Off discount"
                                  },
                                  "percentOff": {
                                    "type": "integer",
                                    "minimum": 0,
                                    "maximum": 100,
                                    "description": "Percentage taken off the price of a single item"
                                  },
                                  "discountID": {
                                    "type": "string",
                                    "description": "A unique identifier used to differentiate between discount objects."
                                  },
                                  "itemIDs": {
                                    "type": "array",
                                    "description": "An array of itemIDs that describe which items this discount is associated with."
                                  },
                                  "startDate": {
                                    "type": "string",
                                    "format": "date-time"
                                  },
                                  "endDate": {
                                    "type": "string",
                                    "format": "date-time"
                                  },
                                  "discountAmount": {
                                    "type": "number",
                                    "description": "The total value of the discount."
                                  },
                                  "discountDescription": {
                                    "type": "string",
                                    "description": "The description of the discount which may be displayed to the user."
                                  }
                                }
                              },
                              {
                                "properties": {
                                  "earnLevelType": {
                                    "enum": [
                                      "NA"
                                    ],
                                    "type": "string",
                                    "description": "Specifies this discount has no qualifications the user must meet in order to apply the discount"
                                  },
                                  "discountType": {
                                    "enum": [
                                      "PF"
                                    ],
                                    "type": "string",
                                    "description": "Specifies this is an Percent Off discount"
                                  },
                                  "percentOff": {
                                    "type": "integer",
                                    "minimum": 0,
                                    "maximum": 100,
                                    "description": "Percentage taken off the price of a single item"
                                  },
                                  "discountID": {
                                    "type": "string",
                                    "description": "A unique identifier used to differentiate between discount objects."
                                  },
                                  "itemIDs": {
                                    "type": "array",
                                    "description": "An array of itemIDs that describe which items this discount is associated with."
                                  },
                                  "startDate": {
                                    "type": "string",
                                    "format": "date-time"
                                  },
                                  "endDate": {
                                    "type": "string",
                                    "format": "date-time"
                                  },
                                  "discountAmount": {
                                    "type": "number",
                                    "description": "The total value of the discount."
                                  },
                                  "discountDescription": {
                                    "type": "string",
                                    "description": "The description of the discount which may be displayed to the user."
                                  }
                                }
                              },
                              {
                                "properties": {
                                  "earnLevelType": {
                                    "enum": [
                                      "D"
                                    ],
                                    "type": "string",
                                    "description": "Specifies this discount is earned by truck dollar value"
                                  },
                                  "earnLevelAmount": {
                                    "type": "number",
                                    "description": "The amount that must be spent to earn a discount"
                                  },
                                  "discountType": {
                                    "enum": [
                                      "CF"
                                    ],
                                    "type": "string",
                                    "description": "Specifies this is a Credit Free discount"
                                  },
                                  "earnedItem": {
                                    "description": "The item earned by a CF type discount",
                                    "type": "object",
                                    "properties": {
                                      "itemID": {
                                        "type": "string",
                                        "description": "A unique identifier for differentiating item objects."
                                      },
                                      "brandID": {
                                        "type": "string",
                                        "description": "The item's parent brand."
                                      },
                                      "brandName": {
                                        "type": "string",
                                        "description": "The name of the item's parent brand."
                                      },
                                      "inventoryCount": {
                                        "type": "integer",
                                        "description": "The number of items currently in stock. Specify 0 for out of stock or unavailable items and -1 for unknown."
                                      },
                                      "name": {
                                        "type": "string",
                                        "description": "A name for the item displayable to the user."
                                      },
                                      "popularityRating": {
                                        "type": "number",
                                        "description": "An arbitrary float representing how popular this item is. Items with greater popularityRatings will sort to the top by default."
                                      }
                                    },
                                    "required": [
                                      "itemID",
                                      "brandID",
                                      "name",
                                      "brandName",
                                      "inventoryCount"
                                    ]
                                  },
                                  "discountID": {
                                    "type": "string",
                                    "description": "A unique identifier used to differentiate between discount objects."
                                  },
                                  "itemIDs": {
                                    "type": "array",
                                    "description": "An array of itemIDs that describe which items this discount is associated with."
                                  },
                                  "startDate": {
                                    "type": "string",
                                    "format": "date-time"
                                  },
                                  "endDate": {
                                    "type": "string",
                                    "format": "date-time"
                                  },
                                  "discountAmount": {
                                    "type": "number",
                                    "description": "The total value of the discount."
                                  },
                                  "discountDescription": {
                                    "type": "string",
                                    "description": "The description of the discount which may be displayed to the user."
                                  }
                                }
                              },
                              {
                                "properties": {
                                  "earnLevelType": {
                                    "description": "Specifies this discount is earned by truck item quantity",
                                    "enum": [
                                      "Q"
                                    ]
                                  },
                                  "earnLevelQuantity": {
                                    "type": "integer",
                                    "description": "The number of items that must be purchased to earn a discount"
                                  },
                                  "discountType": {
                                    "enum": [
                                      "CF"
                                    ],
                                    "type": "string",
                                    "description": "Specifies this is a Credit Free discount"
                                  },
                                  "earnedItem": {
                                    "description": "The item earned by a CF type discount",
                                    "type": "object",
                                    "properties": {
                                      "itemID": {
                                        "type": "string",
                                        "description": "A unique identifier for differentiating item objects."
                                      },
                                      "brandID": {
                                        "type": "string",
                                        "description": "The item's parent brand."
                                      },
                                      "brandName": {
                                        "type": "string",
                                        "description": "The name of the item's parent brand."
                                      },
                                      "inventoryCount": {
                                        "type": "integer",
                                        "description": "The number of items currently in stock. Specify 0 for out of stock or unavailable items and -1 for unknown."
                                      },
                                      "name": {
                                        "type": "string",
                                        "description": "A name for the item displayable to the user."
                                      },
                                      "popularityRating": {
                                        "type": "number",
                                        "description": "An arbitrary float representing how popular this item is. Items with greater popularityRatings will sort to the top by default."
                                      }
                                    },
                                    "required": [
                                      "itemID",
                                      "brandID",
                                      "name",
                                      "brandName",
                                      "inventoryCount"
                                    ]
                                  },
                                  "discountID": {
                                    "type": "string",
                                    "description": "A unique identifier used to differentiate between discount objects."
                                  },
                                  "itemIDs": {
                                    "type": "array",
                                    "description": "An array of itemIDs that describe which items this discount is associated with."
                                  },
                                  "startDate": {
                                    "type": "string",
                                    "format": "date-time"
                                  },
                                  "endDate": {
                                    "type": "string",
                                    "format": "date-time"
                                  },
                                  "discountAmount": {
                                    "type": "number",
                                    "description": "The total value of the discount."
                                  },
                                  "discountDescription": {
                                    "type": "string",
                                    "description": "The description of the discount which may be displayed to the user."
                                  }
                                }
                              },
                              {
                                "properties": {
                                  "earnLevelType": {
                                    "enum": [
                                      "NA"
                                    ],
                                    "type": "string",
                                    "description": "Specifies this discount has no qualifications the user must meet in order to apply the discount"
                                  },
                                  "discountType": {
                                    "enum": [
                                      "CF"
                                    ],
                                    "type": "string",
                                    "description": "Specifies this is a Credit Free discount"
                                  },
                                  "earnedItem": {
                                    "description": "The item earned by a CF type discount",
                                    "type": "object",
                                    "properties": {
                                      "itemID": {
                                        "type": "string",
                                        "description": "A unique identifier for differentiating item objects."
                                      },
                                      "brandID": {
                                        "type": "string",
                                        "description": "The item's parent brand."
                                      },
                                      "brandName": {
                                        "type": "string",
                                        "description": "The name of the item's parent brand."
                                      },
                                      "inventoryCount": {
                                        "type": "integer",
                                        "description": "The number of items currently in stock. Specify 0 for out of stock or unavailable items and -1 for unknown."
                                      },
                                      "name": {
                                        "type": "string",
                                        "description": "A name for the item displayable to the user."
                                      },
                                      "popularityRating": {
                                        "type": "number",
                                        "description": "An arbitrary float representing how popular this item is. Items with greater popularityRatings will sort to the top by default."
                                      }
                                    },
                                    "required": [
                                      "itemID",
                                      "brandID",
                                      "name",
                                      "brandName",
                                      "inventoryCount"
                                    ]
                                  },
                                  "discountID": {
                                    "type": "string",
                                    "description": "A unique identifier used to differentiate between discount objects."
                                  },
                                  "itemIDs": {
                                    "type": "array",
                                    "description": "An array of itemIDs that describe which items this discount is associated with."
                                  },
                                  "startDate": {
                                    "type": "string",
                                    "format": "date-time"
                                  },
                                  "endDate": {
                                    "type": "string",
                                    "format": "date-time"
                                  },
                                  "discountAmount": {
                                    "type": "number",
                                    "description": "The total value of the discount."
                                  },
                                  "discountDescription": {
                                    "type": "string",
                                    "description": "The description of the discount which may be displayed to the user."
                                  }
                                }
                              }
                            ]
                          }
                        },
                        "priceID": {
                          "type": "string",
                          "description": "A unique identifier for differentiating price objects"
                        },
                        "suggestedRetailPrice": {
                          "type": "string",
                          "description": "The price advised for the item."
                        },
                        "unitPrice": {
                          "type": "number",
                          "description": "The top-line price for the item."
                        },
                        "startDate": {
                          "type": "string",
                          "description": "The effective starting date of the price.",
                          "format": "date-time"
                        },
                        "endDate": {
                          "type": "string",
                          "description": "The date this price will expire.",
                          "format": "date-time"
                        }
                      },
                      "required": [
                        "priceID",
                        "unitPrice"
                      ]
                    },
                    "package": {
                      "type": "object",
                      "description": "A description of a beverage container. For instance, four six-packs of 12oz bottles.",
                      "properties": {
                        "packageID": {
                          "type": "string",
                          "description": "A unique ID used to differentiate package objects"
                        },
                        "name": {
                          "type": "string"
                        },
                        "imageURL": {
                          "type": "string"
                        },
                        "itemCount": {
                          "type": "integer",
                          "description": "The number of bottles/cans/kegs in a single container. If a package contains 2 6-packs, 6."
                        },
                        "itemSize": {
                          "type": "number",
                          "description": "The volume of a single keg, bottle, or can in a package."
                        },
                        "returnable": {
                          "type": "boolean",
                          "description": "Marks whether the package may be returned or not."
                        },
                        "unitCount": {
                          "type": "number",
                          "description": "The number of containers in a package. If a package contains 2 6-packs, 2."
                        },
                        "unitOfMeasurement": {
                          "type": "string",
                          "enum": [
                            "OZ",
                            "oz",
                            "l",
                            "L",
                            "mL",
                            "ML",
                            "cc",
                            "CC"
                          ]
                        },
                        "containerName": {
                          "type": "string",
                          "description": "Keg, Bottle, Can, etc."
                        },
                        "caseEquivalency": {
                          "type": "number",
                          "description": "The number of cases the package equates to."
                        },
                        "adjustedCaseEquivalency": {
                          "type": "number",
                          "description": "The value used to determine this packages contribution to achieving the order minimum. This property may be used to increase or reduce the effect of adding a given package to an order."
                        }
                      },
                      "required": [
                        "packageID",
                        "name",
                        "itemCount",
                        "itemSize",
                        "unitCount",
                        "unitOfMeasurement",
                        "containerName"
                      ]
                    },
                    "itemID": {
                      "type": "string",
                      "description": "A unique identifier for differentiating item objects."
                    },
                    "brandID": {
                      "type": "string",
                      "description": "The item's parent brand."
                    },
                    "brandName": {
                      "type": "string",
                      "description": "The name of the item's parent brand."
                    },
                    "inventoryCount": {
                      "type": "integer",
                      "description": "The number of items currently in stock. Specify 0 for out of stock or unavailable items and -1 for unknown."
                    },
                    "name": {
                      "type": "string",
                      "description": "A name for the item displayable to the user."
                    },
                    "popularityRating": {
                      "type": "number",
                      "description": "An arbitrary float representing how popular this item is. Items with greater popularityRatings will sort to the top by default."
                    }
                  },
                  "required": [
                    "itemID",
                    "brandID",
                    "name",
                    "brandName",
                    "inventoryCount",
                    "package",
                    "price"
                  ]
                },
                "orderItemID": {
                  "type": "string",
                  "description": "A unique identifier to differentiate orderItem objects"
                },
                "cost": {
                  "type": "number",
                  "description": "The cost of the orderItem."
                },
                "itemCount": {
                  "type": "integer",
                  "description": "The number of items ordered."
                },
                "pricingCondition": {
                  "type": "string",
                  "description": "The condition by which this object was priced."
                },
                "orderability": {
                  "type": "string",
                  "description": "If the item is able to be ordered, value should be ORDERABLE. Otherwise, value should be a displayable reason why the item cannot be ordered."
                }
              },
              "required": [
                "orderItemID",
                "cost",
                "itemCount"
              ],
              "oneOf": [
                {
                  "required": [
                    "item"
                  ]
                },
                {
                  "required": [
                    "itemID"
                  ]
                }
              ]
            }
          }
        },
        "required": [
          "pricingID",
          "cost",
          "taxAmount",
          "discountAmount",
          "discounts",
          "orderItems"
        ]
      }
    },
    "required": [
      "orderID",
      "placementDate",
      "orderState",
      "orderProgress",
      "pricing"
    ]
  },
  "$schema": "http://json-schema.org/draft-04/schema#"
}

    //Quick Validation
    var vr = tv4.validateResult(data, compiledSchema);
    if(vr.valid) {
      tests["Quick Validation"] = vr.valid;
    } else {
      //Multiple Error validation
      var multiple = tv4.validateMultiple(data, compiledSchema);

      multiple.errors.forEach(function (err) {
        tests["Schema Error - Message: " + err.message + ". Open chrome dev tools and rerun test to see error path."] = false;
        //use google chrome dev tools console to inspect error objects
        console.log(err);
      });

      if(multiple.missing.length > 0) {
        multiple.missing.forEach(function(el){
          tests["Referenced schema is not present: " + el.message] = false;
        });
      }
    }
    tests['Empty Array Bypass test'] = JSON.stringify(data).indexOf('[]') === -1;
    tests["Response time is less than 30 seconds"] = responseTime < 30000;

  }catch(e){
    tests[e.message] = false;
  }
}