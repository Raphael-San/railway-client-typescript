export declare class Account {
    userName: string;
    userPassword: string;
    private checkUserTimer;
    private scptCheckUserTimer;
    private stations;
    private passengers;
    private SYSTEM_BUSSY;
    private SYSTEM_MOVED;
    private request;
    private cookiejar;
    headers: object;
    private TICKET_TITLE;
    private query;
    private orders;
    constructor(name: string, userPassword: string);
    /**
     * 检查网络异常
     */
    private isSystemBussy(body);
    setRequest(): void;
    private nextOrderNum;
    private nextOrder();
    private currentOrder();
    createOrder(trainDates: Array<string>, backTrainDate: string, [fromStationName, toStationName, passStationName]: [any, any, any], planTrains: Array<string>, planPepoles: Array<string>, seatClasses: Array<string>): this;
    orderWaitTime(): void;
    cancelOrderQueue(): void;
    submit(): void;
    private buildAuthFlow(subject, sjNewAppToken?, sjAppToken?);
    private build();
    private buildLoginFlow(observable);
    private sjLfTicketInit;
    private sjQueryLfTicket;
    private sjSmOReqCheckUser;
    private sjSmOrderReq;
    private sjCPasInitDc;
    private sjGetPassengers;
    private sjCheckOrderInfo;
    private sjGetQueueCount;
    private sjGetPassCodeNew;
    private sjConfirmSingle4Q;
    private sjQueryOrderWaitT;
    private buildQueryLeftTicketFlow(observable);
    private buildOrderFlow();
    private buildCheckUserFlow(observable);
    /**
     * 查询列车余票信息
     *
     * @param trainDate 乘车日期
     * @param fromStationName 出发站
     * @param toStationName 到达站
     * @param trainNames 列车
     *
     * @return Promise
     */
    queryLeftTickets(trainDate: string, fromStationName: string, toStationName: string, trainNames: Array<string> | null): Promise<Array<any>>;
    /**
     * 查询列车余票信息
     *
     * @param trainDate 乘车日期
     * @param fromStationName 出发站
     * @param passStationName 途经站
     * @param toStationName 到达站
     *
     * @return void
     */
    passStationTickets(trainDate: string, fromStationName: string, passStationName: string, toStationName: string, trainNames: string): void;
    /**
     * 查询列车余票信息
     *
     * @param trainDate 乘车日期
     * @param fromStationName 出发站
     * @param toStationName 到达站
     * @param trainNames 列车
     *
     * @return void
     */
    leftTickets(trainDate: string, fromStationName: string, toStationName: string, trainNames: string): void;
    private renderTrainListTitle(trains);
    private renderLeftTickets(trains);
    myOrderNoCompleteReport(): void;
    loginInit(): Promise<void>;
    private getCaptcha();
    private questionCaptcha();
    private checkCaptcha();
    private userAuthenticate();
    private getNewAppToken();
    private getMy12306();
    private checkAuthentication(cookies);
    /**
     *
     */
    private getAppToken(newapptk);
    private leftTicketInit();
    private queryLeftTicket(trainDate);
    private checkUser();
    private submitOrderRequest({trainSecretStr, trainDate, backTrainDate, fromStationName, toStationName});
    private confirmPassengerInitDc();
    private getPassengers(token);
    private getPassengerTickets(passengers, planPepoles);
    private getOldPassengers(passengers, planPepoles);
    private checkOrderInfo(submitToken, passengers, planPepoles);
    private getQueueCount(token, orderRequestDTO, ticketInfo);
    private getPassCodeNew();
    private checkRandCodeAnsyn();
    private confirmSingleForQueue(token, passengers, ticketInfoForPassengerForm, planPepoles);
    private queryOrderWaitTime(token);
    private cancelQueueNoCompleteOrder();
    private initNoComplete();
    myOrderNoComplete(): void;
    private queryMyOrderNoComplete();
}
