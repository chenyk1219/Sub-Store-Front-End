import { defineStore } from 'pinia';
import { useEnvApi } from '@/api/env';
import { initStores } from '@/utils/initApp';
import service from '@/api';
import { getHostAPIUrl } from '@/hooks/useHostAPI';

const envApi = useEnvApi();

export const useGlobalStore = defineStore('globalStore', {
  state: (): GlobalStoreState => {
    return {
      isLoading: true,
      isFlowFetching: true,
      fetchResult: false,
      bottomSafeArea: 0,
      isDarkMode: false,
      env: {},
      isSimpleMode: localStorage.getItem('isSimpleMode') === '1',
      isLeftRight: localStorage.getItem('isLr') === '1',
      isIconColor: localStorage.getItem('iconColor') === '1',
      isEditorCommon: localStorage.getItem('iseditorCommon') !== '1',
      isSimpleReicon: localStorage.getItem('isSimpleReicon') === '1',
      showFloatingRefreshButton: localStorage.getItem('showFloatingRefreshButton') === '1',
      istabBar: localStorage.getItem('istabBar') === '1',
      istabBar2: localStorage.getItem('istabBar2') === '1',
      ishostApi: getHostAPIUrl(),
    };
  },
  getters: {},
  actions: {
    setBottomSafeArea(height: number) {
      this.bottomSafeArea = height;
    },
    setLoading(isLoading: boolean) {
      this.isLoading = isLoading;
    },
    setFlowFetching(isFlowFetching: boolean) {
      this.isFlowFetching = isFlowFetching;
    },
    setFetchResult(fetchResult: boolean) {
      this.fetchResult = fetchResult;
    },
    setDarkMode(isDarkMode: boolean) {
      this.isDarkMode = isDarkMode;
    },
    setSimpleMode(isSimpleMode: boolean) {
      if (isSimpleMode) {
        localStorage.setItem('isSimpleMode', '1');
      } else {
        localStorage.removeItem('isSimpleMode');
      }
      this.isSimpleMode = isSimpleMode;
    },
    setLeftRight(isLr: boolean) {
      if (isLr) {
        localStorage.setItem('isLr', '1');
      } else {
        localStorage.removeItem('isLr');
      }
      this.isLeftRight = isLr;
    },
    setIconColor(iconColor: boolean) {
      if (iconColor) {
        localStorage.setItem('iconColor', '1');
      } else {
        localStorage.removeItem('iconColor');
      }
      this.isIconColor = iconColor;
    },
    setEditorCommon(isEditorCommon: boolean) {
      if (!isEditorCommon) {
        localStorage.setItem('iseditorCommon', '1');
      } else {
        localStorage.removeItem('iseditorCommon');
      }
      this.isEditorCommon = isEditorCommon;
    },
    setSimpleReicon(isSimpleReicon: boolean) {
      if (isSimpleReicon) {
        localStorage.setItem('isSimpleReicon', '1');
      } else {
        localStorage.removeItem('isSimpleReicon');
      }
      this.isSimpleReicon = isSimpleReicon;
    },
    setShowFloatingRefreshButton(showFloatingRefreshButton: boolean) {
      if (showFloatingRefreshButton) {
        localStorage.setItem('showFloatingRefreshButton', '1');
      } else {
        localStorage.removeItem('showFloatingRefreshButton');
      }
      this.showFloatingRefreshButton = showFloatingRefreshButton;
    },
    settabBar(istabBar: boolean) {
      if (istabBar) {
        localStorage.setItem('istabBar', '1');
      } else {
        localStorage.removeItem('istabBar');
      }
      this.istabBar = istabBar;
    },
    settabBar2(istabBar2: boolean) {
      if (istabBar2) {
        localStorage.setItem('istabBar2', '1');
      } else {
        localStorage.removeItem('istabBar2');
      }
      this.istabBar2 = istabBar2;
    },
    async setHostAPI(hostApi: string) {
      this.ishostApi = hostApi;
      service.defaults.baseURL = hostApi;
      await initStores(true, true, true);
    },
    async setEnv() {
      const res = await envApi.getEnv();
      if (res?.data?.status === 'success') {
        this.env = res.data.data;
      }
    },
  },
});
