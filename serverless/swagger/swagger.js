// this file was generated by serverless-auto-swagger
            module.exports = {
  "swagger": "2.0",
  "info": {
    "title": "serverless",
    "version": "1"
  },
  "paths": {
    "/user/get-user": {
      "get": {
        "summary": "getUser",
        "description": "",
        "operationId": "getUser.get./user/get-user",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "header",
            "name": "Authorization",
            "required": true,
            "type": "string",
            "description": "Bearer token; acceessToken"
          }
        ],
        "responses": {
          "200": {
            "description": "Will get user's actual data (user can get only it's data)",
            "schema": {
              "$ref": "#/definitions/UserRes"
            }
          },
          "400": {
            "description": "User data not found; Token is not valid"
          }
        }
      }
    },
    "/auth/register": {
      "post": {
        "summary": "register",
        "description": "",
        "operationId": "register.post./auth/register",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "Body required in the request",
            "required": true,
            "schema": {
              "$ref": "#/definitions/RegisterUserArguments"
            }
          }
        ],
        "responses": {
          "201": {
            "description": "After registration user will receive it's data and both tokens (refresh, access)",
            "schema": {
              "$ref": "#/definitions/AuthResponse"
            }
          },
          "409": {
            "description": "User already exists"
          }
        }
      }
    },
    "/auth/login": {
      "post": {
        "summary": "login",
        "description": "",
        "operationId": "login.post./auth/login",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "Body required in the request",
            "required": true,
            "schema": {
              "$ref": "#/definitions/LoginArguments"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "After login user will receive it's data and both tokens (refresh, access)",
            "schema": {
              "$ref": "#/definitions/AuthResponse"
            }
          },
          "400": {
            "description": "User not found; Email or password is not correct"
          }
        }
      }
    },
    "/auth/logout": {
      "post": {
        "summary": "logout",
        "description": "",
        "operationId": "logout.post./auth/logout",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "header",
            "name": "Cookie",
            "required": true,
            "type": "string",
            "description": "Http only; Bearer token; Refresh token"
          }
        ],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    },
    "/auth/refresh-token": {
      "get": {
        "summary": "refreshToken",
        "description": "",
        "operationId": "refreshToken.get./auth/refresh-token",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "header",
            "name": "Authorization",
            "required": true,
            "type": "string",
            "description": "Bearer token; acceessToken"
          }
        ],
        "responses": {
          "200": {
            "description": "After refreshing token user will receive it's data and both tokens (refresh, access)",
            "schema": {
              "$ref": "#/definitions/AuthResponse"
            }
          },
          "400": {
            "description": "User data not found; Token is not valid"
          }
        }
      }
    },
    "/links/get-link/{id}": {
      "get": {
        "summary": "getLink",
        "description": "",
        "operationId": "getLink.get./links/get-link/{id}",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "in": "header",
            "name": "Authorization",
            "required": true,
            "type": "string",
            "description": "Bearer token; acceessToken"
          }
        ],
        "responses": {
          "200": {
            "description": "Will get link data",
            "schema": {
              "$ref": "#/definitions/Link"
            }
          },
          "400": {
            "description": "Link not found"
          }
        }
      }
    },
    "/links/all": {
      "get": {
        "summary": "getLinksList",
        "description": "",
        "operationId": "getLinksList.get./links/all",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "header",
            "name": "Authorization",
            "required": true,
            "type": "string",
            "description": "Bearer token; acceessToken"
          }
        ],
        "responses": {
          "200": {
            "description": "Will get all user's links data",
            "schema": {
              "$ref": "#/definitions/Link"
            }
          }
        }
      }
    },
    "/links/create-link": {
      "post": {
        "summary": "createLink",
        "description": "",
        "operationId": "createLink.post./links/create-link",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "Body required in the request",
            "required": true,
            "schema": {
              "$ref": "#/definitions/CreateLinkArguments"
            }
          },
          {
            "in": "header",
            "name": "Authorization",
            "required": true,
            "type": "string",
            "description": "Bearer token; acceessToken"
          }
        ],
        "responses": {
          "200": {
            "description": "Will get newly created link",
            "schema": {
              "$ref": "#/definitions/Link"
            }
          },
          "400": {
            "description": "Will get an error if data passed to this lambda will not be valid"
          }
        }
      }
    },
    "/links/deactivate-link/{id}": {
      "patch": {
        "summary": "deactivateLink",
        "description": "",
        "operationId": "deactivateLink.patch./links/deactivate-link/{id}",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "in": "header",
            "name": "Authorization",
            "required": true,
            "type": "string",
            "description": "Bearer token; acceessToken"
          }
        ],
        "responses": {
          "200": {
            "description": "Will get deactivated link",
            "schema": {
              "$ref": "#/definitions/Link"
            }
          },
          "400": {
            "description": "Link that might be deactivated not found"
          }
        }
      }
    },
    "/links/visit-link/{id}": {
      "get": {
        "summary": "visitLink",
        "description": "",
        "operationId": "visitLink.get./links/visit-link/{id}",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "Will be redirected to link that was passed as redirection link"
          }
        }
      }
    },
    "/links/delete-link/{id}": {
      "delete": {
        "summary": "deleteLink",
        "description": "",
        "operationId": "deleteLink.delete./links/delete-link/{id}",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "in": "header",
            "name": "Authorization",
            "required": true,
            "type": "string",
            "description": "Bearer token; acceessToken"
          }
        ],
        "responses": {
          "200": {
            "description": "Will get deleted link",
            "schema": {
              "$ref": "#/definitions/Link"
            }
          },
          "400": {
            "description": "Link that might be deleted not found"
          }
        }
      }
    }
  },
  "definitions": {
    "AuthResponse": {
      "properties": {
        "accessToken": {
          "title": "AuthResponse.accessToken",
          "type": "string"
        },
        "refreshToken": {
          "title": "AuthResponse.refreshToken",
          "type": "string"
        },
        "user": {
          "$ref": "#/definitions/UserRes",
          "title": "AuthResponse.user"
        }
      },
      "required": [
        "accessToken",
        "refreshToken",
        "user"
      ],
      "additionalProperties": false,
      "title": "AuthResponse",
      "type": "object"
    },
    "Link": {
      "properties": {
        "id": {
          "title": "Link.id",
          "type": "string"
        },
        "userId": {
          "title": "Link.userId",
          "type": "string"
        },
        "type": {
          "enum": [
            "SINGLE",
            "MULTIPLE"
          ],
          "title": "Link.type",
          "type": "string"
        },
        "active": {
          "title": "Link.active",
          "type": "boolean"
        },
        "redirectLink": {
          "title": "Link.redirectLink",
          "type": "string"
        },
        "visits": {
          "title": "Link.visits",
          "type": "number"
        },
        "expiredAt": {
          "title": "Link.expiredAt",
          "type": "number"
        }
      },
      "required": [
        "id",
        "userId",
        "type",
        "active",
        "redirectLink",
        "visits",
        "expiredAt"
      ],
      "additionalProperties": false,
      "title": "Link",
      "type": "object"
    },
    "IToken": {
      "properties": {
        "userId": {
          "title": "IToken.userId",
          "type": "string"
        },
        "refreshToken": {
          "title": "IToken.refreshToken",
          "type": "string"
        },
        "createdAt": {
          "$ref": "#/definitions/Date",
          "title": "IToken.createdAt"
        },
        "updatedAt": {
          "$ref": "#/definitions/Date",
          "title": "IToken.updatedAt"
        }
      },
      "required": [
        "userId",
        "refreshToken",
        "createdAt",
        "updatedAt"
      ],
      "additionalProperties": false,
      "title": "IToken",
      "type": "object"
    },
    "IUser": {
      "properties": {
        "id": {
          "title": "IUser.id",
          "type": "string"
        },
        "firstName": {
          "title": "IUser.firstName",
          "type": "string"
        },
        "email": {
          "title": "IUser.email",
          "type": "string"
        },
        "password": {
          "title": "IUser.password",
          "type": "string"
        },
        "phone": {
          "title": "IUser.phone",
          "type": "string"
        },
        "address": {
          "properties": {
            "city": {
              "title": "IUser.address.city",
              "type": "string"
            },
            "country": {
              "title": "IUser.address.country",
              "type": "string"
            },
            "street": {
              "title": "IUser.address.street",
              "type": "string"
            }
          },
          "required": [
            "city",
            "country",
            "street"
          ],
          "additionalProperties": false,
          "title": "IUser.address",
          "type": "object"
        }
      },
      "required": [
        "id",
        "firstName",
        "email",
        "password",
        "phone",
        "address"
      ],
      "additionalProperties": false,
      "title": "IUser",
      "type": "object"
    },
    "LoginArguments": {
      "properties": {
        "email": {
          "title": "LoginArguments.email",
          "type": "string"
        },
        "password": {
          "title": "LoginArguments.password",
          "type": "string"
        }
      },
      "required": [
        "email",
        "password"
      ],
      "additionalProperties": false,
      "title": "LoginArguments",
      "type": "object"
    },
    "UserRes": {
      "properties": {
        "firstName": {
          "title": "UserRes.firstName",
          "type": "string"
        },
        "email": {
          "title": "UserRes.email",
          "type": "string"
        },
        "phone": {
          "title": "UserRes.phone",
          "type": "string"
        },
        "address": {
          "properties": {
            "city": {
              "title": "UserRes.address.city",
              "type": "string"
            },
            "country": {
              "title": "UserRes.address.country",
              "type": "string"
            },
            "street": {
              "title": "UserRes.address.street",
              "type": "string"
            }
          },
          "required": [
            "city",
            "country",
            "street"
          ],
          "additionalProperties": false,
          "title": "UserRes.address",
          "type": "object"
        }
      },
      "required": [
        "firstName",
        "email",
        "phone",
        "address"
      ],
      "additionalProperties": false,
      "title": "UserRes",
      "type": "object"
    },
    "RegisterUserArguments": {
      "properties": {
        "user": {
          "$ref": "#/definitions/UserRes",
          "title": "RegisterUserArguments.user"
        }
      },
      "required": [
        "user"
      ],
      "additionalProperties": false,
      "title": "RegisterUserArguments",
      "type": "object"
    },
    "CreateLinkArguments": {
      "properties": {
        "redirectLink": {
          "title": "CreateLinkArguments.redirectLink",
          "type": "string"
        },
        "numberOfDays": {
          "enum": [
            1,
            3,
            7
          ],
          "title": "CreateLinkArguments.numberOfDays",
          "type": "number"
        },
        "type": {
          "enum": [
            "SINGLE",
            "MULTIPLE"
          ],
          "title": "CreateLinkArguments.type",
          "type": "string"
        }
      },
      "required": [
        "redirectLink",
        "numberOfDays",
        "type"
      ],
      "additionalProperties": false,
      "title": "CreateLinkArguments",
      "type": "object"
    },
    "GetAllLinks": {
      "items": {
        "$ref": "#/definitions/Link",
        "title": "GetAllLinks.[]"
      },
      "title": "GetAllLinks.[]",
      "type": "array"
    }
  },
  "securityDefinitions": {},
  "basePath": "/dev",
  "schemes": [
    "http",
    "https"
  ]
};