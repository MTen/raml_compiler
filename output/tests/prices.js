if(tests["Response Code " + responseCode.code ] = responseCode.code === 200){
  try{
    var data = JSON.parse(responseBody);
    var compiledSchema = {
  "type": "array",
  "items": {
    "discounts": {
      "type": "object",
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
    "itemIDs": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
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
      "items": {
        "type": "array",
        "items": {
          "type": "object",
          "description": "A beverage product that may be purchased.",
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
            "inventoryCount",
            "package",
            "price"
          ]
        }
      },
      "itemIDs": {
        "type": "array",
        "items": {
          "type": "string"
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
    ],
    "oneOf": [
      {
        "required": [
          "items"
        ]
      },
      {
        "required": [
          "itemIDs"
        ]
      }
    ]
  },
  "required": [
    "priceID",
    "unitPrice"
  ],
  "oneOf": [
    {
      "required": [
        "itemIDs"
      ]
    }
  ],
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