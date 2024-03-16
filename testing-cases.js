// =============================================
// =============================================
// =============================================
// 測試 SESSION、卡號、充電樁號、充電槍號次
const TESTING_SESSION = "fef583a7-587e-4daa-8eb9-2b2108f5bc55";
const TESTING_ID_TAG = "04B0267AE05C87";
const TESTING_CHARGERID = "EVB-P20261797";
const TESTING_CONNECTORID = 1;

// 測試交易序號
const TESTING_TXID = 12345;

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

// 狀態類別
const STATUS_MAP = {
    // 可使用
    Available: "Available",
	// 準備中
    Preparing: "Preparing",
	// 充電中
    Charging: "Charging",
	// 充電設備停用
    SuspendedEVSE: "SuspendedEVSE",
	// 充電車輛停用
    SuspendedEV: "SuspendedEV",
	// 充電結束中
    Finishing: "Finishing",
	// 已預約
    Reserved: "Reserved",
	// 不可使用
    Unavailable: "Unavailable",
	// 出錯
    Faulted: "Faulted",
}


// =============================================
// =============================================
// =============================================
// 建立測試用資料, from swagger API
// 1. 建立房屋: 【API.16】: SUBJECT-16, 新增房屋【單筆】
const subject = 
{
    "subjectName": "測試OCPP房屋"
}

// 2. 建立住戶綁房屋: 【API.19】: RESIDENT-19, 新增住戶【單筆】
const resident = 
{
    "residentName": "測試OCPP住戶",
    "residentEmail": "測試OCPP住戶",
    "residentPhone": "測試OCPP住戶",
    "residentPackage": "Monthly",
    "residentMemo": "測試",
    "subjectId": "SUB000001"
}

// 3. 建立充電樁: 【API.02】: CHARGER-02, 新增充電樁資料【單筆】
const charger = 
{
    "chargerId": "EVB-P20261797",
    "chargerName": "EVB-P20261797",
    "chargerLocation": "F1",
    "parkingIdList": [
        "123"
    ],
    "chargerType": "AC",
    "chargerGuntype": [
        "Type1"
    ],
    "chargerPower": "10",
    "chargerCurrent": "10",
    "chargerVoltage": "10",
    "chargerPrice": "10",
    "chargerMemo": "測試",
    "chargerSchedulePeriod": "string"
}

// 4. 建立感應卡(用戶卡)(綁房屋、住戶、充電樁): 【API.11】: CARD-11, 新增感應卡資料【單筆】
const card = 
{
    "cardId": "04B0267AE05C87",
    "cardType": "USER",
    "permissionType": "SCOPED",
    "cardPermission": [
        "EVB-P20261797"
    ],
    "residentId": "RES000001",
    "subjectId": "SUB000001"
}



// =============================================
// =============================================
// =============================================


const TEMPLATE = 
[
    2,
    TESTING_SESSION,
    EVENT_MAP.Heartbeat,
    {}
]

// 測試方法 TEMPLATE
/**
 * Test No.X, Procedure X
 * OCPP Message
 * X. XXX
 * 
 * Expect Result: 
 * XXX
 */
function noX_procedureX() {

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
    
    console.log("(CS)msg_0041: \n", msg_0041);
}

// no1_procedure1();
// no1_procedure2();
// no2_procedure2();
// no2_procedure3TO4();
no2_procedure5TO10();
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

/**
 * Test No.2, Procedure 3TO4
 * OCPP Message
 * (準備): 設置`ConnectionTimeOut`為120秒
   3.	Swipe a valid card (#1).
   4.	Don't plug the connector into the car.

   The charger should attempt to start charging and back to "Available" state after 120 seconds.
 */
