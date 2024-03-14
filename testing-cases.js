// 測試 SESSION
const TESTING_SESSION = "fef583a7-587e-4daa-8eb9-2b2108f5bc55";

// 測試事件類別
const EVENT_MAP = {
    "Authorize": "Authorize",
    "BootNotification": "BootNotification",
    "ChangeAvailability": "ChangeAvailability",
    "ChangeConfiguration": "ChangeConfiguration",
    "ClearCache": "ClearCache",
    "DataTransfer": "DataTransfer",
    "GetConfiguration": "GetConfiguration",
    "Heartbeat": "Heartbeat",
    "MeterValues": "MeterValues",
    "RemoteStartTransaction": "RemoteStartTransaction",
    "RemoteStopTransaction": "RemoteStopTransaction",
    "Reset": "Reset",
    "StartTransaction": "StartTransaction",
    "StatusNotification": "StatusNotification",
    "StopTransaction": "StopTransaction",
    "UnlockConnector": "UnlockConnector",
}


const TEMPLATE = 
[
    2,
    TESTING_SESSION,
    EVENT_MAP.Heartbeat,
    {}
]

// no1_procedure1();
// no1_procedure2();
no2_procedure2();

// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
/**
 * Test No.1, Procedure 1
 * OCPP Message
 * 1. Boot the charger.
 * (OCPP server will send out a GetConfiguration.req message after received a BootNotification.req message)
 */
function no1_procedure1 () {
    const msg_001 = 
    [
        2,
        TESTING_SESSION,
        EVENT_MAP.BootNotification,
        {
            "chargePointVendor": "StarCharge",
            "chargePointModel": "Artemis",
            "chargePointSerialNumber": "1070102601",
            "firmwareVersion": "1.0.0.3b103"
        }
    ]

    const msg_002 = [
        2,
        TESTING_SESSION,
        EVENT_MAP.StatusNotification,
        {
            "connectorId": 1,
            "errorCode": "NoError",
            "status": "Available",
            "timestamp": "2024-03-08T07:23:28Z",
            "vendorId": "StarCharge"
        }
    ]

    const msg_003 = 
    [
        2,
        TESTING_SESSION,
        EVENT_MAP.GetConfiguration,
        {}
    ];

    console.log("(CP)msg_001: \n", msg_001);
    console.log("(CP)msg_002: \n", msg_002);
    console.log("(CS)msg_003: \n", msg_003);

}

/**
 * Test No.2, Procedure 1
 * OCPP Message
 * 1. Trigger OCPP server to send GetConfiguration.req messages.
 */
function no1_procedure2 () {

    const msg_001 = 
    [
        2,
        "message_id",
        "GetConfiguration",
        {
            "key":[]
        }
    ]
    
    const msg_002 = 
    [
        2,
        "message_id",
        "GetConfiguration",
        {
            "key": [
                "HeartbeatInterval",
                "Connect ionTimeOut",
                "MeterValueSa mpleInterval"
            ]
        }
    ]

    const msg_003 = 
    [
        2,
        "message_id",
        "GetConfiguration",
        {
            "key": [
                "HeartbeatInterval"
            ]
        }
    ]

    const msg_004 = 
    [
        2,
        "message_id",
        "GetConfiguration",
        {
            "key": [
                "ConnectionTimeOut"
            ]
        }
    ]

    const msg_005 = 
    [
        2,
        "message_id",
        "GetConfiguration",
        {
            "key": [
                "MeterValueSampleInterval"
            ]
        }
    ]

    console.log("(CS)msg_001: \n", msg_001);
    console.log("(CS)msg_002: \n", msg_002);
    console.log("(CS)msg_003: \n", msg_003);
    console.log("(CS)msg_004: \n", msg_004);
    console.log("(CS)msg_005: \n", msg_005);
}

/**
 * Test No.2, Procedure 2
 * OCPP Message
 * 2. Trigger OCPP server tosend ChangeConfiguration.req messages.
 */
function no2_procedure2() {

    const msg_001 = 
    [
        2,
        "message_id",
        "ChangeConfiguration",
        {
            "key": "HeartbeatInterval",
            "value": "120"
        }
    ]
    
    const msg_002 = 
    [
        2,
        "message_id",
        "GetConfiguration",
        {
            "key": [
                "HeartbeatInterval"
            ]
        }
    ]

    const msg_003 = 
    [
        2,
        "message_id",
        "ChangeConfiguration",
        {
            "key": "ConnectionTimeOut",
            "value": "120"
        }
    ]
    const msg_0031 =
    [
        2,
        "message_id",
        "GetConfigu ration",
        {
            "key": [
                "ConnectionTimeOut"
            ]
        }
    ]


    const msg_004 = 
    [
        2,
        "message_id",
        "ChangeCon figuration",
        {
            "key": "MeterValueSampleInterval",
            "value": "120"
        }
    ]
    const msg_0041 = 
    [
        2,
        "message_id",
        "GetConfigu ration",
        {
            "key": [
                "MeterValueSampleInterval"
            ]
        }
    ]

    console.log("(CS)msg_001: \n", msg_001);
    console.log("(CS)msg_002: \n", msg_002);
    console.log("(CS)msg_003: \n", msg_003);
    console.log("(CS)msg_0031: \n", msg_0031);
    console.log("(CS)msg_004: \n", msg_004);
    console.log("(CS)msg_0041: \n", msg_0041);
}


