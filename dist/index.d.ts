import connectWallet from './connect';
import disconnectWallet from './disconnect';
import setChain from './chain';
import type { InitOptions } from './types';
import { updateAccountCenter, updateNotify, customNotification, setLocale, setPrimaryWallet, setWalletModules } from './store/actions';
import updateBalances from './update-balances';
import { preflightNotifications } from './preflight-notifications';
declare const API: {
    connectWallet: typeof connectWallet;
    disconnectWallet: typeof disconnectWallet;
    setChain: typeof setChain;
    state: {
        get: () => import("./types").AppState;
        select: {
            (): import("rxjs").Observable<import("./types").AppState>;
            <T extends keyof import("./types").AppState>(stateKey: T): import("rxjs").Observable<import("./types").AppState[T]>;
        };
        actions: {
            setWalletModules: typeof setWalletModules;
            setLocale: typeof setLocale;
            updateNotify: typeof updateNotify;
            customNotification: typeof customNotification;
            preflightNotifications: typeof preflightNotifications;
            updateBalances: typeof updateBalances;
            updateAccountCenter: typeof updateAccountCenter;
            setPrimaryWallet: typeof setPrimaryWallet;
        };
    };
};
export declare type OnboardAPI = typeof API;
export type { InitOptions, ConnectOptions, DisconnectOptions, WalletState, ConnectedChain, AccountCenter, AppState, CustomNotification, Notification, Notify, UpdateNotification, PreflightNotificationsOptions } from './types';
export type { EIP1193Provider } from '@web3-onboard/common';
declare function init(options: InitOptions): OnboardAPI;
export default init;