function no2_procedure3TO4() {
    
    const msg_000 = 
    [
        2,
        TESTING_SESSION,
        'ChangeConfiguration',
        { 
            key: 'ConnectionTimeOut', 
            value: '120' 
        }
    ];
    
    const msg_001 = 
    [
        2,
        TESTING_SESSION,
        EVENT_MAP.Authorize,
        {
            "idTag": 
            TESTING_ID_TAG 
        }
    ]

    const msg_002 = 
    [
        2,
        TESTING_SESSION,
        EVENT_MAP.StatusNotification,
        {
            "connectorId": 1,
            "errorCode": "NoError",
            "status": STATUS_MAP.Preparing,
            "timestamp": "2024-03-08T06:16:38Z",
            "vendorId": "StarCharge"
        }
    ]

    const msg_003 = 
    [
        2,
        TESTING_SESSION,
        EVENT_MAP.StatusNotification,
        {
            "connectorId": 1,
            "errorCode": "NoError",
            "status": STATUS_MAP.Available,
            "timestamp": "2024-03-08T06:16:38Z",
            "vendorId": "StarCharge"
        }
    ]

    
    console.log("(CS)msg_000: \n", msg_000);
    console.log("(CP)msg_002: \n", msg_002);
    console.log("=== 2分鐘後 ===");
    console.log("(CP)msg_003: \n", msg_003);
}


/**
 * Test No.2, Procedure 5TO10
 * OCPP Message
 *  5.	Swipe a valid card (#1).
    6.	Plug the connector into the car.
    7. Wait for the charging started.
    or 
    5.	Plug the connector into the car.
    6.	Swipe a valid card (#1).
    7. Wait for the charging started.

    8. Trigger OCPP server to
        send ChangeConfiguration.req messages.

    10. Unplug the connector from the car.
 * 
 * Expect Result: 
 * The charger should be able to start charging as normal and
    send a MeterValue message every 120 seconds.
 */
