interface GlobalStoreState {
  isLoading: boolean;
  isFlowFetching: boolean;
  fetchResult: boolean;
  bottomSafeArea: number;
  isDarkMode: boolean;
  env: ENV;
  isSimpleMode: boolean;
  isLeftRight: boolean;
  isIconColor: boolean;
  isEditorCommon: boolean;
  isSimpleReicon: boolean;
  showFloatingRefreshButton: boolean;
  istabBar: boolean;
  istabBar2: boolean;
  ishostApi: string;
}

interface ENV {
  hasNewVersion?: boolean;
  latestVersion?: string;
  version?: string;
  backend?:
    | 'sing-box'
    | 'Stash'
    | 'QX'
    | 'Loon'
    | 'Surge'
    | 'ShadowRocket'
    | 'Clash'
    | 'ClashMeta'
    | 'V2Ray'
    | 'Node';
}