function no2_procedure5TO10() {

    const msg_001 = 
    [
        2,
        TESTING_SESSION,
        EVENT_MAP.Authorize,
        {
            "idTag": 
            TESTING_ID_TAG 
        }
    ]

    const msg_002 = 
    [
        2,
        TESTING_SESSION,
        EVENT_MAP.StatusNotification,
        {
            "connectorId": 1,
            "errorCode": "NoError",
            "status": STATUS_MAP.Preparing,
            "timestamp": "2024-03-08T06:16:38Z",
            "vendorId": "StarCharge"
        }
    ]

    const msg_003 = 
    [
        2,
        TESTING_SESSION,
        EVENT_MAP.StartTransaction,
        {
            "connectorId": 1,
            "idTag": TESTING_ID_TAG,
            "meterStart": 86540,
            "timestamp": "2024-03-08T06:29:59Z"
        }
    ]

    const msg_004 = 
    [
        2,
        TESTING_SESSION,
        EVENT_MAP.StatusNotification,
        {
            "connectorId": 1,
            "errorCode": "NoError",
            "status": STATUS_MAP.Charging,
            "timestamp": "2024-03-08T06:27:57Z",
            "vendorId": "StarCharge"
        }
    ]

    const msg_005 = 
    [
        2,
        "fef583a7-587e-4daa-8eb9-2b2108f5bc55",
        "MeterValues",
        {
            "connectorId": 1,
            "transactionId": 12345,
            "meterValue": [
                {
                    "timestamp": "2024-03-08T06:30:00Z",
                    "sampledValue": [
                        {
                            "value": "219.4",
                            "context": "Transaction.Begin",
                            "measurand": "Voltage",
                            "phase": "L1",
                            "location": "Outlet",
                            "unit": "V"
                        },
                        {
                            "value": "0.02",
                            "context": "Transaction.Begin",
                            "measurand": "Current.Import",
                            "phase": "L1",
                            "location": "Outlet",
                            "unit": "A"
                        },
                        {
                            "value": "4",
                            "context": "Transaction.Begin",
                            "measurand": "Power.Active.Import",
                            "location": "Outlet",
                            "unit": "W"
                        },
                        {
                            "value": "0",
                            "context": "Transaction.Begin",
                            "measurand": "SoC",
                            "location": "EV",
                            "unit": "Percent"
                        },
                        {
                            "value": "7000",
                            "context": "Transaction.Begin",
                            "measurand": "Power.Offered",
                            "location": "Outlet",
                            "unit": "W"
                        },
                        {
                            "value": "86540",
                            "context": "Transaction.Begin",
                            "measurand": "Energy.Active.Import.Register",
                            "location": "Outlet",
                            "unit": "Wh"
                        }
                    ]
                }
            ]
        }
    ]

    const msg_006 = 
    [
        2,
        TESTING_SESSION,
        "ChangeConfiguration",
        {
            "key": "HeartbeatInterval",
            "v alue": "30"
        }
    ]

    const msg_006_1 = 
    [
        2,
        TESTING_SESSION,
        "GetConfiguration",
        {
            "key": [
                "HeartbeatInterval"
            ]
        }
    ]

    const msg_007 = 
    [
        2,
        TESTING_SESSION,
        "ChangeConfiguration",
        {
            "key": "ConnectionTimeOut",
            "value": "30"
        }
    ]
    const msg_007_1 = 
    [
        2,
        TESTING_SESSION,
        "GetConfiguration",
        {
            "key": [
                "ConnectionTimeOut"
            ]
        }
    ]

    const msg_008 = 
    [
        2,
        TESTING_SESSION,
        "ChangeConfiguration",
        {
            "key": "MeterValueSampleInterval",
            "value": "30"
        }
    ]
    const msg_008_1 = 
    [
        2,
        TESTING_SESSION,
        "GetConfiguration",
        {
            "key": [
                "MeterValueSampleInterval"
            ]
        }
    ]

    const msg_009 = 
    [
        2,
        TESTING_SESSION,
        EVENT_MAP.StopTransaction,
        {
            "idTag": TESTING_ID_TAG,
            "meterStop": 86550,
            "timestamp": "2024-03-08T06:31:05Z",
            "transactionId": TESTING_TXID,
            "reason": "Local"
        }
    ]
    const msg_009_1 = 
    [
        2,
        TESTING_SESSION,
        EVENT_MAP.StatusNotification,
        {
            "connectorId": 1,
            "errorCode": "NoError",
            "status": STATUS_MAP.Finishing,
            "timestamp": "2024-03-08T06:16:38Z",
            "vendorId": "StarCharge"
        }
    ]
    const msg_009_2 = 
    [
        2,
        TESTING_SESSION,
        EVENT_MAP.StatusNotification,
        {
            "connectorId": 1,
            "errorCode": "NoError",
            "status": STATUS_MAP.Available,
            "timestamp": "2024-03-08T06:16:38Z",
            "vendorId": "StarCharge"
        }
    ]

    console.log("=== 3~4. 驗證 ===");
    console.log("(CS)msg_001: \n", JSON.stringify(msg_001, null, 2));
    console.log("(CS)msg_002: \n", JSON.stringify(msg_002, null, 2));
    console.log("=== 5~6. 插槍 ===");
    console.log("(CS)msg_003: \n", JSON.stringify(msg_003, null, 2));
    console.log("(CS)msg_004: \n", JSON.stringify(msg_004, null, 2));
    console.log("=== 兩分鐘後, 測試 timeout ===");
    console.log("(CP)msg_005: \n", JSON.stringify(msg_005, null, 2));
    console.log("=== 8. 設定測試(1) ===");
    console.log("(CP)msg_006: \n", JSON.stringify(msg_006, null, 2));
    console.log("(CP)msg_006_1: \n", JSON.stringify(msg_006_1, null, 2));
    console.log("=== 8. 設定測試(2) ===");
    console.log("(CP)msg_007: \n", JSON.stringify(msg_007, null, 2));
    console.log("(CP)msg_007_1: \n", JSON.stringify(msg_007_1, null, 2));
    console.log("=== 8. 設定測試(3) ===");
    console.log("(CP)msg_008: \n", JSON.stringify(msg_008, null, 2));
    console.log("(CP)msg_008_1: \n", JSON.stringify(msg_008_1, null, 2));
    console.log("=== 10. 結束交易(拔槍) ===");
    console.log("(CP)msg_009: \n", JSON.stringify(msg_009, null, 2));
    console.log("(CP)msg_009_1: \n", JSON.stringify(msg_009_1, null, 2));
    console.log("(CP)msg_009_2: \n", JSON.stringify(msg_009_2, null, 2));

}


// 測試方法 TEMPLATE
/**
 * Test No.X, Procedure X
 * OCPP Message
 * X. XXX
 * 
 * Expect Result: 
 * XXX
 */
function noX_procedureX() {

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
    
    console.log("(CS)msg_0041: \n", msg_0041);
}